import React , {useEffect, useState} from "react";
import axios from "axios";

const Countries=()=>{
  const [results,setResults]=useState([]);
  const [search,setSearch]=useState([]);

  useEffect(()=>{
    const fetchData=async()=>{
      const data = await axios.get("https://restcountries.com/v2/all ");
      setResults(data.data);
    }
    fetchData();
  },[])

  useEffect(() => {
    const fetchCountry = async () => {
      const data = await axios.get(`https://restcountries.com/v2/name/${search}`);
      setResults(data.data);
    };
    if (search !== "") {
      fetchCountry();
    }
    if(search===""){
      const fetchData=async()=>{
        const data = await axios.get("https://restcountries.com/v2/all ");
        setResults(data.data);
      }
      fetchData();
    }
  }, [search]);

  const renderedResults= results.map((result)=>{
    return(
      <li key={result.alpha2Code}>{result.name}</li>
    )
  })

  return (
    <div>
      <input type="text" placeholder="Search" onChange={e=>setSearch(e.target.value)}/>
      <ul>
        {renderedResults}
      </ul>
    </div>
  )
}

export default Countries;
