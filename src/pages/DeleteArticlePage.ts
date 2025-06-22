import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DeleteArticlePage extends BasePage{

    page: Page;
    deleteartField: Locator;



    constructor(page: Page) {
        super(page)
        this.page = page;
        this.deleteartField = this.page.locator('[class="btn btn-sm"]').nth(2);


    }
}

