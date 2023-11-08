<template>
    <div class="post">
        <hr>
        <h3>{{ post.title }}</h3>
        <p><i>{{ post.body }}</i></p>
        <span><i>{{ post.marketplace }}</i></span>&nbsp;&lAarr;
        <span><i>{{ post.warehouseName }}</i></span>&nbsp;&lAarr;
        <span><i>{{ post.current_stock }}</i></span>&nbsp;&lAarr;
        <span><i>{{ post.previous_stock }}</i></span>&nbsp;&lAarr;
        <span><i>{{ post.productId }}</i></span>&nbsp;&lAarr;
        <span><i>{{ post.item_code }}</i></span>&nbsp;&lAarr;
        <span><i>{{ post.name }}</i></span>&nbsp;&lAarr;
        <p>snipeed:: {{ post.snipped }}</p>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    props: ['post'],
    setup(props) {
        const snipped = computed(() => {
            return props.post.body.substring(0, 5) + '......'
        })

        return { snipped }
    },
  

}

</script>