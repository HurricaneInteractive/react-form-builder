const submit = (props = {}) => {
  return {
    typeof: 'submit',
    type: "submit",
    value: props.value || "Submit"
  }
}

export default submit
