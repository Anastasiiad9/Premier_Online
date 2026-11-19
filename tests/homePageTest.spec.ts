import { expect, Page, test } from "@playwright/test";
test.describe('Check elements home page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    })
    test('Opening home page and title check', async ({ page }) => {
        await test.step('Check current URL', async () => {
            await expect(page).toHaveURL('/')
        })
        await test.step('Check title', async () => {
            await expect(page).toHaveTitle('Premier Online - leading provider of online event registration for sports events')
        })
    })
    test('Check logo', async ({ page }) => {
        await test.step('Check logo', async () => {
            const logo = page.locator('.uk-logo')
            await expect(logo).toBeVisible()
            await expect(logo).toHaveAttribute('href', 'https://www.premieronline.com')
        })
    })
    test('Ckeck links', async ({ page }) => {
        await test.step('Check Events', async () => {
            const linkEvents = page.locator('.uk-navbar-nav a[href="https://www.premieronline.com/calendar"]')
            await expect(linkEvents).toBeVisible()
            await expect(linkEvents).toHaveAttribute('href', 'https://www.premieronline.com/calendar')
        })
        await test.step('Check Ratings', async () => {
            const linkRatings = page.locator('.uk-navbar-nav a[href="https://www.premieronline.com/event_ratings.php"]')
            await expect(linkRatings).toBeVisible()
            await expect(linkRatings).toHaveAttribute('href', 'https://www.premieronline.com/event_ratings.php')
        })
        await test.step('Check Help', async () => {
            const linkHelp = page.locator('.uk-navbar-nav a[href="https://www.premieronline.com/help"]').first()
            await expect(linkHelp).toBeVisible()
            await expect(linkHelp).toHaveAttribute('href', 'https://www.premieronline.com/help')
        })
        await test.step('Check Ar', async () => {
            const linkAr = page.locator('.uk-navbar-nav a[href="https://www.premieronline.com/action/lang.php?lang=ar"]')
            await expect(linkAr).toBeVisible()
            await expect(linkAr).toHaveAttribute('href', 'https://www.premieronline.com/action/lang.php?lang=ar')
        })
    })
    test('Check buttons', async ({ page }) => {
        await test.step('Check button SignIn', async () => {
            const buttonSignIn = page.locator('button.uk-button-secondary').first()
            await expect(buttonSignIn).toBeVisible()
            await expect(buttonSignIn).toBeEnabled()
            const signInLink = page.locator('.uk-navbar-item a[href="https://www.premieronline.com/action/dologin"]');
            await expect(signInLink).toHaveAttribute('href', 'https://www.premieronline.com/action/dologin')
        })
        await test.step('Check button Create Account', async () => {
            const buttonCreateAccount = page.locator('button.uk-button-primary').first()
            await expect(buttonCreateAccount).toBeVisible()
            await expect(buttonCreateAccount).toBeEnabled()
            const createAccountlink = page.locator('.uk-navbar-item a[href="https://www.premieronline.com/action/register"]');
            await expect(createAccountlink).toHaveAttribute('href', 'https://www.premieronline.com/action/register')
        })
    })
    test('Check field Search', async ({ page }) => {
        await test.step('Check Search field', async () => {
            const searchfield = page.locator('#search')
            await expect(searchfield).toBeVisible()
            await expect(searchfield).toBeEnabled()
            await searchfield.fill('test')
            await expect(searchfield).toHaveValue('test')
            const searchIcon = page.locator('span.uk-search-icon-flip').first()
            await expect(searchIcon).toBeVisible()
        })
    })
})