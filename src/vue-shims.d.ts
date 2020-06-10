declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}

interface Array<T> {
    single: any
    copy: any
}

interface String {
    getTotalLength: any
}

interface dynamicObj {
    [key: string]: any
}
