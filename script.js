import * as THREE from "three"

// Canvas 
const canvas = document.querySelector('canvas.webgl');


// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: "red"});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
    width: window.innerWidth/2,
    height: window.innerHeight/2,
}


// Camera
const fov = 75;

const camera = new THREE.PerspectiveCamera(fov, sizes.width/sizes.height);
camera.position.z = 3;
let maxZ = 5;
let minZ = 1;
let curZ = 3;

scene.add(camera)

// Renderer
console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera)