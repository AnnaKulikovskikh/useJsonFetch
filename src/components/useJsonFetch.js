import {useState, useEffect} from "react"
//const JsonContext = React.createContext()

function useJsonFetch(url, opts=[]) {
    const [data, setData] = useState(null)
    const [loading, setLoadindg] = useState(false)
    const [error, setError] = useState(null)
      
    // useEffect( () => {
    //     setLoadindg(true)
    //     fetch(url, opts)
    //         .then(res => res.json())
    //         .then(data => check(data))
    //         .catch(err => setError(err))
    //         .finally(() =>setLoadindg(false) )
    // }, [url])

    useEffect( () => {
        setLoadindg(true)
        fetch(url)
            .then(res => res.json())
            .then(data => check(data))
            .catch(err => console.log("error"))
            .finally(() => setLoadindg(false))
    }, [url])

    function check(res) {
        switch (res.status) {
            case 200:
            case "ok":
                setError(null)
                setData(res.status)
                break
            case 400:
            case "Internal Error":
                setError(res.status)
                setData(null)
                break
            default:
                setError(res.status)
                throw new Error(`status: ${res.status} "${res.statusText}`)        
        }
    }

    return [data, loading, error]

}

export default useJsonFetch