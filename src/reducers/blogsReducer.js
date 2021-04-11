const initialState = {
    blogs: [],
    loading: true
}

const blogsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        case "SET_BLOGS":
            return {
                ...state,
                loading: false,
                blogs: action.blogs
            }
        default:
            return state
    }
}

export default blogsReducer