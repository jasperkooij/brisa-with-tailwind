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

// src/pages/index.tsx
function Homepage() {
  return i(S, {
    children: [i("div", {
      children: [i("h1", {
        class: "text-5xl font-bold mb-4",
        children: "Brisa - Poke"
      }, undefined, false, undefined, this), i("h2", {
        class: "text-xl text-gray-500 mb-8",
        children: "An example using Tailwind CSS with Brisa."
      }, undefined, false, undefined, this), i("p", {
        children: ["Edit ", i("code", {
          children: "src/pages/index.tsx"
        }, undefined, false, undefined, this), "."]
      }, undefined, true, undefined, this)]
    }, undefined, true, undefined, this), i("div", {
      class: "flex flex-wrap gap-4 py-8",
      children: pokemons.map((pokemon) => i(PokemonCard, {
        pokemon
      }, undefined, false, undefined, this))
    }, undefined, false, undefined, this)]
  }, undefined, true, undefined, this);
}
export {
  Homepage as default
};

//# debugId=ACD9004441B15B1E64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2JyaXNhL2pzeC1ydW50aW1lL2luZGV4LmpzIiwgIi4uL3NyYy9jb21wb25lbnRzL3Bva2Vtb24tY2FyZC50c3giLCAiLi4vc3JjL2RhdGEvaW5kZXgudHMiLCAiLi4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICIvLyBAYnVuXG5mdW5jdGlvbiBTKHIpe3JldHVybiBpKG51bGwscil9ZnVuY3Rpb24gaShyLHtjaGlsZHJlbjplLC4uLm99LHMpe2xldCBhPWU7aWYoQXJyYXkuaXNBcnJheShlKSYmIWwoZSkpYT1lLm1hcCgodCk9PnQ/LltuXT90OlMoe2NoaWxkcmVuOnR9KSk7cmV0dXJuIE9iamVjdC5hc3NpZ24oW3Isey4uLm8sa2V5OnN9LGFdLHtbbl06ITB9KX1mdW5jdGlvbiBsKHIpe3JldHVybiBBcnJheS5pc0FycmF5KHIpJiYoKG4gaW4gcil8fG0ocikpfWZ1bmN0aW9uIG0ocil7cmV0dXJuIHI/LlswXT09PVwiSFRNTFwiJiZ0eXBlb2YgclsxXT8uaHRtbD09PVwic3RyaW5nXCJ9dmFyIG49U3ltYm9sLmZvcihcImlzSlNYXCIpO2V4cG9ydHtpIGFzIGpzeHMsaSBhcyBqc3hERVYsaSBhcyBqc3gsbSBhcyBpc0RhbmdlckhUTUwsbCBhcyBpc0FycmF3T2ZKU1hDb250ZW50LFMgYXMgRnJhZ21lbnR9O1xuIiwKICAgICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2tlbW9uQ2FyZCh7cG9rZW1vbn0pIHtcbiAgcmV0dXJuIGpzeERFVihcImFcIiwge1xuICAgIGhyZWY6IGAvcG9rZW1vbi8ke3Bva2Vtb24uc2x1Z31gLFxuICAgIGNsYXNzOiBcImJsb2NrXCIsXG4gICAgY2hpbGRyZW46IGpzeERFVihcImFydGljbGVcIiwge1xuICAgICAgY2xhc3M6IFwiZ3JvdXAgYmctZmxleCBmbGV4LWNvbCBzbTp3LTY0IHctMS80IGJnLXdoaXRlIHNoYWRvdy1zbSByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBob3ZlcjpzaGFkb3cteGwgaG92ZXI6c2hhZG93LWdyYXktMTAwIHRyYW5zaXRpb24tYWxsXCIsXG4gICAgICBjaGlsZHJlbjogW2pzeERFVihcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzOiBcInNtOnctNjQgdy0xLzQgb3ZlcmZsb3ctaGlkZGVuXCIsXG4gICAgICAgIGNoaWxkcmVuOiBqc3hERVYoXCJpbWdcIiwge1xuICAgICAgICAgIHNyYzogYC9fbmV4dC9pbWFnZT91cmw9JHtwb2tlbW9uLmNvdmVyfSZ3PTYwMCZxPTc1YCxcbiAgICAgICAgICBhbHQ6IHBva2Vtb24ubmFtZSxcbiAgICAgICAgICBjbGFzczogXCJqayBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciB3LWZ1bGwgZ3JheXNjYWxlLVswLjFdIGdyb3VwLWhvdmVyOmdyYXlzY2FsZS0wIGgtZnVsbCByb3VuZGVkLW1kIGdyb3VwLWhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UsIHVuZGVmaW5lZCwgdGhpcyksIGpzeERFVihcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzOiBcInAtNlwiLFxuICAgICAgICBjaGlsZHJlbjogW2pzeERFVihcImgzXCIsIHtcbiAgICAgICAgICBjbGFzczogXCJmb250LXNlbWlib2xkIHRydW5jYXRlXCIsXG4gICAgICAgICAgY2hpbGRyZW46IHBva2Vtb24ubmFtZVxuICAgICAgICB9LCB1bmRlZmluZWQsIGZhbHNlLCB1bmRlZmluZWQsIHRoaXMpLCBqc3hERVYoXCJwXCIsIHtcbiAgICAgICAgICBjbGFzczogXCJ0ZXh0LWdyYXktNjAwIHRleHQtc20gdHJ1bmNhdGVcIixcbiAgICAgICAgICBjaGlsZHJlbjogcG9rZW1vbi5kZXNjcmlwdGlvblxuICAgICAgICB9LCB1bmRlZmluZWQsIGZhbHNlLCB1bmRlZmluZWQsIHRoaXMpXVxuICAgICAgfSwgdW5kZWZpbmVkLCB0cnVlLCB1bmRlZmluZWQsIHRoaXMpXVxuICAgIH0sIHVuZGVmaW5lZCwgdHJ1ZSwgdW5kZWZpbmVkLCB0aGlzKVxuICB9LCB1bmRlZmluZWQsIGZhbHNlLCB1bmRlZmluZWQsIHRoaXMpO1xufVxuaW1wb3J0IHsganN4LCBqc3hzLCBqc3hERVYsIEZyYWdtZW50IH0gZnJvbSAnYnJpc2EvanN4LXJ1bnRpbWUnO1xuIiwKICAgICJleHBvcnQgZW51bSBQb2tlbW9uQ2F0ZWdvcnkge1xuICBGaXJlID0gJ2ZpcmUnLFxuICBXYXRlciA9ICd3YXRlcicsXG4gIEdyYXNzID0gJ2dyYXNzJyxcbiAgRWxlY3RyaWMgPSAnZWxlY3RyaWMnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBva2Vtb24ge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIHNsdWc6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgY292ZXI6IHN0cmluZztcbiAgYXR0YWNrczoge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBwb3dlcjogbnVtYmVyO1xuICB9W107XG4gIGNhdGVnb3J5OiBQb2tlbW9uQ2F0ZWdvcnk7XG59XG5cbmV4cG9ydCBjb25zdCBwb2tlbW9uczogUG9rZW1vbltdID0gW1xuICB7XG4gICAgaWQ6IDMyLFxuICAgIG5hbWU6ICdDaGFybWFuZGVyJyxcbiAgICBzbHVnOiAnY2hhcm1hbmRlcicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnQ2hhcm1hbmRlciBpcyBhIEZpcmUtdHlwZSBQb2vDqW1vbi4gSXQgZXZvbHZlcyBpbnRvIENoYXJtZWxlb24gc3RhcnRpbmcgYXQgbGV2ZWwgMTYuIEl0IGlzIG9uZSBvZiB0aGUgdGhyZWUgU3RhcnRlciBQb2vDqW1vbiBpbnRyb2R1Y2VkIGluIHRoZSBLYW50byByZWdpb24uJyxcbiAgICBjb3ZlcjogJy9wb2tlbW9ucy9jaGFybWFuZGVyLmpwZycsXG4gICAgYXR0YWNrczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnRW1iZXInLFxuICAgICAgICBwb3dlcjogNDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnU2NyYXRjaCcsXG4gICAgICAgIHBvd2VyOiA0MCxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBjYXRlZ29yeTogUG9rZW1vbkNhdGVnb3J5LkZpcmUsXG4gIH0sXG4gIHtcbiAgICBpZDogMTgsXG4gICAgbmFtZTogJ1Bpa2FjaHUnLFxuICAgIHNsdWc6ICdwaWthY2h1JyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdQaWthY2h1IGlzIGFuIEVsZWN0cmljLXR5cGUgUG9rw6ltb24uIEl0IGV2b2x2ZXMgZnJvbSBQaWNodSB3aGVuIGxldmVsZWQgdXAgd2l0aCBoaWdoIGZyaWVuZHNoaXAgYW5kIGV2b2x2ZXMgaW50byBSYWljaHUgd2hlbiBleHBvc2VkIHRvIGEgVGh1bmRlciBTdG9uZS4nLFxuICAgIGNvdmVyOiAnL3Bva2Vtb25zL3Bpa2EuanBlZycsXG4gICAgY2F0ZWdvcnk6IFBva2Vtb25DYXRlZ29yeS5FbGVjdHJpYyxcbiAgICBhdHRhY2tzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdUaHVuZGVyIFNob2NrJyxcbiAgICAgICAgcG93ZXI6IDQwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1F1aWNrIEF0dGFjaycsXG4gICAgICAgIHBvd2VyOiA0MCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiAyMSxcbiAgICBuYW1lOiAnQnVsYmFzYXVyJyxcbiAgICBzbHVnOiAnYnVsYmFzYXVyJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdCdWxiYXNhdXIgaXMgYSBHcmFzcy9Qb2lzb24tdHlwZSBQb2vDqW1vbi4gSXQgZXZvbHZlcyBpbnRvIEl2eXNhdXIgc3RhcnRpbmcgYXQgbGV2ZWwgMTYuIEl0IGlzIG9uZSBvZiB0aGUgdGhyZWUgU3RhcnRlciBQb2vDqW1vbiBpbnRyb2R1Y2VkIGluIHRoZSBLYW50byByZWdpb24uJyxcbiAgICBjb3ZlcjogJy9wb2tlbW9ucy9idWxiYXNhdXIuanBnJyxcbiAgICBjYXRlZ29yeTogUG9rZW1vbkNhdGVnb3J5LkdyYXNzLFxuICAgIGF0dGFja3M6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1RhY2tsZScsXG4gICAgICAgIHBvd2VyOiA0MCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdWaW5lIFdoaXAnLFxuICAgICAgICBwb3dlcjogNDAsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogNDksXG4gICAgbmFtZTogJ1NxdWlydGxlJyxcbiAgICBzbHVnOiAnc3F1aXJ0bGUnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1NxdWlydGxlIGlzIGEgV2F0ZXItdHlwZSBQb2vDqW1vbi4gSXQgZXZvbHZlcyBpbnRvIFdhcnRvcnRsZSBzdGFydGluZyBhdCBsZXZlbCAxNi4gSXQgaXMgb25lIG9mIHRoZSB0aHJlZSBTdGFydGVyIFBva8OpbW9uIGludHJvZHVjZWQgaW4gdGhlIEthbnRvIHJlZ2lvbi4nLFxuICAgIGNvdmVyOiAnL3Bva2Vtb25zL3NxdWlydGxlLmpwZWcnLFxuICAgIGNhdGVnb3J5OiBQb2tlbW9uQ2F0ZWdvcnkuV2F0ZXIsXG4gICAgYXR0YWNrczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnVGFja2xlJyxcbiAgICAgICAgcG93ZXI6IDQwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1dhdGVyIEd1bicsXG4gICAgICAgIHBvd2VyOiA0MCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG4iLAogICAgImltcG9ydCBQb2tlbW9uQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL3Bva2Vtb24tY2FyZFwiO1xuaW1wb3J0IHtwb2tlbW9uc30gZnJvbSBcIkAvZGF0YVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZXBhZ2UoKSB7XG4gIHJldHVybiBqc3hERVYoRnJhZ21lbnQsIHtcbiAgICBjaGlsZHJlbjogW2pzeERFVihcImRpdlwiLCB7XG4gICAgICBjaGlsZHJlbjogW2pzeERFVihcImgxXCIsIHtcbiAgICAgICAgY2xhc3M6IFwidGV4dC01eGwgZm9udC1ib2xkIG1iLTRcIixcbiAgICAgICAgY2hpbGRyZW46IFwiQnJpc2EgLSBQb2tlXCJcbiAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UsIHVuZGVmaW5lZCwgdGhpcyksIGpzeERFVihcImgyXCIsIHtcbiAgICAgICAgY2xhc3M6IFwidGV4dC14bCB0ZXh0LWdyYXktNTAwIG1iLThcIixcbiAgICAgICAgY2hpbGRyZW46IFwiQW4gZXhhbXBsZSB1c2luZyBUYWlsd2luZCBDU1Mgd2l0aCBCcmlzYS5cIlxuICAgICAgfSwgdW5kZWZpbmVkLCBmYWxzZSwgdW5kZWZpbmVkLCB0aGlzKSwganN4REVWKFwicFwiLCB7XG4gICAgICAgIGNoaWxkcmVuOiBbXCJFZGl0IFwiLCBqc3hERVYoXCJjb2RlXCIsIHtcbiAgICAgICAgICBjaGlsZHJlbjogXCJzcmMvcGFnZXMvaW5kZXgudHN4XCJcbiAgICAgICAgfSwgdW5kZWZpbmVkLCBmYWxzZSwgdW5kZWZpbmVkLCB0aGlzKSwgXCIuXCJdXG4gICAgICB9LCB1bmRlZmluZWQsIHRydWUsIHVuZGVmaW5lZCwgdGhpcyldXG4gICAgfSwgdW5kZWZpbmVkLCB0cnVlLCB1bmRlZmluZWQsIHRoaXMpLCBqc3hERVYoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwiZmxleCBmbGV4LXdyYXAgZ2FwLTQgcHktOFwiLFxuICAgICAgY2hpbGRyZW46IHBva2Vtb25zLm1hcChwb2tlbW9uID0+IGpzeERFVihQb2tlbW9uQ2FyZCwge1xuICAgICAgICBwb2tlbW9uXG4gICAgICB9LCB1bmRlZmluZWQsIGZhbHNlLCB1bmRlZmluZWQsIHRoaXMpKVxuICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UsIHVuZGVmaW5lZCwgdGhpcyldXG4gIH0sIHVuZGVmaW5lZCwgdHJ1ZSwgdW5kZWZpbmVkLCB0aGlzKTtcbn1cbmltcG9ydCB7IGpzeCwganN4cywganN4REVWLCBGcmFnbWVudCB9IGZyb20gJ2JyaXNhL2pzeC1ydW50aW1lJztcbiIKICBdLAogICJtYXBwaW5ncyI6ICI7O0FBQ0EsU0FBUyxDQUFDLENBQUMsR0FBRTtBQUFDLFNBQU8sRUFBRSxNQUFLLENBQUM7QUFBQTtBQUFFLFNBQVMsQ0FBQyxDQUFDLEtBQUcsVUFBUyxNQUFLLEtBQUcsR0FBRTtBQUFDLE1BQUksSUFBRTtBQUFFLE1BQUcsTUFBTSxRQUFRLENBQUMsTUFBSSxFQUFFLENBQUM7QUFBRSxRQUFFLEVBQUUsSUFBSSxDQUFDLE1BQUksSUFBSSxLQUFHLElBQUUsRUFBRSxFQUFDLFVBQVMsRUFBQyxDQUFDLENBQUM7QUFBRSxTQUFPLE9BQU8sT0FBTyxDQUFDLEdBQUUsS0FBSSxHQUFFLEtBQUksRUFBQyxHQUFFLENBQUMsR0FBRSxHQUFFLElBQUcsS0FBRSxDQUFDO0FBQUE7QUFBRSxTQUFTLENBQUMsQ0FBQyxHQUFFO0FBQUMsU0FBTyxNQUFNLFFBQVEsQ0FBQyxPQUFLLEtBQUssTUFBSSxFQUFFLENBQUM7QUFBQTtBQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUU7QUFBQyxTQUFPLElBQUksT0FBSyxpQkFBZSxFQUFFLElBQUksU0FBTztBQUFBO0FBQVMsSUFBSSxJQUFFLE9BQU8sSUFBSSxPQUFPOzs7QUNEaFYsU0FBd0IsV0FBVyxHQUFFLFdBQVU7QUFDN0MsU0FBTyxFQUFPLEtBQUs7QUFBQSxJQUNqQixNQUFNLFlBQVksUUFBUTtBQUFBLElBQzFCLE9BQU87QUFBQSxJQUNQLFVBQVUsRUFBTyxXQUFXO0FBQUEsTUFDMUIsT0FBTztBQUFBLE1BQ1AsVUFBVSxDQUFDLEVBQU8sT0FBTztBQUFBLFFBQ3ZCLE9BQU87QUFBQSxRQUNQLFVBQVUsRUFBTyxPQUFPO0FBQUEsVUFDdEIsS0FBSyxvQkFBb0IsUUFBUTtBQUFBLFVBQ2pDLEtBQUssUUFBUTtBQUFBLFVBQ2IsT0FBTztBQUFBLFFBQ1QsR0FBRyxXQUFXLE9BQU8sV0FBVyxJQUFJO0FBQUEsTUFDdEMsR0FBRyxXQUFXLE9BQU8sV0FBVyxJQUFJLEdBQUcsRUFBTyxPQUFPO0FBQUEsUUFDbkQsT0FBTztBQUFBLFFBQ1AsVUFBVSxDQUFDLEVBQU8sTUFBTTtBQUFBLFVBQ3RCLE9BQU87QUFBQSxVQUNQLFVBQVUsUUFBUTtBQUFBLFFBQ3BCLEdBQUcsV0FBVyxPQUFPLFdBQVcsSUFBSSxHQUFHLEVBQU8sS0FBSztBQUFBLFVBQ2pELE9BQU87QUFBQSxVQUNQLFVBQVUsUUFBUTtBQUFBLFFBQ3BCLEdBQUcsV0FBVyxPQUFPLFdBQVcsSUFBSSxDQUFDO0FBQUEsTUFDdkMsR0FBRyxXQUFXLE1BQU0sV0FBVyxJQUFJLENBQUM7QUFBQSxJQUN0QyxHQUFHLFdBQVcsTUFBTSxXQUFXLElBQUk7QUFBQSxFQUNyQyxHQUFHLFdBQVcsT0FBTyxXQUFXLElBQUk7QUFBQTs7O0FDSi9CLElBQU0sV0FBc0I7QUFBQSxFQUNqQztBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sYUFDRTtBQUFBLElBQ0YsT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQUEsSUFDQSxVQUFVO0FBQUEsRUFDWjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLGFBQ0U7QUFBQSxJQUNGLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixhQUNFO0FBQUEsSUFDRixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixTQUFTO0FBQUEsTUFDUDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sYUFDRTtBQUFBLElBQ0YsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOzs7QUMvRkEsU0FBd0IsUUFBUSxHQUFHO0FBQ2pDLFNBQU8sRUFBTyxHQUFVO0FBQUEsSUFDdEIsVUFBVSxDQUFDLEVBQU8sT0FBTztBQUFBLE1BQ3ZCLFVBQVUsQ0FBQyxFQUFPLE1BQU07QUFBQSxRQUN0QixPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsTUFDWixHQUFHLFdBQVcsT0FBTyxXQUFXLElBQUksR0FBRyxFQUFPLE1BQU07QUFBQSxRQUNsRCxPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsTUFDWixHQUFHLFdBQVcsT0FBTyxXQUFXLElBQUksR0FBRyxFQUFPLEtBQUs7QUFBQSxRQUNqRCxVQUFVLENBQUMsU0FBUyxFQUFPLFFBQVE7QUFBQSxVQUNqQyxVQUFVO0FBQUEsUUFDWixHQUFHLFdBQVcsT0FBTyxXQUFXLElBQUksR0FBRyxHQUFHO0FBQUEsTUFDNUMsR0FBRyxXQUFXLE1BQU0sV0FBVyxJQUFJLENBQUM7QUFBQSxJQUN0QyxHQUFHLFdBQVcsTUFBTSxXQUFXLElBQUksR0FBRyxFQUFPLE9BQU87QUFBQSxNQUNsRCxPQUFPO0FBQUEsTUFDUCxVQUFVLFNBQVMsSUFBSSxhQUFXLEVBQU8sYUFBYTtBQUFBLFFBQ3BEO0FBQUEsTUFDRixHQUFHLFdBQVcsT0FBTyxXQUFXLElBQUksQ0FBQztBQUFBLElBQ3ZDLEdBQUcsV0FBVyxPQUFPLFdBQVcsSUFBSSxDQUFDO0FBQUEsRUFDdkMsR0FBRyxXQUFXLE1BQU0sV0FBVyxJQUFJO0FBQUE7IiwKICAiZGVidWdJZCI6ICJBQ0Q5MDA0NDQxQjE1QjFFNjQ3NTZFMjE2NDc1NkUyMSIsCiAgIm5hbWVzIjogW10KfQ==
