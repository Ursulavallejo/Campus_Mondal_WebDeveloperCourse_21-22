import mongoose from "mongoose"

const TaskSchema = new mongoose.Schema(
    {
        task: String,
        name: String,
        done: false
    }, {timestamps: true}
)

const TaskModel = new mongoose.model('task',TaskSchema)

export default TaskModel