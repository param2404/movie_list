import React, { useRef, useEffect } from 'react';
import {connect} from 'react-redux'
import './../App.css';
import {fetchMovies, resetMovies} from './../store/actions/movieAction'

const Nav=React.memo(({fetchMovies,resetMovies})=> {
    const inputRef = useRef();
    const [searchText,setSearchText]=React.useState('')
     useEffect(() => {
        inputRef.current.focus()
    },[])

    const handleSearch = (e) => {
        e.preventDefault()
        console.log('search clicked')
        fetchMovies({search:searchText,page:1})
    }
   
    const handleSearchInput = (e) => {   
        resetMovies()
        setSearchText(e.target.value)
    }
    return (
        <header className="navbar navbar-expand" id="header">
            <div className="container-fluid">
                <form className="form-inline mt-2 mb-2" id="form">
                    <input className="input" value={searchText} ref={inputRef} onChange={(e) => handleSearchInput(e)}>
                    </input>
                    <button className="searchBttn" onClick={(e)=>handleSearch(e)}>Go</button>
                </form>
            </div>
        </header>
    );
})

export default connect(null,{fetchMovies,resetMovies})(Nav);
