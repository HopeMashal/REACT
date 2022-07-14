import React, { useEffect, useState } from "react";
import axios from "axios";
import './Spinner.css'

const Search = () => {
  const [term, setTerm] = useState("hooks");
    const [searchItem, setSearchItem] = useState("hooks");
    const [results, setResults] = useState([]);
    const [spinner, setSpinner] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setSpinner(true);
            try {
                const data = await axios.get(`https://hn.algolia.com/api/v1/search?query=${term}`);
                setResults(data.data.hits);
                setSpinner(false);
            } catch {
                setError(true);
            }
        };
        fetchData();
    }, [term]);

    const renderedResults= results.map((result,i)=>{
      return(
        <li key={i}>
          <a href={result.url}>{result.title}</a>
        </li>
      )
    })

    const handleClick = () => {
        setTerm(searchItem);
    };

    if (error) {
        return <h1>Error!!!</h1>
    }
    if (spinner) {
        return (
          <div className="container">
            <div className="spinner"></div>
          </div>
        );
    }
    return (
        <div style={{margin:'20px'}}>
            <input
                value={searchItem}
                onChange={(e) => {
                    setSearchItem(e.target.value.toLowerCase());
                }}
            ></input>
            <button onClick={handleClick}>Search</button>
            <ul>{renderedResults}</ul>
        </div>
    );
};

export default Search;