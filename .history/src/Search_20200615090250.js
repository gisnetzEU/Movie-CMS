import React from 'react'
import MovieList from './components/MovieList'

function Search({handleInput,moviesearch, movielist, opendetail}) {
    return (
        <div>
            <section className="searchbox-wrap">
                <input type="text"
                placeholder="Find movie by keyword" className="searchbox"
                onChange={handleInput}
                onKeyPress={moviesearch}
                />
            </section>
           
            <MovieList movielist={movielist} opendetail={opendetail}/>
        </div>
    )
}

export default Search
