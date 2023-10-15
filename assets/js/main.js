$(function() {
				
  var foo = $('#gallery');
  foo.poptrox({

    overlayColor: '#dadec8',
    overlayOpacity: 0.4,
    popupCloserText: '',
    popupLoaderText: '',
    caption: function($a) {
      return $a.prev('h2').html();
    },
    usePopupDefaultStyling: true,
    usePopupCloser: false,
    usePopupCaption: false,
    usePopupNav: true,
    windowMargin: 10
  });

});





function get_toggle() {
  var e = document.getElementById("type-one");

  var d = document.getElementById("type-two");

  if (e.classList.contains("DSP")) {
    e.classList.replace("DSP", "DSP-none");
    d.classList.replace("DSP-none", "DSP");
  } else {
    e.classList.replace("DSP-none", "DSP");
    d.classList.replace("DSP", "DSP-none");
  }
}

function myFunction() {
  var ediv = document.getElementById("myDIV");

  if (ediv.classList.contains("DSP-none")) {
    ediv.classList.replace("DSP-none", "DSP");
    
  } else {
    ediv.classList.replace("DSP", "DSP-none");
   
  }
}






function toggleTheme(theme) {
  // Obtener las variables CSS
  let primaryColor = document.querySelector(":root").style.getPropertyValue("--primary-color");
  let secondaryColor = document.querySelector(":root").style.getPropertyValue("--secondary-color");
  let tertiaryColor = document.querySelector(":root").style.getPropertyValue("--bg-color");
  let lineColor = document.querySelector(":root").style.getPropertyValue("--line-color");
  let textColor = document.querySelector(":root").style.getPropertyValue("--text-color");


  // Establecer los nuevos valores de las variables
  switch (theme) {
    case "Default":
      primaryColor = "#bdbdbd";
      secondaryColor = "#dbdbdb";
      tertiaryColor = "#f5f5f5";
      lineColor = "#808080";
      textColor = "#000000"
      break;

    case "Dark":
      primaryColor = "#8b8374";
      secondaryColor = "#bdb8a3";
      tertiaryColor = "#e8e1c9";
      lineColor = "#655b4e";
      textColor = "#000002"
      break;

    case "Dark - Crisp":
      primaryColor = "#ae8a77";
      secondaryColor = "#aaa397";
      tertiaryColor = "#e7e9ec";
      lineColor = "#aaa397";
      textColor = "#000001"
      break;

    case "Pampas":
      primaryColor = "#c3b8b1";
      secondaryColor = "#dcd4cb";
      tertiaryColor = "#ebe6e0";
      lineColor = "#a9a098";
      textColor = "#000001"
      break;  
  }

  // Establecer los nuevos valores de las variables en CSS
  document.querySelector(":root").style.setProperty("--primary-color", primaryColor);
  document.querySelector(":root").style.setProperty("--secondary-color", secondaryColor);
  document.querySelector(":root").style.setProperty("--bg-color", tertiaryColor);
  document.querySelector(":root").style.setProperty("--line-color", lineColor);
  document.querySelector(":root").style.setProperty("--text-color", textColor);

   // Guardar el tema seleccionado en una cookie
   document.cookie = "theme=" + theme;
}

// Función para cargar el tema guardado de la cookie
function loadTheme() {
  // Obtener la cookie
  const cookie = document.cookie;

  // Obtener el tema de la cookie
  const theme = cookie.split("=")[1];

  // Establecer el tema
  toggleTheme(theme);
}

// Ejecutar la función al cargar la página
window.onload = loadTheme;






function copyText() { 
      
  /* Copy text into clipboard */ 
  navigator.clipboard.writeText 
      ("pachofrancisco7@gmail.com"); 
} 

