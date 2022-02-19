import { By, until } from "selenium-webdriver";

export default class CheckoutPage {
  constructor(driver) {
    this.driver = driver;
  }

  // This method will proceed to checkout
  async proceedToCheckout() {
    await this.driver
      .wait(
        until.elementLocated(
          By.css("a.standard-checkout[title='Proceed to checkout']")
        ),
        10000
      )
      .click();
  }

  // This method will navigate to process carrier step from process address step during checkout
  async processAddress() {
    await this.driver
      .wait(
        until.elementLocated(
          By.css("button[name='processAddress'][type='submit']")
        ),
        10000
      )
      .click();
  }

  // This method will agree to terms and conditions
  async agreeToTerms() {
    await this.driver.wait(until.elementLocated(By.id("cgv")), 10000).click();
  }

  // This method will navigate to Payment Option step from Carrier step during checkout
  async processCarrier() {
    await this.driver
      .wait(
        until.elementLocated(
          By.css("button[name='processCarrier'][type='submit']")
        ),
        10000
      )
      .click();
  }

  // This method will select pay by check option
  async payByCheck() {
    await this.driver
      .wait(until.elementLocated(By.css("a[class='cheque']")), 10000)
      .click();
  }

  // This method will confirm order
  async confirmOrder() {
    await this.driver
      .wait(
        until.elementLocated(By.css("button.button-medium[type='submit']")),
        10000
      )
      .click();
  }
}
