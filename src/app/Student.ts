export interface Student {
  firstName: string;
  middleName: string;
  lastName: string;
  account: Account;
}

interface Account {
  email: string;
  password: string;
  confirmPassword: string;
}
