const express = require("express")
const router = express.Router();
const NickName = require("../models/nickname");
const SleepActiviyChanges = require("../models/activitychangessleep");
const Struggle = require("../models/struggle");
const SleepTime = require("../models/sleeptime")
const Wakeup = require("../models/wakeup");
const SleepNeeded = require('../models/sleepneededhours')

router.post('/', async (req, res) => {
    try {
      const { nickname, password} = req.body;
      const user = new NickName({ nickname, password });
      await user.save();
      const sleepActiviyChanges = new SleepActiviyChanges({id : user._id});
      await sleepActiviyChanges.save();
      const struggle = new Struggle({id : user._id});
      await struggle.save();
      const wakeup = new Wakeup({id : user._id});
      await wakeup.save();
      const sleeptime = new SleepTime({id:user._id})
      await sleeptime.save()
      const sleepneeded = new SleepNeeded({id:user._id})
      await sleepneeded.save()
      res.status(200).json({ message: 'User created successfully', user });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  });
  router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { nickname } = req.body;
      const user = await NickName.findByIdAndUpdate(id, { nickname }, { new: true });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'Nickname updated successfully', user });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update nickname' });
    }
  });
  module.exports = router

  