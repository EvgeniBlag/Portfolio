import React from 'react';
import { Title } from '../common/components/title/Title';
import MyProject from './myProject/MyProject';
import s from'./MyProjects.module.css';
import imageTodolist from './../assets/image/imgTodolist.png';



function MyProjects() {

     const Todolists = {
       backgroundImage:`url(${imageTodolist})`,
     };

    return (
        <div className={s.myProjectsBlock}>
          <div className={s.myProjectsContainer}>

         <Title text={'MyProjects'}/>
        
            <div className={s.myProjects}>
            
             <MyProject style={Todolists} titleProject={'Todolists'} descriptionProject={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>
             <MyProject style={Todolists} titleProject={'Todolists'} descriptionProject={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>
            </div>
          </div>
        </div>
    );
}

export default MyProjects;