const express = require('express');
const _ = require('lodash');

module.exports = ({ model }) => {
    const router = express.Router();

    const { Deceased } = model;

    router.post('/newDeceased', async (req, res) => {
        var deceasedName = req.body.deceasedName;

        try {
            const saved = await Deceased.findOneAndUpdate(
                { deceasedName },
                { deceasedName },
                { upsert: true, new: true }
            );
            res.status(200).json(saved);
        } catch (error) {
            res.status(500).json(error);
        }
    });

    return router;
};
