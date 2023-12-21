<template>
  <div>
    <form @submit="onSubmit" id="detailsForm" class="flex flex-col gap-2">
      <VInput
        name="name"
        :placeholder="'Enter company name'"
        label="Company name"
        color="secondary"
        :default-value="job.companyName"
      />
      <VInput
        name="person"
        :placeholder="'Enter contact\'s  person'"
        label="Contact person"
        color="secondary"
        :default-value="job.contactPerson"
      />
      <VInput
        name="email"
        :placeholder="'Enter contact\'s email'"
        label="Contact's  email"
        color="secondary"
        :default-value="job.contactEmail"
      />
      <VInput
        name="phone"
        :placeholder="'Enter contact\'s phone'"
        label="Contact's phone"
        color="secondary"
        :default-value="job.contactPhone"
      />
      <VInput
        name="linkedIn"
        :placeholder="'Enter contact\'s LinkedIn profile'"
        label="Contact's LinkedIn"
        color="secondary"
        :default-value="job.contactLinkedIn"
      />
      <VInput
        name="website"
        :placeholder="'Enter job URL'"
        label="Job URL"
        color="secondary"
        :default-value="job.companyWebsite"
      />
      <VRadioGroup
        name="status"
        label="Job status"
        :options="[
          { value: 'PENDING', label: 'Pending', defaultChecked: true },
          { value: 'ACCEPTED', label: 'Accepted' },
          { value: 'REJECTED', label: 'Rejected' },
        ]"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import { object, string } from 'yup';

const props = defineProps<{ job: Job }>();

const { updateJob } = await useJobs();

interface DetailsForm {
  name: string;
  website: string;
  email: string;
  person: string;
  phone: string;
  linkedIn: string;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
}

const { handleSubmit } = useForm<DetailsForm>({
  validationSchema: toTypedSchema(
    object({
      name: string(),
      website: string(),
      email: string(),
      person: string(),
      phone: string(),
      linkedIn: string(),
      status: string(),
    })
  ),
});

const onSubmit = handleSubmit(async (values) => {
  try {
    await updateJob(props.job.id, { ...values });
  } catch (err) {
    console.error(err);
  }
});
</script>
