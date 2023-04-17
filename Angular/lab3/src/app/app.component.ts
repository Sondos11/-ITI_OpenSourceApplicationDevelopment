import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lab3';

  StdData: any;
  Stds: {}[] = [];
  getData(data: any) {
    this.StdData = { name: data.name, age: data.age };
    if (
      20 < this.StdData.age &&
      this.StdData.age < 40 &&
      this.StdData.name.length >= 3
    )
      this.Stds.push(this.StdData);
  }
}
