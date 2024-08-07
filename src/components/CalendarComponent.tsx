import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button, CircularProgress, Box, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { SlotData } from '../types/types';
import { fetchAvailableSlots } from '../api/api';
import { format, parseISO, isSameDay } from 'date-fns';

interface CalendarComponentProps {
  doctorId: number;
  onDateSelect: (date: string) => void;
  onTimeSelect: (time: string) => void;
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({ doctorId, onDateSelect, onTimeSelect }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availableSlots, setAvailableSlots] = useState<SlotData[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [selectedDaySlots, setSelectedDaySlots] = useState<string[]>([]);

  useEffect(() => {
    const fetchSlots = async () => {
      setLoading(true);
      try {
        const slots = await fetchAvailableSlots(doctorId);
        setAvailableSlots(slots);
        const dates = slots.map(slot => slot.date);
        setAvailableDates(dates);
        setLoading(false);
      } catch (error) {
        setErrorMessage('Error al cargar los horarios disponibles.');
        setLoading(false);
      }
    };

    fetchSlots();
  }, [doctorId]);

  useEffect(() => {
    if (selectedDate) {
      const formattedDate = format(selectedDate, 'yyyy-MM-dd');
      const selectedSlot = availableSlots.find(slot => slot.date === formattedDate);
      if (selectedSlot) {
        setSelectedDaySlots(selectedSlot.slots);
        setErrorMessage('');
      } else {
        setSelectedDaySlots([]);
        setErrorMessage('No hay horas disponibles para la fecha seleccionada.');
      }
      onDateSelect(formattedDate);
    } else {
      setSelectedDaySlots([]);
    }
  }, [selectedDate, availableSlots, onDateSelect]);

  const handleDateChange = (newValue: Date | null) => {
    setSelectedDate(newValue);
  };

  const handleTimeSelection = (time: string) => {
    onTimeSelect(time);
  };

  const disableUnavailableDates = (date: Date) => {
    return !availableDates.some(availableDate => isSameDay(date, parseISO(availableDate)));
  };

  return (
    <Box sx={{ mt: 2 }}>
      <DatePicker
        label="Seleccionar Fecha"
        value={selectedDate}
        onChange={handleDateChange}
        renderInput={(params) => <TextField {...params} />}
        shouldDisableDate={disableUnavailableDates}
      />
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          {errorMessage ? (
            <Typography variant="h6" color="error" sx={{ mt: 2 }}>{errorMessage}</Typography>
          ) : (
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {selectedDaySlots.map((time, index) => (
                <Grid item key={index}>
                  <Button variant="outlined" onClick={() => handleTimeSelection(time)}>
                    {time}
                  </Button>
                </Grid>
              ))}
            </Grid>
          )}
        </>
      )}
    </Box>
  );
};

export default CalendarComponent;
