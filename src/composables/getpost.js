import { ref } from 'vue'

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)


    const load = async () => {
        try {
            let data = await fetch('http://localhost:3000/data/' + id)
            console.log(data)
            if(!data.ok) {
                throw Error('that post does not exist !!!')
            }
            post.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(err.value)
        }
    }

    return { post, error, load }
}

export default getPost