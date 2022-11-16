import { useState } from 'react';

import Box from '@mui/material/Box';
import { MdDone } from 'react-icons/md';

import { multistepContainer, circle, line } from './style';

export default function MultiStep({ currentForm, setCurrentForm }) {
  const handleClick = (num) => {
    setCurrentForm(num);
  };
  return (
    <Box sx={multistepContainer}>
      <Box
        onClick={() => setCurrentForm(0)}
        sx={{
          ...circle,
          backgroundColor:
            currentForm >= 0 ? 'primary.main' : 'primary.secondary',
        }}
      >
        {currentForm > 0 && <MdDone color='white' width={7} height={4.81} />}
      </Box>
      <Box
        sx={{
          ...line,
          backgroundColor:
            currentForm > 0 ? 'primary.main' : 'primary.secondary',
        }}
      ></Box>
      <Box
        onClick={() => setCurrentForm(1)}
        sx={{
          ...circle,
          backgroundColor:
            currentForm >= 1 ? 'primary.main' : 'primary.secondary',
        }}
      >
        {currentForm > 1 && <MdDone color='white' width={7} height={4.81} />}
      </Box>
      <Box
        sx={{
          ...line,
          backgroundColor:
            currentForm > 1 ? 'primary.main' : 'primary.secondary',
        }}
      ></Box>
      <Box
        onClick={() => setCurrentForm(2)}
        sx={{
          ...circle,
          backgroundColor:
            currentForm >= 2 ? 'primary.main' : 'primary.secondary',
        }}
      >
        {currentForm > 2 && <MdDone color='white' width={7} height={4.81} />}
      </Box>
    </Box>
  );
}
