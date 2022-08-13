import React from 'react'
import { useMemoArray } from '../../../Hooks/useMemoArray'
import { Button } from '../button/Button'

type Pagination = {
    totalPages: number,
    page: number,
    changePages: (page: number) => void
}


export const Pagination = (props: Pagination) => {
    const pagesArray = useMemoArray(props.totalPages)
    return (
        <div>
            {pagesArray.map(btn =>
                props.page === btn
                ?
                <Button key={btn} active={true} size='small' callback={() => props.changePages(btn)}>{btn.toString()}</Button>
                :
                <Button key={btn} size='small' callback={() => props.changePages(btn)}>{btn.toString()}</Button>
            )
            }
        </div>)
}

