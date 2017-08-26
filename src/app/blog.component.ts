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
      <p></p>
      <p></p>


        <p>meow mew ow</p>


        <h1 class="blogspace">Making Image Grids</h1>


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


        <p> As you can see blash blah blah </p>

      </div>


      dsgsd





      </div>

      <div class="sidebar">
      </div>

      </div>



        <!--
        <md-grid-list cols="4" rowHeight="100px">
          <md-grid-tile
              *ngFor="let tile of tiles"
              [colspan]="tile.cols"
              [rowspan]="tile.rows"
              [style.background]="tile.color">
            {{tile.text}}
          </md-grid-tile>
        </md-grid-list>
          -->
    `
})
export class Blog {

  tiles = [
    {text: 'One', cols: 3,rows: 5, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 6, color: 'lightgreen'},

  ];


}
