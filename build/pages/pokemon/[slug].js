// @bun
// node_modules/brisa/jsx-runtime/index.js
function S(r) {
  return i(null, r);
}
function i(r, { children: e, ...o }, s) {
  let a = e;
  if (Array.isArray(e) && !l(e))
    a = e.map((t) => t?.[n] ? t : S({ children: t }));
  return Object.assign([r, { ...o, key: s }, a], { [n]: true });
}
function l(r) {
  return Array.isArray(r) && ((n in r) || m(r));
}
function m(r) {
  return r?.[0] === "HTML" && typeof r[1]?.html === "string";
}
var n = Symbol.for("isJSX");

// src/components/attacks.tsx
function Attacks({ attacks }) {
  return i("div", {
    children: [i("h4", {
      class: "font-bold text-lg pb-6",
      children: "Attacks"
    }, undefined, false, undefined, this), i("ul", {
      children: attacks?.map((attack) => i("li", {
        children: [i("span", {
          class: "font-semibold",
          children: attack.name
        }, undefined, false, undefined, this), " - ", attack.power]
      }, undefined, true, undefined, this))
    }, undefined, false, undefined, this)]
  }, undefined, true, undefined, this);
}

// src/components/pokemon-card.tsx
function PokemonCard({ pokemon }) {
  return i("a", {
    href: `/pokemon/${pokemon.slug}`,
    class: "block",
    children: i("article", {
      class: "group bg-flex flex-col sm:w-64 w-1/4 bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-xl hover:shadow-gray-100 transition-all",
      children: [i("div", {
        class: "sm:w-64 w-1/4 overflow-hidden",
        children: i("img", {
          src: `/_next/image?url=${pokemon.cover}&w=600&q=75`,
          alt: pokemon.name,
          class: "jk object-cover object-center w-full grayscale-[0.1] group-hover:grayscale-0 h-full rounded-md group-hover:scale-105 transition-all"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this), i("div", {
        class: "p-6",
        children: [i("h3", {
          class: "font-semibold truncate",
          children: pokemon.name
        }, undefined, false, undefined, this), i("p", {
          class: "text-gray-600 text-sm truncate",
          children: pokemon.description
        }, undefined, false, undefined, this)]
      }, undefined, true, undefined, this)]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}

// src/data/index.ts
var pokemons = [
  {
    id: 32,
    name: "Charmander",
    slug: "charmander",
    description: "Charmander is a Fire-type Pok\xE9mon. It evolves into Charmeleon starting at level 16. It is one of the three Starter Pok\xE9mon introduced in the Kanto region.",
    cover: "/pokemons/charmander.jpg",
    attacks: [
      {
        name: "Ember",
        power: 40
      },
      {
        name: "Scratch",
        power: 40
      }
    ],
    category: "fire" /* Fire */
  },
  {
    id: 18,
    name: "Pikachu",
    slug: "pikachu",
    description: "Pikachu is an Electric-type Pok\xE9mon. It evolves from Pichu when leveled up with high friendship and evolves into Raichu when exposed to a Thunder Stone.",
    cover: "/pokemons/pika.jpeg",
    category: "electric" /* Electric */,
    attacks: [
      {
        name: "Thunder Shock",
        power: 40
      },
      {
        name: "Quick Attack",
        power: 40
      }
    ]
  },
  {
    id: 21,
    name: "Bulbasaur",
    slug: "bulbasaur",
    description: "Bulbasaur is a Grass/Poison-type Pok\xE9mon. It evolves into Ivysaur starting at level 16. It is one of the three Starter Pok\xE9mon introduced in the Kanto region.",
    cover: "/pokemons/bulbasaur.jpg",
    category: "grass" /* Grass */,
    attacks: [
      {
        name: "Tackle",
        power: 40
      },
      {
        name: "Vine Whip",
        power: 40
      }
    ]
  },
  {
    id: 49,
    name: "Squirtle",
    slug: "squirtle",
    description: "Squirtle is a Water-type Pok\xE9mon. It evolves into Wartortle starting at level 16. It is one of the three Starter Pok\xE9mon introduced in the Kanto region.",
    cover: "/pokemons/squirtle.jpeg",
    category: "water" /* Water */,
    attacks: [
      {
        name: "Tackle",
        power: 40
      },
      {
        name: "Water Gun",
        power: 40
      }
    ]
  }
];

// node_modules/brisa/out/core/index.js
function D(t) {
  return Object.assign(["HTML", { html: t }, null], { [Symbol.for("isJSX")]: true });
}
var I = Symbol.for("isJSX");

// src/pages/pokemon/[slug].tsx
function PokemonPage({}, { route }) {
  const slug = route.params.slug;
  const pokemon = pokemons.find((p) => p.slug === slug) ?? {};
  return i("div", {
    class: "max-w-4xl mx-auto relative",
    children: [i("div", {
      class: "flex gap-2 pb-10 items-center text-gray-500",
      children: [i("a", {
        class: "after:content-['/'] after:pl-2 capitalize",
        href: "/",
        children: "Poke"
      }, undefined, false, undefined, this), i("span", {
        class: "after:content-['/'] after:pl-2 capitalize",
        children: pokemon.category
      }, undefined, false, undefined, this), i("span", {
        children: pokemon.name
      }, undefined, false, undefined, this)]
    }, undefined, true, undefined, this), i("div", {
      class: "flex flex-col md:flex-row sm sm:gap-8",
      children: [i("div", {
        class: "max-w-[450px] w-full h-full max-h-[450px]",
        children: i("img", {
          src: pokemon.cover,
          alt: pokemon.name,
          class: "w-full h-full object-cover rounded-xl shadow-2xl shadow-gray-200 border-b"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this), i("article", {
        class: "py-4 flex justify-between flex-col",
        children: [i("div", {
          children: [i("h1", {
            class: "text-3xl sm:text-5xl font-bold animate-in",
            children: pokemon.name
          }, undefined, false, undefined, this), i("p", {
            class: "max-w-sm py-4 text-lg",
            children: pokemon.description
          }, undefined, false, undefined, this)]
        }, undefined, true, undefined, this), i("p", {
          children: i(Attacks, {
            attacks: pokemon.attacks
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)]
      }, undefined, true, undefined, this)]
    }, undefined, true, undefined, this), i("div", {
      class: "py-6 md:py-20"
    }, undefined, false, undefined, this), i("h4", {
      class: "font-bold text-lg pb-6",
      children: "More pokemons"
    }, undefined, false, undefined, this), i("div", {
      class: "flex flex-wrap justify-center sm:justify-normal gap-4",
      children: pokemons.filter((p) => p.id !== pokemon.id).map((pr) => i(PokemonCard, {
        pokemon: pr
      }, undefined, false, undefined, this))
    }, undefined, false, undefined, this), i("script", {
      children: D(`
        document.addEventListener("click", (event) => {
          if (location.pathname === "/") return;
          if (event?.target?.tagName === "A") {
            document.querySelector(".animate-in")?.classList.add("opacity-0");
          }
        });
      `)
    }, undefined, false, undefined, this)]
  }, undefined, true, undefined, this);
}
export {
  PokemonPage as default
};

//# debugId=5600A957D6D41BC664756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2JyaXNhL2pzeC1ydW50aW1lL2luZGV4LmpzIiwgIi4uL3NyYy9jb21wb25lbnRzL2F0dGFja3MudHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL3Bva2Vtb24tY2FyZC50c3giLCAiLi4vc3JjL2RhdGEvaW5kZXgudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2JyaXNhL291dC9jb3JlL2luZGV4LmpzIiwgIi4uL3NyYy9wYWdlcy9wb2tlbW9uL1tzbHVnXS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiLy8gQGJ1blxuZnVuY3Rpb24gUyhyKXtyZXR1cm4gaShudWxsLHIpfWZ1bmN0aW9uIGkocix7Y2hpbGRyZW46ZSwuLi5vfSxzKXtsZXQgYT1lO2lmKEFycmF5LmlzQXJyYXkoZSkmJiFsKGUpKWE9ZS5tYXAoKHQpPT50Py5bbl0/dDpTKHtjaGlsZHJlbjp0fSkpO3JldHVybiBPYmplY3QuYXNzaWduKFtyLHsuLi5vLGtleTpzfSxhXSx7W25dOiEwfSl9ZnVuY3Rpb24gbChyKXtyZXR1cm4gQXJyYXkuaXNBcnJheShyKSYmKChuIGluIHIpfHxtKHIpKX1mdW5jdGlvbiBtKHIpe3JldHVybiByPy5bMF09PT1cIkhUTUxcIiYmdHlwZW9mIHJbMV0/Lmh0bWw9PT1cInN0cmluZ1wifXZhciBuPVN5bWJvbC5mb3IoXCJpc0pTWFwiKTtleHBvcnR7aSBhcyBqc3hzLGkgYXMganN4REVWLGkgYXMganN4LG0gYXMgaXNEYW5nZXJIVE1MLGwgYXMgaXNBcnJhd09mSlNYQ29udGVudCxTIGFzIEZyYWdtZW50fTtcbiIsCiAgICAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXR0YWNrcyh7YXR0YWNrc30pIHtcbiAgcmV0dXJuIGpzeERFVihcImRpdlwiLCB7XG4gICAgY2hpbGRyZW46IFtqc3hERVYoXCJoNFwiLCB7XG4gICAgICBjbGFzczogXCJmb250LWJvbGQgdGV4dC1sZyBwYi02XCIsXG4gICAgICBjaGlsZHJlbjogXCJBdHRhY2tzXCJcbiAgICB9LCB1bmRlZmluZWQsIGZhbHNlLCB1bmRlZmluZWQsIHRoaXMpLCBqc3hERVYoXCJ1bFwiLCB7XG4gICAgICBjaGlsZHJlbjogYXR0YWNrcz8ubWFwKGF0dGFjayA9PiBqc3hERVYoXCJsaVwiLCB7XG4gICAgICAgIGNoaWxkcmVuOiBbanN4REVWKFwic3BhblwiLCB7XG4gICAgICAgICAgY2xhc3M6IFwiZm9udC1zZW1pYm9sZFwiLFxuICAgICAgICAgIGNoaWxkcmVuOiBhdHRhY2submFtZVxuICAgICAgICB9LCB1bmRlZmluZWQsIGZhbHNlLCB1bmRlZmluZWQsIHRoaXMpLCBcIiAtIFwiLCBhdHRhY2sucG93ZXJdXG4gICAgICB9LCB1bmRlZmluZWQsIHRydWUsIHVuZGVmaW5lZCwgdGhpcykpXG4gICAgfSwgdW5kZWZpbmVkLCBmYWxzZSwgdW5kZWZpbmVkLCB0aGlzKV1cbiAgfSwgdW5kZWZpbmVkLCB0cnVlLCB1bmRlZmluZWQsIHRoaXMpO1xufVxuaW1wb3J0IHsganN4LCBqc3hzLCBqc3hERVYsIEZyYWdtZW50IH0gZnJvbSAnYnJpc2EvanN4LXJ1bnRpbWUnO1xuIiwKICAgICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2tlbW9uQ2FyZCh7cG9rZW1vbn0pIHtcbiAgcmV0dXJuIGpzeERFVihcImFcIiwge1xuICAgIGhyZWY6IGAvcG9rZW1vbi8ke3Bva2Vtb24uc2x1Z31gLFxuICAgIGNsYXNzOiBcImJsb2NrXCIsXG4gICAgY2hpbGRyZW46IGpzeERFVihcImFydGljbGVcIiwge1xuICAgICAgY2xhc3M6IFwiZ3JvdXAgYmctZmxleCBmbGV4LWNvbCBzbTp3LTY0IHctMS80IGJnLXdoaXRlIHNoYWRvdy1zbSByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBob3ZlcjpzaGFkb3cteGwgaG92ZXI6c2hhZG93LWdyYXktMTAwIHRyYW5zaXRpb24tYWxsXCIsXG4gICAgICBjaGlsZHJlbjogW2pzeERFVihcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzOiBcInNtOnctNjQgdy0xLzQgb3ZlcmZsb3ctaGlkZGVuXCIsXG4gICAgICAgIGNoaWxkcmVuOiBqc3hERVYoXCJpbWdcIiwge1xuICAgICAgICAgIHNyYzogYC9fbmV4dC9pbWFnZT91cmw9JHtwb2tlbW9uLmNvdmVyfSZ3PTYwMCZxPTc1YCxcbiAgICAgICAgICBhbHQ6IHBva2Vtb24ubmFtZSxcbiAgICAgICAgICBjbGFzczogXCJqayBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciB3LWZ1bGwgZ3JheXNjYWxlLVswLjFdIGdyb3VwLWhvdmVyOmdyYXlzY2FsZS0wIGgtZnVsbCByb3VuZGVkLW1kIGdyb3VwLWhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UsIHVuZGVmaW5lZCwgdGhpcyksIGpzeERFVihcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzOiBcInAtNlwiLFxuICAgICAgICBjaGlsZHJlbjogW2pzeERFVihcImgzXCIsIHtcbiAgICAgICAgICBjbGFzczogXCJmb250LXNlbWlib2xkIHRydW5jYXRlXCIsXG4gICAgICAgICAgY2hpbGRyZW46IHBva2Vtb24ubmFtZVxuICAgICAgICB9LCB1bmRlZmluZWQsIGZhbHNlLCB1bmRlZmluZWQsIHRoaXMpLCBqc3hERVYoXCJwXCIsIHtcbiAgICAgICAgICBjbGFzczogXCJ0ZXh0LWdyYXktNjAwIHRleHQtc20gdHJ1bmNhdGVcIixcbiAgICAgICAgICBjaGlsZHJlbjogcG9rZW1vbi5kZXNjcmlwdGlvblxuICAgICAgICB9LCB1bmRlZmluZWQsIGZhbHNlLCB1bmRlZmluZWQsIHRoaXMpXVxuICAgICAgfSwgdW5kZWZpbmVkLCB0cnVlLCB1bmRlZmluZWQsIHRoaXMpXVxuICAgIH0sIHVuZGVmaW5lZCwgdHJ1ZSwgdW5kZWZpbmVkLCB0aGlzKVxuICB9LCB1bmRlZmluZWQsIGZhbHNlLCB1bmRlZmluZWQsIHRoaXMpO1xufVxuaW1wb3J0IHsganN4LCBqc3hzLCBqc3hERVYsIEZyYWdtZW50IH0gZnJvbSAnYnJpc2EvanN4LXJ1bnRpbWUnO1xuIiwKICAgICJleHBvcnQgZW51bSBQb2tlbW9uQ2F0ZWdvcnkge1xuICBGaXJlID0gJ2ZpcmUnLFxuICBXYXRlciA9ICd3YXRlcicsXG4gIEdyYXNzID0gJ2dyYXNzJyxcbiAgRWxlY3RyaWMgPSAnZWxlY3RyaWMnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBva2Vtb24ge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIHNsdWc6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgY292ZXI6IHN0cmluZztcbiAgYXR0YWNrczoge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBwb3dlcjogbnVtYmVyO1xuICB9W107XG4gIGNhdGVnb3J5OiBQb2tlbW9uQ2F0ZWdvcnk7XG59XG5cbmV4cG9ydCBjb25zdCBwb2tlbW9uczogUG9rZW1vbltdID0gW1xuICB7XG4gICAgaWQ6IDMyLFxuICAgIG5hbWU6ICdDaGFybWFuZGVyJyxcbiAgICBzbHVnOiAnY2hhcm1hbmRlcicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnQ2hhcm1hbmRlciBpcyBhIEZpcmUtdHlwZSBQb2vDqW1vbi4gSXQgZXZvbHZlcyBpbnRvIENoYXJtZWxlb24gc3RhcnRpbmcgYXQgbGV2ZWwgMTYuIEl0IGlzIG9uZSBvZiB0aGUgdGhyZWUgU3RhcnRlciBQb2vDqW1vbiBpbnRyb2R1Y2VkIGluIHRoZSBLYW50byByZWdpb24uJyxcbiAgICBjb3ZlcjogJy9wb2tlbW9ucy9jaGFybWFuZGVyLmpwZycsXG4gICAgYXR0YWNrczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnRW1iZXInLFxuICAgICAgICBwb3dlcjogNDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnU2NyYXRjaCcsXG4gICAgICAgIHBvd2VyOiA0MCxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBjYXRlZ29yeTogUG9rZW1vbkNhdGVnb3J5LkZpcmUsXG4gIH0sXG4gIHtcbiAgICBpZDogMTgsXG4gICAgbmFtZTogJ1Bpa2FjaHUnLFxuICAgIHNsdWc6ICdwaWthY2h1JyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdQaWthY2h1IGlzIGFuIEVsZWN0cmljLXR5cGUgUG9rw6ltb24uIEl0IGV2b2x2ZXMgZnJvbSBQaWNodSB3aGVuIGxldmVsZWQgdXAgd2l0aCBoaWdoIGZyaWVuZHNoaXAgYW5kIGV2b2x2ZXMgaW50byBSYWljaHUgd2hlbiBleHBvc2VkIHRvIGEgVGh1bmRlciBTdG9uZS4nLFxuICAgIGNvdmVyOiAnL3Bva2Vtb25zL3Bpa2EuanBlZycsXG4gICAgY2F0ZWdvcnk6IFBva2Vtb25DYXRlZ29yeS5FbGVjdHJpYyxcbiAgICBhdHRhY2tzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdUaHVuZGVyIFNob2NrJyxcbiAgICAgICAgcG93ZXI6IDQwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1F1aWNrIEF0dGFjaycsXG4gICAgICAgIHBvd2VyOiA0MCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiAyMSxcbiAgICBuYW1lOiAnQnVsYmFzYXVyJyxcbiAgICBzbHVnOiAnYnVsYmFzYXVyJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdCdWxiYXNhdXIgaXMgYSBHcmFzcy9Qb2lzb24tdHlwZSBQb2vDqW1vbi4gSXQgZXZvbHZlcyBpbnRvIEl2eXNhdXIgc3RhcnRpbmcgYXQgbGV2ZWwgMTYuIEl0IGlzIG9uZSBvZiB0aGUgdGhyZWUgU3RhcnRlciBQb2vDqW1vbiBpbnRyb2R1Y2VkIGluIHRoZSBLYW50byByZWdpb24uJyxcbiAgICBjb3ZlcjogJy9wb2tlbW9ucy9idWxiYXNhdXIuanBnJyxcbiAgICBjYXRlZ29yeTogUG9rZW1vbkNhdGVnb3J5LkdyYXNzLFxuICAgIGF0dGFja3M6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1RhY2tsZScsXG4gICAgICAgIHBvd2VyOiA0MCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdWaW5lIFdoaXAnLFxuICAgICAgICBwb3dlcjogNDAsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogNDksXG4gICAgbmFtZTogJ1NxdWlydGxlJyxcbiAgICBzbHVnOiAnc3F1aXJ0bGUnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1NxdWlydGxlIGlzIGEgV2F0ZXItdHlwZSBQb2vDqW1vbi4gSXQgZXZvbHZlcyBpbnRvIFdhcnRvcnRsZSBzdGFydGluZyBhdCBsZXZlbCAxNi4gSXQgaXMgb25lIG9mIHRoZSB0aHJlZSBTdGFydGVyIFBva8OpbW9uIGludHJvZHVjZWQgaW4gdGhlIEthbnRvIHJlZ2lvbi4nLFxuICAgIGNvdmVyOiAnL3Bva2Vtb25zL3NxdWlydGxlLmpwZWcnLFxuICAgIGNhdGVnb3J5OiBQb2tlbW9uQ2F0ZWdvcnkuV2F0ZXIsXG4gICAgYXR0YWNrczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnVGFja2xlJyxcbiAgICAgICAgcG93ZXI6IDQwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1dhdGVyIEd1bicsXG4gICAgICAgIHBvd2VyOiA0MCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG4iLAogICAgImZ1bmN0aW9uIHoodCxFKXtyZXR1cm5bXCJwb3J0YWxcIix7ZWxlbWVudDp0LHRhcmdldDpFfV19ZnVuY3Rpb24gRCh0KXtyZXR1cm4gT2JqZWN0LmFzc2lnbihbXCJIVE1MXCIse2h0bWw6dH0sbnVsbF0se1tTeW1ib2wuZm9yKFwiaXNKU1hcIildOiEwfSl9ZnVuY3Rpb24gUSh0LEUpe3JldHVybntpZDpFLGRlZmF1bHRWYWx1ZTp0fX1mdW5jdGlvbiBDKHQpe3JldHVybiB0IGluc3RhbmNlb2YgRXJyb3ImJnQubmFtZT09PVwiTm90Rm91bmRFcnJvclwifWZ1bmN0aW9uIFUoKXt0aHJvdyBuZXcgVyhcIk5vdCBmb3VuZFwiKX1jbGFzcyBXIGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IodCl7c3VwZXIodCk7dGhpcy5uYW1lPVwiTm90Rm91bmRFcnJvclwifX1mdW5jdGlvbiBZKHQsRSl7Y29uc3QgeD1FPy5yZW5kZXJNb2RlPz9cInJlYWN0aXZpdHlcIjtpZihfX0JBU0VfUEFUSF9fKXQ9VVJMLmNhblBhcnNlKHQpP3Q6KF9fQkFTRV9QQVRIX18/P1wiXCIpK3Q7aWYodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCIpe2lmKHdpbmRvdy5feG09eCx3aW5kb3cuZlBhdGgpdD13aW5kb3cuZlBhdGgodCk7bG9jYXRpb24uYXNzaWduKHQpO2NvbnN0IG49KG0pPT57bS5wcmV2ZW50RGVmYXVsdCgpLG0uc3RvcFByb3BhZ2F0aW9uKCksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG4pfTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbil9Y29uc3QgTz1uZXcgRXJyb3IodCk7dGhyb3cgTy5uYW1lPWBuYXZpZ2F0ZToke3h9YCxPfWZ1bmN0aW9uIFModCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBFcnJvciYmdC5uYW1lLnN0YXJ0c1dpdGgoXCJuYXZpZ2F0ZTpcIil9ZnVuY3Rpb24gRih0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIEVycm9yJiZ0Lm5hbWU9PT1cInJlcmVuZGVyXCJ9ZnVuY3Rpb24gaih0KXtyZXR1cm4gRih0KXx8Uyh0KXx8Qyh0KX12YXIgZz17aXM6aixpc1JlcmVuZGVyOkYsaXNOYXZpZ2F0ZTpTLGlzTm90Rm91bmQ6Q30sSz1nO2Z1bmN0aW9uIFoodCl7aWYoIXQubGVuZ3RoKXJldHVybltdO2NvbnN0W0UseCxPLG5dPXQuc2xpY2UoMCw0KTtyZXR1cm5bW0V8fE8seHx8XCJcIixuXV0uY29uY2F0KFoodC5zbGljZSg0LHQubGVuZ3RoKSkpfWZ1bmN0aW9uIEIodCl7cmV0dXJuIEcobnVsbCx0KX1mdW5jdGlvbiBHKHQse2NoaWxkcmVuOkUsLi4ueH0sTyl7bGV0IG49RTtpZihBcnJheS5pc0FycmF5KEUpJiYhcihFKSluPUUubWFwKChtKT0+bT8uW0ldP206Qih7Y2hpbGRyZW46bX0pKTtyZXR1cm4gT2JqZWN0LmFzc2lnbihbdCx7Li4ueCxrZXk6T30sbl0se1tJXTohMH0pfWZ1bmN0aW9uIHIodCl7cmV0dXJuIEFycmF5LmlzQXJyYXkodCkmJigoSSBpbiB0KXx8cCh0KSl9ZnVuY3Rpb24gcCh0KXtyZXR1cm4gdD8uWzBdPT09XCJIVE1MXCImJnR5cGVvZiB0WzFdPy5odG1sPT09XCJzdHJpbmdcIn12YXIgST1TeW1ib2wuZm9yKFwiaXNKU1hcIik7dmFyIGI9LzwoXFx3KykgKj4oLio/KTxcXC9cXDEgKj58PChcXHcrKSAqXFwvPi8sYz0vKD86XFxyXFxufFxccnxcXG4pL2c7ZnVuY3Rpb24gUih0LEU9W10pe2NvbnN0IHg9dC5yZXBsYWNlKGMsXCJcIikuc3BsaXQoYik7aWYoeC5sZW5ndGg9PT0xKXJldHVybiB0O2NvbnN0IE89W10sbj14LnNoaWZ0KCk7aWYobilPLnB1c2gobik7Y29uc3QgbT1aKHgpO2ZvcihsZXRbTixfLGZdb2YgbSl7Y29uc3QgQT1FW05dfHxHKEIse30sdm9pZCAwLCExLHZvaWQgMCx0aGlzKTtpZihBWzJdPV8/UihfLEUpOl8sTy5wdXNoKEEpLGYpTy5wdXNoKGYpfXJldHVybiBPfWZ1bmN0aW9uIEgodCxFPVwiXCIseCxPPXtyZXR1cm5PYmplY3RzOiExfSl7Y29uc3R7a2V5U2VwYXJhdG9yOm49XCIuXCJ9PXh8fHt9LG09bj9FLnNwbGl0KG4pOltFXTtpZihFPT09biYmTy5yZXR1cm5PYmplY3RzKXJldHVybiB0O2NvbnN0IE49bS5yZWR1Y2UoKF8sZik9PntpZih0eXBlb2YgXz09PVwic3RyaW5nXCIpcmV0dXJue307Y29uc3QgQT1fW2ZdO3JldHVybiBBfHwodHlwZW9mIEE9PT1cInN0cmluZ1wiP0E6e30pfSx0KTtpZih0eXBlb2YgTj09PVwic3RyaW5nXCJ8fE4gaW5zdGFuY2VvZiBPYmplY3QmJk8ucmV0dXJuT2JqZWN0cylyZXR1cm4gTjtyZXR1cm59ZnVuY3Rpb24gdih0LEUseCxPLG4pe2lmKCFufHx0eXBlb2Ygbi5jb3VudCE9PVwibnVtYmVyXCIpcmV0dXJuIHg7Y29uc3QgbT1gJHt4fV8ke24uY291bnR9YDtpZihIKEUsbSxPKSE9PXZvaWQgMClyZXR1cm4gbTtjb25zdCBOPWAke3h9XyR7dC5zZWxlY3Qobi5jb3VudCl9YDtpZihIKEUsTixPKSE9PXZvaWQgMClyZXR1cm4gTjtjb25zdCBfPWAke3h9LiR7bi5jb3VudH1gO2lmKEgoRSxfLE8pIT09dm9pZCAwKXJldHVybiBfO2NvbnN0IGY9YCR7eH0uJHt0LnNlbGVjdChuLmNvdW50KX1gO2lmKEgoRSxmLE8pIT09dm9pZCAwKXJldHVybiBmO3JldHVybiB4fWZ1bmN0aW9uIHcoe3RleHQ6dCxxdWVyeTpFLGNvbmZpZzp4LGxvY2FsZTpPfSl7aWYoIXR8fCFFKXJldHVybiB0fHxcIlwiO2NvbnN0IG49KEEpPT5BLnJlcGxhY2UoL1stXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZyxcIlxcXFwkJlwiKSx7Zm9ybWF0Om09bnVsbCxwcmVmaXg6Tj1cInt7XCIsc3VmZml4Ol89XCJ9fVwifT14LmludGVycG9sYXRpb258fHt9LGY9Xz09PVwiXCI/XCJcIjpgKD86W1xcXFxzLF0rKFtcXFxcdy1dKikpP1xcXFxzKiR7bihfKX1gO3JldHVybiBPYmplY3Qua2V5cyhFKS5yZWR1Y2UoKEEsTSk9Pntjb25zdCBKPW5ldyBSZWdFeHAoYCR7bihOKX1cXFxccyoke019JHtmfWAsXCJnbVwiKTtyZXR1cm4gQS5yZXBsYWNlKEosKFAsWCk9PntyZXR1cm4gWCYmbT9tKEVbTV0sWCxPKTpFW01dfSl9LHQpfWZ1bmN0aW9uIFYoe29iajp0LHF1ZXJ5OkUsY29uZmlnOngsbG9jYWxlOk99KXtpZighRXx8T2JqZWN0LmtleXMoRSkubGVuZ3RoPT09MClyZXR1cm4gdDtyZXR1cm4gT2JqZWN0LmtleXModCkuZm9yRWFjaCgobik9PntpZih0W25daW5zdGFuY2VvZiBPYmplY3QpVih7b2JqOnRbbl0scXVlcnk6RSxjb25maWc6eCxsb2NhbGU6T30pO2lmKHR5cGVvZiB0W25dPT09XCJzdHJpbmdcIil0W25dPXcoe3RleHQ6dFtuXSxxdWVyeTpFLGNvbmZpZzp4LGxvY2FsZTpPfSl9KSx0fWZ1bmN0aW9uIGQodCxFKXtjb25zdHthbGxvd0VtcHR5U3RyaW5nczp4PSEwfT1FLE89bmV3IEludGwuUGx1cmFsUnVsZXModCksbj0oXyxmKT0+e2lmKEFycmF5LmlzQXJyYXkoXykpcmV0dXJuIF8ubWFwKChBKT0+bihBLGYpKTtpZihfIGluc3RhbmNlb2YgT2JqZWN0KXJldHVybiBWKHtvYmo6XyxxdWVyeTpmLGNvbmZpZzpFLGxvY2FsZTp0fSk7cmV0dXJuIHcoe3RleHQ6XyxxdWVyeTpmLGNvbmZpZzpFLGxvY2FsZTp0fSl9LG09KF89XCJcIixmLEEpPT57Y29uc3QgTT1FLl9tZXNzYWdlc3x8e30sSj17Li4uRS5tZXNzYWdlcz8uW3RdfHx7fSwuLi5NfSxQPXYoTyxKLF8sRSxmKSxYPUgoSixQLEUsQSksVD10eXBlb2YgWD09PVwib2JqZWN0XCI/SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShYKSk6WCxoPXR5cGVvZiBUPT09XCJ1bmRlZmluZWRcInx8dHlwZW9mIFQ9PT1cIm9iamVjdFwiJiYhT2JqZWN0LmtleXMoVCkubGVuZ3RofHxUPT09XCJcIiYmIXgsTD10eXBlb2YgQT8uZmFsbGJhY2s9PT1cInN0cmluZ1wiP1tBLmZhbGxiYWNrXTpBPy5mYWxsYmFja3x8W107aWYoaCYmQXJyYXkuaXNBcnJheShMKSYmTC5sZW5ndGgpe2NvbnN0W3MsLi4uJF09TDtpZih0eXBlb2Ygcz09PVwic3RyaW5nXCIpcmV0dXJuIE4ocyxmLHsuLi5BLGZhbGxiYWNrOiR9KX1pZihoJiZBJiZBLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFwiKSYmIUw/Lmxlbmd0aClyZXR1cm4gQS5kZWZhdWx0P24oQS5kZWZhdWx0LGYpOkEuZGVmYXVsdDtpZihoKXJldHVybiBfO3JldHVybiBuKFQsZil9LE49KF89XCJcIixmLEEpPT57Y29uc3QgTT1tKF8sZixBKTtyZXR1cm4gQT8uZWxlbWVudHM/UihNLEEuZWxlbWVudHMpOk19O3JldHVybiBOfWV4cG9ydHtkIGFzIHRyYW5zbGF0ZUNvcmUsSyBhcyB0aHJvd2FibGUsVSBhcyBub3RGb3VuZCxZIGFzIG5hdmlnYXRlLEQgYXMgZGFuZ2VySFRNTCx6IGFzIGNyZWF0ZVBvcnRhbCxRIGFzIGNyZWF0ZUNvbnRleHR9O1xuIiwKICAgICJpbXBvcnQgQXR0YWNrcyBmcm9tIFwiQC9jb21wb25lbnRzL2F0dGFja3NcIjtcbmltcG9ydCBQb2tlbW9uQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL3Bva2Vtb24tY2FyZFwiO1xuaW1wb3J0IHtwb2tlbW9uc30gZnJvbSBcIkAvZGF0YVwiO1xuaW1wb3J0IHtkYW5nZXJIVE1MfSBmcm9tIFwiYnJpc2FcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBva2Vtb25QYWdlKHt9LCB7cm91dGV9KSB7XG4gIGNvbnN0IHNsdWcgPSByb3V0ZS5wYXJhbXMuc2x1ZztcbiAgY29uc3QgcG9rZW1vbiA9IHBva2Vtb25zLmZpbmQocCA9PiBwLnNsdWcgPT09IHNsdWcpID8/ICh7fSk7XG4gIHJldHVybiBqc3hERVYoXCJkaXZcIiwge1xuICAgIGNsYXNzOiBcIm1heC13LTR4bCBteC1hdXRvIHJlbGF0aXZlXCIsXG4gICAgY2hpbGRyZW46IFtqc3hERVYoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwiZmxleCBnYXAtMiBwYi0xMCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTUwMFwiLFxuICAgICAgY2hpbGRyZW46IFtqc3hERVYoXCJhXCIsIHtcbiAgICAgICAgY2xhc3M6IFwiYWZ0ZXI6Y29udGVudC1bJy8nXSBhZnRlcjpwbC0yIGNhcGl0YWxpemVcIixcbiAgICAgICAgaHJlZjogXCIvXCIsXG4gICAgICAgIGNoaWxkcmVuOiBcIlBva2VcIlxuICAgICAgfSwgdW5kZWZpbmVkLCBmYWxzZSwgdW5kZWZpbmVkLCB0aGlzKSwganN4REVWKFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzOiBcImFmdGVyOmNvbnRlbnQtWycvJ10gYWZ0ZXI6cGwtMiBjYXBpdGFsaXplXCIsXG4gICAgICAgIGNoaWxkcmVuOiBwb2tlbW9uLmNhdGVnb3J5XG4gICAgICB9LCB1bmRlZmluZWQsIGZhbHNlLCB1bmRlZmluZWQsIHRoaXMpLCBqc3hERVYoXCJzcGFuXCIsIHtcbiAgICAgICAgY2hpbGRyZW46IHBva2Vtb24ubmFtZVxuICAgICAgfSwgdW5kZWZpbmVkLCBmYWxzZSwgdW5kZWZpbmVkLCB0aGlzKV1cbiAgICB9LCB1bmRlZmluZWQsIHRydWUsIHVuZGVmaW5lZCwgdGhpcyksIGpzeERFVihcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IHNtIHNtOmdhcC04XCIsXG4gICAgICBjaGlsZHJlbjogW2pzeERFVihcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzOiBcIm1heC13LVs0NTBweF0gdy1mdWxsIGgtZnVsbCBtYXgtaC1bNDUwcHhdXCIsXG4gICAgICAgIGNoaWxkcmVuOiBqc3hERVYoXCJpbWdcIiwge1xuICAgICAgICAgIHNyYzogcG9rZW1vbi5jb3ZlcixcbiAgICAgICAgICBhbHQ6IHBva2Vtb24ubmFtZSxcbiAgICAgICAgICBjbGFzczogXCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciByb3VuZGVkLXhsIHNoYWRvdy0yeGwgc2hhZG93LWdyYXktMjAwIGJvcmRlci1iXCJcbiAgICAgICAgfSwgdW5kZWZpbmVkLCBmYWxzZSwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgfSwgdW5kZWZpbmVkLCBmYWxzZSwgdW5kZWZpbmVkLCB0aGlzKSwganN4REVWKFwiYXJ0aWNsZVwiLCB7XG4gICAgICAgIGNsYXNzOiBcInB5LTQgZmxleCBqdXN0aWZ5LWJldHdlZW4gZmxleC1jb2xcIixcbiAgICAgICAgY2hpbGRyZW46IFtqc3hERVYoXCJkaXZcIiwge1xuICAgICAgICAgIGNoaWxkcmVuOiBbanN4REVWKFwiaDFcIiwge1xuICAgICAgICAgICAgY2xhc3M6IFwidGV4dC0zeGwgc206dGV4dC01eGwgZm9udC1ib2xkIGFuaW1hdGUtaW5cIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBwb2tlbW9uLm5hbWVcbiAgICAgICAgICB9LCB1bmRlZmluZWQsIGZhbHNlLCB1bmRlZmluZWQsIHRoaXMpLCBqc3hERVYoXCJwXCIsIHtcbiAgICAgICAgICAgIGNsYXNzOiBcIm1heC13LXNtIHB5LTQgdGV4dC1sZ1wiLFxuICAgICAgICAgICAgY2hpbGRyZW46IHBva2Vtb24uZGVzY3JpcHRpb25cbiAgICAgICAgICB9LCB1bmRlZmluZWQsIGZhbHNlLCB1bmRlZmluZWQsIHRoaXMpXVxuICAgICAgICB9LCB1bmRlZmluZWQsIHRydWUsIHVuZGVmaW5lZCwgdGhpcyksIGpzeERFVihcInBcIiwge1xuICAgICAgICAgIGNoaWxkcmVuOiBqc3hERVYoQXR0YWNrcywge1xuICAgICAgICAgICAgYXR0YWNrczogcG9rZW1vbi5hdHRhY2tzXG4gICAgICAgICAgfSwgdW5kZWZpbmVkLCBmYWxzZSwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgICB9LCB1bmRlZmluZWQsIGZhbHNlLCB1bmRlZmluZWQsIHRoaXMpXVxuICAgICAgfSwgdW5kZWZpbmVkLCB0cnVlLCB1bmRlZmluZWQsIHRoaXMpXVxuICAgIH0sIHVuZGVmaW5lZCwgdHJ1ZSwgdW5kZWZpbmVkLCB0aGlzKSwganN4REVWKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcInB5LTYgbWQ6cHktMjBcIlxuICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UsIHVuZGVmaW5lZCwgdGhpcyksIGpzeERFVihcImg0XCIsIHtcbiAgICAgIGNsYXNzOiBcImZvbnQtYm9sZCB0ZXh0LWxnIHBiLTZcIixcbiAgICAgIGNoaWxkcmVuOiBcIk1vcmUgcG9rZW1vbnNcIlxuICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UsIHVuZGVmaW5lZCwgdGhpcyksIGpzeERFVihcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBzbTpqdXN0aWZ5LW5vcm1hbCBnYXAtNFwiLFxuICAgICAgY2hpbGRyZW46IHBva2Vtb25zLmZpbHRlcihwID0+IHAuaWQgIT09IHBva2Vtb24uaWQpLm1hcChwciA9PiBqc3hERVYoUG9rZW1vbkNhcmQsIHtcbiAgICAgICAgcG9rZW1vbjogcHJcbiAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UsIHVuZGVmaW5lZCwgdGhpcykpXG4gICAgfSwgdW5kZWZpbmVkLCBmYWxzZSwgdW5kZWZpbmVkLCB0aGlzKSwganN4REVWKFwic2NyaXB0XCIsIHtcbiAgICAgIGNoaWxkcmVuOiBkYW5nZXJIVE1MKGBcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIpIHJldHVybjtcbiAgICAgICAgICBpZiAoZXZlbnQ/LnRhcmdldD8udGFnTmFtZSA9PT0gXCJBXCIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYW5pbWF0ZS1pblwiKT8uY2xhc3NMaXN0LmFkZChcIm9wYWNpdHktMFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgYClcbiAgICB9LCB1bmRlZmluZWQsIGZhbHNlLCB1bmRlZmluZWQsIHRoaXMpXVxuICB9LCB1bmRlZmluZWQsIHRydWUsIHVuZGVmaW5lZCwgdGhpcyk7XG59XG5pbXBvcnQgeyBqc3gsIGpzeHMsIGpzeERFViwgRnJhZ21lbnQgfSBmcm9tICdicmlzYS9qc3gtcnVudGltZSc7XG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOztBQUNBLFNBQVMsQ0FBQyxDQUFDLEdBQUU7QUFBQyxTQUFPLEVBQUUsTUFBSyxDQUFDO0FBQUE7QUFBRSxTQUFTLENBQUMsQ0FBQyxLQUFHLFVBQVMsTUFBSyxL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
