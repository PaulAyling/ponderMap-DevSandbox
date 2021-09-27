import React  from 'react'
import { ExternalLink } from 'react-external-link'; 

function Link() {
    return (
        <div>
        <ExternalLink href="https://google.com">
          <span>Visit the site</span>
        </ExternalLink>
      </div>
    )
}

export default Link
