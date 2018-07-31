import * as ActionTypes from '../actions'

const initialState = {
  attentionBoxVisible: true,
}

export default (state = initialState, action) => {
  // alert("121231212")
  switch (action.type) {
    case ActionTypes.UI_ATTENTIONBOX_TOGGLE:
      return { ...state, attentionBoxVisible: !state.attentionBoxVisible }
    default: return state
  }
}