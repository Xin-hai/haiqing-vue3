import { defineComponent, ref } from "vue";

export const App = defineComponent({
    setup() {
        // 使用 refCount 提醒自己加 .value
        const refCount = ref(0)
        const onClick = () => {refCount.value +=1 }
        return () => <>
        <div>{ refCount.value }</div>
        <button onClick={onClick}>+1</button>
        </>
    }
})