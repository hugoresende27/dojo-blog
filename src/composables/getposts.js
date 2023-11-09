
import { ref } from 'vue'

const getPosts = () => {
    
      // const posts = ref ([
        //     { title: 'welcome to the blog', body: 'Loreum Ipsum', id: 1},
        //     { title: 'top 5 CSS tips', body: 'Loreum Ipsum', id: 2},
        // ])

        const posts = ref([])
        const error = ref(null)

        const showPosts = ref(true)

        const load = async () => {
            try {
                let data = await fetch('http://localhost:3000/data')
                console.log(data)
                if(!data.ok) {
                    throw Error('no data available')
                }
                posts.value = await data.json()
            } catch (err) {
                error.value = err.message
                console.log(err.value)
            }
        }

        return { posts, error, load, showPosts }
}

export default getPosts