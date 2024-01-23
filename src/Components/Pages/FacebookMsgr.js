import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg = () => {
  return (
    <FacebookProvider appId="3360242857597680" chatSupport>
        <CustomChat pageId="116519190474616" minimized={true}/>
    </FacebookProvider>  
  )
}

export default FacebookMsg