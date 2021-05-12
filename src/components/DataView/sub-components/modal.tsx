import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DayPicker from 'react-day-picker';

export const CreateShipmentModal = (props: any) => {
  const { 
      classes, 
      mode, 
      open, 
      openMenu, 
      handleMenuOpen,
      handleMenuClose, 
      handleClose, 
      handleChange, 
      handleShipment, 
      setEstimateDeparture, 
      setEstimateArrival 
    } = props;

  return (
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Freight</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Creates a Fake Freight Shipment Order.
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="clientName"
                label="Client name"
                type="input"
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="origin"
                label="Origin Address"
                type="input"
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="destination"
                label="Destination Address"
                type="input"
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="destination"
                label="Destination Address"
                type="input"
                fullWidth
            />
            <FormControl className={classes.formControl}>
                <InputLabel id="mode-controlled-open-select-label">Mode</InputLabel>
                <Select
                    labelId="mode-controlled-open-select-label"
                    id="mode-controlled-open-select"
                    open={openMenu}
                    onClose={handleMenuClose}
                    onOpen={handleMenuOpen}
                    value={mode}
                    onChange={handleChange}
                    fullWidth
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value="rail">Rail</MenuItem>
                <MenuItem value="air">Air</MenuItem>
                <MenuItem value="sea">Sea</MenuItem>
                </Select>
            </FormControl>
            {/* <div className="day-picker-selection" >
                <span>Estimate Departure</span>
                <DayPicker onDayClick={ (day) => setEstimateDeparture(day) }/> 
            </div>
            <div className="day-picker-selection" >
                <span>Estimate Arrival</span>
                <DayPicker onDayClick={ (day) => setEstimateArrival(day) }/> 
            </div> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleShipment} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
  );
}