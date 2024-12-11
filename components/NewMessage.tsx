"use client"

import React, { useState, useCallback } from 'react'
import { Slate, Editable, withReact, ReactEditor } from 'slate-react'
import { BaseEditor, Descendant, createEditor, Editor, Element, Transforms } from 'slate'
import withEmbeds from '../app/utils/withEmbeds'
import YouTubeElement from './YoutubeElement'

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

const initialValue= [
    {
      type: 'paragraph',
      children: [{ text: 'Placeholder' }],
    },
  ]
        
const embedRegexes = [
  {
    regex: /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/,
    type: 'youtube'
  }
]

const CustomEditor = {
  handleEmbed(editor, event) {
    const text = event.clipboardData.getData('text/plain')

    embedRegexes.some(({regex, type}) => {
      const match = text.match(regex)
      if (match) {
        console.log('match', type, match[1])
        event.preventDefault()

        const url = text
        Transforms.insertNodes(editor, {
          children: [{text}],
          type,
          youtubeId: match[1],
        })
        return true
      }

      return false
    })
  },

  handlePaste(editor, event) {
    CustomEditor.handleEmbed(editor, event)
    console.log('onPaste', event.clipboardData.getData('text/plain'))
  },

  isBoldMarkActive(editor) {
    const marks = Editor.marks(editor)
    return marks ? marks.bold === true : false
  },
  
  isCodeBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n=> n.type === 'code'
    })

    return !!match
  },

  toggleBoldMark(editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor)
    if (isActive) {
      Editor.removeMark(editor, 'bold')
    } else {
      Editor.addMark(editor, 'bold', true)
    }
  },

  toggleCodeBlock(editor) {
    const isActive = CustomEditor.isCodeBlockActive(editor)
    Transforms.setNodes(
      editor,
      {type: isActive ? null : 'code'},
      {match: n=> Element.isElement(n) && Editor.isBlock(editor, n)},
    )
  },
}

const CodeElement = props => (
  <pre {...props.attributes} style={{backgroundColor: 'black', color: 'white'}}>
    <code>{props.children}</code>
  </pre>
)

const CustomImage = props => (
  <img {...props.attributes} src={props.element.url} alt="img"/>
)

const DefaultElement = props => (
  <p {...props.attributes}>{props.children}</p>
)

const Leaf = props => (
  <span
    {...props.attributes}
    style={{fontWeight: props.leaf.bold ? 'bold' : 'normal'}}>
      {props.children}
    </span>
)

const NewMessage = () => {
    const [editor] = useState(() => withEmbeds(withReact(createEditor())))

    const renderElement = useCallback((props) => {
      switch (props.element.type) {
        case 'code': 
          return <CodeElement {...props}/>
        case 'image':
          return <CustomImage {...props}/>
        case 'youtube':
          return <YouTubeElement {...props}/>
        default:
          return <DefaultElement {...props}/>
      }
    }, [])

    const renderLeaf = useCallback(props => <Leaf {...props}/>, [])

    return (
      <Slate
      editor={editor}
      initialValue={initialValue}
      onChange={(value) => {
        const isAstChange = editor.operations.some(
          op => op.type !== 'set_selection',
        )

        if (isAstChange) {
          // Save value to local storage
          const content = JSON.stringify(value)
          localStorage.setItem('content', content)
        }
      }}>

        <div>
          <button type="button"
          onMouseDown={(event) => {
            event.preventDefault()
            CustomEditor.toggleBoldMark(editor)
          }}>
            Bold
          </button>

          <button type="button"
          onMouseDown={(event) => {
            event.preventDefault()
            CustomEditor.toggleItalic(editor)
          }}>
            Italic
          </button>

          <button type="button"
          onMouseDown={(event) => {
            event.preventDefault()
            CustomEditor.toggleLink(editor)
          }}>
            Link
          </button>

          <button type="button"
          onMouseDown={(event) => {
            event.preventDefault()
            CustomEditor.toggleNumberedList(editor)
          }}>
            Numbered List
          </button>

          <button type="button"
          onMouseDown={(event) => {
            event.preventDefault()
            CustomEditor.toggleBullets(editor)
          }}>
            Bullet 
          </button>

          <button type="button"
          onMouseDown={(event) => {
            event.preventDefault()
            CustomEditor.toggleH1(editor)
          }}>
            H1
          </button>

          <button type="button"
          onMouseDown={(event) => {
            event.preventDefault()
            CustomEditor.toggleH2(editor)
          }}>
            H2
          </button>

          <button type="button"
          onMouseDown={(event) => {
            event.preventDefault()
            CustomEditor.toggleImage(editor)
          }}>
            Image
          </button>

          <button type="button"
          onMouseDown={(event) => {
            event.preventDefault()
            console.log(editor.children)
          }}>
            Save
          </button>

        </div>

        <Editable
        onChange={(value) => {
          console.log('onChange', value)
        }}
        onKeyDown={(event) => {
          if (!event.ctrlKey) {
            return
          }

          // Replace 'onKeyDown' logic with our own commands
          switch (event.key) {
            case '`': {
              event.preventDefault()
              CustomEditor.toggleCodeBlock(editor)
              break
            }

            case 'b': {
              event.preventDefault()
              CustomEditor.toggleBoldMark(editor)
              break
            }
          }
        }}
        onPaste={(event) => {
          CustomEditor.handlePaste(editor, event)
        }}
        renderElement={renderElement}
        renderLeaf={renderLeaf}/>
      </Slate>
    )
}

export default NewMessage