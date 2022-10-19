import React, { useContext } from 'react';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { CartContext } from './Root';

const PaiChart = () => {
    const [cart] =useContext(CartContext)
    return (
        <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={cart}>
          <Bar dataKey="id" fill="#8884d8" />
          <XAxis dataKey="name"/>
          <YAxis/>
        </BarChart>
      </ResponsiveContainer>
    );
};

export default PaiChart;