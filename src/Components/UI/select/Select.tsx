import React, {ChangeEvent} from 'react'
import { Input } from '../input/Input'
import style from "./Select.module.css"

type SelectType = {
    defaultValue: string,
    options: {
        value: string,
        name: string,
    }[]
    value: string,
    sortPosts: (e: ChangeEvent<HTMLSelectElement>) => void
    filterBySearchQuery: (e: React.ChangeEvent<HTMLInputElement>)=>void
    searchQuery: string
}

export const MySelect = (props: SelectType) => {
    return (
        <div className={style.selectBlock}>
            <select
                value={props.value}
                onChange={e=>props.sortPosts(e)}
                className={style.select}
            >
                <option disabled value="Chooser">{props.defaultValue}</option>
                {props.options.map(e =>
                    <option key={e.value} value={e.value}>
                        {e.name}
                    </option>
                )}
            </select>
            <Input
                value={props.searchQuery} 
                placeholder="Search a post" 
                callback={props.filterBySearchQuery}
                style={{"minWidth": "9.3rem"}}
            />
        </div>
    )
}