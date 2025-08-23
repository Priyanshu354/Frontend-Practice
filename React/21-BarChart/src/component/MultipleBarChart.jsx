import React, { useState } from 'react';
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

const MultipleBarChart = () => {
  const [data] = useState([
    { brand: "Apple", stock: 25, sales: 40 },
    { brand: "Nokia", stock: 45, sales: 35 },
    { brand: "Samsung", stock: 66, sales: 55 },
    { brand: "Lenovo", stock: 94, sales: 70 },
    { brand: "MicroMax", stock: 26, sales: 20 },
    { brand: "Killer", stock: 29, sales: 25 },
  ]);

  return (
    <div className='w-full h-full flex justify-center items-center p-4'>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="brand" />
          <YAxis ticks={[0, 20, 40, 60, 80, 100]} />
          <Tooltip />
          <Legend />
          
          {/* First bar */}
          <Bar dataKey="stock" nameKey="Stock" fill="#8884d8" />

          {/* Second bar */}
          <Bar dataKey="sales" nameKey="Sales" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MultipleBarChart;
