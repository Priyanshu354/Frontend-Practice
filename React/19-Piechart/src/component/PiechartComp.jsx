import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { priyanshu: "Chrome", kill: 98 },
  { priyanshu: "Firefox", kill: 20 },
  { priyanshu: "Safari", kill: 8 },
  { priyanshu: "Others", kill: 40 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const renderCustomLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percentage, index, name, value, payload
}) => {
  //console.log(payload);
  const RADIAN = Math.PI / 180;

  const radius = (outerRadius - innerRadius) * 0.5;

  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor="middle"
      dominantBaseline="central"
      >
      {`${name} : ${value}`}
    </text>
  )
} 

const PiechartComp = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={130}
            innerRadius={0}
            dataKey="kill"
            nameKey="priyanshu"
            label={renderCustomLabel}
            labelLine={false}
            >
              {
                data.map((entry, index) => {
                  return <Cell key={index} fill={COLORS[index]}/>
                })
              }
          </Pie>
          <Legend/>
          <Tooltip/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PiechartComp
