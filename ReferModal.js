import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Grid } from "@mui/material";

const ReferModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({ 
    referrerName: "", 
    referrerEmail: "", 
    refereeName: "", 
    refereeEmail: "" 
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) tempErrors[field] = "This field is required";
    });
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Referral Data:", formData);
      handleClose();
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Refer a Friend</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={6}>
            <TextField 
              label="Your Name" 
              fullWidth 
              value={formData.referrerName} 
              onChange={(e) => setFormData({ ...formData, referrerName: e.target.value })} 
              error={!!errors.referrerName} 
              helperText={errors.referrerName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField 
              label="Your Email" 
              type="email" 
              fullWidth 
              value={formData.referrerEmail} 
              onChange={(e) => setFormData({ ...formData, referrerEmail: e.target.value })} 
              error={!!errors.referrerEmail} 
              helperText={errors.referrerEmail}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField 
              label="Friend's Name" 
              fullWidth 
              value={formData.refereeName} 
              onChange={(e) => setFormData({ ...formData, refereeName: e.target.value })} 
              error={!!errors.refereeName} 
              helperText={errors.refereeName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField 
              label="Friend's Email" 
              type="email" 
              fullWidth 
              value={formData.refereeEmail} 
              onChange={(e) => setFormData({ ...formData, refereeEmail: e.target.value })} 
              error={!!errors.refereeEmail} 
              helperText={errors.refereeEmail}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReferModal;
