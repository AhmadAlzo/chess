export let Data = []

function clasif(i){
    if(i==1||i==8){
        return "j1"
    }else if(i==57||i==64){
        return "j2"
    }else if(i==2||i==7){
        return "h1"
    }else if(i==58||i==63){
        return "h2"
    }else if(i==3||i==6){
        return "f1"
    }else if(i==59||i==62){
        return "f2"
    }else if(i==4){
         return "m1"
    }else if(i==60){
        return "m2"
    }else if(i==5){
         return "M1"
    }else if(i==61){
        return "M2"
    }else if(i>=9 && i<=16 ){
         return "d1"
    }else if(i>=49 && i<=56){
        return "d2"
    }else{
        return ""
    }
}
function color(i){
    const nn = [8,16,24,32,40,48,56,64]
    let nume ;
    for (let j =0;j<7;j++){
        if(j==0){
            if(i<=nn[j]){
                nume=0 
            }
        }else{
            if(i<=nn[j]&&i>nn[j-1]){
                nume=j
            }
        }
    }
    if(nume%2==0){
        if(i%2==0){
            return "white"
        }else {
            return "black"
        }
    }else {
        if(i%2 != 0){
            return "white"
        }else {
            return "black"
        }
    }
}

for(let i=1;i<=80;i++){
    Data.push({
        armer:clasif(i),
        key:i,
        color:color(i),
        from:0
    })
}
export const rows = [0,8,16,24,32,40,48,56,64];

export let columns =[]
for(let i =1;i<rows.length;i++){
    let col = [];
    for(let j=0;j<8;j++){
      col.push(rows[j]+i)
    }
    columns.push(col)
}