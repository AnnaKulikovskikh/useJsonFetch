import React  from "react"
import useJsonFetch from "./JsonFetch"

function Success(props) {
    const {data, load} = useJsonFetch()
    return (
        <div>
            <h3>{data}</h3>
            <button onClick={load}>Success</button>
        </div>
    )
}