import React from 'react';
import { Title } from '../common/components/title/Title';
import MyProject from './myProject/MyProject';
import s from'./MyProjects.module.css';



function MyProjects() {
    return (
        <div className={s.myProjectsBlock}>
          <div className={s.myProjectsContainer}>

         <Title text={'MyProjects'}/>
        
            <div className={s.myProjects}>
            
             <MyProject titleProject={'Name'} descriptionProject={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>
             <MyProject titleProject={'Name'} descriptionProject={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>
            </div>
          </div>
        </div>
    );
}

export default MyProjects;