import React from 'react';
import { TextField, Box } from '@mui/material';

interface QueryReasonInputProps {
  queryReason: string;
  setQueryReason: (reason: string) => void;
}

const QueryReasonInput: React.FC<QueryReasonInputProps> = ({ queryReason, setQueryReason }) => {
  const handleQueryReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryReason(event.target.value);
  };

  return (
    <Box sx={{ mt: 2 }}>
      <TextField
        label="Motivo de la Consulta"
        value={queryReason}
        onChange={handleQueryReasonChange}
        multiline
        rows={4}
        variant="outlined"
        fullWidth
      />
    </Box>
  );
};

export default QueryReasonInput;
