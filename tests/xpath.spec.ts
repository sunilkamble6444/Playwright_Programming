import test from "@playwright/test";

test ("SP44", async ({page})=>
{
   await page.goto("https://www.google.com/?zx=1787313041681");
   await page.locator('//textarea[@id="ti6dpd"]').fill("How to learn playwright");
   test.setTimeout(100000);


  // await page.locator("//input[@class='search-box-input ng-pristine ng-valid ng-empty ng-touched']").fill("Batch Review Dashboard");

}

)