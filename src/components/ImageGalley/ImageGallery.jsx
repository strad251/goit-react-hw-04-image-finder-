import PropTypes from 'prop-types';

import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import css from './ImageGallery.module.css'
export const ImageGallery = ({ photos, onImageClick }) => {
  return (
    <ul className={css.gallery}>
      {photos.map(({ id, webformatURL, largeImageURL }) =>
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          onImageClick={onImageClick}
        />
      )}
    </ul>
  )
};

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onImageClick: PropTypes.func.isRequired
}

