import { Locator, Page } from '@playwright/test';

export class BasePage {

    page: Page;
    newArticleButton: Locator;
    homeButton: Locator;

     constructor(page: Page) {
        this.page = page;
        this.newArticleButton = this.page.getByText('New Article');
        this.homeButton = this.page.getByText('Home');
     }

}

