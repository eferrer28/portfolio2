import {Component} from "@angular/core";



@Component({
    selector: 'blog',
    template: `

    <div class="wrapper">

      <div class="content">

      <div id="content-container">

      <h1>Making Image Grids</h1>

        <p>meow mew ow</p>

      </div>

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
