import { FetchapiService } from './fetchapi.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'ApiApp';

  category=''
  name=''
  foundData: any = false;

  private apiData: any = []

  constructor(private api: FetchapiService){}


  search(){

    this.api.search(this.category).subscribe((res:any)=>{
    console.log(res)
    this.apiData = res.results
    // console.log(this.apiData);

    this.apiData.find((vehicle:any)=>{

      if(vehicle.name === this.name)
        this.foundData = vehicle

    })

    })
  }

}
