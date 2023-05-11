function check(...numbs) {
    
   let negativeNumbs = numbs.filter(numb => numb<0)

   if (negativeNumbs.length%2 === 0 ) {
    return('Positive')
   } else {
    return('Negative')
   }
}

console.log(
check( 5,
        12,
       -15
       )
)
console.log(
    check( -6,
        -12,
         14        
       )
)