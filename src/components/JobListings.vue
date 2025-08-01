<script setup>
import { onMounted , reactive } from 'vue';
import JobListing from './JobListing.vue';
import axios from 'axios';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

defineProps({
	limit: {
		type: Number,
		default: 6,
	},
	showButton: {
		type: Boolean,
		default: false,
	},
});

const state = reactive({
    jobs : [],
    isLoading : true
})

onMounted(async () => {
	try {
        const res = await axios.get('http://localhost:5000/jobs');
        state.jobs= res.data;
	} catch (error) {
        console.error('error fetching jobs' , error)
    } finally {
        state.isLoading = false
    }

});
</script>

<template>
	<section class="bg-blue-50 px-4 py-10">
		<div class="container-xl lg:conatiner m-auto">
			<h2
				class="text-3xl font-bold text-green-500 mb-6 text-center">
				Browse Jobs
			</h2>
			<div
				class="grid gird-cols-1 md:grid-cols-3 gap-6">
				<JobListing
					v-for="job in state.jobs.slice(0, limit)"
					:key="job.id"
					:job="job" />
			</div>
		</div>
	</section>

    <div v-if="state.isLoading" class=" text-center text-gray-500 py-6">
<PulseLoader />
    </div>

	<section
		v-if="showButton"
		class="m-auto max-w-lg my-10 px-6">
		<a
			href="/jobs"
			class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
			>View All Jobs</a
		>
	</section>
</template>
