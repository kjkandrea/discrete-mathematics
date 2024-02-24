function factorial(N) {
  let M = 1;
  let F = 1;

  (function recur() {
    F = F * M;

    if (M === N) {
      console.log(F);
      return;
    }
    M += 1;
    recur(N);
  }());

}

factorial(6) // 720
factorial(7) // 5040
