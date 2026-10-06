import test from "@playwright/test";

test ("SP44", async ({page})=>
{
   await page.goto("https://dw21shd6aprap01/Apriso/Start/?track=client");
   await page.locator("//h2[text()='Log In to DELMIA Apriso Portal']").click();
   await page.locator('//h2[text()="Standard Login"]').click();
   await page.locator('//input[@id="ctl04_LoginTextBox"]').fill("10380470");
   await page.locator('//input[@id="ctl04_PasswordTextbox"]').fill("1234");
   await page.locator('//input[@id="ctl04_LogInButton"]').click();

   await page.locator("//input[@placeholder='Find a screen...']").fill("Batch Review Dashboard")
   await page.getByText("Batch Review Dashboard").click();

   
});