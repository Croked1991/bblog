import {useState } from 'react';


  

export const useFetch = (callback: () => Promise<void>):[() => Promise<void>, boolean, string] => {
    
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    async function fetching () {
        try {
            setIsLoading(true )
            await callback() 
        } catch (e: unknown) {
            if (typeof e === "string") {
               setError(e.toUpperCase())
            } else if (e instanceof Error) {
                setError(e.message)
            }
        } finally {
            setIsLoading(false )
        }
    }

    return [fetching, isLoading, error]
}
