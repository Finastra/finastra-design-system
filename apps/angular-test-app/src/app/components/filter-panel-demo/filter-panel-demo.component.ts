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

  sampleFilterFields = [
    {
      group: "Tenant",
      options: [
        { label: 'British Production' },
        { label: 'British Sandbox' },
        { label: 'British Development' }
      ]
    },
    {
      group: "Company",
      options: [
        { label: 'Kore.io' },
        { label: 'Geezeo' },
        { label: 'Sonect' }
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
    this.updateCompanyList(filterMap['Company']);
    this.updateTenantList(filterMap['Tenant']);
  }

  private updateCompanyList(fields: string[]) {
    this.filteredCompanies = [];
    
    fields.forEach(field => {
      this.companies.forEach(company => {
        if (company.name === field) {
          this.filteredCompanies.push(company);
        }
      });
    });

    if(this.filteredCompanies.length === 0) {
      this.filteredCompanies = this.companies;
    }
  }

  private updateTenantList(fields: string[]) {
    this.filteredTenants = [];
    
    fields.forEach(field => {
      this.tenants.forEach(tenant => {
        if (tenant.name === field) {
          this.filteredTenants.push(tenant);
        }
      });
    });

    if(this.filteredTenants.length === 0) {
      this.filteredTenants = this.tenants;
    }
  }
}
