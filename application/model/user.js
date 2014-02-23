/**
 * Created by Iruna on 23.02.14.
 */
module.exports = function (mongoose) {

    var UserSchema = new mongoose.Schema({
        email: { type: String, unique: true },
        password: { type: String },
        permissions:{type: String},
        firstName: {type: String},
        lastName: {type: String},
        login: {type: String, unique: true }
    });

    var User = mongoose.model('User', UserSchema);

    //put custom methods here

    return {
        User: User
    }
}