import React from 'react'
import MovieList from './components/MovieList'

function Search({handleInput,moviesearch, movielist, opendetail,videohandler}) {
    return (
        <div>
            <section className="searchbox-wrap">
                <input type="text"
                placeholder="Find movie by keyword" className="searchbox"
                onChange={handleInput}
                onKeyPress={moviesearch}
                />
            </section>
           
            <MovieList movielist={movielist} opendetail={opendetail} videohandler={videohandler}/>
        </div>
    )
}

export default Search


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);