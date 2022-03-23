import { ElButton } from 'element-plus';
import 'element-plus/dist/index.css';
import { App } from 'vue';
const elementComponents = [ElButton];
export default function (app: App) {
  elementComponents.forEach((item) => {
    app.use(item);
  });
}
