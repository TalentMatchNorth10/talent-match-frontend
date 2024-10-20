# 才藝連連 Talent Match
## [前往網站](https://talent-match-frontend.onrender.com)
![alt text](./assets/images/readme_main.png)
## 專案說明
才藝連連 Talent Match 是一個創新的線上平台，靈感來源於 amazingTalker。相較於 amazingTalker 主要聚焦於語言教學，才藝連連則拓展了教學範疇，不僅限於語言，更包括各式各樣的才藝。此平台旨在為教師提供一個自由展現並教授多樣才藝的場所，無論是音樂、藝術、編程還是健身等，教師都可以根據自己的專長設計課程。學生則能夠依據自己的興趣輕鬆地在此平台上尋找並學習感興趣的才藝課程。透過靈活的教學模式和多元化的課程選擇，才藝連連致力於創造一個促進學習與成長的互動環境。

## 專案架構
### 資料夾說明
* libs
  * openapi - angular http service
  * shared - 共用元件
* src
  * pages - 頁面組件
    * layout - 頁面共用組件
  * shared - 專案共用服務
  * guards - angular router guard
* assets
  * images - 專案圖片
* scss 
  * base - 基本樣式設定
  * overrides - 樣式客製化覆蓋
### 專案技術
* Node.js v18.0.0
* Angular v17.3.0
* Angular Cdk v17.3.10
* Fullcalendar v6.1.11
* Tailwindcss v3.4.3
* Openapi Generator v2.13.4
* Eslint v8.57.0
### 安裝與啟動
下載 talent-match-frontend 以及 talent-match-backend 專案至本地
```bash
git clone <remote-url>
```
安裝套件
```bash
npm install 
```
產生 angular api service
```bash
npm run openapi:client
```
開啟前後端專案並執行指令

前端
```
npm start
```
後端
```
npm run start:dev
```
# CI/CD 工作流詳細說明

本專案使用 GitHub Actions 進行 CI/CD (持續整合與持續部署)，本文檔詳細介紹三個主要的工作流及其用途與運行步驟：

- `common-setup.yml`: 通用設置工作流，提供 Node.js 環境配置與相依套件安裝。
- `develop-pr.yml`: 用於處理針對 `develop` 分支的 Pull Request 的驗證工作流。
- `develop-deploy.yml`: 當有變更推送至 `develop` 分支時自動部署。

