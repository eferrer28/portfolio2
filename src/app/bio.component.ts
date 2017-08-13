import {Component} from "@angular/core";



@Component({
    selector: 'blog',
    template: `

        <div class="bioContainer">

        <h2 class="headers" style="padding-top:10px; padding-bottom:25px">About Me</h2>

        <p>Hi, my name is Eric and I am an aspiring developer currently living in Portland, Oregon. I recently complated a Post-Baccalaureate
    Computer Science program from Oregon State. Online progroam means I get to work out of the comfort of my own home here in Portland. I am doing Oregon State's relatively new Online Post-Baccalaureate Computer Science Program which is one of the only programs that exists in the country. Before enrolling in OSU I did a programming bootcamp at PDX Code Guild during 2015 which I used as a sort of introduction into the world of programming.

        </p>

        <h2 class="headers" style="padding-top:10px; padding-bottom:25px">Technology Stack</h2>

        <i class="fa fa-chevron-right" aria-hidden="true"></i>
        Languages:
        <ul>
        <li>Currently In Play: Javascript, Python</li>
        <li>Learned at OSU: C/C++, Php, Java, MASM</li>
        </ul>



        <i class="fa fa-chevron-right" aria-hidden="true"></i>
        Frameworks:
        <ul>
        <li>Front-End: Angular 2/4, Bootstrap</li>
        <li>Back-End: Node.js, Ruby on Rails, Django </li>
        <li>Mobile: Ionic 2
        </ul>

        <p>
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
        Databases: Firebase, MongoDb, Mysql, Postgres
        <p>

        </div>

    `
})
export class Bio {





}
