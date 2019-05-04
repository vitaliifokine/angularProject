import { Component,OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-temperament',
  templateUrl: './temperament.component.html',
  styleUrls: ['./temperament.component.css']
})
export class TemperamentComponent implements OnInit {
  PieChart=[];

  ngOnInit()
  {this.PieChart = new Chart('temperament', {
    type: 'pie',
  data: {
   labels: ["Choleric", "Melancholic", "Sanguine", "Phlegmatic"],
   datasets: [{
       label: '% of ',
       data: [25,50 , 10, 5],
       backgroundColor: [
           'rgba(167, 0, 66, 0.2)',
           'rgba(43, 168, 128, 0.2)',
           'rgba(255, 238, 209, 0.2)',
           'rgba(133, 231, 234, 0.2)'
       ],
       borderColor: [
           'rgba(255,99,132,1)',
           'rgba(124, 121, 82, 1)',
           'rgba(255, 206, 86, 1)',
           'rgba(75, 192, 192, 1)'
       ],
       borderWidth: 1
   }]
  }, 
  options: {
   title:{
       text:"Temperament Balance",
       display:false
   },
  }
  });
  }

}
