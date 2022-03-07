import AliveService from "../utils/api/services/AliveService.js";
import {useState} from "react";
import { FaRev } from "react-icons/fa";

const Alive = () => {
    const [data, setData] = useState('')

    const checkApiStatus = () => {
        AliveService.alive()
            .then(response => {
                console.log(response.data)
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='tc mt4'>
            <button className='f5 link dim dark-pink dib mr3 mr4-ns' onClick={checkApiStatus}>
                API<FaRev className='dark-pink '/>
            </button>
            <h3 className='white-80 tc'>{data}</h3>
        </div>
    );
}

export default Alive;