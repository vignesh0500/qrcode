let imgBox=document.getElementById('imgbox')
let qrimg=document.getElementById('qrImage')
let qrtext=document.getElementById('qrText')




function generateQR(){
qrImage.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
}