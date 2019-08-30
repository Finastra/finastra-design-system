import { Component, OnInit } from '@angular/core';
import { Company, Tenant, sampleFilterFields, companies, tenants } from './filter-panel-demo.sample-data';

@Component({
  selector: 'ffdc-filter-panel-demo',
  templateUrl: './filter-panel-demo.component.html',
  styleUrls: ['./filter-panel-demo.component.css']
})
export class FilterPanelDemoComponent implements OnInit {

  sampleData = sampleFilterFields;
  filteredCompanies: Company[];
  filteredTenants: Tenant[];

  constructor() { }

  ngOnInit() {
    this.filteredCompanies = companies;
    this.filteredTenants = tenants;
  }

  updateFilter(filterMap) {
    console.log(filterMap);
  }

  // TODO
  // - Refactor using new data model
  // updateFilter(filterMap) {
  //   this.updateCompanyList(filterMap['Company']);
  //   this.updateTenantList(filterMap['Tenant']);
  // }

  private updateCompanyList(fields: string[]) {
    this.filteredCompanies = [];

    fields.forEach(field => {
      companies.forEach(company => {
        if (company.name === field) {
          this.filteredCompanies.push(company);
        }
      });
    });

    if (this.filteredCompanies.length === 0) {
      this.filteredCompanies = companies;
    }
  }

  private updateTenantList(fields: string[]) {
    this.filteredTenants = [];

    fields.forEach(field => {
      tenants.forEach(tenant => {
        if (tenant.name === field) {
          this.filteredTenants.push(tenant);
        }
      });
    });

    if (this.filteredTenants.length === 0) {
      this.filteredTenants = tenants;
    }
  }
  //
}
