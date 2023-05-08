const foto1 = new PANOLENS.ImagePanorama( 'static/images/foto1.jpeg' );

const foto2 = new PANOLENS.ImagePanorama('static/images/foto2.jpeg');
const foto3= new PANOLENS.ImagePanorama('static/images/foto3.jpeg');
const foto4 = new PANOLENS.ImagePanorama('static/images/foto4.jpeg');
const foto5 = new PANOLENS.ImagePanorama('static/images/foto5.jpeg');




let imageContainer = document.querySelector('.image-container')


var infospotPositions = [
  
    new THREE.Vector3(-2136.06, 16.30, 890.14),
    new THREE.Vector3(-3136.06, 296.30, -4290.14),
    new THREE.Vector3(-2000,200,-2000)
    
  ];

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    controlBar: true,
});



foto1.link(foto2,infospotPositions[0])
foto2.link(foto1,infospotPositions[0])

foto2.link(foto3,infospotPositions[2])


viewer.add( foto1,foto2,foto3 );

