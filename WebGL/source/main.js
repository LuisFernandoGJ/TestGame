var camera, scene, renderer, mesh;

Game_Init();
Game_Loop();

function Game_Init(){
	camera = new THREE.OrthographicCamera( -480, 480, 270, -270, 1, 2000 );
	camera.position.z = 400;
	
	scene = new THREE.Scene();
	
	var texture = new THREE.TextureLoader().load('source/images/Fohxel1.png');

	var geometry = new THREE.PlaneGeometry(200, 200, 1, 1);
	var material = new THREE.MeshBasicMaterial( { map: texture } );
	
	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );
	
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
	
	//window.addEventListener('resize', WindowResize, false );
}

function WindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function Game_Loop(){
	requestAnimationFrame(Game_Loop);
	
	renderer.render( scene, camera );
}
