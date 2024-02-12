import { Component } from '@angular/core';
import { TabsService } from './tabs-service/tabs-service.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {

  didSheSayYes$ = this.tabsSvc.showTab$;
  constructor(private tabsSvc: TabsService) {}

}
