var quantidade_botao = 12;

for( var b= 0; b<=quantidade_botao; b++){

    var novo_botao = `<button id="bp${b}"  onclick="mudarfoto(${b}); clic();" ontouchstart="mudarfoto(${b}); clic();" class="bsp0" >
    <img class="bspimg" src="/static/images/map_icon_red.png"></button>`;
    bsp = document.querySelector("#bsp");
    bsp.innerHTML += novo_botao;   
}


function clic(){
    if( img == 1){
        document.getElementById("img").style.display="none";
        document.getElementById("mapa").style.visibility="hidden";

        for (var id = 0; id<= quantidade_botao; id++ ){
            document.getElementById('bp'+id).style.visibility = "hidden";
        };
        return img=0;

    }else{
        document.getElementById("mapa").style.visibility="visible";
        document.getElementById("img").style.display="block";
        for (var id = 0; id<= quantidade_botao; id++ ){
            document.getElementById('bp'+id).style.visibility = "visible";
        };
        return img=1;
    }
};


function mudarfoto(id){

    viewer.setPanorama(fotos[id]);
};


//left, botoom
posicao_botao = [

    ["37.5%","-2%", 0],
    [ "37.5%","5%", 1],
    ["37.5%" ,"18%",2],
    ["30%"  ,"21%", 3],
    ["22%"   ,"21%",4],
    ["14%"   ,"21%",5],
    ["12.5%" ,"29%",6],
    ["12.5%" ,"46%",7],
    ["12.5%" ,"70%",8],
    ["12.5%" ,"90%",9],
    ["45%"  ,"21%",10],
    ["56%"  ,"21%",11],
    ["70%"  ,"21%",12],

];

for (var id = 0; id<= quantidade_botao; id++ ){
    document.getElementById('bp'+id).style.left = posicao_botao[id][0];
    document.getElementById('bp'+id).style.bottom =posicao_botao[id][1];
};





    

