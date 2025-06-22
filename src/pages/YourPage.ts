import {  Locator, Page } from '@playwright/test';

export class YourPage {

    page: Page;
    delereArticleOne: Locator;
    editArticleOne:Locator;
    nameArticle:Locator;
    userNameAuthor:Locator;
    delereArticleTwo: Locator;
    editArticleTwo:Locator;
    enterKcommentText:Locator;
    postKommentField:Locator;


     constructor(page: Page) {
        this.page = page;
        this.delereArticleOne = this.page.locator('[class="btn btn-sm"]').nth(0);
        this.editArticleOne = this.page.locator('[class="nav-link"]').nth(1)
        this.nameArticle = this.page.locator('[class="col-md-12"]');
        this.userNameAuthor = this.page.locator('div[class="author"]');
        this.delereArticleTwo = this.page.locator('[class="btn btn-sm"]').nth(2);
        this.editArticleTwo = this.page.locator('[class="nav-link"]').nth(3);
        this.enterKcommentText = this.page.locator('[class="form-control"]');
        this.postKommentField = this.page.locator('[class="btn btn-sm btn-primary"]');
    }
}

