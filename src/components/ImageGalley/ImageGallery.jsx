import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ photos, onImageClick }) => {
  return (
    <ul>
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
}

