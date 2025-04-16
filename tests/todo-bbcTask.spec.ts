import { test , expect, Browser, BrowserContext, Page} from '@playwright/test';
import { title } from 'process';
import { pageFixture } from './hooks/pageFixture';
import { link } from 'fs';


let page: Page
let browser: Browser
let context: BrowserContext


test.beforeEach(async({page}) =>{
    await page.goto('/');

}) 
test.afterEach(async({page})=>{
    await page.close();

})

test.describe('navigation', () => {
    test.beforeEach(async ({ page }) => {
      // Go to the starting url before each test.
      //await page.goto('https://www.bbc.co.uk/');
    });
  
    test('main navigation', async ({ page }) => {
        
      // Assertions use the expect API.
      await expect(page).toHaveURL('/');
    
      
    });


    test('todo has title', async ({ page }) => {
      
        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/BBC - Home/); 
        

        
      });

    

test('todo application login', async({page})=>{

  
    await page.goto('/');
  
    const signInBox = page.locator('header span[class="ssrcss-qgttmg-AccountText e1jj8uav2"]', {hasText: "Sign in"});
    await signInBox.click();
    await expect(page.locator('#signin-page',{hasText: "Enter your email or username"})).toBeVisible();
 
    const emailTextBox = page.locator('form #user-identifier-input');
    await emailTextBox.fill('fattytaiwo05@yahoo.co.uk');
   
 
    const submitButton = page.locator('[class="sb-button sb-button--full-width"]');
    await submitButton.click({force: true});
  
    const passwordTextBox = page.locator('#password-input');
    await passwordTextBox.fill('Mayowa123_4');
 
    await page.locator('#submit-button').click(); 
 
    await page.locator(':text-is("For you")').click();

    const loginVerification = page.locator('div[class="ssrcss-1k021kl-MastheadText esbu9dd3"]').filter({hasText: "Hi ade"});
    await expect(loginVerification).toBeVisible();
    

  
})

})
