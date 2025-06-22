import { Locator, Page } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { BasePage } from './BasePage';

export class CreateArticlePage extends BasePage {
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

    private generateArticleData() {
        return {
            titleField: faker.lorem.words({max: 3, min:1}),
            descriptionField: faker.lorem.words({max: 5, min:1}),
            bodyField: faker.lorem.words({max: 15, min:1}),
            tagsField: faker.lorem.words({max: 1, min:1}),
        };
    }

    async createNewArticle(
        articleData?: {
            titleField?: string,
            descriptionField?: string,
            bodyField?: string,
            tagsField?: string,
        }
    ) {
        const defaultData = this.generateArticleData(); // Используем новый метод

        await this.titleField.fill(articleData?.titleField ?? defaultData.titleField);
        await this.descriptionField.fill(articleData?.descriptionField ?? defaultData.descriptionField);
        await this.bodyField.fill(articleData?.bodyField ?? defaultData.bodyField);
        await this.tagsField.fill(articleData?.tagsField ?? defaultData.tagsField);

        await this.submitButton.click();

        return defaultData; // Возвращаем сгенерированные данные
    }

    async getArticleData() {
        return {
            title: await this.titleField.inputValue(),
            description: await this.descriptionField.inputValue(),
            body: await this.bodyField.inputValue(),
            tags: await this.tagsField.inputValue(),
        };
    }
}