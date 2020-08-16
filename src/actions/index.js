import jsonPlaceHolder from '../apis/jsonPlaceHolder';



export const fetchPosts = () => {
    return (dispatch) => {
        jsonPlaceHolder.get("/posts")
            .then(
                (res) => dispatch(
                    {
                        type: "FETCH_POSTS",
                        payload: res.data
                    }
                )
            );
    };
}


// dispatch => {
//     const response = jsonPlaceHolder.get("/posts")
//         .then((res) => res.data)
//         .then((response) => dispatch({ type: "FETCH_POSTS", payload: response}));
// };