/*=========================================================
 Author:     J. Orlando
 Date:       May 2026
 Description: Murder mystery tasks with various components
==========================================================*/
//======Components=========================
import Header from "../../header-footers/Header.jsx";
import CharacterChecklist from "./checklist.jsx";

const TaskPage = () => {
  return (
    <>
    <Header/>
      <div className="main-content">
        Character Task Page here
        <CharacterChecklist/>
      </div>         
    </>
  )
}

export default TaskPage