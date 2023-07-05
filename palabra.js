var btn = document.querySelector("button");
var out = document.getElementById("output");


btn.addEventListener("click", getWord);

function getWord(){
 
  
  var theWord= [
  

    'CMInbound marketingS',
    'Insight',
    'Keyword',
    'KPI',
    'Lead',
    'Marketing de contenidos',
    'Objetivo SMART',
    'Outbound marketing',


    'Página destino',
    'Redes sociales',
    'Remarketing',
    'ROI',

    'Segmentación',
    'SEO',
    'Tienda en línea',
    'Ventas',
    'Viral',
    
  ];

  
  var wordNum = Math.floor(Math.random() * theWord.length);
  
 
  output.textContent = theWord[wordNum];
}