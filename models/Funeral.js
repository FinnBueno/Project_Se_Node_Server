const _ = require('lodash');
const { Schema } = require('mongoose');
const AutoIncrementFactory = require('mongoose-sequence');

module.exports = (dbConn) => {
    const AutoIncrement = AutoIncrementFactory(dbConn);

    const deceasedSchema = Schema(
        {
            deceasedId: Number,
            deceasedName: String,
        },
        {
            _id: false,
            versionKey: false,
        }
    );

    deceasedSchema.index(
        { deceasedId: 1 },
        { unique: true, partialFilterExpression: { deceasedId: { $type: 'string' } } }
    );

    deceasedSchema.plugin(AutoIncrement, { inc_field: 'deceasedId' });

    return dbConn.model('deceased', deceasedSchema);
};
