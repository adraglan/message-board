import YouTube from "react-youtube"

const YouTubeElement = (props) => {
    const {attributes, children, element} = props 
    const {youtubeId} = element 
  
    return (
      <div {...attributes}>
        <div contentEditable={false}>
          <YouTube
            videoId={youtubeId}/>
        </div>
      </div>
    )
  }

export default YouTubeElement