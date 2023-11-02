<template>
  <div class="home">
 
    <a href="/">    <button>Home</button></a>
    <a href="/final">    <button>Final</button></a>
    <p>{{ names }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">stop watching</button>

    <p>Search term &rightarrow; {{ search }}</p>
    <input type="text" v-model="search">
     
   </div>
</template>

<script>

import { computed, ref, watch, watchEffect} from 'vue'

export default {
  name : 'homenew',
  setup() {

    // const name = computed(() => {
    //   return 'Shaun'
    // })

    const search = ref('')
    const names = ref(['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank']);

    const stopWatch = watch(search, () => {
      console.log('watch function run')
    })

    const stopEffect = watchEffect(() => {
      console.log('watchEffect function run', search.value)
    })

    const matchingNames = computed(() => {
      const searchTerm = search.value.toLowerCase() // Convert search term to lowercase
      return names.value.filter((name) => name.toLowerCase().includes(searchTerm)) // Convert names to lowercase for comparison
    })

    const handleClick = () => {
      stopWatch()
      stopEffect()
    }

    return { names, search, matchingNames, handleClick }
  }

}
</script>
