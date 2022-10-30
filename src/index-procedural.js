import * as THREE from "THREE";

// Create Scene, Camera and Renderer
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
const camera = new THREE.PerspectiveCamera(
	45,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
camera.position.z = 10;
document.body.appendChild(renderer.domElement);

// Set renderer Appearance
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor("white");
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputEncoding = THREE.sRGBEncoding;

// Create Cube Mesh
const cubeGeo = new THREE.BoxGeometry(1, 1, 1);
const cubeMat = new THREE.MeshLambertMaterial({ color: "cyan" });
const cube = new THREE.Mesh(cubeGeo, cubeMat);
scene.add(cube);

// Create Lights for scene
const ambientLight = new THREE.AmbientLight("white");
const pointLight = new THREE.PointLight("white");
pointLight.position.set(10, 10, 10);
scene.add(ambientLight);
scene.add(pointLight);

// Add Callback to resize event for resizing canvas when window is resized
window.addEventListener("resize", resize);

function resize() {
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
}

// Animate function to animate and render at every frame
function animate() {
	cube.rotation.x += 0.01;
	cube.rotation.z += 0.005;

	renderer.render(scene, camera);
	requestAnimationFrame(animate);
}

// Calling Animate function to start the animation
animate();
