import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


products=[{
  name: 'Laptop',description: 'New Product', price: '55000'
},
{
  name: 'Phone',description: 'Newly Launched Mobiles', price: '18500'
},
{
  name: 'Tablet',description: 'Branded Tablets', price: '65000'
},

{
  name: 'Smartwatch',description: 'Long lasting battery', price: '5500'
},
];

}
