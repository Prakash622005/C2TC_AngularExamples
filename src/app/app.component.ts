import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Angular Basics App';
  count = 0;
  items = ['Angular', 'TypeScript', 'Components', 'Services'];
  showList = true;
  name = '';
  serviceMessage = '';

  constructor(private messageService: MessageService) {}

  increment(): void {
    this.count++;
  }

  ngOnInit(): void {
    this.serviceMessage = this.messageService.getMessage();
  }
}
