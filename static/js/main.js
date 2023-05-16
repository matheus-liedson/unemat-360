

var local = "static/images/foto0.webp";
const fotos = []

for (var i = 0; i < 13; i++) {

  local = local.replace("foto"+(i-1),"foto"+i);
  fotos.push(new PANOLENS.ImagePanorama( local ));
  
}



let imageContainer = document.querySelector('.image-container');


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

fotos[12].link(fotos[0],new THREE.Vector3( 3000, 10, -100) );
fotos[0].link(fotos[12],new THREE.Vector3(- 3100,  0, 200 ));

fotos[0].link(fotos[1],new THREE.Vector3(3100,  0, 200 ));
fotos[1].link(fotos[0],new THREE.Vector3(-2800, -100,-100));


fotos[1].link(fotos[2],new THREE.Vector3(1000,10,2000));
fotos[2].link(fotos[1],new THREE.Vector3(-2000,-50,0));

fotos[2].link(fotos[3],new THREE.Vector3(3000, 10, -200));
fotos[3].link(fotos[2],new THREE.Vector3(-3000, -10, 200));

fotos[3].link(fotos[4],new THREE.Vector3(3000, -10, -1000));
fotos[4].link(fotos[3],new THREE.Vector3( -1000 , 0,-2800));


fotos[4].link(fotos[5],new THREE.Vector3( 3000, 10, -100) );
fotos[5].link(fotos[4],new THREE.Vector3( -3000, 0, -100) );

fotos[5].link(fotos[6],new THREE.Vector3( 3000, 10, 0) );
fotos[6].link(fotos[5],new THREE.Vector3( -3000, 10, 100) );

fotos[6].link(fotos[7],new THREE.Vector3( 3000, 10, -100) );
fotos[7].link(fotos[6],new THREE.Vector3( -3000, 10, -50) );

fotos[7].link(fotos[8],new THREE.Vector3( 3000, -20, 0) );
fotos[8].link(fotos[7],new THREE.Vector3( -3000, 10, -100) );

fotos[1].link(fotos[9],new THREE.Vector3( 1000, 10, -2000) );
fotos[9].link(fotos[1],new THREE.Vector3( -3000, 10, -100) );

fotos[9].link(fotos[10],new THREE.Vector3( 3000, 10, -100) );
fotos[10].link(fotos[9],new THREE.Vector3( 3000, 10, -100) );

fotos[10].link(fotos[11],new THREE.Vector3( -3000, 10, -100) );
fotos[11].link(fotos[10],new THREE.Vector3( -3000, 10, -300) );


viewer.add(fotos[12])

fotos.forEach(function(foto){
  viewer.add(foto);
});



