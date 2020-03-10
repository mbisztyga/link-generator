import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import SearchBar from './SearchBar'
import ShortenedLinkDisplay from './ShortenedLinkDisplay'
import ExternalWebsiteDisplay from './ExternalWebsiteDisplay'
import FrameDisplay from './FrameDisplay'

const rebrandlyClient = require("../api/rebrandly.js")

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fetchedShortLink: null,
      invalidInputState: null,
      destinationLink: null 
    }

    this.onSearchSubmit = this.onSearchSubmit.bind(this)
  }
    
  linkDef = (params) => (
    {
      destination: params
    }
  )

  onError = (err) => console.log(JSON.stringify(err))

  onLinkCreated = (link) => {
    if(!link.destination) {
      this.setState({invalidInputState: 'Please enter a valid link'})
    } else {
      this.setState({fetchedShortLink: link.shortUrl})
      this.setState({destinationLink: link.destination})
    }   
  }

  onSearchSubmit (params) {
    rebrandlyClient.createNewLink(this.linkDef(params), this.onLinkCreated, this.onError);
  };


  render () {
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/">
            <SearchBar onInputSubmit={this.onSearchSubmit} />
            { 
              this.state.fetchedShortLink && 
              <ShortenedLinkDisplay fetchedLink={this.state.fetchedShortLink} hrefLink={this.state.destinationLink}/>
            }
            {
              this.state.invalidInputState && !this.state.fetchedShortLink && !this.state.destinationLink &&
              <ShortenedLinkDisplay err={this.state.invalidInputState}/>
            }
            </Route>
            <Route path="/frame" exact component={FrameDisplay}/>
          </Switch>
        </BrowserRouter>  
      </div>
    )
  }
}

export default App