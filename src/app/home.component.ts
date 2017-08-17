import {Component} from "@angular/core";
import {MdDialog} from '@angular/material';
import {WpDialogComponent} from './wp-dialog/wp-dialog.component'


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
<img  class="md-card-image" src="/assets/images/recipe.png" height="200" width="200">
<md-card-content>
  <p>An Ionic Recipe Application.</p>
</md-card-content>
<md-card-actions>
<a md-button  routerLink=".">Flat button</a>

<a md-button  href="https://github.com/eferrer28/GroceryApp">Github</a>
 </md-card-actions>
</md-card>

<md-card class="flexChild">
<img  class="md-card-image" src="/assets/images/numbers.png" height="200" width="200">
<md-card-content>
  <p> python twitter bot.</p>
</md-card-content>
<md-card-actions>

<a md-button href="https://twitter.com/EricsNumberBot">Project</a>
<a md-button href="https://github.com/eferrer28/TwitterBot">Github</a>

 </md-card-actions>
</md-card>


<md-card class="flexChild">
<img  class="md-card-image" src="/assets/images/emprec.jpg" height="200" width="200">
<md-card-content>
  <p>An Ionic Recipe Application.</p>
</md-card-content>
<md-card-actions>
<a  md-button href="http://rocky-ridge-55037.herokuapp.com/">Project</a>
<a  md-button href="https://github.com/StabbyMcDuck/employee_recognition">Github</a>
 </md-card-actions>
</md-card>

<md-card class="flexChild">
<img  class="md-card-image" src="/assets/images/lakeview.jpg" height="200" width="200">
<md-card-content>
  <p>Wordpress Vacation Rental Site</p>
</md-card-content>
<md-card-actions>
<button md-button (click)="openDialog()">Open dialog</button>

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
<a  md-button href="http://github.com/eferrer28">Github</a>
 </md-card-actions>
</md-card>
</div>




<div class="projectsFlex">

<div class="project">
<div id="recipes" class="flexImage"></div>
<div class="title">An Ionic Recipe Application</div>
</div>

<div class="project">
<div id="twitterBot" class="flexImage"></div>
<div class="title">A Python Twitter Bot</div>
</div>

<div class="project">
<div id="eRec" class="flexImage"></div>
<div class="title">Employee Recognition Application: OSU Capstone Project </div>
</div>


<div class="project">
<div id="recipes" class="flexImage"></div>
<div class="title">ne</div>
</div>

<div class="project">
<div id="twitterBot" class="flexImage"></div>
<div class="title">heh heh heh</div>
</div>

<div class="project">
<div id="eRec" class="flexImage"></div>
<div class="title">Heh heh heh </div>
</div>


</div>
    `
})
export class Home {


constructor(public dialog: MdDialog){

}
  openDialog(){
    this.dialog.open(WpDialogComponent)
  }




}
