<template>
    <div class="post">
        <hr>
        <h3>{{ post.title }}</h3>
        <p><i>{{ post.body }}</i></p>
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