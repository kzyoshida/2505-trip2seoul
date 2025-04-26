import React from 'react';
import { ExternalLink } from 'lucide-react';
import { usefulLinks } from '../data/usefulLinks.jsx';

const LinksScreen = () => {
  return (
    <div className="space-y-6 pb-20">
      <h2 className="text-2xl font-bold mb-6">便利なリンク集</h2>
      
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="space-y-3">
          {usefulLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center space-x-3">
                <div className="text-blue-500">
                  {link.icon}
                </div>
                <span className="font-medium text-gray-700">{link.name}</span>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinksScreen;
