# 논리

## 명제 (Proposition)

참과 거짓을 구별할 수 있는 문장이나 수학적 식

명제의 진리값 (Truth value)
* 참 (True). T : 명제가 타당한 경우
* 거짓 (False), F : 명제가 타당하지 않은 경우

진리값이 틀린 명제이더라도 참 / 거짓이 구별 가능하다면 명제이다.

기준에 따라서 진리값이 변하는 것은 명제가 아니다. `x + 2 = 3` 은 명제가 아니다.

## 논리 연산

* 논리 상수 (T, F)
* 논리 변수 (명제)
* 논리 연산 (and, or, not, xor)

### 합성 명제

하나 이상의 명제와 논리연산자로 이루어진 명제

#### 논리합 (disjunction; or, ∨)

`p ∨ q`

#### 논리곱 (conjunction, and, ∧)

`p ∧ q`

#### 부정 (negation; ~, ¬)

`~ p`

### 배타적 논리합 (exclusive or; xor; ⊕)

`p ⊕ q`

`p ⊕ q === (p ∧ ~q) ∨ (~p ∧ q)`

### 조건 명제 (conditional proposition, →)

명제 p와 q가 있을 때, 명제 p 가 조건의 역할을 수행하고 명제 q가 결론의 역할을 수행하는 경우

`p → q`

* p는 q의 충분조건
* q는 p의 필요조건

`TFTT`

| p   | q   | p → q |
|-----|-----|-------|
| T   | T   | T     |
| T   | F   | F     |
| F   | T   | T     |
| F   | F   | T     |

### 쌍조건명제 (biconditional proposition, ↔)

명제 p와 q가 있을 때, 명제 p와 q가 조건의 역할과 결론의 역할을 동시에 수행하는 경우

`p ↔ q`

`(p → q) ∧ (q → p)`

`TFFT`

| p   | q   | p → q |
|-----|-----|-------|
| T   | T   | T     |
| T   | F   | F     |
| F   | T   | F     |
| F   | F   | T     |

### 논리적 동치 (logical equivalence, ≡)

두 명제 p와 q가 논리적으로 동등

`p ≡ q`

두 명제가 항상 동일한 진리값을 가진다는 의미 

### 역, 이, 대우

조건 명제 `p → q` 일 때

* 역(converse) : `q -> p`
* 이(inverse) : `~p → ~q`
* 대우(contra positive) : `~q -> ~p`

### 동치

## 술어논리 (predicate logic)

### 명제 함수 (propositional function)

변수의 값에 의해 함수의 진리값이 결정되는 문장이나 식

`p(x, y)`

#### 한정화 (quantification)

전체한정자 (universal quantifier, ∀)

* "모든" 또는 "임의의" 를 의미
* `∀xP(x)` 모든 임의의 x에 대해서 `P(x)` 가 `T` 임

존재한정자 (existential quantifier, ∃)

* "존재한다" 를 의미
*  `∃xP(x)` 어떤 x에 대해서 `P(x)` 가 `T`임

### 추론 (inference)

참으로 알려진 명제를 기초로 하여 다른 명제를 유도해내는 과정

전제 (premise) => 결론 (conclusion)

#### 유효추론

전제를 참이라고 가정하였을 때 결론이 항상 참이 되는 추론 ( ex: 삼단논법 )