## 目錄
1. [Common Setup (`common-setup.yml`)](#1-common-setup-common-setupyml)
2. [開發分支 PR 工作流 (`develop-pr.yml`)](#2-開發分支-pr-工作流-develop-pryml)
3. [開發分支自動部署工作流 (`develop-deploy.yml`)](#3-開發分支自動部署工作流-develop-deployyml)

## 1. Common Setup (`common-setup.yml`)

`common-setup.yml` 是專案中所有 CI/CD 工作流的基礎環境設置。透過 `workflow_call` 可以將其引入其他工作流，確保一致的 Node.js 環境與相依套件的快取處理。

### 觸發條件
- 此工作流僅通過 `workflow_call` 被其他工作流調用，無法獨立運行。

### 工作流程詳解

#### 1. Checkout 程式碼
- **步驟名稱**: `Checkout code`
- **使用的 action**: `actions/checkout@v3`
- **作用**: 此步驟會將 GitHub 儲存庫中的最新程式碼拉取至 runner，確保工作流使用的是當前儲存庫的最新狀態。

#### 2. 設置 Node.js 環境
- **步驟名稱**: `Setup Node.js`
- **使用的 action**: `actions/setup-node@v3`
- **配置**:
  - `node-version`: `'18'` (指定 Node.js 版本為 18)
- **作用**: 此步驟會在 GitHub runner 上安裝 Node.js 18 版本，作為後續步驟的運行環境。

#### 3. 快取 Node 模組
- **步驟名稱**: `Cache Node modules`
- **使用的 action**: `actions/cache@v3`
- **配置**:
  - `path`: `~/.npm` (指定要快取的目錄，即 npm 的模組安裝目錄)
  - `key`: 使用 `${{ runner.os }}-node-${{ hashFiles('package-lock.json') }}` 來生成快取鍵，根據 OS 與 `package-lock.json` 的變化來動態生成不同的快取鍵。
  - `restore-keys`: 配置還原鍵，當快取不存在時可嘗試還原相似的快取。
- **作用**: 此步驟快取 `node_modules`，避免每次工作流運行時重新安裝相依套件，從而節省安裝時間。

#### 4. 安裝相依套件
- **步驟名稱**: `Install dependencies`
- **執行指令**: `npm ci`
- **作用**: 使用 `npm ci` 安裝專案中的相依套件，這是一個更加高效且嚴格的方式，適合在 CI/CD 環境中使用。

---

## 2. 開發分支 PR 工作流 (`develop-pr.yml`)

此工作流在開發者開啟或更新針對 `develop` 分支的 Pull Request 時自動觸發。它會執行一系列步驟來檢查程式碼品質並進行專案的建置。

### 觸發條件
- **觸發事件**: `pull_request`
- **觸發分支**: 針對 `develop` 分支的 Pull Request

### 工作流程詳解

#### 1. 使用 Common Setup
- **步驟名稱**: `Common Setup`
- **使用**: `uses: ./.github/workflows/common-setup.yml`
- **作用**: 調用 `common-setup.yml`，設置 Node.js 環境並安裝相依套件，統一工作環境。

#### 2. Checkout 程式碼
- **步驟名稱**: `Checkout code`
- **使用的 action**: `actions/checkout@v3`
- **作用**: 拉取最新的程式碼，確保後續步驟基於最新程式碼執行。

#### 3. 恢復 Node 模組快取
- **步驟名稱**: `Restore Node modules cache`
- **使用的 action**: `actions/cache@v3`
- **作用**: 恢復 `node_modules` 快取，節省安裝時間。

#### 4. 安裝相依套件
- **步驟名稱**: `Install dependencies`
- **執行指令**: `npm ci`
- **作用**: 安裝專案相依套件。

#### 5. 執行 Lint 檢查
- **步驟名稱**: `Run ESLint`
- **執行指令**: `npm run eslint`
- **作用**: 檢查程式碼是否符合專案的 Lint 規範，確保程式碼品質。

#### 6. 生成 OpenAPI Client
- **步驟名稱**: `Generate OpenAPI client`
- **執行指令**: `npm run openapi:client`
- **作用**: 生成 OpenAPI 客戶端，並將其上傳為 artifact。

#### 7. 上傳 OpenAPI Client
- **步驟名稱**: `Upload OpenAPI client`
- **使用的 action**: `actions/upload-artifact@v3`
- **作用**: 將生成的 OpenAPI 客戶端上傳到 artifact，供後續步驟或其他工作流使用。

#### 8. 建置專案
- **步驟名稱**: `Build project`
- **執行指令**: `npm run build`
- **作用**: 對專案進行建置，確保可以正確編譯。

---

## 3. 開發分支自動部署工作流 (`develop-deploy.yml`)

此工作流在 `develop` 分支有新代碼推送時自動觸發，並執行一系列步驟來驗證和部署程式碼。

### 觸發條件
- **觸發事件**: `push`
- **觸發分支**: `develop`

### 工作流程詳解

#### 1. 使用 Common Setup
- **步驟名稱**: `Common Setup`
- **使用**: `uses: ./.github/workflows/common-setup.yml`
- **作用**: 調用 `common-setup.yml`，設置 Node.js 環境並安裝相依套件。

#### 2. Checkout 程式碼
- **步驟名稱**: `Checkout code`
- **使用的 action**: `actions/checkout@v3`
- **作用**: 拉取最新的程式碼。

#### 3. 恢復 Node 模組快取
- **步驟名稱**: `Restore Node modules cache`
- **使用的 action**: `actions/cache@v3`
- **作用**: 恢復 `node_modules` 快取，節省安裝時間。

#### 4. 安裝相依套件
- **步驟名稱**: `Install dependencies`
- **執行指令**: `npm ci`
- **作用**: 安裝專案相依套件。

#### 5. 執行 Lint 檢查
- **步驟名稱**: `Run ESLint`
- **執行指令**: `npm run eslint`
- **作用**: 檢查程式碼是否符合專案的 Lint 規範，確保程式碼品質。

#### 6. 生成 OpenAPI Client
- **步驟名稱**: `Generate OpenAPI client`
- **執行指令**: `npm run openapi:client`
- **作用**: 生成 OpenAPI 客戶端，並將其上傳為 artifact。

#### 7. 上傳 OpenAPI Client
- **步驟名稱**: `Upload OpenAPI client`
- **使用的 action**: `actions/upload-artifact@v3`
- **作用**: 將生成的 OpenAPI 客戶端上傳到 artifact，供後續步驟或其他工作流使用。

#### 8. 建置專案
- **步驟名稱**: `Build project`
- **執行指令**: `npm run build`
- **作用**: 對專案進行建置。

#### 9. 部署專案
- **步驟名稱**: `Deploy`
- **作用**: 將建置完成的專案部署至指定的環境中。具體的部署步驟依專案配置而定，需根據實際需求填充。

---

### 總結

透過這三個工作流，我們實現了以下幾點：
- **統一環境設置**: 透過 `common-setup.yml`，確保所有工作流使用相同的 Node.js 環境和相依套件。
- **自動化驗證**: 當開發者提交 PR 或推送代碼至 `develop` 分支時，自動執行 Lint 檢查與建置，確保代碼品質。
- **自動化部署**: 在 `develop` 分支有變更時，自動執行部署，減少手動操作的風險。


## 聯絡開發人員
* Thomas [Github連結](https://github.com/th1230)
* Olive [Github連結](https://github.com/emmablur)
* 刺蝟 [Github連結](https://github.com/hedgehog-chien)
* Shiba0926 [Github連結](https://github.com/justine92415)
