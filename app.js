import { geocode } from './utils/geocode.js';

geocode('Moscow', (error, data) => {
  console.log('Error:', error);
  console.log('Data:', data);
});
