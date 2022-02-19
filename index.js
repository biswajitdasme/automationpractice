import { Builder } from "selenium-webdriver";
import CreateAccountPage from "./Pages/CreateAccountPage.js";
import HomePage from "./Pages/HomePage.js";
import MyAccountPage from "./Pages/MyAccountPage.js";
import SignInPage from "./Pages/SignInPage.js";

(async () => {
    let driver = await new Builder().forBrowser("chrome").build();
  
    try {
      const homePage = new HomePage(driver);
      await homePage.navigate();
      await homePage.goToSignInPage();
  
      const signInPage = new SignInPage(driver);
      const createAccountPage = new CreateAccountPage(driver);
      const myAccountPage = new MyAccountPage(driver);

    } catch (e) {
      console.log(e);
    }
    finally{
        driver.quit(); // This will quit browser after all the test cases are executed
    }
  })();
  