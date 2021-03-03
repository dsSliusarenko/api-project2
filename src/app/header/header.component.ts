import { Component, OnInit } from '@angular/core';
import {AuthService} from '../autorization-section/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuth = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signOut(): void {
    this.authService.signOut();
  }
}
