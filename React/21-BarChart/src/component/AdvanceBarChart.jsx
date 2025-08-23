import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { BarChart, ResponsiveContainer , Bar, YAxis, XAxis, Tooltip, Legend, Cell, LineChart, Line} from 'recharts'

const AdvanceBarChart = () => {
    const [data, setData] = useState([
        { ageGroup: "18-24", users: 400, average: 300},
        { ageGroup: "25-30", users: 876, average: 234},
        { ageGroup: "31-40", users: 589, average: 123},
        { ageGroup: "41-50", users: 399, average: 233},
        { ageGroup: "50+", users: 200, average: 45},
    ]);

    // data.sort((a, b) => a.users - b.users);

    const [maxIndex, setMaxIndex] = useState();
    useEffect(() => {
        let index = 0;
        let maxi = 0;
        data.forEach((item, i) => {
            if(item.users > maxi){
                index = i;
                maxi = item.users;
            }
        })

        setMaxIndex(index);
    },[data]);
    
    const COLORS = ["#4F46E5", "#06B6D4", "#22C55E", "#F59E0B", "#EF4444"];

    const customLengend = ( props) => {
        return (
            <div className='w-full flex justify-center items-center gap-5'>
                {data.map((ele, index) => {
                    return <div key={index} className='flex gap-2 justify-center items-center'>
                        <div className='h-6 w-8 rounded-md' style={{backgroundColor: COLORS[index]}}></div>
                        <h3 className='text-sm font-semibold '> {ele.ageGroup} </h3>
                    </div>
                })}
            </div>
        )
    }

    const customActiveBar = (props) => {
        const { x, y, width, height, fill } = props;

        return (
            <g>
                <rect
                    x={x}
                    y={y - 4}
                    width={width}
                    height={height + 2}
                    fill={fill}
                    rx={8}
                    ry={8}
                    opacity={0.8}
                    stroke="#000"
                    strokeWidth={1}
                />
            </g>
        );
    };

    const customLable = (props) => {
        //console.log("new Props", props);
        const {value, x, y, index} = props
        // console.log("lable", props);
        return <g>
        <text
        x={x}
        y={y-10}
        fill="black"> {value} </text>

        ({maxIndex === index && <text
        x={x+30}
        y={y-10}
        fill="black"> (👑) </text>})
        </g>
    }

  return (
    <div className='w-full h-full flex justify-center items-center p-10'>
        <ResponsiveContainer width="100%" height={600}>
            <BarChart
            data={data}
            >
                <XAxis dataKey="ageGroup" />
                <YAxis />
                <Bar 
                dataKey="users"
                activeBar={customActiveBar}
                label={customLable}
                //onClick={(props)=> console.log(props.index)}
                >
                    {
                        COLORS.map((color, i) => {
                            return <Cell 
                            key={i} fill={color}/>
                        })
                    }
                </Bar>

                <Bar 
                dataKey="average"
                activeBar={customActiveBar}
                label={customLable}
                >
                    {
                        COLORS.map((color, i) => {
                            return <Cell key={i} fill={color}/>
                        })
                    }
                </Bar>
                <Tooltip  
                cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                />
                <Legend content={customLengend}/>
            </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default AdvanceBarChart