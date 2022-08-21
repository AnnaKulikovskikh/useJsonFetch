import React, {useState, useEffect} from "react"


function JsonFetch(props) {
    const [data, setData] = use.State([])

    function load(url, opts) {
        useEffect(() => {
            fetch(url, opts)
                .then(res => res.json())
                .then(data => setImmediate(data))
        }, [])
    }

    return {data, load}

}

export default useFetch