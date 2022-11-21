import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.mister',
  appName: 'MISTER',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins:{
    Keyboard:{
      "style":"dark",
      "resizeOnFullScreen":true,
      
    }
  }
};

export default config;
