const vnuts = (i) => {
   let v = i % 3 === 0, 
    n = i % 5 === 0; 
    return v ? (n ? 'Visual Nuts': 'Visual'): n ? 'Nuts' : i;
};

for (let i = 1; i <= 100; i++) {
  console.log(vnuts(i))
}

module.exports = {
  vnuts
}