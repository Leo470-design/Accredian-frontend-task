import React, { useState } from "react";
import { Container, Button, Typography, Box } from "@mui/material";
import ReferModal from "./ReferModal";

const ReferEarn = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
      <Box sx={{ p: 5, bgcolor: "#f5f5f5", borderRadius: "10px", boxShadow: 3 }}>
        <Typography variant="h3" sx={{ mb: 2, fontWeight: "bold" }}>
          Refer & Earn
        </Typography>
        <Typography variant="h6" sx={{ mb: 3, color: "gray" }}>
          Invite your friends to join the course and earn exciting rewards!
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          onClick={() => setOpen(true)}
        >
          Refer Now
        </Button>
      </Box>

      <ReferModal open={open} handleClose={() => setOpen(false)} />
    </Container>
  );
};

export default ReferEarn;
