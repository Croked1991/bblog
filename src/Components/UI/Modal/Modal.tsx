import React  from 'react'
import style from "./Modal.module.css"

type ModalType = {
    children: React.ReactNode
    switcher: boolean
    changeSwitcher: ()=>void
}

export const Modal = (props:ModalType) => {
 


    return (
        <div onClick={props.changeSwitcher} className={props.switcher ? [style.modal, style.active].join(' ') : style.modal}>
            <div onClick={e => e.stopPropagation()} className={style.modalContent}>{props.children}</div>
        </div>
    )
}