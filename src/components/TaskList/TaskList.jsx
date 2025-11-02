import Card from '../Common/Card';
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

function TaskList({ visibleTasks, editTask, deleteTask, handletaskListEdit }) {

    const getCardsList = () => {
        return (
            <>
                {visibleTasks.map((task) => (
                    <div key={task.id}>
                        <div className="task-card">
                            <div className="task-left">
                                <label className="custom-checkbox">
                                    <input type="checkbox" checked={!!task.isCompleted} className={`task-checkbox ${task.isCompleted ? 'completed' : ''}`} onChange={(e) => handletaskListEdit(e, task.id)} />
                                    <span className="checkmark"></span>
                                </label>
                                <span className={`task-name ${task.isCompleted ? 'completed' : ''}`}>{task.name}</span>
                            </div>
                            <div className="task-actions">
                                <button className="edit-btn" onClick={() => editTask(task.name, task.id)} aria-label="edit"><MdEdit /></button>
                                <button className="delete-btn" onClick={() => deleteTask(task.id)} aria-label="delete"><FaTrash /></button>
                            </div>
                        </div>
                        <div className="task-card-separator"></div>
                    </div>
                ))}
            </>
        )
    }

    return (
        <Card className="cards-list-card" children={getCardsList()} padding={0} />

    )
}

export default TaskList