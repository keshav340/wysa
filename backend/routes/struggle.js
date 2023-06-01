const express = require('express');
const router = express.Router();
const SleepStruggle = require('../models/struggle');

router.post('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { Struggleoption } = req.body;
  
      const user = await SleepStruggle.findOneAndUpdate(
        {id : id},
        { Struggleoption },
        { new: true }
      );
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json({ message: 'Struggle option updated successfully', user });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  });
  
  module.exports = router
