export default "This is default demo export";
// this doesnt require a name
// we are just exporting the value instead of name
// There should be only one default  per file
// we are indicating that this value here is the only value exported by the file
// We can export multiple value without default
// Ex: export let apikey=""
// export  let apikey1=""
// you cannot define default let
// You can have default and let
/*  
example : 
export default "afjkjkfd";
export let apiKey="adfadgksjfksf";
export let demokey="ajadkf";
*******************************
*******************************
You can import the above code like 
import * as demo from "./util.js"
and use as  object.property
*/
