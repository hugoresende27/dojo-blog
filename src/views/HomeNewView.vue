<template>
  <div class="home">
    <h1>New</h1>
    <a href="/">Home</a>
    <p>{{ names }}</p>
    <div v-for="name in names" :key="name">{{ name }}</div>

    <p>Search term -- {{ search }}</p>
    <input type="text" v-model="search">
     
   </div>
</template>

<script>

import { computed, ref } from 'vue'

export default {
  name : 'homenew',
  setup() {

    // const name = computed(() => {
    //   return 'Shaun'
    // })

    const search = ref('')
    const names = ref (['a', 'b', 'c', 'd', 'e', 'f'])

    // const matchingNames = computed()

    return { names, search }
  }

}
</script>
