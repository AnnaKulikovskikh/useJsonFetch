import React  from "react"
import useJsonFetch from "./JsonFetch"

function Index(props) {
    const {data, load} = useJsonFetch()
    return (
        <div>
            <h3>{data}</h3>
            <button onClick={load}>Index</button>
        </div>
    )
}