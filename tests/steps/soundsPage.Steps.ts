import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
setDefaultTimeout(60 * 1000 * 2);

import {Page, expect, Browser, chromium, BrowserContext} from "@playwright/test"
import { pageFixture } from "../hooks/pageFixture";

let page: Page
let browser: Browser
let context: BrowserContext




Then('I should see cards displayed in the "Listen Live" rail', async function () {
    await pageFixture.page.goto('/sounds');
    const listenLiveRail = pageFixture.page.locator('#listen_live h2[class="sw-text-primary sw-text-trafalgar sw-font-bold"]').filter({hasText: "Listen Live"});
    await expect(listenLiveRail).toBeVisible();
   
  });
  
  When('I click the "View all Stations & Schedules" link within the "Listen Live" rail', async function () {
    await pageFixture.page.locator('section#listen_live header a span').filter({hasText: "View all Stations & Schedules"}).click();
    
  });
  
  Then('I should be redirected to the "ALL_STATIONS" page', async function () {
    await expect(pageFixture.page).toHaveURL("https://www.bbc.co.uk/sounds/stations");
    await expect(pageFixture.page).toHaveTitle(/Stations & Schedules/i);
    
  });



  
  Then('I should see a rail titled "Categories"', async function () {
    const categoriesRail = pageFixture.page.locator('section#categories');
    await expect(categoriesRail).toBeVisible();
   

  });
  
  Then('the rail should display twelve category links', async function () {
    const categoryRails = pageFixture.page.locator('li [class="sw-group"]');
    await expect(categoryRails).toHaveCount(12);

    
  });
  
  When('I click the "View all Categories" link on the "Categories" rail', async function () {
    await pageFixture.page.locator('#main  div  section:nth-child(9)  div:nth-child(1) header  a  svg  path').click();

  });
  
  Then('I should be redirected to the "ALL_CATEGORIES" page', async function () {
    await pageFixture.page.locator('header h2[class="sw-text-primary sw-text-trafalgar sw-font-bold"]',{hasText:'Browse all Music'}).isVisible();
    
  });


  Then('I should see the "Listen Live" rail', async function(){
    await pageFixture.page.locator('#listen_live h2[class="sw-text-primary sw-text-trafalgar sw-font-bold"]').isVisible();

  })
  When('I click on "Radio 1" card', async function(){
    const radio1isDisplay = await  pageFixture.page.locator('#listen_live div.sw-relative div.sw-flex ul li:nth-child(1) a div[class="sw-bg-grey-2 sw-p-4 dark:sw-bg-grey-8"]').click();
   

  })
  Then('I should be redirected to the "Play" page', async function(){
    await expect(pageFixture.page).toHaveTitle('Radio 1 - Listen Live - BBC Sounds');
    

  })
  When('I click the "Play" button' , async function(){
    const playButton = await pageFixture.page.locator('button svg #p_audioui_playpause_highlightCircle').click();

  })
  Then('I should see a prompt to "Sign In" or "Register', async function(){
    const sg = pageFixture.page.locator('a[class="id-cta-button"]',{hasText: "Sign in"});
    await expect(sg).toBeVisible();

  })


