import { test as base, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { SignUpPage } from '../src';

const test = base.extend<{signUpPage:SignUpPage}> ({signUpPage:async({ page }, use)=>{
    const signUpPage = new SignUpPage(page);
    await page.goto('https://realworld.qa.guru/#/register');
    await use(signUpPage)
  }})

test('Регистрация пользователя', async ({ signUpPage }) => {
    const login = faker.internet.userName()
    await signUpPage.registeringNewUser({ username: login });
});
