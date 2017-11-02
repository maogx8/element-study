import fetch from '@/utils/fetch'


export function login(username, password) {
    return fetch({
        url: 'oauth2/token',
        method: 'post',
        data: {
            name: username,
            password: password
        }
    })
}

export function logout(){
    return fetch({
        url: 'oauth2/token',
        method: 'delete',
    })
}
