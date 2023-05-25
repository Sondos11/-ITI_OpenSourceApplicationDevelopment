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
        <tr v-for="(data, index) in admins" :key="data.name">
            <td>
                {{ data.name }}
            </td>
            <td>
                {{ data.age }}
            </td>
            <td @click="deleteAdmin(index)" class="btn btn-danger">
                delete
            </td>
        </tr>
    </table>
</template>
<script>
export default {
    name: "adminChild",
    inject: ["admins"],
    methods: {
        deleteAdmin(index) {
            this.$emit('delete-admin', index);
        },
    }
};
</script>
  
<style scoped></style>