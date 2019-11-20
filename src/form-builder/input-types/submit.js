const submit = (props) => {
  props = props ? props : {}

  return {
    type: "submit",
    value: props.value || "Submit"
  }
}

export default submit
