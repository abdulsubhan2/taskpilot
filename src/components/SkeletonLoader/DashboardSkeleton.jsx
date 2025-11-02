import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Card from '../Common/Card';
import '../../stylings/dashboardpage.scss';

function DashboardSkeleton() {
    return (
        <div className='dashboard-page-wrapper'>
            <div className="dashboard-page-wrapper-card-row">
                <Card className="dashboard-page-wrapper-card-row-one" padding="24px">
                    <Skeleton height={100} />
                </Card>
                <Card className="dashboard-page-wrapper-card-row-one" padding="24px">
                    <Skeleton height={100} />
                </Card>
                <Card className="dashboard-page-wrapper-card-row-one" padding="24px">
                    <Skeleton height={100} />
                </Card>
            </div>
            <div className="dashboard-page-wrapper-task-controls-section">
                <div className="tasks-controls">
                    <span className="tasks-controls-title"><Skeleton width={100} /></span>
                    <div className="tasks-controls-actions">
                        <Skeleton height={40} width={250} style={{ marginRight: '10px' }} />
                        <Skeleton height={40} width={120} />
                    </div>
                </div>
                <Card className="cards-list-card" padding="24px">
                    <Skeleton count={1} height={30} style={{ marginBottom: '15px' }} />
                </Card>
            </div>
        </div>
    );
}

export default DashboardSkeleton;