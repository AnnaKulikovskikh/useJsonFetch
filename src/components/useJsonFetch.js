import {useState, useEffect} from "react"
//const JsonContext = React.createContext()

function useJsonFetch(url, opts=[]) {
    const [data, setData] = useState([])
    const [loading, setLosdindg] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetch(url, opts)
          .then(check)
          .then((res => {
            setData(res)
          })
          .catch((e) => {
            setError(e)
          })
          .finally(() => setLosdindg(false))
          )
    }, [url])

    function check(res) {
        switch (res.status) {
            case 200:
            case 201:
                setError(null)
                return res.json()
            case 400:
                setError(res.status)
                break
            default:
                setError(res.status)
                throw new Error(`status: ${res.status} "${res.statusText}`)        
        }
    }

    // useEffect(()=>{
    //     const fetchData = async() => {
    //         setLosdindg(true)
    //         try {
    //             const response = await fetch(url)
    //             if (!response.ok) {
    //                 throw new Error(response.statusText)
    //             }
    //             const data = await response.json
    //             setData(data)
    //             setError(null)
    //         } catch(e){
    //             setError(e)
    //         } finally {
    //             setLosdindg(false)
    //         }
    //     }
    // },[])

    return {data, loading, error}

}

export default useJsonFetch