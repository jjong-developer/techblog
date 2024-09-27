<template>
    <header class="header-wrap">
        <!--<div id="loading" class="loading">-->
        <!--	<img src="../images/loading.gif" alt="">-->
        <!--</div>-->
        <div class="dimmed"></div>

        <nav class="navi">
            <div class="container menu">
                <button type="button" id="menuOpenBtn" class="menu-open-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117 82" xml:space="preserve"><path class="st0" d="M117 6H0M117 41H0M117 76H0" style="fill:none;stroke:#222222;stroke-width:11;stroke-miterlimit:10"/></svg>
                </button>
                <ul>
                    <li>
                        <RouterLink :to="{ name: 'main' }">home</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'list' }">blog</RouterLink>
                    </li>
                </ul>
                <div class="navi-utils">
                    <button type="button" id="searchBtn" class="search-btn"></button>
                    <input type="text" name="search" autocomplete="off" id="searchKeyword" class="search-keyword" placeholder="검색어를 입력해주세요." />
                    <a href="https://jjong-developer.github.io/" target="_blank" class="portfolio-link">portfolio</a>
                </div>
            </div>

            <!-- 사이드 메뉴 -->
            <div class="sidebar-menu">
                <button type="button" id="closeBtn" class="close-btn" title="닫기"></button>
                <div class="sidebar-header">
                    <RouterLink :to="{ name: 'main' }">jjong.log&#129311;</RouterLink>
                </div>
                <ul class="sidebar-one-depth-menu">
                    <li>
                        <RouterLink :to="{ name: 'main' }">home</RouterLink>
                    </li>
                    <li>
<!--                        <RouterLink :to="{ name: '#!' }">-->
<!--                            <span class="category-total-num">blog (0)</span>-->
<!--                        </RouterLink>-->
                        <ul class="sidebar-two-depth-menu">
                            <li>
<!--                                <RouterLink :to="{ name: '#!' }">test</RouterLink>-->
                            </li>
                            <li>
<!--                                <RouterLink :to="{ name: '#!' }">test</RouterLink>-->
                            </li>
                            <li>
<!--                                <RouterLink :to="{ name: '#!' }">test</RouterLink>-->
                            </li>
                            <li>
<!--                                <RouterLink :to="{ name: '#!' }">test</RouterLink>-->
                            </li>
                            <li>
<!--                                <RouterLink :to="{ name: '#!' }">test</RouterLink>-->
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!-- // 사이드 메뉴 -->
        </nav>
        <div class="container logo">
            <h1>
                <RouterLink :to="{ name: 'main' }">jjong.log</RouterLink>
            </h1>
<!--            <p>좋아하는 걸 좋아하는 쫑&#129311;</p>-->
        </div>
    </header>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

</style>
