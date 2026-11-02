import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL,fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const files=['scripts/data/zone3-content.js','scripts/data/zone2-photo-wall-content-v4.js','scripts/data/province-activities.js'];
const missing=new Set();let checked=0;
function visit(value,key=''){
 if(typeof value==='string'&&/^(image|imageUrl|src|pdfUrl|url|gallery|documents)$/i.test(key)&&!/^https?:|^data:|^#/.test(value)){
  if(!/\.(jpg|jpeg|png|webp|gif|pdf|mp3|ogg|mp4)$/i.test(value))return;
  checked++;if(!fs.existsSync(path.join(root,value)))missing.add(value);
 }else if(Array.isArray(value))value.forEach(item=>visit(item,key));
 else if(value&&typeof value==='object')Object.entries(value).forEach(([k,v])=>visit(v,k));
}
for(const file of files){const mod=await import(pathToFileURL(path.join(root,file)));visit(mod);}
console.log(JSON.stringify({checked,missing:[...missing]},null,2));
if(missing.size)process.exitCode=1;
