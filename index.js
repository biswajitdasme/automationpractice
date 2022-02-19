import { Builder, until } from "selenium-webdriver";
import userDetails from "./constants/userDetails.js";
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

    // 1. Navigate to the homepage
    await homePage.navigate();

    // 2. Navigate to Sign In page
    await homePage.goToSignInPage();

    // 3. Create account for all users of userDetails list
    for (let i = 0; i < userDetails.length; i++) {
      await signInPage.createAccount(userDetails[i].email);
      await createAccountPage.fillUpForm(userDetails[i]);
      await myAccountPage.logout();
    }

    // 4. Login with each user's info provided in userDetails list and process order
    for (let i = 0; i < userDetails.length; i++) {
      // 4.1. Login with user's email and password
      await signInPage.loginAccount(userDetails[i]);

      // 4.2. Proceed to Dresses Page
      await myAccountPage.goToDresses();
      // 4.3. Select and open CasualDress category from all Categories
      await myAccountPage.goToCasualDresses();
      // 4.4. Open First Item of Category
      await myAccountPage.openFirstItem();
      // 4.5. Add item to cart
      await myAccountPage.addToCart();
      // 4.6. Go to Shirts Category
      await myAccountPage.goToTShirts();
      // 4.7. Filter list by blue color
      await myAccountPage.filterListByBlue();

      // 4.8. Wait for the list to be filtered
      await driver.wait(until.urlContains("color-blue"), 20000);

      // 4.9. Open First Item of Category
      await myAccountPage.openFirstItem();
      // 4.10. Add item to cart
      await myAccountPage.addToCart();

      // 4.11. Proceed to checkout page
      await myAccountPage.openShoppingCartSummary();
      // 4.12. Complete first step of checkout process
      await checkoutPage.proceedToCheckout();
      // 4.13. Complete second step of checkout process
      await checkoutPage.processAddress();
      // 4.14. Agree to terms and conditions
      await checkoutPage.agreeToTerms();
      // 4.15. Complete third step of checkout process
      await checkoutPage.processCarrier();
      // 4.16. Complete fourth step of checkout process
      await checkoutPage.payByCheck();
      // 4.17. Finally confirm order
      await checkoutPage.confirmOrder();
      // 4.18. Logout from account
      await myAccountPage.logout();
    }
  } catch (e) {
    console.log(e);
  } finally {
    driver.quit(); // This will quit browser after all the test cases are executed
  }
})();
