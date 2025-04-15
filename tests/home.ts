import { test , expect} from '@playwright/test';

test.describe('navigation', () => {
    test.beforeEach(async ({ page }) => {
      // Go to the starting url before each test.
      await page.goto('https://www.bbc.co.uk/');
    });
  
    test('main navigation', async ({ page }) => {
        
      // Assertions use the expect API.
      await expect(page).toHaveURL('https://www.bbc.co.uk/');
      
    });
})