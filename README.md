# Automation Task

## Scenario

1. Go to the URl: <http://automationpractice.com/index.php>
2. Create two new accounts
3. Login with the any of the new account
4. Go to the Casual Dresses section and add a dress into the cart
5. Go to the T-shirt section > Filter the list with blue color > Add a shirt from the filter list
6. Now checkout and select the payment process ‘Payment by check’
7. Sign out from the account

**Run the above cycle for another user.**

## Installation

1. Check your chrome version. Go to addressbar of Chrome browser, paste and enter this

```sh
chrome://version/
```

2. Download Chrome Driver from here (must match your browser version)

[https://chromedriver.storage.googleapis.com/index.html](https://chromedriver.storage.googleapis.com/index.html).

3. Unzip it and add folder path containing driver to your computer's environment variable. Example for me it was

```sh
C:\Users\Biswajit\Downloads\chromedriver_win32\
```

4. **Change email addresses of two user in constants/userDetails.js**

4. This project requires [Node.js](https://nodejs.org/) and tested on v16.13.2 but will run any latest version (I hope)

Install the dependencies and start the server.

```sh
cd automationpractice
npm i
npm run start
```
