
const SearchBox=({search})=>{
    return (

        <div className="pa2">

            <input type="search" placeholder='search cats' 
            className='pa3 ba b--green bg-lightest-blue' onChange={search}/>
        </div>

    )
}

export default SearchBox;