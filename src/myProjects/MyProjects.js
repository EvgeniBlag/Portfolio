import React from 'react';
import MyProject from './myProject/MyProject';
import s from'./MyProjects.module.css';



function MyProjects() {
    return (
        <div className={s.myProjectsBlock}>
          <div className={s.myProjectsContainer}>


          <div className={s.title}>
            <h2 >MyProjects</h2>
          </div>

            <div className={s.myProjects}>
            
             <MyProject titleProject={'Name'} descriptionProject={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>
             <MyProject titleProject={'Name'} descriptionProject={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>
            </div>
          </div>
        </div>
    );
}

export default MyProjects;