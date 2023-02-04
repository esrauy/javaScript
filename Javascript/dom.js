// getElementById("parametre") : parametre yerine o etiketin id'sini yazdığımızda ilgili etiketi elde etmiş oluyoruz.
// innerHTML: bu da ilgili etiketin içindeki alana ulaşmak için kullanıyoruz.

// var pElementi = document.getElementById("paragraf1").innerHTML;
// alert(pElementi);

// alert("paragraf içeriği değiştiriliyor");
// document.getElementById("paragraf1").innerHTML="bugün hava çok güzel";

// var havaDurumu = 10;
// if(havaDurumu > 15)
// {
//     document.getElementById("paragraf2").innerHTML="bugün hava çok güzel";
// }
// else
// {
//     document.getElementById("paragraf2").innerHTML="bugün hava soğuk";
// }

// etiket isimleri ile de ulaşabilirim.
// var pEtiketleri = document.getElementsByTagName("p");
// console.log(pEtiketleri[0].innerHTML);

var listeler = document.getElementsByTagName("ul")  // burada sayfadaki ul etiketlerine ulaşıyoruz
var sehirler = listeler[0].getElementsByTagName("li")   // burada ul etiketlerinden 0. index içindeki li elementlerine ulaşıyoruz
// aşağıdaki for döngüsü ile elde ettiğimiz li eetiketlerini geziyoruz.
for (let index = 0; index < sehirler.length; index++) {
    //console.log(sehirler[index].innerHTML);
    if (sehirler[index].innerHTML === "Edirne") {    // içeriğinde edirne yazan li etiketini bulup, aşağıdaki satırda da bu değeri kars olarak değiştiriyoruz
        sehirler[index].innerHTML = "Kars"
    }
}

// getElementsByClassName("parametre"): parametre yerine bulmak istediğimiz etiketin class'ı içindeki değeri yazarak ulaşabiliyoruz.

// var classElementleri = document.getElementsByClassName("class1")
// var class2sayisi = classElementleri.length
// alert(classElementleri[0].innerHTML); 

// querySelectorAll(); örneğin class1'i birden çok etiket kullanabilir. biz eğer p etiketlerinin kullandığı class1'leri istiyorsak bu metodu kullanabiliriz.

// var queryElemanları = document.querySelectorAll("p.class1");
// alert(queryElemanları.length);

// // getElementByName(); element isimlerine göre elementleri bulma
// var isimElemanlari = document.getElementsByName("Ad");
// alert(isimElemanlari[0].value);
// isimElemanlari[0].value="Esra"

// event 
// addEventListener()

// document.getElementById("jsId").addEventListener("click",degistir);
// function degistir(){
//     document.getElementById("div1").style.color="yellow";
// }

// document.getElementById("paragraf2").addEventListener("mouseover", degistirMouseOver);
// function degistirMouseOver()
// {
//     if(document.getElementById("paragraf2").style.backgroundColor=="yellow")
//     {
//         document.getElementById("paragraf2").style.backgroundColor="red"
//     }
//     else
//     {
//         document.getElementById("paragraf2").style.backgroundColor="yellow"
//     }
// }

// node : ağaç yapısındaki elementlere ulaşmak için kullanılır. 
// alt kısımdaki elemanlara child denir.
var node = document.getElementById("p4");
alert(node.childNodes[0].nodeValue)

// var div2 = document.getElementById("div2");

var baslik = document.createElement("h2");  // h2 etiketi oluşturuyor.
var nodeBaslik = document.createTextNode("Network Akademi");    // text oluşturuyoruz.
baslik.appendChild(nodeBaslik);     // text'i h2'ye veriyoruz.

var div2 = document.getElementById("div2");
var p4 = document.getElementById("p4");
div2.insertBefore(baslik, p4);      // ilk parametre ne eklenecek, ikinci parametre hangi elementten önce eklenecek sorusuna cevap.

var div1 = document.getElementById("div1");
var p1 = document.getElementById("p1");
div1.removeChild(p1);

div2.replaceChild(baslik, p4);  // var olan bir elemanı yeni oluşturduğumuz başka bir eleman ile değiştirdik.      
  //1. parametredeki elemanı 2. parametredeki eleman ile değiştirdik.
  