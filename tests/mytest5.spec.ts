import { test as base, expect } from '@playwright/test';
import { ToDo, SignUpPage, UserData } from '../src';
import { faker } from '@faker-js/faker';

const test = base
    .extend<{ toDo: ToDo }>({
        toDo: async ({ page }, use) => {
            const toDo = new ToDo(page);
            await page.goto('https://realworld.qa.guru/#/login');
            await use(toDo);
        }
    })
    .extend<{ signUpPage: SignUpPage }>({
        signUpPage: async ({ page }, use) => {
            const signUpPage = new SignUpPage(page);
            await page.goto('https://realworld.qa.guru/#/register');
            await use(signUpPage);
        }
    });
const oldUser = new UserData();
const imgUrl = 'https://png.pngtree.com/background/20230611/original/pngtree-picture-of-a-blue-bird-on-a-black-background-picture-image_3124189.jpg';


test('Регистрация пользователя', async ({ signUpPage }) => {
    const login = faker.internet.userName()
    await signUpPage.registeringNewUser({ username: login });
    await expect(signUpPage.usernameField).toHaveValue(login);
    await expect(signUpPage.page.getByText(login)).toBeVisible();
});

test('Создание статьи', async ({ toDo }) => {
    await toDo.signInPage.login();
    await toDo.createArticlePage.newArticleButton.click();
    const generatedData = await toDo.createArticlePage.createNewArticle();
    const createdArticle = await toDo.createArticlePage.getArticleData();
    expect(createdArticle.title).toBe(generatedData.titleField);
    expect(createdArticle.body).toContain(generatedData.bodyField);
});

test('Удаление статьи после создания', async ({ toDo }) => {
    await toDo.signInPage.login();
    await toDo.createArticlePage.newArticleButton.click();
    const articleData = await toDo.createArticlePage.createNewArticle();
    await expect(toDo.page.getByText(articleData.titleField)).toBeVisible();
    await toDo.deleteArticlePage.deleteartField.click();
    await expect(toDo.page.getByText(articleData.titleField)).not.toBeVisible();
});

test('Лайк на статью', async ({ toDo }) => {
    await toDo.signUpPage.registeringNewUser(oldUser);
    await toDo.searchTagsPage.popularTagButton.click();
    await toDo.searchTagsPage.likeTagButton.click();
    await expect(toDo.searchTagsPage.selectedTagsFeedButton).toBeVisible();
});

test('Выход из системы', async ({ toDo }) => {
    await toDo.signUpPage.registeringNewUser(oldUser);
    await toDo.basePage.logout();
    await expect(toDo.page.getByText(oldUser.username)).toBeVisible();
});

test('Добавление комментария под статьёй', async ({ toDo, page }) => {
    await toDo.signInPage.login();
    await toDo.articlePage.globalfeedField.click();
    await toDo.articlePage.finishedArticleField.click();
    const commentText = faker.lorem.sentence();
    await toDo.articlePage.commentPage({ enterKommentText: commentText });
    await expect(toDo.articlePage.getCommentByText(commentText)).toBeVisible();
});

test('Редактирование профиля', async ({ toDo }) => {
    await toDo.signUpPage.registeringNewUser();
    await toDo.editProfilePage.navigateSettings();

    await toDo.editProfilePage.updateProfile({
        pictureField: imgUrl,
    });

    const newUserData = toDo.editProfilePage.getUserData();

    await expect(toDo.editProfilePage.profileDropDown).toHaveText(newUserData.username);
    await expect(toDo.editProfilePage.profileImage).toBeVisible();
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
