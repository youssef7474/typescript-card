const currancy_formatter= new Intl.NumberFormat(undefined,{
    currency:"USD",
    style:"currency"
})
export function formatCurrancy(number:number){
    return currancy_formatter.format(number)
}