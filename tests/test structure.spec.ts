import { test, expect } from "@playwright/test";

test.describe("PMtool login tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://tredgate.com/pmtool/");
  });

  test("Successful login", async ({ page }) => {
    await page.locator("#username").fill("o2_skoleni");
    await page.locator("#password").fill("PlaywrightJede1");
    await page.locator("button[type='submit']").click();
    await expect(page.locator("#welcome-page-header")).toBeVisible();
  });

  test("Failed login", async ({ page }) => {
    await page.locator("#username").fill("o2_skoleni");
    await page.locator("#password").fill("Spatneheslo");
    await page.locator("button[type='submit']").click();
    await expect(page.locator(".alert.alert-danger")).toBeVisible();
  });
});
