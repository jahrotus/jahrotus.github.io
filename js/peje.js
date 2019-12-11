function validasi() {
    var username = document.forms["registerForm"]["username"].value;
    var password = document.forms["registerForm"]["password"].value;
    var a =0;
    var b = 0;

    if (username == ""|| password == ""){
        if(a == 0){
            document.getElementById("popup-gagal").style.display="block";
            a = 1;
        }
    
        return false;
    }else if (username != "" && password != ""){
        if(a == 0){
            document.getElementById("popup-berhasil").style.display="block";
            a = 1;
        }
        return false;
    }
}

function lanjut(){
    document.getElementById("popup-berhasil").style.display="none";
    window.location.href = "../customer/home.html";
}

function gagal(){
    document.getElementById("popup-gagal").style.display="none";
    a = 0;
}

    function alertAction() {
    alert("Lengkapi Data Terlebih dahulu");
    }

function validate() {
    event.preventDefault();
    console.log('tes');
    var nama = document.forms["data"]["nama"].value;
    var alamat1 = document.forms["data"]["alamat1"].value;
    var kota = document.forms["data"]["kota"].value;
    var negara = document.forms["data"]["negara"].value;
    var telp = document.forms["data"]["telp"].value;
    if (nama == "" || alamat1 =="" ||  kota =="" || negara=="" || telp=="") {
        event.preventDefault();
        alert('Data kosong\nmohon periksa kembali isian');
    } else {
        var modal = document.getElementById("tambahTrip");
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";

        span.onclick = function() {
            modal.style.display = "none";
        }

    }
}

function namedefine(){
    event.preventDefault();
    var ingambar = document.getElementsByClassName('inputgambar');
    // var inlabel = document.getElementsByClassName('ingambarlabel');
    if(ingambar[0].value.length){
        // inlabel[0].innerHTML =  ingambar[0].files[0].name;
        var oFReader = new FileReader();
        oFReader.onload = function(oFREvent) {
            document.getElementById("gambarpreview").src = oFREvent.target.result;
        };
        oFReader.readAsDataURL(ingambar[0].files[0]);
        }
        else{
        console.log('cancelled');
        }
    }
    $("#ingambar").change(function() {
    namedefine();
});











