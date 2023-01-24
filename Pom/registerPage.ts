import { Page, expect } from "@playwright/test";


export default class registerUser {
    constructor(public page:Page){}

    async userFirstname(firstname:string){
        await this.page.locator('#input-firstname').type(firstname)
    }

    async userLastname(lastname:string){
        await this.page.locator('#input-lastname').type(lastname)
    }

    async userEmail(email:string){
        await this.page.locator('#input-email').type(email)
    }

    async userTelephone(phone:string){
        await this.page.locator('#input-telephone').type(phone)
    }

    async userPassword(password:string){
        await this.page.locator('#input-password').type(password)
    }

    async userconfirmPassword(password:string){
        await this.page.locator('#input-confirm').type(password)
    }

     isSubscribed(){
        return this.page.locator('label[for="input-newsletter-no"]');
    }

    async termsAndConditions(){
        await this.page.locator('label[for="input-agree"]').click()
    }

    async continueToLogin(){
        // since after clicking the continue button we'll wait for the page to load before it navigates, we will wait for that timelag
        await Promise.all([
            this.page.waitForNavigation({waitUntil: "networkidle"}),
            this.page.click("input[value='Continue']")
        ])
    }
}