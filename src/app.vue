<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class extends Vue {
    private close = false
    private isRouterAlive = true
    // 方法
    private change() {
        this.close = !this.close
    }
    private reload() {
        this.isRouterAlive = false
        this.$nextTick(function (): void {
            this.isRouterAlive = true
        })
    }
}
</script>
<style lang="less" scoped>
#app {
    height: 100%;
}
.menu-content {
    width: 100%;
    height: 100%;
    padding-top: 72px;
    box-sizing: border-box;
    background-color: rgba(248, 248, 248, 1);
}
.content {
    margin-left: 200px;
    overflow: auto;
    width: calc(100% - 200px);
}
.min-left {
    margin-left: 40px;
}
</style>
