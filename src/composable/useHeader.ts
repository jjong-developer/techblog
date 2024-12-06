import { storeToRefs } from 'pinia'

export function useHeader() {
    const openHeaderMenu = () => {
        const dimElement: any = document.querySelector('.dimmed')
        const sidebarMenuElement: any = document.querySelector('.sidebar-menu')

        dimElement.style.display = 'block'
        sidebarMenuElement.classList.add('active')
        sidebarMenuElement.style.left = '0px'
        document.body.style.cssText = 'overflow: hidden;'
    }

    const closeHeaderMenu = () => {
        const dimElement: any = document.querySelector('.dimmed')
        const sidebarMenuElement: any = document.querySelector('.sidebar-menu')

        dimElement.style.display = 'none'
        sidebarMenuElement.classList.remove('active')
        sidebarMenuElement.style.left = '-100%'
        document.body.style.cssText = ''
    }

    const closeDim = () => {
        closeHeaderMenu()
    }

    const search = (event: any, word: string) => {
        let { target } = event
        let searchKeywordElement: any = document.querySelector('.search-keyword')

        if (!word) { // 검색창에 값이 없으면
            target.classList.toggle('active')
            searchKeywordElement.classList.toggle('active')
        } else { // 검색창에 값이 있으면
            searchKeywordElement.value = ''
        }

        searchKeywordElement.addEventListener('keyup', (event: any) => {
            if (event.keyCode === 13) {
                event.preventDefault()
            }
        })
    }

    return {
        openHeaderMenu,
        closeHeaderMenu,
        closeDim,
        search,
    }
}