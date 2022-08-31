
function solve(){
    var a1=document.getElementById(String('1')).value;
    var a2=document.getElementById(String('2')).value;
    var a3=document.getElementById(String('3')).value;
    var a4=document.getElementById(String('4')).value;
    var a5=document.getElementById(String('5')).value;
    var a6=document.getElementById(String('6')).value;
    var a7=document.getElementById(String('7')).value;
    var a8=document.getElementById(String('8')).value;
    var a9=document.getElementById(String('9')).value;

    var a10=document.getElementById(String('10')).value;
    var a11=document.getElementById(String('11')).value;
    var a12=document.getElementById(String('12')).value;
    var a13=document.getElementById(String('13')).value;
    var a14=document.getElementById(String('14')).value;
    var a15=document.getElementById(String('15')).value;
    var a16=document.getElementById(String('16')).value;
    var a17=document.getElementById(String('17')).value;
    var a18=document.getElementById(String('18')).value;
    var a19=document.getElementById(String('19')).value;

    var a20=document.getElementById(String('20')).value;
    var a21=document.getElementById(String('21')).value;
    var a22=document.getElementById(String('22')).value;
    var a23=document.getElementById(String('23')).value;
    var a24=document.getElementById(String('24')).value;
    var a25=document.getElementById(String('25')).value;
    var a26=document.getElementById(String('26')).value;
    var a27=document.getElementById(String('27')).value;
    var a28=document.getElementById(String('28')).value;

    var a29=document.getElementById(String('29')).value;
    var a30=document.getElementById(String('30')).value;
    var a31=document.getElementById(String('31')).value;
    var a32=document.getElementById(String('32')).value;
    var a33=document.getElementById(String('33')).value;
    var a34=document.getElementById(String('34')).value;
    var a35=document.getElementById(String('35')).value;
    var a36=document.getElementById(String('36')).value;
    var a37=document.getElementById(String('37')).value;

    var a38=document.getElementById(String('38')).value;
    var a39=document.getElementById(String('39')).value;
    var a40=document.getElementById(String('40')).value;
    var a41=document.getElementById(String('41')).value;
    var a42=document.getElementById(String('42')).value;
    var a43=document.getElementById(String('43')).value;
    var a44=document.getElementById(String('44')).value;
    var a45=document.getElementById(String('45')).value;
    var a46=document.getElementById(String('46')).value;

    var a47=document.getElementById(String('47')).value;
    var a48=document.getElementById(String('48')).value;
    var a49=document.getElementById(String('49')).value;
    var a50=document.getElementById(String('50')).value;
    var a51=document.getElementById(String('51')).value;
    var a52=document.getElementById(String('52')).value;
    var a53=document.getElementById(String('53')).value;
    var a54=document.getElementById(String('54')).value;
    var a55=document.getElementById(String('55')).value;

    var a56=document.getElementById(String('56')).value;
    var a57=document.getElementById(String('57')).value;
    var a58=document.getElementById(String('58')).value;
    var a59=document.getElementById(String('59')).value;
    var a60=document.getElementById(String('60')).value;
    var a61=document.getElementById(String('61')).value;
    var a62=document.getElementById(String('62')).value;
    var a63=document.getElementById(String('63')).value;
    var a64=document.getElementById(String('64')).value;

    var a65=document.getElementById(String('65')).value;
    var a66=document.getElementById(String('66')).value;
    var a67=document.getElementById(String('67')).value;
    var a68=document.getElementById(String('68')).value;
    var a69=document.getElementById(String('69')).value;
    var a70=document.getElementById(String('70')).value;
    var a71=document.getElementById(String('71')).value;
    var a72=document.getElementById(String('72')).value;
    var a73=document.getElementById(String('73')).value;

    var a74=document.getElementById(String('74')).value;
    var a75=document.getElementById(String('75')).value;
    var a76=document.getElementById(String('76')).value;
    var a77=document.getElementById(String('77')).value;
    var a78=document.getElementById(String('78')).value;
    var a79=document.getElementById(String('79')).value;
    var a80=document.getElementById(String('80')).value;
    var a81=document.getElementById(String('81')).value;
    var sudoku = /* El Sudoku como es planteado. Los ceros(0) son las casillas vacías a completar */
    [ [ a1, a2, a3, a4, a5, a6, a7, a8, a9],
    [ a10, a11, a12, a13, a14, a15, a16, a17, a18],
    [ a19, a20, a21, a22, a23, a24, a25, a26, a27],
    [ a28, a29, a30, a31, a32, a33, a34, a35, a36],
    [ a37, a38, a39, a40, a41, a42, a43, a44, a45],
    [ a46, a47, a48, a49, a50, a51, a52, a53, a54],
    [ a55, a56, a57, a58, a59, a60, a61, a62, a63],
    [ a64, a65, a66, a67, a68, a69, a70, a71, a72],
    [ a73, a74, a75, a76, a77, a78, a79, a80, a81]
    ];
    
    var finalizo=false; /* Mantiene el ciclo hasta que resuelva el Sudoku */
    var ciclos=0;   /* Lleva el número de iteraciones */

    var solucion = new Array(); /* Tablero en el que se trabaja */
    for (var fila=0; fila<9; fila++){
        solucion[fila] = [];
        for (var columna=0; columna<9; columna++)
            solucion[fila][columna]=0;
    }
    var DESTRUYE = 700;   /* Cada cuantos ciclos borra números para destrabar */

    /* Ciclo que llenará el sudoku completamente */
    do{   
        for (var fila=0; fila<9; fila++){    /* Se copia el sudoku sobre el tablero a evaluar */
            for (var columna=0; columna<9; columna++)
                if (sudoku[fila][columna] != 0) solucion[fila][columna] = sudoku[fila][columna];
        }

        var numValido=true;
        do { /* Busca un número al azar para colocar en alguna celda */
            var posX = Math.floor(Math.random()*9);     /* Una posición X de 0 a 8 */
            var posY = Math.floor(Math.random()*9);     /* Una posición Y de 0 a 8 */
            var numero = Math.floor(Math.random()*9) + 1;     /* Un número al azar de 1 a 9 */
            numValido=true;     /* Chequea si el número no se repite ni vertical ni horizontalmente */
            for (var cont=0; cont<9; cont++) if (solucion[cont][posY]==numero || solucion[posX][cont]==numero) numValido=false;
            if (numValido) solucion[posX][posY]=numero; /* Si el número no se repite entonces lo coloca en el tablero */
        }while(!numValido);

        /* Chequea que NO se viole la regla de que cada uno de los 9 cuadros internos no repita número */
        for (var cuadroX=0; cuadroX<=6; cuadroX+=3)
            for (var cuadroY=0; cuadroY<=6; cuadroY+=3){
                var numRepite=0;
                for (var valor=1; valor<=9; valor++){
                    numRepite=0;
                    for (var posX=0; posX<3; posX++)
                        for (var posY=0; posY<3; posY++){
                            if (solucion[cuadroX+posX][cuadroY+posY]==valor) numRepite++;
                            if (numRepite>1) break;
                        }

                    if (numRepite>1) /* Si detecta repetición, entonces borra todos los números repetidos */
                        for (var posX=0; posX<3; posX++)
                            for (var posY=0; posY<3; posY++)
                            if (solucion[cuadroX+posX][cuadroY+posY]==valor) solucion[cuadroX+posX][cuadroY+posY]=0;
                }
            }

            finalizo=true; /* Chequea si se completó el sudoku completamente */
            for (var posX=0; posX<9; posX++)
                for (var posY=0; posY<9; posY++)
                    if (solucion[posX][posY]==0) finalizo=false;
            
            ciclos++; /* Cada ciertos ciclos para destrabar, borra la tercera parte de lo completado */
            if (ciclos%DESTRUYE==0)
                for (var posX=0; posX<9; posX++)
                    for (var posY=0; posY<9; posY++)
                        if (Math.floor(Math.random()*3)==0) solucion[posX][posY]=0;
    }while (!finalizo);

    document.write("<p style='font-family:courier new;'>");
    document.write("Ciclos totales: " + ciclos + "</p>");
    for (var posX=0; posX<9; posX++){
        document.write("<p style='font-family:courier new;'>");
        for (var posY=0; posY<9; posY++)
            document.write(solucion[posX][posY] + " ");
        document.write("</p>");
    }
        
}
