import { expect, Locator, Page} from "@playwright/test";
import { Header } from "./components/Header";
export class RegistrationPage {
readonly page: Page;
readonly header: Header;
readonly emailField: Locator;
readonly firstNameField: Locator;
readonly lastNameField: Locator;
readonly passwordField: Locator;
readonly repeatPasswordField: Locator;
readonly continueButton: Locator;

constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.emailField = page.locator('#email').first();
    this.firstNameField = page.locator('#first_name').first();
    this.lastNameField = page.locator('#last_name').first();
    this.passwordField = page.locator('#password');
    this.repeatPasswordField = page.locator('#password_repeat');
    this.continueButton = page.locator('button.uk-button-large uk-width-1-1');
}
async clickRegisterButton() {
    await this.header.buttonSignIn.click();
}
async checkEmailField() {
    await expect(this.emailField).toBeVisible();
    await expect(this.emailField).toBeEnabled();
}
async checkFirstNameField() {
    await expect(this.firstNameField).toBeVisible();
    await expect(this.firstNameField).toBeEnabled();
}
async checkLastNameField() {
    await expect(this.lastNameField).toBeVisible();
    await expect(this.lastNameField).toBeEnabled();
}
async checkPasswordField() {
    await expect(this.passwordField).toBeVisible();
    await expect(this.passwordField).toBeEnabled();
    await expect(this.passwordField).toHaveAttribute('type', 'password');
}
async checkRepeatPasswordField() {
    await expect(this.repeatPasswordField).toBeVisible();
    await expect(this.repeatPasswordField).toBeEnabled();
    await expect(this.repeatPasswordField).toHaveAttribute('type', 'password');
}
async register(email: string, firstName: string, lastName: string, password: string, repeatPassword: string) {
    await this.emailField.fill(email);
    await expect(this.emailField).toHaveValue(email);
    await this.firstNameField.fill(firstName);
    await expect(this.firstNameField).toHaveValue(firstName);
    await this.lastNameField.fill(lastName);
    await expect(this.lastNameField).toHaveValue(lastName);
    await this.passwordField.fill(password);
    await expect(this.passwordField).toHaveValue(password);
    await this.repeatPasswordField.fill(repeatPassword);
    await expect(this.repeatPasswordField).toHaveValue(repeatPassword);
}
async clickContinueButton() {
    await this.continueButton.click();
}
}