import { Component,OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-temperament',
  templateUrl: './temperament.component.html',
  styleUrls: ['./temperament.component.scss']
})
export class TemperamentComponent implements OnInit {
  PieChart=[];

  ngOnInit()
  {this.PieChart = new Chart('polarity', {
    type: 'pie',
  data: {
   labels: ["Choleric", "Melancholic", "Sanguine", "Phlegmatic"],
   datasets: [{
       label: '% of ',
       data: [25,50 , 10, 5],
       backgroundColor: [
           'rgba(255, 99, 132, 0.2)',
           'rgba(54, 162, 235, 0.2)',
           'rgba(255, 206, 86, 0.2)',
           'rgba(75, 192, 192, 0.2)'
       ],
       borderColor: [
           'rgba(255,99,132,1)',
           'rgba(54, 162, 235, 1)',
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
