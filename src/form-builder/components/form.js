import React, { useState, useEffect } from 'react';

const Form = ({ structure, initialState, onSubmit, onChange }) => {
  const [state, setState] = useState({ ...initialState })

  useEffect(() => {
    onChange(state)
  }, [onChange, state])

  const onInputChange = (e) => {
    const { target: { name, value } } = e
    setState(prevState => ({ ...prevState, [name]: value }));
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
