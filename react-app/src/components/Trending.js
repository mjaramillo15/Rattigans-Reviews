import React from 'react';
import style from '../styles/Trending.module.css';
import Button from '@mui/material/Button';

function Trending() {
    return (
        <div>
            <h1 className={style.text}> Trending </h1>
            <div className={style.background}>
                <Button className={style.imgbutton}/>
                <Button className={style.imgbutton}/>
                <Button className={style.imgbutton}/>
                <Button className={style.imgbutton}/>
                <Button className={style.imgbutton}/>
                <Button className={style.imgbutton}/>
            </div>
        </div>
    );
}

//TODO: Add sidescrolling, make images changeable

export default Trending