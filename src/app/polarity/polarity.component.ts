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
         //167, 0, 66
           "rgba(196, 49, 122, 1)",
           "rgba(37, 103, 196, 1)"
       ],
       borderColor: [
           "rgba(196, 49, 122, 0.5)",
           "rgba(37, 103, 196, 0.5)"
       ],
       borderWidth: 2
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