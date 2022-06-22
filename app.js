import 'dotenv/config';
import request from 'request';

const { API_ACCESS_KEY, BASE_URL } = process.env;

const url = `${BASE_URL}/current?access_key=${API_ACCESS_KEY}&query=Moscow`;

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
