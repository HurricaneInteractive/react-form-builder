import string from "./string"

const number = (props = {}) => {
  return string({
    type: "number",
    default: 0,
    ...props
  })
}

export default number
