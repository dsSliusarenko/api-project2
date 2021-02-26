import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {AuthInterface} from '../autorization-section/auth.interface';
import {AuthService} from '../autorization-section/auth.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: any;

  isUserLoggedIn$: Subject<AuthInterface>;

  isloading = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isUserLoggedIn$ = this.authService.currentUserSubject;
  }

}
