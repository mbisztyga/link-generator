import React from 'react'

const iframeStyle = {
  width: '100%',
  height: '73vh'
}

const ExternalWebsiteDisplay = (props) => {
  return(
    <div>
      <iframe frameBorder="0" title="x" src={props.hrefLink} style={iframeStyle}/>
    </div>
  )
}

export default ExternalWebsiteDisplay