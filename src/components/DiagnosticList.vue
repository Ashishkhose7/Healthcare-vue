<script setup>

import { userDataStore } from '@/stores/store';
const userStore = userDataStore();

</script>
<template>
    <div class="diagnostic-list mt-5 px-3 py-2">
        <h2 class="font-bold">Diagnostic List</h2>
        <table class="overflow-hidden">
            <thead class="">
                <tr class="sticky top-0">
                    <th>Problem/Diagnosis</th>
                    <th>Description</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody class="text-slate-700 tablebody">
                <tr v-for="list in userStore.activeUsers.diagnostic_list">
                    <td>{{ list.name }}</td>
                    <td>{{  list.description }}</td>
                    <td>
                        <span class="status under-observation">{{ list.status }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>