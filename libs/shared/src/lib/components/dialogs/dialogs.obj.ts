import { IAlert, IConfirm } from './dialog.interface';

export class TmfAlertConfig {
  /** icon */
  icon?: string;
  /** 標題 */
  title: string;
  /** 內容 */
  content: string;
  constructor(config?: IAlert) {
    this.icon = config?.icon || 'error';
    this.title = config?.title || '提醒';
    this.content = config?.content || '發生錯誤';
  }
}

export class TmfConfirmConfig {
  /** icon */
  icon?: string;
  /** 標題 */
  title: string;
  /** 內容 */
  content: string;
  /** 是否顯示取消按鈕 */
  showCancel?: boolean;
  /** 確認按鈕文字 */
  confirmBtnText?: string;
  /** 按鈕類別 */
  btnType?: 'primary' | 'danger';
  constructor(config?: IConfirm) {
    this.icon = config?.icon || '';
    this.title = config?.title || '確認';
    this.content = config?.content || '確認執行此操作';
    this.showCancel = config?.showCancel || true;
    this.confirmBtnText = config?.confirmBtnText || '確認';
    this.btnType = config?.btnType || 'primary';
  }
}
