import { useEffect, useState } from 'react';
import Modal from '../components/Common/Modal';
import Header from '../components/header/Header';
import Card from '../components/Common/Card';
import { dashboardData } from '../constants';
import useLocalStorage from '../hooks/UseLocalStorage';
import InputField from '../components/Common/InputField';
import Button from '../components/Common/Button';
import DashboardSkeleton from '../components/SkeletonLoader/DashboardSkeleton';
import InfoCards from '../components/InfoCards/InfoCards';
import TaskControls from '../components/CardControls/CardControls';
import '../stylings/dashboardpage.scss';

function DashboardPage() {
  const [taskList, setTaskList] = useLocalStorage('taskpilot_tasks', []);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState('');
  const [searchItem, setSearchItem] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editTaskName, setEditTaskId] = useState('');


  useEffect(() => {
    setIsLoading(true);
    // Simulate data fetching
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  function addNewTask() {
    if (isEditMode) {
      const updatedTasks = taskList.map((task) => {
        if (task.id === editTaskName) {
          return { ...task, name: newTaskValue };
        }
        return task;
      });
      setTaskList(updatedTasks);
      setNewTaskValue('');
      setIsEditMode(false);
      setIsNewTaskModalOpen(false);
      return;
    }
    if (newTaskValue.trim().length === 0) return;
    const newTask = { id: Date.now() + Math.random(), name: newTaskValue, isCompleted: false };
    setTaskList([...taskList, newTask]);
    setNewTaskValue('');
    // Placeholder function for adding a new task
    setIsNewTaskModalOpen(false);
    // Logic to add the new task would go here
  }

  function onModalClose() {
    setIsNewTaskModalOpen(false);
    setIsEditMode(false);
    setEditTaskId('');
    setNewTaskValue('');
  }

  function deleteTask(taskId) {
    const updated = taskList.filter(t => t.id !== taskId);
    setTaskList(updated);
  }

  function editTask(taskName, taskId) {
    setIsNewTaskModalOpen(true);
    setEditTaskId(taskId);
    setNewTaskValue(taskName);
    setIsEditMode(true);
  }

  function handletaskListEdit(e, taskId) {
    const checked = e.target.checked;
    const updatedTasks = taskList.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: checked };
      }
      return task;
    });
    setTaskList(updatedTasks);
  }

  const getNoTasksContent = () => <Button className='dashboard-page-no-tasks-card-btn' onClick={() => setIsNewTaskModalOpen(true)} label={dashboardData.noTasks.addNewTaskButtonText} type="button" />

  return (
    <div className='dashboard-page'>
      {isLoading ? (<><Header /><DashboardSkeleton /></>) :
        <>
          <Header />
          <div>
            {taskList.length === 0 ? (
              <Card
                title={dashboardData.noTasks.title}
                padding={'37px 64px'}
                children={getNoTasksContent()}
                className='no-tasks-card dashboard-page-no-tasks-card'
              />
            ) : (
              <div className='dashboard-page-wrapper'>
                <InfoCards taskList={taskList} />
                <TaskControls setSearchItem={setSearchItem} editTask={editTask} deleteTask={deleteTask} handletaskListEdit={handletaskListEdit} searchItem={searchItem} setIsNewTaskModalOpen={setIsNewTaskModalOpen} taskList={taskList} />
              </div>)}
          </div>
          {isNewTaskModalOpen && (
            <Modal isOpen={isNewTaskModalOpen} onClose={() => onModalClose()} title={'+ New Task'}>
              <InputField type="text" placeholder='Task Name' className='add-new-task-input' value={newTaskValue} onChange={(e) => setNewTaskValue(e.target.value)} />
              <Button className='add-new-task-modal-button' onClick={() => addNewTask(isEditMode)} label={dashboardData.noTasks.addNewTaskButtonText} type="submit" />
            </Modal>
          )}
        </>
      }
    </div>
  );
}

export default DashboardPage;