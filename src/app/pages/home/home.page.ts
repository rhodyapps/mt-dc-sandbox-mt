import { Component, OnInit} from '@angular/core';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  title = 'MEDITECH Dictionary Composer';
  
  userInfo = null;

  constructor() { }
/*
  async googleSignup() {
    const googleUser = await Plugins.GoogleAuth.signIn(null);
    console.log('user: ', googleUser);
    this.userInfo = googleUser;
  }
*/

googleSignIn() {
  
}

  ngOnInit() {
  }

}