function formatString (string, maxLength = 40) {
    // Write code under this line
    let newString = string;
    if (newString.length > maxLength) {
        newString = newString.slice(0, maxLength) + '...';    
    }
   return newString; 
}
  
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // 'Curabitur ligula sapien, tincidunt non.'
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // 'Vestibulum facilisis, purus nec pulvinar...'
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
  // 'Vestibulum facilisis, purus ne...'