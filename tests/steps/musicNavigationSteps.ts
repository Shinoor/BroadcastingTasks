import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
setDefaultTimeout(60 * 1000 * 2);

import {Page, expect, Browser, chromium, BrowserContext} from "@playwright/test"
import { pageFixture } from "../hooks/pageFixture";

let page: Page
let browser: Browser
let context: BrowserContext

Given(' I am on the BBC Sounds homepage' ,async function(){
    await pageFixture.page.locator('ul[class="ssrcss-gdn4si-GlobalNavigationBarLinkList eki2hvo19"]').filter({hasText:'sounds'}).click();

})
Then('Then I should be taken to the Music landing page', async function(){
    await pageFixture.page.goto('/sounds');
})
Then('And the page title should contain "Music', async function(){
    const musickPageValidation = pageFixture.page.locator('#main div  div  h1[class="sw-text-trafalgar sw-font-bold sw-text-primary"]',{hasText: 'Music'});
    await musickPageValidation.isVisible();

})
Given('I am on the Music landing page', async function(){
    await pageFixture.page.goto('https://www.bbc.co.uk/sounds/music')

})
When('When I select the "Classical" genre from the filter options', async function(){
    await pageFixture.page.locator('#orbit-search-button span span').click();
    const dataInput = await pageFixture.page.locator('input[type="text"]').fill('genre');
    await pageFixture.page.locator('button[type="submit"]').click();

})
Then('Then I should see a list of classical music shows', async function(){
    const resultLists = pageFixture.page.locator('#se-searchbox-app div div div section div div.se-search-suggestions.se-results div');

})
Then('And each show should be tagged with "Classical"', async function (){
    const cards = await pageFixture.page.locator('[data-testid="music-show-card"]');
    const count = await cards.count();
    for (let i = 0; i < count; i++) {
      await expect(cards.nth(i)).toContainText('genre');
    }


})
