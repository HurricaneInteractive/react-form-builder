import React from 'react';

const Form = ({ structure, state, onSubmit, onChange }) => {
  const onInputChange = (e) => {
    onChange(e)
  }

  const renderStructure = () => {
    return Object.keys(structure).map((key, i) => {
      if (key === "submit") {
        return <></>
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
          key={key}
          value={state[key]}
          name={key}
          onChange={(e) => {
            onInputChange(e)
          }}
        />
      )
    })
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(state)
    }}>
      This is the form

      {renderStructure()}

      <input type="submit" value="Submit"/>
    </form>
  )
}

export default Form
