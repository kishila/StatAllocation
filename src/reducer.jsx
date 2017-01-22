const initialState = {
  count1: 0,
  count2: 0
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT1': {
      state.count1 += 1;
      return state;
    }
    case 'DECREMENT1':
      state.count1 -= 1;
      return state;
    case 'INCREMENT2': {
      state.count2 += 1;
      return state;
    }
    case 'DECREMENT2': {
      state.count2 -= 1;
      return state;
    }
    default:
      return state
  }
}
