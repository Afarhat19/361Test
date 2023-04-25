import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {
  constructor(private router: Router){}
  title = '361_Farhatam_QuizApp';
  username = '';
  

  public saveusernameandgotonextpage(){
    console.log(this.username);
    this.router.navigate(['quizpage']);
  }
}
