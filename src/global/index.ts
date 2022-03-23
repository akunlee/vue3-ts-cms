import { App } from 'vue';
import registerElement from './register-element';
import axiosRegister from '@/service/axios';
export default function (app: App) {
  registerElement(app);
  axiosRegister(app);
}
