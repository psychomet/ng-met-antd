import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from '@ng-met-antd/extensions/date-picker';

@Component({
  standalone: true,
  imports: [FormsModule, NzDatePickerModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  date = new Date();

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
