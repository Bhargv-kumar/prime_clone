import './index.css'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {eachItem} = props
  return (
    <div>
      <Popup
        modal
        trigger={
          <button className="trigger-button" type="button">
            <img
              src={eachItem.thumbnailUrl}
              className="thumbnail-img"
              alt="thumbnail"
            />
          </button>
        }
      >
        {close => (
          <div className="trailer-container">
            <IoMdClose
              className="close-icon"
              onClick={close}
              data-testid="closeButton"
            />
            <ReactPlayer
              url={eachItem.videoUrl}
              controls
              width="95%"
              height="95%"
            />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
