import { expect, test } from "@playwright/test";

test("Tags test @mujTag", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("o2_skoleni");
  await page.locator("#password").fill("PlaywrightJede1");
  await page.locator("button[type='submit']").click();
  await expect(page.locator("#welcome-page-header")).toBeVisible();
});
