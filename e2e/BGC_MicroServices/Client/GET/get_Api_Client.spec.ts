import {test} from '@playwright/test';
import * as helpers from '../../../../utils/helpers';

test.describe('Client GET APIs', {tag:['@Client','@Get','@Regression']},() => { 
  let testCounter = 0;
const testData = helpers.getTestDataFromExcel('testData/information.xlsx','ClientGET');

for (const data of testData) {
  testCounter++;
  test(`${data.Text}`, async ({ request }) => {
    const response = await request.get(data.EndPoint);
    console.log("Status Code:", response.status());
    test.expect(response.status()).toBe(200);
    const responsebody = await response.json();
    console.log('SuccessMessage:', responsebody.message);
  });
}
})