import React from 'react';
import s from'./MyProject.module.css';



function MyProject(props) {
    return (
        <div className={s.project}>


          
                <img className={s.img_project} src='https://i.pinimg.com/originals/ef/99/2c/ef992ce657109dded8d03c782dab87c5.png' alt='Image of Project' />
        
            <button className={s.button_project}>Watch</button>
            


            
                <h3>{props.titleProject}</h3>
                <span className={s.description_project}>{props.descriptionProject}</span>
         

        </div>
    );
}

export default MyProject;