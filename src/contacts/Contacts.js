import React from 'react';
import { Title } from '../common/components/title/Title';
import s from'./Contacts.module.css';



function Contacts() {
    return (
        <div className={s.myContactosBlock}>
          <div className={s.myContactosContainer}>


             {/* <h2 className={s.title}>Contactos</h2>  */}
             <Title text={'Contactos'}/>

            <form className={s.myContacts}>
            <input className={s.input1}/>
            <input className={s.input2}/>
            <textarea className={s.text}/>
            
            </form>

             <button type='submit' className={s.button}>Enviar</button> 
          </div>
        </div>
    );
}

export default Contacts;