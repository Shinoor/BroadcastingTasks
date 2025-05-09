import { Before, After,AfterAll, BeforeAll ,BeforeStep, AfterStep , Status} from '@cucumber/cucumber';
import {chromium, Browser, Page, BrowserContext} from '@playwright/test'
import { pageFixture } from './pageFixture';


let page: Page
let browser: Browser
let context: BrowserContext



BeforeAll(async function(){
    browser = await chromium.launch({headless: false});

});


Before(async function (){
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;


});

AfterStep(async function({ pickle, result}){
    // screenshot after each test
    const img = pageFixture.page.screenshot({path: `./test-result/screenshots/" ${pickle.name}, type: "png`});
    await this.attach("img", "image/png");

    

})

After( async function({pickle, result}){
    console.log(result?.status);

    // screenshot
    if(result?.status == Status.FAILED){
        const img = pageFixture.page.screenshot({path: `./test-result/screenshots/" ${pickle.name}, type: "png`});
        await this.attach("img", "image/png");

    }



    await pageFixture.page.close();
    await context.close();
});

AfterAll(async function(){
    await browser.close();
});

