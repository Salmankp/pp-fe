import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import VideoYoutubeEmbed from '../../Common/VideoYoutubeEmbed'

const VideoModal = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header className='border-0' closeButton></Modal.Header>
      <Modal.Body>
        <VideoYoutubeEmbed embedId='5LMS0PIzGh8' />
      </Modal.Body>
    </Modal>
  )
}

export default VideoModal
