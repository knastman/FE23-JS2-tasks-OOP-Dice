
// Egenskaper
  // - currentValue - startar på 1. 
  // -isFrozen - boolean som startar på false

// Metoder
  // - freeze() - sätter frozen true
  // - unFreeze() - sätter frozen till false
  // - roll() - Om frozen är false ska ett random nummer mellan 1 och 6 genereras och sparas ner i currentValue. Om frozen är true ska inget hända .


export class Dice { 
  constructor(){
    this.currentValue = 1;
    this.isFrozen = false;
    // this.faces = 6; //vet ej om denna behövs, isf för att använda vid randomuträkningen

  }
  freeze() {
    return this.isFrozen = true;
  }
  unFreeze(){
    this.isFrozen = false;
    // return this.isFrozen;
  }

  roll(){
    // if (this.isFrozen === false){
    if (!this.isFrozen){
      console.log('i roll och isfrozen = false');
      // this.currentValue = (Math.ceil(Math.random() * 6));
      this.currentValue = Math.ceil(Math.random()*6 );
      // console.log(this.currentValue);
      // return this.currentValue;
    }
    else{
      console.log('i rollen isfrozen = true. Alltså ska inte denna tärningen ändra value.');
      console.log(this.currentValue);
    }
    return this.currentValue;
  } 
}



