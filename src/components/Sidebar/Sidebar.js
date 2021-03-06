import React from 'react'
import "./sidebar.css"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Definition from '../Definition/Definition';
import Synonym from '../Synonym/Synonym';
import Rhyme from '../Rhyme/Rhyme';
import ToDo from '../ToDo/ToDo';


function Sidebar() {
    // const [ search, setSearch ] = useState()
    // const [ results, setResults ] = useState()

    // async function callApi() {
    //     let res = await getData(search)
    //     setResults(res)
    // }

    const routes = [
        {
          path: "/",
          exact: true,
          sidebar: () => <div>Home!</div>,
          main: () => <h2>Home</h2>
        },
        {
          path: "/synonyms",
          sidebar: () => <Synonym></Synonym>,
          main: () => <h2>Synonyms</h2>
        },
        {
          path: "/definitions",
          sidebar: () => <Definition></Definition>,
          main: () => <h2>Definitions</h2>
        },
        {
          path: "/rhymes",
          sidebar: () => <Rhyme></Rhyme>,
          main: () => <h2>Rhyme Page</h2>
        },
        {
          path: "/todo",
          sidebar: () => <ToDo></ToDo>,
          main: () => <h2>To Do Page</h2>
        }
      ];


    return (  
        <>
        <Router>
            <div className="columns">
                    <div id="sidebar" className="column is-one-fifth">
                      
                      <Link to="/definitions">
                        <button id="definition" className="sideBtn">Definitions</button>     
                      </Link>
                      <Link to="/synonyms">
                            <button className="sideBtn">Synonyms</button>
                      </Link>
                      <Link to="/rhymes">
                            <button className="sideBtn">Rhymes</button>
                      </Link>
                      <Link to="/todo">
                            <button className="sideBtn">To Do</button>
                      </Link>
                    </div>
                    <div id="content" className="column is-four-fifth">
                <Switch>

                 {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact} 
                        children={<route.sidebar />}     
                    />
                    ))}  
                </Switch>
                </div>

            {/* 1. move this to a new component called DefinitionSearchbar 
                2. import to top of definition page */}
        
                {/* <SearchBar search={search} setSearch={setSearch} callApi={callApi} /> 
                {results && <Card word={results} pro={results} definition={results} sound={results} partSpeech={results}/> } */}
           
            </div>
        </Router>
        </>
    )
}

export default Sidebar
