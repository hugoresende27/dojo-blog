<template>
  <div class="home">
    <p>Hugo dev</p>

    <a href="/new">    <button>New Home</button></a>
    <a href="/final">    <button>Final</button></a>
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">Add 1 to age</button> <br>


    <hr>
    <p ref="p">My name is {{ ninjaOne.name }} and my age is {{ ninjaOne.age }} - {{ nameTwo }}</p>
    <button @click="updateNinjaOne">Update</button> <br>
    <input type="text" v-model="name">

    <hr>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }}</p>
    <p>{{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update</button> <br>
  </div>
</template>

<script>

import { ref, reactive } from 'vue'

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

    const ninjaOne = ref({ name:'hugo', age: 35})
    const ninjaTwo = reactive({ name: 'dev', age: 99 })

    const nameOne = ref('mario')
    const nameTwo = reactive('hugo')


    const updateNinjaOne = () => {
      ninjaOne.value.age = 40
      ninjaOne.value.name = 'Zé'
    }
    const updateNinjaTwo = () => {
      ninjaTwo.age = 55
      ninjaTwo.name = 'Gandalf'
      // nameTwo = reactive('BRAAAAA')
    }

    // return { ninjaOne, updateNinjaOne } 

    return { name, age, handleClick, ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo, nameOne, nameTwo}
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
