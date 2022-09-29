const listLiItemRef = document.querySelectorAll('.item');
console.log('Number of categories:',listLiItemRef.length);

 const listAnimalsCategoryRef = listLiItemRef[0].querySelector('h2');
 console.log('Category:', listAnimalsCategoryRef.textContent);

 const listLiAnimalsElemRef = listLiItemRef[0].querySelectorAll('li');
  console.log('Elements:', listLiAnimalsElemRef.length);

  const listProductsCategoryRef = listLiItemRef[1].querySelector('h2');
 console.log('Category:', listProductsCategoryRef.textContent);

 const listLiProductsElemRef = listLiItemRef[1].querySelectorAll('li');
  console.log('Elements:', listLiProductsElemRef.length);

  const listTechnologiesCategoryRef = listLiItemRef[2].querySelector('h2');
 console.log('Category:', listTechnologiesCategoryRef.textContent);

 const listLiTechnologiesElemRef = listLiItemRef[2].querySelectorAll('li');
  console.log('Elements:', listLiTechnologiesElemRef.length);


