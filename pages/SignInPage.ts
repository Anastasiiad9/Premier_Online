import { expect, Locator, Page} from "@playwright/test";
import { Header } from "./components/Header";
import { RegistrationPage } from "./RegistrationPage";
export class SignInPage {
readonly page: Page;
readonly header: Header;
readonly signInEmailField: Locator;
readonly signInPasswordField: Locator;
readonly signInButton: Locator;
readonly forgotPasswordLink: Locator;
readonly createAccountButton: Locator;
readonly registerAsAGuestbutton: Locator;
readonly registrationPage: RegistrationPage;

constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.signInEmailField = page.locator('.uk-input').first();
    this.signInPasswordField = page.locator('.uk-input').last();
    this.signInButton = page.locator('.uk-button.uk-button-primary.uk-width-1-1');
    this.forgotPasswordLink = page.locator('a[href=https://www.premieronline.com/action/forgot_password]')
    this.createAccountButton = page.locator('a[href=https://www.premieronline.com/action/register]')
    this.registerAsAGuestbutton = page.locator('a[href=https://www.premieronline.com/guest_add_create.php]')
    this.registrationPage = new RegistrationPage(page);
}
async login(email: string, password: string) {
    await this.signInEmailField.fill(email);
    await expect(this.signInEmailField).toHaveValue(email);
    await this.registrationPage.passwordField.fill(password);
    await expect(this.registrationPage.passwordField).toHaveValue(password);
    await this.signInButton.click();
}
async checkSignInEmailField() {
    await expect(this.signInEmailField).toBeVisible();
    await expect(this.signInEmailField).toBeEnabled();
    await this.signInEmailField.fill('pollyh185678@gmail.com');
}
async checkSignInPasswordField() {
    await expect(this.signInPasswordField).toBeVisible();
    await expect(this.signInPasswordField).toBeEnabled();
    await this.signInPasswordField.fill('123qweasD');
    await expect(this.signInPasswordField).toHaveAttribute('type', 'password');
}
async checkSignInButton() {
    await expect(this.signInButton).toBeVisible();
    await expect(this.signInButton).toBeEnabled();
}
async checkForgotPasswordLink() {
    await expect(this.forgotPasswordLink).toBeVisible();
    await expect(this.forgotPasswordLink).toHaveAttribute('href', 'https://www.premieronline.com/action/forgot_password');
}
async checkCreateAccountButton() {
    await expect(this.createAccountButton).toBeVisible();
    await expect(this.createAccountButton).toHaveAttribute('href', 'https://www.premieronline.com/action/register');
}
async checkRegisterAsAGuestButton() {
    await expect(this.registerAsAGuestbutton).toBeVisible();
    await expect(this.registerAsAGuestbutton).toHaveAttribute('href', 'https://www.premieronline.com/guest_add_create.php');    
}
}