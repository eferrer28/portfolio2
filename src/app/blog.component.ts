import {Component} from "@angular/core";



@Component({
    selector: 'blog',
    template: `

    <div class="wrapper">

      <div class="content">

      <div id="content-container">

      <h1>A Brief Intro</h1>

      <h3>8/17/17</h3>

      <p>This is my first entry on my new blog page. I've always said that I would
      do a blog but I never really got into it. I figured now is a good of a time
      as any as I have the extra time. I also really wanted to practice my technical
      writing skills for any future jobs that I may come across. You never know
      when that might come in handy. For the most part these posts are going to be
      for my own benefit and they are contain snippets for things that I need
      that I tend to forget for whatever reason.</p>
   


        <p>meow mew ow</p>


        <h1 class="blogspace">Making Image Grids</h1>

        <p class="blogpspacer">In the first blog post I am going to go over how to make an image grid
        in a couple of different ways. Since I just started getting into Angular
        Material and this site uses Angular I figured I would start with Angular
        Material's grid system.</p>

        <p class="blogpspacer">Angular Material has something that called a grid list which A grid list
        is best suited to presenting homogenous data, typically images, and is
        optimized for visual comprehension and differentiating between similar data types.
        </p>

        <p class="blogpspacer"> With the following code you can get a gridlist of images like down below. </p>
        
        
                <ngx-gist [gistId]="'eferrer28/cbe9611a41feba56d7eeeb20de8d6796'"></ngx-gist>



        <md-grid-list cols="3" rowHeight="2:1">
          <md-grid-tile>
          <img  class="md-card-image" src="/assets/images/lakeview.jpg">

          </md-grid-tile>
          <md-grid-tile><img  class="md-card-image" src="/assets/images/lakeview.jpg"></md-grid-tile>

          <md-grid-tile><img  class="md-card-image" src="/assets/images/lakeview.jpg"></md-grid-tile>
          <md-grid-tile><img  class="md-card-image" src="/assets/images/lakeview.jpg"></md-grid-tile>
          <md-grid-tile>
          <img  class="md-card-image" src="/assets/images/lakeview.jpg">

          </md-grid-tile>
          <md-grid-tile><img  class="md-card-image" src="/assets/images/lakeview.jpg"></md-grid-tile>

          <md-grid-tile><img  class="md-card-image" src="/assets/images/lakeview.jpg"></md-grid-tile>
          <md-grid-tile><img  class="md-card-image" src="/assets/images/lakeview.jpg"></md-grid-tile>
          <md-grid-tile><img  class="md-card-image" src="/assets/images/lakeview.jpg"></md-grid-tile>

        </md-grid-list>


 
        

      </div>



      </div>

      <div class="sidebar">

      <md-card class="flexChild">
      <img   class="md-card-image" src="/assets/images/recipe.png" height="50" width="50">
      <md-card-content>
        <p class="blogFont">Making Image Grids</p>
      </md-card-content>

      </md-card>

      </div>

      </div>

    `
})
export class Blog {




}
