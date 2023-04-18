import { onBeforeUnmount, onMounted, reactive } from "vue";

export default function () {
    const point = reactive({
        x: 0,
        y: 0,
    });

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
