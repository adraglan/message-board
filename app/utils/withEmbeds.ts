const withEmbeds = (editor) => {
    const {insertData, isInline, isVoid} = editor 

    editor.insertData = (data) => {
        return insertData(data)
    }

    return editor
}

export default withEmbeds