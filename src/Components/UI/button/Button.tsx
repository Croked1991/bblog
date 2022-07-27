import React, { useState } from 'react'
import style from "./Button.module.css"

type ButtonType = {
    children: string
    callback: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void
}

export const Button = (props:ButtonType) => {

    return (

        <button onClick={e=>props.callback(e)} className={style.myBtn}>
            {props.children}
        </button>
    )
}