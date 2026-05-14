$("#judul").css("color", "blue");

$("#judul").text("jQuery berhasil jalan");

$("#btn").click(function() {
    alert("Tombol diklik!");
});


//F. Event + Manipulasi DOM
$("#btn").click(function() {
    $("#judul").text("Judul berubah karena diklik!");
    $("#judul").css("color", "red");
});