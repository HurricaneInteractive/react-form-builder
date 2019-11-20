import React, { Fragment } from 'react';
import submit from "../input-types/submit"

const Form = ({ structure, state, onSubmit, onChange }) => {
  const onInputChange = (e) => {
    onChange(e)
  }

  const getKey = (key, idx) => `${key}--${idx}`

  const renderStructure = () => {
    return Object.keys(structure).map((key, i) => {
      if (key === "submit") {
        return <Fragment key={getKey(key, i)}></Fragment>
      }

      const {
        component: Component,
        default: defaultValue,
        name,
        ...props
      } = structure[key]

      return (
        <Component
          {...props}
          key={getKey(key, i)}
          value={state[key]}
          name={key}
          onChange={(e) => {
            onInputChange(e)
          }}
        />
      )
    })
  }

  const renderSubmit = () => {
    let props = structure.submit ? structure.submit : submit()

    return <input {...props} />
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(state)
    }}>
      {renderStructure()}
      {renderSubmit()}
    </form>
  )
}

export default Form
