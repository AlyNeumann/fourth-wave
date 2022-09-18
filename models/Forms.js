import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var formdata = new Schema({
    formType: {
        type: String,
        required: true
    },
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    twitter: {
        type: String
    },
    facebook: {
        type: String
    },
    socialother: {
        type: String
    },
    references: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    wallet: {
        type: String,
    },
    status: {
        type: String,
        required: true
    },
    telegramId: {
        type: String
    },
    vetter: {
        type:String 
    },
    time: {
        type: Date,
        default: Date.now
    }
});

mongoose.models = {};

var Forms = mongoose.model('Forms', formdata);

export default Forms;