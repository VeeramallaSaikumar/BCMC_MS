import{test, expect} from '@playwright/test';

test.describe('PUT Address Info', () => {
  test('Update Address Info', async ({ request }) => {
    const response = await request.put('/api/candidate/address_info', {
      data: {
        address: '123 Main St',
        city: 'Springfield',
        state: 'IL',
        zip: '62701'
      }
    });

    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('message', 'Address info updated successfully');
  });
});