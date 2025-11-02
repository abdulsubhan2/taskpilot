import Card from '../Common/Card';
import { dashboardData } from '../../constants';
import PieChart from '../Common/PieChart';

const InfoCards = ({taskList, getCompletedTasks}) => {

      function getCompletedTasks() {
        return taskList.filter(task => task.isCompleted).length;
    }
    
    const getCardOneContent = () => {
      return (
        <>
          <span className='completed-tasks'>{getCompletedTasks()}</span>
          <span className='total-tasks'>/{taskList.length}</span>
        </>
      )
    };
  
    const getCardTwoContent = () => {
      return (
        <>
          <div className="latest-created-tasks">
            <ul>
              {taskList.slice(-3).map((task, index) => (
                <li key={index} className={`latest-created-task-item ${task.isCompleted ? 'completed' : ''}`}>
                  <span>
                  {task.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )
    };
  
    const getCardThreeContent = () => {
      return (
        <>
         <PieChart totalTasks={taskList.length} completedTasks={getCompletedTasks()}/>
        </>
      )
    };

  return (
    <div className="dashboard-page-wrapper-card-row">
      <Card title={dashboardData.rowOne.cardOne.title} className="card-one dashboard-page-wrapper-card-row-one" children={getCardOneContent()} />
      <Card title={dashboardData.rowOne.cardTwo.title} className="card-two dashboard-page-wrapper-card-row-one" children={getCardTwoContent()} />
      <Card className="card-three dashboard-page-wrapper-card-row-one" children={getCardThreeContent()} />
    </div>
  )
}

export default InfoCards