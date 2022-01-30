import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { MeshBasicMaterial, PointLight } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.css']
})
export class FunComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Scene init

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, .1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#bg'),
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    // Toruses

    // blue
    const btorus_geometry = new THREE.TorusGeometry(5, 1, 10, 50);
    const btorus_material = new THREE.MeshStandardMaterial({ color: 0x0000FF })
    const btorus = new THREE.Mesh(btorus_geometry, btorus_material);

    const [bx, by, bz] = [-30, 0, 30];
    btorus.position.set(bx,by,bz);
    scene.add(btorus);

    // pink
    const ptorus_geometry = new THREE.TorusGeometry(10, 3, 20, 70);
    const ptorus_material = new THREE.MeshStandardMaterial({ color: 0xe469e0 })
    const ptorus = new THREE.Mesh(ptorus_geometry, ptorus_material);

    const [px, py, pz] = [10, 5, 40];
    ptorus.position.set(px,py,pz);
    scene.add(ptorus);
    
    // yellow
    const ytorus_geometry = new THREE.TorusGeometry(6, 3, 40, 50);
    const ytorus_material = new THREE.MeshStandardMaterial({ color: 0xf9f280 })
    const ytorus = new THREE.Mesh(ytorus_geometry, ytorus_material);

    const [yx, yy, yz] = [-20, 20, 15];
    ptorus.position.set(yx,yy,yz);
    scene.add(ytorus);
    
    // green
    const gtorus_geometry = new THREE.TorusGeometry(10, 3, 20, 40);
    const gtorus_material = new THREE.MeshStandardMaterial({ color: 0x5bd551 })
    const gtorus = new THREE.Mesh(gtorus_geometry, gtorus_material);

    const [gx, gy, gz] = [40, 40, -20];
    gtorus.position.set(gx,gy,gz);
    scene.add(gtorus);

    // purple
    const putorus_geometry = new THREE.TorusGeometry(7, 4, 10, 15);
    const putorus_material = new THREE.MeshStandardMaterial({ color: 0x530a9b })
    const putorus = new THREE.Mesh(putorus_geometry, putorus_material);

    const [pux, puy, puz] = [30, -20, 10];
    putorus.position.set(pux,puy,puz);
    scene.add(putorus);

    // red
    const rtorus_geometry = new THREE.TorusGeometry(5, 2, 7, 9);
    const rtorus_material = new THREE.MeshStandardMaterial({ color: 0xf83721 })
    const rtorus = new THREE.Mesh(rtorus_geometry, rtorus_material);

    const [rx, ry, rz] = [25, 5, 0];
    rtorus.position.set(rx,ry,rz);
    scene.add(rtorus);

    // orange
    const otorus_geometry = new THREE.TorusGeometry(6, 4, 10, 12);
    const otorus_material = new THREE.MeshStandardMaterial({ color: 0xeb9400 })
    const otorus = new THREE.Mesh(otorus_geometry, otorus_material);

    const [ox, oy, oz] = [-20, -20, 20];
    otorus.position.set(ox,oy,oz);
    scene.add(otorus);
  
    // Scene light

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5,5,5);

    const ambientLight = new THREE.AmbientLight(0xFffcec);
    scene.add(pointLight, ambientLight);

    // Light and grid helpers

    // const lightHelper = new THREE.PointLightHelper(pointLight);
    // const gridHelper = new THREE.GridHelper(200,50);
    // scene.add(lightHelper, gridHelper);

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

    Array(200).fill(undefined).forEach(addStar);

    // Space background

    const spaceTexture = new THREE.TextureLoader().load('../assets/spbck.jpeg');
    scene.background = spaceTexture;

    // Sun

    const sunTexture = new THREE.TextureLoader().load('../assets/sun.jpeg');
    const normalTexture = new THREE.TextureLoader().load('../assets/normal.webp');
    const sun = new THREE.Mesh( new THREE.SphereGeometry(3, 32, 32), new THREE.MeshStandardMaterial( { map: sunTexture, normalMap: normalTexture })
    );
    sun.position.z = 30;
    sun.position.setX(-5);
    scene.add(sun);

    // Move camera

    function moveCamera() {
      const t = document.body.getBoundingClientRect().top;

      sun.rotation.x += 0.05;
      sun.rotation.y += 0.075;
      sun.rotation.z += 0.05;

      camera.position.z = t * -0.01;
      camera.position.x = t * -0.0002;
      camera.position.y = t * -0.0002;
    }
    document.body.onscroll = moveCamera;

    // Animate

    function animate() {
      requestAnimationFrame(animate);

      // blue
      btorus.rotation.x += 0.01;
      btorus.rotation.y += 0.005;
      btorus.rotation.z += 0.01;

      // pink
      ptorus.rotation.x += 0.02;
      ptorus.rotation.y += 0.001;
      ptorus.rotation.z += 0.02;

      // yellow
      ytorus.rotation.x += 0.04;
      ytorus.rotation.y += 0.0005;
      ytorus.rotation.z += 0.03;

      // green
      gtorus.rotation.x += 0.009;
      gtorus.rotation.y += 0.03;
      gtorus.rotation.z += 0.005;

      // purple
      putorus.rotation.x += 0.01;
      putorus.rotation.y += 0.005;
      putorus.rotation.z += 0.001;

      // red
      rtorus.rotation.x += 0.006;
      rtorus.rotation.y += 0.008;
      rtorus.rotation.z += 0.002;

      // orange
      otorus.rotation.x += 0.003;
      otorus.rotation.y += 0.05;
      otorus.rotation.z += 0.009;

      controls.update();

      renderer.render(scene, camera);
    }

    animate();

  }

}
