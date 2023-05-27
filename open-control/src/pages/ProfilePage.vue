<template>
  <PageComponent>
    <PageBody>
      <div
        class="container"
        style="padding-bottom: 16px; position: sticky; top: 0; z-index: 1"
      >
        <q-tabs
          v-model="tab"
          class="text-accent bg-tint q-mb-lg shadow-3"
          inline-label
          style="border-radius: 20px"
        >
          <q-tab name="profile" icon="account_circle" label="Профиль" no-caps />
          <q-tab name="companies" icon="store" label="Компании" no-caps />
        </q-tabs>
      </div>

      <q-tab-panels v-model="tab" animated>
        <!-- Profile -->
        <q-tab-panel name="profile">
          <div class="container" style="margin-top: 0; padding-top: 0">
            <!-- Avatar -->
            <div class="row justify-center relative-position">
              <q-avatar size="200px" color="tint" text-color="accent">
                <q-img
                  v-if="userCopy?.avatar"
                  :src="userCopy?.avatar"
                  :alt="userCopy?.name"
                  style="object-fit: cover; height: 100%"
                />

                <template v-else>{{
                  userCopy?.name
                    .split(' ')
                    .map((word) => word.charAt(0))
                    .join('')
                    .toUpperCase()
                    .slice(0, 2)
                }}</template>

                <q-btn
                  unelevated
                  text-color="accent"
                  icon="more_horiz"
                  round
                  class="bg-tint"
                  style="
                    border: 4px solid white;
                    position: absolute;
                    bottom: 8px;
                    right: 8px;
                  "
                >
                  <q-menu
                    transition-show="jump-down"
                    transition-hide="jump-up"
                    anchor="bottom end"
                    self="top right"
                  >
                    <div class="column">
                      <!-- Upload avatar -->
                      <q-btn
                        flat
                        color="accent"
                        no-caps
                        align="left"
                        class="q-menu__button"
                        @click="handleSetRandomAvatar()"
                      >
                        <template #default>
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15"
                              stroke="var(--q-accent)"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>

                          <div class="q-pl-sm">Загрузить</div>
                        </template>
                      </q-btn>

                      <template v-if="userCopy?.avatar">
                        <q-separator class="q-my-sm" />

                        <!-- Delete avatar -->
                        <q-btn
                          flat
                          label="Удалить"
                          icon="delete"
                          color="grey"
                          no-caps
                          align="left"
                          class="q-menu__button"
                          @click="
                            userCopy.avatar = null;
                            handleUserUpdate();
                          "
                        />
                      </template>
                    </div>
                  </q-menu>
                </q-btn>
              </q-avatar>
            </div>

            <!-- Stored Name -->
            <div class="text-center text-h6 q-py-md ellipsis">
              {{ userCopy?.name || '**** ******' }}
            </div>

            <form @submit.prevent="handleUserUpdate()">
              <!-- Name -->
              <q-input
                v-model="userCopy.name"
                outlined
                label="ФИО"
                color="accent"
                tabindex="1"
                class="q-mt-lg"
              >
                <template #prepend>
                  <q-icon name="o_account_circle" />
                </template>
              </q-input>

              <!-- Email -->
              <q-input
                v-model="userCopy.email"
                outlined
                label="E-mail"
                type="email"
                color="accent"
                tabindex="1"
                class="q-mt-lg"
              >
                <template #prepend>
                  <q-icon name="alternate_email" />
                </template>
              </q-input>

              <!-- Phone number -->
              <q-input
                v-model="userCopy.phone"
                outlined
                label="Рабочий телефон"
                color="accent"
                mask="+7 (###) ###-##-##"
                unmasked-value
                tabindex="1"
                class="q-mt-lg"
              >
                <template #prepend>
                  <q-icon name="call" />
                </template>
              </q-input>

              <!-- Position -->
              <q-input
                v-model="userCopy.position"
                outlined
                label="Должность"
                color="accent"
                unmasked-value
                tabindex="1"
                class="q-mt-lg"
              >
                <template #prepend>
                  <q-icon name="label" />
                </template>
              </q-input>

              <q-btn
                label="Сохранить"
                flat
                icon-right="done"
                :disable="
                  !userCopy.name ||
                  !userCopy.email ||
                  !userCopy.phone ||
                  !userCopy.position
                "
                no-caps
                class="submit-btn full-width q-mt-lg"
                text-color="white"
                type="submit"
              />
            </form>

            <q-separator class="q-my-lg" />

            <!-- Logout -->
            <q-card
              flat
              v-ripple
              class="bg-grey-2 q-hoverable push-btn"
              @click="handleLogout()"
            >
              <q-card-section class="row no-wrap">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.8 2H14.2C11 2 9 4 9 7.2V11.25H15.25C15.66 11.25 16 11.59 16 12C16 12.41 15.66 12.75 15.25 12.75H9V16.8C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2Z"
                    fill="#929E9C"
                  />
                  <path
                    d="M4.56141 11.2498L6.63141 9.17984C6.78141 9.02984 6.85141 8.83984 6.85141 8.64984C6.85141 8.45984 6.78141 8.25984 6.63141 8.11984C6.34141 7.82984 5.86141 7.82984 5.57141 8.11984L2.22141 11.4698C1.93141 11.7598 1.93141 12.2398 2.22141 12.5298L5.57141 15.8798C5.86141 16.1698 6.34141 16.1698 6.63141 15.8798C6.92141 15.5898 6.92141 15.1098 6.63141 14.8198L4.56141 12.7498H9.00141V11.2498H4.56141Z"
                    fill="#929E9C"
                  />
                </svg>
                <div
                  class="q-card__title q-pl-md text-grey"
                  style="margin: auto 0"
                >
                  Выйти
                </div>
              </q-card-section>
            </q-card>
          </div>
        </q-tab-panel>

        <!-- Companies -->
        <q-tab-panel name="companies">
          <div class="container" style="padding-top: 0; margin-top: 0">
            <!-- Company Selector -->
            <CompanySelector />

            <!-- Team -->
            <div class="text-h4">Команда</div>

            <div class="row q-gutter-md">
              <!-- Add member to the team -->
              <q-card
                flat
                class="bg-grey-2 push-btn"
                style="width: calc(33% - 16px)"
                @click="!companiesState.companies.value?.length"
              >
                <q-card-section
                  class="column justify-center"
                  style="min-height: 30vw"
                >
                  <q-icon
                    :name="
                      companiesState.activeCompany.value ? 'add' : 'o_lock'
                    "
                    size="36px"
                    style="margin: 0 auto"
                    color="grey"
                  />
                  <div class="q-card__title text-grey q-pt-sm">Добавить</div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </PageBody>

    <PageNavbar />
  </PageComponent>
