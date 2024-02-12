import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonButton } from '@ionic/angular';
import { IonButtonCustomEvent } from '@ionic/core';

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
  constructor() {
    this.yesButtonHeight = this.yesHeight + "px";
    this.tryMeButtonHeight = this.tryMeHeight + "px";
  }

  buttonClicked(event: Event) {
    switch(true) {
      case (event.target as HTMLElement).classList.contains('try-me'):
        console.log(this.tryMeButtonHeight);
        this.tryMeHeight /= 1.5;
        this.tryMeButtonHeight = this.tryMeHeight + "px";
        this.yesHeight *= 1.5;
        this.yesButtonHeight = this.yesHeight + "px";
        return
    }
  }

}
