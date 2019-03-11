import axios from 'axios';
export const loadData = ()=>{
    return (dispatch)=>{
        dispatch({
            type: "APP:LOADING"
        })
        axios.get("data/data.json")
        .then((responce)=>{
            dispatch({
                type:"APP:DATA_LOAD_SUCCESS",
                payload:responce.data
            })
        }, (error)=>{
            dispatch({
                type:"APP:DATA_LOAD_ERROR",
                payload: error.message
            })
        });
    }
}