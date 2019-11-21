import React from "react"

const Message = (props) => {
  const { html, ...attrs } = props

  return <p dangerouslySetInnerHTML={{ __html: html }} {...attrs} />
}

export default Message
