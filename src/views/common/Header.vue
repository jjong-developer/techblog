<template>
    <header class="header-wrap">
        <!--<div id="loading" class="loading">-->
        <!--	<img src="../images/loading.gif" alt="">-->
        <!--</div>-->
        <div class="dimmed" @mouseup="dimHandler()"></div>

        <nav class="navi">
            <div class="container menu">
                <button type="button" class="menu-open-btn" @click="openHeaderMenuHandler()">
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
                    <div class="search-wrap">
                        <input type="text" name="search" autocomplete="off" class="search-keyword" placeholder="검색어를 입력해주세요." />
                        <button type="button" class="search-btn" @click="searchHandler($event)"></button>
                    </div>
                    <a href="https://jjong-portfolio.web.app/" target="_blank" class="link-btn-type-1">Introduction</a>
                    <RouterLink :to="{ name: 'signin' }" class="link-btn-type-1">Sign in</RouterLink>
                </div>
<!--                <div class="navi-interface">-->
<!--                    <a href="https://jjong-portfolio.web.app/" target="_blank" class="link-btn-type-1">Introduction</a>-->
<!--                    <RouterLink :to="{ name: 'signin' }" class="link-btn-type-1">Sign in</RouterLink>-->
<!--                </div>-->
            </div>

            <!-- 사이드 메뉴 -->
            <div class="sidebar-menu">
                <button type="button" class="close-btn" @click="closeHeaderMenuHandler()"></button>
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
            <p>좋아하는 걸 좋아하는 쫑&#129311;</p>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { useHeader } from '@/composable/useHeader'
const { openHeaderMenu, closeHeaderMenu, closeDim, search } = useHeader()

const openHeaderMenuHandler = () => {
    openHeaderMenu()
}

const closeHeaderMenuHandler = () => {
    closeHeaderMenu()
}

const dimHandler = () => {
    closeDim()
}

/**
 * 통합 검색
 */
const searchHandler = (event: any) => {
    let searchKeywordElement: any = document.querySelector('.search-keyword')
    let word: any = searchKeywordElement.value

    search(event, word)
}
</script>

<style lang="scss" scoped>

</style>
