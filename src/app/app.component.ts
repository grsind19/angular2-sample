import { Component } from '@angular/core';

export class Student{
	name:String;
	age:Number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name='helloworls session';
  email="low";
  s1:Student={
  	name:"seetha",
  	age:10
  }
 clickdata(){
 	alert(2);
 }
}
