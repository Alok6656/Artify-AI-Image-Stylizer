
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { ImageUploader } from './components/ImageUploader';
import { EffectSelector } from './components/EffectSelector';
import { ImageDisplay } from './components/ImageDisplay';
import { SparklesIcon } from './components/icons/SparklesIcon';
import { ARTISTIC_EFFECTS } from './constants';
import { applyArtisticEffect } from './services/geminiService';
import { fileToBase64 } from './utils/fileUtils';
import type { ArtisticEffect } from './types';

const App: React.FC = () => {
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [originalImagePreview, setOriginalImagePreview] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [selectedEffect, setSelectedEffect] = useState<ArtisticEffect>(ARTISTIC_EFFECTS[0]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = useCallback((file: File) => {
    setOriginalFile(file);
    setGeneratedImage(null);
    setError(null);
    const reader = new FileReader();
    reader.onloadend = () => {
      setOriginalImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleGenerate = async () => {
    if (!originalFile || !selectedEffect) {
      setError('Please upload an image and select an effect.');
      return;
    }

    setIsLoading(true);
    setGeneratedImage(null);
    setError(null);

    try {
      const { base64, mimeType } = await fileToBase64(originalFile);
      const result = await applyArtisticEffect(base64, mimeType, selectedEffect.prompt);
      setGeneratedImage(result);
    } catch (e) {
      console.error(e);
      setError(e instanceof Error ? e.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const isGenerateDisabled = isLoading || !originalFile;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <Header />

      <main className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 mt-8">
        {/* Controls Column */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6 p-6 bg-gray-800/50 rounded-2xl border border-gray-700 backdrop-blur-sm">
          <ImageUploader onImageUpload={handleImageUpload} imagePreview={originalImagePreview} />
          <EffectSelector
            selectedEffect={selectedEffect}
            onSelectEffect={setSelectedEffect}
          />
          <button
            onClick={handleGenerate}
            disabled={isGenerateDisabled}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            <SparklesIcon className="w-6 h-6" />
            <span>Artify Image</span>
          </button>
        </div>

        {/* Display Column */}
        <div className="w-full lg:w-2/3 flex-grow p-6 bg-gray-800/50 rounded-2xl border border-gray-700 backdrop-blur-sm">
          <ImageDisplay
            isLoading={isLoading}
            imageData={generatedImage}
            error={error}
          />
        </div>
      </main>

       <footer className="w-full max-w-7xl text-center text-gray-500 mt-8 text-sm">
        <p>Powered by Gemini. Create stunning artistic transformations from your photos.</p>
      </footer>
    </div>
  );
};

export default App;
