import {test,expect} from '@playwright/test';
import * as helpers from '../../../utils/helpers';

test.describe('Create Employee API @Admin', () => {

test('Create Employee With Valid Details', async ({ request }) => {
    const fullname = await helpers.excelfetch('testData/information.xlsx', 'Admin', 2, 2);
    const comapany = await helpers.excelfetch('testData/information.xlsx', 'Admin', 2, 1);
    const phone = await helpers.excelfetch('testData/information.xlsx', 'Admin', 2, 4);
    const email = await helpers.excelfetch('testData/information.xlsx', 'Admin', 2, 3);
    const password = await helpers.excelfetch('testData/information.xlsx', 'Admin', 2, 5);
    const role = await helpers.excelfetch('testData/information.xlsx', 'Admin', 2, 6);
    const gender = await helpers.excelfetch('testData/information.xlsx', 'Admin', 2, 7);
    const dob = await helpers.excelfetch('testData/information.xlsx', 'Admin', 2, 8);

    const response = await request.post('/admin/users/register', {
      data: {
        username: fullname,
        companyname: comapany,
        phone: phone,
        email: email,
        password: password,
        role: role,
        gender:gender,
        dateOfBirth:dob
      },
    });   
    const responsebody = await response.json();
    expect(response.status()).toBe(201);
    console.log('\x1b[32m%s\x1b[0m', `Candidate added successfully: ${responsebody.message}`);
  });
test('Create Employee With Email already Exists', async ({ request }) => {
    const fullname = await helpers.excelfetch('testData/information.xlsx', 'Admin', 2, 2);
    const comapany = await helpers.excelfetch('testData/information.xlsx', 'Admin', 2, 1);
    const phone = await helpers.excelfetch('testData/information.xlsx', 'Admin', 2, 4);
    const email = await helpers.excelfetch('testData/information.xlsx', 'Admin', 2, 3);
    const password = await helpers.excelfetch('testData/information.xlsx', 'Admin', 2, 5);
    const role = await helpers.excelfetch('testData/information.xlsx', 'Admin', 2, 6);
    const gender = await helpers.excelfetch('testData/information.xlsx', 'Admin', 2, 7);
    const dob = await helpers.excelfetch('testData/information.xlsx', 'Admin', 2, 8);

    const response = await request.post('/admin/users/register', {
      data: {
        username: fullname,
        companyname: comapany,
        phone: phone,
        email: email,
        password: password,
        role: role,
        gender:gender,
        dateOfBirth:dob
      },
    });   
    const responsebody = await response.json();
    expect(response.status()).toBe(400);
    console.log('\x1b[32m%s\x1b[0m', `Candidate added successfully: ${responsebody.message}`);
})

})