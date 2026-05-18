/*=========================================================
 Author:     J. Orlando
 Date:       May 2026
 Description: Murder mystery tasks with various components
==========================================================*/
import { useContext } from "react";
//======Contexts===========================
import { PartyContext } from "../../contexts/PartyContext.jsx";
//======Components=========================
import Header from "../../header-footers/Header.jsx";

const TaskPage = () => {
  const {isMurder} = useContext(PartyContext);

  return (
    <>
    <Header/>
      <div className="main-content">
        Character Task Page here
        <br/><br/>
        Murder Status: {isMurder ? "Stab Stab" : "No"}
      </div>         
    </>
  )
}
export default TaskPage

