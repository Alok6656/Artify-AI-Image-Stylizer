
import type { ArtisticEffect } from './types';

export const ARTISTIC_EFFECTS: ArtisticEffect[] = [
  {
    id: 'oil_painting',
    name: 'Oil Painting',
    prompt: 'Transform this image into a vibrant, textured oil painting with visible, thick brushstrokes and a rich color palette.',
    description: 'Rich colors and visible brushstrokes.',
  },
  {
    id: 'pencil_sketch',
    name: 'Pencil Sketch',
    prompt: 'Convert this photo into a detailed, monochrome pencil sketch. Emphasize lines, shading, and cross-hatching for texture.',
    description: 'Classic black and white sketch style.',
  },
  {
    id: 'watercolor',
    name: 'Watercolor',
    prompt: 'Reimagine this image as a soft and luminous watercolor painting with blended colors and delicate washes.',
    description: 'Soft, blended, and translucent.',
  },
  {
    id: 'pop_art',
    name: 'Pop Art',
    prompt: 'Turn this image into a bold, graphic Pop Art piece in the style of Andy Warhol, using vibrant, contrasting colors and a screen-printed look.',
    description: 'Vibrant, bold colors and graphic style.',
  },
  {
    id: 'anime',
    name: 'Anime Style',
    prompt: 'Redraw this image in a modern, high-quality anime or manga style. Give it clean lines, vibrant cell shading, and expressive features.',
    description: 'Japanese animation aesthetic.',
  },
  {
    id: 'pixel_art',
    name: 'Pixel Art',
    prompt: 'Convert this image into 16-bit pixel art. It should have a limited color palette and a blocky, retro video game aesthetic.',
    description: 'Retro, blocky video game look.',
  },
];
