import { Component } from '@angular/core';
import { Http, Response, RequestMethod, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'ELF Order Web Service';

  result;
  errorFromSubscribe;
  errorFromCatch;
  displayItems;
  literatureID;
  Literature_Privacy_Policy_Flag;
  Literature_Avaliable_Delivery_Methods;

  constructor(private http: Http) { }

  onClick() {

    this.http.get('https://api.myjson.com/bins/15qv54')
      .subscribe((res: Response) => {
        this.result = res.json();
        this.literatureID = this.result['Literature_ID'];
        this.Literature_Privacy_Policy_Flag= this.result['Literature_Privacy_Policy_Brochure_Flag'];
        this.Literature_Avaliable_Delivery_Methods = this.result['Literature_Avaliable_Delivery_Methods'];
      }, error => {
        console.log(error);
        this.errorFromSubscribe = error;
      });
  }
}
