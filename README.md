## FE23-JS2-tasks-OOP-Dice


### Task instructions
Övning 6 - Tärning 2

**Klassen**
Vidareutveckla tärnings-övningen
Konstruktorn behöver inte ha någon parameter. Varje tärning ska ha 6 sidor.

**Klassen ska innehålla**
- Egenskaper
  * currentValue - startar på 1. 
  * isFrozen - boolean som startar på false

- Metoder
  * freeze() - sätter frozen true
  * unFreeze() - sätter frozen till false
  * roll() - Om frozen är false ska ett random nummer mellan 1 och 6 genereras och sparas ner i currentValue. Om frozen är true ska inget hända .

**I main**
- Varje tärning som skapas utifrån klassen ska 
- visas på en webbsida tillsammans med två knappar, freeze och unfreeze 
- När man klickar på tärningen ska metoden roll anropas och det nya värdet av currentValue ska synas
- Man ska kunna ändra på frozen-egenskapen genom att klicka på knapparna. (Alltså bestämma om tärningen ska gå att kasta eller inte.)
