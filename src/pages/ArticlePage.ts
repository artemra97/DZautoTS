import { Locator, Page } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { BasePage } from './BasePage';
const UserData = {

    oknokometnField: faker.lorem.words({max: 5, min:3}),
}
export class ArticlePage extends BasePage{

    page: Page;
    yorfeedField: Locator;
    globalfeedField: Locator;
    finishedArticleField: Locator;
    enterKommentText: Locator;
    postKommentField: Locator;

    constructor(page: Page) {
        super(page)
        this.page = page;
        this.yorfeedField = this.page.locator('[class="nav-link"]');
        this.globalfeedField = this.page.locator('[class="nav-item"]').nth(4);
        this.finishedArticleField = this.page.locator('[class="article-preview"]').nth(1);
        this.enterKommentText = this.page.locator('[class="form-control"]');
        this.postKommentField = this.page.locator('[class="btn btn-sm btn-primary"]').first();
    }
    async commentPage(
        userData?: {
            enterKommentText?: string,
        }
    ) {
        await this.enterKommentText.fill(userData?.enterKommentText ?? UserData.oknokometnField);
        await this.postKommentField.click();
    }
}
