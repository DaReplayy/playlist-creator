<template>
  <form @submit.prevent="handleSubmit">
      <h3>Login</h3>
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <div class="error" v-if="error">{{ error }}</div>
      <button>Log in</button>
  </form>
</template>

<script>
import useLogin from '@/composables/useLogin'

export default {
    setup() {
        const { error, login } = useLogin()

        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            const res = await login(email.value, password.value)
            if (!error.value) {
                console.log('user logged in')
            }
        }


        return { email, password, handleSubmit, error }
    }
}
</script>

<style>

</style>