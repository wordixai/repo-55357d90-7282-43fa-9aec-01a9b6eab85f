import { CheckCircle, Heart, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'wishlist';
  isVisible: boolean;
  onClose: () => void;
}

const Toast = ({ message, type = 'success', isVisible, onClose }: ToastProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const getIcon = () => {
    switch (type) {
      case 'wishlist':
        return <Heart className="h-5 w-5 text-white fill-current" />;
      default:
        return <CheckCircle className="h-5 w-5 text-white" />;
    }
  };

  const getColors = () => {
    switch (type) {
      case 'wishlist':
        return 'from-red-400 to-pink-400';
      default:
        return 'from-green-400 to-blue-400';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2">
      <div className="pop-frame bg-white p-4 min-w-[300px] border-2 border-black">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 bg-gradient-to-r ${getColors()} rounded-full flex items-center justify-center`}>
            {getIcon()}
          </div>
          <span className="handwritten text-lg text-black flex-1">
            {message}
          </span>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-black transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;