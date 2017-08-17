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
    //MdDialog
  ],
  entryComponents: [
    WpDialogComponent
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
    MdDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
