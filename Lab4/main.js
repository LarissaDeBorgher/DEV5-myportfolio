import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



//add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

//add ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// add directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 2, 1);
scene.add(directionalLight);

//add wall1
const wall1Geometry = new THREE.BoxGeometry( 5, 4, 0.5);
const wall1Material = new THREE.MeshBasicMaterial( { color: 0xffffff } );

const wall1 = new THREE.Mesh( wall1Geometry, wall1Material );
scene.add(wall1);
wall1.position.z = -5;
wall1.position.y = 2.5;
camera.position.z = 5;

// add wall2
const wall2Geometry = new THREE.BoxGeometry( 0.5, 4, 5);
const wall2Material = new THREE.MeshBasicMaterial( { color: 0xffffff } );

const wall2 = new THREE.Mesh( wall2Geometry, wall2Material );
scene.add(wall2);
wall2.position.z = -2.3;
wall2.position.y = 2.5;
wall2.position.x = 2.3;

// add wall3
const wall3Geometry = new THREE.BoxGeometry( 0.5, 4, 5);
const wall3Material = new THREE.MeshBasicMaterial( { color: 0xffffff } );

const wall3 = new THREE.Mesh( wall3Geometry, wall3Material );
scene.add(wall3);
wall3.position.z = -2.3;
wall3.position.y = 2.5;
wall3.position.x = -2.3;

// add toren1
const toren1Geometry = new THREE.CylinderGeometry( 2, 2, 7, 32 );
const toren1Material = new THREE.MeshBasicMaterial( {color: 0xffffff} );

const toren1 = new THREE.Mesh( toren1Geometry, toren1Material );
scene.add( toren1 );
toren1.position.y = 4;
toren1.position.x = -4.5;
toren1.position.z = -2.5;


// add toren2
const toren2Geometry = new THREE.CylinderGeometry( 2, 2, 7, 32 );
const toren2Material = new THREE.MeshBasicMaterial( {color: 0xffffff} );

const toren2 = new THREE.Mesh( toren2Geometry, toren2Material );
scene.add( toren2 );
toren2.position.y = 4;
toren2.position.x = 4.5;
toren2.position.z = -2.5;

//add roof1
const roof1Geometry = new THREE.ConeGeometry( 4, 4, 4 );
const roof1Material = new THREE.MeshBasicMaterial( {color: 0xff0099} );
const roof1 = new THREE.Mesh( roof1Geometry, roof1Material );
scene.add( roof1 );
roof1.position.y = 6.5;
roof1.position.z = -2.5;
roof1.rotateY(Math.PI/4);

//add roof2
const roof2Geometry = new THREE.ConeGeometry( 3, 3, 8 );
const roof2Material = new THREE.MeshBasicMaterial( {color: 0xff0099} );
const roof2 = new THREE.Mesh( roof2Geometry, roof2Material );
scene.add( roof2 );
roof2.position.y = 9;
roof2.position.z = -2.5;
roof2.position.x = -4.5;


//add roof2
const roof3Geometry = new THREE.ConeGeometry( 3, 3, 8 );
const roof3Material = new THREE.MeshBasicMaterial( {color: 0xff0099} );
const roof3 = new THREE.Mesh( roof3Geometry, roof3Material );
scene.add( roof3 );
roof3.position.y = 9;
roof3.position.z = -2.5;
roof3.position.x = 4.5;


function animate() {
  requestAnimationFrame( animate );

  

  renderer.render( scene, camera );
};

animate();