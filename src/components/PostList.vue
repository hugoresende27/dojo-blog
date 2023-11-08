<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <!-- <h3>{{ post.title }}</h3> -->
            <SinglePost :post="post" />
        </div>
    </div>
    
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost.vue'
export default {
    props: ['posts'],
    components: { SinglePost },
    setup(props) {
        // console.log(props.posts[0].title)
        onMounted(() => 
            console.log('component onMounted')
        )
        onUnmounted(() => 
            console.log('component onUnmounted')
        )
        onUpdated(() => 
            console.log('component onUpdated')
        )
    },
    mounted() {
        console.log('mounted using options API')
    }
}


</script>