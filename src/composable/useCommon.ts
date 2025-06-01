import { storeToRefs } from 'pinia'

export function useCommon() {
    /** 게시글 찜하기 */
    const sympathyToggle = () => {
        const sympathyBtn: any = document.querySelector('.post-view-content-wrap .sympathy button')

        if (sympathyBtn !== null) {
            sympathyBtn.addEventListener('click', (event: any) => {
                localStorage.setItem('postPick', 'true')

                if (localStorage.getItem('postPick') === 'true') {
                    event.target.classList.toggle('active')

                    if (event.target.classList.contains('active')) {
                        alert('해당 게시글이 찜목록에 추가되었습니다.\n마이페이지 > 게시글 찜한 목록에서 확인 가능합니다.')
                    } else {
                        localStorage.setItem('postPick', 'false')
                        alert('해당 게시글이 찜목록에서 삭제되었습니다.\n마이페이지 > 게시글 찜한 목록에서 확인 가능합니다.')
                    }
                }
            })

            if (localStorage.getItem('postPick') === 'true') {
                sympathyBtn.classList.add('active')
            }
        }
    }

    return {
        sympathyToggle,
    }
}
