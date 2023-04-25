import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuizpageComponent } from './quizpage/quizpage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { EasyquizComponent } from './easyquiz/easyquiz.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [
  {path: '', component: LandingpageComponent},
  {path: 'quizpage', component: QuizpageComponent },
  {path: 'easyquiz', component: EasyquizComponent},
  {path: 'leaderboard', component: LeaderboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
