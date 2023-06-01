const express = require('express');
const router = express.Router();
const HoursNeeded  = require('../models/sleepneededhours');

router.post('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { hoursNeeded } = req.body;
  
      // Perform any additional validation on the hoursNeeded field if needed
  
      const newHoursNeeded = new HoursNeeded({id, hoursNeeded });
      await newHoursNeeded.save();
  
      res.json({ message: 'Hours needed entry created successfully', hoursNeeded: newHoursNeeded });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create hours needed entry' });
    }
  });
  
module.exports = router
