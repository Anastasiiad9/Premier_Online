import {test} from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { Header } from "../pages/components/Header";
test.describe('Check elements on home page', () => {
    let homePage: HomePage;
    let header: Header;
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        header = new Header(page);
        await homePage.openSite();
    })
    test('Check home page URL and title', async ({ page }) => {
        await test.step('Check home page URL', async () => {
            await homePage.checkURL();
        })
        await test.step('Check home page title', async () => {
            await homePage.checkTitle();
        })
    })
    test('Check header elements on home page', async ({ page }) => {
        await test.step('Check logo link', async () => {
            await header.checkLogoLink();
        })
        await test.step('Check event link', async () => {
            await header.checkEventLink();
        })
        await test.step('Check ratings link', async () => {
            await header.checkRatingsLink();
        })
        await test.step('Check help link', async () => {
            await header.checkHelpLink();
        })
        await test.step('Check AR link', async () => {
            await header.checkArLink();
        })
        await test.step('Check button Sign In', async () => {
            await header.checkButtonSignIn();
        })
        await test.step('Check button Create Account', async () => {
            await header.checkButtonCreateAccount();
        })
        await test.step('Check search field', async () => {
            await header.checkSearchField();
        })
        await test.step('Check search icon', async () => {
            await header.checkSearchIcon();
        })
    })
})