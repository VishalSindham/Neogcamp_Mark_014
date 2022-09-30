var initial = document.getElementById("initial");
var quantity = document.getElementById("quantity");
var price = document.getElementById("price");
var submit = document.getElementById("submit");
var output =  document.getElementById("output");

function calculateProfitAndLoss(init,qt,pr)
{
    var costPrice = init * qt ; 
    var sellingPrice = pr * qt;
    flag = "";

    // Conditional Branching
    if(sellingPrice > costPrice)
    {
	    // Profit Logic
       var Profit = (sellingPrice - costPrice);
       var profitPercentage = (Profit/costPrice)*100;
       console.log("profit " + profitPercentage);
       flag = "profit";
       return [flag, Profit, profitPercentage];

    }
    else if(costPrice > sellingPrice)
    {

	    // Loss Logic
        var Loss = (costPrice - sellingPrice);
        var LossPercentage = (Loss/costPrice)*100;
        console.log("loss"+Loss) 
        flag = "loss"
        return [flag, Loss, LossPercentage] ;
        
    }
    else if(costPrice == sellingPrice){
        flag="neutral"
        return [flag,0,0]
    }
    

}



submit.addEventListener("click",()=>{
    

    var init = Number(initial.value);
    var qt = Number(quantity.value);
    var pr = Number(price.value);



    if(init ==""||qt==""||pr=="")
    {
        output.style.color = "red";
        output.innerHTML = `Please fill all the fields`;
    }
        else{
                

    var [flag, num , percentage] =   calculateProfitAndLoss(init, qt, pr);
    var per = percentage.toFixed(2)
    if(flag == "profit")
    {
        output.style.color = "green";

        output.innerHTML = `You had Profit of ${num} and percentage is ${per}% `;
    }
    else if(flag == "loss")
    {
        output.style.color = "red";
        output.innerHTML = `You had Loss of ${num} and percentage is ${per}% `;
    }
    else{
        output.style.color = "#e88032";
        output.innerHTML = `You did not loss or gain `;
    }
        }

})

