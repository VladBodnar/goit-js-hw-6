const listLiItemRef = document.querySelectorAll('.item');
console.log('Number of categories:',listLiItemRef.length);
 listLiItemRef.forEach( function (itenEl) {
     console.log('Category:', itenEl.children[0].textContent),
     console.log('Elements:', itenEl.children[1].children.length)    
  });
