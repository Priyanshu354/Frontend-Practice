import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const MultiLevelPieChart = () => {
    const InnerData = [
        { branch: "CSE", student: 210 },
        { branch: "IT", student: 125 },
        { branch: "DS", student: 176 },
        { branch: "AIML", student: 90 },
    ];

    const OuterData = [
        { name: "male", value: 120 },
        { name: "female", value: 90 },
        { name: "male", value: 65 },
        { name: "female", value: 60 },
        { name: "male", value: 130 },
        { name: "female", value: 46 },
        { name: "male", value: 70 },
        { name: "female", value: 20 },
    ];

    const colors1 = ["red", "green", "blue", "yellow"];
    const colors2 = ["red", "red", "green", "green", "blue", "blue", "yellow", "yellow"];

    const CustomLegend = () => {
        return (
            <ul style={{ listStyle: "none", padding: 0, textAlign: "center" }}>
                {InnerData.map((item, index) => (
                    <li key={item.branch} style={{ display: "inline-flex", alignItems: "center", marginRight: 12 }}>
                        <div
                            style={{
                                width: 12,
                                height: 12,
                                backgroundColor: colors1[index],
                                borderRadius: "50%",
                                marginRight: 6,
                                border: "1px solid black",
                            }}
                        ></div>
                        <span style={{ fontWeight: "500" }}>{item.branch}</span>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className='w-full flex justify-center items-center'>
            <ResponsiveContainer width='100%' height={600}>
                <PieChart width={600} height={600}>
                    {/* Inner Layer */}
                    <Pie
                        data={InnerData}
                        dataKey="student"
                        nameKey="branch"
                        cx="50%"
                        cy="50%"
                        innerRadius={0}
                        outerRadius={100}
                    >
                        {colors1.map((color, i) => (
                            <Cell
                                key={`inner-${i}`}
                                fill={color}
                                stroke='black'
                                strokeWidth={2}s
                                className='pie-cell'
                            />
                        ))}
                    </Pie>

                    {/* Outer Layer */}
                    <Pie
                        data={OuterData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={100}
                        outerRadius={200}
                    >
                        {colors2.map((color, i) => (
                            <Cell
                                key={`outer-${i}`}
                                fill={color}
                                stroke='black'
                                strokeWidth={2}
                                className='pie-cell'
                            />
                        ))}
                    </Pie>

                    <Tooltip />
                    <Legend content={<CustomLegend />} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MultiLevelPieChart;
