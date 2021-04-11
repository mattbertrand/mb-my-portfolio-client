export const getBlogs = () => {
    return dispatch => {
        dispatch({ type: "LOADING" })
        fetch('http://localhost:3001/blogs')
        .then(resp => resp.json())
        .then(blogs => dispatch({ type: "SET_BLOGS", blogs}))
    }
}