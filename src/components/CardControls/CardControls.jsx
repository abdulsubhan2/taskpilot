import { useMemo, useState, useEffect } from 'react';
import InputField from '../Common/InputField';
import Button from '../Common/Button';
import { FaSearch } from "react-icons/fa";
import { dashboardData } from '../../constants';
import TaskList from '../TaskList/TaskList';

const TaskControls = ({ setSearchItem, searchItem, setIsNewTaskModalOpen, handletaskListEdit, editTask, deleteTask, taskList }) => {
    const [debouncedSearch, setDebouncedSearch] = useState('');

    // debounce searchItem -> debouncedSearch
    useEffect(() => {
        const id = setTimeout(() => setDebouncedSearch(searchItem), 300);
        return () => clearTimeout(id);
    }, [searchItem]);

    const visibleTasks = useMemo(() => {
        if (!debouncedSearch) return taskList;
        return taskList.filter(t => t.name.toLowerCase().includes(debouncedSearch.toLowerCase()));
    }, [taskList, debouncedSearch]);

    return (
        <div className="dashboard-page-wrapper-task-controls-section">
            <div className="tasks-controls">
                <span className="tasks-controls-title">{dashboardData.tasksListTitle}</span>
                <div className="tasks-controls-actions">
                    <InputField
                        type="text"
                        placeholder="Search by task name"
                        icon={<FaSearch />}
                        iconPosition="left"
                        value={searchItem}
                        className="tasks-search-input"
                        onChange={(e) => setSearchItem(e.target.value)}
                    />
                    <Button className="tasks-new-btn" onClick={() => setIsNewTaskModalOpen(true)} label={dashboardData.noTasks.addNewTaskButtonText} type="button" />
                </div>
            </div>
            <TaskList visibleTasks={visibleTasks} editTask={editTask} handletaskListEdit={handletaskListEdit} deleteTask={deleteTask} />
        </div>
    )
}

export default TaskControls