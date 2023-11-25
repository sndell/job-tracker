<template>
  <form @submit="onSubmit" class="flex flex-col items-center gap-2 text-primary">
    <VInput name="email" placeholder="Email" type="email" />
    <VInput name="password" placeholder="Password" type="password" />
    <button type="button" class="hover:text-primaryDark">Reset password</button>
    <button type="submit" class="w-full py-1 rounded-lg bg-secondary">
      Login
    </button>
    <div>
      No account?
      <button @click="toggleMode" class="text-primaryDark">Register</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import { object, string } from 'yup';

defineProps<{ toggleMode: () => void }>();

const { login } = await useAuth()

interface LoginForm {
  email: string;
  password: string;
}

const { handleSubmit, setFieldError } = useForm<LoginForm>({
  validationSchema: toTypedSchema(
    object({
      email: string().email().required('Email is required'),
      password: string().required('Password is required'),
    })
  ),
});

const onSubmit = handleSubmit(async (values) => {
  try {
    const { email, password } = values
    await login(email, password)
    navigateTo('/')
  } catch (err) {
    switch ((err as any).gqlErrors[0].message) {
      case 'Invalid email':
        setFieldError('email', "Email doesn't exist")
        break;
      case 'Invalid password':
        setFieldError('email', "Password is incorrect")
        break;
      default:
        console.log('Internal server error');
    }
  }
});

</script>
