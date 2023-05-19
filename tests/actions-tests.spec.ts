import { test } from "@playwright/test";

test("Click-test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("o2_skoleni");
  await page.locator("#password").fill("PlaywrightJede1");
  await page.locator("button[type='submit']").click();
  // await page.locator("#welcome - page - header").tobeVisible();
});

test("fill and type", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").type("test");
  await page.locator("#username").fill("blabla");
  await page.locator("#username").type("atedco");
  await page.locator("#username").fill("ajetofuc");
});

test("select_test", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await page.locator("#dropdowm-menu-1").selectOption("sql");
  await page.locator("#dropdowm-menu-2").selectOption({ label: "TestNG" });
});

test("checkbox,radio button test", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await page.locator("input[value='option-1']").check();
  await page.locator("input[value='blue']").check();
});

test("iframetest", async ({ page }) => {
  await page.goto("https://www.webdriveruniversity.com/IFrame/index.html");
  const frame = await page.frameLocator("#frame");
  await frame.locator("button[id='button-find-out-more'] b").click();
});

test("hover test", async ({ page }) => {
  await page.goto("https://webdriveruniversity.com/Actions/index.html");
  await page
    .locator("div[class='dropdown hover'] button[class='dropbtn']")
    .hover();
  await page
    .locator("div[class='dropdown hover'] a[class='list-alert']")
    .click();
});
