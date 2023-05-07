
export interface NoteStates{
    notes:string[]
}
const initialState={
    notes:[]
}



export const noteReducer =(state: NoteStates = initialState, action: Action) =>{
    switch(action.type){
        case "ADD_NOTE":{
            return{
                ...state,notes:[...state.notes,action.payload]
            }

        }default:
        return state
        
    }

}