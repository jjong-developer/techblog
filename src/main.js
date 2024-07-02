import { createApp } from 'vue';
import { createPinia } from 'pinia'; /* 기존의 상태 관리 라이브러리 Vuex를 대체할 수 있는 라이브러리 */
import App from './App.vue';

import '@/assets/scss/base/reset.scss'; /* 초기화 세팅 */
import '@/assets/scss/common/common.scss'; /* 공통 레이아웃 */
import '@/assets/scss/common/footer.scss'; /* 하단 */

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount('#app');
