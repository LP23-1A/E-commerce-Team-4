"use client"
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '3/1',
    uv: 4000,
    amt: 2400,
  },
  {
    name: '3/2',
    uv: 3000,
    amt: 1000,
  },
  {
    name: '3/3',
    uv: 2000,
    amt: 2290,
  },
  {
    name: '3/4',
    uv: 2780,
    amt: 2000,
  },
  {
    name: '3/5',
    uv: 1890,
    amt: 2181,
  },
  {
    name: '3/6',
    uv: 2390,
    amt: 2500,
  },
  {
    name: '3/7',
    uv: 3490,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 50,
            left: 0,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis/>
          <Tooltip/>
          <Legend/>
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
