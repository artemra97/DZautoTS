import { expect, Locator, Page } from '@playwright/test';

export class BasePage {

    page: Page;
    newArticleButton: Locator;
    homeButton: Locator;
    userImg: Locator;
    profileDropDown: Locator;
    profileOption: Locator;
    settingsOption: Locator;
    logoutOption: Locator;


     constructor(page: Page) {
        this.page = page;
        this.newArticleButton = this.page.locator('[class*="nav-link"]').nth(2);
        this.homeButton = this.page.locator('[class*="nav-item"]').nth(1)
        this.userImg = this.page.locator('[class*="user-pic"]');
        this.profileDropDown = this.page.locator('div[class*="nav-link"]');
        this.profileOption = this.page.locator('[class*="ion-person"]').locator('..');
        this.settingsOption = this.page.locator('[class*="ion-gear-a"]').locator('..');
        this.logoutOption = this.page.locator('[class*="ion-log-out"]').locator('..');

     }

    async navigateProfile(){
         await this.profileDropDown.click();
         await this.profileOption.click({force:true});

    }
    async navigateSettings(){
        await this.profileDropDown.click();
        await this.settingsOption.click({force:true});

    }
    async logout(){
        await this.profileDropDown.click();
        await this.logoutOption.click({force:true})
        await expect(this.page.locator('[class*="nav-link"]').nth(3)).toHaveText('Sign up');


    }
}

