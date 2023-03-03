const httpLib = require('supertest');
const apKuncie = httpLib('https://api.kunciebootcampqa.com');

function getUserList (){
    return apKuncie.get('/api/bootcamp/users');
}
function getUserDetail(userId) {
    return apKuncie
       .get('/detail/users?id=' + userId);}
//console.log(getUserList());

function CreateUser(){
    return apKuncie
        .post('/api/bootcamp/users')
        .send(
            {
                "name": "Rico145",
                "phone_number": "1111225",
                "address": "Bekasi Selssas15",
                "point": 500,
                "is_registered": true,
                "vehicles": [
                    {
                        "name": "Supra",
                        "type": "Toyota"
                    },
                    {
                        "name": "Mobilio",
                        "type": "Honda"
                    }
                ]
            }
        );
}

function createUserModel2(bodyData) {
    return apKuncie
            .post('/users')
            .send(bodyData);
};

function deleteUser(userId) {
    return apKuncie
        .delete('/users/' + userId);
};


module.exports = {
    getUserList,
    CreateUser,
    getUserDetail,
    createUserModel2,
    deleteUser
}