import"./hoisted.RlhmG3H2.js";let c={blogs:[],projects:[]};async function i(){try{c=await(await fetch("/api/search-data.json")).json()}catch(t){console.error("Failed to load search data:",t)}}function u(t,e){if(!t.trim())return[];const r=t.toLowerCase(),o=[];return(e==="all"||e==="blog")&&c.blogs.forEach(s=>{s.data.keywords?.some(n=>n.toLowerCase().includes(r))&&o.push({type:"blog",item:s})}),(e==="all"||e==="projects")&&c.projects.forEach(s=>{s.data.keywords?.some(n=>n.toLowerCase().includes(r))&&o.push({type:"project",item:s})}),o}function g(t){const e=document.getElementById("search-results"),r=document.getElementById("results-count"),o=document.getElementById("results-list");if(!(!e||!r||!o)){if(t.length===0){e.classList.add("hidden");return}r.textContent=t.length.toString(),o.innerHTML=t.map(({type:s,item:a})=>{const n=s==="blog"?`/blog/${a.slug}`:`/projects/${a.slug}`,d=s==="blog"?"Blog":"Project",l=a.data.keywords?.join(", ")||"";return`
        <li class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
          <a href="${n}" class="block">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <h3 class="font-semibold text-black dark:text-white">${a.data.title}</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mt-1">${a.data.description}</p>
                ${l?`<div class="mt-2"><span class="text-xs text-blue-600 dark:text-blue-400">Keywords: ${l}</span></div>`:""}
              </div>
              <span class="ml-4 text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">${d}</span>
            </div>
          </a>
        </li>
      `}).join(""),e.classList.remove("hidden")}}document.addEventListener("DOMContentLoaded",async()=>{await i();const t=document.getElementById("search-input");if(!t)return;const e=t.dataset.searchType||"all";let r;t.addEventListener("input",o=>{clearTimeout(r),r=setTimeout(()=>{const s=o.target.value,a=u(s,e);g(a)},300)})});
