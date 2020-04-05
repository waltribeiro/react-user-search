import React from "react";
import "./style.css";

class Search extends React.Component {
    render() {
        return (
            <>
                <input type="text" id="searchBox" placeholder="Search"/>

            <button type="submit"><i class="fas fa-search fa-2x"></i></button>
            
            </>
        );
    }
}

export default Search;
