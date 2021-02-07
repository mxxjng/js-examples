const emptyObject = {};
const post = { userId: 1337, text: 'I hacked 127.0.0.1!' };
const objectSpreading = { date: '2020-10-30', ...post };

post.text; // → 'I hacked 127.0.0.1!'
post['text']; // → 'I hacked 127.0.0.1!'
post.text = 'Who hacked me?';
post['text'] = 'Who hacked me?';

// Destructuring
const { userId: a, text: b } = post; // a → 1337, b → 'Who hacked me?'
const { userId, text } = post; // userId → 1337, text → 'Who hacked me?'
