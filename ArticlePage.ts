import { Locator, Page } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { BasePage } from './BasePage';

const UserData = {
    oknokometnField: faker.lorem.words({max: 5, min:3}),
};

export class ArticlePage extends BasePage {
    page: Page;
    titleField: Locator;
    descriptionField: Locator;
    bodyField: Locator;
    tagsField: Locator;
    submitButton: Locator;
    yorfeedField: Locator;
    globalfeedField: Locator;
    finishedArticleField: Locator;
    enterKommentText: Locator;
    postKommentField: Locator;
    commentCard: Locator;
    deleteartField: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.titleField = this.page.locator('[name*=title]');
        this.descriptionField = this.page.locator('[name=description]').last();
        this.bodyField = this.page.locator('[name=body]');
        this.tagsField = this.page.locator('[name=tags]');
        this.submitButton = this.page.locator('[type*=submit]');
        this.yorfeedField = this.page.locator('[class="nav-link"]');
        this.globalfeedField = this.page.locator('[class="nav-item"]').nth(4);
        this.finishedArticleField = this.page.locator('[class="article-preview"]').nth(1);
        this.enterKommentText = this.page.locator('[class="form-control"]');
        this.postKommentField = this.page.locator('[class="btn btn-sm btn-primary"]').first();
        this.commentCard = this.page.locator('.card-text');
        this.deleteartField = this.page.locator('[class="btn btn-sm"]').nth(2);
    }

    async createNewArticle(
        articleData?: {
            titleField?: string,
            descriptionField?: string,
            bodyField?: string,
            tagsField?: string,
        }
    ) {
        const titleField = faker.lorem.words({max: 3, min:1});
        const descriptionField = faker.lorem.words({max: 5, min:1});
        const bodyField = faker.lorem.words({max: 15, min:1});
        const tagsField = faker.lorem.words({max: 1, min:1});

        await this.titleField.fill(articleData?.titleField ?? titleField);
        await this.descriptionField.fill(articleData?.descriptionField ?? descriptionField);
        await this.bodyField.fill(articleData?.bodyField ?? bodyField);
        await this.tagsField.fill(articleData?.tagsField ?? tagsField);

        await this.submitButton.click();
    }

    getCommentByText(text: string): Locator {
        return this.page.locator('.card-text', { hasText: text });
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