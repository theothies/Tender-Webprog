import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  public ngOnInit(): void {
    !firebase.apps.length ? firebase.initializeApp(environment.firebaseKeys) : firebase.app();
  }
}
