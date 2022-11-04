(function() {
  for (let i = 1; i <= 100; i++) {
   let v = i % 3 === 0, 
    n = i % 5 === 0; 
    console.log(v ? (n ? 'Visual Nuts': 'Visual'): n ? 'Nuts' : i);
  }
})();

