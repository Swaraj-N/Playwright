/* Import Statements */
import { test, expect } from "@playwright/test";
import apiUtil from '../generic-utility/apiUtility'
import { loginPage } from '../pages/LoginPage'
import { homePage } from '../pages/homePage'

/* Script Steps */
test.describe('Login to Ninza HRM Application', async () => {
    test('Login to Ninza HRM', async ({ page }) => {
        const login = new loginPage(page)
        const home = new homePage(page)
        await login.navigateToApplication();
        const titleOfthePage = await page.title()
        expect(titleOfthePage).toEqual('Ninza HRM')
        console.log(`Title of the page is : ${titleOfthePage}`);
        await login.loginToApplication()
        await home.createProject()
        var listOfProjects = await apiUtil.getData(`http://106.51.90.215:8084/projects`)
        console.log(listOfProjects);
        await page.close();
    });
});