import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //AppComponent contiendra l'array des posts
  tabPosts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non dui id urna iaculis rutrum ut sit amet mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      loveIts: '1',
      created_at: '2019-10-04 10:14:41'
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non dui id urna iaculis rutrum ut sit amet mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      loveIts: '-1',
      created_at: '2019-10-04 10:14:41'
    },
    {
      title: 'Mon troisième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non dui id urna iaculis rutrum ut sit amet mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      loveIts: '0',
      created_at: '2019-10-04 10:14:41'

    }
  ];
}
