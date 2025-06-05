import { expect, Locator, Page } from '@playwright/test';
import { UserData } from '../helpers';
const userData = new UserData();

export class SignUpPage {

    page: Page;
    usernameField: Locator;
    emailField: Locator;
    passwordField: Locator;
    submitButton: Locator;

     constructor(page: Page) {
        this.page = page;
        this.usernameField = this.page.getByRole('textbox', {name: 'Your Name'});
        this.emailField = this.page.getByRole('textbox', { name: 'Email' });
        this.passwordField = this.page.getByRole('textbox', { name: 'Password' });
        this.submitButton = this.page.getByRole('button', { name: 'Sign up' });

     }

    async registeringNewUser(
        options?: {
            username?: string,
            password?: string,
            email?: string
        }
        ) {
            await this.usernameField.fill(options?.username ?? userData.username);
            await this.emailField.fill(options?.email ?? userData.email);
            await this.passwordField.fill(options?.password ?? userData.password);
            await this.submitButton.click();
            await expect(this.page.getByText(options?.username ?? userData.username)).toBeVisible();
    }
}