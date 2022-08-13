import React, { useState } from 'react'
import style from "./Button.module.css"

type ButtonType = {
    children: string
    callback: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    size?: "normal" | "small"
    active?: boolean
}

export const Button = (props: ButtonType) => {

    if (props.active) {
        return (
            <button
                onClick={e => props.callback(e)}
                className={props.size === "small"
                    ?
                    [style.myBtn, style.small, style.active].join(' ')
                    :
                    [style.myBtn, style.active].join(' ')
                }
            >
                {props.children}
            </button>
        )
    }


    return (
        <button
            onClick={e => props.callback(e)}
            className={props.size === "small"
                ?
                [style.myBtn, style.small].join(' ')
                :
                style.myBtn
            }
        >
            {props.children}
        </button>
    )
}