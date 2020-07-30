import { Component, OnInit } from '@angular/core';
import { EntityMenuItemWEvent } from '@ffdc/uxg-angular-components/entity-menu';

const TEMPLATES_DATA: any[] = [
  {
    displayName: 'Countries',
    columnsMatcher: 'name',
    dataSource: '1'
  },
  {
    displayName: 'Products',
    columnsMatcher: 'name',
    dataSource: '2'
  }
];

const COUNTRIES: any[] = [
  {
    name: 'Dubai',
    country: 'United Arab Emirates'
  },
  {
    name: 'London',
    country: 'United Kingdom'
  },
  {
    name: 'New York',
    country: 'United States of America'
  },
  {
    name: 'Paris',
    country: 'France'
  },
  {
    name: 'Singapore',
    country: 'Republic of Singapore'
  },
  {
    name: 'Sydney',
    country: 'Australia'
  },
  {
    name: 'Toronto',
    country: 'Canada'
  }
];

const PRODUCT_LIST = [
  {
    productId: 'Finances',
    name: 'Finances',
    homeUrl: 'https://res.cloudinary.com/dmv2klkv7/image/upload/c_scale,w_1300/v1567769894/samples-powerbi_xdk2vt.png',
    description:
      'quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices',
    image: 'http://dummyimage.com/239x174.jpg/5fa2dd/ffffff',
    applications: []
  },
  {
    productId: 'Human Resources',
    name: 'Human Resources',
    homeUrl:
      'https://app.powerbi.com/reportEmbed?reportId=04c1a304-e640-4d1c-adbf-e468b661b362&autoAuth=true&ctid=0b9b90da-3fe1-457a-b340-f1b67e1024fb&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtZXVyb3BlLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0In0%3D',
    description:
      'quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices',
    image: 'http://dummyimage.com/239x174.jpg/5fa2dd/ffffff',
    applications: []
  },
  {
    productId: 'Finances',
    name: 'Finances',
    homeUrl: 'https://res.cloudinary.com/dmv2klkv7/image/upload/c_scale,w_1300/v1567769894/samples-powerbi_xdk2vt.png',
    description:
      'quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices',
    image: 'http://dummyimage.com/239x174.jpg/5fa2dd/ffffff',
    applications: []
  },
  {
    productId: 'Human Resources',
    name: 'Human Resources',
    homeUrl:
      'https://app.powerbi.com/reportEmbed?reportId=04c1a304-e640-4d1c-adbf-e468b661b362&autoAuth=true&ctid=0b9b90da-3fe1-457a-b340-f1b67e1024fb&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtZXVyb3BlLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0In0%3D',
    description:
      'quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices',
    image: 'http://dummyimage.com/239x174.jpg/5fa2dd/ffffff',
    applications: []
  }
];

const CT_COLUMNS: any[] = [
  { title: 'name', type: 'string', align: 'left' },
  { title: 'country', type: 'string', align: 'left' }
];
const PR_COLUMNS: any[] = [
  { title: 'productId', type: 'string', align: 'left' },
  { title: 'name', type: 'string', align: 'left' },
  { title: 'description', type: 'string', align: 'left' }
];

@Component({
  selector: 'ffdc-entity-menu-demo',
  templateUrl: './entity-menu-demo.component.html',
  styleUrls: ['./entity-menu-demo.component.scss']
})
export class EntityMenuDemoComponent implements OnInit {
  length = 2;
  bottomLabel = 'View All';
  templatesData = TEMPLATES_DATA;
  dataSource = COUNTRIES;
  dataSource2 = PRODUCT_LIST;
  columns = CT_COLUMNS;
  columns2 = PR_COLUMNS;

  currentTemplate: any = this.templatesData[0];
  title = this.currentTemplate.displayName;
  columnsExample = this.columns;
  dataSourceExample = this.dataSource;
  columnsMatcherExample = this.currentTemplate.columnsMatcher;

  actionDescription!: string;
  actionEvent!: MouseEvent;

  ngOnInit(): void {
    this.updateTemplate();
  }

  redirect() {
    this.actionDescription = 'Click on ' + this.bottomLabel;
  }

  displayItem(data: EntityMenuItemWEvent) {
    this.actionDescription = JSON.stringify(data.value);
    this.actionEvent = data.$event;
  }

  updateTemplate() {
    if (this.currentTemplate.dataSource === '1') {
      this.dataSourceExample = this.dataSource;
      this.columnsExample = this.columns;
    } else {
      this.dataSourceExample = this.dataSource2;
      this.columnsExample = this.columns2;
    }

    this.columnsMatcherExample = this.currentTemplate.columnsMatcher;
    this.title = this.currentTemplate.displayName;
  }

  updateColumnMatcher(data: any) {
    this.columnsMatcherExample = data;
  }
}
