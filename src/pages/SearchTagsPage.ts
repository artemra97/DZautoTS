import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SearchTagsPage extends BasePage{

    page: Page;
    yourFeedButton: Locator;
    globalFeedButton: Locator;
    selectedTagsFeedButton: Locator;
    popularTagButton: Locator;
    likeTagButton: Locator;

    constructor(page: Page) {
        super(page)
        this.page = page;
        this.yourFeedButton = this.page.locator('[class="nav-link "]');
        this.globalFeedButton = this.page.locator('[class="nav-link active"]').last();
        this.selectedTagsFeedButton = this.page.locator('[class="ion-pound"]');
        this.popularTagButton = this.page.locator('[class="tag-pill tag-default"]').first();
        this.likeTagButton = this.page.locator('[class="btn btn-sm btn-outline-primary pull-xs-right "]').nth(0)

    }
}
