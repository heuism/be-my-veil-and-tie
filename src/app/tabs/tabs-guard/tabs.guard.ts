import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TabsService } from '../tabs-service/tabs-service.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class TabsGuard implements CanActivate {
  constructor(private tabsSvc: TabsService, private navCtrl: NavController) {}

  canActivate(): Observable<boolean> | boolean {
    this.tabsSvc.showTab$.subscribe((show) => {
      if(!show)
        this.navCtrl.navigateRoot(['/']);
    });
    return this.tabsSvc.showTab$;
  }
}
