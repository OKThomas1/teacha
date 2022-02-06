import React, { useCallback, useRef, useState } from 'react'
import ReactTags from 'react-tag-autocomplete'

const Tags = () => {
    const [tags, setTags] = useState([])

    const reactTags = useRef()

    const [suggestions, setSuggestions] = useState([
        { id: 1, name: "Technology" },
        { id: 2, name: "Data" },
        { id: 3, name: "Engineering" },
        { id: 4, name: "Software" },
        { id: 5, name: "Development" },
        { id: 6, name: "Cloud" }
      ])

    const onDelete = useCallback((tagIndex) => {
      setTags(tags.filter((_, i) => i !== tagIndex))
    }, [tags])
  
    const onAddition = useCallback((newTag) => {
      setTags([...tags, newTag])
    }, [tags])


    return (     
    <ReactTags
        ref={reactTags}
        tags={tags}
        suggestions={suggestions}
        onDelete={onDelete}
        onAddition={onAddition}
      /> );
}
 
export default Tags;