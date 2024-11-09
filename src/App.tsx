import React, { useState } from 'react';
import UrlInput from './components/UrlInput';
import DownloadButton from './components/DownloadButton';

function App() {
  const [url, setUrl] = useState('');

  const handleDownload = () => {
    console.log('模擬下載:', url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            YouTube 影片下載器
          </h1>
          <p className="text-lg text-gray-600">
            輸入 YouTube 影片網址，即可下載影片
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="space-y-6">
            <UrlInput url={url} setUrl={setUrl} />
            
            <div className="flex justify-center">
              <DownloadButton 
                onDownload={handleDownload}
                disabled={!url.trim().includes('youtube.com')}
              />
            </div>

            <div className="mt-6 border-t border-gray-200 pt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">使用說明</h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-red-500 font-bold">1.</span>
                  <span className="ml-2">複製 YouTube 影片網址</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-red-500 font-bold">2.</span>
                  <span className="ml-2">將網址貼上到上方輸入框</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-red-500 font-bold">3.</span>
                  <span className="ml-2">點擊下載按鈕開始下載</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          ⚠️ 此介面僅供學習用途，請遵守 YouTube 服務條款
        </div>
      </div>
    </div>
  );
}

export default App;