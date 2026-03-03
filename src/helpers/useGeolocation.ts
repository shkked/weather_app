export default function useGeolocation() {
  const getLocation = () =>
    new Promise<{ lat: number; lon: number }>((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Геолокация не определена'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        position => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        error => {
          reject(error);
        }
      );
    });

  return {
    getLocation,
  };
}
