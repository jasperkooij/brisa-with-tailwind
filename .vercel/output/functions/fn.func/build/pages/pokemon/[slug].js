function d(r){return e(null,r)}function e(r,{children:n,...t},o){let u=n;if(Array.isArray(n)&&!m(n))u=n.map((a)=>a?.[i]?a:d({children:a}));return Object.assign([r,{...t,key:o},u],{[i]:!0})}function m(r){return Array.isArray(r)&&((i in r)||p(r))}function p(r){return r?.[0]==="HTML"&&typeof r[1]?.html==="string"}var i=Symbol.for("isJSX");function s({attacks:r}){return e("div",{children:[e("h4",{class:"font-bold text-lg pb-6",children:"Attacks"}),e("ul",{children:r?.map((n)=>e("li",{children:[e("span",{class:"font-semibold",children:n.name})," - ",n.power]}))})]})}function c({pokemon:r}){return e("a",{href:`/pokemon/${r.slug}`,class:"block",children:e("article",{class:"group bg-flex flex-col sm:w-64 w-1/4 bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-xl hover:shadow-gray-100 transition-all",children:[e("div",{class:"sm:w-64 w-1/4 overflow-hidden",children:e("img",{src:r.cover,alt:r.name,class:"object-cover object-center w-full grayscale-[0.1] group-hover:grayscale-0 h-full rounded-md group-hover:scale-105 transition-all"})}),e("div",{class:"p-6",children:[e("h3",{class:"font-semibold truncate",children:r.name}),e("p",{class:"text-gray-600 text-sm truncate",children:r.description})]})]})})}var l=[{id:32,name:"Charmander",slug:"charmander",description:"Charmander is a Fire-type Pok\xE9mon. It evolves into Charmeleon starting at level 16. It is one of the three Starter Pok\xE9mon introduced in the Kanto region.",cover:"/pokemons/charmander.jpg",attacks:[{name:"Ember",power:40},{name:"Scratch",power:40}],category:"fire"},{id:18,name:"Pikachu",slug:"pikachu",description:"Pikachu is an Electric-type Pok\xE9mon. It evolves from Pichu when leveled up with high friendship and evolves into Raichu when exposed to a Thunder Stone.",cover:"/pokemons/pika.jpeg",category:"electric",attacks:[{name:"Thunder Shock",power:40},{name:"Quick Attack",power:40}]},{id:21,name:"Bulbasaur",slug:"bulbasaur",description:"Bulbasaur is a Grass/Poison-type Pok\xE9mon. It evolves into Ivysaur starting at level 16. It is one of the three Starter Pok\xE9mon introduced in the Kanto region.",cover:"/pokemons/bulbasaur.jpg",category:"grass",attacks:[{name:"Tackle",power:40},{name:"Vine Whip",power:40}]},{id:49,name:"Squirtle",slug:"squirtle",description:"Squirtle is a Water-type Pok\xE9mon. It evolves into Wartortle starting at level 16. It is one of the three Starter Pok\xE9mon introduced in the Kanto region.",cover:"/pokemons/squirtle.jpeg",category:"water",attacks:[{name:"Tackle",power:40},{name:"Water Gun",power:40}]}];function f(r){return Object.assign(["HTML",{html:r},null],{[Symbol.for("isJSX")]:!0})}var $=Symbol.for("isJSX");function h({},{route:r}){const n=r.params.slug,t=l.find((o)=>o.slug===n)??{};return e("div",{class:"max-w-4xl mx-auto relative",children:[e("div",{class:"flex gap-2 pb-10 items-center text-gray-500",children:[e("a",{class:"after:content-['/'] after:pl-2 capitalize",href:"/",children:"Poke"}),e("span",{class:"after:content-['/'] after:pl-2 capitalize",children:t.category}),e("span",{children:t.name})]}),e("div",{class:"flex flex-col md:flex-row sm sm:gap-8",children:[e("div",{class:"max-w-[450px] w-full h-full max-h-[450px]",children:e("img",{src:t.cover,alt:t.name,class:"w-full h-full object-cover rounded-xl shadow-2xl shadow-gray-200 border-b"})}),e("article",{class:"py-4 flex justify-between flex-col",children:[e("div",{children:[e("h1",{class:"text-3xl sm:text-5xl font-bold animate-in",children:t.name}),e("p",{class:"max-w-sm py-4 text-lg",children:t.description})]}),e("p",{children:e(s,{attacks:t.attacks})})]})]}),e("div",{class:"py-6 md:py-20"}),e("h4",{class:"font-bold text-lg pb-6",children:"More pokemons"}),e("div",{class:"flex flex-wrap justify-center sm:justify-normal gap-4",children:l.filter((o)=>o.id!==t.id).map((o)=>e(c,{pokemon:o}))}),e("script",{children:f(`
        document.addEventListener("click", (event) => {
          if (location.pathname === "/") return;
          if (event?.target?.tagName === "A") {
            document.querySelector(".animate-in")?.classList.add("opacity-0");
          }
        });
      `)})]})}export{h as default};
