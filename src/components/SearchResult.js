import React from 'react'
import { useLocation } from 'react-router-dom'

const SearchResult = () => {
    const {state} = useLocation();
    console.log(state);
  return (
    <div>SearchResult</div>
  )
}

export default SearchResult