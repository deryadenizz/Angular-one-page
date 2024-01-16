export enum UserRole {
  Admin = 'admin',
  Writer = 'writer',
  User = 'user',
}
//rolles:Dizi
//Abstract
abstract class Person {
  //Field
  id: number;
  username: string;
  email: string;
  password: string;
  pictures: string;
  date: string;
  link: string;

  //Constructor
  constructor(
    id: number,
    username: string,
    email: string,
    password: string,
    pictures: string,
    date: string,
    link: string
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.pictures = pictures;
    this.date = date;
    this.link = link;
  }
  //Method(Gövdeli)
  personInfo(): void {
    console.log('Gövdeli Method');
  }
}

export class User extends Person {
  //Field

  role: string;

  //Constructor
  constructor(
    id: number,
    username: string,
    email: string,
    password: string,
    pictures: string,
    date: string,
    link: string,
    role: string
  ) {
    super(id, username, email, password, pictures, date, link);
    this.role = role;
  }
  //Method
  // rolles: Enum (admin,writer,user)

  // rolles: Dizi
}
