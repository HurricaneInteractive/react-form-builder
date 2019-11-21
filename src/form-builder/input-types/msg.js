import Message from "../components/message"

const msg = (html, props = {}) => {
  return {
    typeof: 'msg',
    component: Message,
    html,
    ...props
  }
}

export default msg
