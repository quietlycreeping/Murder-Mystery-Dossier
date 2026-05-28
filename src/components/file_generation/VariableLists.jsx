/*=========================================================
 Author:     J. Orlando
 Date:       June 2026
 Description: Alll the variables that will be needed for json creation
==========================================================*/

const VariableLists = () => {
  //guest data : each index is a different guest
  let guestData = {
    guestkey: [""], //index+guest name
    name: [""], //guest name
    invite: [false], //bool if invite was recieved
    coming: [false], //bool if guest is planning on attending
    characterAssignment: [characterData.name], //character that the guest is playing, link objects
    };

  //character data : each index is a different character
  let characterData = {
    characterKey: [""], //index+character name

    username: [""], //username for character login
    password: [""], //password for character login

    name: [""], //character name
    title: [""], //title for character
    bioBlurb: [""], //short description of character for home page

    personality1: [""], // 1/3 personality trait of character 
    personality2: [""], // 2/3 personality trait of character    
    personality3: [""], // 3/3 personality trait of character
    
    relation1: [""], // 1/3 relationship to another character, name and type
    relation2: [""], // 2/3 relationship to another character    
    relation3: [""], // 3/3 relationship to another character   

    backstory: [""], //character's backstory, long string
    acting: [""], //acting pointers for portraying the character
    dress: [""] //suggestions for dress to portray the character
    };

  //character task list data : list of tasks to complete BEFORE murder occurs: each index is a different character : 1 refers to task 1
  let preTaskData = {
    1 : [""],
    2 : [""],
    3 : [""],
    4 : [""],
    5 : [""],
    6 : [""],
    7 : [""],
    8 : [""],
    9 : [""],
    10 : [""],
    11 : [""],
    12 : [""]
  };

  //character task list data : list of tasks to complete AFTER murder occurs: each index is a different character 
  let postTaskData = {
    1 : [""], //1-5 is for character secrets
    2 : [""],
    3 : [""],
    4 : [""],
    5 : [""],
    6 : [""], //6-15 is for tasks to be completed
    7 : [""],
    8 : [""],
    9 : [""],
    10 : [""],
    11 : [""], 
    12 : [""],
    13 : [""],
    14 : [""], 
    15 : [""]
  };

  //evidence data : each index is a different piece of evidence
  let evidenceData = {
    evidenceKey = [""], //exhibitA, exhibitB,...
    name = [""], 
    about = [""], //exhibitA, exhibitB,...
    owner = [characterData.name], //character that starts with that piece of evidence, link objects : -1 for no one person owns it
    render = [false], //bool if user/character has found evidence and should be displayed in UI
    password = [""], //string for user to add a piece of evidence to their collected list
  };

  //story data
  let storyData = {
    partyStartTime : "date",  //start time of party for countdown clock
    timerPartyName: "Holly Jolly Bash",   
    
    newsKey: [""], //article+index  
    newsHeader: [""], //each index is a different article
    newsContent: [""], 

    biosHeader: "Northpole Staff", 

    aboutHeader: "About",
    aboutContent: "Content.", 

    profileGreeting: "Hello, ", 
    };

  return (
    <>
    </>
  )
}

export default VariableLists