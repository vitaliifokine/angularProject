import { Component,OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-polarity',
  templateUrl: './polarity.component.html',
  styleUrls: ['./polarity.component.css']
})
export class PolarityComponent implements OnInit {
  PieChart=[];

  ngOnInit()
  {this.PieChart = new Chart('polarity', {
    type: 'pie',
  data: {
   labels: ["Extravert", "Introvert"],
   datasets: [{
       label: '% of ',
       data: [25,50],
       backgroundColor: [
           'rgba(255, 99, 132, 0.2)',
           'rgba(54, 162, 235, 0.2)'
       ],
       borderColor: [
           'rgba(255,99,132,1)',
           'rgba(54, 162, 235, 1)'
       ],
       borderWidth: 1
   }]
  }, 
  options: {
   title:{
       text:"Polarity balance",
       display:false
   },
  }
  });
  }
}