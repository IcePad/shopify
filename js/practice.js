$(function () {
    $("#tittle").fitText(1.2, { minFontSize: '40px', maxFontSize: '100px' });
    $("#currentTemp").fitText(1.2, { minFontSize: '10px', maxFontSize: '100px' });
    $("#cityName").fitText(1.4, { minFontSize: '10px', maxFontSize: '100px' });
    $(".btn-xlarge").fitText(1.4, { minFontSize: '10px', maxFontSize: '30px' });


    $(".bb").click(function () {
        //alert the user that they have clicked the button!
        alertify.success("Calculating Total Now!");
            //for loop to cycle through each page. (12 pages) 
            for(var i = 1; i<=12; i++) {
            var pageNum = i;
            //Put JSON file in an object, based on what page number
            var shopifyJSON = 'http://shopicruit.myshopify.com/products.json?page=' + i;
            //variable for temporary number
            var temp = 0;
            //function to getJSON oject from JSON file. 
            $.getJSON(shopifyJSON, function (json) {
                var shopj = json;
               //For loop to cycle through each object in the JSON file.
                for(var i = 0; i<(Object.keys(shopj.products)).length; i++){
                    //A constraint to check if product is a clock or a watch. 
                    if(shopj.products[i].product_type === "Clock" || shopj.products[i].product_type === "Watch"){
                        //Loop through each variant
                        for(var j = 0;j<Object.keys(shopj.products[i].variants).length; j++){
                            //Check how many variants for each clock and watch
                            if(j === 0) console.log(shopj.products[i].title + " has " + Object.keys(shopj.products[i].variants).length + " different variants!");
                            //console out individual title, variant number and price.
                            console.log("PRICE for " + shopj.products[i].title + " variant " +  j + ": " + shopj.products[i].variants[j].price)
                            //Add the price of each individual clock/watch
                            temp = temp + parseFloat(shopj.products[i].variants[j].price);
                            //display the total in a text container which displays on click. I kept the total in the for loop so it has a tallying affect!
                            $("#totalValue").text("Total: $" +temp.toFixed(2));
                        }
                    }
                }
            });
            }
    });
});
