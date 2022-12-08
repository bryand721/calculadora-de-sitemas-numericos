var valor=document.getElementById("valor1") 
valor.addEventListener('keyup',convertir)
txtresultado=document.getElementById("resultado1")

unidad1=document.getElementById("unidad1")
unidad1.addEventListener('change',convertir)

unidad2=document.getElementById("unidad2")
unidad2.addEventListener('change',convertir)

var salida;

var resultado;

function convertir(){  

  if (valor.value==''){ 
   return
   }
   numero=valor.value
   numero=parseFloat(numero)

  if(unidad1.value=="decimal"&& unidad2.value=="binario"){
    
    var residuos=[]

    while(numero>1){ 
     residuos.push(numero % 2)
     numero=Math.floor(numero /2)
    }
    residuos.push(numero)
    var bin =   parseInt(residuos.reverse().join(""))
    
     txtresultado.innerHTML= valor.value+"  equivale a " + bin + " en binario"
    
    } 
    if(unidad1.value=="binario"&& unidad2.value=="binario"){
     resultado=numero*1
     txtresultado.innerHTML=numero+ "  equivale a " + resultado + " en binario"
    }
    if(unidad1.value=="binario"&& unidad2.value=="hexadecimal"){
      function BinarioADecimal(num) {
         var sum = 0;   
         for (let i = 0; i < num.length; i++) {
            sum += +num[i] * 2 ** (num.length - 1 - i);
         }
         return sum; 
     }
     
       var octal=BinarioADecimal(valor.value);

     var residuos=[]

      while(octal>1){ 
         residuos.push(octal % 16)
         octal=Math.floor(octal /16)
      }
      residuos.push(octal)
      var bin =   parseInt(residuos.reverse().join(""))
      txtresultado.innerHTML=valor.value+"  equivale a " +  bin + " en decimal"    
    }
    if(unidad1.value=="binario"&& unidad2.value=="octal"){
      function BinarioADecimal(num) {
         var sum = 0;   
         for (let i = 0; i < num.length; i++) {
            sum += +num[i] * 2 ** (num.length - 1 - i);
         }
         return sum; 
     }
     
       var octal=BinarioADecimal(valor.value);

     var residuos=[]

      while(octal>1){ 
         residuos.push(octal % 8)
         octal=Math.floor(octal /8)
      }
      residuos.push(octal)
      var bin =   parseInt(residuos.reverse().join(""))

       



        txtresultado.innerHTML=valor.value+"  equivale a " +  bin + " en octal"    
    
    }
    if(unidad1.value=="decimal"&& unidad2.value=="decimal"){
     resultado=numero*1
     txtresultado.innerHTML=numero+ "  equivale a " + resultado + " en decimal"
    }
    if(unidad1.value=="decimal"&& unidad2.value=="octal"){
      var residuos=[]

      while(numero>1){ 
       residuos.push(numero %8)
       numero=Math.floor(numero /8)
      }
      residuos.push(numero)
      var bin =   parseInt(residuos.reverse().join(""))
      
       txtresultado.innerHTML= valor.value+"  equivale a " + bin + " en octal"
    }
    if(unidad1.value=="decimal"&& unidad2.value=="hexadecimal"){

      
      var residuos=[]

      while(numero>1){ 
       residuos.push(numero % 16)
       numero=Math.floor(numero /16)
      }
      residuos.push(numero)
      var bin =   parseInt(residuos.reverse().join(""))
      
       txtresultado.innerHTML= valor.value+"  equivale a " + bin + " en hexadecimal"
    }
    if(unidad1.value=="binario"&& unidad2.value=="decimal"){   
      function BinarioADecimal(num) {
        var sum = 0;   
        for (let i = 0; i < num.length; i++) {
           sum += +num[i] * 2 ** (num.length - 1 - i);
        }
        return sum; 
    } 
    txtresultado.innerHTML= valor.value+"  equivale a " + BinarioADecimal(valor.value) + " en octal"
    }
    if(unidad1.value=="hexadecimal"&& unidad2.value=="hexadecimal"){
     resultado=numero*1
     txtresultado.innerHTML=numero+ " equivale a " + resultado + " en hexadecimal"
    }
    if(unidad1.value=="hexadecimal"&& unidad2.value=="binario"){
     resultado=numero/4828
     txtresultado.innerHTML=numero+ " equivale a " + resultado + "en binario"
    }
    if(unidad1.value=="hexadecimal"&& unidad2.value=="decimal"){

         let primer = 0
         let segund = 0
         let tercer = 0
         let cuarto = 0
         let arr = []
         let almacenar = []
         let adivinar = document.getElementById("valor1").value;
         declarador = adivinar
         for (let i = 0; i < declarador.length; i++) {
             if (declarador[i] == "A") {
                 almacenar.push(10)
             }
             else if (declarador[i] == "B") {
                 almacenar.push(11)
             }
             else if (declarador[i] == "C") {
                 almacenar.push(12)
             }
             else if (declarador[i] == "D") {
                 almacenar.push(13)
             }
             else if (declarador[i] == "E") {
                 almacenar.push(14)
             }
             else if (declarador[i] == "F") {
                 almacenar.push(15)
             } else {
                 primer = parseInt(declarador[i])
                 almacenar.push(a)
             }
         }
         for (let i = almacenar.length - 1; i >= 0; i--) {
             segund = almacenar[i] * Math.pow(16, tercer)
             tercer++;
             cuarto = cuarto + segund
             arr.push(cuarto)
         }
         let ultimo = arr[arr.length - 1]
         document.getElementById("responder").value = ultimo
     

     resultado=numero/1609
      txtresultado.innerHTML=numero+ " equivale a " + resultado + " en decimal"
    }
    if(unidad1.value=="hexadecimal"&& unidad2.value=="octal"){
     resultado=numero*3281
     txtresultado.innerHTML=numero+ " equivale a " + resultado + " en octal"
    }
    if(unidad1.value=="octal"&& unidad2.value=="octal"){
     resultado=numero*1
     txtresultado.innerHTML=numero+ "  equivale a " + resultado + " en octal"
    }
    if(unidad1.value=="octal"&& unidad2.value=="decimal"){
      
      let entrada=valor.value
      let base=0
      let dar=0
      let array=[];
      for (let i=entrada.length-1; i>=0;i--){
         p=parseInt(entrada[i]) * Math.pow(8, base)
         base++;
         dar=dar+p
         array.push(dar)
      }
      var ultimo=array[array.length-1]
      console.log(ultimo);
      console.log(valor.value);
      txtresultado.innerHTML=valor.value+"  equivale a " +  ultimo + " en decimal"    
    
    }
    if(unidad1.value=="octal"&& unidad2.value=="hexadecimal"){
     resultado=numero*1
     txtresultado.innerHTML=numero+ " equivale a " + resultado + " en hexadecimal"
    } 
    if(unidad1.value=="octal"&& unidad2.value=="binario"){
      function BinarioADecimal(num) {
        var sum = 0;   
        for (let i = 0; i < num.length; i++) {
           sum += +num[i] * 8 ** (num.length + 4 + i);
        }
        return sum; 
    } 
       txtresultado.innerHTML=valor.value+"  equivale a " +  (BinarioADecimal(valor.value))+ " en decimal"    
    
    }
    
}
