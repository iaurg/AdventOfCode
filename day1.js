const allReq = ["148623","147663","67990","108663","62204","140999","123277","52459","143331","71135","76282","69509","72977","120407","62278","136882","131667","146225","112216","108600","127267","149149","72977","149639","101527","70059","124825","69539","141444","64138","71145","68178","134752","79431","126342","134161","135424","95647","54507","104852","100164","118799","57387","93136","133359","144942","89337","60441","131825","93943","98142","108306","55355","115813","83431","125883","101115","107938","103484","61174","123502","73670","91619","136860","93268","149648","105328","53194","115351","130953","85611","71134","141663","106590","56437","147797","98484","60851","121252","66898","56502","103796","86497","121534","70914","122642","53151","131939","108394","128239","103490","122304","113810","141469","79176","108002","91942","84400","101217","116287"]

function getFuelReq(array){
  let sumFuel = 0;
  for(let i = 0; i < array.length; i++){
    sumFuel += Math.floor(array[i]/3) - 2;
  }
  return sumFuel;
}

console.log("Using 'for':", getFuelReq(allReq))

function getFuelReqRecursive(items) {
  let sumFuel = 0;

  items.forEach(item => {
    if (Array.isArray(item)) {
      sumFuel.push(...getFuelReqRecursive(item));
    } else {
      sumFuel += Math.floor(item/3) - 2;
    }
  });

  return sumFuel;
}

console.log("Using 'recursion':", getFuelReqRecursive(allReq))


//Day one second Star

function getFuelReqNewFuel(array){
  let sumFuel = 0;
  for(let i = 0; i < array.length; i++){
    let round = Math.floor(array[i]/3) - 2;
    while(round > 0){
      sumFuel += round
      round = Math.floor(round/3) - 2;
    }    
  }
  return sumFuel;
}

getFuelReqNewFuel(allReq)
