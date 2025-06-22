import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { UserData } from '../helpers';
const userData = new UserData();


export class EditProfilePage extends BasePage{

    page: Page;
    pictureField: Locator;
    usernameField: Locator;
    bioField: Locator;
    emailField: Locator;
    passwordField: Locator;
    updateButton: Locator;
    profileImage: Locator;



    constructor(page: Page) {
        super(page)
        this.page = page;
        this.pictureField = this.page.locator('[name*=image]');
        this.usernameField = this.page.locator('[name=username]');
        this.bioField = this.page.locator('[name=bio]');
        this.emailField = this.page.locator('[name=email]');
        this.passwordField = this.page.locator('[name=password]');
        this.updateButton = this.page.locator('[type*=submit]');
        this.profileImage = page.locator('img.profile-image'); // пример селектора
    }

    async updateProfile(
        options?: {
            pictureField?: string,
            usernameField?: string,
            bioField?: string,
            emailField?: string,
            passwordField?: string,

        }
    ) {
        await this.pictureField.fill(options?.pictureField ?? userData.image);
        await this.usernameField.fill(options?.usernameField ?? userData.username);
        await this.bioField.fill(options?.bioField ?? userData.bio);
        await this.emailField.fill(options?.emailField ?? userData.email);
        await this.passwordField.fill(options?.passwordField ?? userData.password);


        await this.updateButton.click();
    }
    getUserData(){
        return userData
    }
}