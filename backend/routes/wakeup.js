const express = require('express');
const router = express.Router();
const moment = require('moment');
const wake  = require('../models/wakeup');

router.post('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { wakeup } = req.body;
  
      // Perform validation on the hoursNeeded field
      //const isValidFormat = moment(wakeup, 'HH:mm', true).isValid();
      // if (!isValidFormat) {
      //   return res.status(400).json({ error: 'Invalid clock format. Please provide wakeup in "HH:mm" format.' });
      // }
  
      const user = await wake.findOneAndUpdate(
        {id : id},
        { WakeUpTime : wakeup },
        { new: true }
      );
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json({ message: 'Wakeup updated successfully', user });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update Wakeup' });
    }
  });
module.exports = router
