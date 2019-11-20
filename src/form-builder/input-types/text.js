import Textarea from "../components/textarea"

const text = (props) => {
  props = props ? props : {}

  return {
    component: Textarea,
    default: props.value || "",

    ...props
  }
}

export default text
