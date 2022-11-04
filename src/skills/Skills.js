import React from 'react';
import { Title } from '../common/components/title/Title';
import Skill from './skill/Skill';
import s from'./Skills.module.css';



function Skills() {
    return (
        <div className={s.skillsBlock}>
          <div className={s.skillsContainer}>


            
            <Title text={'Skills'}/>

            <div className={s.skills}>
               <Skill title={'Js'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque voluptatum culpa excepturi ad praesentium quia alias magnam '}/>
               <Skill title={'Css'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque voluptatum culpa excepturi ad praesentium quia alias magnam '}/>
               <Skill title={'React'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque voluptatum culpa excepturi ad praesentium quia alias magnam'}/>
            </div>
          </div>
        </div>
    );
}

export default Skills;