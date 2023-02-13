import React from 'react'
import Classes from './style.module.scss'

const VideoYoutubeEmbed = ({ embedId }) => {
  return (
    <div className={Classes.videoResponsive}>
      <iframe
        src={`https://www.youtube.com/embed/${embedId}?autoplay=0`}
        allow='autoplay; encrypted-media'
        title='video'
      />
    </div>
  )
}

export default VideoYoutubeEmbed
