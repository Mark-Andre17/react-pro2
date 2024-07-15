
export const loadPosts = () => {
    return (dispatch) => {
        dispatch({type:'load/posts/pending'});

        fetch("https://jsonplaceholder.typicode.com/posts")
           .then(response => response.json())
           .then(data => dispatch({ type: "load/posts/fullfilled", payload: data }))
    }
};