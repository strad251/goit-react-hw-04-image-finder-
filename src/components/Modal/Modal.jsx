import PropTypes from 'prop-types';
import { useEffect } from 'react';



import css from './Modal.module.css'

export const Modal = ({onImageClick, largeImgUrl}) => {

  useEffect(() => { 
    const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onImageClick('');
    }
  };
    window.addEventListener('keydown', handleKeyDown)
    return () =>   window.removeEventListener('keydown', handleKeyDown)
  }, [onImageClick])  

  
  const handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      onImageClick('');
    }
  };
  

    return (
      <div onClick={handleBackdrop} className={css.Overlay}>
        <div className={css.Modal}>
          <img src={largeImgUrl} alt="" />
        </div>
      </div>
    )
  }


Modal.propTypes = {
  onImageClick: PropTypes.func.isRequired,
};