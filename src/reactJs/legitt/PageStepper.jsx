import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Send document to IPFS',
    'Generate IPFS url',
    'Connect to MetaMask Wallet',
    'Approved Gas Fees',
    'Past Transaction Details to Polygan',
    'Smart Contract Created'
];

const PageStepper = () => {
    return (
        <Box>
            <Stepper activeStep={1} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
export default PageStepper;