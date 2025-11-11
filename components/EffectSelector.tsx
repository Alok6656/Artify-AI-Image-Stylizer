
import React from 'react';
import { ARTISTIC_EFFECTS } from '../constants';
import type { ArtisticEffect } from '../types';

interface EffectSelectorProps {
  selectedEffect: ArtisticEffect;
  onSelectEffect: (effect: ArtisticEffect) => void;
}

export const EffectSelector: React.FC<EffectSelectorProps> = ({ selectedEffect, onSelectEffect }) => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-3 text-gray-100">2. Choose a Style</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {ARTISTIC_EFFECTS.map((effect) => (
          <button
            key={effect.id}
            onClick={() => onSelectEffect(effect)}
            className={`flex flex-col items-center justify-center text-center p-3 rounded-lg border-2 transition-all duration-200 h-24
              ${
                selectedEffect.id === effect.id
                  ? 'bg-indigo-600 border-indigo-500 text-white scale-105 shadow-lg shadow-indigo-600/30'
                  : 'bg-gray-700 border-gray-600 hover:bg-gray-600 hover:border-gray-500'
              }
            `}
          >
            <span className="font-semibold text-sm">{effect.name}</span>
            <span className="text-xs mt-1 opacity-80">{effect.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
