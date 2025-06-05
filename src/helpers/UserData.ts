import { faker } from '@faker-js/faker';

export class UserData {

    image: string;
    username: string;
    password: string;
    email: string;
    bio: string;

    constructor() {

        this.image = '';
        this.username = faker.internet.userName();
        this.password = faker.internet.password();
        this.email = faker.internet.email();
        this.bio = faker.lorem.words({max: 5, min:3});
    }
}
