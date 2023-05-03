const initialState = {
  toggleModal: false,
  isLoading: true,
}

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'user/toogleModal':
      console.log(state.toggleModal, !state.toggleModal, 'di reducer')
      return {
        ...state,
        toggleModal:!state.toggleModal,
      }
    default:
      return state
  }
}

export default carReducer