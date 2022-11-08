import React from 'react';
import { Title } from '../common/components/title/Title';
import s from'./Footer.module.css';



function Footer() {
  return (
    <div className={s.myFooterBlock}>
      <div className={s.myFooterContainer}>

        <div className={s.myFooterName}>
          <h3 className={s.title}>Evgeny Blagodarnyy</h3>
        </div>

        <div className={s.items}>
          <div className={s.item1}>Block1</div>
          <div className={s.item2}>Block2</div>
          <div className={s.item3}>Block3</div>
          <div className={s.item4}>Block4</div>
        </div>
        <div className={s.copyright}> © 2022 Copyright </div>
      </div>
    </div>
  );
}

export default Footer;