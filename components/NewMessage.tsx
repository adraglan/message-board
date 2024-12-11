"use client"

import React, { useState, useCallback } from 'react'
import { Slate, Editable, withReact, ReactEditor } from 'slate-react'
import { BaseEditor, Descendant, createEditor, Editor, Element, Transforms } from 'slate'

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

const initialValue: Descendant[] = [
    {
      type: 'paragraph',
      children: [{ text: 'Placeholder' }],
    },
  ]

const CustomEditor = {
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
    const [editor] = useState(() => withReact(createEditor()))

    const renderElement = useCallback((props) => {
      switch (props.element.type) {
        case 'code': 
          return <CodeElement {...props}/>
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
            CustomEditor.toggleCodeBlock(editor)
          }}>
            Code Block
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
        renderElement={renderElement}
        renderLeaf={renderLeaf}/>
      </Slate>
    )
}

export default NewMessage