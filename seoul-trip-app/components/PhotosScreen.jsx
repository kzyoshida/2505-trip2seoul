import React from 'react';
import { Camera } from 'lucide-react';

const PhotosScreen = () => {
  return (
    <div className="space-y-6 pb-20">
      <h2 className="text-2xl font-bold mb-6">旅の思い出</h2>
      
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500 font-medium">まだ写真がありません</p>
        <p className="text-sm text-gray-400 mt-2">旅行中の素敵な瞬間を撮影して、ここに保存しましょう</p>
      </div>
    </div>
  );
};

export default PhotosScreen;
