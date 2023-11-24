import { Workbox } from 'workbox-window';

const swRegister = async () => {
  if (!(await 'serviceWorker' in navigator)) {
    console.log('Service worker not supported in this browser');
    return;
  }

  const wb = new Workbox('./sw.js');

  try {
    await wb.register();
    console.log('Service worker registered');
  } catch (error) {
    console.log('Service worker registration failed', error);
  }
};

export default swRegister;
