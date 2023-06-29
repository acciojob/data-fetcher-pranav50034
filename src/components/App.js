
import React, {useState} from "react";
import './../styles/App.css';
import axios from "axios";

const App = () => {

  let [data, setData] = useState("")
  let [error, setError] = useState("")


  axios
     .get("https://dummyjson.com/products")
     .then((response) => setData(response.data))
     .catch((err) => setError(err));

     let ans = JSON.stringify(data)


  return (
     <div>
        {/* Do not remove the main div */}
        <h1>Data Fetched from API</h1>
        {
          data && 
          <pre>{ans}</pre>
        }
        {
          error && 
          <p>{error}</p>
        }
        {
          !data &&
          <p>Loading...</p>
        }
        {/* <p>Hello</p> */}

        {/* {
          arr.map((e, i)=>)
        } */}
     </div>
  );
}

export default App