</template>

<script setup>
import PageComponent from 'components/Page/PageComponent.vue';
import PageBody from 'components/Page/PageBody.vue';
import PageNavbar from 'components/Page/PageNavbar.vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from 'stores/store-auth';
import CompanySelector from 'components/CompanySelector.vue';
import { useRouter } from 'vue-router';
import { ROUTE_PATHS } from 'src/constants/paths';
import { useCompaniesStore } from 'stores/store-companies';
import { onBeforeMount, ref } from 'vue';
import { useQuasar } from 'quasar';
import getRandomAvatar from 'src/helpers/getRandomAvatar';

const router = useRouter();

const $q = useQuasar();

const tab = ref('profile');

const companiesState = storeToRefs(useCompaniesStore());

/*
 * edit user profile
 */
const { user } = storeToRefs(useAuthStore());
const userCopy = ref({});
onBeforeMount(() => {
  userCopy.value = user.value;
});

const { updateUser } = useAuthStore();
const handleUserUpdate = () => {
  updateUser(userCopy.value);
  $q.notify({
    message: 'Данные обновлены',
    icon: 'done',
    position: 'top',
  });
};

const handleSetRandomAvatar = () => {
  let previousAvatar = userCopy.value.avatar;
  let avatar = getRandomAvatar();

  while (avatar === previousAvatar) {
    avatar = getRandomAvatar();
  }

  userCopy.value.avatar = avatar;
  handleUserUpdate();
};

/*
 * logout
 */
const { logout } = useAuthStore();
const handleLogout = async () => {
  router.push(ROUTE_PATHS.SIGN_IN);
  await logout();
};
</script>

<style scoped lang="scss">
::v-deep(.q-tabs__content) {
  padding: 8px;
}

::v-deep(.q-tab) {
  padding: 8px;
}

::v-deep(.q-tab--active) {
  color: white;
  border: none;
}

::v-deep(.q-tab__content) {
  z-index: 2;
}

::v-deep(.q-tab__indicator) {
  background: $accent;
  height: 100%;
  z-index: 1;
  border-radius: 12px;
}

::v-deep(.q-tab) {
  border-radius: 12px;
}

::v-deep(.q-tab-panel) {
  padding: 0;
}

::v-deep(.q-panel-parent) {
  position: static;
}
</style>
