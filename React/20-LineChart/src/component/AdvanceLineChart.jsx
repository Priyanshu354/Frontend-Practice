import React, {useState} from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from 'recharts';

const AdvanceLineChart = () => {
    const [data, setData] = useState([
        { ageGroup: "18-24", users: 400, average: 300},
        { ageGroup: "25-30", users: 876, average: 234},
        { ageGroup: "31-40", users: 589, average: 123},
        { ageGroup: "41-50", users: 399, average: 233},
        { ageGroup: "50+", users: 200, average: 45},
    ]);

    const COLORS = ["#4F46E5", "#06B6D4", "#22C55E", "#F59E0B", "#EF4444"];

    const customLabel = (props) => {
        const {x, y, value, index} = props;
        console.log(props);

        return (
            <text
            x={x}
            y={y-4}
            fill={COLORS[index]}
            fontSize={14}>
                {
                   value 
                }
            </text>
        )
    }

  return (
    <div className='w-full h-full flex justify-center items-center'>
        <ResponsiveContainer width="100%" height={600}>
            <LineChart
            data={data}
            margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
            style={{ background: '#f1f5f9' }}>
                <XAxis dataKey="ageGroup" stroke="pink" tick={{fill : "black"}}/>
                <YAxis stroke="pink" tick={{fill : "black"}}/>
                <Line dataKey="users" type='monotone' stroke='pink' strokeWidth={3} label={customLabel}>
                </Line>

                <Line dataKey="average" type='monotone' stroke='blue'></Line>

                <ReferenceLine x="25-30" stroke='red'></ReferenceLine>
                <Tooltip/>
                <Legend/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default AdvanceLineChart