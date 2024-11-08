const accounts = {
  a: 100,
  b: 0,
  c: 20,
};

function getAccount() {
  let accountName = prompt("Ingresa el nombber de una cuenta");
  if (!Object.hasOwn(accounts, accountName)) {
    throw new Error(`No existe esa cuenta: ${accountName}`);
  }
  return accountName;
}

function transfer(from, amount) {
  if (accounts[from] < amount) return;
  let progress = 0;
  try{
    accounts[from] -= amount;
    progress =1;
    accounts[getAccount()] += amount;
    progress = 2
  } finally{
    if(progress ==1){
      accounts[from] += amount
    }
  }

}
