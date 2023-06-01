const express = require('express');
const router = express.Router();
const moment = require('moment');
const sleep  = require('../models/sleeptime');

router.post('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { sleeptime } = req.body;
  
      // Perform validation on the hoursNeeded field
      const isValidFormat = moment(sleeptime, 'HH:mm', true).isValid();
      if (!isValidFormat) {
        return res.status(400).json({ error: 'Invalid clock format. Please provide sleeptime in "HH:mm" format.' });
      }
  
      const user = await sleep.findByIdAndUpdate(
        id,
        { sleeptime },
        { new: true }
      );
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json({ message: 'Sleep time   updated successfully', user });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update sleeptime' });
    }
  });
module.exports = router