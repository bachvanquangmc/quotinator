export function GoToPage(qts=[], page=1, num=5){
    const results = qts.slice((page-1)*num, page*num);
    console.log(results);
    return(results);
}