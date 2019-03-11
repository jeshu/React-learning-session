const initialState = {
    data: [],
    errorMsg: "",
    isLoading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case "APP:LOADING":
    return {
        ...state,
        isLoading: true
    }
    case "APP:DATA_LOAD_SUCCESS":
      return {
          errorMsg:"",
          data:payload,
          isLoading: false
      }
      case "APP:DATA_LOAD_ERROR":
        return {
            data:[],
            isLoading: false,
            errorMsg: payload
        }

  default:
    return state
  }
}
