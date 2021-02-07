# Functions

- Use Guard clauses in if statements
  https://blog.webdevsimplified.com/2020-01/guard-clauses/

  **Bad**

  ```javascript
  const getInsuranceDeductible = (insurance) => {
    if (insurance.covered) {
      if (insurance.majorRepair) {
        return 500;
      } else if (insurance.mediumRepair) {
        return 300;
      } else {
        return 100;
      }
    } else {
      return 0;
    }
  };
  ```

  **Good**

  ```javascript
  const getInsuranceDeductible = (insurance) => {
    if (!insurance.covered) return 0;
    if (insurance.majorRepair) return 500;
    if (insurance.mediumRepair) return 300;

    return 100;
  };
  ```

- avoid many parameters
- a function should only do one thing
- if code repeats itsself then it should be a function
