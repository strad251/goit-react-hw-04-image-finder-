import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './Searchbar.module.css'


export const Searchbar = ({handleSubmit}) => {
  const [query, setQuery] = useState('');

const handleInput = (event) => {
    setQuery(event.target.value);
  }
const onSubmitForm = (event) => {
    event.preventDefault();
    if (!query) {
      return
    }
    handleSubmit(query);
    event.target.reset();
}

    return (
      <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={onSubmitForm}>
      <button className={css.SearchBtn} type="submit"></button>
      <input className={css.SearchInput} type="text"
      placeholder="Search images and photos"
      onChange={handleInput} />
      </form>
      </header>
  )
  }


Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};