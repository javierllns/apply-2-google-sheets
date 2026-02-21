import { defineWebExtConfig } from 'wxt';
import path from 'node:path';

export default defineWebExtConfig({
  binaries: {
    edge: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', // Open MS Edge when running "wxt -b edge"
  },

  // Configuring browser's dev profile to persist data. (Chronium-based only)
  chromiumProfile: path.resolve('.wxt/chrome-data'),
  keepProfileChanges: true,
});