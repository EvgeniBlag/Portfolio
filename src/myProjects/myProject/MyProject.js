import React from 'react';
import s from'./MyProject.module.css';



function MyProject(props) {
    return (
        <div className={s.project}>
           
            <div  style={props.style} className={s.img_project} />
        
            <button className={s.button_project}>Watch</button>
            
                <h3 className={s.title}>{props.titleProject}</h3>
                <span className={s.description_project}>{props.descriptionProject}</span>
         

        </div>
    );
}

export default MyProject;
//src='https://i.pinimg.com/originals/ef/99/2c/ef992ce657109dded8d03c782dab87c5.png' alt='Image of Project'
//className={s.img_project}