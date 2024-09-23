<script setup>
import { userDataStore } from './stores/store';
import Header from './components/Header.vue';
import PatientList from './components/PatientList.vue';
import PatientInfo from './components/PatientInfo.vue';
import LabResult from './components/LabResult.vue';
import DiagnosticHistory from './components/DiagnosticHistory.vue';
import ProgressSpinner from 'primevue/progressspinner';
import { computed, onMounted } from 'vue';

const userStore = userDataStore();
onMounted(async () => {
  
  let username = 'coalition';
  let password = 'skills-test';
  let auth = btoa(`${username}:${password}`);
  let headers = {
      'Authorization': `Basic ${auth}`
  }

  const url = 'https://fedskillstest.coalitiontechnologies.workers.dev';
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: headers
        } );
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if(data){
          userStore.setUserData(data);
          userStore.setActiveUser(3);
        }

    } catch (error) {
        console.error('Error fetching data:', error);
    }
})

const overlay = computed(()=>{
    return userStore.getloadingStatus;
})


</script>

<template>
  <main class="px-2 py-2">
    <v-overlay v-model="overlay" class="text-center m-auto flex justify-center items-center">
        <ProgressSpinner style="width: 40px; height: 40px" strokeWidth="6" fill="transparent"
        animationDuration=".5s"/>
    </v-overlay>

    <Header/>

      <section>
        <div class="main-content">
            <div class="patient-list">
                <div class="patients p-3 flex items-center justify-between">
                    <h2 class="font-bold">Patients</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 17.995 18">
                        <path id="search_FILL0_wght300_GRAD0_opsz24"
                            d="M142.675-811.574a6.293,6.293,0,0,1-4.626-1.895,6.293,6.293,0,0,1-1.895-4.626,6.293,6.293,0,0,1,1.895-4.626,6.293,6.293,0,0,1,4.626-1.895,6.293,6.293,0,0,1,4.626,1.895,6.293,6.293,0,0,1,1.895,4.626,6.254,6.254,0,0,1-.383,2.182,6.1,6.1,0,0,1-1.023,1.808l6.135,6.135a.773.773,0,0,1,.227.557.754.754,0,0,1-.227.567.765.765,0,0,1-.562.232.765.765,0,0,1-.562-.232l-6.135-6.135a6.1,6.1,0,0,1-1.839,1.033,6.318,6.318,0,0,1-2.151.373Zm0-1.6a4.749,4.749,0,0,0,3.491-1.43,4.749,4.749,0,0,0,1.43-3.491,4.749,4.749,0,0,0-1.43-3.491,4.749,4.749,0,0,0-3.491-1.43,4.749,4.749,0,0,0-3.491,1.43,4.749,4.749,0,0,0-1.43,3.491,4.749,4.749,0,0,0,1.43,3.491A4.749,4.749,0,0,0,142.675-813.173Z"
                            transform="translate(-136.155 824.614)" fill="#072635" />
                    </svg>
                </div>
                <div class="patients-list pr-1">
                    <ul>
                        <PatientList :usersdata="userStore.getuserData"></PatientList>
                    </ul>
                </div>
            </div>
            <DiagnosticHistory></DiagnosticHistory>
            <div class="patient-info-main flex flex-col">
                <PatientInfo></PatientInfo>
                <LabResult></LabResult>
            </div>
        </div>
    </section>
  </main>
</template>

<style scoped>

</style>
