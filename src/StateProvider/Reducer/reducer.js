 export const intialState ={
    user : null
}

function reducer(state,action){
    console.log(action.user);
    switch (action.type) {
        case 'SET_USER':
            
            return {
                ...state,
                user:action.user
            }
    
        default:
            return {
                ...state
            }
    }
}
export default reducer;