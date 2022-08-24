function compareVersions (version1, version2) {
    //split each argument into an array
let arr1 = version1.split('.');
let arr2 = version2.split('.');

//use math.max to get highset value in array
let maxLength = Math.max(arr1.length, arr2.length);
//loop through and compare array each index of the arrays from one another to get most recent version 
for (let i = 0; i < maxLength; i++) {
      if (Number(arr1[i] || 0) < Number(arr2[i] || 0)) {
          return false;
      }
  } return true;
}