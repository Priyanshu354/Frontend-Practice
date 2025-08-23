import React, { useState } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend, Sector, Label } from 'recharts'

const combinedData = [
  { name: "Students Present", value: 160 },
  { name: "Students Absent", value: 40 },
  { name: "Teachers Present", value: 18 },
  { name: "Teachers Absent", value: 2 },
];

const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'];

const renderActiveShape = (props) => {
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value,
  } = props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 20}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const InteractivePieChart = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className='w-full flex justify-center items-center min-h-screen'>
      <ResponsiveContainer width="80%" height={500}>
        <PieChart data={combinedData}>
          <Pie
            cx="50%"
            cy="50%"
            dataKey="value"
            innerRadius={0}
            outerRadius={120}
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {
              combinedData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke={index === activeIndex ? '#000' : '#fff'}
                  strokeWidth={index === activeIndex ? 2 : 1}
                />
              ))
            }
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      {activeIndex !== null && (
        <p className='text-lg mt-4 font-semibold'>
          {`${combinedData[activeIndex].name} : ${combinedData[activeIndex].value}`}
        </p>
      )}
    </div>
  )
}

export default InteractivePieChart;
