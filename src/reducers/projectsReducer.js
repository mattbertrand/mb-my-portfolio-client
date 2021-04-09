const initialState = {
    projects: [],
    loading: true
}

const projectsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOADING":
        return {
            ...state,
            loading: true
        }
        case "SET_PROJECTS":
            return {
                ...state,
                loading: false,
                projects: action.projects
            }
        case "ADD_PROJECT":
            return {
                ...state,
                projects: [...state.projects, action.project]
            }
            default:
                return state

        case "DELETE_PROJECT":
            return {
                ...state,
                projects: state.projects.filter(project => action.project.id !== project.id)
            }
    }
}

export default projectsReducer