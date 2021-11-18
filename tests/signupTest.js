const { Builder, By } = require( "selenium-webdriver" )
require( "chromedriver" )
const assert = require( 'assert' )

const signup = async () => {

  const driver = await new Builder().forBrowser( "chrome" ).build()

  await driver.get( 'https://sso.zeachable.com/secure/123/identity/sign_up/with_email' )

  await driver.findElement( By.id( 'user_name' ) ).sendKeys( 'Jacob Harvey' )

  await driver.findElement( By.id( 'user_email' ) ).sendKeys( 'takehome@test.com' )

  await driver.findElement( By.id( 'password' ) ).sendKeys( 'Teachable' )

  await driver.findElement( By.id( 'allow_marketing_emails' ) ).click()

  await driver.findElement( By.name( 'commit' ) ).click()

  let actualUrl = 'https://sso.zeachable.com/secure/123/identity/sign_up/with_email'
  let currentUrl = await driver.getCurrentUrl()

  assert.equal( currentUrl, actualUrl )

  await driver.quit()

}

signup()


// Using xpath()
// await driver.findElement( By.xpath( "//input[@id='user_name']" ) ).sendKeys( 'Jacob Harvey' )

// await driver.findElement( By.xpath( "//input[@id='user_email']" ) ).sendKeys( "jacobharv00@gmail.com" )

// await driver.findElement( By.xpath( "//input[@id='password']" ) ).sendKeys( "Xxxxxxx" )

// await driver.findElement( By.xpath( "//input[@name='commit']" ) ).click()