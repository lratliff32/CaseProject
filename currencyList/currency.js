function fToc(dcurrency) {

    var dcurrency = document.getElementById("dollar").value;
            
            return (dcurrency)*.92;
            

}

function cTof(ecurrency) {

      var ecurrency = document.getElementById("euro").value;
              
              return (ecurrency)*1.09;
}

document.getElementById("dollar").onchange = function(){var dcurrency = document.getElementById("dollar").value;
document.getElementById("euro").value = fToc(dcurrency); return dcurrency}


document.getElementById("eurro").onchange = function(){var ecurrency = document.getElementById("euro").value;
document.getElementById("dollar").value = cTof(ecurrency); return ecurrency}
