// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client');
});

test('Client APP Login', async ({ page }) => {

  const products = page.locator(".card-body");
  const productName = 'zara coat 3'

  //In here locator is searching for this element from the start of the page.
  await page.locator("#userEmail").fill("joseomv07@gmail.com");
  await page.locator("#userPassword").type("Prueba@001.")
  await page.locator("[value='Login']").click();
  await page.waitForLoadState('networkidle');

  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);
  const count = await products.count();

  for(let i = 0; i < count; i++) {
    //Locator here will be locate starting from the product element location it will not start from the top of the page.
    if(await products.nth(i).locator("b").textContent() === productName){
      await products.nth(i).locator("text= Add To Cart").click();
      break;
    }
  }
  await page.pause();
});


