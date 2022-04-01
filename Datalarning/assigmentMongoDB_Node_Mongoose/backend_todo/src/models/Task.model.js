import mongoose from "mongoose"

const TaskSchema = mongoose.Schema(
    {
        task: String,
        username: String,
        done: false
    }, {timestamps: true}
)

const TaskModel = mongoose.model('task',TaskSchema)

export default TaskModel