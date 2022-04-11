import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-stat-bar',
  templateUrl: './stat-bar.component.html',
  styleUrls: ['./stat-bar.component.scss']
})
export class StatBarComponent {
  @Input()
  name = '';
  @Input()
  value = 0;
  @Input()
  color = 'red';
  valueOutrange = 0;

  ngOnInit(){
    if(this.value > 100){
      this.valueOutrange = this.value - 100;
      this.value = 100;
    }
  }
}
