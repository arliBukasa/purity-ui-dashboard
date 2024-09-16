// src/components/KanbanBoard.js

import React from 'react';

import {SimpleGrid } from '@chakra-ui/react';
import MiniStatistics from './MiniStatistics';
import { WalletIcon } from 'components/Icons/Icons';


const KanbanBoard = ({ data }) => {

  console.log("=================== Daily onlinedata============")
  console.log(typeof data); 
  console.log(data)

  return (
    
    <SimpleGrid columns={{ sm: 1, md: 2, xl: 6 }} spacing='24px'>
    {data.map((item,index) => (
    <MiniStatistics
      key={item.id}
      title={"Patients Consultés aujourdh'ui"}
      amount={item.point}
      percentage={55}
      icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
    />
    ))} 
  </SimpleGrid>
     );
};

export default KanbanBoard;
