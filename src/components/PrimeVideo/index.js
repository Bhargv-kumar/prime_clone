import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props

  return (
    <div className="prime-bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        className="prime-img"
        alt="prime video"
      />
      <MoviesSlider moviesList={moviesList} theme="Action" moviesId="ACTION" />
      <MoviesSlider moviesList={moviesList} theme="Comedy" moviesId="COMEDY" />
    </div>
  )
}

export default PrimeVideo
