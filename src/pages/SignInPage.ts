import { expect, Locator, Page } from '@playwright/test';

export class SignInPage {

    page: Page;
    emailField: Locator;
    passwordField: Locator;
    submitButton: Locator;

     constructor(page: Page) {
        this.page = page;
        this.emailField = this.page.getByRole('textbox', { name: 'Email' });
        this.passwordField = this.page.getByRole('textbox', { name: 'Password' });
        this.submitButton = this.page.getByRole('button', { name: 'Login' });
     }

    async login (
        options?: {
            password?: string,
            email?: string
        }
        )
    {
            const email = 'arazdelny@mail';
            const password = 'arazdelny';
            await this.emailField.fill(options?.email ?? email);
            await this.passwordField.fill(options?.password ?? password);
            await this.submitButton.click();
            await expect(this.page.locator('[class*="nav-link"]').nth(3)).not.toHaveText('Sign up');

    }
}