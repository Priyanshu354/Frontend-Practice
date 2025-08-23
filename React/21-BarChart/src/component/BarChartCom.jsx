import React, { useState } from 'react';
import {
    Bar,
    BarChart,
    Legend,
    ResponsiveContainer,
    Tooltip,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

const BarChartCom = () => {
    const [data, setData] = useState([
        { brand: "Apple", stock: 25 },
        { brand: "Nokia", stock: 45 },
        { brand: "Samsung", stock: 66 },
        { brand: "Lenovo", stock: 94 },
        { brand: "MicroMax", stock: 26 },
        { brand: "Killer", stock: 29 },
    ]);

    const colors = ["red", "green", "blue", "aqua", "yellow", "gray"];

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <ResponsiveContainer width="100%" height={600}>
                <BarChart data={data}>
                    <XAxis dataKey="brand" />
                    <YAxis ticks={[0, 20, 40, 60, 80, 100]} />
                    <CartesianGrid stroke='pink' strokeWidth={2} strokeDasharray="5 5" />
                    <Tooltip />
                    <Legend />

                    <Bar
                        dataKey="stock"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartCom;
