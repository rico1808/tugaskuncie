const expect = require('chai').expect;
const api = require('../api_kuncie/api.js');
const { it } = require('mocha');
const assert = require('chai').assert;
const dataTest = require('../data/data_user.js');


describe('API Create User', async()=>{
    
    it('Apakah API Create User Positive Berjalan?', async()=>{
        
    //TODO : Create User Positive Case default
    let response = await api.CreateUser();
    
    console.log(response.body)
    //Assertion response status
    assert.equal(response.status, 200, 'Response 200 OK ');
    

    //POSITIVE CASE 1 Apakah alamat user yg baru dibuat sesuai?
    
    const AddressUser = response.body.address;
    const nameUser = response.body.name;
    response = await api.getUserList();
    //expect(response.status).to.equal(200);
    resultFilter1 = response.body.data.filter((element) =>{
        return element.address === AddressUser;
    });

    //POSITIVE CASE 2 Apakah name yang baru dibuat sesuai?
    resultFilter2 = response.body.data.filter((element) =>{
    return element.name === nameUser;
        
    });
    console.log(resultFilter1);
    console.log(resultFilter2);
    expect(resultFilter1.length).to.greaterThan(0,'Tidak ada data yang anda buat')
    expect(resultFilter2.length).to.greaterThan(0,'Tidak ada data yang anda buat')
});
    

});

describe('API Create User', async()=>{

    it('Apakah API Create Use Negative Berjalan?', async()=>{

        const bodyData = dataTest.dataUser;
        bodyData.point ='wkwkwk1wkwk';
        bodyData.is_registered = 'lol';
        bodyData.vehicles = 11;

        console.log(bodyData);
        response = await api.createUserModel2(bodyData);
        expect(response.status).to.equal(404,'Ini kenapa tidak 400?')

    })

    it('Apakah API Create Use Negative 1 Berjalan?', async()=>{

        const bodyData = dataTest.dataUser;
        bodyData.point ='wkwkwk';

        console.log(bodyData);
        response = await api.createUserModel2(bodyData);
        expect(response.status).to.equal(404,'Ini kenapa tidak 400?')

    })
    it('Apakah API Create User Negative 2 Berjalan?', async()=>{

        const bodyData = dataTest.dataUser;
        bodyData.is_registered ='1234';

        console.log(bodyData);
        response = await api.createUserModel2(bodyData);
        expect(response.status).to.equal(404,'Ini kenapa tidak 400?')

    })

    describe('APi Detele dengan Hooks', async () => {
    let idUser = '';

    before(async () => {
        let response = await api.CreateUser('TEST RICOOO');
        expect(response.status).to.equal(200);
        console.log(response.body);
        const idUser = response.body.id;
    })
        it('mendapatkan userlist', async () => {
            response = await api.getUserList();
            expect(response.status).to.equal(200);
        });
             it('Proses delete', async () => {
        response = await api.deleteUser(idUser)
    });
       it('get user yang sudah terdelete', async () => {
        response = await api.getUserDetail(idUser);
        expect(response.status).to.equal(404);
        
    });
});
});

