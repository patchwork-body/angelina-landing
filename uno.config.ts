import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  presets: [
    presetUno(),
  ],
  rules: [
    ['font-sans', { 'font-family': "Poppins, sans-serif", 'font-optical-sizing': 'auto' }],
  ],
  theme: {
    colors: {
      'primary': '#32aa27' 
    },
  }
});
