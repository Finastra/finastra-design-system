import { Component, OnInit } from '@angular/core';

export interface Company {
  name: string;
  updated: Date;
}

export interface Tenant {
  name: string;
  updated: Date;
}

@Component({
  selector: 'ffdc-filter-panel-demo',
  templateUrl: './filter-panel-demo.component.html',
  styleUrls: ['./filter-panel-demo.component.css']
})
export class FilterPanelDemoComponent implements OnInit {

  sampleFilters = [
    {
      group: "Tenant",
      data: [
        { name: 'British Production' },
        { name: 'British Sandbox' },
        { name: 'British Development' }
      ]
    },
    {
      group: "Company",
      data: [
        { name: 'Kore.io' },
        { name: 'Geezeo' },
        { name: 'Sonect' }
      ]
    }
  ];

  companies: Company[] = [
    {
      name: 'Kore.io',
      updated: new Date('1/1/18'),
    },
    {
      name: 'Geezeo',
      updated: new Date('2/20/18'),
    },
    {
      name: 'Sonect',
      updated: new Date('6/28/18'),
    }
  ];

  tenants: Tenant[] = [
    {
      name: 'British Production',
      updated: new Date('8/20/18')
    },
    {
      name: 'British Sandbox',
      updated: new Date('1/1/18')
    },
    {
      name: 'British Development',
      updated: new Date('6/20/18')
    }
  ];

  filteredCompanies: Company[];
  filteredTenants: Tenant[];

  constructor() { }

  ngOnInit() {
    this.filteredCompanies = this.companies;
    this.filteredTenants = this.tenants;
  }

  updateFilter(filterMap) {
    this.updateCompanyList(filterMap);
    this.updateTenantList(filterMap);
  }

  private updateCompanyList(filterMap) {
    this.filteredCompanies = [];
    
    filterMap.forEach(element => {
      this.companies.forEach(company => {
        if (element.group === 'Company' && company.name === element.filter.name) {
          this.filteredCompanies.push(company);
        }
      });
    });

    if(this.filteredCompanies.length === 0) {
      this.filteredCompanies = this.companies;
    }
  }

  private updateTenantList(filterMap) {
    this.filteredTenants = [];
    
    filterMap.forEach(element => {
      this.tenants.forEach(tenant => {
        if (element.group === 'Tenant' && tenant.name === element.filter.name) {
          this.filteredTenants.push(tenant);
        }
      });
    });

    if(this.filteredTenants.length === 0) {
      this.filteredTenants = this.tenants;
    }
  }
}
