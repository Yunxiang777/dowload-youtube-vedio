## Demo

<video width="600" controls>
  <source src="./download-youtube-video.mp4" type="video/mp4">
  你的瀏覽器不支持影片播放。
</video>

## 簡介

這是一個使用 youtube 網址，下載相對應影片功能網站。

## 技術

此專案使用 Vite 建立，並搭配 React 和 TypeScript，配置了熱更新（HMR）以及 ESLint 規則。

目前，專案中包含了兩個官方插件：

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)：使用 [Babel](https://babeljs.io/) 進行快速刷新
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)：使用 [SWC](https://swc.rs/) 進行快速刷新

## 使用

### Client 端

```bash
npm run dev
```

### Server 端

```bash
node server.js
```

## 依賴包

- **react** - 用於建立 UI 元件
- **react-dom** - 用於 DOM 操作
- **typescript** - 用於靜態類型檢查
- **vite** - 高效的開發工具，支援熱更新和快速打包
- **@vitejs/plugin-react** - 用於支援 React 的 Vite 插件
- **@vitejs/plugin-react-swc** - 使用 SWC 進行快速刷新，替代 Babel
- **eslint** - 用於代碼檢查
- **eslint-plugin-react** - 用於 React 特有的 ESLint 規則
- **uuid** - 用於生成唯一的 ID
- **react-toastify** - 用於顯示通知提示訊息
