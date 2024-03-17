function checkVowels(){
    let text = document.getElementById("inputText").value;
    let vowelCount=0;
    text= text.toLowerCase();
    for(let i =0; i<text.length; i++){
        let karakter= text.charAt(i); 
        if(isVowel(karakter)){
            vowelCount++;
        }
    }
    let sonuc = document.getElementById("result");
    result.textContent = `toplam: ${vowelCount} sesli harf bulunmaktadır`;
}
function isVowel(karakter){

    let karakterler= ["a","e","i","o","u"];
    return karakterler.includes(karakter);
}