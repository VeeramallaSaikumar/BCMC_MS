import { test, expect } from '@playwright/test';
import * as helpers from '../../../utils/helpers';

test.describe('Add Candidate API @Client', () => {

  test('Add_Candidate', async ({ request }) => {
    const randomNumber = Math.floor(Math.random() * 1000);
    const name = await helpers.excelfetch('testData/information.xlsx', 'Client', 2, 2);
    const fullname = name + ' ' + 'Auto';
    const email = await helpers.excelfetch('testData/information.xlsx', 'Client', 3, 2);
    const emailformat=await helpers.excelfetch('testData/information.xlsx', 'Client', 4, 2);
    const emailID = email + randomNumber + emailformat;
    const phone = await helpers.excelfetch('testData/information.xlsx', 'Client', 6, 2);
    const response = await request.post('/user/register/candidate', {
      data: {
        fullname: name,
        email: emailID,
        dateOfBirth: '1990-01-01',
        mobileNumber: phone,
      },
    });
    const responsebody = await response.json();
    console.log('Resonse:', responsebody);
    expect(response.status()).toBe(201);
    console.log('\x1b[32m%s\x1b[0m', `Candidate added successfully: ${responsebody.message}`);
  });
})