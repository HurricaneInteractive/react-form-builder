import React from "react"

const Message = (props) => {
  const { html, ...attrs } = props

  if (typeof html === "string") {
    return <p dangerouslySetInnerHTML={{ __html: html }} {...attrs} />
  }
  else if (typeof html === "function") {
    const Component = html
    return <Component {...attrs} />
  }
  else if (React.isValidElement(html)) {
    return html
  }

  return <></>
}

export default Message
