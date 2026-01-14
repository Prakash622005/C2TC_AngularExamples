import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  imports: [CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Project-2';

  // Interpolation
  public name:String = 'St Joseph College';

  //Property Binding
  public imgUrl:String = 'Flower.jpg';

  //Event Binding
  public message:String = '';

  //Two way Binding
  public location:String = 'Kancheepuram';

  public invisible:boolean = false;

  public course:String[] = ['Angular', 'React', 'Vue', 'NodeJS'];


  onClick():void{
    this.message = 'Welcome to Learn Angular';  }


    toggleButton():void
    {
      this.invisible = !this.invisible
    }


}
