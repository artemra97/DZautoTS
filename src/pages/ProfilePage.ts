import { Locator, Page } from '@playwright/test';

export class ProfilePage {

    page: Page;
    nameUserText: Locator;
    editProfileSettingsButton: Locator;
    myArticleButton: Locator;
    favoriteArticleButton: Locator;
    articleButton: Locator;
    likeButton: Locator;

     constructor(page: Page) {
        this.page = page;
        this.nameUserText = this.page.locator('[class="col-xs-12 col-md-10 offset-md-1"]');
        this.editProfileSettingsButton = this.page.locator('[class="btn btn-sm btn-outline-secondary action-btn"]');
        this.myArticleButton = this.page.locator('div[class="nav-link active"]');
        this.favoriteArticleButton = this.page.locator('[class="nav-link "]').nth(2);
        this.articleButton = this.page.locator('[class="article-preview"]').nth(0);
        this.likeButton = this.page.locator('[class="counter"]').nth(0);

     }
    }


