import React from 'react';
import logo from './logo.svg';
import './App.css';

function Note(){
  const [edit_mode,set_edit_mode]=React.useState(false);
  const [enabled,set_enabled]=React.useState(true);
  const [data,set_data]=React.useState("Tap to edit");
  const [title,set_title]=React.useState("Title");
  function toggle_edit_mode(){
    set_edit_mode(!edit_mode);
  }
  function save_note(e){
    e.preventDefault();
    set_edit_mode(!edit_mode);
  }
  function delete_note(){
    set_enabled(false);
  }
  function is_enabled(){
    if(enabled) return true;
    else return false;
  }
  // niqqa
  if(enabled){
    if(edit_mode){
      return (
        <div className='edit_mode_container'>
          <form onSubmit={save_note}>
            <textarea value={title} className='edit_title_area' onChange={(e)=>{set_title(e.target.value)}} rows={1}></textarea>
            <textarea value={data} className='edit_data_area' onChange={(e)=>{set_data(e.target.value)}} rows={5}></textarea>
            <input type="submit" value="Save" className='save_button'/>
          </form>
        </div>
      );
    }else{
      return (
        <div className='static_mode_container' onClick={toggle_edit_mode}>
        <div className='static_note'>
          <div className='note_title'>{title}</div>
          <div className='note_data'>{data}</div>
        </div>
          <button className='delete_button' onClick={()=>delete_note()}>-</button>
        </div>
      );
    }
  }else{
    return;
  }
}

export default function App() {
  const [notes,set_notes]=React.useState([<Note key={0}/>]);
  const [idx,set_index]=React.useState(1);

  function add_note(){
    set_index(idx+1);
    set_notes(notes.concat(<Note key={idx}/>));
    
  }
  function reset_notes(){
    notes.forEach((x)=>{
      console.log(x.props);
    });
  }
 return (
  <div className='main_container'>
    <button className='add_note_button' onClick={()=>{
      add_note();
    }}>Add Note</button>
    <div className="notes-container">
      {notes}
    </div>
  </div>
 );
}