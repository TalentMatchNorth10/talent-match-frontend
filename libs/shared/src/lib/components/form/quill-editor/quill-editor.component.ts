import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild
} from '@angular/core';
import Quill from 'quill';

@Component({
  selector: 'tmf-quill-editor',
  standalone: true,
  imports: [],
  templateUrl: './quill-editor.component.html',
  styles: `
    :host {
      display: block;
    }
  `
})
export class QuillEditorComponent {
  @ViewChild('quillContainer') quillContainer!: ElementRef;
  @Output() contentChangeEvent = new EventEmitter<string>();
  private quillEditor!: Quill;

  content: string = ''; // 初始化編輯器內容為空字串

  ngAfterViewInit() {
    this.quillEditor = new Quill(this.quillContainer.nativeElement, {
      theme: 'snow' // 可以選擇不同的主題，例如 'bubble' 或 'core'
    });

    // 監聽編輯器內容變化事件，並將變化同步到 Angular 的資料模型
    this.quillEditor.on('text-change', () => {
      this.content = this.quillEditor.root.innerHTML;
      this.contentChangeEvent.emit(this.content);
    });
  }
}
