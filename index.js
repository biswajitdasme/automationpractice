import { Builder } from "selenium-webdriver";
import HomePage from "./Pages/HomePage.js";

(async () => {
    let driver = await new Builder().forBrowser("chrome").build();
  
    try {
      const homePage = new HomePage(driver);
      await homePage.navigate();
      await homePage.goToSignInPage();
  
      
    } catch (e) {
      console.log(e);
    }
    finally{
        driver.quit(); // This will quit browser after all the test cases are executed
    }
  })();
  