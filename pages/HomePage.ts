import { expect, Page} from "@playwright/test";
export class HomePage {
readonly page: Page;
constructor(page: Page) {
    this.page = page;
}
async openSite() {
    await this.page.goto('/');
}
async checkURL() {
    await expect(this.page).toHaveURL('/');
}
async checkTitle() {
    await expect(this.page).toHaveTitle('Premier Online - leading provider of online event registration for sports events');
}
}