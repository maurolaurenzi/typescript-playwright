import { test as setup, expect } from '@playwright/test';
import LoginScreen from './locators/login.screen';
const authFile = 'playwright/.auth/user.json';
const loginScreen = new LoginScreen();
require("dotenv").config();

//Reference: https://playwright.dev/docs/auth
setup('authenticate', async ({ page }) => {
  await page.goto('https://www.max.com/ar/es');
  await page.click(loginScreen.buttons.signIn);
  await page.locator(loginScreen.fields.username).fill(process.env.USERNAME as string);
  await page.locator(loginScreen.fields.password).fill(process.env.PASSWORD as string);
  await page.keyboard.press('Enter');
  await page.click(loginScreen.buttons.defaultProfile);

  await page.context().storageState({ path: authFile });
});