import { defineStore } from 'pinia';

export const useCompaniesStore = defineStore('companies', {
  state: () => ({
    companies: [],
    activeCompany: null,
    defaultCompany: {
      name: 'ООО «Ваша компания»',
    },
  }),
  actions: {
    setActiveCompany(company = null) {
      if (!company) {
        company = this.companies?.[0];
      }

      if (company) {
        this.activeCompany = company;
      }
    },
  },
});
