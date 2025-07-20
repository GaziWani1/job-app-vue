<script setup>
// composition api
import { onMounted, ref } from 'vue';

const name = ref('gazi wani');
const status = ref('Active');
const tasks = ref([
    'Task One',
    'Task Two',
    'Task Three',
]);
const newTask = ref('');

const toggleStatus = () => {
    if (status.value === 'active')
        status.value = 'pending';
    else if (status.value === 'pending')
        status.value = 'inactive';
    else status.value = 'active';
};
const addTask = () => {
    if (newTask.value.trim() !== '') { tasks.value.push(newTask.value); newTask.value = '' }
}

onMounted(async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        tasks.value = data.map((task) => task?.title)
    } catch (error) {
        console.log(error)
    }
})

</script>

<template>
    <h1>
        {{ name }}
    </h1>
    <!-- <p v-if="status === 'active'">User is Active</p>
    <p v-else-if="status === 'pending'">
        User is pending
    </p>
    <p v-else>User is Inactive</p> -->
    <form @submit.prevent="addTask">
        <label for="newTask">
            Add Task
        </label>
        <input type="text" id="newTask" name="newTask" v-model="newTask">
        <button type="submit">submit</button>
    </form>
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
