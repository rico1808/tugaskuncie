const expect = require('chai').expect;
const api = require('../api_kuncie/api.js');;
const assert = require('chai')



describe('API Get User List', async()=>{
    it('Apakah API Get User Berjalan', async()=>{
    const response = await api.getUserList();
    console.log(response.status);
    assert.expect(response.status).to.equal(200, 'Response seharusnya 200 OK ');
    });
});

describe('API Create User', async()=>{
    it('Apakah API Create User Berjalan', async()=>{
    //TODO : Create User
    let response = await api.CreateUser();
    console.log(response.status);
    assert.expect(response.status).to.equal(200, 'Response seharusnya 200 OK ');
    //TODO : Get User list
    response = await api.getUserList();
    console.log(response.status);
    assert.expect(response.status).to.equal(200, 'Response seharusnya 200 OK ');

    });
    
});

