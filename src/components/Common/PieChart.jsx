import { PieChart, Pie, Cell, Tooltip } from 'recharts';



const COLORS = ['#5285EC', '#E8ECEC'];

function PieChartComponent({totalTasks, completedTasks}) {

    const data = [
    { name: 'Completed Tasks', value: completedTasks },
    { name: 'Remaining', value: Number(totalTasks - completedTasks) },
];
    const renderCustomLabel = ({ name, x, y, textAnchor, index }) => {
        if (name !== "Completed Tasks") return null;
        return (
            <text
                x={x}
                y={y}
                textAnchor={textAnchor}
                fill="#5285EC"
                fontSize={8}
                fontWeight={500}
            >
                {name}
            </text>
        );
    };

    /* 🧩 Optional: draw line only for the completed slice */
    const renderCustomLabelLine = (props) => {
        const { points, name } = props;
        if (name !== "Completed Tasks") return null;
        const [start, end] = points;
        return (
            <line
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke="#5285EC"
                strokeWidth={1.5}
            />
        );
    };

    return (
        <PieChart width={'100%'} height={'100%'} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
            <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={30}
                labelLine={renderCustomLabelLine}
                label={renderCustomLabel}
            >
                {data.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                ))}
            </Pie>
            <Tooltip />
        </PieChart>
    )
}

export default PieChartComponent;
