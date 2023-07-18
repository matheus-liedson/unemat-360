
var diretorio = "static/images/0.webp";
const fotos = []
var foto_anterior = 0

for (var i = 0; i < 13; i++) {
  
  diretorio = diretorio.replace((i-1)+".webp",i+".webp");

  fotos.push(new PANOLENS.ImagePanorama( diretorio ));

 
};



let imageContainer = document.querySelector('.image-container');


var infospotPositions = [
  
    new THREE.Vector3(-3000, 0, 200),
    new THREE.Vector3(3000, 0, -250),
    new THREE.Vector3(1000, 0, -3000),
    new THREE.Vector3(1000, 0, 3000),

    
  ];

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed: 0.2,
    controlBar: true,
    cameraFov : 80,
    viewIndicator: true,
   
});


function set_visao(foto) {
  var foto_atual = fotos.indexOf(foto)
  console.log(foto_anterior,"foto anterior")
  console.log(foto_atual,"foto atual")
  if((foto_anterior > foto_atual)){

    if(foto_anterior == 3 & foto_atual == 2 ){
      viewer.tweenControlCenter( infospotPositions[2], 0 ); 
      foto_anterior = foto_atual;

    }else{
      if((foto_anterior == 10) & (foto_atual == 2) ){
        foto_anterior = foto_atual;
        viewer.tweenControlCenter( infospotPositions[3], 0 );
          }else{
            if(foto_anterior == 12 & foto_atual == 11 ){
              viewer.tweenControlCenter( infospotPositions[1], 0 );
            foto_anterior = foto_atual}else{
              viewer.tweenControlCenter( infospotPositions[0], 0 );
              foto_anterior = foto_atual;
            }
            
          };
    };
  }else{
    if(foto_anterior == 10 & foto_atual == 11 ){
      viewer.tweenControlCenter( infospotPositions[0], 0 );
    foto_anterior = foto_atual

    }else{

      viewer.tweenControlCenter( infospotPositions[1], 0 );
      foto_anterior = foto_atual
    }
  };

};


function poster (foto,texto,local){

  infospot = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );

  infospot.position.set(local[0],local[1],local[2]);
  infospot.addHoverText( texto );

  foto.add(infospot);
  


}





function linkar(foto1,foto2,v1,v2){
  console.log(v1,"vetor");
  foto1.link(foto2,new THREE.Vector3( v1[0],v1[1],v1[2] ));
  foto2.link(foto1,new THREE.Vector3( v2[0],v2[1],v2[2] ));
};


linkar(fotos[0],fotos[1],[3000,0,-100],[-3000,0,200])

linkar(fotos[1],fotos[2],[3000,0,100],[- 3000,0,100])

linkar(fotos[2],fotos[3],[1000,0,2000],[-2000,0,0])


fotos[3].link(fotos[4],new THREE.Vector3(3000, 10, -200));
fotos[4].link(fotos[3],new THREE.Vector3(-3000, -10, 200));

fotos[4].link(fotos[5],new THREE.Vector3(3000, -10, -1000));
fotos[5].link(fotos[4],new THREE.Vector3( -1000 , 0,-2800));


fotos[5].link(fotos[6],new THREE.Vector3( 3000, 10, -100) );
fotos[6].link(fotos[5],new THREE.Vector3( -3000, 0, -100) );

fotos[6].link(fotos[7],new THREE.Vector3( 3000, 10, 0) );
fotos[7].link(fotos[6],new THREE.Vector3( -3000, 10, 100) );

fotos[7].link(fotos[8],new THREE.Vector3( 3000, 10, -100) );
fotos[8].link(fotos[7],new THREE.Vector3( -3000, 10, -50) );

fotos[8].link(fotos[9],new THREE.Vector3( 3000, -20, 0) );
fotos[9].link(fotos[8],new THREE.Vector3( -3000, 10, -100) );

fotos[2].link(fotos[10],new THREE.Vector3( 100, 0, -3000) );
fotos[10].link(fotos[2],new THREE.Vector3( -3000, 10, -100) );

fotos[10].link(fotos[11],new THREE.Vector3( 3000, 10, -100) );
fotos[11].link(fotos[10],new THREE.Vector3( 3000, 10, -100) );

fotos[11].link(fotos[12],new THREE.Vector3( -3000, 10, -100) );
fotos[12].link(fotos[11],new THREE.Vector3( -3000, 10, -300) );




fotos.forEach(function(foto){
  viewer.add(foto);
  foto.addEventListener( 'enter-start',function(){ set_visao(foto)});

  foto.addEventListener("click", function(e){
      if (e.intersects.length > 0) return;
      const a = viewer.raycaster.intersectObject(viewer.panorama, true)[0].point;
      console.log('click panorama\n', e, 'point\n', a);});

});



 poster(fotos[3],'RH, Liane',[1446.3757649478107, 100.342844438864, -4495.303614260743])

 poster(fotos[12],'auditório',[3500.136105097786, -411.63371725457824, -3536.2407945061354])





