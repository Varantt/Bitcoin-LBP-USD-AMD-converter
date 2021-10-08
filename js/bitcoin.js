const num=document.querySelector("input");
const select1=document.getElementById("first");
const select2=document.getElementById("second");
const value1=document.querySelector(".value1");
const value2=document.querySelector(".value2");
const name1=document.querySelector(".name1");
const name2=document.querySelector(".name2");
const par=document.querySelector("p");
const lebaneseDollar=document.querySelector("input:nth-of-type(2)");
const bit=document.querySelector("input:nth-of-type(3)")

lebaneseDollar.addEventListener("change", function(){
    all();
});

bit.addEventListener("change", function(){
    all();
});


select1.addEventListener("change",function(){
    all();
});

select2.addEventListener("change",function(){
    all();
});

num.addEventListener("change", function(){
    all();
});

function all(){
    Bitcoin();
    Lebanese();
    Dram();
    USD();

    
}




function Bitcoin(){
    
    if(select1.value==="BTC"){
        if(select2.value==="USD"){
        value1.textContent=num.value;
        value2.textContent=numberWithCommas(num.value*bit.value);
        name2.textContent="USD '$'";
        name1.textContent="BTC";
    }else if(select2.value==="Lebanese"){
        value1.textContent=num.value;
        value2.textContent=numberWithCommas(num.value*(lebaneseDollar.value*bit.value));
        name2.textContent="LBP";
        name1.textContent="BTC";
    }else if(select2.value==="Dram"){
        value1.textContent=num.value;
        value2.textContent=numberWithCommas(num.value(489.9*bit.value));
        name2.textContent="Հայկական Տրամ";
        name1.textContent="BTC";
        }
        else if(select2.value==="BTC"){
        value1.textContent=num.value;
        value2.textContent=value1.textContent;
        name2.textContent="BTC";
        name1.textContent="BTC";
        }   
    }
} 

function Lebanese(){
    if(select1.value==="Lebanese"){
        if(select2.value==="BTC"){
        value1.textContent=num.value;
        value2.textContent=numberWithCommas(num.value/(lebaneseDollar.value*bit.value));
        name2.textContent="BTC";
        name1.textContent="LBP";
    }else if(select2.value==="USD"){
        value1.textContent=num.value;
        value2.textContent=numberWithCommas(num.value/lebaneseDollar.value);
        name2.textContent="USD";
        name1.textContent="LBP";
    }else if(select2.value==="Dram"){
        value1.textContent=num.value;
        value2.textContent=numberWithCommas(num.value*(489.9/lebaneseDollar.value));
        name2.textContent="Հայկական Տրամ";
        name1.textContent="LBP";
        }
        else if(select2.value==="Lebanese"){
        value1.textContent=num.value;
        value2.textContent=value1.textContent;
        name2.textContent="Lebanese";
        name1.textContent="Lebanese";
        }
    }
}

function Dram(){
    if(select1.value==="Dram"){
        if(select2.value==="BTC"){
        value1.textContent=num.value;
        value2.textContent=numberWithCommas(num.value/(489.9*bit.value));
        name2.textContent="BTC";
        name1.textContent="Դրամ";
    } else if(select2.value==="Lebanese"){
        value1.textContent=num.value;
        value2.textContent=numberWithCommas(num.value/(489.9/lebaneseDollar.value));
        name2.textContent="LBP";
        name1.textContent="Դրամ";
    }else if(select2.value==="USD"){
        value1.textContent=num.value;
        value2.textContent=numberWithCommas(num.value/489.9);
        name2.textContent="Հայկական Տրամ";
        name1.textContent="Դրամ";
        }
        else if(select2.value==="Dram"){
        value1.textContent=num.value;
        value2.textContent=value1.textContent;
        name2.textContent="Դրամ";
        name1.textContent="Դրամ";
        }
    }
}


function USD(){
    if(select1.value==="USD"){
        if(select2.value==="BTC"){
        value1.textContent=num.value;
        value2.textContent=numberWithCommas(num.value/bit.value);
        name1.textContent="USD";
        name2.textContent="BTC";
    }else if(select2.value==="Lebanese"){
        value1.textContent=num.value;
        value2.textContent=numberWithCommas(num.value*lebaneseDollar.value);
        name2.textContent="LBP";
        name1.textContent="USD";

    }else if(select2.value==="Dram"){
        value1.textContent=num.value;
        value2.textContent=numberWithCommas(num.value*489.9);
        name2.textContent="Դրամ";
        name1.textContent="USD";   
    }else if(select2.value==="USD"){
        value1.textContent=num.value;
        value2.textContent=value1.textContent;
        name2.textContent="USD";
        name1.textContent="USD";
        }
    }
}




function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
