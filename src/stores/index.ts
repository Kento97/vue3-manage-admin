import {defineStore} from 'pinia'

export const useStore = defineStore({
    id: 'index_store',
    state: () => ({
        tagsList: [],
        collapse: false
    }),
    getters: {},
    actions: {
        // delTagsItem(state,data){
        //
        // }
        handleCollapse() {
            this.collapse = !this.collapse
        }
    }
})
