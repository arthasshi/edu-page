import fetch from '@/utils/fetch'

export const saveInfo = (data) => {
    return fetch({
        url:'save',
        method:'post',
        data
    })

}