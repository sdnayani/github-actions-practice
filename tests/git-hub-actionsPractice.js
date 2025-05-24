import { expect } from "@playwright/test";

test('practice tets1', async({page})=>{

    console.log("starting practice test1 ")
    await page.goto("https:www.saucedemo.com")
    console.log(await page.title());
    expect(page).toHaveTitle('Swag labs')
    console.log("Ending Practice Test1 ");
})

test('practice tets2', async({page})=>{

    console.log("starting practice test1 ")
    await page.goto("https:www.saucedemo.com")
    console.log(await page.title());
    expect(page).toHaveTitle('Swag labs')
    console.log("Ending Practice Test2 ");
})

test('practice test3', async({page})=>{

    console.log("starting practice test1 ")
    await page.goto("https:www.saucedemo.com")
    console.log(await page.title());
    expect(page).toHaveTitle('Swag labs Wrong')
    console.log("Ending Practice Test3 ");
})

test.describe('test describe block', async({page})=>{
test('practice test4', async({page})=>{

    console.log("starting practice test4 ")
    await page.goto("https:www.saucedemo.com")
    console.log(await page.title());
    expect(page).toHaveTitle('Swag labs')
    console.log("Ending Practice Test4 ");
})
test('practice test5', async({page})=>{

    console.log("starting practice test5 ")
    await page.goto("https:www.saucedemo.com")
    console.log(await page.title());
    expect(page).toHaveTitle('Swag labs')
    console.log("Ending Practice Test5 ");
})
test('practice test6', async({page})=>{

    console.log("starting practice test6 ")
    await page.goto("https:www.saucedemo.com")
    console.log(await page.title());
    expect(page).toHaveTitle('Swag labs')
    console.log("Ending Practice Test6 ");
})

})
test('practice test6', async({page})=>{

    console.log("starting practice test6 ")
    await page.goto("https:www.saucedemo.com")
    console.log(await page.title());
    expect(page).toHaveTitle('Swag labs')
    console.log("Ending Practice Test6 ");
})

