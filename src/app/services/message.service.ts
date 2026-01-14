import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  getMessage(): string {
    return 'This message is from Angular Service';
  }
}
