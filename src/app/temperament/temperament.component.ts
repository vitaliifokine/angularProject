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
           'rgba(196, 49, 122, 1)',
           'rgba(43, 168, 128, 1)',
           'rgba(255, 238, 209, 1)',
           'rgba(104, 182, 255, 1)'
       ],
       borderColor: [
           'rgba(196, 49, 122,0.5)',
           'rgba(43, 168, 128, 1)',
           'rgba(255, 238, 209, 1)',
           'rgba(104, 182, 255, 1)'
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
