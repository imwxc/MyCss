import { onBeforeUnmount, onMounted, reactive } from "vue";
const point = reactive({
    x: 0,
    y: 0,
    id: Math.random()*100
});
export default function () {
    function updatePoint(event: GlobalEventHandlersEventMap["click"]) {
        point.x = event.pageX;
        point.y = event.pageY;
        console.info("updatePoint", point.x, ", ", point.y);
    }

    onMounted(() => {
        window.addEventListener("click", updatePoint);
    });

    onBeforeUnmount(() => {
        window.removeEventListener("click", updatePoint);
    });

    return point;
}
