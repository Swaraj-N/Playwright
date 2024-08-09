require('dotenv').config({
    path: './config.env',
    override: true,
});
exports.homePage=
class HomePage{
    constructor(page){
        this.page=page
        this.projects="//a[text()='Projects']";
        this.createProjectBtn="//span[text()='Create Project']";
        this.projctNameTxt="//input[@name='projectName']";
        this.projctManagerTxt="//input[@name='createdBy']";
        this.projctStatusTxt="//select[@name='status']";
        this.addBtn="//input[@type='submit']"
    }



   async createProject(){
    var random=Math.ceil(Math.random()*1000)
   await this.page.locator(this.projects).click()
//    await this.page.waitForTimeout(2000)
   await this.page.locator(this.createProjectBtn).click()
//    await this.page.waitForTimeout(2000)
   await this.page.locator(this.projctNameTxt).fill(random+"Fireflink")
//    await this.page.waitForTimeout(2000)
   await this.page.locator(this.projctManagerTxt).fill(random+"FFManager")
//    await this.page.waitForTimeout(2000)
//    await this.page.locator(this.projctStatusTxt).selectOption({value:'Completed'})
//    await this.page.waitForTimeout(2000)
   await this.page.locator(this.addBtn).click()
   }
}