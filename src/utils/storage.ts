/**
 * 往本地缓存中存储数据，可以同时传入多个需要存储的数据
 */
export function setLocalStorage(key: any | string, value: any | string): void {
    if (typeof key === 'string') {
        if (typeof value === 'object') {
            value = JSON.stringify(value)
        }
        localStorage.setItem(key, value)
    } else if (typeof key === 'object' && !(key instanceof Array)) {
        const itemArr = Object.keys(key)
        itemArr.map((item) => {
            setLocalStorage(item, key[item])
        })
    } else {
        throw new Error('Invalid localStorage key or value')
    }
}

/**
 * 从本地缓存中获取数据
 */
export function getLocalStorage(key: string): string {
    if (!key || typeof key !== 'string') {
        throw new Error('localStorage required a string key')
    } else {
        return localStorage[key]
    }
}

/**
 * 从本地缓存中移除数据
 */
export function removeLocalStorage(key: any | string | number): void {
    if (!key) {
        throw new Error('localStorage required a key')
    } else {
        if (key instanceof Array) {
            key.map((item) => {
                removeLocalStorage(item)
            })
        } else if (typeof key === 'string') {
            localStorage.removeItem(key)
        } else {
            throw new Error('localStorage required a invalid key, you can give an array or string param')
        }
    }
}
