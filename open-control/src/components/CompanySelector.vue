<template>
  <div>
    <q-card
      flat
      :class="`company_selector  ${
        isExpanded
          ? 'company_selector__expanded'
          : !companiesState.activeCompany.value
          ? 'bg-grey-2 '
          : 'bg-tint'
      }`"
    >
      <q-card-section
        class="row no-wrap"
        @click="!isExpanded ? (isExpanded = true) : (isExpandedInter = false)"
      >
        <!-- Company logo -->
        <q-img
          v-if="companiesState.activeCompany.value?.logo"
          :src="companiesState.activeCompany.value?.logo"
          :alt="companiesState.activeCompany.value?.name"
          class="company_selector__logo bg-white q-btn--round"
        />

        <!-- Default logo -->
        <svg
          v-else
          :fill="
            companiesState.activeCompany.value
              ? 'var(--q-accent)'
              : 'var(--q-grey)'
          "
          xmlns="http://www.w3.org/2000/svg"
          width="48px"
          height="48px"
          style="min-width: 48px"
          viewBox="0 0 100 100"
          xml:space="preserve"
        >
          <g>
            <path
              d="M82.466,60.066c-0.01-0.006-0.022-0.009-0.032-0.015l0.034-0.059l-17.31-9.994l17.39-10.04l-0.005-0.009
		c0.923-0.57,1.233-1.774,0.687-2.72c-0.012-0.021-0.029-0.038-0.042-0.059l0.011-0.006l-5.52-9.562l-0.007,0.004
		c-0.56-0.91-1.729-1.225-2.669-0.72l-0.004-0.006L57.578,36.942V16.793h-0.01c-0.033-1.083-0.919-1.953-2.01-1.953
		c-0.025,0-0.048,0.006-0.073,0.007v-0.013H44.445v0.007c-1.069,0.03-1.926,0.886-1.957,1.952h-0.006v20.115L25.032,26.833
		l-0.006,0.01c-0.956-0.513-2.151-0.183-2.697,0.764c-0.012,0.021-0.018,0.044-0.03,0.065l-0.01-0.006l-5.52,9.562l0.005,0.003
		c-0.508,0.94-0.196,2.11,0.712,2.672l-0.002,0.003l0.035,0.02c0.006,0.003,0.01,0.008,0.016,0.011s0.012,0.005,0.018,0.008
		l17.411,10.052l-17.028,9.832c-0.146,0.044-0.289,0.101-0.426,0.18c-0.961,0.553-1.29,1.781-0.743,2.74l-0.007,0.004l5.711,9.892
		l0.032-0.019c0.617,0.738,1.689,0.951,2.55,0.455c0.011-0.006,0.019-0.015,0.03-0.021l0.032,0.056l17.369-10.027v19.593
		c-0.035,0.149-0.058,0.302-0.058,0.461c0,1.108,0.895,2.005,2,2.014v0.007h11.422v-0.037c0.948-0.165,1.67-0.986,1.67-1.98
		c0-0.012-0.003-0.023-0.004-0.035h0.066V63.056l16.967,9.796c0.112,0.105,0.233,0.202,0.371,0.282
		c0.959,0.556,2.185,0.227,2.745-0.724l0.005,0.003l5.534-9.587c0.001-0.001,0.002-0.002,0.003-0.004s0.001-0.003,0.002-0.004
		l0.173-0.299l-0.03-0.018C83.678,61.598,83.327,60.564,82.466,60.066z"
            />
          </g>
        </svg>

        <!-- Company name -->
        <div
          class="company_selector__name q-pl-md ellipsis"
          :class="
            companiesState.activeCompany.value ? 'text-accent' : 'text-grey'
          "
        >
          {{
            companiesState.activeCompany.value?.['НаимСокрЮЛ'] ||
            companiesState.defaultCompany.value.name
          }}
        </div>

        <q-space />

        <!-- Toggle button -->
        <q-btn flat round class="company_selector__expand_btn">
          <template #default>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              style="transition: 0.275s"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                :d="
                  !isExpanded
                    ? 'M23.6667 9L14.3333 18.3333L5 9'
                    : 'M23.6667 18.334L14.3333 9.00064L5 18.334'
                "
                style="transition: 0.275s"
                :stroke="
                  companiesState.activeCompany.value
                    ? 'var(--q-accent)'
                    : 'var(--q-grey)'
                "
                stroke-width="3.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </template>
        </q-btn>
      </q-card-section>

      <q-slide-transition appear>
        <div v-if="isExpandedInter" class="q-px-md">
          <!-- Companies -->
          <div v-if="companiesState.companies.value.length">
            <div
              v-for="(company, index) in companiesState.companies.value"
              :key="company.id"
            >
              <q-slide-item
                flat
                v-ripple
                class="q-hoverable"
                :class="`${
                  companiesState.activeCompany.value === company
                    ? 'bg-tint text-accent'
                    : 'bg-grey-2'
                } ${index !== 0 ? 'q-mt-md' : ''}`"
                style="border-radius: 15px; transition: 0.4s"
                @click="
                  setActiveCompany(company);
                  isExpandedInter = false;
                "
                @right="detachCompany(company)"
                right-color="red"
              >
                <template
                  v-if="companiesState.companies.value.length > 1"
                  #right
                >
                  <q-icon name="delete" />
                </template>

                <q-card-section>
                  <div style="font-weight: 500" class="ellipsis-2-lines">
                    {{ company['НаимСокрЮЛ'] }}
                    <transition
                      appear
                      enter-active-class="animated zoomIn"
                      leave-active-class="animated zoomOut"
                    >
                      <q-icon
                        v-if="companiesState.activeCompany.value === company"
                        color="accent"
                        name="done"
                        style="font-weight: 600; font-size: 16px"
                      />
                    </transition>
                  </div>

                  <div class="row justify-between">
                    <div>
                      <span class="text-grey">ИНН:</span>
                      <span class="text-black q-pl-xs">
                        {{ company['ИНН'] }}
                      </span>
                    </div>

                    <div class="text-grey">
                      {{ date.formatDate(company['ДатаОГРН'], 'DD.MM.YYYY') }}
                    </div>
                  </div>
                </q-card-section>
              </q-slide-item>
            </div>
          </div>

          <!-- No companies text -->
          <div v-else class="text-grey text-center q-mt-md">Нет компаний</div>

          <!-- Add company -->
          <div class="q-my-md">
            <div class="row justify-center">
              <q-btn
                color="accent"
                round
                unelevated
                style="
                  width: 44px;
                  height: 44px;
                  background: linear-gradient(
                    136.37deg,
                    #f75d47 19.2%,
                    #e13925 75.6%
                  ) !important;
                  animation: gradient 1s ease-in-out infinite alternate;
                "
                @click="isSearching = !isSearching"
              >
                <template #default>
                  <svg
                    width="24px"
                    height="24px"
                    :style="`transition: 0.4s; ${
                      isSearching
                        ? 'transform: rotate(135deg);'
                        : 'transform: rotate(0deg);'
                    }`"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />

                    <g>
                      <g data-name="add">
                        <g>
                          <line
                            fill="none"
                            stroke="white"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            x1="12"
                            x2="12"
                            y1="19"
                            y2="5"
                          />

                          <line
                            fill="none"
                            stroke="white"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            x1="5"
                            x2="19"
                            y1="12"
                            y2="12"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </template>
              </q-btn>
            </div>

            <q-slide-transition>
              <div v-if="isSearching">
                <!-- Company search input -->
                <q-input
                  v-model="search"
                  outlined
                  color="accent"
                  class="q-mt-md"
                  :loading="loading"
                  placeholder="Поиск..."
                >
                  <template #append>
                    <q-btn
                      v-if="!loading"
                      round
                      unelevated
                      icon="search"
                      @click="fetchCompanies()"
                    />
                  </template>
                </q-input>

                <!-- Company search results -->
                <q-virtual-scroll
                  v-if="companiesSearchResults.length"
                  :style="`height: calc(${
                    companiesSearchResults.length === 1 ? '1' : '2'
                  } * 77.7px)`"
                  class="q-mt-md"
                  :items="companiesSearchResults"
                  separator
                  v-slot="{ item, index }"
                >
                  <div :key="index">
                    <q-card
                      v-ripple
                      flat
                      class="q-hoverable bg-grey-2"
                      :class="index !== 0 ? 'q-mt-md' : ''"
                      style="border-radius: 15px"
                      @click="
                        attachCompany(item);
                        isSearching = false;
                      "
                    >
                      <q-card-section>
                        <div style="font-weight: 500">
                          {{ item['НаимСокрЮЛ'] }}
                        </div>

                        <div class="row justify-between">
                          <div>
                            <span class="text-grey">ИНН:</span>
                            {{ item['ИНН'] }}
                          </div>

                          <div class="text-grey">
                            {{
                              date.formatDate(item['ДатаОГРН'], 'DD.MM.YYYY')
                            }}
                          </div>
                        </div>
                      </q-card-section>
                    </q-card>
                  </div>
                </q-virtual-scroll>
              </div>
            </q-slide-transition>
          </div>
        </div>
      </q-slide-transition>
    </q-card>

    <div v-if="isExpanded" style="width: 100%; height: 80px"></div>

    <DarkenScreen :show="isExpanded" @click="isExpandedInter = false" />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCompaniesStore } from 'stores/store-companies';
import { ref, watch } from 'vue';
import DarkenScreen from 'components/DarkenScreen.vue';
import { api } from 'boot/axios';
import { date, useQuasar } from 'quasar';

const $q = useQuasar();

const companiesState = storeToRefs(useCompaniesStore());
const { attachCompany, detachCompany, setActiveCompany } = useCompaniesStore();

/*
 * expansion
 */
const isExpanded = ref(false);
const isExpandedInter = ref(false);

watch(
  () => isExpanded.value,
  () => {
    setTimeout(() => {
      if (isExpanded.value) {
        isExpandedInter.value = true;
      }
    }, 100);
  }
);

watch(
  () => isExpandedInter.value,
  () => {
    setTimeout(() => {
      if (!isExpandedInter.value) {
        isExpanded.value = false;
      }
    }, 350);
  }
);

/*
 * companies search
 */
const search = ref('');
const isSearching = ref(false);

const companiesSearchResults = ref([]);
const loading = ref(false);

const fetchCompanies = () => {
  loading.value = true;

  api
    .get(
      `https://api-fns.ru/api/search?q=${search.value}&filter=active&key=aca84a2ffd660660809b3aa3882731a720fead3f`
    )
    .then((response) => {
      companiesSearchResults.value = response.data.items.map(
        (item) => Object.values(item)[0]
      );
      // localStorage.setItem('companies', JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>

<style scoped lang="scss">
.company_selector {
  border-radius: 20px;
  z-index: 2001;
  transition: 0.5s;
  position: relative;
}

.company_selector__expanded {
  background: white;
  z-index: 2002;
  transition: transform 0.5s ease-in-out;
  transform: scale(1.05);
  position: absolute;
  //top: calc(14px + env(safe-area-inset-top));
  //top: calc(102px + env(safe-area-inset-top));
  width: calc(100% - 48px);
  box-shadow: rgba(0, 0, 0, 0.2) 0 20px 30px !important;
}

.company_selector__expand_btn,
.company_selector__logo {
  width: 48px;
  height: 48px;
}

.company_selector__name {
  line-height: 48px;
  font-size: 16px;
  font-weight: 500;
}
</style>
