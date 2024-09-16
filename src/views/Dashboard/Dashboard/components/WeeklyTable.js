// src/components/WeeklyTable.js

import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Point de Perception',
    selector: row => row.point,
    sortable: true,
  },
  {
    name: 'Montant',
    selector: row => row.amount,
    sortable: true,
    right: true,
  },
];

const WeeklyTable = ({ data }) => {
  return (
    <Box>
      <Heading as="h2" size="md" mb={4}>Réalisations Hebdomadaires</Heading>
      <DataTable
        columns={columns}
        data={data}
        pagination
      />
    </Box>
  );
};

export default WeeklyTable;
