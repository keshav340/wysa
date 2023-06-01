const express = require('express');
const router = express.Router();
const SleepActivity = require('../models/activitychangessleep');

// Update the sleep changes options of an existing user
router.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { changesOptions } = req.body;
    const user = await SleepActivity.findByIdAndUpdate(
      id,
      { $push: { changesOptions: { $each: changesOptions } } },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'Sleep changes options updated successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update sleep changes options' });
  }
});

module.exports = router;
