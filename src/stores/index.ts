import {defineStore} from 'pinia'

export const useStore = defineStore({
    id: 'index_store',
    state: () => ({
        collapse: true
    }),
    getters: {},
    actions: {
        handleCollapse() {
            this.collapse = !this.collapse
        }
    }
})
