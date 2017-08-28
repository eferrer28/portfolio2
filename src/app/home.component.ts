import {Component} from "@angular/core";
import {MdDialog} from '@angular/material';
import {WpDialogComponent} from './wp-dialog/wp-dialog.component'
import { RecipeDialogComponent } from './recipe-dialog/recipe-dialog.component';
import { BotDialogComponent } from './bot-dialog/bot-dialog.component';
import { RecognitionDialogComponent } from './recognition-dialog/recognition-dialog.component';
import { RecipeVidComponent } from './recipe-vid/recipe-vid.component';

@Component({
    selector: 'home',
    template: `




    <!-- intro-block-->
    <div id="intro-block">
        <img src="" alt="" class="padded">
        <div>
            <div>
                <h1>Eric Ferrer</h1>
            </div>
            <div>
                <p>My name is Eric and this is my place on the web -- my portfolio, my resume, and the place where I will ramble about nonsense that hopefully others care about. Powered by Angular. You can find out more by checking out the git repo.</p>
                <br/>
                <p>Interests: Baseball, Coding, Exercising, and Traveling.</p>
            </div>
        </div>
    </div>
    <!-- end intro-block-->




<div class="flexContainer">

<md-card class="flexChild">
<img  (click)="openRecipeVid()" class="md-card-image" src="/assets/images/recipe.png" height="200" width="200">
<md-card-content>
  <p>An Ionic Recipe Application.</p>
</md-card-content>
<md-card-actions>
<button md-button (click)="openRecipe()">Details</button>

<a md-button  href="https://github.com/eferrer28/GroceryApp">Github</a>
 </md-card-actions>
</md-card>

<md-card class="flexChild">
<img (click)="twitterbot()" class="md-card-image" src="/assets/images/numbers.png" height="200" width="200">
<md-card-content>
  <p> python twitter bot.</p>
</md-card-content>
<md-card-actions>
<button md-button (click)="openBot()">Details</button>
<a md-button href="https://github.com/eferrer28/TwitterBot">Github</a>

 </md-card-actions>
</md-card>


<md-card class="flexChild">
<img (click)="employeeRec()" class="md-card-image" src="/assets/images/emprec.jpg" height="200" width="200">
<md-card-content>
  <p>An Ionic Recipe Application.</p>
</md-card-content>
<md-card-actions>
<button md-button (click)="openRecognition()">Details</button>
<a  md-button href="https://github.com/StabbyMcDuck/employee_recognition">Github</a>
 </md-card-actions>
</md-card>

<md-card class="flexChild">
<img  class="md-card-image" src="/assets/images/lakeview.jpg" height="200" width="200">
<md-card-content>
  <p>Wordpress Vacation Rental Site</p>
</md-card-content>
<md-card-actions>
<button md-button (click)="openDialog()">Details</button>

<a  md-button href="http://ajijicyellimon.com">Project</a>
 </md-card-actions>
</md-card>

<md-card class="flexChild">
<img  class="md-card-image" src="/assets/images/construction.png" height="200" width="200">
<md-card-content>
  <p>A Job Hunt Application.</p>
</md-card-content>
<md-card-actions>
<a md-button  routerLink=".">Flat button</a>
<a  md-button href="https://github.com/eferrer28/JobHunt">Github</a>
 </md-card-actions>
</md-card>

 <source src="/assets/videos/groceryApp.mp4" type="video/mp4">

</video>


</div>





    `
})
export class Home {


constructor(public dialog: MdDialog){

}
  openDialog(){
    this.dialog.open(WpDialogComponent)
  }

  openRecipe(){
    this.dialog.open(RecipeDialogComponent)
  }

  openRecipeVid(){
    this.dialog.open(RecipeVidComponent)
  }


  openBot(){
    this.dialog.open(BotDialogComponent)
  }

  openRecognition(){
    this.dialog.open(RecognitionDialogComponent)

  }

  twitterbot(){
    window.location.href = 'https://twitter.com/EricsNumberBot'

  }

  employeeRec(){
    window.location.href = 'http://rocky-ridge-55037.herokuapp.com/'

  }



}
