<template>
  <Teleport to="body">
    <div
      @click="close(null)"
      class="fixed inset-0 grid flex-1 bg-black/50 place-items-center"
    >
      <div
        @click="(e) => e.stopPropagation()"
        class="p-2 rounded-lg bg-primary"
      >
        <form @submit="onSubmit" class="flex flex-col gap-2">
          <VInput
            name="way"
            :placeholder="'Enter the way you interacted'"
            label="Way"
            color="secondary"
          />
          <VTextarea
            name="summary"
            :placeholder="'Enter interaction summay'"
            label="Summary"
            color="secondary"
          />
          <button class="py-1 rounded-lg bg-secondary">Update</button>
          <button
            @click="handleDelete"
            type="button"
            class="py-1 bg-red-400 rounded-lg"
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { object, string } from 'yup';

document.body.classList.add('overflow-hidden');

const props = defineProps<{
  close: (id: null) => void;
  id: string;
  refresh: () => void;
}>();

onBeforeUnmount(() => {
  document.body.classList.remove('overflow-hidden');
});

interface InteractionForm {
  way: string;
  summary: string;
}

const handleDelete = async () => {
  try {
    await GqlDeleteInteraction({
      id: props.id,
    });

    props.refresh();
    props.close(null);
  } catch (err) {
    console.error(err);
  }
};

const { handleSubmit } = useForm<InteractionForm>({
  validationSchema: toTypedSchema(
    object({
      way: string(),
      summary: string(),
    })
  ),
});

const onSubmit = handleSubmit(async (values) => {
  try {
    console.log(values);

    await GqlUpdateInteraction({
      id: props.id,
      summary: values.summary,
      way: values.way,
    });

    props.refresh();
  } catch (err) {
    console.error(err);
  }
});
</script>
