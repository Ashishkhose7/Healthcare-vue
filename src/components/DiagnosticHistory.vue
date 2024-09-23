<script setup>
import Chart from './Chart.vue';
import DiagnosticList from './DiagnosticList.vue';
import { userDataStore } from '@/stores/store';
const userStore = userDataStore();
</script>

<template>
    <div class="diagnosis-history">
        <div class="chart-info">
            <h2 class="font-bold mb-4">Diagnosis History</h2>
            <div class="chart flex justify-between gap-2 xl:gap-6 p-2 rounded-lg h-[250px]">
                <div class="chart-section flex-1 flex flex-col gap-2">
                    <div class="flex items-center justify-between">
                        <h4 class="font-semibold text-base text-slate-600">
                            Blood Pressure
                        </h4>
                        <span class="text-sm text-slate-600 font-semibold">Last 6 months&nbsp;
                            <svg class="inline" xmlns="http://www.w3.org/2000/svg" width="10" height="10"
                                viewBox="0 0 10.646 6">
                                <path id="expand_more_FILL0_wght300_GRAD0_opsz24"
                                    d="M271.741-608.384a.958.958,0,0,1-.335-.057.827.827,0,0,1-.3-.2l-4.478-4.479a.722.722,0,0,1-.212-.52.7.7,0,0,1,.212-.53.715.715,0,0,1,.525-.217.715.715,0,0,1,.525.217l4.059,4.059,4.059-4.059a.722.722,0,0,1,.52-.212.7.7,0,0,1,.53.212.715.715,0,0,1,.217.525.715.715,0,0,1-.217.525l-4.478,4.479a.826.826,0,0,1-.3.2A.958.958,0,0,1,271.741-608.384Z"
                                    transform="translate(-266.42 614.384)" />
                            </svg>
                        </span>
                    </div>
                    <div class="line-chart w-[400px] h-[260px]" v-if="userStore.getactiveUsers.diagnosis_history">
                        <!-- <canvas id="myChart"></canvas> -->
                         <Chart></Chart>
                    </div>
                </div>
                <div  v-if="userStore.getactiveUsers.diagnosis_history" class="flex-1 chart-information bg-transparent px-2">
                    <span
                        class="circle inline-block h-[10px] w-[10px] rounded-full bg-pink-500 text-xs"></span><span
                        class="text-base mx-1 font-semibold my-1">Systolic</span> <br />
                    <span v-if="userStore?.getactiveUsers?.diagnosis_history" class="font-semibold text-xl sysvalue inline-block my-1">{{ userStore?.getactiveUsers?.diagnosis_history[0]?.blood_pressure?.systolic?.value }}</span><br />
                    <svg v-if="userStore?.getactiveUsers?.diagnosis_history[0]?.blood_pressure?.systolic?.levels !== 'Normal'" class="inline" xmlns="http://www.w3.org/2000/svg" width="8" height="8"
                        viewBox="0 0 10 5.479">
                        <path id="ArrowUp"
                            d="M4.364,5.2.186,1.024A.673.673,0,0,1,.05.832.532.532,0,0,1,0,.6.606.606,0,0,1,.165.18.56.56,0,0,1,.6,0H9.4a.56.56,0,0,1,.434.181A.611.611,0,0,1,10,.6a1.85,1.85,0,0,1-.186.421L5.636,5.2a.962.962,0,0,1-.3.21.9.9,0,0,1-.677,0A.963.963,0,0,1,4.364,5.2Z"
                            transform="translate(10 5.479) rotate(180)" fill="#072635" />
                    </svg>
                    <span class="text-base text-slate-600 font-normal syslevel ml-1">{{ userStore?.getactiveUsers?.diagnosis_history[0]?.blood_pressure?.systolic?.levels }}</span>
                    <hr class="my-3" />
                    <span
                        class="circle inline-block h-[10px] w-[10px] rounded-full bg-purple-500 text-xs"></span><span
                        class="text-base mx-1 font-semibold">Diastolic</span>
                    <br />
                    <span  v-if="userStore?.getactiveUsers?.diagnosis_history" class="font-semibold text-xl diavalue inline-block my-2">{{ userStore?.getactiveUsers?.diagnosis_history[0]?.blood_pressure?.diastolic?.value }}</span><br />
                    <svg v-if="userStore?.getactiveUsers?.diagnosis_history[0]?.blood_pressure?.diastolic?.levels !== 'Normal'" class="inline" xmlns="http://www.w3.org/2000/svg" width="8" height="8"
                        viewBox="0 0 9.999 5.479">
                        <path id="ArrowDown"
                            d="M333.518-544.8l-4.177-4.178a.673.673,0,0,1-.136-.193.532.532,0,0,1-.05-.228.606.606,0,0,1,.165-.424.56.56,0,0,1,.434-.18h8.8a.56.56,0,0,1,.434.181.611.611,0,0,1,.165.423,1.85,1.85,0,0,1-.186.421l-4.177,4.177a.962.962,0,0,1-.3.21.851.851,0,0,1-.338.066.851.851,0,0,1-.339-.066A.963.963,0,0,1,333.518-544.8Z"
                            transform="translate(-329.155 549.999)" fill="#072635" />
                    </svg>
                    <span class="text-base text-slate-600 font-normal dialevel ml-1">{{ userStore?.getactiveUsers?.diagnosis_history[0]?.blood_pressure?.diastolic?.levels }}</span>
                </div>
            </div>
            <div class="vitals"  v-if="userStore.getactiveUsers.diagnosis_history">
                <div class="vital-item respiratory">
                    <img src="../assets/img/respiratory rate.png" alt="" class="h-[60px]" />
                    <p class="text-base mt-1">Respiratory Rate</p>
                    <p v-if="userStore?.getactiveUsers?.diagnosis_history" class="font-bold text-xl resrate">{{userStore?.getactiveUsers?.diagnosis_history[0]?.respiratory_rate?.value }} bpm</p>
                    <p class="mt-2 vital-item-level reslevel">{{userStore?.getactiveUsers?.diagnosis_history[0]?.respiratory_rate?.levels }}</p>
                </div>
                <div class="vital-item temperature">
                    <img src="../assets/img/temperature.png" alt="" class="h-[60px]" />
                    <p class="text-base mt-1">Temperature</p>
                    <p v-if="userStore?.getactiveUsers?.diagnosis_history" class="font-bold text-xl temp">{{userStore?.getactiveUsers?.diagnosis_history[0]?.temperature?.value }}°F</p>
                    <p class="mt-2 vital-item-level templevel">{{userStore?.getactiveUsers?.diagnosis_history[0]?.temperature?.levels }}</p>
                </div>
                <div class="vital-item heart-rate">
                    <img src="../assets/img/HeartBPM.png" alt="" class="h-[60px]" />
                    <p class="text-base mt-1">Heart Rate</p>
                    <p  v-if="userStore?.getactiveUsers?.diagnosis_history"  class="font-bold text-xl heartrate">{{userStore?.getactiveUsers?.diagnosis_history[0]?.heart_rate?.value }} bpm</p>
                    <svg v-if="userStore?.getactiveUsers?.diagnosis_history[0]?.heart_rate?.levels !== 'Normal'" class="inline-block" xmlns="http://www.w3.org/2000/svg" width="8" height="8"
                        viewBox="0 0 9.999 5.479">
                        <path id="ArrowDown"
                            d="M333.518-544.8l-4.177-4.178a.673.673,0,0,1-.136-.193.532.532,0,0,1-.05-.228.606.606,0,0,1,.165-.424.56.56,0,0,1,.434-.18h8.8a.56.56,0,0,1,.434.181.611.611,0,0,1,.165.423,1.85,1.85,0,0,1-.186.421l-4.177,4.177a.962.962,0,0,1-.3.21.851.851,0,0,1-.338.066.851.851,0,0,1-.339-.066A.963.963,0,0,1,333.518-544.8Z"
                            transform="translate(-329.155 549.999)" fill="#072635" />
                    </svg>
                    <p class="inline-block mt-2 vital-item-level heartlevel ml-1">
                        {{ userStore?.getactiveUsers?.diagnosis_history[0]?.heart_rate?.levels }}               
                    </p>
                </div>
            </div>
        </div>
        <DiagnosticList></DiagnosticList>
    </div>

</template>