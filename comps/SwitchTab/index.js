import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import styled from 'styled-components';


const SwitchCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 316px;
`;

const SwitchTab = ({
  Label = "Dark Mode"
}) => {
  return <SwitchCont>
    <FormControlLabel
      value="start"
      control={<Switch color="primary" />}
      label={Label}
      labelPlacement="start"
    />
  </SwitchCont>
};

export default SwitchTab;