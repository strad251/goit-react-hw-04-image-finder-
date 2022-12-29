import { Component } from "react";
import { sendRequest } from "Service/apiService";

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGalley/ImageGallery";
import { Modal } from "./Modal/Modal";
import { Loader } from "./Loader/Loader";

import css from './App.module.css'

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    largeImgUrl: '',
    error: null,
    showBtn: false,
    isLoading: false,
  }
   componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.setState({ isLoading: true });

      sendRequest(this.state.query, this.state.page).then(
        data => {
          this.setState(prevState => {
          return{images: [...prevState.images, ...data.hits], showBtn: this.state.page < Math.ceil(data.totalHits / 12)}
        }).catch(error => this.setState({ error: error.message }))
      }).finally(() => this.setState({ isLoading: false }));
  }
}
  handleSubmit = query => {
    this.setState({
      query,
      page: 1,
      images: [],
      largeImgUrl: '',
      error: null,
      showBtn: false,
      isLoading: false,
    })
  };
  
  incrementPage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    }
    )
  }
    onImageClick = largeImg => {
    this.setState({ largeImgUrl: largeImg });
  };

  render() {
    const { images, largeImgUrl, isLoading, error } = this.state;
    const hasLargeImgUrl = largeImgUrl.length > 0;
    return (
        <>
        <Searchbar handleSubmit={this.handleSubmit} />
        {error && <p>Something wrong! {error}</p>}
        {isLoading && <Loader />}
        {images?.length > 0 && (
          <ImageGallery photos={images} onImageClick={this.onImageClick} />
        )}
        {this.state.showBtn && (
        <button className={css.LoadMoreBtn} type="button" onClick={this.incrementPage}>
        Load more
        </button>
        )}
        {hasLargeImgUrl && (
          <Modal largeImgUrl={largeImgUrl} onImageClick={this.onImageClick} />
        )}
        </>
      )
  }

};
