// Check for fieldset type structure elements and generate a state object using that
// <groupingID>--<structureKEY>

const constructState = (structure) => {
  let state = {}

  Object.keys(structure).forEach((key) => {
    state[key] = structure[key].default
  })

  return state
}

export default constructState
