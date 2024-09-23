<script setup>
    import { userDataStore } from '@/stores/store';
    const userStore = userDataStore();
    const {usersdata}  = defineProps(['usersdata'])
    
</script>
<template>
    <li v-for="(user, index) in usersdata" :key="index" class="flex items-center justify-between mb-2 cursor-pointer  py-3 px-3" @click="userStore.setActiveUser(index)" :class="user.phone_number == userStore.getactiveUsers.phone_number ? 'bg-[#D8FCF7]':'hover:bg-slate-100' ">
        <div class="patient-info1 flex items-center gap-1">
            <img class="mr-1" :src="user.profile_picture" alt="" style="height: 35px; width: 35px;">
            <div style="font-size: 13px;" class=" font-semibold">{{user.name}}<br><span class="font-normal text-slate-500">{{user.gender+", "+user.age}}</span></div>
        </div>
        <div class="more">
        <img src="../assets/img/more_horiz_FILL0_wght300_GRAD0_opsz24.png" alt="" width="14">
        </div>
    </li>
</template>
<style scoped >

</style>