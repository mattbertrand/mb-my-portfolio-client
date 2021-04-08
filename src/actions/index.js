export const getProjects = () => {
    return dispatch => {
        dispatch({ type: "LOADING"})
        fetch("http://localhost:3001/projects")
        .then(resp => resp.json())
        .then(projects => dispatch({ type: "SET_PROJECTS", projects }))
    }
}