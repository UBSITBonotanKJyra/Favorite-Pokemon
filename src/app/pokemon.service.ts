import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

    pokemon = [
      {
        name: 'Pikachu',
        region: 'Kanto',
        type: 'Electric',
        heldItem: 'Light Ball',
        description: 'A small electric Pokémon that stores electricity in its cheeks.'
      },
      {
      name: 'Charizard',
      region: 'Kanto',
      type: 'Fire/Flying',
      heldItem: 'Charcoal',
      description: 'Breathes powerful flames that melt anything.'
    },                
    {
      name: 'Typhlosion',
      region: 'Johto',
      type: 'Fire',
      heldItem: 'Charcoal',
      description: 'Creates explosive fire blasts.'
    },
    {
      name: 'Ampharos',
      region: 'Johto',
      type: 'Electric',
      heldItem: 'Magnet',
      description: 'Its glowing tail guides people in darkness.'
    },
    {
      name: 'Blaziken',
      region: 'Hoenn',
      type: 'Fire/Fighting',
      heldItem: 'Focus Band',
      description: 'Powerful kicks with blazing flames.'
    },
    {
      name: 'Swampert',
      region: 'Hoenn',
      type: 'Water/Ground',
      heldItem: 'Mystic Water',
      description: 'Can predict storms.'
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

