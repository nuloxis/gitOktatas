const baseUrl="http://localhost:3000/country/"

console.log("alma")


var xhr =new XMLHttpRequest();
getCountries(baseUrl+"list")
creatHTMLCountry();

function getCountries(urls){

    xhr.open("GET",urls)
    xhr.onload=function(){
        console.log(xhr.responseText)
    }
    xhr.send();
}




function creatHTMLCountry(){


    let pos =document.getElementById("countries")

    pos.innerHTML=`
    
    <div class="country">

            <h1>Hungary</h1>
    
            <div class="detail">
                <label style="font-weight: bold ;">Capital</label>
                <p>Budapest</p>
            </div>
            <div class="detail">
                <label style="font-weight: bold ;">Population</label>
                <p>9 730 000</p>
            </div>
    
        </div>
    `

}