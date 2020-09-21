const express = require('express');
const _ = require('lodash');
const { v4 } = require('uuid');

module.exports = ({ model }) => {
    const router = express.Router();

    const { Deceased } = model;

    router.post('/newDeceased', async (req, res) => {
        const uuidDesceased = v4();

        try {
            const saved = await Deceased.findOneAndUpdate(
                { uuidDesceased },
                { uuidDesceased },
                { upsert: true, new: true }
            );
            res.status(200).json(saved);
        } catch (error) {
            res.status(500).json(error);
        }
    });

    router.post('/deceasedData', async (req, res) => {
        var uuid = req.body.uuid;

        const deceasedData = new Object({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
        });
        const deceasedPerson = await Deceased.findOne({ uuidDesceased: uuid });
        console.log(deceasedPerson);
        if (deceasedPerson) {
            try {
                await deceasedPerson.deceasedData.push(deceasedData);
                const saved = await deceasedPerson.save();
                res.status(200).json(saved);
            } catch (error) {
                res.status(500).json(error);
            }
        } else {
            res.status(404).json('uuid not found');
        }
    });

    return router;
};
