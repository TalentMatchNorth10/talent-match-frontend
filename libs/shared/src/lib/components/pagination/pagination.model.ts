export interface PaginationConfig {
  /** 總筆數 */
  totalItems: number;
  /** 每頁筆數 */
  itemsPerPage: number;
  /** 目前頁碼 */
  currentPage?: number;
  /** 最多顯示頁碼數 */
  maxPageDisplay?: number;
  /** 是否顯示跳轉至第一頁按鈕 */
  showFirstButton?: boolean;
  /** 是否顯示跳轉至最後一頁按鈕 */
  showLastButton?: boolean;
  /** 是否顯示跳轉至前一頁按鈕 */
  showPrevButton?: boolean;
  /** 是否顯示跳轉至下一頁按鈕 */
  showNextButton?: boolean;
}
