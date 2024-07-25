import { createApp } from 'vue';
import { createPinia } from 'pinia'; // 기존의 상태 관리 라이브러리 Vuex를 대체할 수 있는 라이브러리
import App from './App.vue';
import router from './router';

/* 폰트 */
import '@/assets/scss/base/font.scss';

/* 초기화 */
import '@/assets/scss/base/reset.scss';

/* 공통 레이아웃 */
import '@/assets/scss/common/common.scss'; // 공통
import '@/assets/scss/common/header.scss'; // 헤더
import '@/assets/scss/common/footer.scss'; // 푸터

/* 뷰 페이지 */
import '@/assets/scss/main.scss'; // 메인 페이지
import '@/assets/scss/views/list.scss'; // 리스트 페이지
import '@/assets/scss/views/view.scss'; // 뷰어 페이지

const pinia: any = createPinia();
const app: any = createApp(App).use(router);

app.use(router);
app.use(pinia);

app.mount('#app');
