import { Builder } from "selenium-webdriver";
import CheckoutPage from "./Pages/CheckoutPage.js";
import CreateAccountPage from "./Pages/CreateAccountPage.js";
import HomePage from "./Pages/HomePage.js";
import MyAccountPage from "./Pages/MyAccountPage.js";
import SignInPage from "./Pages/SignInPage.js";

(async () => {
    let driver = await new Builder().forBrowser("chrome").build();
  
    try {
      // Initalize all Page Objects
      const homePage = new HomePage(driver); 
      const signInPage = new SignInPage(driver);
      const createAccountPage = new CreateAccountPage(driver);
      const myAccountPage = new MyAccountPage(driver);
      const checkoutPage = new CheckoutPage(driver);

      await homePage.navigate();
      await homePage.goToSignInPage();

    } catch (e) {
      console.log(e);
    }
    finally{
        driver.quit(); // This will quit browser after all the test cases are executed
    }
  })();
  