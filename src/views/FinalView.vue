<template>
    <div class="home">
        <h1>Home</h1>
        <button @click="showPosts = !showPosts">posts true or false</button>
        <button @click="posts.pop()">delete a post</button>

        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length">
            <PostList v-if="showPosts" :posts="posts"/>
        </div>
        <div v-else>
            Loading ....
        </div>
   
    </div>
</template>

<script>
import PostList from '../components/PostList.vue'
// import { ref } from 'vue'
import getPosts from '../composables/getposts'

export default {
    name: 'Home',
    components: { PostList },
     setup() {

        const { posts, error, load, showPosts } = getPosts()

        load()

        return { posts, error, showPosts }
        // // const posts = ref ([
        // //     { title: 'welcome to the blog', body: 'Loreum Ipsum', id: 1},
        // //     { title: 'top 5 CSS tips', body: 'Loreum Ipsum', id: 2},
        // // ])

        // const posts = ref([])
        // const error = ref(null)

        // const showPosts = ref(true)

        // const load = async () => {
        //     try {
        //         let data = await fetch('http://localhost:3000/data')
        //         console.log(data)
        //         if(!data.ok) {
        //             throw Error('no data available')
        //         }
        //         posts.value = await data.json()
        //     } catch (err) {
        //         error.value = err.message
        //         console.log(err.value)
        //     }
        // }

        // load()

        // return { posts, showPosts, error }
     }
}
</script>

<style>

</style>