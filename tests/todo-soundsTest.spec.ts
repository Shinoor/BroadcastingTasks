import { test , expect, Browser, BrowserContext, Page} from '@playwright/test';
import { title } from 'process';
import { pageFixture } from './hooks/pageFixture';
import { link } from 'fs';


let page: Page
let browser: Browser
let context: BrowserContext

test.beforeEach(async({page}) =>{
    await page.goto('/sounds');

}) 
test.afterEach(async({page}) =>{
    await page.close();

}) 



test('todo validation on "Listen Live" rail and its links',async({page})=>{ 
    //Then I should see cards displayed in the "Listen Live" rail
    
    const listenLiveRail = page.locator('#listen_live h2[class="sw-text-primary sw-text-trafalgar sw-font-bold"]').filter({hasText: "Listen Live"});
    await expect(listenLiveRail).toBeVisible();

    //When I click the "View all Stations & Schedules" link within the "Listen Live" rail
    await page.locator('section#listen_live header a span').filter({hasText: "View all Stations & Schedules"}).click();

    //Then I should be redirected to the "ALL_STATIONS" page
     await expect(page).toHaveURL("https://www.bbc.co.uk/sounds/stations");
     await expect(page).toHaveTitle(/Stations & Schedules/i);


     })
test('display todo on "Radio 1" card', async function({page}){

    // Then I should see the "Listen Live" rail
    await page.locator('#listen_live h2[class="sw-text-primary sw-text-trafalgar sw-font-bold"]').isVisible();

    // When I click on "Radio 1" card
    const radio1isDisplay = await  page.locator('#listen_live div.sw-relative div.sw-flex ul li:nth-child(1) a div[class="sw-bg-grey-2 sw-p-4 dark:sw-bg-grey-8"]').click();

    // Then I should be redirected to the "Play" page
    // redirection validated
    await expect(page).toHaveTitle('Radio 1 - Listen Live - BBC Sounds');

    // When I click the "Play" button
    const playButton = await page.locator('button svg #p_audioui_playpause_highlightCircle').click();
    

    // Then I should see a prompt to "Sign In" or "Register"
    // Sign button is displayed
    const sg = page.locator('a[class="id-cta-button"]',{hasText: "Sign in"});
    await expect(sg).toBeVisible();

})



test('todo validation on category rail and links', async({page})=>{
    // Then I should see a rail titled "Categories"
    const categoriesRail = page.locator('section#categories');
    await expect(categoriesRail).toBeVisible();

    // And the rail should display twelve category links
    const categoryRails = page.locator('li [class="sw-group"]');
    await expect(categoryRails).toHaveCount(12);


    // When I click the "View all Categories" link on the "Categories" rail
    await page.locator('#main  div  section:nth-child(9)  div:nth-child(1) header  a  svg  path').click();


      // Then I should be redirected to the "ALL
    await page.locator('header h2[class="sw-text-primary sw-text-trafalgar sw-font-bold"]',{hasText:'Browse all Music'}).isVisible();


})
