require('dotenv').config({
    path: './config.env',
    override: true,
});
exports.loginPage=
class LoginPage{
    constructor(page){
        this.page=page
        this.userNameTxtField="//input[@id='username']";
        this.passwordTxtField="//input[@id='inputPassword']";
        this.loginBtn="//button[text()='Sign in']";
    }

   async navigateToApplication(){
    await this.page.goto(`${process.env.URL}`)
   }

   async loginToApplication(){
    await this.page.locator(this.userNameTxtField).fill(`${process.env.APPUSERNAME}`)
    await this.page.locator(this.passwordTxtField).fill(`${process.env.APPPASSWORD}`)
    await this.page.locator(this.loginBtn).click()
   }
}