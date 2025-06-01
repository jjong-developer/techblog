<template>
    <!-- 게시글 보기 -->
    <div class="post post-view-area">
        <div class="container">
            <div class="post-view-header">
                <p class="category">카테고리</p>
                <h1>제목</h1>
                <div class="post-view-info">
                    <span class="date">날짜</span>
                    <span class="author">by. 작성자</span>
                </div>
            </div>
            <div class="post-view-content-wrap">
                <div class="post-view-content">
                    <p>글 내용</p>
                    <h3>출처 및 참고</h3>
                    <a href="https://web.dev/critical-rendering-path-render-tree-construction/" target="_blank" class="link">[web.dev] Render-tree Construction, Layout, and Paint</a>
                    <a href="https://web.dev/critical-rendering-path-render-tree-construction/" target="_blank" class="link">[web.dev] Render-tree Construction, Layout, and Paint</a>
                    <a href="https://web.dev/critical-rendering-path-render-tree-construction/" target="_blank" class="link">[web.dev] Render-tree Construction, Layout, and Paint</a>
                </div>
                <div class="sympathy">
                    <button type="button"></button>
                </div>
            </div>
            <div class="comment-wrap">
                <div class="comment-header">
                    <div class="comment-num">댓글 <span>10</span></div>
                </div>
                <div class="comment">
                    <ul class="comment-area">
                        <li class="comment-list">
                            <!-- 댓글 -->
                            <div class="comment-box">
                                <img src="https://via.placeholder.com/50x50" alt="">
                                <div class="comment-reply">
                                    <span class="comment-name">익명</span>
                                    <span class="date">2023.10.04 05:48</span>
                                    <p class="comment-text">
                                        일기로 책을 만든다니 너무 좋은 아이디어네요! 책이 한 권 한 권 쌓이면서 너무 뿌듯할 것 같아요. 저는 편집 디자이너인데요. 사실 다이어리는 작성한 날 이후면 거의 다시 펼쳐본 적이 없거든요. 다른 사람 책들은 많이 만들면서 정작 내 일기를 책으로 만들어 본다는 건 생각은 해봤지만 실행에 옮기질 못했는데 일회성에 그치지 않고 이렇게 만들고 계신다는 게 너무 멋져요.
                                        몇 달 전부터 웹 공부를 시작하면서 막힐 때마다 검색하면 나나님 블로그가 자주 나와서 정말 큰 도움을 받고 있어요. 혼자 이해는 하면서도 말로(그것도 텍스트로) 다른 사람한테 설명한다는 게 쉬운 일이 아닌데, 나나님이 작성하신 글들은 진짜 잘 읽혀요! 정말 감사합니다. 앞으로도 늘 멋진 하루가 되시길 바라요♡
                                    </p>
                                    <div class="comment-btn">
                                        <button type="button" class="modify-btn">수정</button>
                                        <button type="button" class="delete-btn">삭제</button>
                                        <button type="button" class="reply-btn">답글</button>
                                    </div>
                                </div>
                            </div>
                            <ul class="reply-area">
                                <li class="reply-list">
                                    <!-- 답글 -->
                                    <div class="reply-box">
                                        <img src="https://via.placeholder.com/50x50" alt="">
                                        <div class="comment-reply-2">
                                            <span class="comment-name">관리자</span>
                                            <span class="date">2023.10.04 05:48</span>
                                            <p class="comment-text">
                                                안녕하세요, 권총과 토끼님!
                                                우선... 제 원거리 허그를 드려도 될까요ㅎㅎ 좋은 말씀 너무 감사합니다 🤗
                                                저는 편집 디자인을 잘 모르지만 취미로 해볼 때마다 전문가들이 대단하다고 느꼈는데
                                                그중 한 분이 바로 여기 계셨군요.
                                                이렇게 따땃한 댓글까지 남겨주셔서 마음이 참 벅차오릅니다!
                                                사실 꼭 댓글을 남겨주지 않으셔도 되는데 권총과 토끼님처럼 따스한 댓글을 남겨주시는 분들을 보면 제가 더 감사할 따름이에요.
                                                좋은 영향력을 전파하는 멋진 힘을 갖고 계시는구나 하고 생각합니다. 저도 많이 배워나가야겠어요!
                                                항상 좋은 일 가득하시길, 저도 댓글로 소망을 담아 보냅니다. 감사합니다 😍
                                            </p>
                                            <div class="comment-btn">
                                                <button type="button" class="modify-btn">수정</button>
                                                <button type="button" class="delete-btn">삭제</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="comment-write">
                    <input type="text" value="" class="comment-name-input" placeholder="이름" />
                    <input type="password" value="" maxlength="12" class="comment-password-input" placeholder="비밀번호" />
                    <textarea name="comment" class="comment-textarea" placeholder="댓글은 언제든 환영입니다!"></textarea>
                    <div class="comment-register">
                        <button type="button" id="commentRegisterBtn" class="comment-register-btn">댓글 남기기</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- // 게시글 보기 -->

    <!-- 관련 게시글 보기 -->
    <div class="post-related">
        <div class="container">
            <h2 class="sub-title">관련글</h2>
            <div class="post-gallery type-3">
                <ul>
                    <li class="post-list-item">
                        <a href="#!" class="post-box">
                            <div class="post-thumbnail">
                                <img src="@/assets/images/bg/no_img.jpg" alt="">
                            </div>
                            <div class="post-info">
                                <p class="post-title">게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다.</p>
                                <span class="date">2023.07.12</span>
                            </div>
                        </a>
                    </li>
                    <li class="post-list-item">
                        <a href="#!" class="post-box">
                            <div class="post-thumbnail">
                                <img src="@/assets/images/bg/no_img.jpg" alt="">
                            </div>
                            <div class="post-info">
                                <p class="post-title">게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다.</p>
                                <span class="date">2023.07.12</span>
                            </div>
                        </a>
                    </li>
                    <li class="post-list-item">
                        <a href="#!" class="post-box">
                            <div class="post-thumbnail">
                                <img src="@/assets/images/bg/no_img.jpg" alt="">
                            </div>
                            <div class="post-info">
                                <p class="post-title">게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다.</p>
                                <span class="date">2023.07.12</span>
                            </div>
                        </a>
                    </li>
                    <li class="post-list-item">
                        <a href="#!" class="post-box">
                            <div class="post-thumbnail">
                                <img src="@/assets/images/bg/no_img.jpg" alt="">
                            </div>
                            <div class="post-info">
                                <p class="post-title">게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다.</p>
                                <span class="date">2023.07.12</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- // 관련 게시글 보기 -->
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useCommon } from '@/composable/useCommon'

const { sympathyToggle } = useCommon()

onMounted(() => {
    sympathyToggle()
})
</script>

<style lang="scss" scoped>

</style>

