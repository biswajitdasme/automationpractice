import { By } from "selenium-webdriver";

export default class SignInPage {
  constructor(driver) {
    this.driver = driver;
  }

  // This method will create a new account with the given email
  async createAccount(email) {
    await this.driver.findElement(By.css("#email_create")).sendKeys(email);
    await this.driver.findElement(By.css("#SubmitCreate")).click();
  }

  // This method will login to the application with the given email and password
  async loginAccount({ email, password }) {
    await this.driver.findElement(By.id("email")).sendKeys(email);
    await this.driver.findElement(By.id("passwd")).sendKeys(password);
    await this.driver.findElement(By.id("SubmitLogin")).click();
  }
}
