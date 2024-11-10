import { Download } from 'lucide-react';

interface DownloadButtonProps {
  onDownload: () => void;
  disabled: boolean;
}

export default function DownloadButton({ onDownload, disabled }: DownloadButtonProps) {
  return (
    <button
      onClick={onDownload}
      disabled={disabled}
      className={`flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all duration-200 ${
        disabled
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-red-600 hover:bg-red-700 active:transform active:scale-95'
      }`}
    >
      <Download className="w-5 h-5 mr-2" />
      下載影片
    </button>
  );
}