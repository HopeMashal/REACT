import React , {useEffect, useState} from "react";
import axios from "axios";

const StarWars=()=>{
  const [results,setResults]=useState([]);

  console.log(results);

  useEffect(()=>{
    const fetchData=async()=>{
      const data = await axios.get("https://swapi.dev/api/films");
      setResults(data.data.results);
    }
    fetchData();
  },[])

  const renderedResults= results.map((result)=>{
    return(
      <div key={result.episode_id} style={{border:'2px solid black',margin:'10px'}}>
        <h2>The movie title: {result.title}<hr/></h2>
        <h3 className="movie-item-text">Director: {result.director}</h3>
      </div>
    )
  })

  return (
    <div>
        {renderedResults}
    </div>
  )
}

export default StarWars;
