$("#klik_submit").click(function() {

// console.log("masuk");
	var x=document.forms['biodata']['nama'].value;
	var y=document.forms['biodata']['fakultas'].value;
	var z=document.forms['biodata']['jabatan'].value;
	var a=document.forms['biodata']['email'].value;
	var b=document.forms['biodata']['kritik'].value;

	if (x == "" || y == "" || z =="" || a == "" || b == "") {
		alert("form tidak lengkap");
	} else {
		alert("Data anda berhasil terentry!");
	var tabel = document.getElementById("tabelinput");
	var row = tabel.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);

	cell1.innerHTML = x;
	cell2.innerHTML = y;
	cell3.innerHTML = z;
	cell4.innerHTML = a;
	cell5.innerHTML = b;
	}
});


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});