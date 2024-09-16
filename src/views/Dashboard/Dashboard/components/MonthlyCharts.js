// src/components/MonthlyCharts.js

import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { LineChart, Line, PieChart, Pie, Cell, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#B5B5B5', '#FF0000', '#800080', '#008000', '#000080', '#FFD700'];

const MonthlyCharts = ({ data }) => {
  console.log("=================== monthly onlinedata============")
  console.log(typeof data); 
  console.log(data)
  return (
    <Box>
      <Heading as="h2" size="md" mb={4}>Réalisations Mensuelles</Heading>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="amount" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="point" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="amount" nameKey="point" cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default MonthlyCharts;
