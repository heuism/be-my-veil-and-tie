import { Component, ElementRef, ViewChild } from '@angular/core';
import party from "party-js";
import { TabsService } from '../tabs/tabs-service/tabs-service.service';

@Component({
  selector: 'app-my-love',
  templateUrl: 'my-love.page.html',
  styleUrls: ['my-love.page.scss']
})
export class MyLovePage {
  tryMeHeight = 100;
  tryMeButtonHeight = "";

  yesHeight = 100;
  yesButtonHeight = "";

  yesClicked = false;

  currentGif = 'assets/images/hien-action.gif';
  title = 'Be my Veil and Tie';
  constructor(private elementRef: ElementRef, private tabsSvc: TabsService) {
    this.yesButtonHeight = this.yesHeight + "px";
    this.tryMeButtonHeight = this.tryMeHeight + "px";
  }

  showConfetti(){
    party.confetti(this.elementRef.nativeElement, {
      // Specify further (optional) configuration here.
      count: party.variation.range(0, 100),
      size: party.variation.range(0.6, 1.4),
    });
    party.sparkles(this.elementRef.nativeElement, {
      // Specify further (optional) configuration here.
      count: party.variation.range(10, 60),
      speed: party.variation.range(50, 300),
    });
  }

  buttonClicked(event: Event) {
    switch(true) {
      case (event.target as HTMLElement).classList.contains('try-me'):
        this.tryMeHeight /= 1.5;
        this.tryMeButtonHeight = this.tryMeHeight + "px";
        this.yesHeight *= 1.5;
        this.yesButtonHeight = this.yesHeight + "px";
        return;
      case (event.target as HTMLElement).classList.contains('yes'):
        this.currentGif = 'assets/images/of-course.gif';
        this.title = "Fantastic baby 👶"
        this.yesClicked  = true;
        this.showConfetti();
        this.tabsSvc.toggleTabVisibility(true);
        return;
    }
  }

}
