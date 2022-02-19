import { By } from "selenium-webdriver";

export default class HomePage {
  constructor(driver) {
    this.driver = driver;
  }

  // This method will navigate to the home page
  async navigate() {
    await this.driver.get("http://automationpractice.com/index.php");
    this.driver.manage().window().maximize(); // This will maximize the browser window
  }

  // This method will navigate to the sign in page
  async goToSignInPage() {
    await this.driver.findElement(By.css("a[class='login']")).click();
  }
}
