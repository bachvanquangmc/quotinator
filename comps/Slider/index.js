import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

import {useQuote} from "@/utils/provider";

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};


const marks = [
  {
    value: 0,
  },
  {
    value: 20,
  },
  {
    value: 37,
  },
  {
    value: 100,
  },
];

const PrettoSlider = styled(Slider)({
  color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});


export default function CustomizedSlider({ onchange=()=>{}}) {

  // const [num, setNum] = useState(10);
  // console.log(num);

  const { qts, setQts } = useQuote();
  console.log(qts);

  const handleChange = (e, qts) => {
    setQts(qts);
  }

  return (
    <Box sx={{ width: 150 }}>
      <Box sx={{ m: 3 }} />
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={25}
        min={10}
        max={50}
        value={qts}
        onChange={handleChange}
      />
    </Box>
  );
}