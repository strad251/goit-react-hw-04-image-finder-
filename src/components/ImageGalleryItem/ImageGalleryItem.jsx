export const ImageGalleryItem = ({  webformatURL,
  largeImageURL, onImageClick}) => {
  return (
    <li>
      <img
        src={webformatURL}
        alt="your query"
        
        onClick={() => onImageClick(largeImageURL)} />
    </li>
  )
}