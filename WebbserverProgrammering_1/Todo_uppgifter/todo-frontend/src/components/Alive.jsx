import AliveService from "../utils/api/services/AliveService.js";
import {useState} from "react";

const Alive = () => {
    const [data, setData] = useState('')

    const checkApiStatus = () => {
        AliveService.alive()
            .then(response => {
                console.log(response.data)
                setData(response.data)
            } )
            .catch(error => console.log(error))
    }

    return (
        <>
            <h1>Alive</h1>
            <button onClick={ checkApiStatus }>
                Check if API is ALIVE
            </button>
            <h3>{data}</h3>
        </>
    );
};

export default Alive