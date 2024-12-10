import { Editor } from "../components/Editor"

export default function Page() {
    return (
        <>
            <Editor/>
            <button type="button">Send!</button>
            <div>Messages</div>
        </>
    )
  }