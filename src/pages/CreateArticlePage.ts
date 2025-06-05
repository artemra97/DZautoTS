import { Locator, Page } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { BasePage } from './BasePage';

export class CreateArticlePage extends BasePage{

    page: Page;
    titleField: Locator;
    descriptionField: Locator;
    bodyField: Locator;
    tagsField: Locator;
    submitButton: Locator;

    constructor(page: Page) {
        super(page)
        this.page = page;
        this.titleField = this.page.locator('[name*=title]');
        this.descriptionField = this.page.locator('[name=description]').last();
        this.bodyField = this.page.locator('[name=body]');
        this.tagsField = this.page.locator('[name=tags]');
        this.submitButton = this.page.locator('[type*=submit]');
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
}