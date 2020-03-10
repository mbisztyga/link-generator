import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
  state = {longURL: ''}

  onInputChange = (event) => {
    this.setState({longURL: event.target.value})
    console.log(this.state)
  }

  onFormSubmit = event => {
    event.preventDefault(); 
    this.props.onInputSubmit(this.state.longURL)
  };
 
  render () {
    return(
      <div className="ui center aligned segment">
          <h1 className="ui teal header">
            <div className="content">
              Link Shortener
            </div>
          </h1>
          <form onSubmit={this.onFormSubmit} className="ui large form">           
              <div className="field">
                <div className='ui action left icon input'>
                  <i className="icon search"/>
                  <input 
                    type="text"
                    onChange={this.onInputChange}
                    placeholder="Paste long URL here"
                  />       
                  <button className="ui large teal submit button">Shorten your link!</button>   
                </div>
              </div>           
          </form>
      </div>
    )
  }
}

export default SearchBar