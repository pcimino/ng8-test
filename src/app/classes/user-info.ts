export class UserInfo {
  firstName?: string;
  lastName?: string;
  email?: string;
  userId: string;

  constructor(firstName: string,
    lastName: string,
    email: string,
    userId: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userId = userId;
    }
}
