<template>
  <div class="home">
    <p>Hugo dev</p>
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>

import { ref } from 'vue'

export default {
  name : 'home',
  setup() {
    console.log(this)

    // const p = ref(null)
    // console.log(p, p.value)

    const name = ref('mario')
    const age = ref(30)

    const handleClick = () => {
      // console.log(p, p.value)
      // p.value.classList.add('test')
      // p.value.textContent = 'hello ninjas'
      name.value = 'luigi'
      age.value = 35
      
    }

    return { name, age, handleClick}
  },
  created() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
  },
  data() {
    return {
      // age: 40,
      score: 5
    }
  }
}
</script>
