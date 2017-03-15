import * as Type from '../Action/Action'

export function select(state = { index: 0 }, action) {
  switch (action.type) {
    case Type.SELECTROW:
      return { index: action.index }
    default:
      return state
  }
}