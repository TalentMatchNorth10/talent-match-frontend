export interface IBaseDialog {
  /** icon */
  icon?: string;
  /** 標題 */
  title: string;
  /** 內容 */
  content: string;
}

export interface IAlert extends IBaseDialog {}

export interface IConfirm extends IBaseDialog {
  /** 顯示取消按鈕 */
  showCancel?: boolean;
  /** 確認按鈕文字 */
  confirmBtnText?: string;
  btnType?: 'primary' | 'danger';
}
