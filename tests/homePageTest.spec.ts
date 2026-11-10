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
            //await expect(linkEvents).toContainText('Events') - не злоупотреблять
        })
        await test.step('Check Ratings', async () => {
            const linkRatings = page.locator('.uk-navbar-nav a[href="https://www.premieronline.com/event_ratings.php"]')
            await expect(linkRatings).toBeVisible()
            await expect(linkRatings).toHaveAttribute('href', 'https://www.premieronline.com/event_ratings.php')
            //await expect(linkRatings).toContainText('Ratings') - не злоупотреблять
        })
        await test.step('Check Help', async () => {
            const linkHelp = page.locator('.uk-navbar-nav a[href="https://www.premieronline.com/help"]').first()
            await expect(linkHelp).toBeVisible()
            await expect(linkHelp).toHaveAttribute('href', 'https://www.premieronline.com/help')
        })
        // await test.step('Check Help', async () => {
        //     const linkHelp = page.getByRole('link', { name: 'Help', exact: true })
        //     await expect(linkHelp).toBeVisible()
        //     await expect(linkHelp).toHaveAttribute('href', 'https://www.premieronline.com/help')
        // })
        await test.step('Check Ar', async () => {
            const linkAr = page.locator('.uk-navbar-nav a[href="https://www.premieronline.com/action/lang.php?lang=ar"]')
            await expect(linkAr).toBeVisible()
            await expect(linkAr).toHaveAttribute('href', 'https://www.premieronline.com/action/lang.php?lang=ar')
            //await expect(linkAr).toContainText(' عربى') - не злоупотреблять
        })
    })
    test('Check buttons', async ({ page }) => {
        await test.step('Check button SignIn', async () => {
            const buttonSignIn = page.locator('button.uk-button-secondary').first()
            await expect(buttonSignIn).toBeVisible()
            await expect(buttonSignIn).toBeEnabled()
            //await expect(buttonSignIn).toContainText('Sign in')
            const signInLink = page.locator('.uk-navbar-item a[href="https://www.premieronline.com/action/dologin"]');
            await expect(signInLink).toHaveAttribute('href', 'https://www.premieronline.com/action/dologin')
        })
        await test.step('Check button Create Account', async () => {
            const buttonCreateAccount = page.locator('button.uk-button-primary').first()
            await expect(buttonCreateAccount).toBeVisible()
            await expect(buttonCreateAccount).toBeEnabled()
            //await expect(buttonCreateAccount).toContainText('Create Account')
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
        // const MOBILE_TOGGLE = '[class~="uk-hidden@s"] button:has(i.fa-search)';
        // const MOBILE_DROPDOWN = '[class~="uk-hidden@s"] .uk-dropdown';
        // async function openSearch(page: Page, isMobile: boolean) {
        //     if (!isMobile) {
        //         const input = page.locator('#search');
        //         await expect(input).toBeVisible();
        //         return input;
        //     }
        //     const input = page.locator('#search_m');
        //     await expect(input).toBeHidden();
        //     await page.locator(MOBILE_TOGGLE).click();
        //     await expect(page.locator(MOBILE_DROPDOWN)).toHaveClass(/uk-open/);
        //     await expect(input).toBeVisible();
        //     return input;
        // }
        // test('desktop: поле поиска видно, мобильное скрыто', async ({ page, isMobile }) => {
        //     test.skip(isMobile, 'Только десктоп')
        //     await expect(page.locator('#search')).toBeVisible()
        //     await expect(page.locator('#search')).toHaveAttribute('placeholder', 'Search by Event Name or Organiser');
        //     await expect(page.locator('#search_m')).toBeHidden();
        //     await expect(page.locator(MOBILE_TOGGLE)).toBeHidden();
        // })
        // test('desktop: поле поиска видно, мобильное скрыто', async ({ page, isMobile }) => {
        //     test.skip(isMobile, 'Только десктоп');
        //     await expect(page.locator('#search')).toBeVisible();
        //     await expect(page.locator('#search')).toHaveAttribute('placeholder', 'Search by Event Name or Organiser');
        //     await expect(page.locator('#search_m')).toBeHidden();
        //     await expect(page.locator(MOBILE_TOGGLE)).toBeHidden();
        // });
        // test('mobile: десктопное поле скрыто, иконка видна', async ({ page, isMobile }) => {
        //     test.skip(!isMobile, 'Только мобайл');
        //     await expect(page.locator('#search')).toBeHidden();
        //     await expect(page.locator(MOBILE_TOGGLE)).toBeVisible();
        // });
        // test('mobile: клик по иконке открывает dropdown с полем', async ({ page, isMobile }) => {
        //     test.skip(!isMobile, 'Только мобайл');
        //     const input = await openSearch(page, isMobile);
        // });
        // test('mobile: повторный клик закрывает dropdown', async ({ page, isMobile }) => {
        //     test.skip(!isMobile, 'Только мобайл');
        //     await openSearch(page, isMobile);
        //     await page.locator(MOBILE_TOGGLE).click();
        //     await expect(page.locator(MOBILE_DROPDOWN)).not.toHaveClass(/uk-open/);
        //     await expect(page.locator('#search_m')).toBeHidden();
        // });
        // test('можно ввести запрос', async ({ page, isMobile }) => {
        //     const input = await openSearch(page, isMobile);
        //     await input.fill('conference');
        //     await expect(input).toHaveValue('conference');
        // });
        // test('live search срабатывает на keyup', async ({ page, isMobile }) => {
        //     const input = await openSearch(page, isMobile);
        //     await input.pressSequentially('test', { delay: 100 });
        //     await expect(page.locator('.event-card, .uk-card').first()).toBeVisible();
        // })
        // test('Enter не перезагружает страницу', async ({ page, isMobile }) => {
        //     const input = await openSearch(page, isMobile);
        //     const urlBefore = page.url();
        //     await input.fill('abc');
        //     input.press('Entr');
        //     await expect(page).toHaveURL(urlBefore);
        // })
    })
})