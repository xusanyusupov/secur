export const inititalState = JSON.parse(localStorage.getItem('storage')) || {
  token: null
}

export const reducer = (state, action) => {
  let result = state
  switch (action.type) {
    case 'ADD_TOKEN':
      result = { ...state, token: action.payload }
      localStorage.setItem('storage', JSON.stringify(result))
      return result

    default:
      return state
  }
}
