$(function () {
    $("#tittle").fitText(1.2, { minFontSize: '40px', maxFontSize: '100px' });
    $("#currentTemp").fitText(1.2, { minFontSize: '10px', maxFontSize: '100px' });
    $("#cityName").fitText(1.4, { minFontSize: '10px', maxFontSize: '100px' });
    $(".btn-xlarge").fitText(1.4, { minFontSize: '10px', maxFontSize: '30px' });


    $(".bb").click(function () {
        alertify.success("Calculating Total Now!");

            for(var i = 0; i<=12; i++) {
                var pageNum = i;
            var weatherApi = 'http://shopicruit.myshopify.com/products.json?page=' + i;
             var temp = 0;
            //  var total = 0;
            $.getJSON(weatherApi, function (json) {
                console.log(json);
                var shopj = json;
               
                for(var i = 0; i<Object.keys(shopj.products).length; i++){
                     
                    if(shopj.products[i].product_type === "Clock" || shopj.products[i].product_type === "Watch"){
                        console.log(shopj.products[i].variants[0].price);
                         temp = temp + parseFloat(shopj.products[i].variants[0].price);
                         //alert("Total: " +temp.toFixed(2));
                         $("#totalValue").text("Total: $" +temp.toFixed(2));
                    }
                    
                }
                
            });
            //  console.log("TOOOOOTAL: " + total);
            }

    });
});
