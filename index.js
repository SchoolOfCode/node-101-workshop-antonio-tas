import myCollection from "/Users/tasniim/github-classroom/SchoolOfCode/node-101-workshop-antonio-tas/collection.js";

  function describeItem(item) {
     if (item.count === 1) {
         console.log(`I have a ${item.name}. Here's what I like about it: ${item.whatILike}`);
     } else {
         console.log(`I have ${item.count} ${item.name}s. Here's what I like about them: ${item.whatILike}`)
     }
  }

  describeItem(myCollection[0]);

  function describeCollection(array) {
      array.map(item => describeItem(item));
  }

  describeCollection(myCollection);