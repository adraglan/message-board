import Editor from "../components/Editor"
import SendButton from "../components/SendButton"
import MessageList from "../components/MessageList"

import MessageProvider from "./context/MessageContext"

export default function Page() {
    return (
        <>
        <MessageProvider>
            <Editor/>
            <SendButton/>
        </MessageProvider>
        <MessageList/>
        </>
    )
  }
