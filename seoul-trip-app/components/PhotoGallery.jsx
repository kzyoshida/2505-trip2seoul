import React from "react";

// サンプルデータ（本番では外部ファイルや状態管理に切り出し可）
const samplePhotos = [
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "南山タワー",
    description: "ソウルの夜景を一望できるスポット。"
  },
  {
    url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    title: "明洞ストリート",
    description: "賑やかなショッピングエリア。"
  }
];

const PhotoGallery = ({ photos = samplePhotos }) => {
  return (
    <div className="py-6 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {photos.map((photo, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
          <a href={photo.url} target="_blank" rel="noopener noreferrer">
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-48 object-cover hover:opacity-80 transition"
            />
          </a>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-1">{photo.title}</h3>
            <p className="text-gray-600 text-sm">{photo.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
