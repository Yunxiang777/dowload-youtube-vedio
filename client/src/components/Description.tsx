export default function Description() {
  return (
    <div className="mt-6 border-t border-gray-200 pt-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">使用說明</h2>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-start">
          <span className="flex-shrink-0 h-6 w-6 text-red-500 font-bold">
            1.
          </span>
          <span className="ml-2">複製 YouTube 影片網址</span>
        </li>
        <li className="flex items-start">
          <span className="flex-shrink-0 h-6 w-6 text-red-500 font-bold">
            2.
          </span>
          <span className="ml-2">將網址貼上到上方輸入框</span>
        </li>
        <li className="flex items-start">
          <span className="flex-shrink-0 h-6 w-6 text-red-500 font-bold">
            3.
          </span>
          <span className="ml-2">點擊下載按鈕開始下載</span>
        </li>
      </ul>
    </div>
  );
}
