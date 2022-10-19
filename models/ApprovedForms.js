import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var formdata = new Schema({
    telegramId: {
        type: String,
        required: true
    },
    password: {
        type: String,
    },
    wallet: {
        type: String,
        required: true
    },
    NFTaddress: {
        type: String
    },
    location: {
        type: "Point",
        coordinates: [],
        required: true
    },
    vetterwallet: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    }
});

mongoose.models = {};

var ApprovedForms = mongoose.model('ApprovedForms', formdata);

export default ApprovedForms;