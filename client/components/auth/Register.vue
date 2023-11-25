<template>
  <form @submit="onSubmit" class="flex flex-col items-center gap-2 text-primary">
    <VInput name="username" placeholder="Username" type="text" />
    <VInput name="email" placeholder="Email" type="email" />
    <VInput name="password" placeholder="Password" type="password" />
    <VInput name="password_confirm" placeholder="Confirm password" type="password" />
    <VCheckbox name="agree_to_tos" label="Agree to our TOS" />
    <button type="submit" class="w-full py-1 rounded-lg bg-secondary">
      Register
    </button>
    <div>
      Already registered?
      <button @click="toggleMode" class="text-primaryDark">Login</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import { boolean, ref, object, string } from 'yup';

defineProps<{ toggleMode: () => void }>();


interface LoginForm {
  email: string;
  username: string;
  password: string;
}

const { handleSubmit, setFieldError } = useForm<LoginForm>({
  validationSchema: toTypedSchema(
    object({
      email: string().email().required('Email is required'),
      username: string().min(3).required('Username is required'),
      password: string().required('Password is required'),
      password_confirm: string().oneOf([ref('password')], 'Passwords must match').required('Password is required'),
      agree_to_tos: boolean().required('You must agree')
    })
  ),
});

const { register } = await useAuth();

const onSubmit = handleSubmit(async (values) => {
  try {
    const { email, username, password } = values;
    await register(email, username, password);
    navigateTo('/')
  } catch (err) {
    switch ((err as any).gqlErrors[0].message) {
      case 'Email already in use':
        setFieldError('email', "Email already in use");
        break;
      default:
        console.log('Internal server error');
    }
  }
});
</script>
