const dat = require('./dataNew.json')

const { Builder, By, Key, until } = require('selenium-webdriver');

async function test() {

    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get("http://www.darknightspace.gr/articles.html");
    await driver.findElement(By.xpath("//input[@name='email']")).sendKeys(dat[0].email);
    await driver.findElement(By.xpath("//input[@name='psw']")).sendKeys(dat[0].pw1);
    await driver.findElement(By.xpath("//input[@name='psw-repeat']")).sendKeys(dat[0].pw1);
}

test();

