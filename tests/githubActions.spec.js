import { test, expect } from '@playwright/test';

test('practice test1', async ({ page }) => {

   await page.goto('https://www.saucedemo.com');
   console.log(await page.title());
   //await expect(page).toHaveTitle(/Playwright/);
   await expect(page).toHaveTitle('Swag Labs')
   console.log("Ending Practice Test1 ");
})


test('practice test2', async ({ page }) => {

   await page.goto('https://www.saucedemo.com');
   console.log(await page.title());
   //await expect(page).toHaveTitle(/Playwright/);
   await expect(page).toHaveTitle('Swag Labs')
   console.log("Ending Practice Test2 ");
})

test('practice test3', async({ page })=>{

   console.log("starting practice test1 ")
   await page.goto("https:www.saucedemo.com")
   console.log(await page.title());
  await expect(page).toHaveTitle('Swag labs Wrong')
   console.log("Ending Practice Test3 ");
})



 test('practice test4', async({ page })=>{ 

   console.log("starting practice test4 ")
   await page.goto("https:www.saucedemo.com")
   console.log(await page.title());
   await expect(page).toHaveTitle('Swag labs')
   console.log("Ending Practice Test4 ");
})





