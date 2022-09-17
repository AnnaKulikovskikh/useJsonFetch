import useJsonFetch from "./useJsonFetch"

export default function Success(props) {
    const url =  process.env.REACT_APP_DATA_URL + props.url
    const opts = []
    const [data, loading, error] = useJsonFetch(url, opts)

    return (
        <div>
            <h3>{props.url}</h3>
              {loading && <p>...loading</p>} 
              {error && <p>{error}</p>}
              {data && <p>{data.status}</p>}
        </div>
    )
}