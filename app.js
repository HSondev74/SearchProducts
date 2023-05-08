const filter = document.querySelector('.filter');
const count = document.querySelector('.count');
const listProducts = document.querySelector('.listProducts');

let listItems = [
     {
          id: 1,
          name: 'Áo Thun Levents Bichontour/ White',
          price: '390.000 VND',
          distCount: '490.000 VND',
          quanlity: 200,
          image: 'tshirt1.jfif',
          nature: {
               color: ['Black'],
               size: ['M','L','XL'],
               type: 'T-Shirt',
          }
     },
     {
          id: 2,
          name: 'Áo Thun Lvents Bhontour/ Blue',
          price: '290.000 VND',
          distCount: '389.000 VND',
          quanlity: 200,
          image: 'tshirt2.jfif',
          nature: {
               color: ['Blue'],
               size: ['M','L','XL'],
               type: 'T-Shirt',
          }
     },
     {
          id: 3,
          name: 'Áo Thun Leents Bicontour/ Brown',
          price: '320.000 VND',
          distCount: '400.000 VND',
          quanlity: 200,
          image: 'tshirt3.jfif',
          nature: {
               color: ['Brown'],
               size: ['M','L','XL'],
               type: 'T-Shirt',
          }
     },
     {
          id: 4,
          name: 'Áo Thun Levents Bichontour/ Grey',
          price: '390.000 VND',
          distCount: '419.000 VND',
          quanlity: 200,
          image: 'tshirt4.jfif',
          nature: {
               color: ['Grey'],
               size: ['M','L','XL'],
               type: 'T-Shirt',
          }
     },
     {
          id: 5,
          name: 'Áo Phông Lenie Basic/ Grey',
          price: '590.000 VND',
          distCount: '790.000 VND',
          quanlity: 200,
          image: 'shirt1.jfif',
          nature: {
               color: ['Grey'],
               size: ['M','L','XL'],
               type: 'Shirt',
          }
     },
     {
          id: 6,
          name: 'Áo Phông Hafos delos/ Blue',
          price: '350.000 VND',
          distCount: '390.000 VND',
          quanlity: 200,
          image: 'shirtBL.jfif',
          nature: {
               color: ['Blue'],
               size: ['M','L','XL'],
               type: 'Shirt',
          }
     },
     {
          id: 7,
          name: 'Áo Phông Levents Bour/ White',
          price: '250.000 VND',
          distCount: '399.000 VND',
          quanlity: 200,
          image: 'shirtW.jfif',
          nature: {
               color: ['White'],
               size: ['M','L','XL'],
               type: 'Shirt',
          }
     },
     {
          id: 8,
          name: 'Áo Polo Levets Chontour/ Black',
          price: '290.000 VND',
          distCount: '350.000 VND',
          quanlity: 200,
          image: 'polo1.jfif',
          nature: {
               color: ['Black'],
               size: ['M','L','XL'],
               type: 'Polo',
          }
     },
     {
          id: 9,
          name: 'Áo Polo Events Bichontour/ Brown',
          price: '299.000 VND',
          distCount: '590.000 VND',
          quanlity: 200,
          image: 'polo2.jfif',
          nature: {
               color: ['Brown'],
               size: ['M','L','XL'],
               type: 'Polo',
          }
     },
     {
          id: 10,
          name: 'Áo Polo Levents Bitour/ White',
          price: '449.000 VND',
          distCount: '499.000 VND',
          quanlity: 200,
          image: 'polo3.jfif',
          nature: {
               color: ['White'],
               size: ['M','L','XL'],
               type: 'Polo',
          }
     },
     {
          id: 11,
          name: 'Áo Polo Levents Bichontour /Brown ',
          price: '270.000 VND',
          distCount: '390.000 VND',
          quanlity: 200,
          image: 'polo4.jfif',
          nature: {
               color: ['Brown','White'],
               size: ['M','L','XL'],
               type: 'Polo',
          }
     },
];

let data = listItems;
// console.log(data);

showProducts(data);
function showProducts(data){
     count.innerText = data.length;
     listProducts.innerHTML = '';
     data.forEach(item => {
          
          let product = document.createElement('div');
          product.classList.add('product');

          // get image
          let newImage = new Image();
          newImage.src = item.image;
          product.appendChild(newImage);

          //get name
          let newName = document.createElement('p');
          newName.classList.add('title');
          newName.innerText = item.name;
         product.appendChild(newName);

         //get price
         let newPrice = document.createElement('p');
         newPrice.classList.add('price');
         newPrice.innerText = item.price;
        product.appendChild(newPrice);

         //get distCount
         let newCount = document.createElement('span');
         newCount.classList.add('distCount');
         newCount.innerText = item.distCount;
         newPrice.appendChild(newCount);

         listProducts.appendChild(product);

     })
}

filter.addEventListener('submit', function(e){
     e.preventDefault();
     let node = e.target.elements;
     
      data = listItems.filter(item => {
          // get category
          if(node.category.value != ""){
               if(item.nature.type != node.category.value){
                    return false;
               }
          }

          // get color
          if(node.color.value != ""){
               if(item.nature.color != node.color.value){
                    return false;
               }
          }

          //get name 
          if(node.name.value != ""){
               if(!item.name.includes(node.name.value)){
                    return false;
               }
          }

          // get min price
          if(node.minPrice.value != ""){
               if(item.price < node.minPrice.value){
                    return false;
               }
          }


          // get max price
          if(node.maxPrice.value != ""){
               if(item.price > node.maxPrice.value){
                    return false;
               }
          }
          return true;
     })
     showProducts(data)
})