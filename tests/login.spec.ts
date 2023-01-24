import { test, expect } from "@playwright/test";
import loginUser from "../Pom/loginPage";


test("login a registered user", async ({ page, baseURL }) => {
  const login = new loginUser(page);
  await page.goto(`${baseURL}route=account/login`);

  await login.userEmail("tuffourboateng2@gmail.com");
  await login.userPassword("Rancho@1995dat")
  await login.clickLoginButton()

  await expect(page).toHaveURL(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/account"
  );
});
