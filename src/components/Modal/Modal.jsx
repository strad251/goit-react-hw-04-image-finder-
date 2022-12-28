import { Component } from 'react';

import css from './Modal.module.css'

export class Modal extends Component {

   handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      this.props.onImageClick('');
    }
  };
  
  modalOpened() {
    window.addEventListener('keydown', this.handleKeyDown)
    console.log('escape')
  }
  modalClosed() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onImageClick('');
    }
  };

  render() {
    return (
      <div onClick={this.handleBackdrop} className={css.Overlay}>
        <div className={css.Modal}>
          <img src={this.props.largeImgUrl} alt="" />
        </div>
      </div>
    )
  }
}