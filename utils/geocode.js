import 'dotenv/config';
import request from 'request';

export const { API_ACCESS_KEY, BASE_URL } = process.env;

export const geocode = (address, callback) => {
  const url = `${BASE_URL}/current?access_key=${API_ACCESS_KEY}&query=${address}`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (response.body.current === undefined) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      callback(
        undefined,
        response.body.current.weather_descriptions[0] +
          '. It is currently ' +
          response.body.current.temperature +
          ' degress out.'
      );
    }
  });
};
