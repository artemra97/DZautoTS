import { test as base, expect } from '@playwright/test';
import { ToDo, UserData } from '../src';
    const test = base.extend<{toDo:ToDo}> ({toDo:async({ page }, use)=>{
    const toDo = new ToDo(page);
        await page.goto('https://realworld.qa.guru/#/register');
        await use(toDo)
    }})

    const oldUser = new UserData;

test('Лайк на статью', async ({ toDo }) => {
    await toDo.signUpPage.registeringNewUser(oldUser);
    await toDo.searchTagsPage.popularTagButton.click();
    await toDo.searchTagsPage.likeTagButton.click();
});

