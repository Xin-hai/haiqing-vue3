import { defineComponent, ref } from "vue";

export const Bar = defineComponent({
    setup() {
        return () => <>
        <div>我是Bar</div>
        </>
    }
})