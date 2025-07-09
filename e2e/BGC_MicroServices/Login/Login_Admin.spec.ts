import { test, expect } from '@playwright/test';
import fs from 'fs';
import * as helpers from '../../../utils/helpers';

test.describe('Login API @AdminLogin', () => {

  test('User Login', async ({ request }) => {
    const email = await helpers.excelfetch('testData/information.xlsx', 'Credentails', 2, 2);
    const password = await helpers.excelfetch('testData/information.xlsx', 'Credentails', 3, 2);
    const response = await request.post('/auth/login', {
      data: {
        email: email,
        password: password
      }
    });
    const responsebody = await response.json();
    expect(response.status()).toBe(200);
    const token = responsebody.data.accessToken;
    console.log('\x1b[32m%s\x1b[0m',`Admin ${responsebody.message}`);
    // Write token to .env file
    fs.writeFileSync('env/.env.Cred_qa', `AUTH_TOKEN=${token}\n`, { encoding: 'utf-8' });
    console.log('Token saved to .env file:', token);
  });
});