
import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

interface SpinnerProps {
  message: string;
}

const Spinner: React.FC<SpinnerProps> = ({ message }) => (
  <div className="flex flex-col items-center justify-center gap-4 text-gray-400">
    <svg className="animate-spin h-12 w-12 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <p className="text-lg font-semibold animate-pulse">{message}</p>
  </div>
);

interface ImageDisplayProps {
  isLoading: boolean;
  imageData: string | null;
  error: string | null;
}

export const ImageDisplay: React.FC<ImageDisplayProps> = ({ isLoading, imageData, error }) => {
  const renderContent = () => {
    if (isLoading) {
      return <Spinner message="Artifying your image..." />;
    }
    if (error) {
      return (
        <div className="text-center text-red-400 bg-red-900/50 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-2">Something went wrong</h3>
          <p>{error}</p>
        </div>
      );
    }
    if (imageData) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <img src={`data:image/png;base64,${imageData}`} alt="Generated art" className="max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-black/50" />
            <a 
                href={`data:image/png;base64,${imageData}`} 
                download="artify-ai-image.png"
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors"
            >
                Download Image
            </a>
        </div>
      );
    }
    return (
      <div className="flex flex-col items-center justify-center gap-4 text-gray-500">
        <SparklesIcon className="w-16 h-16" />
        <h2 className="text-2xl font-bold">Your masterpiece awaits</h2>
        <p className="text-center max-w-sm">Upload an image and choose a style, and your generated art will appear here.</p>
      </div>
    );
  };

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-black/20 rounded-xl p-4">
      {renderContent()}
    </div>
  );
};
