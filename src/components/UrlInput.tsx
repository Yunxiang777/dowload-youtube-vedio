import React from 'react';
import { Youtube } from 'lucide-react';

interface UrlInputProps {
  url: string;
  setUrl: (url: string) => void;
}

export default function UrlInput({ url, setUrl }: UrlInputProps) {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Youtube className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="請輸入 YouTube 影片網址..."
        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white shadow-sm text-gray-900 placeholder-gray-400"
      />
    </div>
  );
}