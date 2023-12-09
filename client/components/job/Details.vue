<template>
  <div>
    <form @submit="onSubmit" id="detailsForm" class="flex flex-col gap-2">
      <VInput
        name="name"
        :placeholder="job.companyName || 'Enter company name'"
        label="Company name"
        color="secondary"
      />
      <VInput
        name="person"
        :placeholder="job.contactPerson || 'Enter contact\'s  person'"
        label="Contact person"
        color="secondary"
      />
      <VInput
        name="email"
        :placeholder="job.contactEmail || 'Enter contact\'s email'"
        label="Contact's  email"
        color="secondary"
      />
      <VInput
        name="phone"
        :placeholder="job.contactPhone || 'Enter contact\'s phone'"
        label="Contact's phone"
        color="secondary"
      />
      <VInput
        name="linkedIn"
        :placeholder="
          job.contactLinkedIn || 'Enter contact\'s LinkedIn profile'
        "
        label="Contact's LinkedIn"
        color="secondary"
      />
      <VInput
        name="website"
        :placeholder="job.companyWebsite || 'Enter job URL'"
        label="Job URL"
        color="secondary"
      />
      <VRadioGroup
        name="status"
        label="Job status"
        :options="[
          { value: 'pending', label: 'Pending' },
          { value: 'accepted', label: 'Accepted' },
          { value: 'rejected', label: 'Rejected' },
        ]"
      />
      <!-- <VRadio name="status" value="pending" label="Pending" />
      <VRadio name="status" value="accepted" label="Accepted" />
      <VRadio name="status" value="rejected" label="Rejected" /> -->
    </form>
  </div>
</template>

<script setup lang="ts">
import { array, object, string } from 'yup';

defineProps<{ job: Omit<Job, 'interactions'> }>();

interface DetailsForm {
  name: string;
  website: string;
  email: string;
  person: string;
  phone: string;
  linkedIn: string;
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
  console.log('handled');

  try {
    console.log(values);
  } catch (err) {
    console.error(err);
  }
});
</script>
