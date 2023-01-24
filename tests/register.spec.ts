import { test, expect} from '@playwright/test';
import registerUser from '../Pom/registerPage';

test('sign up new user', async ({ page, baseURL }) => {
   const register = new registerUser(page)
   await page.goto(`${baseURL}route=account/register`);
   
   await register.userFirstname('Tuffour');
   await register.userLastname('Boateng');
   await register.userEmail('tuffourboateng2@gmail.com');
   await register.userTelephone('0544363809');
   await register.userPassword('Rancho@1995dat');
   await register.userconfirmPassword('Rancho@1995dat');
   expect(register.isSubscribed()).toBeChecked()
   await register.termsAndConditions()
   await register.continueToLogin()

});

