import { createApp } from 'vue';
import { createPinia } from 'pinia'; /* 기존의 상태 관리 라이브러리 Vuex를 대체할 수 있는 라이브러리 */
import App from './App.vue';
import router from './router';

import '@/assets/scss/base/reset.scss'; /* 초기화 세팅 */
import '@/assets/scss/common/common.scss';

/* 공통 레이아웃 */
import '@/assets/scss/common/footer.scss';

const pinia: any = createPinia();
const app: any = createApp(App).use(router);

app.use(router);
app.use(pinia);

app.mount('#app');
