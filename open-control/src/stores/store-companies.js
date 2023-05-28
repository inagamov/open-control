import { defineStore } from 'pinia';

export const useCompaniesStore = defineStore('companies', {
  state: () => ({
    companies: [],
    activeCompany: null,
    defaultCompany: {
      name: 'ООО «Ваша Компания»',
    },
  }),

  actions: {
    loadCompanies() {
      const storedCompanies = localStorage.getItem('companies');

      if (storedCompanies) {
        this.companies = JSON.parse(storedCompanies);
      }

      this.setActiveCompany();
    },

    setActiveCompany(company = null) {
      if (company) {
        this.activeCompany = company;
        localStorage.setItem(
          'activeCompany',
          JSON.stringify(this.activeCompany)
        );
      } else if (
        (!this.activeCompany ||
          !this.companies.find((item) => item === this.activeCompany)) &&
        this.companies.length > 0
      ) {
        this.activeCompany = this.companies[0];
        localStorage.setItem(
          'activeCompany',
          JSON.stringify(this.activeCompany)
        );
      }
    },

    syncCompaniesStorage() {
      localStorage.setItem('companies', JSON.stringify(this.companies));
      localStorage.setItem('activeCompany', JSON.stringify(this.activeCompany));
    },

    /*
     * attach / detach companies
     */
    attachCompany(company) {
      this.companies.push(company);
      this.syncCompaniesStorage();
      this.setActiveCompany();
    },

    detachCompany(company) {
      this.companies = this.companies.filter((item) => item !== company);
      this.syncCompaniesStorage();
      this.setActiveCompany();
    },

    /*
     * team members
     */
    syncActiveCompanyWithCompanies() {
      const foundCompany = this.companies.find(
        (item) => item['ИНН'] === this.activeCompany['ИНН']
      );
      if (foundCompany) {
        Object.assign(foundCompany, this.activeCompany);
      }
    },

    addTeamMember(user) {
      if (!this.activeCompany.members) {
        this.activeCompany.members = [];
      }
      this.activeCompany.members.push(user.id);

      this.syncActiveCompanyWithCompanies();
      this.syncCompaniesStorage();
    },

    removeTeamMember(user) {
      this.activeCompany.members = this.activeCompany.members.filter(
        (member) => member !== user.id
      );

      this.syncActiveCompanyWithCompanies();
      this.syncCompaniesStorage();
    },
  },
});
