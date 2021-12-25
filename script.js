var reqest = new XMLHttpRequest(); //create an request object
reqest.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');//establish the connection b/w clicent  and server
reqest.send(); // making path from server
reqest.onload=function(){
    var data=JSON.parse(reqest.response);
    //console.log(data);
    for(var i=0;i<data.length;i++) {
       
   /*#region Displaying all Country Flags start*/
        var fresult =data[i].flag;
        console.log(fresult);

    /*#endregion*/

    /*#region Displaying Country Name, Region, Sub Region and Population */
        var cpresult =data[i].name + " " + data[i].region + " " + data[i].subregion + " " + data[i].population;
        console.log(cpresult);
        //console.log(data);

    /*#endregion*/
    }


}
