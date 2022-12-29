import css from './Searchbar.module.css'
import { Component } from "react"

export class Searchbar extends Component {
  state = {
    query: ''
  }

  setQuery = (event) => {
    this.setState({query: event.target.value})
  }
  onSubmitForm = (event) => {
    event.preventDefault();
    if (!this.state.query) {
      return
    }
    this.props.handleSubmit(this.state.query);
    event.target.reset();
}
  render() {
    return (
      <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={this.onSubmitForm}>
      <button className={css.SearchBtn} type="submit"></button>
      <input className={css.SearchInput} type="text"
      placeholder="Search images and photos"
      onChange={this.setQuery} />
      </form>
      </header>
  )
  }
 
}