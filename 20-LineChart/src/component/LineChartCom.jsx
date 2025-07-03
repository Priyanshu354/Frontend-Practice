import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

const LineChartCom = () => {
  const data = [
    { day: 'Mon', sales: 12 },
    { day: 'Tue', sales: 19 },
    { day: 'Wed', sales: 3 },
    { day: 'Thu', sales: 5 },
    { day: 'Fri', sales: 2 },
    { day: 'Sat', sales: 3 },
    { day: 'Sun', sales: 7 },
  ];

  return (
    <div className='w-full h-screen flex justify-center items-center bg-gray-50'>
      <div className='w-[90%] max-w-[700px] h-[400px] border border-blue-500'>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{ top: 50, right: 20, left: 20, bottom: 50 }}
          >
            <CartesianGrid stroke="pink" strokeDasharray="5 5" />
            <XAxis dataKey="day" />
            <YAxis
            tick={({ x, y, payload }) => (
                <text x={x} y={y} fill="red" fontSize={12} textAnchor="end">
                {payload.value} units
                </text>
            )}
            />
            <Tooltip />
            <Legend />
            <Line dataKey="sales" type='monotone' stroke='#8884d8' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartCom;
