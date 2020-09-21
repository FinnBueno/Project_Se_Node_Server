const { uniqueId } = require('lodash');
const _ = require('lodash');
const uuid = require('uuid');
const { Schema } = require('mongoose');

module.exports = (dbConn) => {
    const deceasedData = Schema(
        {
            firstname: String,
            lastname: String,
        },
        {
            _id: false,
            versionKey: false,
        }
    );

    const deceasedSchema = Schema(
        {
            uuidDesceased: { type: String, default: uuid.v4() },
            deceasedData: {
                type: [deceasedData],
                default: [],
            },
        },
        {
            versionKey: false,
        }
    );

    deceasedSchema.index({ _id: 1, uuidDesceased: 1 }, { unique: true });

    return dbConn.model('deceased', deceasedSchema);
};
