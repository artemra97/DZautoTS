import { test as base} from '@playwright/test';
import { ToDo, UserData } from '../src';
    const test = base.extend<{toDo:ToDo}> ({toDo:async({ page }, use)=>{
    const toDo = new ToDo(page);
    await page.goto('https://realworld.qa.guru/#/login');
    await use(toDo)
    }})

const oldUser = new UserData;
import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Оставить комментарий', async ({ toDo, page }) => {
    await toDo.signInPage.login();
    await toDo.articlePage.globalfeedField.click();
    await toDo.articlePage.finishedArticleField.click();
    const commentText = faker.lorem.sentence();
    await toDo.articlePage.commentPage({ enterKommentText: commentText });
    await expect(page.locator('.card-text', { hasText: commentText })).toBeVisible();
});
