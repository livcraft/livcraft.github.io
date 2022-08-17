import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { MeshBasicMaterial, PointLight } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Write Ngame
    const letters = ['l','i','v',' ','s', 'c','h','i','r','m'];
    var i = 0;

    function writeQuestion() {
      document.getElementById('name').innerHTML += letters[i];
  
      if (i < 9) {
        i++;
        setTimeout(writeQuestion, 150);
      }
    }

    writeQuestion();
  
  }

}
