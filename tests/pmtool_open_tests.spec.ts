import { test } from "@playwright/test";

test("pmtool_fill_password", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("PanKubicek");
  await page.locator("#password").fill("Slabéheslo");
  await page.locator("span").click;
});

//selektor pro login
//xpath //input[@id='username']
//css #username

//selektor pro password
//xpath //input[@id='password']
//css #password

//logo
//xpath //img[@title='TEG Project Management']
//css img[title='TEG Project Management']

//button
//xpath //button[@type='submit']
//css button[type='submit']
