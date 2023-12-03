
// IIFE(Immediately invoked funcrtion expression) to avoid global scope function

(function () {

    const user = 'John';
    console.log(user);
    const hello = ()=>console.log('helo');

})();
(function (name) {
   console.log('Hello' + name);
} )('hi');
    

