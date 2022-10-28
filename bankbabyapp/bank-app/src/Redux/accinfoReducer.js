const initialState={
    accinfo:{},
}



export const accinfoReducer = (state=initialState,action)=>{

    if(action.type==="accinfo"){
        return{
            ...state,
            accinfo: action.payload
        }
    }
    return state
}