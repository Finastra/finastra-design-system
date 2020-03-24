import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'uxg-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class ListComponent {
  
   products = [
    {
      productId: "Finances",
      name: "Finances",
      homeUrl: "https://res.cloudinary.com/dmv2klkv7/image/upload/c_scale,w_1300/v1567769894/samples-powerbi_xdk2vt.png",
      description: "quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
      image: "http://dummyimage.com/239x174.jpg/5fa2dd/ffffff",
      applications: [
        {
          appId: "Customer Profitability",
          name: "Customer Profitability",
          description: "velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo",
          url: "https://app.powerbi.com/reportEmbed?reportId=ab5a99e3-17a9-4f5b-80e5-6e86bab9427e&autoAuth=true&ctid=0b9b90da-3fe1-457a-b340-f1b67e1024fb&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtZXVyb3BlLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0In0%3D",
          version: "1.1"
        }
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
      productId: "Human Resources",
      name: "Human Resources",
      homeUrl: "https://app.powerbi.com/reportEmbed?reportId=04c1a304-e640-4d1c-adbf-e468b661b362&autoAuth=true&ctid=0b9b90da-3fe1-457a-b340-f1b67e1024fb&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtZXVyb3BlLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0In0%3D",
      description: "quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
      image: "http://dummyimage.com/239x174.jpg/5fa2dd/ffffff",
      applications: []
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
      productId: "Human Resources",
      name: "Human Resources",
      homeUrl: "https://app.powerbi.com/reportEmbed?reportId=04c1a304-e640-4d1c-adbf-e468b661b362&autoAuth=true&ctid=0b9b90da-3fe1-457a-b340-f1b67e1024fb&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtZXVyb3BlLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0In0%3D",
      description: "quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
      image: "http://dummyimage.com/239x174.jpg/5fa2dd/ffffff",
      applications: []
    }
  ];
}
