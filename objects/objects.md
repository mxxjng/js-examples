## Objects

use destructuring if you want to access multiple object fields

**Bad**

```javascript
const firstName = user.firstName;
const lastName = user.lastName;
const age = user.age;
```

**Good**

```javascript
const { firstName, lastName, age } = user;
```
