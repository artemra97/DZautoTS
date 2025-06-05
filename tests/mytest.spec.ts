import { test as base, expect } from '@playwright/test';
import { ToDo } from '../src';
    const test = base.extend<{toDo:ToDo}> ({toDo:async({ page }, use)=>{
    const toDo = new ToDo(page);
        await page.goto('https://realworld.qa.guru/#/login');
        await use(toDo)
    }})


test('Создание статьи', async ({ toDo }) => {
    await toDo.signInPage.login()
    await toDo.createArticlePage.newArticleButton.click();
    await toDo.createArticlePage.createNewArticle();
});
