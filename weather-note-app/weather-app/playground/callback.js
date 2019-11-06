let getUser = (id, callback) => {
    let user = {
        id: id,
        name: 'vikram'
    };
    setTimeout(() => {
        callback(user);
    }, 3000)
};

getUser(31, (userOne) => {
    console.log(userOne);
});