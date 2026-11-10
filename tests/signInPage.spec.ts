import { expect, test } from "@playwright/test";
test.describe('Check elements sign in page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.premieronline.com/action/dologin')
    })
    test('Opening sign in page and title check', async ({ page }) => {
        await test.step('Check current URL', async () => {
            await expect(page).toHaveURL('https://www.premieronline.com/action/dologin')
        })
    })
    test('Check present on sign in form', async ({ page }) => {
        await test.step('Check sign in form', async () => {
            const signInForm = page.locator('.uk-container.register')
            await expect(signInForm).toBeVisible()
            await expect(signInForm).toBeEnabled()
        })
    })
    test('Check field Email on sign page', async ({ page }) => {
        await test.step('Check Email field on sign in page', async () => {
            const emailFieldSignIn = page.locator('.uk-input').first()
            await expect(emailFieldSignIn).toBeVisible()
            await expect(emailFieldSignIn).toBeEnabled()
            await emailFieldSignIn.fill('pollyh1856@gmail.com')
    })
})
    test('Check field Password on sign page', async ({ page }) => {
        await test.step('Check Password field on sign in page', async () => {
            const passwordFieldSignIn = page.locator('.uk-input').last()
            await expect(passwordFieldSignIn).toBeVisible()
            await expect(passwordFieldSignIn).toBeEnabled()
            await passwordFieldSignIn.fill('123qweasD')
            await expect(passwordFieldSignIn).toHaveAttribute('type', 'password');
        })
    })
    test('Check button SignIn on sign page', async ({ page }) => {
        await test.step('Check button SignIn on sign in page', async () => {
            const buttonSignIn = page.locator('.uk-button.uk-button-primary.uk-width-1-1')
            await expect(buttonSignIn).toBeVisible()
            await expect(buttonSignIn).toBeEnabled()
            await expect(buttonSignIn).toHaveText('Sign in')
        })
    })
})