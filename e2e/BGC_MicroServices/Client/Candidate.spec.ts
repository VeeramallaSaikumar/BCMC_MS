import { test, expect } from '@playwright/test';
import * as helpers from '../../../utils/helpers';

test.describe('Add Candidate API @Client', () => {

  test('Add_Candidate', async ({ request }) => {
    const fullname = await helpers.excelfetch('testData/information.xlsx', 'Client', 2, 2);
    const email = await helpers.excelfetch('testData/information.xlsx', 'Client', 2, 3);
    const phone = await helpers.excelfetch('testData/information.xlsx', 'Client', 2, 4);
    const response = await request.post('/candidate/add', {
      data: {
        fullname: fullname,
        email: email,
        phone: phone,
      },
    });
    const responsebody = await response.json();
    expect(response.status()).toBe(201);
    console.log('\x1b[32m%s\x1b[0m', `Candidate added successfully: ${responsebody.message}`);
  });
})