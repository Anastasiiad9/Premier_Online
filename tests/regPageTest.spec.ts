import { expect, test } from "@playwright/test";
test.describe('Check elements register page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.premieronline.com/action/register')
    })
    test('Opening register page and title check', async ({ page }) => {
        await test.step('Check current URL', async () => {
            await expect(page).toHaveURL('https://www.premieronline.com/action/register')
        })
    })
    // test('Check present on registration form', async ({ page }) => {
    //     await test.step('Check registration form', async () => {
    //         const registrationForm = page.locator('#create_profile_form')
    //         await expect(registrationForm).toBeVisible()
    //         await expect(registrationForm).toBeEnabled()
    //     })
    // })
    test('Check links on registration form', async ({ page }) => {
            await test.step('Check links on registration form', async () => {
                const regLinkTerms = page.locator('#create_profile_form a[href="https://www.premieronline.com/legal/terms-participant"]')
                await expect(regLinkTerms).toBeVisible()
                await expect(regLinkTerms).toHaveAttribute('href', 'https://www.premieronline.com/legal/terms-participant')
                const regLinkPrivacy = page.locator('#create_profile_form a[href="https://www.premieronline.com/legal/privacy"]')
                await expect(regLinkPrivacy).toBeVisible()
                await expect(regLinkPrivacy).toHaveAttribute('href', 'https://www.premieronline.com/legal/privacy')
            })
        })
    test('Check field Email', async ({ page }) => {
        await test.step('Check Email field', async () => {
            const emailField = page.locator('#email').first()
            await expect(emailField).toBeVisible()
            await expect(emailField).toBeEnabled()
            await emailField.fill('test@example.com')
            await expect(emailField).toHaveValue('test@example.com')
        })
    })
    test('Check field FirstName', async ({ page }) => {
        await test.step('Check FirstName field', async () => {
            const firstNameField = page.locator('#first_name').first()
            await expect(firstNameField).toBeVisible()
            await expect(firstNameField).toBeEnabled()
            await firstNameField.fill('John')
            await expect(firstNameField).toHaveValue('John')
        })
    })
    test('Check field LastName', async ({ page }) => {
        await test.step('Check LastName field', async () => {
            const lastNameField = page.locator('#last_name').first()
            await expect(lastNameField).toBeVisible()
            await expect(lastNameField).toBeEnabled()
            await lastNameField.fill('Doe')
            await expect(lastNameField).toHaveValue('Doe')
        })
    })
    test('Check field Password', async ({ page }) => {
        await test.step('Check Password field', async () => {
            const passwordField = page.locator('#password')
            await expect(passwordField).toBeVisible()
            await expect(passwordField).toBeEnabled()
            await passwordField.fill('Password123!')
            await expect(passwordField).toHaveValue('Password123!')
            await expect(passwordField).toHaveAttribute('type', 'password');
        })
    })
    test('Check field Repeat Password', async ({ page }) => {
        await test.step('Check Repeat Password field', async () => {
            const repeatPasswordField = page.locator('#password_repeat')
            await expect(repeatPasswordField).toBeVisible()
            await expect(repeatPasswordField).toBeEnabled()
            await repeatPasswordField.fill('Password123!')
            await expect(repeatPasswordField).toHaveValue('Password123!')
            // const showPasswordButton = page.locator('#fas fa-eye');
            // await showPasswordButton.click();
            await expect(repeatPasswordField).toHaveAttribute('type', 'password');
        })
    })
    test('Check Continue button', async ({ page }) => {
        await test.step('Check Continue button', async () => {
            const continueButton = page.locator('button.uk-button-large.uk-width-1-1')
            await expect(continueButton).toBeEnabled()
        })
})
})