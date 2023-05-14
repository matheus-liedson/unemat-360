const foto1 = new PANOLENS.ImagePanorama( 'static/images/foto1.jpeg' );

const foto2 = new PANOLENS.ImagePanorama('static/images/foto2.jpeg');
const foto3= new PANOLENS.ImagePanorama('static/images/foto3.jpg');
const foto4 = new PANOLENS.ImagePanorama('static/images/foto4.jpeg');
const foto5 = new PANOLENS.ImagePanorama('static/images/foto5.jpeg');




let imageContainer = document.querySelector('.image-container')


var infospotPositions = [
  
    new THREE.Vector3(-3000, -10, 200),
    new THREE.Vector3(3000, 10, -250),
    new THREE.Vector3(-2000,200,-2000)
    
  ];

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    controlBar: true,
});



foto1.link(foto2,infospotPositions[0])
foto2.link(foto1,infospotPositions[1])



foto2.link(foto3,infospotPositions[0])
foto3.link(foto2,infospotPositions[1])

foto3.link(foto4,infospotPositions[0])
foto4.link(foto3,infospotPositions[1])

foto4.link(foto5,infospotPositions[0])
foto5.link(foto4,infospotPositions[1])




viewer.add( foto2,foto1,foto3,foto4,foto5 );

