import { expect, Page, Locator} from "@playwright/test";
export class Header{
    readonly page: Page;
    readonly logoLink: Locator;
    readonly eventlink: Locator;
    readonly ratingskink: Locator;
    readonly helplink: Locator;
    readonly arlink: Locator;
    readonly buttonSignIn: Locator;
    readonly buttonCreateAccount: Locator;
    readonly sighnLink: Locator;
    readonly createAccountlink: Locator;
    readonly searchField: Locator;
    readonly searchIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logoLink = page.locator('.uk-logo');
        this.eventlink = page.locator('.uk-navbar-nav a[href="https://www.premieronline.com/calendar"]')
        this.ratingskink = page.locator('.uk-navbar-nav a[href="https://www.premieronline.com/event_ratings.php"]')
        this.helplink = page.locator('.uk-navbar-nav a[href="https://www.premieronline.com/help"]').first()
        this.arlink = page.locator('.uk-navbar-nav a[href="https://www.premieronline.com/action/lang.php?lang=ar"]')
        this.buttonSignIn = page.locator('button.uk-button-secondary').first()
        this.buttonCreateAccount = page.locator('button.uk-button-primary').first()
        this.sighnLink = page.locator('.uk-navbar-item a[href="https://www.premieronline.com/action/dologin"]');
        this.createAccountlink = page.locator('.uk-navbar-item a[href="https://www.premieronline.com/action/register"]');
        this.searchField = page.locator('#search')
        this.searchIcon = page.locator('span.uk-search-icon-flip').first()
    }
    async checkLogoLink() {
        await expect(this.logoLink).toBeVisible();
        await expect(this.logoLink).toHaveAttribute('href', '/');
    }
    async checkEventLink() {
        await expect(this.eventlink).toBeVisible();
        await expect(this.eventlink).toHaveAttribute('href', 'https://www.premieronline.com/calendar');
    }
    async checkRatingsLink() {
        await expect(this.ratingskink).toBeVisible();
        await expect(this.ratingskink).toHaveAttribute('href', 'https://www.premieronline.com/event_ratings.php');
    }
    async checkHelpLink() {
        await expect(this.helplink).toBeVisible();
        await expect(this.helplink).toHaveAttribute('href', 'https://www.premieronline.com/help');
    }
    async checkArLink() {
        await expect(this.arlink).toBeVisible();
        await expect(this.arlink).toHaveAttribute('href', 'https://www.premieronline.com/action/lang.php?lang=ar');
    }
    async checkButtonSignIn() {
        await expect(this.buttonSignIn).toBeVisible();
        await expect(this.buttonSignIn).toBeEnabled();
        await expect(this.sighnLink).toHaveAttribute('href', 'https://www.premieronline.com/action/dologin');
    }
    async checkButtonCreateAccount() {
        await expect(this.buttonCreateAccount).toBeVisible();
        await expect(this.buttonCreateAccount).toBeEnabled();
        await expect(this.createAccountlink).toHaveAttribute('href', 'https://www.premieronline.com/action/register');
    }
    async checkSearchField() {
        await expect(this.searchField).toBeVisible();
        await expect(this.searchField).toBeEnabled();
        await this.searchField.fill('test')
        await expect(this.searchField).toHaveValue('test')
    }
    async checkSearchIcon() {
        await expect(this.searchIcon).toBeVisible();
    }
}