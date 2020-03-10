import React from 'react'
import ExternalWebsiteDisplay from './ExternalWebsiteDisplay'

const ShortenedLinkDisplay = (props) => {
  return (
    <div className="ui center aligned teal header">
      <h1>
        <a href={props.hrefLink}>
        {
          !props.err &&
          `Here is your link: ${props.fetchedLink}`
        }
        {
          props.err &&
          <div> 
            {props.err} 
          </div>
        }
        </a>
      </h1>
      <ExternalWebsiteDisplay hrefLink={props.hrefLink}/>
    </div>
  )
}


// class ResultDisplay extends React.Component {


//   render() {
//     return(
//       <div>

//       </div>
//     )
//   }
// }

export default ShortenedLinkDisplay
