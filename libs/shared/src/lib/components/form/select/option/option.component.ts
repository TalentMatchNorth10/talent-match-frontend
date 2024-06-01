import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectService } from './select.service';
import { SelectComponent } from '../select.component';

@Component({
  selector: 'tmf-option',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="break-words">
      {{ label }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [`./option.component.css`]
})
export class OptionComponent {
  @Input() label = '';
  @Input() value?: any;

  private _parentInstance?: SelectComponent;

  /**
   * 在選項被點擊時，呼叫父組件的 onSelect 方法
   * @param event
   */
  @HostListener('click', ['$event']) onSelect(event: UIEvent) {
    event.preventDefault();
    event.stopPropagation();

    this._parentInstance?.onSelect(this);
  }

  constructor(private selectService: SelectService) {
    this._parentInstance = this.selectService.getParent();
  }
}
