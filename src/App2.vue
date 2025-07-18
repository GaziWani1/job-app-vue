<script setup>
// composition api
import { ref } from 'vue';

		const name = ref('gazi wani');
		const status = ref('Active');
		const tasks = ref([
			'Task One',
			'Task Two',
			'Task Three',
		]);
		const toggleStatus = () => {
			if (status.value === 'active')
				status.value = 'pending';
			else if (status.value === 'pending')
				status.value = 'inactive';
			else status.value = 'active';
		};
</script>

<template>
    <h1>
        {{ name }}
    </h1>
    <p v-if="status === 'active'">User is Active</p>
    <p v-else-if="status === 'pending'">
        User is pending
    </p>
    <p v-else>User is Inactive</p>
    <h3>Task</h3>
    <ul>
        <li v-for="task in tasks">{{ task }}</li>
    </ul>
    <a v-bind:href="link">click to google</a>
    <br />
    <!-- <button v-on:click="toggleStatus">
    Change Status
  </button> -->
    <button @:click="toggleStatus">
        Change Status
    </button>
</template>
