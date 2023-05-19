import { test } from "@playwright/test";

test("Vyzvatest", async ({ page }) => {
  await page.goto("http://www.tredgate.com/eshop_test/");

  await page.locator("//a[normalize-space()='iPhone']").click();
  await page.locator("//button[@id='button-cart']").click();
  await page.locator("//span[@id='cart-total']").click();
  await page.locator("//span[@id='cart-total']").click();
});
