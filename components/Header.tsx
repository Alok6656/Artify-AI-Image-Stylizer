
import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

export const Header: React.FC = () => {
  return (
    <header className="w-full max-w-7xl text-center">
      <div className="inline-flex items-center justify-center gap-3">
        <SparklesIcon className="w-10 h-10 text-indigo-400" />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
          Artify AI
        </h1>
      </div>
      <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
        Breathe new life into your photos. Select an image and an artistic style to instantly create a masterpiece.
      </p>
    </header>
  );
};
