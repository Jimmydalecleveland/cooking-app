module.exports = {
  recipe1: {
    title: 'Chicken Stew',
    prepTime: 35,
    cookTime: 120,
    instructions: "Boil'em, Mash'em, Stick'em in a stew. There isn't much more to it.",
    ingredients: ['Milk', 'Chicken', 'Eggs', 'Mews'],
    steps: {
      step1: {
        ingredients: ['Milk'],
        instructions: 'Heat milk in a saucepan until it simmers',
      },
      step2: {
        ingredients: ['Chicken'],
        instructions: 'Place chicken in saucepan with milk. Head chicken until all milk has boiled up',
      },
      step3: {
        ingredients: ['Mews', 'Eggs'],
        instructions: 'Beat Mews and Eggs together until the mews are too loud to bear',
      },
    },
  },

  recipe2: {
    id: 2,
    title: 'Mew kabobs',
    prepTime: 47,
    cookTime: 25,
    instructions: 'Put those mews on some sticks and sizzle their timbers',
    ingredients: ['Mews', 'Peppeps', 'Salt', 'Pepper'],
  },
};
