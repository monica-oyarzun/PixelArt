window.onload = function(){
    // Your Code Here
    let container = document.getElementById('canvas');
    container.style.gridTemplate = 'repeat(20, 1fr) / repeat(20, 1fr)';
    
    // // Set the hieght, width, and background color of our container
    // // center it horizontally with margin = auto
    // // and use grid layout to make the boxes nice. 
    // container.style.height = '120px';
    // container.style.width = '120px';
    // container.style.backgroundColor = 'gray';
    // container.style.margin = 'auto';
    // container.style.display = 'grid';
    // container.style.gridTemplate = 'repeat(10, 1fr) / repeat(10, 1fr)'
  
    for(let i = 0; i < 400; i++) {
      let box = document.createElement('span');
      box.style.border = '1px solid black';
      box.style.backgroundColor = 'white';

      container.appendChild(box);

    }
  
    document.body.appendChild(container);
}

  // when using queryselectorAll --> with span, this will create an array
  // so you need to add for loop (similar to untouchables)
  // 

