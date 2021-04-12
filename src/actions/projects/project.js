export const getProjects = () => {
    return dispatch => {
        dispatch({ type: "LOADING"})
        fetch("http://localhost:3001/projects")
        .then(resp => resp.json())
        .then(projects => dispatch({ type: "SET_PROJECTS", projects }))
    }
}

export const addProject = (project, history) => {
    return dispatch => {
        fetch("http://localhost:3001/projects", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ project })
        })
        .then(resp => resp.json())
        .then(project => {
            dispatch({ type: "ADD_PROJECT", project })
            history.push("/projects")
        })    
    }
}

export const deleteProject = (id, history) => {
    return dispatch => {
        fetch(`http://localhost:3001/projects/${id}`, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }, 
        })
        .then(resp => resp.json())
        .then(project => {
            dispatch({ type: "DELETE_PROJECT", project})
            history.push("/projects")
        })
    }
}