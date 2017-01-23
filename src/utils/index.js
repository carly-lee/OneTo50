export const shuffleArray = function( array ) {
  let sourceArray = [...array];
  let shuffledArray = [];
  let idx:number;
  while( sourceArray.length>0 ){
    idx = Math.floor( Math.random()*sourceArray.length );
    shuffledArray.push( sourceArray.splice( idx, 1 )[0] );
  }
  return shuffledArray;
}