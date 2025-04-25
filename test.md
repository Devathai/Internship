```js
function main(arr){
    for(let i=0;i<=arr.length;i++)
    {
    function outer(){
    for(let j=i; j<=arr.length;j++){
        if(arr[j]==[]){
            return 0;
        } else{
        let l=arr.lastIndexOf;
        if(l==='add')
            {
             for(j=0;j<=arr.length-1;j++){
                add+=j;
             }
             return add;
            }
         
            else if(l==='subtract'){
                for(j=0;j<=arr.length-1;j++){
                    sub= arr[0]-arr[j];
                }
             return sub;
            }
            else if(l==='multiply'){
                for(j=0;j<=arr.length-1;j++){
                    mul=mul*j;
                    
                } return mul
            }
            else if(l==='divide'){
                for(j=0;j<=arr.length-1;j++){
                    if(j==0){
                        return 0;
                    }else{
                    div=arr[0]/1;
                    }
                    return div;
                }
            }
        }
        }
    }
    outer();

        if(arr[j]==[]){
            return 0;
        }
        let last=arr.lastIndexOf;
        if(last==='add')
        {  
            for(i=0;i<=arr.length-1;i++){
            add1=arr[i];
        }
        }  
    }

}
let arr=[[1,2,'add'],[4,1,'subtract']];
```
