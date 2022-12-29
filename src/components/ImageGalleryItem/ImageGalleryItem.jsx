import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ webformatURL,
  largeImageURL, onImageClick}) => {
  return (
    <li>
      <img
        className={css.image}
        src={webformatURL}
        alt="your query"
        onClick={() => onImageClick(largeImageURL)} />
    </li>
  )
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

