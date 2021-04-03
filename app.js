const showRecipes = async () => {
  try {
    //   Loading Recipe
    const res = await fetch(
      "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} ${res.status}`);
    console.log(res, data);

    // let recipe = data.data.recipe;
    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      cookingTime: recipe.cooking_time,
      serving: recipe.serving,
      ingredients: recipe.ingredients,
    };

    console.log(recipe);

    // Rendering Recipe
    const markup = `
    
  <section class="seller">
    <p class='seller__para card__headi