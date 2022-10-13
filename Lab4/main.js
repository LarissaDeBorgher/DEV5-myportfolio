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

// add wall2
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




function animate() {
  requestAnimationFrame( animate );

  

  renderer.render( scene, camera );
};

animate();