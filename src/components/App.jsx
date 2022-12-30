import { sendRequest } from "Service/apiService";

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGalley/ImageGallery";
import { Modal } from "./Modal/Modal";
import { Loader } from "./Loader/Loader";

import css from './App.module.css'
import { useState } from "react";
import { useEffect } from "react";

export const App = () => {
const [query, setQuery] = useState('');
const [page, setPage] = useState('');
const [images, setImages] = useState([]);
const [largeImgUrl, setlargeImgUrl] = useState('');
const [error, setError] = useState(null);
const [showBtn, setBtn] = useState(false);
const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!query) return;
    setIsLoading(true)
    sendRequest(query, page).then(data => {
      setImages(prevState => [...prevState, ...data.hits])
      setBtn(page < Math.ceil(data.totalHits / 12))
    }).catch(error => setError(error.message)).finally(() => setIsLoading(false))
  }, [page, query]);


  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setlargeImgUrl('');
    setError(null);
    setBtn(false);
    setIsLoading(false);
  };
  
  const incrementPage = () => {
    setPage((prevPage) => prevPage + 1);
  }
  const onImageClick = largeImg => {
    setlargeImgUrl(largeImg)
  };


    const hasLargeImgUrl = largeImgUrl.length > 0;
    return (
        <>
        <Searchbar handleSubmit={handleSubmit} />
        {error && <p>Something went wrong! {error}</p>}
        {isLoading && <Loader />}
        {images?.length > 0 && (
          <ImageGallery photos={images} onImageClick={onImageClick} />
        )}
        {showBtn && (
        <button className={css.LoadMoreBtn} type="button" onClick={incrementPage}>
        Load more
        </button>
        )}
        {hasLargeImgUrl && (
          <Modal largeImgUrl={largeImgUrl} onImageClick={onImageClick} />
        )}
        </>
      )
  

};
