<template>
  <PageComponent>
    <PageBody>
      <div
        class="container"
        style="padding-bottom: 16px; position: sticky; top: 0; z-index: 1"
      >
        <q-tabs
          v-if="!user.roles.includes('inspector')"
          v-model="tab"
          class="text-accent bg-tint q-mb-md shadow-3"
          inline-label
          style="border-radius: 20px"
        >
          <q-tab
            class="q-btn__push"
            name="profile"
            icon="account_circle"
            label="Профиль"
            no-caps
          />
          <q-tab
            class="q-btn__push"
            name="companies"
            icon="store"
            label="Компании"
            no-caps
          />
        </q-tabs>
      </div>

      <q-tab-panels v-model="tab" animated>
        <!-- Profile -->
        <q-tab-panel name="profile">
          <div class="container" style="margin-top: 0; padding-top: 0">
            <!-- Avatar -->
            <div class="row justify-center relative-position">
              <q-avatar size="200px" color="tint" text-color="accent">
                <!-- User avatar-->
                <q-img
                  v-if="userCopy?.avatar"
                  :src="userCopy?.avatar"
                  :alt="userCopy?.name"
                  style="object-fit: cover; height: 100%"
                />

                <!-- User initials -->
                <template v-else>
                  {{
                    userCopy?.name
                      .split(' ')
                      .map((word) => word.charAt(0))
                      .join('')
                      .toUpperCase()
                      .slice(0, 2)
                  }}
                </template>

                <!-- Avatar actions -->
                <q-btn
                  unelevated
                  text-color="accent"
                  icon="lens_blur"
                  round
                  class="bg-grey-2 q-btn__push"
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
                        class="q-menu__button q-btn__push"
                        icon="auto_awesome"
                        label="Сгенерировать"
                        v-close-popup
                        @click="handleSetRandomAvatar()"
                      />

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
                          class="q-menu__button q-btn__push"
                          v-close-popup
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
                class="q-btn__submit q-btn__push full-width q-mt-lg"
                text-color="white"
                type="submit"
              />
            </form>

            <q-separator class="q-my-lg" />

            <!-- Logout -->
            <q-card
              flat
              v-ripple
              class="bg-grey-2 q-hoverable q-btn__push"
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

            <!-- Add member to the team -->
            <q-card
              flat
              class="bg-grey-2 q-btn__push q-mb-lg"
              @click="
                showUsersDialog = !!companiesState.companies.value?.length
              "
            >
              <q-card-section class="column justify-center">
                <q-icon
                  :name="companiesState.activeCompany.value ? 'add' : 'o_lock'"
                  size="36px"
                  style="margin: 0 auto"
                  color="grey"
                />
                <div class="q-card__title text-center text-grey q-pt-sm">
                  Добавить участников
                </div>
              </q-card-section>
            </q-card>

            <!-- Team members -->
            <div class="row q-gutter-md">
              <transition-group
                appear
                enter-active-class="animated zoomIn"
                leave-active-class="animated zoomOut"
              >
                <q-slide-item
                  v-for="member in teamMembers"
                  :key="member.id"
                  flat
                  v-ripple
                  class="q-hoverable q-btn__push"
                  style="border-radius: 20px; width: 100%"
                  @right="
                    handleRightSwipeAction($event);
                    removeTeamMember(member);
                  "
                  right-color="red"
                >
                  <template #right>
                    <q-icon name="delete" />
                  </template>

                  <q-card-section
                    class="row no-wrap q-pa-none"
                    style="width: 100%"
                  >
                    <!-- Member avatar -->
                    <q-avatar
                      size="64px"
                      color="tint"
                      text-color="accent"
                      class="q-mr-md"
                    >
                      <!-- User avatar-->
                      <q-img
                        v-if="member?.avatar"
                        :src="member?.avatar"
                        :alt="member?.name"
                        style="object-fit: cover; height: 100%"
                      />

                      <!-- User initials -->
                      <div v-else style="font-size: 24px">
                        {{
                          member?.name
                            .split(' ')
                            .map((word) => word.charAt(0))
                            .join('')
                            .toUpperCase()
                            .slice(0, 2)
                        }}
                      </div>
                    </q-avatar>

                    <!-- Member name -->
                    <div style="margin: auto 0" class="ellipsis">
                      <div class="ellipsis" style="font-weight: 500">
                        {{ member.name }}
                        <q-icon name="schedule" style="margin-top: -1px" />
                      </div>

                      <div class="ellipsis text-grey">
                        {{ member.email }}
                      </div>
                    </div>
                  </q-card-section>
                </q-slide-item>
              </transition-group>
            </div>

            <!-- Add team member -->
            <q-dialog v-model="showUsersDialog">
              <q-card flat class="q-dialog__card" style="height: 512px">
                <q-card-section
                  class="q-pa-lg column no-wrap justify-between"
                  style="height: 100%"
                >
                  <!-- Users search input -->
                  <q-input
                    v-model="usersSearch"
                    outlined
                    color="accent"
                    placeholder="Поиск..."
                    class="q-mb-lg"
                    clearable
                  />

                  <q-slide-transition>
                    <!-- Users results -->
                    <q-virtual-scroll
                      v-if="filteredUsers.length"
                      :style="`height: calc((${
                        filteredUsers.length <= 4 ? filteredUsers.length : '4'
                      } * 64px) + (${
                        filteredUsers.length <= 4
                          ? filteredUsers.length - 1
                          : '3'
                      } * 16px)); max-height: calc(4 * 64px + (3 * 16px))`"
                      :items="filteredUsers"
                      v-slot="{ item, index }"
                    >
                      <q-slide-item
                        :key="index"
                        flat
                        v-ripple
                        class="q-hoverable"
                        :class="index !== 0 ? 'q-mt-md' : ''"
                        style="border-radius: 15px"
                        @right="
                          addTeamMember(item);
                          $q.notify({
                            message: 'Приглашение отправлено',
                            icon: 'o_schedule',
                            position: 'top',
                          });
                          handleRightSwipeAction($event);
                        "
                        right-color="accent"
                      >
                        <template #right>
                          <q-icon color="tint" name="schedule_send" />
                        </template>

                        <q-card-section class="q-pa-none row no-wrap">
                          <q-avatar
                            size="64px"
                            color="tint"
                            text-color="accent"
                            class="q-mr-md"
                          >
                            <!-- User avatar-->
                            <q-img
                              v-if="item?.avatar"
                              :src="item?.avatar"
                              :alt="item?.name"
                              style="object-fit: cover; height: 100%"
                            />

                            <!-- User initials -->
                            <div v-else style="font-size: 24px">
                              {{
                                item?.name
                                  .split(' ')
                                  .map((word) => word.charAt(0))
                                  .join('')
                                  .toUpperCase()
                                  .slice(0, 2)
                              }}
                            </div>
                          </q-avatar>

                          <div style="margin: auto 0">
                            <div style="font-weight: 500">
                              {{ item.name }}
                            </div>

                            <div class="text-grey">
                              {{ item.email }}
                            </div>
                          </div>
                        </q-card-section>
                      </q-slide-item>
                    </q-virtual-scroll>
                  </q-slide-transition>

                  <!-- No users found -->
                  <q-intersection transition="scale">
                    <div v-if="!filteredUsers.length">
                      <svg
                        style="height: 40vw; max-width: 100%"
                        xmlns="http://www.w3.org/2000/svg"
                        width="672.5315"
                        height="738.39398"
                        viewBox="0 0 672.5315 738.39398"
                      >
                        <path
                          d="M730.73425,230.607c-46.62012-7.44-99.71-11.41-155-11.41-50.6001,0-99.3501,3.32-142.98,9.58.01026-.67005.02-1.34.04981-2.01a148.99943,148.99943,0,0,1,297.91015,1.82C730.72449,229.267,730.73425,229.937,730.73425,230.607Z"
                          transform="translate(-263.73425 -80.80301)"
                          fill="#d8553f"
                        />
                        <g opacity="0.1">
                          <path
                            d="M601.28454,82.14432A149.04745,149.04745,0,0,0,432.35339,225.373c-.03027.67-.04,1.34-.0498,2.01,12.96191-1.85981,26.38476-3.4535,40.165-4.78431A149.02172,149.02172,0,0,1,601.28454,82.14432Z"
                            transform="translate(-263.73425 -80.80301)"
                            fill="#fff"
                          />
                        </g>
                        <path
                          d="M795.91443,242.427a600.121,600.121,0,0,0-65.2002-13.84,943.3639,943.3639,0,0,0-108.73974-10.45c-15.17041-.62-30.62012-.94-46.24024-.94-12.37988,0-24.66015.2-36.77.6a973.28988,973.28988,0,0,0-106.16015,8.97,624.29224,624.29224,0,0,0-77.25,15.66c-59.21,16.37-91.81983,38.31-91.81983,61.77s32.60987,45.4,91.81983,61.77c41.64013,11.52,92.98,19.37,148.92041,22.97,23.08984,1.5,46.96,2.26,71.25976,2.26,24.37988,0,48.33008-.77,71.49024-2.27,50.90966-3.29,98.00976-10.1,137.42968-20,.21-.06.41016-.11.62012-.16,2.66016-.66,5.27979-1.35,7.87012-2.04.92969-.26,1.84961-.51,2.77-.76a.97843.97843,0,0,1,.15967-.05c.88037-.24,1.75-.49,2.62011-.73,1.74024-.5,3.46-.99,5.14991-1.5.08007-.02.1499-.04.22021-.06,1.46973-.44,2.91016-.88,4.33984-1.32,1.16993-.37,2.33008-.73,3.48-1.1q1.26051-.405,2.49024-.81c.6001-.2,1.18994-.39,1.77-.59.79-.26,1.58008-.53,2.35986-.8.33008-.11.66016-.22.98-.34.75-.25,1.48-.51,2.21-.77.79-.28,1.58008-.57,2.35987-.85.65039-.23,1.30029-.47,1.93994-.71.54-.21,1.07031-.41,1.61035-.61,1.46973-.55,2.91016-1.12006,4.33008-1.68.71-.29,1.41992-.57,2.11963-.86.68994-.28,1.39013-.57,2.07031-.86q1.67944-.70506,3.2998-1.41c.52-.24,1.0503-.47,1.56006-.68994.39014-.18.77-.35,1.16016-.53.27978-.12.56006-.25.83008-.38,1.00976-.46,2.00976-.93,2.98974-1.4q5.64039-2.7,10.52979-5.52c20.45019-11.71,31.24023-24.7,31.24023-38.2C887.73425,280.737,855.12439,258.797,795.91443,242.427Zm-.54,121.62c-41.68994,11.53-93.16992,19.38-149.26026,22.95-22.81005,1.45-46.38964,2.2-70.37988,2.2-23.91015,0-47.41015-.74-70.1499-2.19-56.18018-3.56-107.74023-11.41-149.49023-22.96-58.27-16.12-90.35987-37.37-90.35987-59.85a24.11774,24.11774,0,0,1,.74024-5.89c5.09961-20.28,36.46972-39.26,89.61963-53.96a623.80606,623.80606,0,0,1,76.66015-15.57,976.02713,976.02713,0,0,1,106.79981-9q17.88061-.585,36.18017-.58c15.41016,0,30.6499.31,45.62988.91a941.36713,941.36713,0,0,1,109.37012,10.5A598.85754,598.85754,0,0,1,795.37439,244.347c53.14014,14.7,84.5,33.67,89.60986,53.94a23.82213,23.82213,0,0,1,.75,5.91C885.73425,326.677,853.64441,347.927,795.37439,364.047Z"
                          transform="translate(-263.73425 -80.80301)"
                          fill="#3f3d56"
                        />
                        <path
                          d="M887.16443,305.107c0,13.36005-11.01026,26-30.67041,37.29-3.26953,1.88-6.78955,3.72-10.52979,5.52-.98.47-1.98.94-2.98974,1.4-.27.13-.5503.26-.83008.38-.39014.18-.77.35-1.16016.53-.50976.22-1.04.45-1.56006.68994q-1.6201.705-3.2998,1.41c-.68018.29-1.38037.58-2.07031.86-.69971.29-1.40967.57-2.11963.86-1.41992.56-2.86035,1.13-4.33008,1.68-.54.2-1.07031.4-1.61035.61-.63965.24-1.28955.48-1.93994.71-.77979.28-1.56983.57-2.35987.85-.73.26-1.46.52-2.21.77-.31982.12006-.6499.23-.98.34-.77978.27-1.56982.54-2.35986.8-.58008.2-1.16992.39-1.77.59q-1.23046.40494-2.49024.81c-1.1499.37-2.31.73-3.48,1.1-1.42968.44-2.87011.88-4.33984,1.32-.07031.02-.14014.04-.22021.06-1.68995.51-3.40967,1-5.14991,1.5-.87011.24-1.73974.49-2.62011.73a.97843.97843,0,0,0-.15967.05c-.92041.25-1.84033.5-2.77.76-2.58008.68-5.21,1.37-7.87012,2.04-.21.05-.41016.1-.62012.16-38.35009,9.58-85.3999,16.56-137.46972,19.93-22.81006,1.47-46.59033,2.25-71.02,2.25-24.6499,0-48.63037-.79-71.62012-2.29-137.24023-8.95-239.37988-43.03-239.37988-83.71a25.07169,25.07169,0,0,1,1.11963-7.3c.06006.17.12011.33.19043.5,14.26953,37.48,115.54,67.77,246.93994,75.16,20.12988,1.13995,40.98,1.73,62.31982,1.73,21.43018,0,42.35987-.6,62.56983-1.74,131.29-7.42,232.46045-37.72,246.68017-75.17q.36036-.90006.62988-1.8A25.30451,25.30451,0,0,1,887.16443,305.107Z"
                          transform="translate(-263.73425 -80.80301)"
                          fill="#3f3d56"
                        />
                        <path
                          d="M355.40356,294.343c-16.6427,0-34.33068-3.58057-34.33068-10.2168s17.688-10.2168,34.33068-10.2168,34.33069,3.58057,34.33069,10.2168S372.04626,294.343,355.40356,294.343Zm0-18.4336c-19.053,0-32.33068,4.33057-32.33068,8.2168s13.2777,8.2168,32.33068,8.2168,32.33069-4.33057,32.33069-8.2168S374.45654,275.90939,355.40356,275.90939Z"
                          transform="translate(-263.73425 -80.80301)"
                          fill="#3f3d56"
                        />
                        <path
                          d="M426.40344,341.343c-16.64258,0-34.33056-3.58057-34.33056-10.2168s17.688-10.2168,34.33056-10.2168c16.64282,0,34.33081,3.58057,34.33081,10.2168S443.04626,341.343,426.40344,341.343Zm0-18.4336c-19.05286,0-32.33056,4.33057-32.33056,8.2168s13.2777,8.2168,32.33056,8.2168,32.33081-4.33057,32.33081-8.2168S445.45642,322.90939,426.40344,322.90939Z"
                          transform="translate(-263.73425 -80.80301)"
                          fill="#3f3d56"
                        />
                        <path
                          d="M795.40344,294.343c-16.64258,0-34.33056-3.58057-34.33056-10.2168s17.688-10.2168,34.33056-10.2168c16.64282,0,34.33081,3.58057,34.33081,10.2168S812.04626,294.343,795.40344,294.343Zm0-18.4336c-19.053,0-32.33056,4.33057-32.33056,8.2168s13.27758,8.2168,32.33056,8.2168,32.33081-4.33057,32.33081-8.2168S814.45642,275.90939,795.40344,275.90939Z"
                          transform="translate(-263.73425 -80.80301)"
                          fill="#3f3d56"
                        />
                        <path
                          d="M724.40344,341.343c-16.64258,0-34.33056-3.58057-34.33056-10.2168s17.688-10.2168,34.33056-10.2168c16.64282,0,34.33081,3.58057,34.33081,10.2168S741.04626,341.343,724.40344,341.343Zm0-18.4336c-19.053,0-32.33056,4.33057-32.33056,8.2168s13.27758,8.2168,32.33056,8.2168,32.33081-4.33057,32.33081-8.2168S743.45642,322.90939,724.40344,322.90939Z"
                          transform="translate(-263.73425 -80.80301)"
                          fill="#3f3d56"
                        />
                        <path
                          d="M575.40344,363.343c-16.64258,0-34.33056-3.58057-34.33056-10.2168s17.688-10.2168,34.33056-10.2168c16.64282,0,34.33081,3.58057,34.33081,10.2168S592.04626,363.343,575.40344,363.343Zm0-18.4336c-19.053,0-32.33056,4.33057-32.33056,8.2168s13.27758,8.2168,32.33056,8.2168,32.33081-4.33057,32.33081-8.2168S594.45642,344.90939,575.40344,344.90939Z"
                          transform="translate(-263.73425 -80.80301)"
                          fill="#3f3d56"
                        />
                        <circle
                          cx="336.97785"
                          cy="450.70425"
                          r="42.01233"
                          fill="#2f2e41"
                        />
                        <rect
                          x="565.93651"
                          y="563.55388"
                          width="22.86756"
                          height="12.76328"
                          transform="translate(-457.82019 238.05835) rotate(-26.60099)"
                          fill="#2f2e41"
                        />
                        <ellipse
                          cx="563.82041"
                          cy="573.74843"
                          rx="3.98853"
                          ry="10.63605"
                          transform="translate(-489.27546 647.82906) rotate(-56.60122)"
                          fill="#2f2e41"
                        />
                        <rect
                          x="617.67227"
                          y="558.50174"
                          width="12.76328"
                          height="22.86756"
                          transform="translate(-428.72163 791.92555) rotate(-63.39901)"
                          fill="#2f2e41"
                        />
                        <ellipse
                          cx="637.60379"
                          cy="573.74843"
                          rx="10.63605"
                          ry="3.98853"
                          transform="translate(-474.26735 364.92328) rotate(-33.39878)"
                          fill="#2f2e41"
                        />
                        <circle
                          cx="334.03663"
                          cy="440.42779"
                          r="14.35864"
                          fill="#fff"
                        />
                        <ellipse
                          cx="597.86951"
                          cy="515.08401"
                          rx="4.76624"
                          ry="4.8"
                          transform="translate(-452.84172 492.81919) rotate(-45)"
                          fill="#3f3d56"
                        />
                        <path
                          d="M633.854,485.80233c.63177-15.55359-12.77314-28.7276-29.9408-29.42493s-31.59692,11.346-32.22873,26.8996,11.30191,19.08746,28.46958,19.78485S633.22214,501.35592,633.854,485.80233Z"
                          transform="translate(-263.73425 -80.80301)"
                          fill="#d8553f"
                        />
                        <ellipse
                          cx="644.38811"
                          cy="537.56776"
                          rx="6.59448"
                          ry="21.00616"
                          transform="translate(-458.4377 468.61755) rotate(-40.64516)"
                          fill="#2f2e41"
                        />
                        <ellipse
                          cx="557.15365"
                          cy="537.56776"
                          rx="21.00616"
                          ry="6.59448"
                          transform="translate(-477.37906 529.35274) rotate(-49.35484)"
                          fill="#2f2e41"
                        />
                        <path
                          d="M612.25083,548.0638a9.57244,9.57244,0,0,1-18.83533,3.42884l-.00336-.0185c-.94177-5.20214,3.08039-7.043,8.28254-7.98474S611.30912,542.86166,612.25083,548.0638Z"
                          transform="translate(-263.73425 -80.80301)"
                          fill="#fff"
                        />
                        <path
                          d="M529.73425,576.197a2.0001,2.0001,0,0,1-2-2v-118a2,2,0,0,1,4,0v118A2.0001,2.0001,0,0,1,529.73425,576.197Z"
                          transform="translate(-263.73425 -80.80301)"
                          fill="#ccc"
                        />
                        <path
                          d="M499.73425,682.197a2.0001,2.0001,0,0,1-2-2v-86a2,2,0,1,1,4,0v86A2.0001,2.0001,0,0,1,499.73425,682.197Z"
                          transform="translate(-263.73425 -80.80301)"
                          fill="#ccc"
                        />
                        <path
                          d="M576.73425,611.197a2.0001,2.0001,0,0,1-2-2v-118a2,2,0,1,1,4,0v118A2.0001,2.0001,0,0,1,576.73425,611.197Z"
                          transform="translate(-263.73425 -80.80301)"
                          fill="#ccc"
                        />
                        <path
                          d="M547.73425,696.197a2.0001,2.0001,0,0,1-2-2v-48a2,2,0,1,1,4,0v48A2.0001,2.0001,0,0,1,547.73425,696.197Z"
                          transform="translate(-263.73425 -80.80301)"
                          fill="#ccc"
                        />
                        <path
                          d="M588.73425,450.197a2.0001,2.0001,0,0,1-2-2v-48a2,2,0,0,1,4,0v48A2.0001,2.0001,0,0,1,588.73425,450.197Z"
                          transform="translate(-263.73425 -80.80301)"
                          fill="#ccc"
                        />
                        <path
                          d="M488.73425,471.197a2.0001,2.0001,0,0,1-2-2v-48a2,2,0,0,1,4,0v48A2.0001,2.0001,0,0,1,488.73425,471.197Z"
                          transform="translate(-263.73425 -80.80301)"
                          fill="#ccc"
                        />
                        <path
                          d="M662.73425,476.197a2.0001,2.0001,0,0,1-2-2v-48a2,2,0,1,1,4,0v48A2.0001,2.0001,0,0,1,662.73425,476.197Z"
                          transform="translate(-263.73425 -80.80301)"
                          fill="#ccc"
                        />
                        <path
                          d="M658.73425,626.197a2.0001,2.0001,0,0,1-2-2v-58a2,2,0,1,1,4,0v58A2.0001,2.0001,0,0,1,658.73425,626.197Z"
                          transform="translate(-263.73425 -80.80301)"
                          fill="#ccc"
                        />
                        <path
                          d="M618.73425,677.197a2.0001,2.0001,0,0,1-2-2v-86a2,2,0,1,1,4,0v86A2.0001,2.0001,0,0,1,618.73425,677.197Z"
                          transform="translate(-263.73425 -80.80301)"
                          fill="#ccc"
                        />
                        <path
                          d="M626.73425,530.197a2.0001,2.0001,0,0,1-2-2v-118a2,2,0,1,1,4,0v118A2.0001,2.0001,0,0,1,626.73425,530.197Z"
                          transform="translate(-263.73425 -80.80301)"
                          fill="#ccc"
                        />
                        <ellipse
                          cx="858.10361"
                          cy="764.78333"
                          rx="6.76007"
                          ry="21.53369"
                          transform="translate(-554.53185 648.46489) rotate(-39.93837)"
                          fill="#2f2e41"
                        />
                        <circle
                          cx="812.2965"
                          cy="757.30544"
                          r="43.06733"
                          transform="translate(-426.75153 1207.63346) rotate(-71.56505)"
                          fill="#2f2e41"
                        />
                        <rect
                          x="553.7073"
                          y="710.30199"
                          width="13.08374"
                          height="23.44171"
                          fill="#2f2e41"
                        />
                        <rect
                          x="527.53982"
                          y="710.30199"
                          width="13.08374"
                          height="23.44171"
                          fill="#2f2e41"
                        />
                        <ellipse
                          cx="555.8879"
                          cy="734.01629"
                          rx="10.90314"
                          ry="4.08868"
                          fill="#2f2e41"
                        />
                        <ellipse
                          cx="529.72042"
                          cy="733.47115"
                          rx="10.90314"
                          ry="4.08868"
                          fill="#2f2e41"
                        />
                        <path
                          d="M798.77365,703.16853c3.84557-15.487,20.82057-24.60076,37.91471-20.35617s27.83428,20.24028,23.98871,35.72729-16.60394,15.537-33.69809,11.29233S794.92806,718.65557,798.77365,703.16853Z"
                          transform="translate(-263.73425 -80.80301)"
                          fill="#ccc"
                        />
                        <ellipse
                          cx="763.7883"
                          cy="737.32189"
                          rx="6.76007"
                          ry="21.53369"
                          transform="translate(-493.44249 1030.65892) rotate(-64.62574)"
                          fill="#2f2e41"
                        />
                        <circle
                          cx="542.12366"
                          cy="667.41487"
                          r="14.35864"
                          fill="#fff"
                        />
                        <circle
                          cx="536.22229"
                          cy="662.26808"
                          r="4.78622"
                          fill="#3f3d56"
                        />
                        <circle cx="542" cy="697.39398" r="6" fill="#fff" />
                        <path
                          d="M935.26575,819.197h-236a1,1,0,0,1,0-2h236a1,1,0,0,1,0,2Z"
                          transform="translate(-263.73425 -80.80301)"
                          fill="#3f3d56"
                        />
                      </svg>

                      <div class="text-center text-grey q-pt-md">
                        Пользователи не найдены
                      </div>
                    </div>
                  </q-intersection>

                  <q-space />

                  <!-- Close button -->
                  <q-btn
                    label="Закрыть"
                    flat
                    class="full-width bg-grey-2 q-pa-md q-mt-lg q-btn__push"
                    style="border-radius: 15px"
                    color="grey"
                    no-caps
                    v-close-popup
                  />
                </q-card-section>
              </q-card>
            </q-dialog>
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
import { computed, onBeforeMount, ref } from 'vue';
import { useQuasar } from 'quasar';
import getRandomAvatar from 'src/helpers/getRandomAvatar';
import users from 'src/constants/mock/users';

const router = useRouter();
const $q = useQuasar();

const companiesState = storeToRefs(useCompaniesStore());
const { addTeamMember, removeTeamMember } = useCompaniesStore();

/*
 * tabs
 */
const tab = ref('profile');

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

/*
 * Team members
 */
const showUsersDialog = ref(false);
const usersSearch = ref('');
const filteredUsers = computed(() => {
  return users
    .filter((user) => user.roles.includes('employee'))
    .filter(
      (user) =>
        !usersSearch.value ||
        (usersSearch.value &&
          (user.name
            .toLowerCase()
            .trim()
            .includes(usersSearch.value.toLowerCase().trim()) ||
            user.email
              .toLowerCase()
              .trim()
              .includes(usersSearch.value.toLowerCase().trim()) ||
            user.phone
              .toLowerCase()
              .trim()
              .includes(usersSearch.value.toLowerCase().trim())))
    )
    .filter((user) => {
      return !companiesState.companies.value?.find(
        (company) => company?.members && company?.members?.includes(user.id)
      );
    });
});

const teamMembers = computed(() => {
  return users.filter((user) =>
    companiesState.activeCompany.value?.members?.includes(user.id)
  );
});

const handleRightSwipeAction = ({ reset }) => {
  reset();
};
</script>

<style scoped lang="scss">
::v-deep(.q-tabs__content) {
  padding: 8px;
}

::v-deep(.q-tab) {
  padding: 8px;
  width: 50%;
}

::v-deep(.q-tab--active) {
  color: white;
  border: none;
}

::v-deep(.q-tab__content) {
  z-index: 2;
}

::v-deep(.q-tab__indicator) {
  background: linear-gradient(136.37deg, #f75d47 19.2%, #e13925 75.6%);
  animation: gradient 1s ease-in-out infinite alternate;
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
