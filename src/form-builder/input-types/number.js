import Input from "../components/input"

const number = (props = {}) => {
  let structure = {
    typeof: 'string',
    component: Input,
    default: props.value || 0,
    type: "number",

    ...props
  }

  return structure
}

export default number
