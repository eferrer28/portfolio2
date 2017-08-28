import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdDialogModule, MdGridListModule, MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {Home} from "./home.component";
import { PageNotFound} from "./page-not-found-component";
import { Projects} from "./projects.component";
import { Blog } from "./blog.component";
import { Bio } from "./bio.component";
import { WpDialogComponent } from './wp-dialog/wp-dialog.component';
import { RecipeDialogComponent } from './recipe-dialog/recipe-dialog.component';
import { BotDialogComponent } from './bot-dialog/bot-dialog.component';
import { RecognitionDialogComponent } from './recognition-dialog/recognition-dialog.component';
import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';
import { RecipeVidComponent } from './recipe-vid/recipe-vid.component';


const appRoutes: Routes = [
  { path: 'home', component: Home },
  { path: '', component: Home},
  { path: 'projects', component: Projects },
  { path: 'blog', component: Blog },
  { path: 'bio', component: Bio },

    { path: '**', component: PageNotFound }

];

@NgModule({
  declarations: [
    AppComponent,
    Home,
    PageNotFound,
    Projects,
    Blog,
    Bio,
    WpDialogComponent,
    RecipeDialogComponent,
    BotDialogComponent,
    RecognitionDialogComponent,
    RecipeVidComponent,

    //MdDialog
  ],
  entryComponents: [
    WpDialogComponent,
    BotDialogComponent,
    RecipeDialogComponent,
    RecognitionDialogComponent,
    RecipeVidComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdGridListModule,
    MdDialogModule,
    NgxGistModule
  ],
  providers: [
],
  bootstrap: [AppComponent]
})
export class AppModule { }
