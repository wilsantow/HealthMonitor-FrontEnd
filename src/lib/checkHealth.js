export  async function checkHealth(data){
    const ele=data[0]
    if ( (ele.sleep<360 || ele.sleep>600) || (ele.glucose<70 || ele.glucose>140) || (ele.bp>120) || (ele.oxygen<96 )){
        console.log("xx")
        return 1;
    }

    return 0;
}


export async function ind_check(ele){

    const res=[]
    if (ele.sleep<360)
        res.push(1)
    if ((ele.glucose<70) || (ele.glucose>140))
        res.push(0)
    if (ele.bp>120)
        res.push(2)
    if((ele.oxygen<96))
        res.push(3)
        
    return res;
}