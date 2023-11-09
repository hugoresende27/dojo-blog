<template>
    <h1>Details</h1>
    <div v-if="error"> {{ error }}</div>
    <div v-if="post" class="post">
        <h3>{{ post.id }}</h3>
        <p class="pre">{{ post.name }}</p>
        <p class="pre">{{ post.warehouseName }}</p>
        <p class="pre">{{ post.current_stock }}</p>
        <p class="pre">{{ post.productId }}</p>
        <p class="pre">{{ post.item_code }}</p>
    </div>
</template>

<script>

import getPost from '../composables/getpost'
export default {
    props: ['id'],
    setup(props) {

        const { post, error, load} = getPost(props.id)

        load()

        return { post, error }

    }
}
</script>

<style>

    .post {
        max-width: 1200px;
        margin: 0 auto;
    }

    .post p {
        color: #960a0a;
        line-height: 1.5rem;
        margin-top: 40px;
    }

    .pre {
        white-space: pre-wrap;
    }
</style>