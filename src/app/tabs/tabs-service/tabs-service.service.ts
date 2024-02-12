// tab-communication.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  private showTabSource = new BehaviorSubject<boolean>(false);
  showTab$ = this.showTabSource.asObservable();

  toggleTabVisibility(show: boolean) {
    this.showTabSource.next(show);
  }
}
