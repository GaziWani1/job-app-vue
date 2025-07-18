<script>
export default {
	data() {
		return {
			name: 'gazi',
			status: 'pending',
			tasks: [
				'Task One',
				'Task Two',
				'Task Three',
			],
			link: 'https://google.com',
		};
	},
	methods: {
    toggleStatus(){
      if(this.status === 'active') this.status = 'pending'
      else if(this.status === 'pending') this.status = 'inactive'
      else this.status = 'active'
    }
  },
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
  <br>
  <!-- <button v-on:click="toggleStatus">
    Change Status
  </button> -->
  <button @:click="toggleStatus">
    Change Status
  </button>
</template>
