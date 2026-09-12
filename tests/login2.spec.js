import{test,expect} from '@playwright/test';

test('Login test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByTestId('login-button')
  console.log(await page.title())
  await expect(page).toHaveTitle('Swag Labs');
});

test("Practice Test 4", async ({ page }) => {
    console.log("Starting Practice Test 1");
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")
    console.log("Ending Practice Test 1");
})

test("Practice Test 5", async ({ page }) => {
    console.log("Starting Practice Test 2");
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")
    console.log("Ending Practice Test 2");
})

test("Practice Test 6  @Dev", async ({ page }) => {
    console.log("Starting Practice Test 3");
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")
    console.log("Ending Practice Test 3");
})

//for pulling request

//Source Code Managemnet SCM check

test("Practice Test 7", async ({ page }) => {
    console.log("Starting Practice Test 3");
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")
    console.log("Ending Practice Test 3");
})