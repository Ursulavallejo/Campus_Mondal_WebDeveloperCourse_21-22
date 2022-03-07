import http from '../TasksAPI'

const alive = () => {
    return http.get('/')
}

export default {
    alive
}