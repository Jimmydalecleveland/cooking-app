/* eslint-disable global-require */
module.exports = {
  recipe1: {
    title: 'Banana Nut Bread',
    image: require('./src/images/recipe/bread.png'),
    categories: ['breakfast', 'other'],
    prepTime: 35,
    cookTime: 120,
    instructions: 'Preheat oven to 350. Grease & flour an 8" bread pan.',
    ingredients: {
      item1: {
        image: require('./src/images/bananas.png'),
        ingredient: 'Bananas',
        amount: '1 ½ cups',
      },
      item2: {
        image: require('./src/images/sugar.png'),
        ingredient: 'Sugar',
        amount: '¾ cup',
      },
      item3: {
        image: require('./src/images/sour_cream.png'),
        ingredient: 'Sour Cream',
        amount: '⅓ cup',
      },
      item4: {
        image: require('./src/images/melted_butter.png'),
        ingredient: 'Melted Butter',
        amount: '¼ cup',
      },
      item5: {
        image: require('./src/images/eggs.png'),
        ingredient: 'Eggs',
        amount: '2',
      },
      item6: {
        image: require('./src/images/flour.png'),
        ingredient: 'Flour',
        amount: '1 ½ cups',
      },
      item7: {
        image: require('./src/images/baking_soda.png'),
        ingredient: 'Baking Soda',
        amount: '1 tsp',
      },
      item8: {
        image: require('./src/images/nuts.png'),
        ingredient: 'Chopped Nuts',
        amount: '¼ cup',
      },
    },
    steps: {
      step1: {
        ingredients: ['Bananas', 'Sugar', 'Sour Cream', 'Melted Butter', 'Eggs'],
        instructions: 'Combine in bowl by whisking or blending',
      },
      step2: {
        ingredients: ['Flour', 'Baking Soda'],
        instructions: 'Separately combine in bowl until ruffy',
      },
      step3: {
        ingredients: ['Chopped Nuts'],
        instructions: 'Add into mix',
      },
      step4: {
        ingredients: ['Batter'],
        instructions: 'Pour batter into pan',
      },
      step5: {
        ingredients: ['Bake'],
        instructions: 'Bake for 45 minutes',
      },
      step6: {
        ingredients: ['Cool'],
        instructions: 'Cool on wire rack for 2 hours minimum',
      },
    },
  },

  recipe2: {
    title: 'Chicken Stew',
    categories: ['dinner'],
    prepTime: 35,
    cookTime: 120,
    instructions: "Boil'em, Mash'em, Stick'em in a stew. There isn't much more to it.",
    ingredients: {
      item1: {
        ingredient: 'Milk',
        amount: '1 cup',
      },
      item2: {
        ingredient: 'Chicken',
        amount: '1 pound',
      },
      item3: {
        ingredient: 'Eggs',
        amount: '4',
      },
      item4: {
        ingredient: 'Mews',
        amount: '12',
      },
    },
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

  recipe3: {
    id: 2,
    title: 'Mew kabobs',
    categories: ['breakfast', 'lunch', 'dinner'],
    prepTime: 47,
    cookTime: 25,
    instructions: 'Put those mews on some sticks and sizzle their timbers',
    ingredients: {
      item1: {
        ingredient: 'Milk',
        amount: '1 cup',
      },
      item2: {
        ingredient: 'Chicken',
        amount: '1 pound',
      },
      item3: {
        ingredient: 'Eggs',
        amount: '4',
      },
      item4: {
        ingredient: 'Mews',
        amount: '12',
      },
    },
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
};
/* eslint-enable global-require */
