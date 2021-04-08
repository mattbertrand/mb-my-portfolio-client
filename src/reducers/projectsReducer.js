const initialState = {
    projects: [],
    loading: true
}

const projectsReducer = (state=initialState, action) => {
    switch(action.type) {
        case: "LOADING":
        return {
            ...state,
            loading: true
        }
        default:
            return state
    }
}

export default projectsReducer