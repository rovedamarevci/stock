
var url = 'https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/year/2022-11-13/2022-11-30?adjusted=true&sort=asc&limit=120&apiKey=hY3YiXSwwbZHT4c1AOM7TXTCEp1ougmz';

fetch(url, {
    method: "GET",
})
    .then(response => response.json())
    .then(data => {

        let Name = data.ticker;
        document.getElementById("name").innerHTML = "$ " + Name;
   
        let Closed = data.results[0].c;
        document.getElementById("mainprice").innerHTML = " $" + Closed;
        
        let Open = data.results[0].o;
        document.getElementById("open").innerHTML = " $" + Open;
        
         let Highest = data.results[0].h;
        document.getElementById("Highest").innerHTML = " $" + Highest;
        
         let Lowest = data.results[0].l;
        document.getElementById("Lowest").innerHTML = " $" + Lowest;
        
       
        
         let Volume = data.results[0].v;
        document.getElementById("Volume").innerHTML = " " + Volume;
        

         let Ratio = data.results[0].o;
         document.getElementById("Ratio").innerHTML = " $" + Ratio;

    }).catch(err => {
    // if any error occurred, then catch it here
    console.error(err);
    });



var url = "https://api.polygon.io/v2/reference/news?ticker=AAPL&apiKey=hY3YiXSwwbZHT4c1AOM7TXTCEp1ougmz";

fetch(url, {
    method: "GET",
})
    .then(response => response.json())
    .then(data => {

        let Title = data.results[0].title;
        document.getElementById("Title").innerHTML = "" + Title;

                let Author = data.results[0].author;
                document.getElementById("Author").innerHTML = "- " + Author;
   
      
                let description = data.results[0].description;
                document.getElementById("description").innerHTML =
                 "" + description;

    }).catch(err => {
    // if any error occurred, then catch it here
    console.error(err);
    });
