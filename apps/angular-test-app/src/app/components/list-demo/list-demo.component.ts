import { Component } from '@angular/core';

@Component({
  selector: 'ffdc-list-demo',
  templateUrl: './list-demo.component.html',
  styleUrls: ['./list-demo.component.scss']
})
export class ListDemoComponent {
  title ="products"
  columnsMatcher ="name"
  length =2;

  countries: any[] = [
    {
      name: 'Dubai',
      country: 'United Arab Emirates',
    },
    {
      name: 'London',
      country: 'United Kingdom',
    },
    {
      name: 'New York',
      country: 'United States of America',
    },
    {
      name: 'Paris',
      country: 'France',
    },
    {
      name: 'Singapore',
      country: 'Republic of Singapore',
    },
    {
      name: 'Sydney',
      country: 'Australia',
    },
    {
      name: 'Toronto',
      country: 'Canada',
    }
  ];

  products = [
    {
      productId: "Finances",
      name: "Finances",
      homeUrl: "https://res.cloudinary.com/dmv2klkv7/image/upload/c_scale,w_1300/v1567769894/samples-powerbi_xdk2vt.png",
      description: "quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
      image: "http://dummyimage.com/239x174.jpg/5fa2dd/ffffff",
      applications: [
      ]
    },
    {
      productId: "Human Resources",
      name: "Human Resources",
      homeUrl: "https://app.powerbi.com/reportEmbed?reportId=04c1a304-e640-4d1c-adbf-e468b661b362&autoAuth=true&ctid=0b9b90da-3fe1-457a-b340-f1b67e1024fb&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtZXVyb3BlLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0In0%3D",
      description: "quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
      image: "http://dummyimage.com/239x174.jpg/5fa2dd/ffffff",
      applications: []
    },
    {
      productId: "Finances",
      name: "Finances",
      homeUrl: "https://res.cloudinary.com/dmv2klkv7/image/upload/c_scale,w_1300/v1567769894/samples-powerbi_xdk2vt.png",
      description: "quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
      image: "http://dummyimage.com/239x174.jpg/5fa2dd/ffffff",
      applications: [
      ]
    },
    {
      productId: "Human Resources",
      name: "Human Resources",
      homeUrl: "https://app.powerbi.com/reportEmbed?reportId=04c1a304-e640-4d1c-adbf-e468b661b362&autoAuth=true&ctid=0b9b90da-3fe1-457a-b340-f1b67e1024fb&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtZXVyb3BlLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0In0%3D",
      description: "quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
      image: "http://dummyimage.com/239x174.jpg/5fa2dd/ffffff",
      applications: []
    } 
  ];
}
