function hitung(tombol){

  var frm = document.getElementById('calcForm');
  var a1 = parseFloat(frm.angka1.value);
  var a2 = parseFloat(frm.angka2.value);


  switch (tombol) {
      case 'ditambah':
          if (isNaN(a1) || (isNaN(a2))) {
              alert("Harap masukkan angka !!");
          }    
          else {
              var total = a1 + a2;
              frm.hasil.value = total; 
          } 
          break;
      case 'dikurang':
          if (isNaN(a1) || (isNaN(a2))) {
              alert("Harap masukkan angka !!");
          }    
          else {
              var total = a1 - a2; 
              frm.hasil.value = total;
          } 
          break;
          case 'dikali':
          if (isNaN(a1) || (isNaN(a2))) {
              alert("Harap masukkan angka !!");
          }    
          else {
               var total = a1 * a2; 
               frm.hasil.value = total; 
          } 
          break;
          case 'dibagi':
          if (isNaN(a1) || (isNaN(a2))) {
              alert("Harap masukkan angka !!");
          }    
          else {
               var total = a1 / a2;
               frm.hasil.value = total;;  
          } 
          break;
          case 'dipangkat':
          if (isNaN(a1) || (isNaN(a2))){
              alert("Harap masukkan angka !!");
          }    
          else {
               var total = Math.pow(a1,a2);
               frm.hasil.value = total;; 
          } 
          break;

      default:
          break;
  }
}
