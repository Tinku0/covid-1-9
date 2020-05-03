import { Component } from '@angular/core';
import { FormGroup, FormControlName, FormControl, Validators } from '@angular/forms';
import { CovidserviceService } from './covidservice.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

constructor(private covid:CovidserviceService){}

  name = 'Angular';
  Stats:any;
  ngOnInit(){
    this.covid.getIndiaStats()
    .subscribe(
      data=>
      {
        this.Stats=data;
        console.log(data);
      }
    );
  }

 

}
