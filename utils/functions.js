export function hiddenElement(items) {
    const n = 6 - +items;
    
    for (let i=1; i <= n; i++) {
      console.log(document.getElementById(String(i)))
      document.getElementById(String(i)).hidden = true;
    };
  };