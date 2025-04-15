import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
setDefaultTimeout(60 * 1000 * 2);

import {Page, expect, Browser, chromium} from "@playwright/test"
import { pageFixture } from "../hooks/pageFixture";

let browser: Browser;
let page: Page;




Given('User navigates to the application', async function() {
await pageFixture.page.goto('https://www.bbc.co.uk/')

})
Given('User click on sign in link', async function(){
    const signInBox = pageFixture.page.locator('header span[class="ssrcss-qgttmg-AccountText e1jj8uav2"]', {hasText: "Sign in"});
    await signInBox.click();
    await expect(pageFixture.page.locator('#signin-page',{hasText: "Enter your email or username"})).toBeVisible();

})

When('User enter the invalid userEmail as "{string}"', async function (userEmail:string) {
    const emailTextBox = pageFixture.page.locator('form #user-identifier-input');
    await emailTextBox.fill(userEmail);
    
})
Given('User click on the continue button', async function(){
    const submitButton = pageFixture.page.locator('[class="sb-button sb-button--full-width"]');
    await submitButton.click({force: true});

})
Given('User enter the  valid password as "{string}"', async function (password:string) {
    const passwordTextBox = pageFixture.page.locator('#password-input');
    await passwordTextBox.fill(password);
    
})
Given('User click on the sign in button', async function(){
    await pageFixture.page.locator('#submit-button').click(); 

})

Then('Login should be successful',async function(){
    const loginVerification = pageFixture.page.locator('div[class="ssrcss-1k021kl-MastheadText esbu9dd3"]').filter({hasText: "Hi ade"});
    await expect(loginVerification).toBeVisible();

})
