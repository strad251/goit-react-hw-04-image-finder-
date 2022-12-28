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
    <form onSubmit={this.onSubmitForm}>
      <input type="text"
      placeholder="Search images and photos"
      onChange={this.setQuery} />
      <button type="submit">Search</button>
    </form>
  )
  }
 
}