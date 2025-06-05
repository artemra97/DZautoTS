import { test as base, expect } from '@playwright/test';
import { ToDo } from '../src';

    const test = base.extend<{toDo:ToDo}> ({toDo:async({ page }, use)=>{
    const toDo = new ToDo(page);
        await page.goto('https://realworld.qa.guru/#/register');
        await use(toDo)
    }})

const imgUrl = 'https://png.pngtree.com/background/20230611/original/pngtree-picture-of-a-blue-bird-on-a-black-background-picture-image_3124189.jpg'

test('Редактирование профиля', async ({ toDo }) => {
    await toDo.signUpPage.registeringNewUser();
    await toDo.editProfilePage.navigateSettings();
    await toDo.editProfilePage.updateProfile({
    pictureField: imgUrl,
    });

    const newUserData = toDo.editProfilePage.getUserData()

    await expect(toDo.editProfilePage.profileDropDown).toHaveText(newUserData.username);
    await expect(toDo.page.locator(`[src*='${imgUrl}']`)).toBeVisible();
    await expect(toDo.editProfilePage.updateButton).toBeHidden();
    await expect(toDo.editProfilePage.passwordField).not.toBeEmpty();

    await toDo.editProfilePage.homeButton.click();
    await toDo.editProfilePage.navigateSettings();

    await expect(toDo.editProfilePage.pictureField).toHaveValue(imgUrl);
    await expect(toDo.editProfilePage.usernameField).toHaveValue(newUserData.username);
    await expect(toDo.editProfilePage.bioField).toHaveText(newUserData.bio);
    await expect(toDo.editProfilePage.emailField).toHaveValue(newUserData.email);
    await expect(toDo.editProfilePage.passwordField).toBeEmpty();
});
