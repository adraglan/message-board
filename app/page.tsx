import SendButton from "../components/SendButton"
import MessageList from "../components/MessageList"
import NewMessage from "../components/NewMessage"

import MessageProvider from "./context/MessageContext"

export default function Page() {
    return (
        <>
        <MessageProvider>
            <NewMessage/>
            <SendButton/>
        </MessageProvider>
        <MessageList/>
        </>
    )
  }
