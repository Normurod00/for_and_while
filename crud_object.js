
while (true)
{
  let i = prompt('i > 100');
    if(i>100)
    {
       alert('good')
       break
    }
    else
    {
      continue
    }
}



let arr = [4, 16, 19, 22, 11, 144, 967, 19124]
let even = []
let odd = []

for(let item of arr){
  if(item%2==0)
  {
    even.push(item)
  }
  else
  {
    odd.push(item)
  }
}

console.log(even,odd);
