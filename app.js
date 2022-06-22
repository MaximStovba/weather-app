import 'dotenv/config';
import request from 'request';

const { API_ACCESS_KEY, BASE_URL } = process.env;

const url = `${BASE_URL}/current?access_key=${API_ACCESS_KEY}&query=Moscow`;

request({ url: url, json: true }, (error, response) => {
  console.log(
    response.body.current.weather_descriptions[0] +
      '. It is currently ' +
      response.body.current.temperature +
      ' degress out.'
  );
});
