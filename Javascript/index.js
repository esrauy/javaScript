// var sayi1=5;
// var sayi2=2;
// var topla = sayi1+sayi2
// console.log(topla);
// var isim="Esra";
// var soyad="Uygur"
// console.log(isim+" "+soyad);

// == değerleri karşılaştırır.
// === değer ve veri tipini karşılaştırır.

// if(isim === 1)
// {
//     console.log("sayı1 : " + sayi1);
// }
// else if(sayi1 === 5)
// {
//     console.log("else if kısmı");
// }
// else
// {
//     console.log("else kısmı");
// }


// var & let
// var ile aynı isimde değişken tanımlamaya izin veriyor fakat let ile aynı isimde değişken tanımlamaya izin vermiyor.

// let sehir = "İstanbul"
// console.log(sehir);

// let sehir1 = "Ankara";
// console.log(sehir1);

 var sehirler = ["Ankara", "İstanbul", "İzmir"]
 var sayilar = [1,7,32,435,45,56757,6]

// console.log(sehirler[0])
// console.log(sehirler[1])
// console.log(sehirler[2])
// console.log(sayilar[1])


// for (let index = 0; index < sehirler.length; index++) 
// {
//     console.log(sehirler[index]);  
// }

// for (let index = 0; index < sayilar.length; index++) 
// {
//     console.log(sayilar[index]);  
// }

// sayilar.forEach(element => {
//     console.log(element);
// });

// fonksiyonlar
// parametresiz geriye değer döndürmeyen

// function selamVer()
// {
//     console.log("Merhaba");
// }

// selamVer();     // selamVer();fonksiyonu çalıştırır ve sonucu verir.
// console.log(selamVer);  // selamVer;fonksiyonun içeriğini yazdırır.

//parametreli geriye değer döndürmeyen

// function selamVer1(isim)
// {
//     console.log("Merhaba "+isim);
// }
//  selamVer1("Esra");

// geriye değer döndüren ve parametre alan
function topla (sayi1, sayi2)
{
   return sayi1+sayi2;
}
console.log(topla(3,2));

var sonuc = topla(15,7);
alert(sonuc);