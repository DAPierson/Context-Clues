
//for(let i = 1; i < 101; i++){}
//var h3 = document.createElement('h3')

//$(document).ready(function(){
 for (var i = 1; i < 101; i++){
    var h3 = document.createElement('h3')
    document.body.append(h3);
    var text = document.createTextNode('Accusation ' + i)
    h3.append(text)
    function click(){
        return  $('h3').addEventListener('click', function(){

            $('h3').css('color', 'red');
        })
    


    }
 }
 let clicked = click();

 clicked();
  
//  $('h3').addEventListener('click', function(){

//     $('h3').css('color', 'red');
// })


 

//})

//$('h3').addEventListener('click', function(){

//$(h3).css('color', 'red')
//}
    
//)

 