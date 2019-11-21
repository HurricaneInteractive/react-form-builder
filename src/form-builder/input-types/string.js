import Input from "../components/input"

const string = (props = {}) => {
  let structure = {
    typeof: 'string',
    component: Input,
    default: props.value || "",
    type: "text",

    ...props
  }

  return structure
}

export default string
