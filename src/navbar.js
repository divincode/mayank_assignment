
import SearchIcon from "@material-ui/icons/Search";
import "./navbar.css";
import React, { useState ,useEffect }  from 'react'
import { useStateValue } from "./stateprovider";
import "./reducer";


function Navbar() {

    const [{}, dispatch] = useStateValue();
    const [query, setQuery] = useState("");

    function dispatchQuery()
    {
        dispatch({
          type: "SET_QUERY",
          query: query,
        });
        
    }

    
    
    return (
    <div className="navbar"> 
      <div className="navbar__search">
        <div className="navbar_centre">
        <h1 className="heading">Search Photos</h1>
      </div>
    </div>
        <div className="navbar__search">
        <input className="navbar__searchInput" type="text" onChange={e => setQuery(e.target.value)} />
          <SearchIcon className="header__searchIcon" onClick={dispatchQuery}/> 
        </div>
    
    
    </div>
    )
}

export default Navbar
