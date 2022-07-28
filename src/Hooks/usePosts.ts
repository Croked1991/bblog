import { PostItemType } from './../Components/PostItem';
import { useMemo } from 'react';


export const useSortedPosts = (posts: PostItemType[], sortMethod: string) => {
    
    const sortedPosts = useMemo (()=>
        {if (sortMethod) 
            {const valueSwitcher = sortMethod === "title" ? "title" : "body"
                return [...posts].sort((a, b) => a[valueSwitcher].localeCompare(b[valueSwitcher]))
            }
        return posts
    }, [sortMethod, posts])

    return sortedPosts
}

export const useSearchedAndSortedPosts = (posts: PostItemType[], sortMethod: string, query: string) => {
    
    const sortedPosts = useSortedPosts(posts, sortMethod)
    
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(e => e.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts
}