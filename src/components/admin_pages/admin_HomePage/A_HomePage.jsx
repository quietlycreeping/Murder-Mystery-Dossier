/*=========================================================
 Author:     J. Orlando
 Date:       June 2026
 Description: Admin home page with various components
==========================================================*/
import React from 'react';

//======Components=========================
import A_Header from "../../header-footers/A_Header";
import characterFacts from "../../../files/characterFacts.json";

const A_HomePage = () => {
    const newArray = ["three", "four"];
    //const fresh = characterFacts.characterData.name.concat(newArray);
    //add to array and save to local storage and then download the files
    const downloadJSON = ({ data, fileName }) => {
        const jsonData = new Blob([JSON.stringify(data)], {type: 'application/json'});
        const jsonURL = URL.createObjectURL(jsonData);
        const link = document.createElement('a');
        link.href = jsonURL;
        link.download = `${fileName}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <A_Header/>
            <div className="main-content">
                Admin Home Page here
                <button onClick={downloadJSON}> Download JSON </button>
            </div>
        </>
    )
}
export default A_HomePage;