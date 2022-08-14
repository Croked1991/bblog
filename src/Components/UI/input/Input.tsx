import React, { useState } from 'react'
import style from "./Input.module.css"

export type NewPostType = {
    title: string;
    body: string;
}

type InputType = {
    placeholder: string,
    value: string,
    callback: (e: React.ChangeEvent<HTMLInputElement>)=>void
    style?: React.CSSProperties
    autofocus?:boolean
    type?: string
}

export const Input = (props: InputType) => {   

    return (
        <div>
            <input
                type={props.type}
                onChange={e => props.callback(e)}
                value={props.value} style={props.style} className={style.myInp}
                placeholder={props.placeholder}
                autoFocus={props.autofocus}
            >
            </input>
        </div>
    )
}