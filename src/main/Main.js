import React from 'react';
import s from'./Main.module.css';
import styleContainer from'./../common/styles/Container.module.css';

function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
            <div className={s.text}>
                <span className={s.span}>Hi There</span>
                <h1 className={s.h1}>I am Evgeny Blagodarnyy</h1>
                <p className={s.p}>Frontend Developer</p>
            </div>

            <div className={s.foto}>sdfg</div>
            </div>
        </div>
    );
}

export default Main;