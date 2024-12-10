import Editor from "../components/Editor"
import MessageList from "../components/MessageList"

export default function Page() {
    return (
        <>
            <Editor/>
            <button type="button">Send!</button>
            <MessageList/>
        </>
    )
  }