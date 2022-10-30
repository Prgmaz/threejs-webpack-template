import * as THREE from "three";

class Canvas {
	constructor() {
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(
			45,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		this.renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true,
		});
		this.cube = new THREE.Mesh(
			new THREE.BoxGeometry(1, 1, 1),
			new THREE.MeshLambertMaterial({ color: "cyan" })
		);
		this.ambientLight = new THREE.AmbientLight(0xffffff);
		this.pointLight = new THREE.PointLight(0xffffff);

		this.init();
	}

	init() {
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.renderer.setClearColor("white");
		this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
		this.renderer.outputEncoding = THREE.sRGBEncoding;
		this.camera.position.z = 10;
		this.pointLight.position.set(10, 10, 10);

		this.scene.add(this.cube);
		this.scene.add(this.ambientLight);
		this.scene.add(this.pointLight);

		document.body.appendChild(this.renderer.domElement);
		window.addEventListener("resize", this.resize.bind(this));
		this.animate();
	}

	resize() {
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
	}

	render() {
		this.renderer.render(this.scene, this.camera);
	}

	animate() {
		this.cube.rotation.x += 0.01;
		this.cube.rotation.z += 0.005;

		this.render();
		window.requestAnimationFrame(this.animate.bind(this));
	}
}

export default Canvas;
