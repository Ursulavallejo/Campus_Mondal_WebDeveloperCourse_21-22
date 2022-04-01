import AliveController from "../controllers/Alive.controller.js"

// Endpoint + Business Logic
const aliveRoute = (app) => {
    app.get('/', AliveController.alive)
}

export default {
    aliveRoute
}