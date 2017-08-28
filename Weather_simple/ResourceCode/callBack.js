
var getUser = (id, callback) => {
    var user = {
        id: id,
        name: "Rey"
    }

    callback(user)
};

getUser(32, (userObject) => {
    console.log(userObject)
});

//https://maps.googleapis.com/maps/api/geocode/json?key=value
