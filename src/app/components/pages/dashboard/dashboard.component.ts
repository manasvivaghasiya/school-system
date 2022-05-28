import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var options = {
      chart: {
        type: 'line',
        height:'500vh',
        width:'100%',
        color:'pink',
        toolbar: {
          show: false
        },
      },
      stroke: {
      curve: 'smooth',
    },

      series: [{
        name: 'sales',
        data: [0,250,500,750]
      },{
        name: 'sales',
        data: [550,700,250,0]

      }],
      xaxis: {
        // categories: [JAN,FEB,MAR,APR,MAY,JUN]
        categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
      }
    }
    
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    
    chart.render();
  }

}
