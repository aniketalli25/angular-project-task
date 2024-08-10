import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface UserData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  user: UserData = { email: '', password: '' };

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as { data: UserData };
    this.user = state?.data || { email: '', password: '' };
  }
}
