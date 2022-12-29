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