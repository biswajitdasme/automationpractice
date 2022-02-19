import { By, Key, until } from "selenium-webdriver";

export default class MyAccountPage {
  constructor(driver) {
    this.driver = driver;
  }

  // This method will logout from the application
  async logout() {
    await this.driver
      .wait(until.elementLocated(By.css(".logout")), 10000)
      .click();
  }

  // This method will help to navigate to dresses page
  async goToDresses() {
    let dressesButton = await this.driver.findElement(By.linkText("DRESSES"));

    let action = await this.driver.actions({ async: true });

    await action.move({ origin: dressesButton }).click().perform();
  }

  // This method will select casual dress catagory and navigate to that page
  async goToCasualDresses() {
    let casualDressesButton = await this.driver.findElement(
      By.css("#subcategories ul>li:nth-child(1) a[title='Casual Dresses']")
    );

    let action = await this.driver.actions({ async: true });

    await action.move({ origin: casualDressesButton }).click().perform();
  }

  // This method will select and open first item from the category list
  async openFirstItem() {
    let firstItem = await this.driver.findElement(
      By.css("ul.product_list li:nth-child(1)")
    );

    let action = await this.driver.actions({ async: true });

    await action.move({ origin: firstItem }).click().perform();
  }

  // This method will add opened item to the cart
  async addToCart() {
    let addToCartButton = await this.driver.findElement(
      By.css("button[name='Submit']")
    );

    let action = await this.driver.actions({ async: true });

    await action.move({ origin: addToCartButton }).click().perform();
  }


  // This method will navigate to the Shirt page
  async goToTShirts() {
    let tShirtsButton = await this.driver.findElement(By.linkText("T-SHIRTS"));

    let action = await this.driver.actions({ async: true });

    await action.move({ origin: tShirtsButton }).click().perform();
  }

  // This method will filter items in the selected category list by the blue color
  async filterListByBlue() {
    let colorButton = await this.driver.wait(
      until.elementLocated(
        By.css("input#layered_id_attribute_group_14")
      ),
      20000
    );

    let action = await this.driver.actions({ async: true });

    await action.move({ origin: colorButton }).click().perform();
  }

  // This method will navigate to the CheckoutPage page
  async openShoppingCartSummary() {
    let shoppingCartSummary = await this.driver.findElement(
      By.css("a[title='View my shopping cart']")
    );

    let action = await this.driver.actions({ async: true });

    await action.move({ origin: shoppingCartSummary }).click().perform();
  }
}
