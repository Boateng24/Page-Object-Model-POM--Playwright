import { Page } from "@playwright/test";


export default class loginUser {
  constructor(public page: Page) {}

  async userEmail(email: string) {
    await this.page.locator("#input-email").type(email);
  }

  async userPassword(password: string) {
    await this.page.locator("#input-password").type(password);
  }

  async clickLoginButton(){
    await this.page.getByRole("button", {name: "Login"}).click()
  }
}