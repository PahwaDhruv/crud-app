import axios from 'axios';

export const setUsersLoading = () =>{
    return {
        type: "USERS_LOADING"
    }
};
//Get Users
export const getUsers = () => {
    return(dispatch) => {
        dispatch(setUsersLoading());
        axios.get("/api/users")
            .then(response => {
                dispatch({type: 'GET_USERS', payload: response.data});
                console.log("Users Dispatched", response);
            })
            .catch(error=> console.log(error));
    }
}

export const getUserById = (id) => {
    return (dispatch) => {
        axios.get(`/api/users/${id}`)
        .then(response => {
            dispatch({type:"GET_USER_BY_ID", payload:response.data});
            console.log(response.data);
        })
        .catch(error => console.log(error));
    }
}
//Add User
export const createUser = (user) => {
    return (dispatch) => {
        axios.post("/api/users", user)
            .then(response => {
                dispatch({type: 'ADD_USER', payload: response.data});
                console.log("Create User Dispatched",response);
            })
            .catch(error => console.log(error));
                   
    }
};


//Delete User
export const deleteUser = (id) => {
    return(dispatch) => {
        axios.delete(`/api/users/${id}`)
            .then(response => {
                dispatch({type: 'DELETE_USER', payload: id});
                console.log("Delete User Dispatched",response);
            })
            .catch(error => console.log(error));
    }
}

//Update User

export const updateUser = (user) => {
    return(dispatch) => {
        axios.put(`/api/users/${user._id}`, user)
            .then(response => {
                dispatch({type: "UPDATE_USER", payload:response.data})
                console.log(response)
            })
            .catch(error => console.log(error));
    }
}