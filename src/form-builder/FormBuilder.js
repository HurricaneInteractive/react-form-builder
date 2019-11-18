import React from "react"
import Form from "./components/form"
import Input from "./components/input"

// import FormBuilder, { string, number, msg, submit } from "form-builder"

// const form = FormBuilder({
//   structure: {
//     name: string(),
//     email: string({ type: "email" }),
//     age: number(),
//     tooYoungMessage: msg().when('age', '<', 18),
//     // optional
//     submit: submit("Send email")
//   },
//   events: {
//     submit: (e, state) => {},
//     change: (e, details) => {}
//   },
//   components: {
//     input: CustomInput,
//     submit: CustomSubmit
//   }
// })

// returns a method

// const Newsletter = () => ( <div>{form()}</div> )

// string -> input
// string.email -> input[type="email"]
// string.large -> textarea
// number -> input[type="number"]
// msg -> p
// submit -> input[type="submit"]

export const string = (props) => {
  props = props ? props : {}

  let structure = {
    component: Input,
    default: props.value || "",
    type: "text",

    ...props
  }

  return structure
}

export const number = (props) => {
  props = props ? props : {}
  return string({type: "number", ...props})
}

// export const textarea = (props) => {}

// export const msg = (props) => {}

// export const submit = (props) => {}

const FormBuilder = ({ structure, events }) => {
  console.log("Form Structure", structure)

  const constructState = () => {
    let state = {}

    Object.keys(structure).forEach((key) => {
      state[key] = structure[key].default
    })

    return state
  }

  const onFormSubmit = (state) => {
    if (events.submit) {
      events.submit(state)
    }
  }

  const onInputChange = (state) => {
    if (events.change) {
      events.change(state)
    }
  }

  return {
    render: () => (
      <Form
        structure={structure}
        initialState={constructState()}
        onSubmit={(state) => onFormSubmit(state)}
        onChange={(state) => onInputChange(state)}
      />
    ),
    state: constructState()
  }
}

export default FormBuilder
