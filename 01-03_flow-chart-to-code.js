let M = 1;
let F = 1;

function factorial(N) {
  F = F * M
  if (M === N) {
    console.log(F);
    return;
  }
  M += 1;
  factorial(N);
}

factorial(6) // 720
factorial(7) // 5040
