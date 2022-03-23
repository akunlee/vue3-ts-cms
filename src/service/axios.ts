import axios from 'axios';
import { App } from 'vue';
export default function (app: App) {
  axios
    .get('https://httpbin.org/get', {
      params: {
        name: 'akkun'
      }
    })
    .then((res) => {
      console.log(res);
    });
}
