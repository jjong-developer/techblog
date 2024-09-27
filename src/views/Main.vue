<template>
    <main>

        <div class="container">
            <!-- 전체 글 -->
            <div class="post-gallery type-1">
                <h2 class="title">전체 글</h2>
                <ul>
                    <li class="post-list-item">
                        <RouterLink :to="{ name: 'view' }" class="post-box">
                            <div class="post-thumbnail main-event-thumbnail">
                                <img src="@/assets/images/bg/no_img.jpg">
                            </div>
                            <div class="post-info">
                                <p class="category">카테고리</p>
                                <p class="post-title">게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다.</p>
                                <p class="post-content">게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다.</p>
                                <span class="date">2023.07.12</span>
                            </div>
                        </RouterLink>
                    </li>
                    <li class="post-list-item">
                        <RouterLink :to="{ name: 'view' }" class="post-box">
                            <div class="post-thumbnail">
                                <img src="@/assets/images/bg/no_img.jpg">
                            </div>
                            <div class="post-info">
                                <p class="category">카테고리</p>
                                <p class="post-title">게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다.</p>
                                <p class="post-content">게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다.</p>
                                <span class="date">2023.07.12</span>
                            </div>
                        </RouterLink>
                    </li>
                </ul>

                <div class="btn-wrap">
                    <button type="button">더 보기</button>
                </div>
            </div>
            <!-- // 전체 글 -->
        </div>

        <div class="area-wrap">
            <div class="container">
                <!-- 인기 글 -->
                <h2 class="title">인기 글</h2>
                <div class="post-gallery type-2">
                    <ul>
                        <li class="post-list-item">
                            <a href="#!" class="post-box">
                                <div class="post-thumbnail">
                                    <img src="@/assets/images/bg/no_img.jpg">
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
                                    <img src="@/assets/images/bg/no_img.jpg">
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
                                    <img src="@/assets/images/bg/no_img.jpg">
                                </div>
                                <div class="post-info">
                                    <p class="post-title">게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다.   게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다.</p>
                                    <span class="date">2023.07.12</span>
                                </div>
                            </a>
                        </li>
                        <li class="post-list-item">
                            <a href="#!" class="post-box">
                                <div class="post-thumbnail">
                                    <img src="@/assets/images/bg/no_img.jpg">
                                </div>
                                <div class="post-info">
                                    <p class="post-title">게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다.</p>
                                    <span class="date">2023.07.12</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- // 인기 글 -->
            </div>
        </div>

        <!-- 전체 글 보기 -->
        <div class="writing-view-all">
            <a href="#!">전체 글 보기</a>
<!--            <button id="topBtn" class="top-btn" type="button">-->
<!--                <img src="./images/top-arrow.png" alt="top">-->
<!--            </button>-->
        </div>
        <!-- // 전체 글 보기 -->

    </main>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

</style>
