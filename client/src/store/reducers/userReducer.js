// import uuid from 'uuid';
const initState={
    users: [],
    user: {},
    loading: false
};

const userReducer = (state=initState, action) => {
    switch(action.type) {
        case 'GET_USERS':
            // console.log(state,action.payload);
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case 'DELETE_USER':
            return{
                ...state,
                users: state.users.filter(user => user._id !== action.payload)
            };
        case "ADD_USER":
            // console.log("User Added",action);
            return{
                ...state,
                users: [ action.payload,...state.users]
            };
        case "USERS_LOADING":
            return{
                ...state,
                loading:true
            }
        case "UPDATE_USER":
            return{
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
    
}

export default userReducer;