const { test, expect } = require('@playwright/test');

test.describe('My Test Suite', () => {
  test('My Test Case', async ({page}) => {

  
  await authenticate(page);

  await browser.close();

  });
});

async function authenticate(page) {
  await page.goto('https://bitheap.tech');
  await page.click('#menu-item-2330'); 
  await page.locator("[name='xoo-el-username']").fill(process.env.BITHEAP_USERNAME)
  await page.locator("[name='xoo-el-password']").fill(process.env.PASS)
  await page.locator("//button[.='Sign in']").click()
  const text = await page.locator('css= #menu-item-2333>a').textContent();
  console.log("text: ", text)
  if(text != "Hello, Playwright")
     console.error("The authentication is not successfully")
   await page.screenshot({path: 'screnshots/screenshot.png'});

}




