import string from "./string"

const number = (props) => {
  props = props ? props : {}
  return string({type: "number", ...props})
}

export default number
