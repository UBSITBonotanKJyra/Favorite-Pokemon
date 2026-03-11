import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemon = [
    {
      name: 'Jigglypuff',
      region: 'Kanto',
      type: 'Normal/Fairy',
      heldItem: 'Moon Stone',
      description: 'Uses its alluring eyes to enrapture its foe, then sings a melody that lulls them to sleep.'
    },
    {
      name: 'Fennekin',
      region: 'Kalos',
      type: 'Fire',
      heldItem: 'Charcoal',
      description: 'Eating a twig fills it with energy, and its roomy ears vent air hotter than 390 degrees Fahrenheit.'
    },
    {
      name: 'Bulbasaur',
      region: 'Kanto',
      type: 'Grass/Poison',
      heldItem: 'Miracle Seed',
      description: 'A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.'
    },
    {
      name: 'Snorlax',
      region: 'Kanto',
      type: 'Normal',
      heldItem: 'Leftovers',
      description: 'Its stomach can digest any kind of food, even if it happens to be moldy or rotten.'
    },
    {
      name: 'Ditto',
      region: 'Kanto',
      type: 'Normal',
      heldItem: 'Quick Powder',
      description: 'It can freely recombine its own cellular structure to transform into other life-forms.'
    },
    {
      name: 'Wobbuffet',
      region: 'Johto',
      type: 'Psychic',
      heldItem: 'Focus Band',
      description: 'It desperately tries to keep its black tail hidden. It will never attack first.'
    }
  ];

  items = [
    { name: 'Poké Ball', price: 200 },
    { name: 'Great Ball', price: 600 },
    { name: 'Ultra Ball', price: 1200 },
    { name: 'Potion', price: 300 },
    { name: 'Super Potion', price: 700 },
    { name: 'Hyper Potion', price: 1200 },
    { name: 'Revive', price: 1500 },
    { name: 'Antidote', price: 100 },
    { name: 'Paralyze Heal', price: 200 },
    { name: 'Escape Rope', price: 550 }
  ];

  cart = signal<any[]>([]);

  addToCart(item: any) {
    this.cart.update(cart => [...cart, item]);
  }

  totalPrice = computed(() =>
    this.cart().reduce((sum, item) => sum + item.price, 0)
  );

  clearCart() {
  this.cart.set([]);
  }

  checkout() {
    const total = this.totalPrice();
    alert("Total payment: ₱" + total);
    this.clearCart();
  }
}

