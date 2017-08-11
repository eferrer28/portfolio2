import {Component} from "@angular/core";



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
<img md-card-lg-image src="/assets/images/recipe.png">



</md-card>

<md-card class="flexChild">
<md-card-header>
   <div md-card-avatar class="example-header-image"></div>
   <md-card-title>Shiba Inu</md-card-title>
   <md-card-subtitle>Dog Breed</md-card-subtitle>
 </md-card-header>
<img md-card-lg-image src="/assets/images/numbers.png">

  <md-card-content>
    <p>This is supporting text.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </md-card-content>


</md-card>

<md-card class="flexChild">
<img md-card-lg-image src="/assets/images/numbers.png">

  <md-card-content>
    <p>This is supporting text.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </md-card-content>


</md-card>

</div>

<md-grid-list cols="2" rowHeight="2:1">
  <md-grid-tile>1</md-grid-tile>
  <md-grid-tile>2</md-grid-tile>
  <md-grid-tile>3</md-grid-tile>
  <md-grid-tile>4</md-grid-tile>
</md-grid-list>


<div class="projectsFlex">

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




}
