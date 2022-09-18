import useJsonFetch from "./useJsonFetch"

//import { useEffect } from "react"

export default function Result(props) {
    //const url =  process.env.REACT_APP_DATA_URL + props.url
    const url =  `http://localhost:7070/${props.url}`

    const [data, loading, error] = useJsonFetch(url)
  
    //console.log(!error)

    return (
        <div className="resemble">
            <h3>{props.url}</h3>
              <span>{loading && <p>...loading</p>}</span>
              <span>{error && <p>{error}</p>}</span>
              <span>{data && <p>{data}</p>}</span>
        </div>
    )
}