import React, { Fragment } from 'react';
import submit from "../input-types/submit"

const Form = ({ structure, state, onSubmit, onChange }) => {
  const onInputChange = (e) => {
    onChange(e)
  }

  const getKey = (key, idx) => `${key}--${idx}`

  const noComponent = (key) => <Fragment key={key} />

  const performWhenCheck = (when) => {
    if (typeof when !== "undefined") {
      if (when.length >= 3) {
        const [stateKey, operation, value] = when
        if (state[stateKey]) {
          // eslint-disable-next-line no-eval
          if (!eval(`${state[stateKey]} ${operation} ${value}`)) {
            return true
          }
        }
      }
    }

    return false
  }

  const renderStructure = () => {
    return Object.keys(structure).map((key, i) => {
      if (key === "submit") {
        return noComponent(getKey(key, i))
      }

      const {
        typeof: type,
        component: Component,
        default: defaultValue,
        name,
        when,
        ...props
      } = structure[key]

      if (performWhenCheck(when)) {
        return noComponent(getKey(key, i))
      }

      if (type === "msg") {
        return <Component {...props} key={getKey(key, i)} />
      }

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
