import React from 'react'
import {NewNoteInput} from "./NewNoteInput";
import { NoteStates } from './noteReducesr';
import {  useDispatch, useSelector } from 'react-redux';
import { addNote } from './actions';

function App(){
  const notes= useSelector<NoteStates,NoteStates["notes"]>((state)=>state.notes)
  const dispatch=useDispatch()

  const onaddNote=(note:string)=>{
    dispatch(addNote(note))
  }

  return(
    
      <>
      <NewNoteInput addNote={onaddNote}/>
      
      <hr/>
      <ul>
      {notes.map((note) => {
          return <li key={note}>{note}</li>;  
      })}
   

      </ul>
       
      </>
     );
}

export default  App;