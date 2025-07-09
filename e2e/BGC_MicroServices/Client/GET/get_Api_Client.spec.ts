import {test} from '@playwright/test';

test.describe('Client GET APIs', {tag:['@Client','@Get','@Regression']},() => { 
  
// for()
  test('BGV_Completed_Candidates', async ({request}) => {
    const response = await request.get('/user/bgvCompleted/candidates')
    console.log("Status Code: ",response.status());
    test.expect(response.status()).toBe(200);
    const responsebody= await response.json();
    console.log('SucessMessage:',responsebody.message);
  });
  test('Total_Candidates', async ({request}) => {
    const response = await request.get('/user/total-candidates')
    console.log("Status Code: ",response.status());
    test.expect(response.status()).toBe(200);
    const responsebody= await response.json();
    console.log('SucessMessage:',responsebody.message);
  });
  test('Login_Expired Candidates', async ({request}) => {
    const response = await request.get('/user/loginExpired/candidates')
    console.log("Status Code: ",response.status());
    test.expect(response.status()).toBe(200);
    const responsebody= await response.json();
    console.log('SucessMessage:',responsebody.message);
  });
  test('Submitted_For_Verification', async ({request}) => {
    const response = await request.get('/user/submit/candidates')
    console.log("Status Code: ",response.status());
    test.expect(response.status()).toBe(200);
    const responsebody= await response.json();
    console.log('SucessMessage:',responsebody.message);
  });
  test('Non_Submitted_Candidates', async ({request}) => {
    const response = await request.get('/user/nonSubmit/candidates')
    console.log("Status Code: ",response.status());
    test.expect(response.status()).toBe(200);
    const responsebody= await response.json();
    console.log('SucessMessage:',responsebody.message);
  });
})