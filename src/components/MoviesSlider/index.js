import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {theme, moviesList, moviesId} = props
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div className="movies-container">
      <h1>{theme} Movies</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {moviesList.map(
            eachItem =>
              eachItem.categoryId === moviesId && (
                <MovieItem eachItem={eachItem} key={eachItem.id} />
              ),
          )}
        </Slider>
      </div>
    </div>
  )
}

export default MoviesSlider
