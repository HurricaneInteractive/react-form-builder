import React, { useState } from "react"
import Form from "./components/form"
import constructState from "./utils/construct-state"

const FormBuilder = ({ structure, events }) => {
  const [state, setState] = useState(constructState(structure))

  const onFormSubmit = () => {
    if (events.submit) {
      events.submit(state)
    }
  }

  const onInputChange = (e) => {
    const { target: { name, value } } = e

    setState(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (events.change) {
      events.change(state)
    }
  }

  return {
    render: () => (
      <Form
        structure={structure}
        state={state}
        onSubmit={() => onFormSubmit()}
        onChange={(e) => onInputChange(e)}
      />
    ),
    state
  }
}

export default FormBuilder
