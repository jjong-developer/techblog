<template>
    <!-- 게시글 보기 -->
    <!--<script>-->
    <!--    console.log(document.querySelectorAll('.route-link'))-->
    <!--</script>-->
    <div class="post post-list-area">
        <div class="container">
            <h2 class="category-name">blog <span>(85)</span></h2>
            <div class="post-gallery type-4">
                <ul>
                    <li class="post-list-item">
                        <RouterLink :to="{ name: 'view' }" class="post-box">
                            <div class="post-thumbnail main-event-thumbnail">
                                <img src="@/assets/images/bg/no_img.jpg" alt="">
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
                        <a href="#!" class="post-box">
                            <div class="post-thumbnail">
                                <img src="@/assets/images/bg/no_img.jpg" alt="">
                            </div>
                            <div class="post-info">
                                <p class="category">카테고리</p>
                                <p class="post-title">게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다.</p>
                                <p class="post-content">게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다.</p>
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
                                <p class="category">카테고리</p>
                                <p class="post-title">게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다.</p>
                                <p class="post-content">게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다.</p>
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
                                <p class="category">카테고리</p>
                                <p class="post-title">게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다.</p>
                                <p class="post-content">게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다.</p>
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
                                <p class="category">카테고리</p>
                                <p class="post-title">게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다. 게시글 제목 입니다.</p>
                                <p class="post-content">게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다. 게시글 내용 입니다.</p>
                                <span class="date">2023.07.12</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="paging-wrap">
                <a href="#!" class="prev-paging">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#cbd5e1">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                </a>
                <a href="#!" class="active">
                    <span>1</span>
                </a>
                <a href="#!">
                    <span>2</span>
                </a>
                <a href="#!">
                    <span>3</span>
                </a>
                <a href="#!">
                    <span>4</span>
                </a>
                <a href="#!">
                    <span>5</span>
                </a>
                <a href="#!" class="next-paging">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#000000">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <!-- // 게시글 보기 -->
</template>
<script setup lang="ts">
</script>