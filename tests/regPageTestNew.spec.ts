import {test} from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { RegistrationPage } from "../pages/RegistrationPage";
const expectedErrors = [
    'Please enter your first name.',
    'Your first name has invalid characters (The first name must contain alphabatic characters only).',
    'Please enter your last name.',
    'Your last name has invalid characters (The last name must contain alphabatic characters only).',
    'Please enter a password.',
    'Your password must be at least 8 characters long.',
    'reCAPTCHA verification failed.'
];
test.describe('Check elements on registration page', () => {
    let homePage: HomePage;
    let regPage: RegistrationPage;
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        regPage = new RegistrationPage(page);
        await homePage.openSite();
        await regPage.clickRegisterButton();
    })
    test('Check registration page URL', async ({ page }) => {
        await regPage.checkURL();
    })
    test('Check positive registration flow', async ({ page }) => {
        await test.step('Check Email field', async () => {
            await regPage.checkEmailField();
        })
        await test.step('Check FirstName field', async () => {
            await regPage.checkFirstNameField();
        })
        await test.step('Check LastName field', async () => {
            await regPage.checkLastNameField();
        })
        await test.step('Check Password field', async () => {
            await regPage.checkPasswordField();
        })
        await test.step('Check RepeatPassword field', async () => {
            await regPage.checkRepeatPasswordField();
        })
        await test.step('Fill registration form and click Continue button', async () => {
            await regPage.register('test@example.com', 'John', 'Doe', 'password123', 'password123');
        })
    })
    test('Check validation when all fields are empty', async () => {
        await regPage.clickContinueButton();
        await regPage.checkValidationErrors(expectedErrors);
    });
})