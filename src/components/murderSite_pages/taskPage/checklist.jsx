/*=========================================================
 Author:     J. Orlando
 Date:       June 2026
 Description: Checklist component with cookies remembering state
==========================================================*/
import { useState } from 'react';

const CharacterChecklist = () => {
    const [isChecked, setChecked]= useState(false);
//====== State Function ===========================
    const handleCheckboxChange = (e) => {
        setChecked(e.target.checked);
        Cookies.set(target, isChecked, {expires: 2});
        const test = Cookies.get(target)
        console.log(test);
    }
    return (
        <>
        <div className="main-content">
            Checklist
        <input>
            type="checkbox"
            id="checkbox1"
            checked={isChecked}
            onChange={handleCheckboxChange}
        </input>
        </div>         
        </>
    )
    }

export default CharacterChecklist
