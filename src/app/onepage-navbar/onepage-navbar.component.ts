import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User, UserRole } from './User';

@Component({
  selector: 'app-onepage-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './onepage-navbar.component.html',
  styleUrl: './onepage-navbar.component.css',
})
export class OnepageNavbarComponent {
  homePage: String = 'Anasayfa 44';
  username: String = 'Derya Deniz';
  User: User[] = [
    {
      id: 1,
      username: 'Derya Deniz',
      email: 'deryanaral@gmail.com',
      password: '987654',
      pictures: '',
      date: String(new Date().getFullYear()),
      link: 'https://admin1',
      role: UserRole.Admin,
    },
    {
      id: 2,
      username: 'writer1',
      email: 'writer@gmail.com',
      password: '987654',
      pictures: '',
      date: String(new Date().getFullYear()),
      link: 'https://writer1',
      role: UserRole.Writer,
    },
    {
      id: 3,
      username: 'user1',
      email: 'user@gmail.com',
      password: '987654',
      pictures: '',
      date: String(new Date().getFullYear()),
      link: 'https://user1',
      role: UserRole.User,
    },
  ];

  // navBar adında bir obje oluşturunuz.
  // Logo(string), link(string), search, attribute oluşturuyorsunuz.
  // Link (dizi)
  // navBar:{}={};
  navBar: {
    isLogin: boolean;
    // logo: string, (fontAwesome,picture,link,title)
    logo: {
      logoName: string;
      logoFontAwesome: string;
      logoPicture: string;
      logoLink: string;
      logoTitle: string;
    };
    navbar: Array<any>;
    search: { name: string; placeholder: string; type: string; style: string };
  } = {
    isLogin: true,
    logo: {
      logoName: 'Logo',
      logoFontAwesome: 'fa-solid fa-code-branch',
      logoPicture:
        'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
      logoLink: '/',
      logoTitle: 'Title',
    },
    //Anasayfa,AboutMe,Blog,Contact  name: Anasayfa, link: http://, fontAwesome
    navbar: [
      {
        id: 1,
        name: 'Anasayfa',
        link: '/',
        fontAwesome: 'fa-solid fa-house-chimney',
      },
      { id: 2, name: 'AboutMe', link: '/about-me', fontAwesome: 'font-2' },
      { id: 3, name: 'Blog', link: '/blog', fontAwesome: 'font-3' },
      { id: 4, name: 'Contact', link: '/contact', fontAwesome: 'font-4' },
    ],
    search: {
      name: 'Search',
      placeholder: 'Arama için ...',
      type: 'text',
      style: 'btn btn-primary',
    },
  }; //navBar Object
}
