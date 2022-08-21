export function formatName(value){
    value = String(value).replace(/_/g,' ');
    var valueArr = value.split(" ");
    var retArr = [];
    for(var i=0;i<valueArr.length;i++){
       retArr.push(valueArr[i].substring(0,1).toUpperCase() + valueArr[i].substring(1).toLowerCase());
    }
    return retArr.join(" ");
 }

 export function AddLibrary(url, onload) {
  const script = document.createElement('script');
  script.src = url;
  script.onload = onload;
  script.async = true;
  document.body.appendChild(script);
}

export function getTab(){
   return '  ';
}