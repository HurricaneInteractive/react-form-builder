const constructState = (structure) => {
  let state = {}

  Object.keys(structure).forEach((key) => {
    state[key] = structure[key].default
  })

  return state
}

export default constructState
