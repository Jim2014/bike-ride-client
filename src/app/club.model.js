var mongoose = require("mongoose");
var clubSchema = new mongoose.Schema({
    "name": String,
    "loc": Array,
    "city": String,
    "users": Array,
});
clubSchema.index({
 loc: "2d"
})
module.exports = mongoose.model('club', clubSchema);