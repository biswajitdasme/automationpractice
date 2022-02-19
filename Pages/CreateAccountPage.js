import { By, until } from "selenium-webdriver";

export default class CreateAccountPage {
  constructor(driver) {
    this.driver = driver;
  }

  // This method will fill up the registration form with the given user details
  async fillUpForm(user) {
    await this.driver
      .wait(until.elementLocated(By.id("id_gender1")), 10000)
      .click();
    await this.driver
      .wait(until.elementLocated(By.id("customer_firstname")), 10000)
      .sendKeys(user.firstName);
    await this.driver
      .wait(until.elementLocated(By.id("customer_lastname")), 10000)
      .sendKeys(user.lastName);
    await this.driver
      .wait(until.elementLocated(By.id("passwd")), 10000)
      .sendKeys(user.password);
    await this.driver
      .wait(until.elementLocated(By.id("days")), 10000)
      .sendKeys(user.birthDay);
    await this.driver
      .wait(until.elementLocated(By.id("months")), 10000)
      .sendKeys(user.birthMonth);
    await this.driver
      .wait(until.elementLocated(By.id("years")), 10000)
      .sendKeys(user.birthYear);
    await this.driver
      .wait(until.elementLocated(By.id("address1")), 10000)
      .sendKeys(user.address);
    await this.driver
      .wait(until.elementLocated(By.id("city")), 10000)
      .sendKeys(user.city);
    await this.driver
      .wait(until.elementLocated(By.id("id_state")), 10000)
      .sendKeys(user.state);
    await this.driver
      .wait(until.elementLocated(By.id("postcode")), 10000)
      .sendKeys(user.zip);
    await this.driver
      .wait(until.elementLocated(By.id("id_country")), 10000)
      .sendKeys(user.country);
    await this.driver
      .wait(until.elementLocated(By.id("phone_mobile")), 10000)
      .sendKeys(user.phone);
    await this.driver
      .wait(until.elementLocated(By.id("alias")), 10000)
      .sendKeys(user.alias);
    await this.driver
      .wait(until.elementLocated(By.id("submitAccount")), 10000)
      .click();
  }
}
