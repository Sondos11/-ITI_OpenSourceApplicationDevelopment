<template>
    <table class="table">
        <tr>
            <th>
                Name
            </th>
            <th>
                Age
            </th>
        </tr>
        <tr v-for="(data, index) in users" :key="index">
            <td>
                {{ data.name }}
            </td>
            <td>
                {{ data.age }}
            </td>
            <td @click="deleteUser(index)" class="btn btn-danger">
                delete
            </td>
        </tr>
    </table>
</template>

<script>
export default {
    name: "userChild",
    inject: ["users"],
    methods: {
        deleteUser(index) {
            this.$emit('delete-user', index);
        },
    }
};
</script>

<style scoped></style>