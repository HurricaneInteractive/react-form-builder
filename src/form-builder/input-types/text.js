import Textarea from "../components/textarea"

const text = (props = {}) => {
  return {
    typeof: 'text',
    component: Textarea,
    default: props.value || "",

    ...props
  }
}

export default text
