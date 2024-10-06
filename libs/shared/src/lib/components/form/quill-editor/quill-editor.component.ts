import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import Quill from 'quill';

@Component({
  selector: 'tmf-quill-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quill-editor.component.html',
  styles: `
    :host {
      display: block;
    }
  `
})
export class QuillEditorComponent implements OnChanges, AfterViewInit {
  @ViewChild('quillContainer') quillContainer!: ElementRef;
  @Input() diabled: boolean = false;
  @Input() label = '';
  @Input() info = '';
  @Input() isRequired: boolean = false;
  @Input() height!: string;
  @Input() defaultContent!: string;
  @Output() contentChangeEvent = new EventEmitter<string>();
  private quillEditor!: Quill;

  content: string = ''; // 初始化編輯器內容為空字串

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['defaultContent'] &&
      changes['defaultContent'].currentValue &&
      this.quillEditor
    ) {
      this.updateContent(this.defaultContent);
    }
  }

  ngAfterViewInit() {
    this.quillEditor = new Quill(this.quillContainer.nativeElement, {
      theme: 'snow' // 可以選擇不同的主題，例如 'bubble' 或 'core'
    });

    this.updateContent(this.defaultContent);

    // 監聽編輯器內容變化事件，並將變化同步到 Angular 的資料模型
    this.quillEditor.on('text-change', () => {
      this.content = this.quillEditor.root.innerHTML;
      this.contentChangeEvent.emit(this.content);
    });
  }

  updateContent(content: string) {
    this.quillEditor.clipboard.dangerouslyPasteHTML(content);
  }
}
