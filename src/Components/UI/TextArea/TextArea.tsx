import React, { useState } from 'react'
import { NewPostType } from '../input/Input'
import style from "./Textarea.module.css"

type TextAreaType = {
    placeholder: string,
    callback: (e: React.ChangeEvent<HTMLTextAreaElement>)=>void,
    value: NewPostType
}

export const TextArea = (props: TextAreaType) => {


    return (
        <textarea
            value={props.value.body}
            onChange={(e) => props.callback(e)}
            className={style.myTxar}
            placeholder={props.placeholder}
        />
    )
}