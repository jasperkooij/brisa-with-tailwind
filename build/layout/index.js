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

// src/layout/index.tsx
function Layout({ children }) {
  return i("html", {
    lang: "en",
    children: [i("head", {
      children: [i("meta", {
        charSet: "UTF-8"
      }, undefined, false, undefined, this), i("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }, undefined, false, undefined, this), i("meta", {
        name: "viewport",
        content: "width=device-width"
      }, undefined, false, undefined, this), i("link", {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg"
      }, undefined, false, undefined, this), i("title", {
        children: "Brisa - Tailwind CSS"
      }, undefined, false, undefined, this), i("meta", {
        name: "description",
        content: "Description of Brisa - Tailwind CSS"
      }, undefined, false, undefined, this)]
    }, undefined, true, undefined, this), i("body", {
      class: "bg-gradient-to-tl via-transparent from-gray-500/5",
      children: i("main", {
        class: "relative max-w-6xl min-h-screen mx-auto py-6 lg:pt-10 px-4 pb-20",
        children
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this)]
  }, undefined, true, undefined, this);
}
export {
  Layout as default
};

//# debugId=73DA6EA99C84F52A64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2JyaXNhL2pzeC1ydW50aW1lL2luZGV4LmpzIiwgIi4uL3NyYy9sYXlvdXQvaW5kZXgudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgIi8vIEBidW5cbmZ1bmN0aW9uIFMocil7cmV0dXJuIGkobnVsbCxyKX1mdW5jdGlvbiBpKHIse2NoaWxkcmVuOmUsLi4ub30scyl7bGV0IGE9ZTtpZihBcnJheS5pc0FycmF5KGUpJiYhbChlKSlhPWUubWFwKCh0KT0+dD8uW25dP3Q6Uyh7Y2hpbGRyZW46dH0pKTtyZXR1cm4gT2JqZWN0LmFzc2lnbihbcix7Li4ubyxrZXk6c30sYV0se1tuXTohMH0pfWZ1bmN0aW9uIGwocil7cmV0dXJuIEFycmF5LmlzQXJyYXkocikmJigobiBpbiByKXx8bShyKSl9ZnVuY3Rpb24gbShyKXtyZXR1cm4gcj8uWzBdPT09XCJIVE1MXCImJnR5cGVvZiByWzFdPy5odG1sPT09XCJzdHJpbmdcIn12YXIgbj1TeW1ib2wuZm9yKFwiaXNKU1hcIik7ZXhwb3J0e2kgYXMganN4cyxpIGFzIGpzeERFVixpIGFzIGpzeCxtIGFzIGlzRGFuZ2VySFRNTCxsIGFzIGlzQXJyYXdPZkpTWENvbnRlbnQsUyBhcyBGcmFnbWVudH07XG4iLAogICAgImltcG9ydCBcIi4vbGF5b3V0LmNzc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHtjaGlsZHJlbn0pIHtcbiAgcmV0dXJuIGpzeERFVihcImh0bWxcIiwge1xuICAgIGxhbmc6IFwiZW5cIixcbiAgICBjaGlsZHJlbjogW2pzeERFVihcImhlYWRcIiwge1xuICAgICAgY2hpbGRyZW46IFtqc3hERVYoXCJtZXRhXCIsIHtcbiAgICAgICAgY2hhclNldDogXCJVVEYtOFwiXG4gICAgICB9LCB1bmRlZmluZWQsIGZhbHNlLCB1bmRlZmluZWQsIHRoaXMpLCBqc3hERVYoXCJtZXRhXCIsIHtcbiAgICAgICAgbmFtZTogXCJ0d2l0dGVyOmNhcmRcIixcbiAgICAgICAgY29udGVudDogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCJcbiAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UsIHVuZGVmaW5lZCwgdGhpcyksIGpzeERFVihcIm1ldGFcIiwge1xuICAgICAgICBuYW1lOiBcInZpZXdwb3J0XCIsXG4gICAgICAgIGNvbnRlbnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoXCJcbiAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UsIHVuZGVmaW5lZCwgdGhpcyksIGpzeERFVihcImxpbmtcIiwge1xuICAgICAgICByZWw6IFwiaWNvblwiLFxuICAgICAgICB0eXBlOiBcImltYWdlL3N2Zyt4bWxcIixcbiAgICAgICAgaHJlZjogXCIvZmF2aWNvbi5zdmdcIlxuICAgICAgfSwgdW5kZWZpbmVkLCBmYWxzZSwgdW5kZWZpbmVkLCB0aGlzKSwganN4REVWKFwidGl0bGVcIiwge1xuICAgICAgICBjaGlsZHJlbjogXCJCcmlzYSAtIFRhaWx3aW5kIENTU1wiXG4gICAgICB9LCB1bmRlZmluZWQsIGZhbHNlLCB1bmRlZmluZWQsIHRoaXMpLCBqc3hERVYoXCJtZXRhXCIsIHtcbiAgICAgICAgbmFtZTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICBjb250ZW50OiBcIkRlc2NyaXB0aW9uIG9mIEJyaXNhIC0gVGFpbHdpbmQgQ1NTXCJcbiAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UsIHVuZGVmaW5lZCwgdGhpcyldXG4gICAgfSwgdW5kZWZpbmVkLCB0cnVlLCB1bmRlZmluZWQsIHRoaXMpLCBqc3hERVYoXCJib2R5XCIsIHtcbiAgICAgIGNsYXNzOiBcImJnLWdyYWRpZW50LXRvLXRsIHZpYS10cmFuc3BhcmVudCBmcm9tLWdyYXktNTAwLzVcIixcbiAgICAgIGNoaWxkcmVuOiBqc3hERVYoXCJtYWluXCIsIHtcbiAgICAgICAgY2xhc3M6IFwicmVsYXRpdmUgbWF4LXctNnhsIG1pbi1oLXNjcmVlbiBteC1hdXRvIHB5LTYgbGc6cHQtMTAgcHgtNCBwYi0yMFwiLFxuICAgICAgICBjaGlsZHJlblxuICAgICAgfSwgdW5kZWZpbmVkLCBmYWxzZSwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UsIHVuZGVmaW5lZCwgdGhpcyldXG4gIH0sIHVuZGVmaW5lZCwgdHJ1ZSwgdW5kZWZpbmVkLCB0aGlzKTtcbn1cbmltcG9ydCB7IGpzeCwganN4cywganN4REVWLCBGcmFnbWVudCB9IGZyb20gJ2JyaXNhL2pzeC1ydW50aW1lJztcbiIKICBdLAogICJtYXBwaW5ncyI6ICI7O0FBQ0EsU0FBUyxDQUFDLENBQUMsR0FBRTtBQUFDLFNBQU8sRUFBRSxNQUFLLENBQUM7QUFBQTtBQUFFLFNBQVMsQ0FBQyxDQUFDLEtBQUcsVUFBUyxNQUFLLEtBQUcsR0FBRTtBQUFDLE1BQUksSUFBRTtBQUFFLE1BQUcsTUFBTSxRQUFRLENBQUMsTUFBSSxFQUFFLENBQUM7QUFBRSxRQUFFLEVBQUUsSUFBSSxDQUFDLE1BQUksSUFBSSxLQUFHLElBQUUsRUFBRSxFQUFDLFVBQVMsRUFBQyxDQUFDLENBQUM7QUFBRSxTQUFPLE9BQU8sT0FBTyxDQUFDLEdBQUUsS0FBSSxHQUFFLEtBQUksRUFBQyxHQUFFLENBQUMsR0FBRSxHQUFFLElBQUcsS0FBRSxDQUFDO0FBQUE7QUFBRSxTQUFTLENBQUMsQ0FBQyxHQUFFO0FBQUMsU0FBTyxNQUFNLFFBQVEsQ0FBQyxPQUFLLEtBQUssTUFBSSxFQUFFLENBQUM7QUFBQTtBQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUU7QUFBQyxTQUFPLElBQUksT0FBSyxpQkFBZSxFQUFFLElBQUksU0FBTztBQUFBO0FBQVMsSUFBSSxJQUFFLE9BQU8sSUFBSSxPQUFPOzs7QUNBaFYsU0FBd0IsTUFBTSxHQUFFLFlBQVc7QUFDekMsU0FBTyxFQUFPLFFBQVE7QUFBQSxJQUNwQixNQUFNO0FBQUEsSUFDTixVQUFVLENBQUMsRUFBTyxRQUFRO0FBQUEsTUFDeEIsVUFBVSxDQUFDLEVBQU8sUUFBUTtBQUFBLFFBQ3hCLFNBQVM7QUFBQSxNQUNYLEdBQUcsV0FBVyxPQUFPLFdBQVcsSUFBSSxHQUFHLEVBQU8sUUFBUTtBQUFBLFFBQ3BELE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxNQUNYLEdBQUcsV0FBVyxPQUFPLFdBQVcsSUFBSSxHQUFHLEVBQU8sUUFBUTtBQUFBLFFBQ3BELE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxNQUNYLEdBQUcsV0FBVyxPQUFPLFdBQVcsSUFBSSxHQUFHLEVBQU8sUUFBUTtBQUFBLFFBQ3BELEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSLEdBQUcsV0FBVyxPQUFPLFdBQVcsSUFBSSxHQUFHLEVBQU8sU0FBUztBQUFBLFFBQ3JELFVBQVU7QUFBQSxNQUNaLEdBQUcsV0FBVyxPQUFPLFdBQVcsSUFBSSxHQUFHLEVBQU8sUUFBUTtBQUFBLFFBQ3BELE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxNQUNYLEdBQUcsV0FBVyxPQUFPLFdBQVcsSUFBSSxDQUFDO0FBQUEsSUFDdkMsR0FBRyxXQUFXLE1BQU0sV0FBVyxJQUFJLEdBQUcsRUFBTyxRQUFRO0FBQUEsTUFDbkQsT0FBTztBQUFBLE1BQ1AsVUFBVSxFQUFPLFFBQVE7QUFBQSxRQUN2QixPQUFPO0FBQUEsUUFDUDtBQUFBLE1BQ0YsR0FBRyxXQUFXLE9BQU8sV0FBVyxJQUFJO0FBQUEsSUFDdEMsR0FBRyxXQUFXLE9BQU8sV0FBVyxJQUFJLENBQUM7QUFBQSxFQUN2QyxHQUFHLFdBQVcsTUFBTSxXQUFXLElBQUk7QUFBQTsiLAogICJkZWJ1Z0lkIjogIjczREE2RUE5OUM4NEY1MkE2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
