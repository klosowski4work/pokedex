import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Component({
  selector: 'app-poke-ball',
  templateUrl: './poke-ball.component.html',
  styleUrls: ['./poke-ball.component.scss']
})
export class PokeBallComponent {
  readonly shakeDuration = 5 * 1000;
  shake = false;

  @Input()
  chanceToBeCaught = 0.3;
  @Input()
  caught = false;
  @Input()
  failed = false;
  @Output()
  onCaught = new EventEmitter();

  @HostListener('click', ['$event'])
  clickEvent(event: MouseEvent): void {
    event.cancelBubble = true;
  }

  clicked() {
    this.shake = true;
    setTimeout(() => {
        this.shake = false;
        const success = Math.random() < this.chanceToBeCaught;
        if(success) {
          this.caught = true;
          this.failed = false;
          this.onCaught.emit();
        } else {
          this.caught = false;
          this.failed = true;
        }
      }, this.shakeDuration
    )
  }

}
