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
test.afterEach(async({page}) =>{
    await page.close();

}) 

test('todo navigates to the music page from the homepage', async({page})=>{
    //When I click on the "Music" navigation link
   await page.locator('ul[class="ssrcss-gdn4si-GlobalNavigationBarLinkList eki2hvo19"]').filter({hasText:'sounds'}).click();

     // Then I should be taken to the Music landing page
     await page.goto('/sounds');
    

    // And the page title should contain "Music"
    const musickPageValidation = page.locator('#main div  div  h1[class="sw-text-trafalgar sw-font-bold sw-text-primary"]',{hasText: 'Music'});
    await musickPageValidation.isVisible();

})
test.describe('navigation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.bbc.co.uk/sounds/music')
   
      
    });
    test('music page navigation', async ({ page }) => {
        
        // Assertions use the expect API.
        // Given I am on the Music landing page
        
        await expect(page).toHaveURL('https://www.bbc.co.uk/sounds/music');
      
        
      });
      test('todo music filter for a sepcific genre', async function({page}){

        // When I select the "Classical" genre from the filter options
       await page.locator('#orbit-search-button span span').click();
       const dataInput = await page.locator('input[type="text"]').fill('genre');
       await page.locator('button[type="submit"]').click();
       
        //Then I should see a list of classical music shows
        const resultLists = page.locator('#se-searchbox-app div div div section div div.se-search-suggestions.se-results div');

       
        
        
        // And each show should be tagged with "Classical"
        const cards = await page.locator('[data-testid="music-show-card"]');
        const count = await cards.count();
        for (let i = 0; i < count; i++) {
          await expect(cards.nth(i)).toContainText('genre');
        }

      })

    })

  