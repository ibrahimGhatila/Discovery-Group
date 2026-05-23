export type IllusKey = 'coffee' | 'cocoa' | 'vanilla' | 'chilli' | 'sesame' | 'beans';
export type Tone = 'forest' | 'clay' | 'dark' | 'paper';

export const commodityIllus: Record<string, IllusKey> = {
  'coffee': 'coffee',
  'cocoa': 'cocoa',
  'vanilla': 'vanilla',
  'bird-eye-chilli': 'chilli',
  'sesame': 'sesame',
  'beans-and-pulses': 'beans',
};

export const commodityTone: Record<string, Tone> = {
  'coffee': 'dark',
  'cocoa': 'clay',
  'vanilla': 'forest',
  'bird-eye-chilli': 'clay',
  'sesame': 'paper',
  'beans-and-pulses': 'forest',
};
