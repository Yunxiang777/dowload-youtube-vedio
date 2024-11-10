import  { useState } from 'react';
import UrlInput from './components/UrlInput';
import DownloadButton from './components/DownloadButton';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [url, setUrl] = useState('');

  const handleDownload = async () => {
    try {
      const response = await fetch('http://localhost:5000/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });
      
      if (!response.ok) {
        toast.error("下載失敗，請稍後再試");
        return;
      }

      // 下載成功，處理下載
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${uuidv4()}.mp4`;
      link.click();
    } catch (error) {
      toast.error("下載失敗，請稍後再試");
    }
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
            {/* 影片輸入 */}
            <UrlInput url={url} setUrl={setUrl} />

            {/* Toast 容器 */}
            <ToastContainer position="top-center" autoClose={3000} />
            
            <div className="flex justify-center">
              {/* 影片下載 */}
              <DownloadButton 
                onDownload={handleDownload}
                disabled={!url.trim().includes('youtube.com')}
              />
            </div>

            {/* 使用說明 */}
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