const { Builder, By } = require( "selenium-webdriver" )
require( "chromedriver" )
const assert = require( 'assert' )

const login = async () => {

  const driver = await new Builder().forBrowser( "chrome" ).build()

  await driver.get( 'https://sso.zeachable.com/secure/123/identity/login' )

  await driver.findElement( By.id( 'email' ) ).sendKeys( 'jacobharv00@gmail.com' )

  await driver.findElement( By.id( 'password' ) ).sendKeys( 'Teachable' )

  await driver.findElement( By.name( 'commit' ) ).click()

  let actualUrl = 'https://takehome.zeachable.com/'
  let currentUrl = await driver.getCurrentUrl()

  assert.equal( currentUrl, actualUrl )

  await driver.quit()

}

login()