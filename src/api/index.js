import fetch from '@/utils/fetch'

export const saveInfo = (data) => {
    return fetch({
        url:'save',
        method:'post',
        data
    })

}

export const getInfo = () => {
    return fetch({
        url:'getinfos',
        method:'get',
    })

}