import FingerprintJS2 from 'fingerprintjs2';

export default ({ app }, inject) => {
  inject('getDeviceId', async () => {
    return new Promise((resolve) => {
      FingerprintJS2.get((components) => {
        const values = components.map(component => component.value);
        const deviceId = FingerprintJS2.x64hash128(values.join(''), 31);
        resolve(deviceId);
      });
    });
  });
};
