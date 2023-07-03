import React from 'react';
import './chart.scss'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    {
      name: 'January',
      total: 1200
    },
    {
      name: 'February',
      total: 700
    },
    {
        name: 'March',
        total: 1450
    },
    {
        name: 'April',
        total: 800
    },
    {
        name: 'May',
        total: 1300
    },
    {
        name: 'June',
        total: 900
    }
  ];

const Chart = ({aspect, title}) => {
    return (
        <div className='chart'>
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <AreaChart width={730} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke='lightgray'/>
                <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
                <Tooltip />
                <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;
