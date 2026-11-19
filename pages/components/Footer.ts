import { expect, Page, Locator} from "@playwright/test";
export class Footer {
    readonly page: Page;
    readonly privacyPolicyLink : Locator;
    readonly cookiesLink : Locator;
    readonly termsConditionsLink : Locator;
    readonly termsOfUselink: Locator;
    readonly createEventLink: Locator;
    readonly contactUsLink: Locator;


    constructor(page: Page) {
        this.page = page;
        this.privacyPolicyLink = page.locator('.uk-active a[href="https://www.premieronline.com/legal/privacy"]');
        this.cookiesLink = page.locator('.uk-active a[href="https://www.premieronline.com/legal/cookies"]');
        this.termsConditionsLink = page.locator('.uk-active a[href="https://www.premieronline.com/legal/terms-participant"]');
        this.termsOfUselink = page.locator('.uk-active a[href="https://www.premieronline.com/legal/terms-of-service"]');
        this.createEventLink = page.locator('#create-event-link');
        this.contactUsLink = page.locator('.uk-active a[href="https://www.premieronline.com/help"]');
    }
    async checkPrivacyPolicyLink() {
        await expect(this.privacyPolicyLink).toBeVisible();
        await expect(this.privacyPolicyLink).toHaveAttribute('href', 'https://www.premieronline.com/legal/privacy');
    }
    async checkCookiesLink() {
        await expect(this.cookiesLink).toBeVisible();
        await expect(this.cookiesLink).toHaveAttribute('href', 'https://www.premieronline.com/legal/cookies');
    }
    async checkTermsConditionsLink() {
        await expect(this.termsConditionsLink).toBeVisible();
        await expect(this.termsConditionsLink).toHaveAttribute('href', 'https://www.premieronline.com/legal/terms-participant');
    }
    async checkTermsOfServiceLink() {
        await expect(this.termsOfUselink).toBeVisible();
        await expect(this.termsOfUselink).toHaveAttribute('href', 'https://www.premieronline.com/legal/terms-of-service');
    }
    async checkCreateEventLink() {
        await expect(this.createEventLink).toBeVisible();
    }
    async checkContactUsLink() {
        await expect(this.contactUsLink).toBeVisible();
        await expect(this.contactUsLink).toHaveAttribute('href', 'https://www.premieronline.com/help');
    }
}