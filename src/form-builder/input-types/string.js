import Input from "../components/input"

const string = (props) => {
  props = props ? props : {}

  let structure = {
    component: Input,
    default: props.value || "",
    type: "text",

    ...props
  }

  return structure
}

export default string
