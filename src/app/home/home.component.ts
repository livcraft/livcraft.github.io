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
    // Scene init

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, .1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#hs'),
    });

    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ").substring(11,dateString.length+1);
    timeDisplay.textContent = formattedString;


    document.getElementById('introwrap').onclick = function changeContent() {
      document.getElementById('hs').style.display = "none";
      document.getElementById('conttt').style.display = "none";
      document.getElementById('mainpage').style.display = "block";
    };

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    // Toruses

    // blue
    const btorus_geometry = new THREE.IcosahedronGeometry(5, 0);
    const btorus_material = new THREE.MeshStandardMaterial({ color: 0x8E44AD })
    const btorus = new THREE.Mesh(btorus_geometry, btorus_material);

    const [bx, by, bz] = [0, 0, 0];
    btorus.position.set(bx,by,bz);
    scene.add(btorus);
  
    // Scene light

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5,5,5);

    const ambientLight = new THREE.AmbientLight(0xFffcec);
    scene.add(pointLight, ambientLight);

    // Light and grid helpers

    const controls = new OrbitControls(camera, renderer.domElement)

    // Stars in background

    const star_geometry = new THREE.SphereGeometry(.25, 24, 24);

    function addStar() {
      const star_material = new THREE.MeshStandardMaterial( { color: '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0') });
      const star = new THREE.Mesh(star_geometry, star_material);
      

      const [x, y, z] = Array(3).fill(undefined).map(() => THREE.MathUtils.randFloatSpread(100));
      star.position.set(x,y,z);
      scene.add(star);
    }

    Array(150).fill(undefined).forEach(addStar);

    // Space background

    const spaceTexture = new THREE.TextureLoader().load('../assets/pap.jpeg');
    scene.background = spaceTexture;

    // Move camera

    function moveCamera() {
      const t = document.body.getBoundingClientRect().top;

      camera.position.z = t * -0.01;
      camera.position.x = t * -0.0002;
      camera.position.y = t * -0.0002;
    }
    document.body.onscroll = moveCamera;

    // Ask Question
    const letters = ['w','h','a','t',' ','b','r','i','n','g','s',' ','y','o','u',' ','h','e','r','e','?'];
    var i = 0;

    function writeQuestion() {
      document.getElementById('funquestion').innerHTML += letters[i];
      i++;
      if (i < 21) {
        setTimeout(writeQuestion, 150);
      } else {
        setTimeout(writeClick, 500);
      }
    }

    writeQuestion();

    // Click
    const clickLetters = ['(','c','l','i','c','k',')'];
    var j = 0;

    function writeClick() {
      document.getElementById('clickme').innerHTML += clickLetters[j];
      j++;
      if (j < 7) {
        setTimeout(writeClick, 150);
      }
    }

    // Animate

    function animate() {
      requestAnimationFrame(animate);

      // blue
      btorus.rotation.x += 0.001;
      btorus.rotation.y += 0.005;
      btorus.rotation.z += 0.001;

      const timeDisplay = document.getElementById("time");
      const dateString = new Date().toLocaleString();
      const formattedString = dateString.replace(", ", " - ").substring(11,dateString.length+1);
      timeDisplay.textContent = formattedString;

      controls.update();

      renderer.render(scene, camera);
    }

    animate();
  
  }

}
