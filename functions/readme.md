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

- Use default arguments
  **Bad**

  ```javascript
  function createShape(type) {
    const shapeType = type || 'circle';
    // ...
  }
  ```

  **Good**

  ```javascript
  function createShape(type = 'circle') {
    // ...
  }
  ```

- avoid many parameters
- Avoid executing multiple actions within a single function
  **Bad**

  ```javascript
  function notifyUsers(users) {
    users.forEach((user) => {
      const userRecord = database.lookup(user);
      if (userRecord.isVerified()) {
        notify(user);
      }
    });
  }
  ```

  **Good**

  ```javascript
  function notifyVerifiedUsers(users) {
    users.filter(isUserVerified).forEach(notify);
  }

  function isUserVerified(user) {
    const userRecord = database.lookup(user);
    return userRecord.isVerified();
  }
  ```

- if code repeats itsself then it should be a function
