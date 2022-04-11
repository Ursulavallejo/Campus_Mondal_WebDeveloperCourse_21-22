import StatusCode from "../../utils/StatusCode.js";

const alive = (req,res)  => {
    return res.status(StatusCode.OK).send('API is Alive!!')
}

export default  {
    alive
}