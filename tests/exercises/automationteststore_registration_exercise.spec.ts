import { test } from "@playwright/test";

test("E2E registration", async ({ page }) => {
  await page.goto("https://automationteststore.com/");
  await page.locator("ul[id='customer_menu_top'] li a").click();
  await page.locator("button[title='Continue']").click();
  await page.locator("#AccountFrm_firstname").fill("Bohuslav");
  await page.locator("#AccountFrm_lastname").fill("Nováček");
  await page.locator("#AccountFrm_email").type("newman@test.cz");
  await page
    .locator("#AccountFrm_country_id")
    .selectOption({ label: "Antarctica" });
  await page.locator("#AccountFrm_address_1").fill("U tučňáka 1");
  await page.locator("#AccountFrm_city").fill("Sníh");
  await page.locator("#AccountFrm_zone_id").selectOption("0");
  await page.locator("#AccountFrm_loginname").fill("Newman");
  await page.locator("#AccountFrm_password").fill("heslo123");
  await page.locator("#AccountFrm_confirm").fill("heslo123");
  await page.locator("#AccountFrm_newsletter1").check();
  await page.locator("#AccountFrm_agree").check();
  // await page.locator("button[(title = "Continue")]").click();
});
