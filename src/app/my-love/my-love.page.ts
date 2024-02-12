import { Component, ElementRef, ViewChild } from '@angular/core';
import party from 'party-js';
import { TabsService } from '../tabs/tabs-service/tabs-service.service';

@Component({
  selector: 'app-my-love',
  templateUrl: 'my-love.page.html',
  styleUrls: ['my-love.page.scss'],
})
export class MyLovePage {
  tryMeHeight = 100;
  tryMeButtonHeight = '';

  yesHeight = 100;
  yesButtonHeight = '';

  yesClicked = false;

  currentGif = 'assets/images/hien-action.gif';
  title = 'Be my Veil and Tie';

  yesButtonTitle = 'I am intrigued!';
  noButtonTitle = 'Let me think!';
  constructor(private elementRef: ElementRef, private tabsSvc: TabsService) {
    this.yesButtonHeight = this.yesHeight + 'px';
    this.tryMeButtonHeight = this.tryMeHeight + 'px';
  }

  randomizeNo() {
    let noOptions = [
      'I wish I can',
      'Ask me later',
      'Maybe',
      'I am honored but...',
    ];
    let yesOptions = [
      'I know I am irresistible',
      'I pray for you always tho',
      'I am here once more',
      'Trust me 😉',
    ];
    let titleOptions = ['Hmmm, I respect your opinion, but let try again', 'Can\'t believe you resist this cute face', 'I can do this all day', 'Baby one more time!'];

    let index = Math.floor(Math.random() * noOptions.length);
    this.noButtonTitle = noOptions[index];
    this.yesButtonTitle = yesOptions[index];
    this.title = titleOptions[index];
  }

  showConfetti() {
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
    switch (true) {
      case (event.target as HTMLElement).classList.contains('try-me'):
        this.tryMeHeight /= 1.5;
        this.tryMeButtonHeight = this.tryMeHeight + 'px';
        this.yesHeight *= 1.5;
        this.yesButtonHeight = this.yesHeight + 'px';
        this.randomizeNo();
        return;
      case (event.target as HTMLElement).classList.contains('yes'):
        this.currentGif = 'assets/images/of-course.gif';
        this.title = 'Fantastic baby 👶';
        this.yesClicked = true;
        this.showConfetti();
        this.tabsSvc.toggleTabVisibility(true);
        return;
    }
  }
}
