export default async function onSubmit(event, path) {
  event.preventDefault();

  const newDish = {
    name: name,
    description: description,
    ingredients: ingredients,
    price: price,
    image: image,
  };

  const documentId = await addDocument(path, newDish);

  newDish.id = documentId;

  return newDish;
}
