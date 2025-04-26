import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { scheduleData } from '../data/scheduleData.jsx';

const ScheduleScreen = ({ activeDay, setActiveDay }) => {
  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">旅程表</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveDay(Math.max(1, activeDay - 1))}
            className={`p-2 rounded-lg ${activeDay === 1 ? 'opacity-50' : 'hover:bg-gray-100'}`}
            disabled={activeDay === 1}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveDay(Math.min(4, activeDay + 1))}
            className={`p-2 rounded-lg ${activeDay === 4 ? 'opacity-50' : 'hover:bg-gray-100'}`}
            disabled={activeDay === 4}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-6">
        {scheduleData.map((day, idx) => (
          <button
            key={idx}
            onClick={() => setActiveDay(idx + 1)}
            className={`p-3 rounded-xl text-center transition-all duration-300 ${
              activeDay === idx + 1
                ? 'bg-blue-500 text-white shadow-lg scale-105'
                : 'bg-gray-50 hover:bg-gray-100'
            }`}
          >
            <div className="font-medium">Day {idx + 1}</div>
            <div className="text-xs mt-1">{day.date.split('（')[0]}</div>
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
          <div className="flex items-center space-x-3">
            {scheduleData[activeDay - 1].icon}
            <div>
              <h3 className="text-xl font-bold">{scheduleData[activeDay - 1].title}</h3>
              <p className="opacity-90">{scheduleData[activeDay - 1].date}</p>
            </div>
          </div>
        </div>
        <div className="p-4">
          {scheduleData[activeDay - 1].events.map((event, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-4 py-4 border-b last:border-0 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="w-20 text-sm font-medium text-blue-600 pt-1">
                {event.time}
              </div>
              <div className="bg-blue-50 p-2 rounded-lg">
                {event.icon}
              </div>
              <div className="flex-grow">
                <p className="font-medium text-gray-800">{event.title}</p>
                <p className="text-sm text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleScreen;
