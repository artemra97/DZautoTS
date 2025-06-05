import { Page } from '@playwright/test';
import {
    CreateArticlePage,
    EditProfilePage,
    DeleteArticlePage,
    SignInPage,
    SignUpPage,
    SearchTagsPage,
    ArticlePage,
    BasePage,
    YourPage,
    ProfilePage,

} from '../pages';

export class ToDo {

    page: Page;
    createArticlePage: CreateArticlePage;
    signInPage: SignInPage;
    signUpPage: SignUpPage;
    deleteArticlePage: DeleteArticlePage;
    editProfilePage: EditProfilePage;
    searchTagsPage: SearchTagsPage;
    articlePage: ArticlePage;
    basePage: BasePage;
    yourPage: YourPage;
    profilePage: ProfilePage;



    constructor(page: Page) {
        this.page = page;
        this.createArticlePage = new CreateArticlePage(this.page);
        this.signInPage = new SignInPage(this.page);
        this.signUpPage = new SignUpPage(this.page);
        this.editProfilePage = new EditProfilePage(this.page);
        this.deleteArticlePage = new DeleteArticlePage(this.page);
        this.searchTagsPage = new SearchTagsPage(this.page);
        this.articlePage = new ArticlePage(this.page);
        this.basePage = new BasePage(this.page);
        this.yourPage = new YourPage(this.page);
        this.profilePage = new ProfilePage(this.page);

    }
}
