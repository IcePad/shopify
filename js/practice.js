$(function () {
    $("#tittle").fitText(1.2, { minFontSize: '40px', maxFontSize: '100px' });
    $("#currentTemp").fitText(1.2, { minFontSize: '10px', maxFontSize: '100px' });
    $("#cityName").fitText(1.4, { minFontSize: '10px', maxFontSize: '100px' });
    $(".btn-xlarge").fitText(1.4, { minFontSize: '10px', maxFontSize: '30px' });


    $(".bb").click(function () {
        //alert the user that they have clicked the button!
        alertify.success("Calculating Total Now!");
            //for loop to cycle through each page. (12 pages) 
            for(var i = 0; i<=12; i++) {
            var pageNum = i;
            //Put JSON file in an object, based on what page number
            var shopifyJSON = 'http://shopicruit.myshopify.com/products.json?page=' + i;
            //variable for temporary number
            var temp = 0;
            //function to getJSON oject from JSON file. 
            $.getJSON(shopifyJSON, function (json) {
                var shopj = json;
               //For loop to cycle through each object in the JSON file.
                for(var i = 0; i<Object.keys(shopj.products).length; i++){
                    //A constraint to check if product is a clock or a watch. 
                    if(shopj.products[i].product_type === "Clock" || shopj.products[i].product_type === "Watch"){
                        console.log(shopj.products[i].variants[0].price);
                        //Add the price of each individual clock/watch
                        temp = temp + parseFloat(shopj.products[i].variants[0].price);
                        //Prints out the total in a paragraph text in the html page, had it in the for loop to show a adding/tallying effect. 
                        $("#totalValue").text("Total: $" +temp.toFixed(2));
                    }
                    
                }
                
            });
            }

    });
});
