import React from 'react'

const Search = ({settext}) => {
  return (
    <div className="filter">
        <div className="search">
                <input type="text" placeholder="Search Product..."onChange={(e)=>settext(e.target.value)}></input>
                <ion-icon name="search-sharp"> search</ion-icon></div>
    </div>
  )
}

export default Search