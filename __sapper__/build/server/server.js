'use strict';

var sirv = require('sirv');
var polka = require('polka');
var compression = require('compression');
var fs = require('fs');
var path = require('path');
var Stream = require('stream');
var http = require('http');
var Url = require('url');
var https = require('https');
var zlib = require('zlib');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var sirv__default = /*#__PURE__*/_interopDefaultLegacy(sirv);
var polka__default = /*#__PURE__*/_interopDefaultLegacy(polka);
var compression__default = /*#__PURE__*/_interopDefaultLegacy(compression);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var Stream__default = /*#__PURE__*/_interopDefaultLegacy(Stream);
var http__default = /*#__PURE__*/_interopDefaultLegacy(http);
var Url__default = /*#__PURE__*/_interopDefaultLegacy(Url);
var https__default = /*#__PURE__*/_interopDefaultLegacy(https);
var zlib__default = /*#__PURE__*/_interopDefaultLegacy(zlib);

// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'What is Sapper?',
		slug: 'what-is-sapper',
		html: `
			<p>First, you have to know what <a href='https://svelte.dev'>Svelte</a> is. Svelte is a UI framework with a bold new idea: rather than providing a library that you write code with (like React or Vue, for example), it's a compiler that turns your components into highly optimized vanilla JavaScript. If you haven't already read the <a href='https://svelte.dev/blog/frameworks-without-the-framework'>introductory blog post</a>, you should!</p>

			<p>Sapper is a Next.js-style framework (<a href='blog/how-is-sapper-different-from-next'>more on that here</a>) built around Svelte. It makes it embarrassingly easy to create extremely high performance web apps. Out of the box, you get:</p>

			<ul>
				<li>Code-splitting, dynamic imports and hot module replacement, powered by webpack</li>
				<li>Server-side rendering (SSR) with client-side hydration</li>
				<li>Service worker for offline support, and all the PWA bells and whistles</li>
				<li>The nicest development experience you've ever had, or your money back</li>
			</ul>

			<p>It's implemented as Express middleware. Everything is set up and waiting for you to get started, but you keep complete control over the server, service worker, webpack config and everything else, so it's as flexible as you need it to be.</p>
		`
	},

	{
		title: 'How to use Sapper',
		slug: 'how-to-use-sapper',
		html: `
			<h2>Step one</h2>
			<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

			<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
			cd my-app
			npm install # or yarn!
			npm run dev
			</code></pre>

			<h2>Step two</h2>
			<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

			<h2>Step three</h2>
			<p>...</p>

			<h2>Step four</h2>
			<p>Resist overdone joke formats.</p>
		`
	},

	{
		title: 'Why the name?',
		slug: 'why-the-name',
		html: `
			<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>

			<p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
		`
	},

	{
		title: 'How is Sapper different from Next.js?',
		slug: 'how-is-sapper-different-from-next',
		html: `
			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://vercel.com/'>Vercel</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

			<ul>
				<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
				<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].svelte</code></li>
				<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
				<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
			</ul>
		`
	},

	{
		title: 'How can I get involved?',
		slug: 'how-can-i-get-involved',
		html: `
			<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		slug: post.slug
	};
}));

function get$1(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}

var route_0 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	get: get$1
});

const lookup = new Map();
posts.forEach(post => {
	lookup.set(post.slug, JSON.stringify(post));
});

function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	if (lookup.has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}

var route_1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	get: get
});

function noop$1() { }
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function subscribe(store, ...callbacks) {
    if (store == null) {
        return noop$1;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function null_to_empty(value) {
    return value == null ? '' : value;
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error('Function called outside component initialization');
    return current_component;
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
const escaped$1 = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped$1[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, options = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, options);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

const subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop$1) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop$1) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop$1;
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}

const CONTEXT_KEY = {};

// export const color = writable('hsl(0,100%,41%)')

function createColor() {
	const { subscribe, set, update } = writable('hsl(0,100%,41%)');

	return {
		subscribe,
		change: (e) => update( () => `hsl(${e},100%,41%)`),
		reset: () => set('hsl(0,100%,41%)')
	};
}

const color = createColor();
function createSecondaryColor() {
	const { subscribe, set, update } = writable('hsl(0,100%,28%)');

	return {
		subscribe,
		change: (e) => update( () => `hsl(${e},100%,28%)`),
		reset: () => set('hsl(0,100%,41%)')
	};
}

const secondaryColor = createSecondaryColor();

/* src/components/ColorSlider.svelte generated by Svelte v3.35.0 */

const css$h = {
	code: ":root{--curr-color:var(--main-color)}.slider-container.svelte-jj68sd{display:flex;align-items:center;justify-content:center}input[type=range].svelte-jj68sd{-webkit-appearance:none;width:18.75rem;background-color:none;border:none;padding:0;outline:none;transform:translateX(-50%);background-color:transparent}@media screen and (max-width: 600px){input[type=range].svelte-jj68sd{width:12rem}}input[type=range].svelte-jj68sd::-moz-range-track{background:var(--gradient);cursor:pointer;height:5px}input[type=range].svelte-jj68sd::-webkit-slider-runnable-track{height:5px;background:var(--gradient);border:none;cursor:pointer}input[type=range].svelte-jj68sd::-moz-range-thumb{-webkit-appearance:none;background:var(--main-color);height:2rem;width:1rem}input[type=range].svelte-jj68sd::-webkit-slider-thumb{-webkit-appearance:none;border:none;height:2rem;width:1rem;border-radius:3px;background:var(--main-color);transition:ease .2ms;cursor:pointer;margin-top:-.7rem}input[type=range].svelte-jj68sd::-webkit-slider-thumb:hover{filter:brightness(.8)\n    }input[type=range].svelte-jj68sd:focus{outline:none}input[type=range].svelte-jj68sd:focus::-webkit-slider-runnable-track{background:var(--gradient)}",
	map: "{\"version\":3,\"file\":\"ColorSlider.svelte\",\"sources\":[\"ColorSlider.svelte\"],\"sourcesContent\":[\"<script lang=\\\"ts\\\">import { secondaryColor, color } from '../stores.js';\\nlet colorValue = \\\"0\\\";\\nfunction handleChange(e) {\\n    let target = e.target;\\n    let value = target.value;\\n    color.change(value);\\n    secondaryColor.change(value);\\n}\\nconst getGradient = () => {\\n    let allColorsGradient = \\\"linear-gradient(to right, hsl(0,100%,41%),\\\";\\n    for (let i = 1; i < 360; i++) {\\n        allColorsGradient += `hsl(${i},100%,41%),`;\\n    }\\n    allColorsGradient += \\\"hsl(360,100%,41%))\\\";\\n    return allColorsGradient;\\n};\\nlet gradient = getGradient();\\n</script>\\n\\n<div class=\\\"slider-container\\\" style={`--main-color: ${$color};--gradient: ${gradient}`}>\\n    <input\\n        type=\\\"range\\\"\\n        name=\\\"colorSlider\\\"\\n        start=\\\"0\\\"\\n        min=\\\"0\\\"\\n        max=\\\"360\\\"\\n        id=\\\"colorSlider\\\"\\n        on:change={(e) => handleChange(e)}\\n        value={colorValue}\\n    />\\n</div>\\n\\n<style>\\n\\n    :global(:root){\\n        --curr-color: var(--main-color);\\n    }\\n\\n    .slider-container {\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n    }\\n    input[type=range]{\\n        -webkit-appearance: none;\\n        width: 18.75rem;\\n        background-color: none;\\n        border: none;\\n        padding: 0;\\n        outline: none;\\n        transform: translateX(-50%);\\n        background-color: transparent;\\n    }\\n    @media screen and (max-width: 600px){\\n        input[type=range]{\\n        width: 12rem;\\n    }\\n        /* input[type=range]::-webkit-slider-thumb {\\n            height: 1rem;\\n            width: 1rem;\\n        } */\\n    }\\n\\n    input[type=range]::-moz-range-track {\\n        background: var(--gradient);\\n        cursor: pointer;\\n        height: 5px;\\n    }\\n    input[type=range]::-webkit-slider-runnable-track{\\n        height: 5px;\\n        background: var(--gradient);\\n        border: none;\\n        cursor: pointer;\\n    }\\n    input[type=range]::-moz-range-thumb{\\n        -webkit-appearance: none;\\n        background: var(--main-color);\\n        height: 2rem;\\n        width: 1rem;\\n\\n    }\\n\\n    input[type=range]::-webkit-slider-thumb {\\n        -webkit-appearance: none;\\n        border: none;\\n        height: 2rem;\\n        width: 1rem;\\n        border-radius: 3px;\\n        background: var(--main-color);\\n        transition: ease .2ms;\\n        cursor: pointer;\\n\\n        margin-top: -.7rem;\\n    }\\n    input[type=range]::-webkit-slider-thumb:hover{\\n        filter: brightness(.8)\\n    }\\n    input[type=range]:focus {\\n        outline: none;\\n    }\\n\\n    input[type=range]:focus::-webkit-slider-runnable-track {\\n        background: var(--gradient);\\n    }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAkCY,KAAK,AAAC,CAAC,AACX,YAAY,CAAE,iBAAiB,AACnC,CAAC,AAED,iBAAiB,cAAC,CAAC,AACf,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,AAC3B,CAAC,AACD,KAAK,CAAC,IAAI,CAAC,KAAK,eAAC,CAAC,AACd,kBAAkB,CAAE,IAAI,CACxB,KAAK,CAAE,QAAQ,CACf,gBAAgB,CAAE,IAAI,CACtB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,gBAAgB,CAAE,WAAW,AACjC,CAAC,AACD,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAC,CAAC,AACjC,KAAK,CAAC,IAAI,CAAC,KAAK,eAAC,CAAC,AAClB,KAAK,CAAE,KAAK,AAChB,CAAC,AAKD,CAAC,AAED,KAAK,CAAC,IAAI,CAAC,KAAK,eAAC,kBAAkB,AAAC,CAAC,AACjC,UAAU,CAAE,IAAI,UAAU,CAAC,CAC3B,MAAM,CAAE,OAAO,CACf,MAAM,CAAE,GAAG,AACf,CAAC,AACD,KAAK,CAAC,IAAI,CAAC,KAAK,eAAC,+BAA+B,CAAC,AAC7C,MAAM,CAAE,GAAG,CACX,UAAU,CAAE,IAAI,UAAU,CAAC,CAC3B,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,OAAO,AACnB,CAAC,AACD,KAAK,CAAC,IAAI,CAAC,KAAK,eAAC,kBAAkB,CAAC,AAChC,kBAAkB,CAAE,IAAI,CACxB,UAAU,CAAE,IAAI,YAAY,CAAC,CAC7B,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,AAEf,CAAC,AAED,KAAK,CAAC,IAAI,CAAC,KAAK,eAAC,sBAAsB,AAAC,CAAC,AACrC,kBAAkB,CAAE,IAAI,CACxB,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,IAAI,YAAY,CAAC,CAC7B,UAAU,CAAE,IAAI,CAAC,IAAI,CACrB,MAAM,CAAE,OAAO,CAEf,UAAU,CAAE,MAAM,AACtB,CAAC,AACD,KAAK,CAAC,IAAI,CAAC,KAAK,eAAC,sBAAsB,MAAM,CAAC,AAC1C,MAAM,CAAE,WAAW,EAAE,CAAC;IAC1B,CAAC,AACD,KAAK,CAAC,IAAI,CAAC,KAAK,eAAC,MAAM,AAAC,CAAC,AACrB,OAAO,CAAE,IAAI,AACjB,CAAC,AAED,KAAK,CAAC,IAAI,CAAC,KAAK,eAAC,MAAM,+BAA+B,AAAC,CAAC,AACpD,UAAU,CAAE,IAAI,UAAU,CAAC,AAC/B,CAAC\"}"
};

let colorValue = "0";

const ColorSlider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $color, $$unsubscribe_color;
	$$unsubscribe_color = subscribe(color, value => $color = value);

	const getGradient = () => {
		let allColorsGradient = "linear-gradient(to right, hsl(0,100%,41%),";

		for (let i = 1; i < 360; i++) {
			allColorsGradient += `hsl(${i},100%,41%),`;
		}

		allColorsGradient += "hsl(360,100%,41%))";
		return allColorsGradient;
	};

	let gradient = getGradient();
	$$result.css.add(css$h);
	$$unsubscribe_color();

	return `<div class="${"slider-container svelte-jj68sd"}"${add_attribute("style", `--main-color: ${$color};--gradient: ${gradient}`, 0)}><input type="${"range"}" name="${"colorSlider"}" start="${"0"}" min="${"0"}" max="${"360"}" id="${"colorSlider"}"${add_attribute("value", colorValue, 0)} class="${"svelte-jj68sd"}">
</div>`;
});

/* src/components/MainMenu.svelte generated by Svelte v3.35.0 */

const css$g = {
	code: ".main-menu-container.svelte-9nccxw.svelte-9nccxw.svelte-9nccxw{overflow:hidden;position:absolute;top:0;left:0;width:100vw;height:100vh;background-color:var(--dark-bg-color);display:grid;grid-template-columns:repeat(12, 1fr);grid-template-rows:repeat(8, 1fr);z-index:200}.slider.svelte-9nccxw.svelte-9nccxw.svelte-9nccxw{display:flex;align-items:center;justify-content:start;background-color:var(--dark-bg-color);margin-left:50%;margin-top:2.8rem;position:absolute}.menu-option-container.svelte-9nccxw.svelte-9nccxw.svelte-9nccxw{text-align:right;grid-row-start:auto;grid-row-end:9;grid-column-end:13;padding:2rem;width:max-content}.menu-option.svelte-9nccxw.svelte-9nccxw.svelte-9nccxw{padding:1rem}.menu-item.svelte-9nccxw.svelte-9nccxw.svelte-9nccxw{font-size:9rem;font-weight:900;position:relative;color:var(--white);line-height:6rem;transition:color 0.2s ease}.menu-item.svelte-9nccxw span.svelte-9nccxw.svelte-9nccxw{visibility:hidden;font-size:1rem;position:absolute;top:-2rem}.menu-item.svelte-9nccxw:hover>span.svelte-9nccxw.svelte-9nccxw,.menu-option.svelte-9nccxw .active .menu-item.svelte-9nccxw>span.svelte-9nccxw{visibility:visible}.menu-option.svelte-9nccxw .active .menu-item.svelte-9nccxw.svelte-9nccxw,.menu-option.svelte-9nccxw:hover .menu-item.svelte-9nccxw.svelte-9nccxw{color:var(--custom-color)}.animate__animated.animate__fadeInLeft.svelte-9nccxw.svelte-9nccxw.svelte-9nccxw{animation-delay:0.5s;animation-duration:1s}@media screen and (max-height: 768px){.menu-item.svelte-9nccxw.svelte-9nccxw.svelte-9nccxw{font-size:5rem;line-height:3rem}}@media screen and (max-width: 600px){.menu-item.svelte-9nccxw.svelte-9nccxw.svelte-9nccxw{font-size:3rem;font-weight:900;position:relative;color:var(--white);line-height:2rem}}",
	map: "{\"version\":3,\"file\":\"MainMenu.svelte\",\"sources\":[\"MainMenu.svelte\"],\"sourcesContent\":[\"<script lang=\\\"ts\\\">import ColorSlider from \\\"./ColorSlider.svelte\\\";\\nimport { color } from \\\"../stores.js\\\";\\nexport let segment;\\nexport let isOpen;\\nfunction hanldeClick() {\\n    isOpen = false;\\n}\\n</script>\\n\\n<div\\n  style={isOpen ? \\\"\\\" : \\\"display:none;\\\"}\\n  class=\\\"animate__animated animate__bounceInDown main-menu-container\\\"\\n>\\n  <div class=\\\"slider animate__animated animate__fadeInLeft\\\">\\n    <ColorSlider />\\n  </div>\\n\\n  <nav style={`--custom-color:${$color}`} class=\\\"menu-option-container\\\">\\n    <div\\n      class=\\\"menu-option animate__animated animate__bounce\\\"\\n      on:click={hanldeClick}\\n    >\\n      <a href=\\\".\\\" class={segment === undefined ? \\\"active\\\" : \\\"\\\"}>\\n        <div class=\\\"menu-item\\\">\\n          Home <span style=\\\"color: {$color}\\\">01</span>\\n        </div>\\n      </a>\\n    </div>\\n\\n    <div\\n      class=\\\"menu-option animate__animated animate__bounce\\\"\\n      on:click={hanldeClick}\\n    >\\n      <a href=\\\"about\\\" class={segment === \\\"about\\\" ? \\\"active\\\" : \\\"\\\"}>\\n        <div class=\\\"menu-item\\\">\\n          About <span style=\\\"color: {$color}\\\">02</span>\\n        </div>\\n      </a>\\n    </div>\\n\\n    <div\\n      class=\\\"menu-option animate__animated animate__bounce\\\"\\n      on:click={hanldeClick}\\n    >\\n      <a href=\\\"portfolio\\\" class={segment === \\\"portfolio\\\" ? \\\"active\\\" : \\\"\\\"}>\\n        <div class=\\\"menu-item\\\">\\n          Portfolio <span style=\\\"color: {$color}\\\">03</span>\\n        </div>\\n      </a>\\n    </div>\\n\\n    <div\\n      class=\\\"menu-option animate__animated animate__bounce\\\"\\n      on:click={hanldeClick}\\n    >\\n      <a href=\\\"contact\\\" class={segment === \\\"contact\\\" ? \\\"active\\\" : \\\"\\\"}>\\n        <div class=\\\"menu-item\\\">\\n          Contact <span style=\\\"color: {$color}\\\">04</span>\\n        </div>\\n      </a>\\n    </div>\\n  </nav>\\n</div>\\n\\n<style>\\n  .main-menu-container {\\n    overflow: hidden;\\n    position: absolute;\\n\\n    top: 0;\\n    left: 0;\\n    width: 100vw;\\n    height: 100vh;\\n\\n    background-color: var(--dark-bg-color);\\n\\n    display: grid;\\n    grid-template-columns: repeat(12, 1fr);\\n    grid-template-rows: repeat(8, 1fr);\\n\\n    z-index: 200;\\n  }\\n\\n  .slider {\\n    display: flex;\\n    align-items: center;\\n    justify-content: start;\\n    background-color: var(--dark-bg-color);\\n    margin-left: 50%;\\n    margin-top: 2.8rem;\\n    position: absolute;\\n  }\\n\\n  .menu-option-container {\\n    text-align: right;\\n    grid-row-start: auto;\\n    grid-row-end: 9;\\n    grid-column-end: 13;\\n    padding: 2rem;\\n    width: max-content;\\n  }\\n\\n  .menu-option {\\n    padding: 1rem;\\n  }\\n\\n  .menu-item {\\n    font-size: 9rem;\\n    font-weight: 900;\\n    position: relative;\\n    color: var(--white);\\n    line-height: 6rem;\\n    transition: color 0.2s ease;\\n  }\\n  .menu-item span {\\n    visibility: hidden;\\n    font-size: 1rem;\\n    position: absolute;\\n    top: -2rem;\\n  }\\n  .menu-item:hover > span,\\n  .menu-option .active .menu-item > span {\\n    visibility: visible;\\n  }\\n  .menu-option .active .menu-item,\\n  .menu-option:hover .menu-item {\\n    color: var(--custom-color);\\n  }\\n  .animate__animated.animate__fadeInLeft {\\n    animation-delay: 0.5s;\\n    animation-duration: 1s;\\n  }\\n  @media screen and (max-height: 768px) {\\n    .menu-item {\\n      font-size: 5rem;\\n      line-height: 3rem;\\n    }\\n  }\\n  @media screen and (max-width: 600px) {\\n    .menu-item {\\n      font-size: 3rem;\\n      font-weight: 900;\\n      position: relative;\\n      color: var(--white);\\n      line-height: 2rem;\\n    }\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAiEE,oBAAoB,0CAAC,CAAC,AACpB,QAAQ,CAAE,MAAM,CAChB,QAAQ,CAAE,QAAQ,CAElB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CAEb,gBAAgB,CAAE,IAAI,eAAe,CAAC,CAEtC,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,EAAE,CAAC,CAAC,GAAG,CAAC,CACtC,kBAAkB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CAAC,CAElC,OAAO,CAAE,GAAG,AACd,CAAC,AAED,OAAO,0CAAC,CAAC,AACP,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,KAAK,CACtB,gBAAgB,CAAE,IAAI,eAAe,CAAC,CACtC,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MAAM,CAClB,QAAQ,CAAE,QAAQ,AACpB,CAAC,AAED,sBAAsB,0CAAC,CAAC,AACtB,UAAU,CAAE,KAAK,CACjB,cAAc,CAAE,IAAI,CACpB,YAAY,CAAE,CAAC,CACf,eAAe,CAAE,EAAE,CACnB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,WAAW,AACpB,CAAC,AAED,YAAY,0CAAC,CAAC,AACZ,OAAO,CAAE,IAAI,AACf,CAAC,AAED,UAAU,0CAAC,CAAC,AACV,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,KAAK,CAAC,IAAI,CAAC,IAAI,AAC7B,CAAC,AACD,wBAAU,CAAC,IAAI,4BAAC,CAAC,AACf,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,IAAI,CACf,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,KAAK,AACZ,CAAC,AACD,wBAAU,MAAM,CAAG,gCAAI,CACvB,0BAAY,CAAC,OAAO,CAAC,wBAAU,CAAG,IAAI,cAAC,CAAC,AACtC,UAAU,CAAE,OAAO,AACrB,CAAC,AACD,0BAAY,CAAC,OAAO,CAAC,sCAAU,CAC/B,0BAAY,MAAM,CAAC,UAAU,4BAAC,CAAC,AAC7B,KAAK,CAAE,IAAI,cAAc,CAAC,AAC5B,CAAC,AACD,kBAAkB,oBAAoB,0CAAC,CAAC,AACtC,eAAe,CAAE,IAAI,CACrB,kBAAkB,CAAE,EAAE,AACxB,CAAC,AACD,OAAO,MAAM,CAAC,GAAG,CAAC,aAAa,KAAK,CAAC,AAAC,CAAC,AACrC,UAAU,0CAAC,CAAC,AACV,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,AACnB,CAAC,AACH,CAAC,AACD,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACpC,UAAU,0CAAC,CAAC,AACV,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,WAAW,CAAE,IAAI,AACnB,CAAC,AACH,CAAC\"}"
};

const MainMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $color, $$unsubscribe_color;
	$$unsubscribe_color = subscribe(color, value => $color = value);
	let { segment } = $$props;
	let { isOpen } = $$props;

	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
	if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0) $$bindings.isOpen(isOpen);
	$$result.css.add(css$g);
	$$unsubscribe_color();

	return `<div${add_attribute("style", isOpen ? "" : "display:none;", 0)} class="${"animate__animated animate__bounceInDown main-menu-container svelte-9nccxw"}"><div class="${"slider animate__animated animate__fadeInLeft svelte-9nccxw"}">${validate_component(ColorSlider, "ColorSlider").$$render($$result, {}, {}, {})}</div>

  <nav${add_attribute("style", `--custom-color:${$color}`, 0)} class="${"menu-option-container svelte-9nccxw"}"><div class="${"menu-option animate__animated animate__bounce svelte-9nccxw"}"><a href="${"."}"${add_attribute("class", segment === undefined ? "active" : "", 0)}><div class="${"menu-item svelte-9nccxw"}">Home <span style="${"color: " + escape($color)}" class="${"svelte-9nccxw"}">01</span></div></a></div>

    <div class="${"menu-option animate__animated animate__bounce svelte-9nccxw"}"><a href="${"about"}"${add_attribute("class", segment === "about" ? "active" : "", 0)}><div class="${"menu-item svelte-9nccxw"}">About <span style="${"color: " + escape($color)}" class="${"svelte-9nccxw"}">02</span></div></a></div>

    <div class="${"menu-option animate__animated animate__bounce svelte-9nccxw"}"><a href="${"portfolio"}"${add_attribute("class", segment === "portfolio" ? "active" : "", 0)}><div class="${"menu-item svelte-9nccxw"}">Portfolio <span style="${"color: " + escape($color)}" class="${"svelte-9nccxw"}">03</span></div></a></div>

    <div class="${"menu-option animate__animated animate__bounce svelte-9nccxw"}"><a href="${"contact"}"${add_attribute("class", segment === "contact" ? "active" : "", 0)}><div class="${"menu-item svelte-9nccxw"}">Contact <span style="${"color: " + escape($color)}" class="${"svelte-9nccxw"}">04</span></div></a></div></nav>
</div>`;
});

/* src/components/MenuButton.svelte generated by Svelte v3.35.0 */

const css$f = {
	code: "#nav-icon.svelte-15jd1hu.svelte-15jd1hu{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:0.25s ease-in-out;-moz-transition:0.25s ease-in-out;-o-transition:0.25s ease-in-out;transition:0.2s ease-in-out;cursor:pointer;z-index:300;height:3.5rem;width:3.5rem}#nav-icon.svelte-15jd1hu span.svelte-15jd1hu{display:block;position:absolute;height:0.5rem;width:3.5rem;background:var(--white);border-radius:3px;opacity:1;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:0.25s ease-in-out;-moz-transition:0.25s ease-in-out;-o-transition:0.25s ease-in-out;transition:0.25s ease-in-out}#nav-icon.svelte-15jd1hu span.svelte-15jd1hu:nth-child(1){top:0px;-webkit-transform-origin:left center;-moz-transform-origin:left center;-o-transform-origin:left center;transform-origin:left center}#nav-icon.svelte-15jd1hu span.svelte-15jd1hu:nth-child(2){top:1.125rem;-webkit-transform-origin:left center;-moz-transform-origin:left center;-o-transform-origin:left center;transform-origin:left center}#nav-icon.svelte-15jd1hu span.svelte-15jd1hu:nth-child(3){top:2.25rem;-webkit-transform-origin:left center;-moz-transform-origin:left center;-o-transform-origin:left center;transform-origin:left center}#nav-icon.open.svelte-15jd1hu span.svelte-15jd1hu:nth-child(1){-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);top:-0.18rem;left:.5rem}#nav-icon.open.svelte-15jd1hu span.svelte-15jd1hu:nth-child(2){width:0%;opacity:0}#nav-icon.open.svelte-15jd1hu span.svelte-15jd1hu:nth-child(3){-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg);top:2.43rem;left:.5rem}#nav-icon.svelte-15jd1hu:hover span.svelte-15jd1hu{filter:brightness(.8)}",
	map: "{\"version\":3,\"file\":\"MenuButton.svelte\",\"sources\":[\"MenuButton.svelte\"],\"sourcesContent\":[\"<script lang=\\\"ts\\\">// import Logo from './Logo.Component.svelte';\\n// import { Link } from 'svelte-routing'\\nexport let isOpen = false;\\nimport { color } from '../stores.js';\\nfunction toggleOpen() {\\n    isOpen = !isOpen;\\n}\\n</script>\\n\\n    <div id=\\\"nav-icon\\\" class={isOpen ? \\\"open\\\" : \\\"\\\"} on:click={toggleOpen} >\\n        <span style={isOpen?`background-color: ${$color}`:''}/>\\n        <span style={isOpen?`background-color: ${$color}`:''}/>\\n        <span style={isOpen?`background-color: ${$color}`:''}/>\\n    </div>\\n<style>\\n    #nav-icon {\\n        -webkit-transform: rotate(0deg);\\n        -moz-transform: rotate(0deg);\\n        -o-transform: rotate(0deg);\\n        transform: rotate(0deg);\\n        -webkit-transition: 0.25s ease-in-out;\\n        -moz-transition: 0.25s ease-in-out;\\n        -o-transition: 0.25s ease-in-out;\\n        transition: 0.2s ease-in-out;\\n        cursor: pointer;\\n        z-index: 300;\\n        height: 3.5rem;\\n        width: 3.5rem;\\n    }\\n    #nav-icon span {\\n        display: block;\\n        position: absolute;\\n        height: 0.5rem;\\n        width: 3.5rem;\\n        background: var(--white);\\n        border-radius: 3px;\\n        opacity: 1;\\n        -webkit-transform: rotate(0deg);\\n        -moz-transform: rotate(0deg);\\n        -o-transform: rotate(0deg);\\n        transform: rotate(0deg);\\n        -webkit-transition: 0.25s ease-in-out;\\n        -moz-transition: 0.25s ease-in-out;\\n        -o-transition: 0.25s ease-in-out;\\n        transition: 0.25s ease-in-out;\\n    }\\n    #nav-icon span:nth-child(1) {\\n        top: 0px;\\n        -webkit-transform-origin: left center;\\n        -moz-transform-origin: left center;\\n        -o-transform-origin: left center;\\n        transform-origin: left center;\\n    }\\n    #nav-icon span:nth-child(2) {\\n        top: 1.125rem;\\n        -webkit-transform-origin: left center;\\n        -moz-transform-origin: left center;\\n        -o-transform-origin: left center;\\n        transform-origin: left center;\\n    }\\n    #nav-icon span:nth-child(3) {\\n        top: 2.25rem;\\n        -webkit-transform-origin: left center;\\n        -moz-transform-origin: left center;\\n        -o-transform-origin: left center;\\n        transform-origin: left center;\\n    }\\n    #nav-icon.open span:nth-child(1) {\\n        -webkit-transform: rotate(45deg);\\n        -moz-transform: rotate(45deg);\\n        -o-transform: rotate(45deg);\\n        transform: rotate(45deg);\\n        top: -0.18rem;\\n        left: .5rem;\\n    }\\n    #nav-icon.open span:nth-child(2) {\\n        width: 0%;\\n        opacity: 0;\\n    }\\n    #nav-icon.open span:nth-child(3) {\\n        -webkit-transform: rotate(-45deg);\\n        -moz-transform: rotate(-45deg);\\n        -o-transform: rotate(-45deg);\\n        transform: rotate(-45deg);\\n        top: 2.43rem;\\n        left: .5rem;\\n    }\\n    #nav-icon:hover span{\\n        filter: brightness(.8);\\n    }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAeI,SAAS,8BAAC,CAAC,AACP,iBAAiB,CAAE,OAAO,IAAI,CAAC,CAC/B,cAAc,CAAE,OAAO,IAAI,CAAC,CAC5B,YAAY,CAAE,OAAO,IAAI,CAAC,CAC1B,SAAS,CAAE,OAAO,IAAI,CAAC,CACvB,kBAAkB,CAAE,KAAK,CAAC,WAAW,CACrC,eAAe,CAAE,KAAK,CAAC,WAAW,CAClC,aAAa,CAAE,KAAK,CAAC,WAAW,CAChC,UAAU,CAAE,IAAI,CAAC,WAAW,CAC5B,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,MAAM,CACd,KAAK,CAAE,MAAM,AACjB,CAAC,AACD,wBAAS,CAAC,IAAI,eAAC,CAAC,AACZ,OAAO,CAAE,KAAK,CACd,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,MAAM,CACd,KAAK,CAAE,MAAM,CACb,UAAU,CAAE,IAAI,OAAO,CAAC,CACxB,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,CAAC,CACV,iBAAiB,CAAE,OAAO,IAAI,CAAC,CAC/B,cAAc,CAAE,OAAO,IAAI,CAAC,CAC5B,YAAY,CAAE,OAAO,IAAI,CAAC,CAC1B,SAAS,CAAE,OAAO,IAAI,CAAC,CACvB,kBAAkB,CAAE,KAAK,CAAC,WAAW,CACrC,eAAe,CAAE,KAAK,CAAC,WAAW,CAClC,aAAa,CAAE,KAAK,CAAC,WAAW,CAChC,UAAU,CAAE,KAAK,CAAC,WAAW,AACjC,CAAC,AACD,wBAAS,CAAC,mBAAI,WAAW,CAAC,CAAC,AAAC,CAAC,AACzB,GAAG,CAAE,GAAG,CACR,wBAAwB,CAAE,IAAI,CAAC,MAAM,CACrC,qBAAqB,CAAE,IAAI,CAAC,MAAM,CAClC,mBAAmB,CAAE,IAAI,CAAC,MAAM,CAChC,gBAAgB,CAAE,IAAI,CAAC,MAAM,AACjC,CAAC,AACD,wBAAS,CAAC,mBAAI,WAAW,CAAC,CAAC,AAAC,CAAC,AACzB,GAAG,CAAE,QAAQ,CACb,wBAAwB,CAAE,IAAI,CAAC,MAAM,CACrC,qBAAqB,CAAE,IAAI,CAAC,MAAM,CAClC,mBAAmB,CAAE,IAAI,CAAC,MAAM,CAChC,gBAAgB,CAAE,IAAI,CAAC,MAAM,AACjC,CAAC,AACD,wBAAS,CAAC,mBAAI,WAAW,CAAC,CAAC,AAAC,CAAC,AACzB,GAAG,CAAE,OAAO,CACZ,iBAAiB,OAAO,CAAE,IAAI,CAAC,MAAM,CACrC,qBAAqB,CAAE,IAAI,CAAC,MAAM,CAClC,mBAAmB,CAAE,IAAI,CAAC,MAAM,CAChC,gBAAgB,CAAE,IAAI,CAAC,MAAM,AACjC,CAAC,AACD,SAAS,oBAAK,CAAC,mBAAI,WAAW,CAAC,CAAC,AAAC,CAAC,AAC9B,iBAAiB,CAAE,OAAO,IAAI,CAAC,CAAC,CAChC,cAAc,CAAE,OAAO,KAAK,CAAC,CAC7B,YAAY,CAAE,OAAO,KAAK,CAAC,CAC3B,SAAS,CAAE,OAAO,KAAK,CAAC,CACxB,GAAG,CAAE,QAAQ,CACb,IAAI,CAAE,KAAK,AACf,CAAC,AACD,SAAS,oBAAK,CAAC,mBAAI,WAAW,CAAC,CAAC,AAAC,CAAC,AAC9B,KAAK,CAAE,EAAE,CACT,KAAK,EAAE,CAAE,CAAC,AACd,CAAC,AACD,SAAS,oBAAK,CAAC,mBAAI,WAAW,CAAC,CAAC,AAAC,CAAC,AAC9B,iBAAiB,CAAE,OAAO,MAAM,CAAC,CACjC,cAAc,CAAE,OAAO,MAAM,CAAC,CAC9B,YAAY,CAAE,OAAO,MAAM,CAAC,CAC5B,SAAS,CAAE,OAAO,MAAM,CAAC,CACzB,GAAG,CAAE,OAAO,CACZ,CAAC,GAAG,CAAE,KAAK,AACf,CAAC,AACD,wBAAS,MAAM,CAAC,mBAAI,CAAC,AACjB,MAAM,CAAE,WAAW,EAAE,CAAC,AAC1B,CAAC\"}"
};

const MenuButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $color, $$unsubscribe_color;
	$$unsubscribe_color = subscribe(color, value => $color = value);
	let { isOpen = false } = $$props;

	if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0) $$bindings.isOpen(isOpen);
	$$result.css.add(css$f);
	$$unsubscribe_color();

	return `<div id="${"nav-icon"}" class="${escape(null_to_empty(isOpen ? "open" : "")) + " svelte-15jd1hu"}"><span${add_attribute("style", isOpen ? `background-color: ${$color}` : "", 0)} class="${"svelte-15jd1hu"}"></span>
        <span${add_attribute("style", isOpen ? `background-color: ${$color}` : "", 0)} class="${"svelte-15jd1hu"}"></span>
        <span${add_attribute("style", isOpen ? `background-color: ${$color}` : "", 0)} class="${"svelte-15jd1hu"}"></span>
    </div>`;
});

/* src/components/Logo.svelte generated by Svelte v3.35.0 */

const css$e = {
	code: ".logo.svelte-rsnil1.svelte-rsnil1{height:100%;width:100%}.logo.svelte-rsnil1 svg.svelte-rsnil1{display:flex;align-items:center;justify-content:center;padding:0;width:3rem;transition:filter .2s ease}.logo.svelte-rsnil1 svg.svelte-rsnil1:hover{filter:brightness(.8)}",
	map: "{\"version\":3,\"file\":\"Logo.svelte\",\"sources\":[\"Logo.svelte\"],\"sourcesContent\":[\"<script lang=\\\"ts\\\">import { color } from '../stores.js';\\n</script>\\n\\n<div class=\\\"logo\\\">\\n    <svg viewBox=\\\"0 0 775 807\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n        <path d=\\\"M0 661.973L388.259 0L774.72 661.973L687.981 807C687.981 807 459.861 618.549 170.909 807L296.381 587.822C305.889 571.077 320.847 558.052 338.792 550.891C373.635 537.183 436.243 527.657 519.758 576.611L387.36 344.329L119.877 807H84.9872L0 661.973Z\\\" fill={$color}/>\\n    </svg>\\n</div>\\n\\n<style>\\n    .logo{\\n        height: 100%;\\n        width: 100%;\\n    }\\n    .logo svg{\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n        padding: 0;\\n        width: 3rem;\\n        transition: filter .2s ease;\\n\\n    }\\n    .logo svg:hover{\\n        filter: brightness(.8);\\n    }\\n</style>\"],\"names\":[],\"mappings\":\"AAUI,iCAAK,CAAC,AACF,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,AACf,CAAC,AACD,mBAAK,CAAC,iBAAG,CAAC,AACN,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,OAAO,CAAE,CAAC,CACV,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,MAAM,CAAC,GAAG,CAAC,IAAI,AAE/B,CAAC,AACD,mBAAK,CAAC,iBAAG,MAAM,CAAC,AACZ,MAAM,CAAE,WAAW,EAAE,CAAC,AAC1B,CAAC\"}"
};

const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $color, $$unsubscribe_color;
	$$unsubscribe_color = subscribe(color, value => $color = value);
	$$result.css.add(css$e);
	$$unsubscribe_color();

	return `<div class="${"logo svelte-rsnil1"}"><svg viewBox="${"0 0 775 807"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-rsnil1"}"><path d="${"M0 661.973L388.259 0L774.72 661.973L687.981 807C687.981 807 459.861 618.549 170.909 807L296.381 587.822C305.889 571.077 320.847 558.052 338.792 550.891C373.635 537.183 436.243 527.657 519.758 576.611L387.36 344.329L119.877 807H84.9872L0 661.973Z"}"${add_attribute("fill", $color, 0)}></path></svg>
</div>`;
});

/* src/components/Trace.svelte generated by Svelte v3.35.0 */

const css$d = {
	code: ".trace.svelte-qf2q54.svelte-qf2q54.svelte-qf2q54.svelte-qf2q54{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1rem 0}.trace.svelte-qf2q54>div.svelte-qf2q54.svelte-qf2q54.svelte-qf2q54{width:.3rem;height:100%;background:var(--bg-color);margin:0}.trace.svelte-qf2q54>span.svelte-qf2q54.svelte-qf2q54.svelte-qf2q54{width:100%}.trace.svelte-qf2q54>span.svelte-qf2q54>div.svelte-qf2q54.svelte-qf2q54{width:100%;cursor:pointer}.trace.svelte-qf2q54>span.svelte-qf2q54>div.svelte-qf2q54>svg.svelte-qf2q54{padding:.5rem;width:3.5rem;color:var(--main-color);transition:ease .2s}.trace.svelte-qf2q54>span.svelte-qf2q54>div.svelte-qf2q54:hover>svg.svelte-qf2q54{filter:opacity(.7)}",
	map: "{\"version\":3,\"file\":\"Trace.svelte\",\"sources\":[\"Trace.svelte\"],\"sourcesContent\":[\"<script lang=\\\"ts\\\">import { goto } from '@sapper/app';\\nimport { color } from '../stores';\\nexport let pageNum;\\nfunction goUp() {\\n    switch (pageNum) {\\n        case '01':\\n            break;\\n        case '02':\\n            goto('/');\\n            break;\\n        case '03':\\n            goto('/about');\\n            console.log('03');\\n            break;\\n        case '04':\\n            goto('/portfolio');\\n            break;\\n        default:\\n            break;\\n    }\\n}\\nfunction goDown() {\\n    switch (pageNum) {\\n        case '01':\\n            goto('/about');\\n            break;\\n        case '02':\\n            goto('/portfolio');\\n            break;\\n        case '03':\\n            goto('/contact');\\n            break;\\n        case '04':\\n            break;\\n        default:\\n            break;\\n    }\\n}\\n</script>\\n    \\n    <div style=\\\"--main-color: {$color}\\\" class=\\\"trace\\\">\\n        <div></div>\\n        <span>\\n            <div on:click=\\\"{goUp}\\\">\\n                <svg aria-hidden=\\\"true\\\" focusable=\\\"false\\\" data-prefix=\\\"fas\\\" data-icon=\\\"chevron-up\\\" class=\\\"svg-inline--fa fa-chevron-up fa-w-14\\\" role=\\\"img\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 448 512\\\"><path fill=\\\"currentColor\\\" d=\\\"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z\\\"></path></svg>\\n            </div>\\n            <div on:click=\\\"{goDown}\\\">\\n                <svg aria-hidden=\\\"true\\\" focusable=\\\"false\\\" data-prefix=\\\"fas\\\" data-icon=\\\"chevron-down\\\" class=\\\"svg-inline--fa fa-chevron-down fa-w-14\\\" role=\\\"img\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 448 512\\\"><path fill=\\\"currentColor\\\" d=\\\"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z\\\"></path></svg>\\n            </div>\\n        </span>\\n        <div></div>\\n    </div>\\n    \\n    <style>\\n        .trace{\\n            width: 100%;\\n            height: 100%;\\n            display: flex;\\n            flex-direction: column;\\n            align-items: center;\\n            justify-content: center;\\n            padding: 1rem 0;\\n        }\\n        .trace > div{\\n            width: .3rem;\\n            height: 100%;\\n            background: var(--bg-color);\\n            margin: 0;\\n        }\\n        .trace > span{\\n            width: 100%;\\n        }\\n        .trace > span > div{\\n            width: 100%;\\n            cursor: pointer;\\n        }\\n        .trace > span > div > svg{\\n            padding: .5rem;\\n            width: 3.5rem;\\n            color: var(--main-color);\\n            transition: ease .2s;\\n        }\\n        .trace > span > div:hover > svg{\\n            filter: opacity(.7);\\n        }\\n    </style>\"],\"names\":[],\"mappings\":\"AAsDQ,8DAAM,CAAC,AACH,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,OAAO,CAAE,IAAI,CAAC,CAAC,AACnB,CAAC,AACD,oBAAM,CAAG,6CAAG,CAAC,AACT,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,UAAU,CAAC,CAC3B,MAAM,CAAE,CAAC,AACb,CAAC,AACD,oBAAM,CAAG,8CAAI,CAAC,AACV,KAAK,CAAE,IAAI,AACf,CAAC,AACD,oBAAM,CAAG,kBAAI,CAAG,+BAAG,CAAC,AAChB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,OAAO,AACnB,CAAC,AACD,oBAAM,CAAG,kBAAI,CAAG,iBAAG,CAAG,iBAAG,CAAC,AACtB,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,MAAM,CACb,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,UAAU,CAAE,IAAI,CAAC,GAAG,AACxB,CAAC,AACD,oBAAM,CAAG,kBAAI,CAAG,iBAAG,MAAM,CAAG,iBAAG,CAAC,AAC5B,MAAM,CAAE,QAAQ,EAAE,CAAC,AACvB,CAAC\"}"
};

const Trace = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $color, $$unsubscribe_color;
	$$unsubscribe_color = subscribe(color, value => $color = value);
	let { pageNum } = $$props;

	if ($$props.pageNum === void 0 && $$bindings.pageNum && pageNum !== void 0) $$bindings.pageNum(pageNum);
	$$result.css.add(css$d);
	$$unsubscribe_color();

	return `<div style="${"--main-color: " + escape($color)}" class="${"trace svelte-qf2q54"}"><div class="${"svelte-qf2q54"}"></div>
        <span class="${"svelte-qf2q54"}"><div class="${"svelte-qf2q54"}"><svg aria-hidden="${"true"}" focusable="${"false"}" data-prefix="${"fas"}" data-icon="${"chevron-up"}" class="${"svg-inline--fa fa-chevron-up fa-w-14 svelte-qf2q54"}" role="${"img"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 448 512"}"><path fill="${"currentColor"}" d="${"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"}"></path></svg></div>
            <div class="${"svelte-qf2q54"}"><svg aria-hidden="${"true"}" focusable="${"false"}" data-prefix="${"fas"}" data-icon="${"chevron-down"}" class="${"svg-inline--fa fa-chevron-down fa-w-14 svelte-qf2q54"}" role="${"img"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 448 512"}"><path fill="${"currentColor"}" d="${"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"}"></path></svg></div></span>
        <div class="${"svelte-qf2q54"}"></div>
    </div>`;
});

/* src/components/SideBar.svelte generated by Svelte v3.35.0 */

const css$c = {
	code: ".side-bar-container.svelte-u4tlms.svelte-u4tlms{height:100%;width:100%;display:grid;grid-template-rows:repeat(8, 1fr);grid-template-columns:1fr;align-items:center;justify-content:center}.logo-wrapper.svelte-u4tlms.svelte-u4tlms{display:flex;align-items:center;justify-content:center;grid-row-start:1 ;grid-row-end:2;z-index:300}.social-media.svelte-u4tlms.svelte-u4tlms{grid-row-start:2;grid-row-end:3}.social-media.svelte-u4tlms>a.svelte-u4tlms{color:var(--bg-color)}.social-icon.svelte-u4tlms.svelte-u4tlms{font-size:2.5rem;transition:color 0.2s ease}.social-icon.svelte-u4tlms.svelte-u4tlms:hover{color:var(--main-color)}.trace-container.svelte-u4tlms.svelte-u4tlms{grid-row-start:3;grid-row-end:8;height:100%}.page.svelte-u4tlms.svelte-u4tlms{transform:rotate(-90deg);grid-row-start:8;grid-row-end:9;display:flex;align-items:center;justify-content:center;font-size:1.5rem;user-select:none;-ms-user-select:none;-moz-user-select:none}@media screen and (max-height: 768px){.social-icon.svelte-u4tlms.svelte-u4tlms{font-size:2rem}.page.svelte-u4tlms.svelte-u4tlms{font-size:1rem}}",
	map: "{\"version\":3,\"file\":\"SideBar.svelte\",\"sources\":[\"SideBar.svelte\"],\"sourcesContent\":[\"<script lang=\\\"ts\\\">import Logo from \\\"./Logo.svelte\\\";\\nimport Trace from \\\"./Trace.svelte\\\";\\nimport { color } from '../stores.js';\\nexport let pageNum;\\n</script>\\n\\n<div class=\\\"side-bar-container\\\" style=\\\"--main-color: {$color}\\\">\\n    \\n        <div class=\\\"logo-wrapper\\\">\\n            <a href=\\\".\\\">\\n                <Logo />\\n            </a>\\n        </div>\\n    \\n    <div class='social-media'>\\n        <a target=\\\"_blank\\\" href=\\\"https://www.linkedin.com/in/arthur-matias/\\\">\\n            <div class=\\\"social-icon\\\">\\n                <i class=\\\"fa fa-linkedin-square\\\" aria-hidden=\\\"true\\\"></i>\\n            </div>\\n        </a>\\n        <a target=\\\"_blank\\\" href=\\\"https://www.behance.net/arthurmm18\\\">\\n            <div class=\\\"social-icon\\\">\\n                <i class=\\\"fa fa-behance-square\\\" aria-hidden=\\\"true\\\"></i>\\n            </div>\\n        </a>\\n        <a target=\\\"_blank\\\" href=\\\"https://github.com/Arthur-Matias\\\">\\n            <div class=\\\"social-icon\\\">\\n                <i class=\\\"fa fa-github-square\\\" aria-hidden=\\\"true\\\"></i>\\n            </div>\\n        </a>\\n    </div>\\n    <div class=\\\"trace-container\\\">\\n        <Trace bind:pageNum={pageNum} />\\n    </div>\\n    <div class=\\\"page\\\" >\\n        <p style={`color: ${$color}`}>{pageNum}<b style={`color: var(--white)`}>/04</b></p>\\n    </div>\\n</div>\\n\\n<style>\\n    .side-bar-container{\\n        height: 100%;\\n        width: 100%;\\n        display: grid;\\n        grid-template-rows: repeat(8, 1fr);\\n        grid-template-columns: 1fr;\\n        align-items: center;\\n        justify-content: center;\\n    }\\n    .logo-wrapper{\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n        grid-row-start:1 ;\\n        grid-row-end:2;\\n        z-index: 300;\\n       \\n    }\\n    .social-media{\\n        grid-row-start: 2;\\n        grid-row-end: 3;\\n    }\\n\\n    .social-media > a{\\n        color: var(--bg-color);\\n    }\\n\\n    .social-icon{\\n        font-size: 2.5rem;\\n        transition: color 0.2s ease;\\n    }\\n    .social-icon:hover{\\n        color: var(--main-color);\\n    }\\n    .trace-container{\\n        grid-row-start: 3;\\n        grid-row-end: 8;\\n        height: 100%;\\n    }\\n    .page{\\n        transform: rotate(-90deg);\\n        grid-row-start: 8;\\n        grid-row-end: 9;\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n        font-size: 1.5rem;\\n        user-select: none;\\n        -ms-user-select: none;\\n        -moz-user-select: none;\\n    }\\n\\n    @media screen and (max-height: 768px){\\n        .social-icon{\\n            font-size: 2rem;\\n        }\\n        .page{\\n            font-size: 1rem;\\n        }\\n    }\\n\\n</style>\"],\"names\":[],\"mappings\":\"AAwCI,+CAAmB,CAAC,AAChB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CAAC,CAClC,qBAAqB,CAAE,GAAG,CAC1B,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,AAC3B,CAAC,AACD,yCAAa,CAAC,AACV,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,eAAe,CAAC,CAAC,CACjB,aAAa,CAAC,CACd,OAAO,CAAE,GAAG,AAEhB,CAAC,AACD,yCAAa,CAAC,AACV,cAAc,CAAE,CAAC,CACjB,YAAY,CAAE,CAAC,AACnB,CAAC,AAED,2BAAa,CAAG,eAAC,CAAC,AACd,KAAK,CAAE,IAAI,UAAU,CAAC,AAC1B,CAAC,AAED,wCAAY,CAAC,AACT,SAAS,CAAE,MAAM,CACjB,UAAU,CAAE,KAAK,CAAC,IAAI,CAAC,IAAI,AAC/B,CAAC,AACD,wCAAY,MAAM,CAAC,AACf,KAAK,CAAE,IAAI,YAAY,CAAC,AAC5B,CAAC,AACD,4CAAgB,CAAC,AACb,cAAc,CAAE,CAAC,CACjB,YAAY,CAAE,CAAC,CACf,MAAM,CAAE,IAAI,AAChB,CAAC,AACD,iCAAK,CAAC,AACF,SAAS,CAAE,OAAO,MAAM,CAAC,CACzB,cAAc,CAAE,CAAC,CACjB,YAAY,CAAE,CAAC,CACf,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,IAAI,CACjB,eAAe,CAAE,IAAI,CACrB,gBAAgB,CAAE,IAAI,AAC1B,CAAC,AAED,OAAO,MAAM,CAAC,GAAG,CAAC,aAAa,KAAK,CAAC,CAAC,AAClC,wCAAY,CAAC,AACT,SAAS,CAAE,IAAI,AACnB,CAAC,AACD,iCAAK,CAAC,AACF,SAAS,CAAE,IAAI,AACnB,CAAC,AACL,CAAC\"}"
};

const SideBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $color, $$unsubscribe_color;
	$$unsubscribe_color = subscribe(color, value => $color = value);
	let { pageNum } = $$props;
	if ($$props.pageNum === void 0 && $$bindings.pageNum && pageNum !== void 0) $$bindings.pageNum(pageNum);
	$$result.css.add(css$c);
	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		$$rendered = `<div class="${"side-bar-container svelte-u4tlms"}" style="${"--main-color: " + escape($color)}"><div class="${"logo-wrapper svelte-u4tlms"}"><a href="${"."}">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</a></div>
    
    <div class="${"social-media svelte-u4tlms"}"><a target="${"_blank"}" href="${"https://www.linkedin.com/in/arthur-matias/"}" class="${"svelte-u4tlms"}"><div class="${"social-icon svelte-u4tlms"}"><i class="${"fa fa-linkedin-square"}" aria-hidden="${"true"}"></i></div></a>
        <a target="${"_blank"}" href="${"https://www.behance.net/arthurmm18"}" class="${"svelte-u4tlms"}"><div class="${"social-icon svelte-u4tlms"}"><i class="${"fa fa-behance-square"}" aria-hidden="${"true"}"></i></div></a>
        <a target="${"_blank"}" href="${"https://github.com/Arthur-Matias"}" class="${"svelte-u4tlms"}"><div class="${"social-icon svelte-u4tlms"}"><i class="${"fa fa-github-square"}" aria-hidden="${"true"}"></i></div></a></div>
    <div class="${"trace-container svelte-u4tlms"}">${validate_component(Trace, "Trace").$$render(
			$$result,
			{ pageNum },
			{
				pageNum: $$value => {
					pageNum = $$value;
					$$settled = false;
				}
			},
			{}
		)}</div>
    <div class="${"page svelte-u4tlms"}"><p${add_attribute("style", `color: ${$color}`, 0)}>${escape(pageNum)}<b${add_attribute("style", `color: var(--white)`, 0)}>/04</b></p></div>
</div>`;
	} while (!$$settled);

	$$unsubscribe_color();
	return $$rendered;
});

/* src/routes/_layout.svelte generated by Svelte v3.35.0 */

const css$b = {
	code: ".App.svelte-993jeb{overflow:hidden;height:100vh;width:100vw;text-align:center;font-family:var(--regular-font);color:var(--white);position:relative;top:0;left:0;display:grid;grid-template-columns:repeat(12, 1fr);grid-template-rows:repeat(8, 1fr);background:var(--dark-bg-color)}.content.svelte-993jeb{overflow:hidden;grid-column-start:2;grid-column-end:13;grid-row-start:2;grid-row-end:9}.menu-icon.svelte-993jeb{display:flex;align-items:center;justify-content:center;right:2rem;top:2rem;padding-top:1rem;grid-column-start:12;grid-column-end:13;grid-row-start:1;grid-row-end:2}.side-bar-wrapper.svelte-993jeb{grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:9;display:flex;align-items:center;justify-content:center;height:100%;width:100%}",
	map: "{\"version\":3,\"file\":\"_layout.svelte\",\"sources\":[\"_layout.svelte\"],\"sourcesContent\":[\"<script lang=\\\"ts\\\">import MainMenu from \\\"../components/MainMenu.svelte\\\";\\nimport MenuButton from \\\"../components/MenuButton.svelte\\\";\\nimport SideBar from \\\"../components/SideBar.svelte\\\";\\nexport let isOpen = false;\\nexport let segment;\\n$: pageNum = segment === undefined ? '01' : (segment === 'about' ? '02' : (segment === 'portfolio' ? '03' : '04'));\\n</script>\\n\\t\\n\\n\\t\\t<MainMenu {segment} bind:isOpen/>\\n\\t\\t<main class='App'>\\n\\t\\t\\t<div on:click={()=>console.log(segment)} class=\\\"menu-icon\\\">\\n\\t\\t\\t\\t<MenuButton bind:isOpen={isOpen}/>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\\"side-bar-wrapper\\\">\\n\\t\\t\\t\\t<SideBar bind:pageNum={pageNum} />\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\\"content\\\">\\n\\t\\t\\t\\t<slot></slot>\\n\\t\\t\\t</div>\\n\\t\\t</main>\\n\\t\\n\\t<style>\\n\\t\\t.App {\\n\\t\\t\\toverflow: hidden;\\n\\t\\n\\t\\t\\theight: 100vh;\\n\\t\\t\\twidth: 100vw;\\n\\t\\t\\t\\n\\t\\t\\ttext-align: center;\\n\\t\\t\\tfont-family: var(--regular-font);\\n\\t\\t\\tcolor: var(--white);\\n\\t\\t\\t\\n\\t\\t\\tposition: relative;\\n\\t\\t\\ttop: 0;\\n\\t\\t\\tleft: 0;\\n\\t\\n\\t\\t\\tdisplay: grid;\\n\\t\\n\\t\\t\\tgrid-template-columns: repeat(12, 1fr);\\n\\t\\t\\tgrid-template-rows: repeat(8, 1fr);\\n\\t\\n\\t\\t\\tbackground: var(--dark-bg-color);\\n\\t\\t}\\n\\t\\n\\t\\t.content{\\n\\t\\t\\toverflow: hidden;\\n\\t\\t\\tgrid-column-start: 2;\\n\\t\\t\\tgrid-column-end: 13;\\n\\t\\t\\tgrid-row-start: 2;\\n\\t\\t\\tgrid-row-end: 9;\\n\\t\\t}\\n\\t\\t\\n\\t\\t.menu-icon{\\n\\t\\t\\tdisplay: flex;\\n\\t\\t\\talign-items: center;\\n\\t\\t\\tjustify-content: center;\\n\\t\\t\\tright: 2rem;\\n\\t\\t\\ttop: 2rem;\\n\\t\\t\\tpadding-top: 1rem;\\n\\t\\t\\tgrid-column-start: 12;\\n\\t\\t\\tgrid-column-end: 13;\\n\\t\\t\\tgrid-row-start: 1;\\n\\t\\t\\tgrid-row-end: 2;\\n\\t\\t}\\n\\t\\n\\t\\t.side-bar-wrapper{\\n\\t\\t\\tgrid-column-start: 1;\\n\\t\\t\\tgrid-column-end: 2;\\n\\t\\t\\tgrid-row-start: 1;\\n\\t\\t\\tgrid-row-end: 9;\\n\\t\\t\\tdisplay: flex;\\n\\t\\t\\talign-items: center;\\n\\t\\t\\tjustify-content: center;\\n\\t\\t\\theight: 100%;\\n\\t\\t\\twidth: 100%;\\n\\t\\t}\\n\\t\\t\\n\\t\\n\\t</style>\"],\"names\":[],\"mappings\":\"AAuBE,IAAI,cAAC,CAAC,AACL,QAAQ,CAAE,MAAM,CAEhB,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KAAK,CAEZ,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,IAAI,cAAc,CAAC,CAChC,KAAK,CAAE,IAAI,OAAO,CAAC,CAEnB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CAEP,OAAO,CAAE,IAAI,CAEb,qBAAqB,CAAE,OAAO,EAAE,CAAC,CAAC,GAAG,CAAC,CACtC,kBAAkB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CAAC,CAElC,UAAU,CAAE,IAAI,eAAe,CAAC,AACjC,CAAC,AAED,sBAAQ,CAAC,AACR,QAAQ,CAAE,MAAM,CAChB,iBAAiB,CAAE,CAAC,CACpB,eAAe,CAAE,EAAE,CACnB,cAAc,CAAE,CAAC,CACjB,YAAY,CAAE,CAAC,AAChB,CAAC,AAED,wBAAU,CAAC,AACV,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,KAAK,CAAE,IAAI,CACX,GAAG,CAAE,IAAI,CACT,WAAW,CAAE,IAAI,CACjB,iBAAiB,CAAE,EAAE,CACrB,eAAe,CAAE,EAAE,CACnB,cAAc,CAAE,CAAC,CACjB,YAAY,CAAE,CAAC,AAChB,CAAC,AAED,+BAAiB,CAAC,AACjB,iBAAiB,CAAE,CAAC,CACpB,eAAe,CAAE,CAAC,CAClB,cAAc,CAAE,CAAC,CACjB,YAAY,CAAE,CAAC,CACf,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,AACZ,CAAC\"}"
};

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let pageNum;
	let { isOpen = false } = $$props;
	let { segment } = $$props;
	if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0) $$bindings.isOpen(isOpen);
	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
	$$result.css.add(css$b);
	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		pageNum = segment === undefined
		? "01"
		: segment === "about"
			? "02"
			: segment === "portfolio" ? "03" : "04";

		$$rendered = `${validate_component(MainMenu, "MainMenu").$$render(
			$$result,
			{ segment, isOpen },
			{
				isOpen: $$value => {
					isOpen = $$value;
					$$settled = false;
				}
			},
			{}
		)}
		<main class="${"App svelte-993jeb"}"><div class="${"menu-icon svelte-993jeb"}">${validate_component(MenuButton, "MenuButton").$$render(
			$$result,
			{ isOpen },
			{
				isOpen: $$value => {
					isOpen = $$value;
					$$settled = false;
				}
			},
			{}
		)}</div>
			<div class="${"side-bar-wrapper svelte-993jeb"}">${validate_component(SideBar, "SideBar").$$render(
			$$result,
			{ pageNum },
			{
				pageNum: $$value => {
					pageNum = $$value;
					$$settled = false;
				}
			},
			{}
		)}</div>
			<div class="${"content svelte-993jeb"}">${slots.default ? slots.default({}) : ``}</div>
		</main>`;
	} while (!$$settled);

	return $$rendered;
});

var root_comp = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': Layout
});

/* src/routes/_error.svelte generated by Svelte v3.35.0 */

const css$a = {
	code: "h1.svelte-8od9u6,p.svelte-8od9u6{margin:0 auto}h1.svelte-8od9u6{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-8od9u6{margin:1em auto}@media(min-width: 480px){h1.svelte-8od9u6{font-size:4em}}",
	map: "{\"version\":3,\"file\":\"_error.svelte\",\"sources\":[\"_error.svelte\"],\"sourcesContent\":[\"<script lang=\\\"ts\\\">export let status;\\nexport let error;\\nconst dev = undefined === 'development';\\n</script>\\n\\n<style>\\n\\th1, p {\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\n\\th1 {\\n\\t\\tfont-size: 2.8em;\\n\\t\\tfont-weight: 700;\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t}\\n\\n\\tp {\\n\\t\\tmargin: 1em auto;\\n\\t}\\n\\n\\t@media (min-width: 480px) {\\n\\t\\th1 {\\n\\t\\t\\tfont-size: 4em;\\n\\t\\t}\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>{status}</title>\\n</svelte:head>\\n\\n<h1>{status}</h1>\\n\\n<p>{error.message}</p>\\n\\n{#if dev && error.stack}\\n\\t<pre>{error.stack}</pre>\\n{/if}\\n\"],\"names\":[],\"mappings\":\"AAMC,gBAAE,CAAE,CAAC,cAAC,CAAC,AACN,MAAM,CAAE,CAAC,CAAC,IAAI,AACf,CAAC,AAED,EAAE,cAAC,CAAC,AACH,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC,AAED,CAAC,cAAC,CAAC,AACF,MAAM,CAAE,GAAG,CAAC,IAAI,AACjB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,EAAE,cAAC,CAAC,AACH,SAAS,CAAE,GAAG,AACf,CAAC,AACF,CAAC\"}"
};

const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { status } = $$props;
	let { error } = $$props;
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	$$result.css.add(css$a);

	return `${($$result.head += `${($$result.title = `<title>${escape(status)}</title>`, "")}`, "")}

<h1 class="${"svelte-8od9u6"}">${escape(status)}</h1>

<p class="${"svelte-8od9u6"}">${escape(error.message)}</p>

${``}`;
});

/* src/node_modules/@sapper/internal/App.svelte generated by Svelte v3.35.0 */

const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { stores } = $$props;
	let { error } = $$props;
	let { status } = $$props;
	let { segments } = $$props;
	let { level0 } = $$props;
	let { level1 = null } = $$props;
	let { notify } = $$props;
	afterUpdate(notify);
	setContext(CONTEXT_KEY, stores);
	if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0) $$bindings.segments(segments);
	if ($$props.level0 === void 0 && $$bindings.level0 && level0 !== void 0) $$bindings.level0(level0);
	if ($$props.level1 === void 0 && $$bindings.level1 && level1 !== void 0) $$bindings.level1(level1);
	if ($$props.notify === void 0 && $$bindings.notify && notify !== void 0) $$bindings.notify(notify);

	return `


${validate_component(Layout, "Layout").$$render($$result, Object.assign({ segment: segments[0] }, level0.props), {}, {
		default: () => `${error
		? `${validate_component(Error$1, "Error").$$render($$result, { error, status }, {}, {})}`
		: `${validate_component(level1.component || missing_component, "svelte:component").$$render($$result, Object.assign(level1.props), {}, {})}`}`
	})}`;
});

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter$2(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function page_store(value) {
    const store = writable(value);
    let ready = true;
    function notify() {
        ready = true;
        store.update(val => val);
    }
    function set(new_value) {
        ready = false;
        store.set(new_value);
    }
    function subscribe(run) {
        let old_value;
        return store.subscribe((new_value) => {
            if (old_value === undefined || (ready && new_value !== old_value)) {
                run(old_value = new_value);
            }
        });
    }
    return { notify, set, subscribe };
}

const initial_data = typeof __SAPPER__ !== 'undefined' && __SAPPER__;
const stores = {
    page: page_store({}),
    preloading: writable(null),
    session: writable(initial_data && initial_data.session)
};
stores.session.subscribe((value) => __awaiter$2(void 0, void 0, void 0, function* () {
    return;
}));

/* src/components/Container.svelte generated by Svelte v3.35.0 */

const css$9 = {
	code: ".container.svelte-xer3w1{height:100%;width:100%;background-image:url('/logo.svg');background-repeat:no-repeat;background-size:50rem;background-position:center}@media screen and (max-height: 768px){.container.svelte-xer3w1{background-size:30rem}}@media screen and (max-width: 600px){.container.svelte-xer3w1{background-size:20rem}}",
	map: "{\"version\":3,\"file\":\"Container.svelte\",\"sources\":[\"Container.svelte\"],\"sourcesContent\":[\"<script lang=\\\"ts\\\"></script>\\n\\n<div class=\\\"container\\\">\\n    <slot></slot>\\n</div>\\n\\n<style>\\n    .container{\\n        height: 100%;\\n        width: 100%;\\n        background-image: url('/logo.svg');\\n\\t\\tbackground-repeat: no-repeat;\\n\\t\\tbackground-size: 50rem;\\n        background-position: center;\\n    }\\n    @media screen and (max-height: 768px){\\n        .container{\\n            background-size: 30rem;\\n        }\\n    }\\n    @media screen and (max-width: 600px){\\n        .container{\\n            background-size: 20rem;\\n        }\\n    }\\n</style>\"],\"names\":[],\"mappings\":\"AAOI,wBAAU,CAAC,AACP,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,gBAAgB,CAAE,IAAI,WAAW,CAAC,CACxC,iBAAiB,CAAE,SAAS,CAC5B,eAAe,CAAE,KAAK,CAChB,mBAAmB,CAAE,MAAM,AAC/B,CAAC,AACD,OAAO,MAAM,CAAC,GAAG,CAAC,aAAa,KAAK,CAAC,CAAC,AAClC,wBAAU,CAAC,AACP,eAAe,CAAE,KAAK,AAC1B,CAAC,AACL,CAAC,AACD,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAC,CAAC,AACjC,wBAAU,CAAC,AACP,eAAe,CAAE,KAAK,AAC1B,CAAC,AACL,CAAC\"}"
};

const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$9);

	return `<div class="${"container svelte-xer3w1"}">${slots.default ? slots.default({}) : ``}
</div>`;
});

/* src/routes/index.svelte generated by Svelte v3.35.0 */

const css$8 = {
	code: ".home.svelte-1ungoab.svelte-1ungoab{position:relative;flex:1;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;user-select:none;-ms-user-select:none;-moz-user-select:none}.home.svelte-1ungoab h5.svelte-1ungoab{font-size:1.5rem;text-decoration:underline;font-family:var(--code-font);font-weight:300;letter-spacing:0.3rem;animation-duration:1s;color:var(--main-color)}.home.svelte-1ungoab h1.svelte-1ungoab{font-size:4.5rem;font-weight:900;animation-duration:1s}@media screen and (max-width: 600px){.home.svelte-1ungoab h1.svelte-1ungoab{font-size:2rem}.home.svelte-1ungoab h5.svelte-1ungoab{font-size:1rem}}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script lang=\\\"ts\\\">import { goto } from \\\"@sapper/app\\\";\\nimport Container from \\\"../components/Container.svelte\\\";\\nimport { color } from \\\"../stores.js\\\";\\nfunction handleMouseWheel(e) {\\n    if (e.deltaY > 0) {\\n        goto(\\\"/about\\\", { replace: true });\\n    }\\n}\\n</script>\\n\\n<svelte:head>\\n    <title>Home | Arthur Matias</title>\\n</svelte:head>\\n<Container>\\n    <div class=\\\"home\\\" on:wheel={(e) => handleMouseWheel(e)}>\\n        <h5\\n            class=\\\"animate__animated animate__fadeInLeft\\\"\\n            style=\\\"--main-color: {$color}\\\"\\n        >\\n            Hi, my name is\\n        </h5>\\n        <h1 class=\\\"animate__animated animate__fadeInRight\\\">Arthur Matias</h1>\\n    </div>\\n</Container>\\n\\n<style>\\n    .home {\\n        position: relative;\\n        flex: 1;\\n        height: 100%;\\n        display: flex;\\n        flex-direction: column;\\n\\n        align-items: center;\\n        justify-content: center;\\n\\n        user-select: none;\\n        -ms-user-select: none;\\n        -moz-user-select: none;\\n    }\\n    .home h5 {\\n        font-size: 1.5rem;\\n        text-decoration: underline;\\n        font-family: var(--code-font);\\n        font-weight: 300;\\n        letter-spacing: 0.3rem;\\n        animation-duration: 1s;\\n        color: var(--main-color);\\n    }\\n    .home h1 {\\n        font-size: 4.5rem;\\n        font-weight: 900;\\n\\n        animation-duration: 1s;\\n    }\\n\\n    @media screen and (max-width: 600px) {\\n        .home h1 {\\n            font-size: 2rem;\\n        }\\n        .home h5 {\\n            font-size: 1rem;\\n        }\\n    }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AA0BI,KAAK,8BAAC,CAAC,AACH,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CAEtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CAEvB,WAAW,CAAE,IAAI,CACjB,eAAe,CAAE,IAAI,CACrB,gBAAgB,CAAE,IAAI,AAC1B,CAAC,AACD,oBAAK,CAAC,EAAE,eAAC,CAAC,AACN,SAAS,CAAE,MAAM,CACjB,eAAe,CAAE,SAAS,CAC1B,WAAW,CAAE,IAAI,WAAW,CAAC,CAC7B,WAAW,CAAE,GAAG,CAChB,cAAc,CAAE,MAAM,CACtB,kBAAkB,CAAE,EAAE,CACtB,KAAK,CAAE,IAAI,YAAY,CAAC,AAC5B,CAAC,AACD,oBAAK,CAAC,EAAE,eAAC,CAAC,AACN,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,CAEhB,kBAAkB,CAAE,EAAE,AAC1B,CAAC,AAED,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAClC,oBAAK,CAAC,EAAE,eAAC,CAAC,AACN,SAAS,CAAE,IAAI,AACnB,CAAC,AACD,oBAAK,CAAC,EAAE,eAAC,CAAC,AACN,SAAS,CAAE,IAAI,AACnB,CAAC,AACL,CAAC\"}"
};

const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $color, $$unsubscribe_color;
	$$unsubscribe_color = subscribe(color, value => $color = value);

	$$result.css.add(css$8);
	$$unsubscribe_color();

	return `${($$result.head += `${($$result.title = `<title>Home | Arthur Matias</title>`, "")}`, "")}
${validate_component(Container, "Container").$$render($$result, {}, {}, {
		default: () => `<div class="${"home svelte-1ungoab"}"><h5 class="${"animate__animated animate__fadeInLeft svelte-1ungoab"}" style="${"--main-color: " + escape($color)}">Hi, my name is
        </h5>
        <h1 class="${"animate__animated animate__fadeInRight svelte-1ungoab"}">Arthur Matias</h1></div>`
	})}`;
});

var component_0 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': Routes
});

/* src/components/ProgIcon.svelte generated by Svelte v3.35.0 */

const css$7 = {
	code: ".prog-icon-container.svelte-b2rg4y.svelte-b2rg4y{display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:0}.prog-icon-container.svelte-b2rg4y>svg.svelte-b2rg4y{width:100%;height:auto}",
	map: "{\"version\":3,\"file\":\"ProgIcon.svelte\",\"sources\":[\"ProgIcon.svelte\"],\"sourcesContent\":[\"<script lang=\\\"ts\\\">import { color } from '../stores.js';\\n</script>\\n\\n<!-- Icon SVG code for changing colors -->\\n\\n<div class=\\\"prog-icon-container\\\">\\n    <svg viewBox=\\\"0 0 444 329\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n        <path d=\\\"M427.488 281.99C426.251 281.991 425.035 281.668 423.963 281.053L412.079 274.202C411.744 274.009 411.465 273.732 411.272 273.398C411.078 273.064 410.977 272.685 410.977 272.299C410.977 271.914 411.078 271.535 411.272 271.201C411.465 270.867 411.744 270.589 412.079 270.397L423.963 263.546C425.035 262.931 426.25 262.607 427.487 262.607C428.724 262.607 429.939 262.931 431.012 263.546L442.897 270.397C443.232 270.589 443.51 270.867 443.703 271.201C443.897 271.535 443.999 271.914 443.999 272.299C443.999 272.685 443.897 273.064 443.703 273.398C443.51 273.732 443.232 274.009 442.897 274.202L431.013 281.053C429.941 281.668 428.725 281.992 427.488 281.99V281.99ZM427.488 264.485C426.581 264.484 425.691 264.721 424.905 265.173L413.021 272.023C412.974 272.05 412.934 272.09 412.906 272.138C412.879 272.186 412.864 272.241 412.864 272.296C412.864 272.351 412.879 272.406 412.906 272.454C412.934 272.502 412.974 272.541 413.021 272.569L424.905 279.417C425.69 279.868 426.581 280.106 427.487 280.106C428.393 280.106 429.283 279.868 430.069 279.417L441.953 272.567C442.001 272.539 442.041 272.499 442.068 272.451C442.096 272.403 442.11 272.349 442.11 272.294C442.11 272.238 442.096 272.184 442.068 272.136C442.041 272.088 442.001 272.048 441.953 272.02L430.068 265.17C429.283 264.72 428.393 264.483 427.488 264.485V264.485Z\\\" fill=\\\"{$color}\\\"/>\\n        <path d=\\\"M393.499 243.121C391.49 243.123 389.515 242.596 387.773 241.594L367.321 229.805C366.848 229.533 366.456 229.141 366.183 228.67C365.909 228.198 365.766 227.663 365.766 227.118C365.766 226.573 365.909 226.038 366.183 225.566C366.456 225.094 366.848 224.703 367.321 224.431L387.773 212.643C389.515 211.642 391.489 211.116 393.499 211.116C395.509 211.116 397.484 211.642 399.225 212.643L419.678 224.431C420.151 224.703 420.544 225.095 420.816 225.567C421.089 226.039 421.233 226.574 421.233 227.119C421.233 227.664 421.089 228.199 420.816 228.671C420.544 229.142 420.151 229.534 419.678 229.807L399.225 241.594C397.484 242.596 395.509 243.123 393.499 243.121ZM388.711 239.969C390.167 240.805 391.817 241.244 393.496 241.244C395.175 241.244 396.825 240.805 398.281 239.969L418.733 228.174C418.919 228.067 419.073 227.912 419.18 227.726C419.288 227.541 419.344 227.33 419.344 227.116C419.344 226.901 419.288 226.691 419.18 226.505C419.073 226.319 418.919 226.165 418.733 226.057L398.279 214.27C396.824 213.434 395.174 212.995 393.495 212.995C391.816 212.995 390.166 213.434 388.71 214.27L368.259 226.058C368.073 226.165 367.918 226.319 367.811 226.505C367.703 226.691 367.647 226.902 367.647 227.116C367.647 227.33 367.703 227.541 367.811 227.727C367.918 227.913 368.073 228.067 368.259 228.174L388.711 239.969Z\\\" fill=\\\"{$color}\\\"/>\\n        <path d=\\\"M27.7337 261.673C25.7238 261.675 23.7488 261.148 22.0076 260.146L1.55485 248.358C1.08214 248.085 0.68958 247.694 0.416638 247.222C0.143697 246.75 0 246.215 0 245.67C0 245.125 0.143697 244.59 0.416638 244.118C0.68958 243.647 1.08214 243.255 1.55485 242.983L22.0068 231.195C23.7485 230.194 25.7231 229.667 27.7329 229.667C29.7427 229.667 31.7173 230.194 33.459 231.195L53.9117 242.983C54.3847 243.255 54.7775 243.647 55.0506 244.119C55.3237 244.59 55.4675 245.126 55.4675 245.671C55.4675 246.215 55.3237 246.751 55.0506 247.222C54.7775 247.694 54.3847 248.086 53.9117 248.358L33.4605 260.146C31.7189 261.148 29.7438 261.675 27.7337 261.673V261.673ZM27.7337 231.548C26.0543 231.547 24.4042 231.987 22.9489 232.824L2.49615 244.611C2.31013 244.719 2.15569 244.873 2.04832 245.059C1.94094 245.245 1.88442 245.456 1.88442 245.67C1.88442 245.885 1.94094 246.096 2.04832 246.281C2.15569 246.467 2.31013 246.622 2.49615 246.729L22.9481 258.517C24.4041 259.353 26.054 259.792 27.7333 259.792C29.4126 259.792 31.0625 259.353 32.5184 258.517L52.9728 246.729C53.1588 246.622 53.3133 246.468 53.4208 246.282C53.5282 246.096 53.5847 245.885 53.5847 245.671C53.5847 245.457 53.5282 245.246 53.4208 245.06C53.3133 244.874 53.1588 244.72 52.9728 244.613L32.5177 232.824C31.0624 231.987 29.4123 231.547 27.7329 231.548H27.7337Z\\\" fill=\\\"{$color}\\\"/>\\n        <path opacity=\\\"0.6\\\" d=\\\"M234.851 313.101L88.6088 228.807C86.4773 227.579 86.7449 225.433 89.2058 224.014L183.068 169.914C185.529 168.495 189.253 168.341 191.384 169.569L337.627 253.863C339.759 255.092 339.491 257.238 337.03 258.656L243.167 312.757C240.706 314.179 236.982 314.33 234.851 313.101Z\\\" fill=\\\"#030830\\\"/>\\n        <path d=\\\"M238.2 328.318C236.49 328.318 234.85 327.963 233.597 327.24L66.6888 231.039C65.325 230.254 64.5762 229.12 64.5762 227.849C64.5762 226.388 65.5934 224.959 67.3711 223.939L181.147 157.391C184.268 155.594 188.852 155.419 191.586 156.995L358.493 253.2C359.857 253.981 360.606 255.118 360.606 256.389C360.606 257.85 359.589 259.275 357.811 260.295L244.037 326.846C242.345 327.822 240.224 328.318 238.2 328.318ZM187.007 157.807C185.298 157.807 183.481 158.219 182.096 159.016L68.3171 225.564C67.1513 226.237 66.4596 227.09 66.4596 227.848C66.4596 228.58 67.0965 229.097 67.6333 229.41L234.54 325.613C236.671 326.843 240.587 326.663 243.088 325.223L356.864 258.675C358.03 258.002 358.723 257.151 358.723 256.392C358.723 255.66 358.086 255.142 357.549 254.829L190.643 158.624C189.691 158.076 188.383 157.807 187.007 157.807Z\\\" fill=\\\"{$color}\\\"/>\\n        <path d=\\\"M376.476 112.544L230.806 28.5823C229.805 28.0051 228.76 27.8863 227.833 28.1566L227.819 28.1613L225.122 29.0987L226.072 29.3229C225.666 29.8115 225.363 30.3772 225.183 30.9859L192.241 137.769C191.425 140.417 192.62 143.634 194.911 144.956L340.579 228.913C340.914 229.107 341.275 229.254 341.651 229.35L341.29 230.131L343.866 229.227H343.86C344.916 228.808 345.785 227.867 346.208 226.507L379.149 119.727C379.962 117.081 378.767 113.865 376.476 112.544Z\\\" fill=\\\"url(#paint0_radial)\\\"/>\\n        <path d=\\\"M335.364 232.9L335.415 232.962L191.534 150.03C189.421 148.809 185.72 148.962 183.276 150.371L90.313 203.953L87.2129 202.772L88.0838 207.114C88.1996 207.766 88.6573 208.378 89.4797 208.852L234.698 292.548C236.814 293.768 240.511 293.615 242.956 292.207L336.155 238.485C337.305 237.823 337.966 237.001 338.13 236.187L338.135 236.194L339.025 231.968L335.364 232.9Z\\\" fill=\\\"url(#paint1_radial)\\\"/>\\n        <path d=\\\"M234.851 288.728L88.6088 204.435C86.4773 203.206 86.7449 201.06 89.2058 199.642L183.068 145.541C185.529 144.122 189.253 143.968 191.384 145.197L337.627 229.49C339.759 230.719 339.491 232.866 337.03 234.284L243.167 288.384C240.706 289.807 236.982 289.957 234.851 288.728Z\\\" fill=\\\"url(#paint2_radial)\\\"/>\\n        <path d=\\\"M337.029 233.147L243.167 287.247C240.706 288.666 236.986 288.82 234.851 287.592L88.6088 203.298C87.8827 202.88 87.4563 202.351 87.2786 201.784C86.9962 202.762 87.4093 203.744 88.6088 204.435L234.851 288.729C236.983 289.957 240.706 289.803 243.167 288.384L337.029 234.284C338.652 233.347 339.298 232.101 338.957 231.003C338.737 231.767 338.107 232.527 337.029 233.147Z\\\" fill=\\\"white\\\"/>\\n        <g opacity=\\\"0.4\\\">\\n        <path opacity=\\\"0.4\\\" d=\\\"M158.361 190.757L153.424 187.911C153.027 187.683 153.077 187.286 153.535 187.02L159.363 183.661C159.821 183.397 160.513 183.368 160.91 183.597L165.847 186.443C166.244 186.671 166.194 187.068 165.736 187.334L159.908 190.693C159.451 190.955 158.761 190.984 158.361 190.757Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M165.986 195.15L161.049 192.304C160.652 192.076 160.702 191.679 161.16 191.413L166.988 188.054C167.445 187.79 168.138 187.761 168.535 187.99L173.471 190.835C173.867 191.063 173.818 191.46 173.36 191.726L167.532 195.085C167.075 195.35 166.383 195.379 165.986 195.15Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M173.611 199.545L168.674 196.699C168.277 196.471 168.327 196.074 168.785 195.808L174.613 192.449C175.071 192.185 175.763 192.156 176.159 192.385L181.097 195.23C181.493 195.459 181.444 195.855 180.986 196.122L175.158 199.481C174.7 199.745 174.007 199.774 173.611 199.545Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M184.156 195.913L179.219 193.067C178.823 192.839 178.872 192.442 179.33 192.175L184.222 189.355C184.679 189.091 185.372 189.063 185.768 189.291L190.706 192.137C191.102 192.366 191.052 192.762 190.595 193.029L185.703 195.849C185.245 196.116 184.553 196.147 184.156 195.913Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M191.781 200.31L186.844 197.464C186.447 197.236 186.497 196.839 186.955 196.573L191.847 193.753C192.305 193.489 192.997 193.461 193.394 193.689L198.331 196.535C198.728 196.764 198.678 197.16 198.22 197.427L193.328 200.246C192.871 200.51 192.179 200.539 191.781 200.31Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M199.406 204.706L194.469 201.859C194.072 201.631 194.122 201.234 194.58 200.968L199.472 198.148C199.93 197.885 200.622 197.856 201.019 198.084L205.956 200.931C206.352 201.159 206.303 201.555 205.845 201.822L200.952 204.641C200.495 204.905 199.803 204.934 199.406 204.706Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M207.032 209.101L202.094 206.254C201.698 206.026 201.747 205.629 202.205 205.363L207.097 202.543C207.555 202.279 208.247 202.251 208.643 202.479L213.581 205.325C213.977 205.553 213.928 205.95 213.47 206.217L208.578 209.037C208.12 209.3 207.43 209.329 207.032 209.101Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M214.658 213.495L209.721 210.649C209.325 210.421 209.374 210.024 209.832 209.757L214.724 206.938C215.182 206.674 215.874 206.645 216.271 206.874L221.208 209.72C221.605 209.948 221.555 210.345 221.097 210.611L216.205 213.431C215.747 213.695 215.055 213.722 214.658 213.495Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M222.283 217.89L217.346 215.044C216.949 214.815 216.999 214.419 217.457 214.152L222.349 211.333C222.807 211.069 223.499 211.04 223.896 211.269L228.833 214.115C229.23 214.344 229.18 214.74 228.722 215.006L223.83 217.826C223.372 218.09 222.68 218.118 222.283 217.89Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M229.908 222.285L224.971 219.439C224.574 219.21 224.624 218.814 225.082 218.548L229.974 215.728C230.432 215.464 231.124 215.435 231.521 215.664L236.458 218.51C236.855 218.739 236.805 219.135 236.347 219.401L231.455 222.221C230.998 222.485 230.305 222.514 229.908 222.285Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M237.533 226.68L232.596 223.834C232.199 223.606 232.249 223.209 232.706 222.942L237.599 220.122C238.057 219.858 238.749 219.83 239.146 220.058L244.083 222.904C244.479 223.133 244.43 223.529 243.972 223.795L239.079 226.615C238.622 226.88 237.929 226.908 237.533 226.68Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M245.157 231.075L240.217 228.229C239.821 228.001 239.87 227.604 240.328 227.338L245.22 224.518C245.678 224.254 246.37 224.226 246.766 224.454L251.704 227.3C252.1 227.528 252.05 227.924 251.592 228.192L246.701 231.011C246.246 231.275 245.554 231.304 245.157 231.075Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M252.781 235.47L247.844 232.624C247.447 232.395 247.497 231.999 247.955 231.732L252.847 228.912C253.305 228.649 253.997 228.62 254.394 228.848L259.332 231.695C259.728 231.923 259.678 232.32 259.22 232.586L254.328 235.406C253.871 235.673 253.178 235.698 252.781 235.47Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M195.391 193.835L190.454 190.989C190.057 190.761 190.106 190.364 190.564 190.098L195.457 187.278C195.914 187.014 196.607 186.985 197.003 187.213L201.94 190.06C202.337 190.288 202.288 190.685 201.83 190.951L196.937 193.771C196.479 194.038 195.787 194.064 195.391 193.835Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M187.652 189.374L182.715 186.528C182.319 186.3 182.368 185.903 182.826 185.637L187.718 182.817C188.176 182.553 188.869 182.525 189.265 182.753L194.206 185.601C194.603 185.83 194.553 186.226 194.095 186.493L189.198 189.31C188.741 189.574 188.049 189.603 187.652 189.374Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M179.901 184.907L169.268 178.778C168.871 178.549 168.921 178.153 169.379 177.886L174.271 175.067C174.729 174.803 175.421 174.774 175.817 175.003L186.451 181.132C186.848 181.36 186.798 181.757 186.34 182.023L181.448 184.843C180.991 185.107 180.298 185.133 179.901 184.907Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M185.32 179.473L176.69 174.499C176.293 174.271 176.343 173.874 176.8 173.608L181.693 170.788C182.151 170.524 182.843 170.495 183.239 170.724L191.869 175.698C192.266 175.927 192.216 176.323 191.759 176.59L186.866 179.409C186.408 179.673 185.716 179.702 185.32 179.473Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M203.015 198.23L198.078 195.384C197.682 195.155 197.731 194.759 198.189 194.492L203.082 191.672C203.54 191.409 204.231 191.38 204.628 191.609L209.565 194.454C209.962 194.683 209.912 195.079 209.454 195.346L204.562 198.166C204.105 198.429 203.412 198.458 203.015 198.23Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M210.639 202.624L205.701 199.779C205.305 199.55 205.355 199.154 205.812 198.887L210.704 196.068C211.162 195.804 211.855 195.775 212.251 196.004L217.189 198.849C217.585 199.077 217.535 199.474 217.077 199.74L212.186 202.56C211.734 202.824 211.038 202.852 210.639 202.624Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M218.266 207.019L213.328 204.174C212.932 203.945 212.982 203.549 213.439 203.282L218.331 200.462C218.789 200.198 219.482 200.169 219.878 200.398L224.816 203.244C225.212 203.473 225.162 203.869 224.705 204.135L219.813 206.955C219.355 207.219 218.662 207.248 218.266 207.019Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M225.891 211.414L220.954 208.569C220.557 208.34 220.606 207.944 221.064 207.677L225.957 204.857C226.414 204.593 227.107 204.565 227.503 204.793L232.441 207.639C232.837 207.868 232.788 208.264 232.33 208.53L227.437 211.35C226.979 211.614 226.287 211.643 225.891 211.414Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M233.518 215.809L228.58 212.963C228.184 212.735 228.233 212.338 228.691 212.072L233.584 209.252C234.042 208.988 234.734 208.96 235.13 209.188L240.068 212.034C240.464 212.263 240.415 212.659 239.956 212.926L235.064 215.745C234.607 216.009 233.914 216.038 233.518 215.809Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M241.14 220.206L236.203 217.36C235.807 217.132 235.856 216.736 236.314 216.469L241.206 213.649C241.664 213.386 242.356 213.357 242.753 213.585L247.69 216.431C248.087 216.66 248.037 217.056 247.579 217.323L242.687 220.142C242.23 220.404 241.537 220.433 241.14 220.206Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M248.768 224.599L243.83 221.753C243.433 221.525 243.484 221.128 243.941 220.862L248.833 218.042C249.291 217.778 249.984 217.75 250.38 217.978L255.318 220.824C255.715 221.052 255.664 221.449 255.207 221.716L250.315 224.536C249.857 224.799 249.164 224.828 248.768 224.599Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M256.391 228.994L251.453 226.148C251.057 225.919 251.107 225.523 251.564 225.256L256.457 222.437C256.914 222.173 257.607 222.144 258.004 222.373L262.941 225.219C263.337 225.447 263.288 225.844 262.83 226.11L257.937 228.93C257.479 229.193 256.787 229.222 256.391 228.994Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M264.016 233.389L259.078 230.543C258.682 230.315 258.731 229.919 259.189 229.651L264.082 226.832C264.54 226.568 265.232 226.539 265.628 226.768L270.566 229.614C270.962 229.842 270.913 230.239 270.455 230.505L265.562 233.325C265.104 233.589 264.412 233.617 264.016 233.389Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M277.572 241.202L266.799 234.993C266.403 234.764 266.452 234.368 266.91 234.102L271.802 231.282C272.26 231.018 272.953 230.989 273.349 231.218L284.122 237.427C284.518 237.655 284.469 238.052 284.011 238.318L279.118 241.138C278.661 241.402 277.968 241.43 277.572 241.202Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M292.415 232.645L283.323 227.404C282.926 227.176 282.975 226.779 283.433 226.513L288.326 223.693C288.784 223.429 289.476 223.401 289.873 223.629L298.965 228.87C299.362 229.099 299.312 229.495 298.854 229.762L293.962 232.582C293.504 232.845 292.812 232.874 292.415 232.645Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M216.369 197.37L211.432 194.524C211.035 194.295 211.085 193.899 211.542 193.632L216.435 190.813C216.893 190.549 217.585 190.52 217.981 190.749L222.919 193.595C223.315 193.823 223.266 194.22 222.808 194.486L217.916 197.306C217.458 197.57 216.765 197.598 216.369 197.37Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M208.554 192.866L203.617 190.02C203.221 189.791 203.27 189.395 203.728 189.128L208.621 186.309C209.079 186.045 209.771 186.016 210.167 186.245L215.104 189.09C215.501 189.319 215.451 189.715 214.993 189.982L210.101 192.802C209.644 193.066 208.951 193.094 208.554 192.866Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M200.74 188.361L195.803 185.515C195.406 185.287 195.456 184.89 195.914 184.624L200.806 181.805C201.264 181.541 201.956 181.512 202.353 181.741L207.29 184.586C207.687 184.814 207.637 185.211 207.179 185.477L202.287 188.297C201.829 188.561 201.137 188.589 200.74 188.361Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M192.926 183.858L187.988 181.011C187.592 180.783 187.642 180.386 188.1 180.12L192.991 177.3C193.449 177.037 194.142 177.008 194.538 177.236L199.476 180.082C199.872 180.311 199.822 180.707 199.365 180.974L194.473 183.794C194.015 184.057 193.322 184.086 192.926 183.858Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M223.996 201.765L219.058 198.919C218.662 198.69 218.712 198.294 219.17 198.028L224.062 195.208C224.519 194.944 225.212 194.915 225.609 195.144L230.546 197.99C230.943 198.218 230.893 198.614 230.435 198.881L225.543 201.701C225.085 201.965 224.393 201.993 223.996 201.765Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M231.621 206.16L226.684 203.314C226.287 203.085 226.337 202.689 226.795 202.423L231.687 199.603C232.145 199.339 232.837 199.31 233.234 199.538L238.171 202.384C238.568 202.613 238.518 203.009 238.06 203.276L233.168 206.096C232.71 206.36 232.018 206.389 231.621 206.16Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M239.244 210.555L234.307 207.709C233.91 207.481 233.96 207.084 234.418 206.817L239.31 203.997C239.768 203.733 240.46 203.705 240.857 203.933L245.795 206.779C246.19 207.008 246.141 207.404 245.683 207.671L240.791 210.491C240.334 210.755 239.641 210.783 239.244 210.555Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M246.868 214.949L241.93 212.103C241.534 211.875 241.583 211.478 242.041 211.212L246.933 208.392C247.391 208.129 248.084 208.1 248.48 208.328L253.418 211.174C253.814 211.403 253.764 211.799 253.307 212.066L248.414 214.886C247.963 215.149 247.267 215.178 246.868 214.949Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M254.497 219.347L249.558 216.5C249.162 216.272 249.212 215.875 249.67 215.609L254.561 212.789C255.02 212.526 255.712 212.497 256.108 212.726L261.046 215.571C261.442 215.799 261.392 216.196 260.935 216.463L256.043 219.283C255.585 219.544 254.892 219.573 254.497 219.347Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M262.119 223.739L257.182 220.893C256.785 220.664 256.835 220.268 257.293 220.001L262.185 217.182C262.643 216.918 263.335 216.889 263.732 217.118L268.669 219.964C269.066 220.192 269.016 220.589 268.558 220.855L263.666 223.675C263.208 223.939 262.516 223.967 262.119 223.739Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M269.744 228.134L264.807 225.288C264.41 225.059 264.46 224.663 264.918 224.397L269.81 221.577C270.268 221.313 270.96 221.284 271.357 221.513L276.294 224.359C276.691 224.587 276.641 224.983 276.183 225.25L271.291 228.07C270.833 228.334 270.141 228.362 269.744 228.134Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M277.369 232.529L272.432 229.683C272.035 229.454 272.085 229.058 272.543 228.792L277.435 225.972C277.892 225.708 278.585 225.679 278.981 225.908L283.919 228.754C284.315 228.982 284.266 229.378 283.808 229.645L278.915 232.465C278.457 232.729 277.765 232.757 277.369 232.529Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M284.994 236.923L280.056 234.077C279.661 233.848 279.71 233.452 280.168 233.186L285.06 230.366C285.518 230.102 286.21 230.074 286.606 230.302L291.544 233.148C291.94 233.377 291.891 233.773 291.433 234.039L286.541 236.859C286.083 237.124 285.39 237.152 284.994 236.923Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M212.355 186.499L207.418 183.654C207.022 183.425 207.071 183.029 207.529 182.762L212.421 179.942C212.879 179.678 213.571 179.649 213.968 179.878L218.905 182.724C219.302 182.953 219.252 183.349 218.794 183.615L213.902 186.435C213.444 186.699 212.752 186.727 212.355 186.499Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M204.769 182.126L199.832 179.281C199.435 179.052 199.486 178.656 199.943 178.389L204.835 175.57C205.293 175.306 205.985 175.277 206.382 175.506L211.319 178.351C211.716 178.579 211.666 178.976 211.208 179.243L206.316 182.062C205.856 182.326 205.161 182.355 204.769 182.126Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M197.18 177.754L192.242 174.908C191.846 174.679 191.896 174.283 192.353 174.016L197.245 171.196C197.703 170.933 198.396 170.904 198.792 171.133L203.73 173.978C204.126 174.206 204.076 174.603 203.619 174.87L198.726 177.689C198.269 177.953 197.576 177.982 197.18 177.754Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M189.594 173.38L184.656 170.534C184.26 170.306 184.309 169.909 184.767 169.643L189.66 166.823C190.118 166.559 190.81 166.531 191.206 166.759L196.143 169.605C196.54 169.834 196.491 170.23 196.032 170.497L191.14 173.317C190.686 173.58 189.99 173.609 189.594 173.38Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M197.396 168.884L192.459 166.039C192.062 165.81 192.112 165.414 192.57 165.147L194.188 164.215C194.645 163.951 195.338 163.923 195.734 164.151L200.672 166.996C201.068 167.225 201.018 167.621 200.561 167.888L198.943 168.82C198.486 169.084 197.793 169.112 197.396 168.884Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M207.297 174.587L202.359 171.741C201.963 171.513 202.013 171.116 202.471 170.85L204.088 169.918C204.546 169.654 205.238 169.625 205.634 169.854L210.571 172.7C210.968 172.928 210.918 173.325 210.46 173.591L208.844 174.524C208.385 174.79 207.693 174.821 207.297 174.587Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M214.854 178.945L209.916 176.099C209.52 175.871 209.569 175.474 210.028 175.207L211.644 174.275C212.102 174.011 212.794 173.982 213.191 174.211L218.128 177.057C218.525 177.285 218.475 177.682 218.017 177.949L216.4 178.883C215.942 179.145 215.25 179.174 214.854 178.945Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M222.407 183.3L217.469 180.454C217.073 180.225 217.122 179.829 217.58 179.563L219.197 178.63C219.655 178.367 220.347 178.338 220.744 178.566L225.681 181.413C226.078 181.641 226.028 182.038 225.57 182.304L223.953 183.236C223.495 183.5 222.803 183.529 222.407 183.3Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M229.965 187.655L225.027 184.809C224.631 184.58 224.681 184.184 225.138 183.918L226.756 182.985C227.213 182.722 227.906 182.693 228.302 182.921L233.24 185.767C233.636 185.996 233.586 186.392 233.129 186.659L231.511 187.591C231.051 187.855 230.356 187.883 229.965 187.655Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M272.141 211.966L267.203 209.121C266.807 208.893 266.857 208.496 267.314 208.229L268.931 207.298C269.389 207.034 270.082 207.005 270.478 207.234L275.415 210.079C275.812 210.307 275.762 210.704 275.304 210.97L273.688 211.902C273.236 212.166 272.541 212.195 272.141 211.966Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M279.699 216.322L274.762 213.476C274.365 213.247 274.415 212.851 274.872 212.585L276.49 211.653C276.947 211.389 277.64 211.36 278.037 211.589L282.974 214.434C283.371 214.662 283.321 215.059 282.863 215.326L281.245 216.258C280.788 216.522 280.095 216.551 279.699 216.322Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M287.254 220.675L282.317 217.829C281.92 217.6 281.969 217.204 282.427 216.938L284.045 216.005C284.502 215.742 285.195 215.713 285.591 215.941L290.529 218.788C290.925 219.016 290.875 219.412 290.418 219.679L288.8 220.611C288.343 220.876 287.65 220.909 287.254 220.675Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M294.809 225.031L289.871 222.186C289.475 221.957 289.524 221.561 289.982 221.293L291.599 220.362C292.057 220.098 292.749 220.07 293.146 220.298L298.083 223.144C298.48 223.373 298.429 223.769 297.972 224.036L296.355 224.971C295.897 225.231 295.204 225.259 294.809 225.031Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M219.978 190.894L215.041 188.049C214.644 187.82 214.695 187.424 215.152 187.157L220.044 184.337C220.502 184.073 221.194 184.044 221.591 184.273L226.528 187.119C226.925 187.348 226.875 187.744 226.417 188.01L221.525 190.83C221.068 191.094 220.375 191.123 219.978 190.894Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M227.604 195.287L222.666 192.442C222.269 192.214 222.32 191.817 222.777 191.55L227.669 188.73C228.127 188.466 228.82 188.438 229.216 188.666L234.154 191.512C234.55 191.741 234.5 192.137 234.043 192.404L229.151 195.223C228.693 195.489 228 195.522 227.604 195.287Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M235.229 199.684L230.291 196.838C229.895 196.61 229.944 196.213 230.402 195.947L235.295 193.127C235.752 192.863 236.445 192.835 236.841 193.063L241.779 195.912C242.175 196.141 242.126 196.537 241.668 196.805L236.776 199.624C236.317 199.884 235.625 199.913 235.229 199.684Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M242.855 204.079L237.918 201.233C237.522 201.005 237.571 200.608 238.029 200.341L242.922 197.521C243.379 197.258 244.072 197.229 244.468 197.457L249.405 200.304C249.802 200.532 249.753 200.929 249.294 201.195L244.402 204.015C243.944 204.279 243.252 204.307 242.855 204.079Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M250.478 208.474L245.541 205.628C245.144 205.4 245.195 205.003 245.652 204.736L250.544 201.917C251.002 201.653 251.694 201.624 252.091 201.853L257.028 204.699C257.425 204.927 257.375 205.324 256.917 205.59L252.025 208.41C251.567 208.674 250.875 208.702 250.478 208.474Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M258.104 212.869L253.166 210.023C252.769 209.794 252.82 209.398 253.277 209.131L258.169 206.312C258.627 206.048 259.32 206.019 259.716 206.248L264.654 209.094C265.051 209.322 265 209.719 264.543 209.985L259.651 212.805C259.193 213.069 258.5 213.098 258.104 212.869Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M265.73 217.263L260.795 214.418C260.398 214.189 260.448 213.793 260.905 213.526L265.798 210.707C266.256 210.443 266.948 210.414 267.345 210.642L272.282 213.488C272.678 213.717 272.629 214.113 272.171 214.379L267.278 217.199C266.82 217.463 266.126 217.491 265.73 217.263Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M273.354 221.658L268.416 218.813C268.02 218.584 268.069 218.188 268.527 217.921L273.42 215.101C273.877 214.837 274.57 214.808 274.966 215.037L279.903 217.883C280.299 218.112 280.249 218.508 279.792 218.774L274.9 221.594C274.442 221.858 273.75 221.887 273.354 221.658Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M280.982 226.053L276.045 223.207C275.649 222.979 275.698 222.582 276.156 222.316L281.048 219.496C281.506 219.232 282.198 219.204 282.595 219.432L287.532 222.278C287.929 222.507 287.879 222.903 287.421 223.17L282.526 225.987C282.068 226.253 281.373 226.282 280.982 226.053Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M176.387 191.437L161.846 183.055C161.449 182.827 161.499 182.43 161.957 182.164L166.849 179.344C167.307 179.08 167.999 179.052 168.396 179.28L182.939 187.662C183.335 187.89 183.286 188.287 182.828 188.553L177.936 191.373C177.476 191.637 176.783 191.665 176.387 191.437Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M270.061 245.428L255.519 237.047C255.123 236.819 255.173 236.422 255.63 236.156L260.523 233.336C260.981 233.072 261.673 233.043 262.069 233.272L276.611 241.653C277.007 241.882 276.958 242.278 276.5 242.545L271.608 245.364C271.15 245.628 270.457 245.657 270.061 245.428Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M239.566 237.561L234.629 234.715C234.232 234.486 234.282 234.09 234.74 233.824L240.568 230.465C241.026 230.201 241.718 230.172 242.115 230.401L247.052 233.247C247.448 233.475 247.399 233.871 246.941 234.138L241.113 237.497C240.655 237.761 239.963 237.79 239.566 237.561Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M184.197 205.645L176.301 201.094C175.905 200.866 175.954 200.469 176.412 200.202L182.24 196.843C182.698 196.579 183.391 196.551 183.786 196.779L191.683 201.33C192.08 201.559 192.03 201.955 191.572 202.222L185.744 205.581C185.289 205.845 184.594 205.873 184.197 205.645Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M232.219 233.33L224.322 228.779C223.926 228.55 223.976 228.154 224.434 227.886L230.261 224.528C230.719 224.264 231.412 224.235 231.808 224.463L239.704 229.015C240.101 229.243 240.051 229.64 239.593 229.907L233.765 233.266C233.308 233.526 232.615 233.555 232.219 233.33Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M195.196 211.986L187.299 207.435C186.902 207.206 186.952 206.81 187.41 206.544L193.238 203.185C193.696 202.922 194.388 202.893 194.785 203.121L202.681 207.673C203.078 207.901 203.028 208.298 202.57 208.564L196.742 211.923C196.284 212.186 195.592 212.215 195.196 211.986Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M194.839 203.151L229.171 222.94C229.596 223.185 229.596 223.584 229.171 223.829L223.224 227.254C222.797 227.5 222.107 227.5 221.681 227.254L187.354 207.465L194.839 203.151Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M260.88 245.529L266.38 248.699C266.704 248.886 266.664 249.214 266.289 249.429L263.905 250.804C263.529 251.02 262.962 251.043 262.637 250.856L257.138 247.686C256.812 247.499 256.853 247.172 257.229 246.955L259.613 245.581C259.987 245.365 260.555 245.341 260.88 245.529Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M253.191 241.098L258.691 244.266C259.016 244.453 258.975 244.781 258.6 244.997L256.216 246.375C255.841 246.591 255.277 246.615 254.948 246.427L249.45 243.256C249.125 243.068 249.166 242.741 249.54 242.525L251.925 241.151C252.299 240.934 252.866 240.911 253.191 241.098Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M245.568 236.703L251.067 239.873C251.392 240.061 251.352 240.388 250.976 240.604L248.59 241.979C248.216 242.194 247.647 242.218 247.323 242.031L241.823 238.861C241.498 238.673 241.539 238.346 241.914 238.13L244.298 236.756C244.678 236.539 245.242 236.516 245.568 236.703Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M257.4 238.671L262.899 241.84C263.225 242.028 263.184 242.355 262.808 242.572L260.424 243.946C260.049 244.162 259.481 244.185 259.157 243.998L253.657 240.828C253.332 240.641 253.373 240.313 253.748 240.097L256.132 238.723C256.507 238.507 257.075 238.485 257.4 238.671Z\\\" fill=\\\"#09133D\\\"/>\\n        </g>\\n        <path d=\\\"M158.363 190.757L153.426 187.911C153.029 187.683 153.079 187.286 153.537 187.02L159.365 183.661C159.823 183.397 160.515 183.368 160.912 183.597L165.849 186.443C166.246 186.671 166.196 187.068 165.738 187.334L159.91 190.693C159.452 190.955 158.763 190.984 158.363 190.757Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M165.986 195.15L161.049 192.304C160.652 192.076 160.702 191.68 161.16 191.413L166.988 188.054C167.445 187.79 168.138 187.761 168.535 187.99L173.471 190.835C173.867 191.063 173.818 191.46 173.36 191.726L167.532 195.085C167.075 195.35 166.383 195.379 165.986 195.15Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M173.611 199.545L168.674 196.699C168.277 196.471 168.327 196.074 168.785 195.808L174.613 192.449C175.071 192.185 175.763 192.156 176.159 192.385L181.097 195.231C181.493 195.46 181.444 195.856 180.986 196.122L175.158 199.481C174.7 199.745 174.007 199.774 173.611 199.545Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M184.158 195.913L179.221 193.067C178.825 192.839 178.874 192.442 179.332 192.176L184.224 189.356C184.681 189.092 185.374 189.063 185.77 189.292L190.708 192.137C191.104 192.366 191.054 192.762 190.597 193.029L185.705 195.849C185.247 196.116 184.554 196.147 184.158 195.913Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M191.781 200.31L186.844 197.465C186.447 197.236 186.497 196.84 186.955 196.573L191.847 193.753C192.305 193.489 192.997 193.461 193.394 193.689L198.331 196.535C198.728 196.764 198.678 197.16 198.22 197.427L193.328 200.246C192.871 200.51 192.179 200.539 191.781 200.31Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M199.406 204.706L194.469 201.859C194.072 201.631 194.122 201.234 194.58 200.968L199.472 198.148C199.93 197.885 200.622 197.856 201.019 198.084L205.956 200.931C206.352 201.159 206.303 201.555 205.845 201.822L200.952 204.641C200.495 204.905 199.803 204.934 199.406 204.706Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M207.032 209.101L202.094 206.254C201.698 206.026 201.747 205.629 202.205 205.363L207.097 202.543C207.555 202.279 208.247 202.251 208.643 202.479L213.581 205.325C213.977 205.553 213.928 205.95 213.47 206.217L208.578 209.037C208.12 209.3 207.43 209.329 207.032 209.101Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M214.658 213.495L209.721 210.65C209.325 210.421 209.374 210.025 209.832 209.758L214.724 206.938C215.182 206.674 215.874 206.646 216.271 206.874L221.208 209.72C221.605 209.948 221.555 210.345 221.097 210.611L216.205 213.431C215.747 213.695 215.055 213.723 214.658 213.495Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M222.283 217.891L217.346 215.045C216.949 214.816 216.999 214.42 217.457 214.153L222.349 211.333C222.807 211.069 223.499 211.041 223.896 211.269L228.833 214.115C229.23 214.344 229.18 214.74 228.722 215.007L223.83 217.827C223.372 218.091 222.68 218.119 222.283 217.891Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M229.908 222.285L224.971 219.439C224.574 219.21 224.624 218.814 225.082 218.548L229.974 215.728C230.431 215.464 231.124 215.435 231.521 215.664L236.458 218.51C236.854 218.739 236.804 219.135 236.347 219.401L231.455 222.221C230.997 222.485 230.305 222.514 229.908 222.285Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M237.533 226.68L232.596 223.834C232.199 223.606 232.249 223.209 232.706 222.943L237.599 220.123C238.057 219.859 238.749 219.831 239.146 220.059L244.083 222.904C244.479 223.133 244.43 223.529 243.972 223.796L239.079 226.616C238.622 226.88 237.929 226.909 237.533 226.68Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M245.155 231.075L240.215 228.229C239.819 228.001 239.868 227.604 240.326 227.338L245.218 224.518C245.676 224.254 246.369 224.226 246.764 224.454L251.702 227.3C252.098 227.528 252.048 227.924 251.591 228.192L246.699 231.011C246.244 231.275 245.552 231.304 245.155 231.075Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M252.781 235.47L247.844 232.624C247.447 232.395 247.497 231.999 247.955 231.732L252.847 228.912C253.305 228.649 253.997 228.62 254.394 228.848L259.331 231.695C259.728 231.923 259.678 232.32 259.22 232.586L254.328 235.406C253.87 235.673 253.178 235.698 252.781 235.47Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M195.391 193.835L190.454 190.989C190.057 190.761 190.106 190.364 190.564 190.098L195.457 187.278C195.914 187.014 196.607 186.986 197.003 187.214L201.94 190.06C202.337 190.288 202.288 190.685 201.83 190.952L196.937 193.772C196.479 194.038 195.787 194.064 195.391 193.835Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M187.652 189.374L182.715 186.529C182.319 186.3 182.368 185.904 182.826 185.637L187.718 182.817C188.176 182.553 188.869 182.525 189.265 182.753L194.206 185.601C194.603 185.83 194.553 186.226 194.095 186.493L189.198 189.31C188.741 189.574 188.049 189.603 187.652 189.374Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M179.901 184.907L169.268 178.778C168.871 178.549 168.921 178.153 169.379 177.886L174.271 175.067C174.729 174.803 175.421 174.774 175.817 175.003L186.451 181.132C186.848 181.361 186.798 181.757 186.34 182.023L181.448 184.843C180.991 185.107 180.298 185.133 179.901 184.907Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M185.322 179.473L176.692 174.5C176.295 174.271 176.344 173.875 176.802 173.608L181.695 170.788C182.153 170.524 182.845 170.495 183.241 170.724L191.871 175.698C192.268 175.927 192.218 176.323 191.761 176.59L186.868 179.409C186.41 179.673 185.718 179.702 185.322 179.473Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M203.017 198.23L198.08 195.384C197.684 195.155 197.733 194.759 198.191 194.492L203.084 191.672C203.542 191.409 204.233 191.38 204.63 191.609L209.567 194.455C209.964 194.683 209.914 195.08 209.456 195.346L204.564 198.166C204.106 198.429 203.414 198.458 203.017 198.23Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M210.639 202.625L205.701 199.779C205.305 199.55 205.355 199.154 205.812 198.887L210.704 196.068C211.162 195.804 211.855 195.775 212.251 196.004L217.189 198.85C217.585 199.078 217.535 199.475 217.077 199.741L212.186 202.561C211.734 202.825 211.038 202.853 210.639 202.625Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M218.268 207.02L213.33 204.174C212.933 203.945 212.984 203.549 213.441 203.283L218.333 200.463C218.791 200.199 219.484 200.17 219.88 200.399L224.818 203.245C225.214 203.473 225.164 203.869 224.706 204.136L219.815 206.956C219.357 207.22 218.664 207.249 218.268 207.02Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M225.893 211.415L220.956 208.569C220.559 208.34 220.608 207.944 221.066 207.678L225.959 204.858C226.416 204.594 227.109 204.565 227.505 204.794L232.443 207.639C232.839 207.868 232.79 208.264 232.332 208.531L227.439 211.351C226.981 211.614 226.289 211.643 225.893 211.415Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M233.518 215.809L228.58 212.964C228.184 212.735 228.233 212.339 228.691 212.072L233.584 209.252C234.042 208.988 234.734 208.96 235.13 209.188L240.068 212.034C240.464 212.263 240.415 212.659 239.956 212.926L235.064 215.745C234.607 216.009 233.914 216.038 233.518 215.809Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M241.142 220.206L236.205 217.36C235.809 217.132 235.858 216.736 236.316 216.469L241.208 213.649C241.666 213.386 242.358 213.357 242.755 213.585L247.692 216.431C248.089 216.66 248.039 217.056 247.581 217.323L242.689 220.142C242.231 220.404 241.539 220.433 241.142 220.206Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M248.768 224.599L243.83 221.753C243.433 221.525 243.484 221.128 243.941 220.862L248.833 218.042C249.291 217.779 249.984 217.75 250.38 217.978L255.318 220.825C255.715 221.053 255.664 221.449 255.207 221.716L250.315 224.536C249.857 224.799 249.164 224.828 248.768 224.599Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M256.391 228.994L251.453 226.149C251.057 225.92 251.107 225.524 251.564 225.256L256.457 222.437C256.914 222.173 257.607 222.144 258.004 222.373L262.941 225.219C263.337 225.447 263.288 225.844 262.83 226.11L257.937 228.93C257.479 229.193 256.787 229.222 256.391 228.994Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M264.018 233.389L259.08 230.544C258.684 230.315 258.733 229.919 259.191 229.652L264.084 226.833C264.541 226.568 265.234 226.54 265.63 226.768L270.568 229.614C270.964 229.842 270.915 230.239 270.457 230.505L265.564 233.325C265.106 233.589 264.414 233.618 264.018 233.389Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M277.571 241.202L266.797 234.993C266.401 234.764 266.45 234.368 266.908 234.102L271.801 231.282C272.259 231.018 272.951 230.989 273.347 231.218L284.121 237.427C284.517 237.655 284.468 238.052 284.01 238.318L279.117 241.138C278.659 241.402 277.967 241.43 277.571 241.202Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M292.417 232.646L283.325 227.405C282.928 227.177 282.977 226.78 283.435 226.513L288.328 223.694C288.786 223.429 289.478 223.401 289.875 223.629L298.967 228.87C299.364 229.099 299.314 229.495 298.856 229.762L293.964 232.582C293.506 232.846 292.814 232.874 292.417 232.646Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M216.369 197.37L211.432 194.525C211.035 194.296 211.085 193.9 211.542 193.632L216.435 190.813C216.893 190.549 217.585 190.52 217.981 190.749L222.919 193.595C223.315 193.823 223.266 194.22 222.808 194.486L217.916 197.306C217.458 197.57 216.765 197.598 216.369 197.37Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M208.556 192.866L203.619 190.02C203.223 189.791 203.272 189.395 203.73 189.128L208.623 186.309C209.081 186.045 209.773 186.016 210.169 186.245L215.106 189.091C215.503 189.319 215.453 189.716 214.995 189.982L210.103 192.802C209.646 193.066 208.953 193.094 208.556 192.866Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M200.74 188.362L195.803 185.515C195.406 185.287 195.456 184.89 195.914 184.624L200.806 181.805C201.264 181.541 201.956 181.512 202.353 181.741L207.29 184.586C207.687 184.815 207.637 185.211 207.179 185.478L202.287 188.298C201.829 188.562 201.137 188.59 200.74 188.362Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M192.928 183.858L187.99 181.011C187.594 180.783 187.644 180.386 188.101 180.12L192.994 177.3C193.451 177.037 194.144 177.008 194.541 177.236L199.478 180.082C199.875 180.311 199.825 180.707 199.367 180.974L194.475 183.794C194.017 184.057 193.325 184.086 192.928 183.858Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M223.996 201.765L219.058 198.919C218.662 198.69 218.712 198.294 219.17 198.028L224.062 195.208C224.519 194.944 225.212 194.915 225.608 195.144L230.546 197.99C230.942 198.219 230.892 198.615 230.434 198.881L225.543 201.701C225.085 201.965 224.392 201.993 223.996 201.765Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M231.619 206.16L226.682 203.314C226.285 203.085 226.335 202.689 226.793 202.423L231.685 199.603C232.143 199.339 232.835 199.31 233.232 199.539L238.169 202.385C238.566 202.614 238.516 203.01 238.058 203.276L233.166 206.096C232.708 206.36 232.016 206.389 231.619 206.16Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M239.246 210.555L234.309 207.709C233.912 207.481 233.962 207.084 234.42 206.817L239.312 203.997C239.769 203.733 240.462 203.705 240.859 203.933L245.796 206.779C246.192 207.008 246.142 207.404 245.685 207.671L240.793 210.491C240.335 210.755 239.643 210.783 239.246 210.555Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M246.868 214.949L241.929 212.103C241.534 211.875 241.583 211.479 242.041 211.212L246.933 208.392C247.391 208.129 248.083 208.1 248.479 208.328L253.417 211.174C253.813 211.403 253.764 211.799 253.306 212.066L248.414 214.886C247.963 215.149 247.267 215.178 246.868 214.949Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M254.495 219.347L249.556 216.501C249.161 216.273 249.21 215.876 249.668 215.609L254.56 212.789C255.018 212.526 255.711 212.497 256.106 212.726L261.044 215.572C261.441 215.8 261.39 216.197 260.933 216.463L256.041 219.283C255.583 219.544 254.891 219.573 254.495 219.347Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M262.119 223.739L257.182 220.894C256.785 220.665 256.835 220.269 257.293 220.002L262.185 217.182C262.643 216.918 263.335 216.889 263.732 217.118L268.669 219.964C269.066 220.192 269.016 220.589 268.558 220.855L263.666 223.675C263.208 223.939 262.516 223.967 262.119 223.739Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M269.744 228.134L264.807 225.289C264.41 225.06 264.46 224.664 264.918 224.397L269.81 221.577C270.268 221.313 270.96 221.284 271.357 221.513L276.294 224.359C276.691 224.587 276.641 224.984 276.183 225.25L271.291 228.07C270.833 228.334 270.141 228.362 269.744 228.134Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M277.369 232.529L272.432 229.683C272.035 229.455 272.085 229.058 272.543 228.792L277.435 225.972C277.893 225.708 278.585 225.679 278.981 225.908L283.919 228.754C284.315 228.983 284.266 229.379 283.808 229.645L278.915 232.465C278.458 232.729 277.765 232.757 277.369 232.529Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M284.994 236.923L280.056 234.077C279.661 233.849 279.71 233.453 280.168 233.186L285.06 230.366C285.518 230.102 286.21 230.074 286.606 230.302L291.544 233.148C291.94 233.377 291.891 233.773 291.433 234.039L286.541 236.859C286.083 237.124 285.39 237.153 284.994 236.923Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M212.355 186.5L207.418 183.654C207.022 183.425 207.071 183.029 207.529 182.763L212.421 179.943C212.879 179.679 213.571 179.65 213.968 179.879L218.905 182.724C219.302 182.953 219.252 183.349 218.794 183.616L213.902 186.435C213.444 186.699 212.752 186.728 212.355 186.5Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M204.771 182.127L199.834 179.281C199.437 179.052 199.487 178.656 199.945 178.389L204.837 175.57C205.295 175.306 205.987 175.277 206.384 175.506L211.321 178.351C211.718 178.58 211.668 178.976 211.21 179.243L206.318 182.063C205.858 182.327 205.163 182.355 204.771 182.127Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M197.182 177.754L192.244 174.908C191.848 174.679 191.898 174.283 192.355 174.016L197.247 171.196C197.705 170.933 198.398 170.904 198.794 171.133L203.732 173.978C204.128 174.207 204.078 174.603 203.621 174.87L198.728 177.69C198.271 177.953 197.578 177.982 197.182 177.754Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M189.594 173.381L184.656 170.535C184.26 170.307 184.309 169.91 184.767 169.643L189.66 166.823C190.118 166.559 190.81 166.531 191.206 166.759L196.143 169.606C196.54 169.834 196.491 170.231 196.032 170.497L191.14 173.317C190.686 173.581 189.99 173.61 189.594 173.381Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M197.397 168.885L192.459 166.039C192.062 165.81 192.112 165.414 192.57 165.148L194.188 164.215C194.645 163.951 195.338 163.923 195.735 164.151L200.672 166.997C201.068 167.226 201.019 167.622 200.561 167.889L198.944 168.821C198.486 169.084 197.793 169.112 197.397 168.885Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M207.297 174.587L202.359 171.741C201.963 171.513 202.013 171.117 202.471 170.85L204.088 169.918C204.546 169.654 205.238 169.625 205.634 169.854L210.571 172.7C210.968 172.928 210.918 173.325 210.46 173.591L208.844 174.524C208.385 174.79 207.693 174.822 207.297 174.587Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M214.854 178.945L209.916 176.099C209.52 175.871 209.569 175.474 210.028 175.208L211.644 174.276C212.102 174.012 212.794 173.983 213.191 174.212L218.128 177.058C218.525 177.286 218.475 177.683 218.017 177.949L216.4 178.883C215.942 179.145 215.25 179.174 214.854 178.945Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M222.409 183.3L217.471 180.454C217.075 180.225 217.124 179.829 217.582 179.563L219.199 178.63C219.657 178.367 220.349 178.338 220.746 178.566L225.683 181.413C226.08 181.641 226.03 182.038 225.572 182.304L223.955 183.236C223.497 183.5 222.805 183.529 222.409 183.3Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M229.968 187.655L225.029 184.809C224.633 184.581 224.682 184.184 225.14 183.918L226.758 182.985C227.216 182.722 227.908 182.693 228.305 182.921L233.243 185.767C233.639 185.996 233.589 186.392 233.131 186.659L231.514 187.591C231.054 187.855 230.359 187.883 229.968 187.655Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M272.14 211.967L267.203 209.121C266.807 208.893 266.857 208.496 267.314 208.23L268.931 207.298C269.389 207.034 270.082 207.005 270.478 207.234L275.415 210.079C275.811 210.307 275.761 210.704 275.303 210.971L273.687 211.903C273.236 212.167 272.54 212.195 272.14 211.967Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M279.699 216.322L274.762 213.476C274.365 213.247 274.415 212.851 274.872 212.585L276.49 211.653C276.947 211.389 277.64 211.36 278.037 211.589L282.974 214.435C283.371 214.663 283.321 215.06 282.863 215.326L281.245 216.258C280.788 216.522 280.095 216.551 279.699 216.322Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M287.254 220.675L282.317 217.829C281.92 217.6 281.969 217.204 282.427 216.938L284.045 216.005C284.502 215.742 285.195 215.713 285.591 215.941L290.529 218.788C290.925 219.016 290.875 219.413 290.418 219.679L288.8 220.611C288.343 220.877 287.65 220.909 287.254 220.675Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M294.811 225.032L289.873 222.186C289.477 221.957 289.526 221.561 289.984 221.294L291.601 220.363C292.059 220.099 292.751 220.071 293.148 220.299L298.085 223.145C298.482 223.373 298.431 223.769 297.974 224.037L296.357 224.972C295.899 225.232 295.206 225.26 294.811 225.032Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M219.98 190.895L215.043 188.049C214.646 187.82 214.696 187.424 215.154 187.158L220.046 184.338C220.504 184.074 221.196 184.045 221.593 184.274L226.53 187.119C226.927 187.348 226.877 187.744 226.419 188.011L221.527 190.831C221.07 191.095 220.377 191.124 219.98 190.895Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M227.605 195.288L222.668 192.442C222.271 192.214 222.321 191.817 222.779 191.551L227.671 188.731C228.129 188.467 228.821 188.438 229.218 188.667L234.155 191.512C234.551 191.741 234.502 192.137 234.044 192.404L229.152 195.224C228.695 195.489 228.002 195.522 227.605 195.288Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M235.229 199.684L230.291 196.838C229.895 196.61 229.944 196.213 230.402 195.947L235.295 193.127C235.752 192.863 236.445 192.835 236.841 193.063L241.779 195.912C242.175 196.141 242.126 196.537 241.668 196.805L236.776 199.624C236.317 199.884 235.625 199.913 235.229 199.684Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M242.853 204.08L237.916 201.233C237.52 201.005 237.569 200.608 238.027 200.342L242.92 197.522C243.377 197.259 244.07 197.23 244.466 197.458L249.403 200.304C249.8 200.533 249.751 200.929 249.292 201.196L244.4 204.016C243.942 204.279 243.25 204.308 242.853 204.08Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M250.48 208.475L245.543 205.628C245.146 205.4 245.196 205.003 245.654 204.737L250.546 201.917C251.004 201.653 251.696 201.624 252.093 201.853L257.03 204.699C257.427 204.927 257.377 205.324 256.919 205.59L252.027 208.41C251.57 208.675 250.877 208.703 250.48 208.475Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M258.105 212.869L253.168 210.023C252.771 209.795 252.821 209.399 253.279 209.131L258.171 206.312C258.629 206.048 259.321 206.019 259.718 206.248L264.655 209.094C265.052 209.322 265.002 209.719 264.544 209.985L259.652 212.805C259.195 213.069 258.502 213.098 258.105 212.869Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M265.728 217.263L260.793 214.418C260.396 214.189 260.447 213.793 260.903 213.527L265.796 210.707C266.254 210.443 266.946 210.414 267.343 210.643L272.28 213.488C272.676 213.717 272.627 214.113 272.169 214.38L267.276 217.199C266.818 217.463 266.124 217.492 265.728 217.263Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M273.354 221.658L268.416 218.813C268.02 218.584 268.069 218.188 268.527 217.921L273.42 215.102C273.877 214.838 274.57 214.809 274.966 215.038L279.903 217.883C280.299 218.112 280.249 218.508 279.792 218.774L274.9 221.594C274.442 221.858 273.75 221.887 273.354 221.658Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M280.984 226.053L276.047 223.207C275.651 222.979 275.7 222.583 276.158 222.316L281.05 219.496C281.508 219.232 282.2 219.204 282.597 219.432L287.534 222.278C287.931 222.507 287.881 222.903 287.423 223.17L282.528 225.987C282.07 226.253 281.375 226.282 280.984 226.053Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M176.387 191.437L161.846 183.056C161.449 182.828 161.499 182.431 161.957 182.164L166.849 179.344C167.307 179.08 167.999 179.052 168.396 179.28L182.939 187.662C183.335 187.89 183.286 188.287 182.828 188.553L177.936 191.373C177.476 191.637 176.783 191.665 176.387 191.437Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M270.061 245.429L255.519 237.048C255.123 236.819 255.173 236.423 255.63 236.156L260.523 233.336C260.981 233.072 261.673 233.043 262.069 233.272L276.611 241.653C277.007 241.882 276.958 242.278 276.5 242.545L271.608 245.365C271.15 245.629 270.457 245.657 270.061 245.429Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M239.568 237.561L234.631 234.716C234.234 234.487 234.284 234.091 234.742 233.824L240.57 230.465C241.028 230.201 241.72 230.172 242.117 230.401L247.054 233.247C247.45 233.475 247.401 233.872 246.943 234.138L241.115 237.497C240.657 237.761 239.965 237.79 239.568 237.561Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M184.195 205.646L176.299 201.094C175.903 200.866 175.952 200.469 176.41 200.203L182.238 196.844C182.696 196.58 183.389 196.552 183.784 196.78L191.681 201.331C192.078 201.559 192.028 201.955 191.57 202.223L185.742 205.581C185.287 205.845 184.592 205.874 184.195 205.646Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M232.221 233.33L224.324 228.779C223.928 228.55 223.978 228.154 224.435 227.887L230.263 224.528C230.721 224.264 231.413 224.236 231.81 224.464L239.706 229.016C240.103 229.244 240.053 229.64 239.595 229.907L233.767 233.266C233.309 233.527 232.617 233.556 232.221 233.33Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M195.198 211.986L187.301 207.435C186.904 207.207 186.954 206.811 187.412 206.544L193.24 203.185C193.698 202.922 194.39 202.893 194.787 203.121L202.683 207.673C203.079 207.901 203.03 208.298 202.572 208.564L196.744 211.923C196.286 212.186 195.594 212.215 195.198 211.986Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M194.839 203.152L229.171 222.941C229.596 223.186 229.596 223.584 229.171 223.829L223.224 227.255C222.797 227.5 222.107 227.5 221.681 227.255L187.354 207.466L194.839 203.152Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M260.878 245.529L266.378 248.699C266.703 248.887 266.662 249.214 266.287 249.43L263.903 250.805C263.527 251.02 262.96 251.044 262.635 250.857L257.136 247.687C256.81 247.499 256.851 247.172 257.227 246.956L259.611 245.582C259.985 245.365 260.553 245.342 260.878 245.529Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M253.191 241.099L258.691 244.266C259.016 244.454 258.975 244.781 258.6 244.997L256.216 246.375C255.841 246.592 255.277 246.615 254.948 246.428L249.45 243.256C249.125 243.069 249.166 242.741 249.54 242.525L251.925 241.151C252.299 240.934 252.866 240.911 253.191 241.099Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M245.564 236.704L251.063 239.874C251.388 240.061 251.348 240.388 250.972 240.605L248.586 241.979C248.212 242.194 247.644 242.219 247.319 242.031L241.819 238.861C241.494 238.674 241.535 238.346 241.91 238.13L244.294 236.756C244.674 236.539 245.238 236.516 245.564 236.704Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M257.4 238.671L262.899 241.84C263.225 242.028 263.184 242.355 262.808 242.572L260.424 243.946C260.049 244.162 259.481 244.185 259.157 243.998L253.657 240.828C253.332 240.641 253.373 240.313 253.748 240.097L256.132 238.723C256.507 238.507 257.075 238.485 257.4 238.671Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M338.102 229.78L192.428 145.819C190.138 144.498 188.942 141.281 189.758 138.632L222.7 31.8529C223.516 29.2048 226.034 28.1283 228.325 29.4493L373.996 113.411C376.287 114.731 377.482 117.949 376.666 120.598L343.724 227.381C342.908 230.025 340.389 231.1 338.102 229.78Z\\\" fill=\\\"url(#paint3_radial)\\\"/>\\n        <path d=\\\"M336.725 226.041L195.434 144.535C193.243 143.271 192.097 140.193 192.878 137.66L224.373 35.5797C225.155 33.0456 227.564 32.0161 229.756 33.2792L371.044 114.784C373.235 116.047 374.381 119.125 373.6 121.658L342.105 223.739C341.327 226.274 338.917 227.305 336.725 226.041Z\\\" fill=\\\"url(#paint4_linear)\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M336.725 226.041L195.434 144.535C193.243 143.271 192.097 140.193 192.878 137.66L224.373 35.5797C225.155 33.0456 227.564 32.0161 229.756 33.2792L371.044 114.784C373.235 116.047 374.381 119.125 373.6 121.658L342.105 223.739C341.327 226.274 338.917 227.305 336.725 226.041Z\\\" fill=\\\"#09133D\\\"/>\\n        <path d=\\\"M336.725 226.041L195.434 144.535C193.243 143.271 192.097 140.193 192.878 137.66L224.373 35.5797C225.155 33.0456 227.564 32.0161 229.756 33.2792L371.044 114.784C373.235 116.047 374.381 119.125 373.6 121.658L342.105 223.739C341.327 226.274 338.917 227.305 336.725 226.041Z\\\" fill=\\\"#202235\\\"/>\\n        <path opacity=\\\"0.5\\\" d=\\\"M329.134 194.846L233.488 139.716C231.984 138.849 231.199 136.737 231.735 134.998L253.362 64.8866C253.898 63.1477 255.553 62.4416 257.056 63.3079L352.703 118.438C354.207 119.305 354.992 121.417 354.456 123.156L332.826 193.267C332.292 195.006 330.638 195.712 329.134 194.846Z\\\" fill=\\\"#09133D\\\"/>\\n        <path d=\\\"M316.209 196.538L220.562 141.408C219.058 140.542 218.273 138.429 218.809 136.691L240.44 66.5785C240.975 64.8405 242.63 64.1335 244.133 65.0006L339.779 120.129C341.284 120.997 342.069 123.109 341.533 124.848L319.903 194.959C319.367 196.698 317.714 197.405 316.209 196.538Z\\\" fill=\\\"url(#paint5_radial)\\\"/>\\n        <g opacity=\\\"0.5\\\">\\n        <path opacity=\\\"0.5\\\" d=\\\"M316.209 196.538L220.562 141.408C219.058 140.542 218.273 138.429 218.809 136.691L240.44 66.5785C240.975 64.8405 242.63 64.1335 244.133 65.0006L339.779 120.129C341.284 120.997 342.069 123.109 341.533 124.848L319.903 194.959C319.367 196.698 317.714 197.405 316.209 196.538Z\\\" fill=\\\"#09133D\\\"/>\\n        </g>\\n        <path d=\\\"M339.782 120.129L244.135 65.0005C243.192 64.4537 242.191 64.5318 241.443 65.0919C241.928 65.0775 242.407 65.1998 242.824 65.4449L338.472 120.575C339.976 121.441 340.761 123.554 340.226 125.292L318.595 195.404C318.395 196.053 318.039 196.558 317.593 196.888C318.619 196.858 319.533 196.164 319.905 194.956L341.535 124.845C342.071 123.109 341.287 121 339.782 120.129Z\\\" fill=\\\"#F6F6FA\\\"/>\\n        <path d=\\\"M195.577 253.791C194.258 253.791 192.994 253.518 192.032 252.962L153.711 230.875C152.694 230.288 152.137 229.452 152.137 228.517C152.137 227.434 152.907 226.367 154.249 225.593L173.974 214.223C176.385 212.835 179.921 212.699 182.034 213.91L220.354 235.998C221.371 236.583 221.928 237.421 221.929 238.355C221.929 239.439 221.159 240.505 219.816 241.279L200.09 252.65C198.78 253.405 197.14 253.791 195.577 253.791ZM178.506 214.203C177.121 214.203 175.65 214.536 174.529 215.181L154.804 226.551C153.812 227.122 153.239 227.84 153.239 228.518C153.239 229.196 153.795 229.65 154.262 229.918L192.583 252.006C194.321 253.006 197.502 252.866 199.532 251.694L219.258 240.324C220.25 239.752 220.818 239.036 220.818 238.356C220.818 237.677 220.262 237.225 219.796 236.957L181.478 214.871C180.7 214.426 179.632 214.203 178.506 214.203V214.203Z\\\" fill=\\\"#161623\\\"/>\\n        <path d=\\\"M267.43 101.784L261.517 98.3756C260.97 98.0632 260.675 97.2992 260.86 96.6782C261.046 96.0533 261.643 95.8095 262.19 96.1259L268.103 99.5341C268.651 99.8465 268.947 100.61 268.761 101.232C268.574 101.852 267.979 102.096 267.43 101.784Z\\\" fill=\\\"#8A85B8\\\"/>\\n        <path d=\\\"M281.514 109.902L272.795 104.876C272.247 104.563 271.952 103.8 272.137 103.178C272.324 102.557 272.92 102.31 273.468 102.626L282.187 107.652C282.735 107.968 283.03 108.728 282.845 109.349C282.658 109.97 282.063 110.22 281.514 109.902Z\\\" fill=\\\"#8A85B8\\\"/>\\n        <path d=\\\"M255.504 128.066L249.592 124.657C249.044 124.344 248.749 123.581 248.934 122.959C249.121 122.338 249.717 122.091 250.264 122.407L256.178 125.815C256.726 126.128 257.021 126.892 256.835 127.513C256.648 128.135 256.053 128.382 255.504 128.066Z\\\" fill=\\\"#8A85B8\\\"/>\\n        <path d=\\\"M268.061 135.302L259.342 130.277C258.794 129.965 258.499 129.201 258.684 128.58C258.87 127.955 259.467 127.711 260.015 128.027L268.734 133.053C269.282 133.365 269.577 134.129 269.391 134.75C269.205 135.373 268.609 135.619 268.061 135.302Z\\\" fill=\\\"#8A85B8\\\"/>\\n        <path d=\\\"M249.717 97.0968L246.023 94.9674C245.476 94.6549 245.181 93.8918 245.366 93.27C245.552 92.6451 246.148 92.4013 246.696 92.7177L250.39 94.8471C250.938 95.1595 251.234 95.9235 251.047 96.5445C250.858 97.1679 250.266 97.4155 249.717 97.0968Z\\\" fill=\\\"#8A85B8\\\"/>\\n        <path d=\\\"M260.832 109.032L249.545 102.527C248.997 102.214 248.702 101.45 248.887 100.829C249.074 100.204 249.67 99.9607 250.218 100.277L261.504 106.783C262.052 107.096 262.347 107.86 262.161 108.481C261.975 109.101 261.38 109.348 260.832 109.032Z\\\" fill=\\\"#8A85B8\\\"/>\\n        <path d=\\\"M250.42 114.084L246.727 111.954C246.179 111.642 245.883 110.879 246.069 110.257C246.255 109.632 246.852 109.388 247.399 109.705L251.093 111.834C251.641 112.146 251.936 112.91 251.75 113.531C251.564 114.152 250.969 114.4 250.42 114.084Z\\\" fill=\\\"#8A85B8\\\"/>\\n        <path d=\\\"M269.421 147.139L259.555 141.452C259.007 141.14 258.712 140.376 258.897 139.755C259.083 139.134 259.68 138.886 260.227 139.203L270.093 144.889C270.641 145.202 270.936 145.966 270.751 146.587C270.565 147.208 269.969 147.455 269.421 147.139Z\\\" fill=\\\"#8A85B8\\\"/>\\n        <path d=\\\"M246.281 122.749L243.91 121.383C243.362 121.067 243.067 120.307 243.253 119.686C243.438 119.061 244.035 118.817 244.583 119.133L246.955 120.499C247.502 120.816 247.797 121.576 247.611 122.197C247.425 122.819 246.829 123.066 246.281 122.749Z\\\" fill=\\\"#8A85B8\\\"/>\\n        <path d=\\\"M244.038 132.508L241.093 130.81C240.545 130.498 240.25 129.735 240.437 129.113C240.622 128.492 241.219 128.244 241.767 128.561L244.711 130.258C245.259 130.571 245.554 131.335 245.369 131.956C245.182 132.577 244.587 132.824 244.038 132.508Z\\\" fill=\\\"#8A85B8\\\"/>\\n        <path d=\\\"M255.494 139.111L247.728 134.636C247.181 134.324 246.886 133.56 247.071 132.939C247.257 132.318 247.854 132.07 248.401 132.386L256.165 136.861C256.713 137.173 257.008 137.937 256.822 138.558C256.638 139.18 256.043 139.427 255.494 139.111Z\\\" fill=\\\"#8A85B8\\\"/>\\n        <path d=\\\"M245.267 138.743L239.685 135.525C239.138 135.213 238.843 134.449 239.028 133.828C239.214 133.203 239.81 132.959 240.358 133.276L245.94 136.493C246.487 136.806 246.782 137.569 246.597 138.191C246.411 138.811 245.815 139.059 245.267 138.743Z\\\" fill=\\\"#8A85B8\\\"/>\\n        <path d=\\\"M277.889 152.041L274.304 149.975C273.756 149.663 273.461 148.899 273.648 148.278C273.833 147.653 274.43 147.409 274.978 147.726L278.562 149.792C279.11 150.108 279.405 150.868 279.219 151.489C279.033 152.11 278.438 152.358 277.889 152.041Z\\\" fill=\\\"#8A85B8\\\"/>\\n        <path d=\\\"M264.163 122.004L254.296 116.317C253.749 116.005 253.454 115.241 253.64 114.62C253.825 113.995 254.422 113.751 254.97 114.068L264.836 119.754C265.384 120.067 265.679 120.83 265.493 121.452C265.307 122.073 264.712 122.32 264.163 122.004Z\\\" fill=\\\"#8A85B8\\\"/>\\n        <path d=\\\"M265.334 117.152L248.139 107.241C247.591 106.929 247.296 106.165 247.481 105.543C247.667 104.922 248.264 104.675 248.811 104.991L266.008 114.903C266.556 115.215 266.851 115.978 266.665 116.6C266.477 117.221 265.882 117.469 265.334 117.152Z\\\" fill=\\\"#7574AD\\\"/>\\n        <path d=\\\"M255.186 122.356L245.32 116.669C244.772 116.356 244.477 115.592 244.663 114.971C244.849 114.346 245.445 114.103 245.993 114.419L255.858 120.106C256.406 120.418 256.701 121.182 256.516 121.803C256.33 122.424 255.735 122.672 255.186 122.356Z\\\" fill=\\\"#7574AD\\\"/>\\n        <path d=\\\"M271.647 126.318L268.062 124.251C267.515 123.938 267.22 123.175 267.405 122.553C267.59 121.928 268.188 121.685 268.735 122.001L272.32 124.067C272.868 124.379 273.163 125.143 272.978 125.764C272.791 126.39 272.196 126.633 271.647 126.318Z\\\" fill=\\\"#7574AD\\\"/>\\n        <path d=\\\"M308.111 125.23L286.883 112.995C286.335 112.683 286.04 111.919 286.225 111.298C286.411 110.673 287.008 110.429 287.556 110.745L308.784 122.981C309.331 123.297 309.626 124.057 309.441 124.678C309.255 125.297 308.659 125.547 308.111 125.23Z\\\" fill=\\\"#7574AD\\\"/>\\n        <path d=\\\"M254.361 132.933L242.502 126.097C241.954 125.785 241.659 125.021 241.845 124.4C242.03 123.775 242.627 123.531 243.175 123.847L255.034 130.686C255.581 130.999 255.877 131.763 255.691 132.385C255.505 133.002 254.91 133.249 254.361 132.933Z\\\" fill=\\\"{$color}\\\"/>\\n        <path d=\\\"M256.151 95.2813L247.431 90.2562C246.883 89.9438 246.588 89.1798 246.775 88.5588C246.96 87.9339 247.557 87.6902 248.105 88.0058L256.823 93.0347C257.37 93.3472 257.665 94.1111 257.48 94.7321C257.294 95.35 256.699 95.5976 256.151 95.2813Z\\\" fill=\\\"{$color}\\\"/>\\n        <path d=\\\"M243.444 143.218L233.346 137.397C232.798 137.08 232.502 136.321 232.689 135.699C232.874 135.074 233.471 134.831 234.019 135.147L244.117 140.967C244.664 141.284 244.959 142.044 244.774 142.665C244.587 143.286 243.992 143.533 243.444 143.218Z\\\" fill=\\\"#7574AD\\\"/>\\n        <path d=\\\"M310.494 114.331L306.171 111.84C305.771 111.605 305.556 111.053 305.691 110.599C305.827 110.145 306.262 109.964 306.663 110.195L310.985 112.687C311.386 112.921 311.601 113.473 311.466 113.928C311.33 114.382 310.894 114.562 310.494 114.331Z\\\" fill=\\\"#F6F6FA\\\"/>\\n        <path d=\\\"M318.738 119.083L314.416 116.591C314.014 116.357 313.799 115.805 313.935 115.351C314.071 114.897 314.506 114.716 314.907 114.947L319.229 117.438C319.63 117.672 319.845 118.225 319.71 118.679C319.574 119.133 319.138 119.314 318.738 119.083Z\\\" fill=\\\"#F6F6FA\\\"/>\\n        <path d=\\\"M326.982 123.835L322.659 121.344C322.259 121.11 322.043 120.557 322.18 120.103C322.315 119.649 322.75 119.468 323.151 119.7L327.473 122.191C327.875 122.425 328.09 122.977 327.954 123.431C327.818 123.886 327.382 124.066 326.982 123.835Z\\\" fill=\\\"#F6F6FA\\\"/>\\n        <path d=\\\"M331.033 126.174L330.904 126.096C330.503 125.861 330.288 125.309 330.423 124.855C330.559 124.401 330.994 124.22 331.395 124.451L331.525 124.53C331.926 124.764 332.141 125.316 332.005 125.77C331.869 126.224 331.435 126.405 331.033 126.174Z\\\" fill=\\\"{$color}\\\"/>\\n        <path d=\\\"M107.952 176.671C105.176 176.674 102.448 175.946 100.042 174.562L71.0876 157.871C70.4779 157.52 69.9715 157.014 69.6194 156.406C69.2674 155.798 69.082 155.107 69.082 154.405C69.082 153.702 69.2674 153.012 69.6194 152.403C69.9715 151.795 70.4779 151.29 71.0876 150.939L100.039 134.25C102.445 132.868 105.173 132.14 107.95 132.14C110.726 132.14 113.454 132.868 115.861 134.25L144.812 150.939C145.422 151.29 145.928 151.796 146.28 152.404C146.632 153.012 146.817 153.703 146.817 154.405C146.817 155.108 146.632 155.798 146.28 156.407C145.928 157.015 145.422 157.52 144.812 157.871L115.861 174.56C113.456 175.944 110.729 176.672 107.952 176.671ZM100.983 172.933C103.104 174.15 105.507 174.791 107.953 174.791C110.399 174.791 112.802 174.15 114.923 172.933L143.874 156.245C144.196 156.058 144.463 155.791 144.649 155.468C144.835 155.146 144.933 154.781 144.933 154.409C144.933 154.038 144.835 153.672 144.649 153.35C144.463 153.028 144.196 152.76 143.874 152.574L114.923 135.884C112.802 134.667 110.399 134.026 107.953 134.026C105.507 134.026 103.103 134.667 100.983 135.884L72.032 152.573C71.7097 152.759 71.4422 153.027 71.2562 153.349C71.0702 153.671 70.9723 154.037 70.9723 154.409C70.9723 154.78 71.0702 155.146 71.2562 155.468C71.4422 155.79 71.7097 156.058 72.032 156.244L100.983 172.933Z\\\" fill=\\\"{$color}\\\"/>\\n        <path opacity=\\\"0.6\\\" d=\\\"M107.807 166.263C118.79 166.263 127.694 161.131 127.694 154.8C127.694 148.469 118.79 143.337 107.807 143.337C96.8237 143.337 87.9199 148.469 87.9199 154.8C87.9199 161.131 96.8237 166.263 107.807 166.263Z\\\" fill=\\\"#030830\\\"/>\\n        <path d=\\\"M137.286 73.1023H80.6406L85.9097 134.33C85.9097 137.731 88.1601 141.131 92.6624 143.725C101.665 148.915 116.262 148.915 125.265 143.725C129.768 141.13 132.018 137.73 132.018 134.329L137.286 73.1023Z\\\" fill=\\\"url(#paint6_radial)\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M137.286 73.1023H80.6406L81.5076 83.1752C82.8057 84.8367 84.5522 86.4295 86.7579 87.8902C97.5817 95.0581 115.441 96.4399 127.628 91.2773L125.742 136.059C125.664 138.012 124.985 139.909 123.718 141.398C121.883 143.554 118.348 146.091 111.553 147.525C116.56 147.201 121.423 145.94 125.264 143.726C129.766 141.131 132.016 137.731 132.016 134.33L136.242 85.2265L137.286 73.1023Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M108.963 89.4268C124.606 89.4268 137.286 82.1181 137.286 73.1023C137.286 64.0866 124.606 56.7778 108.963 56.7778C93.3212 56.7778 80.6406 64.0866 80.6406 73.1023C80.6406 82.1181 93.3212 89.4268 108.963 89.4268Z\\\" fill=\\\"#09133D\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M108.963 81.4094C122.436 81.4094 133.358 75.1142 133.358 67.3486C133.358 59.5831 122.436 53.2878 108.963 53.2878C95.4903 53.2878 84.5684 59.5831 84.5684 67.3486C84.5684 75.1142 95.4903 81.4094 108.963 81.4094Z\\\" fill=\\\"#09133D\\\"/>\\n        <path d=\\\"M138.967 72.3347L138.962 72.2855C138.962 72.2573 138.956 72.2292 138.953 72.2019L138.41 66.7197L138.386 66.7815C138.143 62.632 135.28 58.5239 129.785 55.3563C118.283 48.7282 99.6415 48.7282 88.1416 55.3563C82.5079 58.6043 79.6417 62.8398 79.5283 67.0955L79.522 67.0814L79.004 71.9628C78.9892 72.0902 78.9727 72.2167 78.9633 72.344L78.9547 72.4222H78.9602C78.6472 77.0724 81.569 81.7812 87.7293 85.3323C99.4568 92.0916 118.471 92.0924 130.2 85.3323C136.399 81.7593 139.319 77.013 138.967 72.3347Z\\\" fill=\\\"url(#paint7_linear)\\\"/>\\n        <path d=\\\"M108.963 81.4094C122.436 81.4094 133.358 75.1142 133.358 67.3486C133.358 59.5831 122.436 53.2878 108.963 53.2878C95.4903 53.2878 84.5684 59.5831 84.5684 67.3486C84.5684 75.1142 95.4903 81.4094 108.963 81.4094Z\\\" fill=\\\"url(#paint8_linear)\\\"/>\\n        <path d=\\\"M107.807 81.4094C121.28 81.4094 132.202 75.1142 132.202 67.3486C132.202 59.5831 121.28 53.2878 107.807 53.2878C94.3341 53.2878 83.4121 59.5831 83.4121 67.3486C83.4121 75.1142 94.3341 81.4094 107.807 81.4094Z\\\" fill=\\\"url(#paint9_linear)\\\"/>\\n        <path opacity=\\\"0.4\\\" d=\\\"M94.608 59.5002C104.135 54.0087 119.58 54.0087 129.108 59.5002C129.229 59.5705 129.331 59.6471 129.449 59.7182C128.452 58.8391 127.368 58.0643 126.213 57.406C116.687 51.9145 101.24 51.9145 91.7137 57.406C82.3085 62.8264 82.2068 71.5674 91.3733 77.073C85.2529 71.6252 86.3249 64.2738 94.608 59.5002Z\\\" fill=\\\"#09133D\\\"/>\\n        <path d=\\\"M91.7129 59.8463C101.24 54.3548 116.686 54.3548 126.212 59.8463C130.438 62.2812 132.785 65.387 133.262 68.5687C133.862 64.5754 131.515 60.4619 126.212 57.406C116.686 51.9145 101.24 51.9145 91.7129 57.406C86.4109 60.4626 84.0643 64.5754 84.6637 68.5687C85.1418 65.3862 87.4892 62.2804 91.7129 59.8463Z\\\" fill=\\\"url(#paint10_linear)\\\"/>\\n        <path d=\\\"M129.968 55.4866C118.485 48.7328 99.7724 48.5679 88.1724 55.1194C76.5725 61.6709 76.4778 72.4554 87.9612 79.2092C99.4446 85.963 118.156 86.1278 129.756 79.5771C141.356 73.0264 141.451 62.2404 129.968 55.4866ZM126.213 77.2907C123.03 79.1249 119.182 80.3317 115.12 80.9403L114.677 79.4881C114.59 79.203 114.414 78.9533 114.175 78.7755C113.935 78.5978 113.645 78.5015 113.347 78.5007H104.583C104.284 78.5008 103.993 78.5968 103.752 78.7746C103.512 78.9523 103.335 79.2025 103.248 79.4881L102.806 80.9403C98.7435 80.3317 94.8961 79.1241 91.7139 77.29C82.1866 71.7993 82.1866 62.8965 91.7139 57.4058C101.241 51.9152 116.687 51.9144 126.213 57.4058C135.74 62.8973 135.741 71.7993 126.213 77.2907Z\\\" fill=\\\"url(#paint11_radial)\\\"/>\\n        <path d=\\\"M126.211 56.3647C116.685 50.8739 101.239 50.8732 91.7116 56.3647C86.7187 59.2425 84.3479 63.0569 84.5912 66.8267C84.8095 63.4045 87.1804 60.0182 91.7116 57.406C101.239 51.9144 116.685 51.9144 126.211 57.406C130.749 60.0189 133.116 63.4045 133.331 66.8275C133.578 63.0576 131.206 59.2425 126.211 56.3647Z\\\" fill=\\\"#F6F6FA\\\"/>\\n        <path d=\\\"M129.755 78.536C118.155 85.0867 99.4428 84.9218 87.9593 78.1681C82.4946 74.9544 79.6582 70.8253 79.4305 66.6782C79.2044 71.1714 82.0384 75.727 87.9593 79.2093C99.4428 85.9631 118.155 86.1279 129.755 79.5773C135.834 76.1402 138.748 71.5471 138.496 66.9766C138.283 71.1971 135.373 75.363 129.755 78.536Z\\\" fill=\\\"#F6F6FA\\\"/>\\n        <path d=\\\"M112.192 80.2842H105.734C105.706 80.2842 105.684 80.3069 105.684 80.335V81.6465C105.684 81.6745 105.706 81.6973 105.734 81.6973H112.192C112.22 81.6973 112.243 81.6745 112.243 81.6465V80.335C112.243 80.3069 112.22 80.2842 112.192 80.2842Z\\\" fill=\\\"#1C226D\\\"/>\\n        <path d=\\\"M111.58 80.2842H106.345C106.169 80.2842 106.001 80.3537 105.877 80.4775C105.753 80.6013 105.684 80.7692 105.684 80.9442V81.0372C105.687 81.0972 105.699 81.1563 105.719 81.213C105.755 81.0748 105.837 80.9525 105.95 80.8649C106.063 80.7772 106.202 80.7291 106.345 80.7279H111.58C111.723 80.7292 111.862 80.7774 111.975 80.865C112.088 80.9527 112.169 81.0749 112.206 81.213C112.226 81.1562 112.238 81.0971 112.241 81.0372V80.9442C112.241 80.7692 112.172 80.6013 112.048 80.4775C111.924 80.3537 111.756 80.2842 111.58 80.2842Z\\\" fill=\\\"url(#paint12_linear)\\\"/>\\n        <path d=\\\"M109.765 128.041C109.456 129.199 108.7 130.187 107.661 130.789C106.622 131.39 105.387 131.555 104.227 131.247C103.067 130.939 102.076 130.183 101.474 129.147C100.872 128.11 100.707 126.877 101.015 125.718C101.657 123.307 103.935 122.624 106.351 123.266C108.766 123.907 110.405 125.629 109.765 128.041Z\\\" fill=\\\"{$color}\\\"/>\\n        <path d=\\\"M113.327 123.281C112.417 124.17 111.251 124.055 110.478 123.265C109.705 122.474 109.617 121.312 110.526 120.42C111.435 119.528 113.169 119.092 113.943 119.883C114.717 120.675 114.239 122.392 113.327 123.281Z\\\" fill=\\\"{$color}\\\"/>\\n        <path d=\\\"M108.596 119.502C108.373 120.751 107.358 121.336 106.268 121.142C105.178 120.947 104.428 120.048 104.651 118.798C104.874 117.549 106.028 116.184 107.118 116.377C108.208 116.57 108.82 118.249 108.596 119.502Z\\\" fill=\\\"{$color}\\\"/>\\n        <path d=\\\"M102.761 118.923C103.245 120.095 102.702 121.135 101.678 121.556C100.655 121.976 99.5392 121.621 99.0548 120.445C98.5705 119.268 98.8115 117.502 99.8373 117.081C100.863 116.661 102.275 117.747 102.761 118.923Z\\\" fill=\\\"{$color}\\\"/>\\n        <path opacity=\\\"0.5\\\" d=\\\"M110.819 80.9903C110.819 80.9903 126.656 75.6925 120.244 57.5261C113.831 39.3596 101.346 33.8236 106.376 19.2942C106.376 19.2942 98.4943 31.0591 105.86 46.9766C113.225 62.8941 114.84 61.0647 114.754 68.6778C114.651 77.7211 107.332 80.9942 107.332 80.9942L110.819 80.9903Z\\\" fill=\\\"white\\\"/>\\n        <path opacity=\\\"0.5\\\" d=\\\"M112.243 21.8183C112.243 21.8183 110.594 10.951 120.805 0C120.805 0 111.776 20.1334 114.729 30.0743C114.729 30.0743 112.34 23.7548 112.243 21.8183Z\\\" fill=\\\"white\\\"/>\\n        <defs>\\n        <radialGradient id=\\\"paint0_radial\\\" cx=\\\"0\\\" cy=\\\"0\\\" r=\\\"1\\\" gradientUnits=\\\"userSpaceOnUse\\\" gradientTransform=\\\"translate(228.091 23.3111) scale(226.103 225.724)\\\">\\n        <stop stop-color=\\\"#8A85B8\\\"/>\\n        <stop offset=\\\"0.47\\\" stop-color=\\\"#7574AD\\\"/>\\n        <stop offset=\\\"0.59\\\" stop-color=\\\"#54537F\\\"/>\\n        <stop offset=\\\"0.68\\\" stop-color=\\\"#3B395B\\\"/>\\n        <stop offset=\\\"0.74\\\" stop-color=\\\"#383E5C\\\"/>\\n        </radialGradient>\\n        <radialGradient id=\\\"paint1_radial\\\" cx=\\\"0\\\" cy=\\\"0\\\" r=\\\"1\\\" gradientUnits=\\\"userSpaceOnUse\\\" gradientTransform=\\\"translate(289092 377720) scale(795671 455533)\\\">\\n        <stop stop-color=\\\"#8A85B8\\\"/>\\n        <stop offset=\\\"0.47\\\" stop-color=\\\"#7574AD\\\"/>\\n        <stop offset=\\\"0.59\\\" stop-color=\\\"#54537F\\\"/>\\n        <stop offset=\\\"0.68\\\" stop-color=\\\"#3B395B\\\"/>\\n        <stop offset=\\\"0.74\\\" stop-color=\\\"#383E5C\\\"/>\\n        </radialGradient>\\n        <radialGradient id=\\\"paint2_radial\\\" cx=\\\"0\\\" cy=\\\"0\\\" r=\\\"1\\\" gradientUnits=\\\"userSpaceOnUse\\\" gradientTransform=\\\"translate(181.5 200.26) scale(221.712 221.341)\\\">\\n        <stop stop-color=\\\"#F6F6FA\\\"/>\\n        <stop offset=\\\"0.29\\\" stop-color=\\\"#837DB2\\\"/>\\n        <stop offset=\\\"0.35\\\" stop-color=\\\"#6D6898\\\"/>\\n        <stop offset=\\\"0.44\\\" stop-color=\\\"#524F77\\\"/>\\n        <stop offset=\\\"0.51\\\" stop-color=\\\"#413F62\\\"/>\\n        <stop offset=\\\"0.56\\\" stop-color=\\\"#3B395B\\\"/>\\n        <stop offset=\\\"0.88\\\" stop-color=\\\"#393C5C\\\"/>\\n        <stop offset=\\\"0.95\\\" stop-color=\\\"#383E5C\\\"/>\\n        </radialGradient>\\n        <radialGradient id=\\\"paint3_radial\\\" cx=\\\"0\\\" cy=\\\"0\\\" r=\\\"1\\\" gradientUnits=\\\"userSpaceOnUse\\\" gradientTransform=\\\"translate(402057 181578) scale(541685 582261)\\\">\\n        <stop stop-color=\\\"#F6F6FA\\\"/>\\n        <stop offset=\\\"0.29\\\" stop-color=\\\"#837DB2\\\"/>\\n        <stop offset=\\\"0.35\\\" stop-color=\\\"#6D6898\\\"/>\\n        <stop offset=\\\"0.44\\\" stop-color=\\\"#524F77\\\"/>\\n        <stop offset=\\\"0.51\\\" stop-color=\\\"#413F62\\\"/>\\n        <stop offset=\\\"0.56\\\" stop-color=\\\"#3B395B\\\"/>\\n        <stop offset=\\\"0.88\\\" stop-color=\\\"#393C5C\\\"/>\\n        <stop offset=\\\"0.95\\\" stop-color=\\\"#383E5C\\\"/>\\n        </radialGradient>\\n        <linearGradient id=\\\"paint4_linear\\\" x1=\\\"192.633\\\" y1=\\\"129.659\\\" x2=\\\"373.848\\\" y2=\\\"129.659\\\" gradientUnits=\\\"userSpaceOnUse\\\">\\n        <stop stop-color=\\\"#3C3689\\\"/>\\n        <stop offset=\\\"1\\\" stop-color=\\\"#50418E\\\"/>\\n        </linearGradient>\\n        <radialGradient id=\\\"paint5_radial\\\" cx=\\\"0\\\" cy=\\\"0\\\" r=\\\"1\\\" gradientUnits=\\\"userSpaceOnUse\\\" gradientTransform=\\\"translate(134245 37628.9) scale(553950 595440)\\\">\\n        <stop stop-color=\\\"#F6F6FA\\\"/>\\n        <stop offset=\\\"0.29\\\" stop-color=\\\"#837DB2\\\"/>\\n        <stop offset=\\\"0.35\\\" stop-color=\\\"#6D6898\\\"/>\\n        <stop offset=\\\"0.44\\\" stop-color=\\\"#524F77\\\"/>\\n        <stop offset=\\\"0.51\\\" stop-color=\\\"#413F62\\\"/>\\n        <stop offset=\\\"0.56\\\" stop-color=\\\"#3B395B\\\"/>\\n        <stop offset=\\\"0.88\\\" stop-color=\\\"#393C5C\\\"/>\\n        <stop offset=\\\"0.95\\\" stop-color=\\\"#383E5C\\\"/>\\n        </radialGradient>\\n        <radialGradient id=\\\"paint6_radial\\\" cx=\\\"0\\\" cy=\\\"0\\\" r=\\\"1\\\" gradientUnits=\\\"userSpaceOnUse\\\" gradientTransform=\\\"translate(55081.2 86976.1) scale(121207 159445)\\\">\\n        <stop stop-color=\\\"#F6F6FA\\\"/>\\n        <stop offset=\\\"0.29\\\" stop-color=\\\"#837DB2\\\"/>\\n        <stop offset=\\\"0.35\\\" stop-color=\\\"#6D6898\\\"/>\\n        <stop offset=\\\"0.44\\\" stop-color=\\\"#524F77\\\"/>\\n        <stop offset=\\\"0.51\\\" stop-color=\\\"#413F62\\\"/>\\n        <stop offset=\\\"0.56\\\" stop-color=\\\"#3B395B\\\"/>\\n        <stop offset=\\\"0.88\\\" stop-color=\\\"#393C5C\\\"/>\\n        <stop offset=\\\"0.95\\\" stop-color=\\\"#383E5C\\\"/>\\n        </radialGradient>\\n        <linearGradient id=\\\"paint7_linear\\\" x1=\\\"78.9383\\\" y1=\\\"70.3951\\\" x2=\\\"138.993\\\" y2=\\\"70.3951\\\" gradientUnits=\\\"userSpaceOnUse\\\">\\n        <stop stop-color=\\\"#8A85B8\\\"/>\\n        <stop offset=\\\"0.08\\\" stop-color=\\\"#8580B4\\\"/>\\n        <stop offset=\\\"0.27\\\" stop-color=\\\"#837DB2\\\"/>\\n        <stop offset=\\\"0.29\\\" stop-color=\\\"#7B76A9\\\"/>\\n        <stop offset=\\\"0.38\\\" stop-color=\\\"#64608D\\\"/>\\n        <stop offset=\\\"0.48\\\" stop-color=\\\"#524F77\\\"/>\\n        <stop offset=\\\"0.59\\\" stop-color=\\\"#454267\\\"/>\\n        <stop offset=\\\"0.71\\\" stop-color=\\\"#3D3B5E\\\"/>\\n        <stop offset=\\\"0.88\\\" stop-color=\\\"#3B395B\\\"/>\\n        </linearGradient>\\n        <linearGradient id=\\\"paint8_linear\\\" x1=\\\"84.5684\\\" y1=\\\"67.3486\\\" x2=\\\"133.358\\\" y2=\\\"67.3486\\\" gradientUnits=\\\"userSpaceOnUse\\\">\\n        <stop offset=\\\"0.16\\\" stop-color=\\\"#383E5C\\\"/>\\n        <stop offset=\\\"0.55\\\" stop-color=\\\"#393F5E\\\"/>\\n        <stop offset=\\\"0.7\\\" stop-color=\\\"#3F4465\\\"/>\\n        <stop offset=\\\"0.8\\\" stop-color=\\\"#474C70\\\"/>\\n        <stop offset=\\\"0.88\\\" stop-color=\\\"#545781\\\"/>\\n        <stop offset=\\\"0.95\\\" stop-color=\\\"#646597\\\"/>\\n        <stop offset=\\\"1\\\" stop-color=\\\"#7574AD\\\"/>\\n        </linearGradient>\\n        <linearGradient id=\\\"paint9_linear\\\" x1=\\\"83.4121\\\" y1=\\\"67.3486\\\" x2=\\\"132.202\\\" y2=\\\"67.3486\\\" gradientUnits=\\\"userSpaceOnUse\\\">\\n        <stop stop-color=\\\"#383E5C\\\"/>\\n        <stop offset=\\\"1\\\" stop-color=\\\"#7574AD\\\"/>\\n        </linearGradient>\\n        <linearGradient id=\\\"paint10_linear\\\" x1=\\\"52810.3\\\" y1=\\\"11972.4\\\" x2=\\\"91161.5\\\" y2=\\\"11972.4\\\" gradientUnits=\\\"userSpaceOnUse\\\">\\n        <stop stop-color=\\\"#383E5C\\\"/>\\n        <stop offset=\\\"1\\\" stop-color=\\\"#7574AD\\\"/>\\n        </linearGradient>\\n        <radialGradient id=\\\"paint11_radial\\\" cx=\\\"0\\\" cy=\\\"0\\\" r=\\\"1\\\" gradientUnits=\\\"userSpaceOnUse\\\" gradientTransform=\\\"translate(54047.9 23356.8) scale(82736.6 47693.1)\\\">\\n        <stop stop-color=\\\"#F6F6FA\\\"/>\\n        <stop offset=\\\"0.29\\\" stop-color=\\\"#837DB2\\\"/>\\n        <stop offset=\\\"0.35\\\" stop-color=\\\"#6D6898\\\"/>\\n        <stop offset=\\\"0.44\\\" stop-color=\\\"#524F77\\\"/>\\n        <stop offset=\\\"0.51\\\" stop-color=\\\"#413F62\\\"/>\\n        <stop offset=\\\"0.56\\\" stop-color=\\\"#3B395B\\\"/>\\n        <stop offset=\\\"0.88\\\" stop-color=\\\"#393C5C\\\"/>\\n        <stop offset=\\\"0.95\\\" stop-color=\\\"#383E5C\\\"/>\\n        </radialGradient>\\n        <linearGradient id=\\\"paint12_linear\\\" x1=\\\"105.103\\\" y1=\\\"80.7482\\\" x2=\\\"113.614\\\" y2=\\\"80.7482\\\" gradientUnits=\\\"userSpaceOnUse\\\">\\n        <stop stop-color=\\\"#1D225B\\\"/>\\n        <stop offset=\\\"0.24\\\" stop-color=\\\"#1F235D\\\"/>\\n        <stop offset=\\\"0.37\\\" stop-color=\\\"#272764\\\"/>\\n        <stop offset=\\\"0.47\\\" stop-color=\\\"#352F70\\\"/>\\n        <stop offset=\\\"0.56\\\" stop-color=\\\"#473980\\\"/>\\n        <stop offset=\\\"0.61\\\" stop-color=\\\"#57418E\\\"/>\\n        <stop offset=\\\"0.65\\\" stop-color=\\\"#715184\\\"/>\\n        <stop offset=\\\"0.72\\\" stop-color=\\\"#966876\\\"/>\\n        <stop offset=\\\"0.79\\\" stop-color=\\\"#B37A6A\\\"/>\\n        <stop offset=\\\"0.86\\\" stop-color=\\\"#C78762\\\"/>\\n        <stop offset=\\\"0.93\\\" stop-color=\\\"#D48E5E\\\"/>\\n        <stop offset=\\\"1\\\" stop-color=\\\"#D8915C\\\"/>\\n        </linearGradient>\\n        </defs>\\n        </svg>\\n        \\n</div>\\n\\n<style>\\n    .prog-icon-container{\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n        box-sizing: border-box;\\n        padding: 0;\\n    }\\n    .prog-icon-container > svg{\\n        width: 100%;\\n        height: auto;\\n    }\\n</style>\"],\"names\":[],\"mappings\":\"AAqVI,gDAAoB,CAAC,AACjB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,CAAC,AACd,CAAC,AACD,kCAAoB,CAAG,iBAAG,CAAC,AACvB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,AAChB,CAAC\"}"
};

const ProgIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $color, $$unsubscribe_color;
	$$unsubscribe_color = subscribe(color, value => $color = value);
	$$result.css.add(css$7);
	$$unsubscribe_color();

	return `

<div class="${"prog-icon-container svelte-b2rg4y"}"><svg viewBox="${"0 0 444 329"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-b2rg4y"}"><path d="${"M427.488 281.99C426.251 281.991 425.035 281.668 423.963 281.053L412.079 274.202C411.744 274.009 411.465 273.732 411.272 273.398C411.078 273.064 410.977 272.685 410.977 272.299C410.977 271.914 411.078 271.535 411.272 271.201C411.465 270.867 411.744 270.589 412.079 270.397L423.963 263.546C425.035 262.931 426.25 262.607 427.487 262.607C428.724 262.607 429.939 262.931 431.012 263.546L442.897 270.397C443.232 270.589 443.51 270.867 443.703 271.201C443.897 271.535 443.999 271.914 443.999 272.299C443.999 272.685 443.897 273.064 443.703 273.398C443.51 273.732 443.232 274.009 442.897 274.202L431.013 281.053C429.941 281.668 428.725 281.992 427.488 281.99V281.99ZM427.488 264.485C426.581 264.484 425.691 264.721 424.905 265.173L413.021 272.023C412.974 272.05 412.934 272.09 412.906 272.138C412.879 272.186 412.864 272.241 412.864 272.296C412.864 272.351 412.879 272.406 412.906 272.454C412.934 272.502 412.974 272.541 413.021 272.569L424.905 279.417C425.69 279.868 426.581 280.106 427.487 280.106C428.393 280.106 429.283 279.868 430.069 279.417L441.953 272.567C442.001 272.539 442.041 272.499 442.068 272.451C442.096 272.403 442.11 272.349 442.11 272.294C442.11 272.238 442.096 272.184 442.068 272.136C442.041 272.088 442.001 272.048 441.953 272.02L430.068 265.17C429.283 264.72 428.393 264.483 427.488 264.485V264.485Z"}"${add_attribute("fill", $color, 0)}></path><path d="${"M393.499 243.121C391.49 243.123 389.515 242.596 387.773 241.594L367.321 229.805C366.848 229.533 366.456 229.141 366.183 228.67C365.909 228.198 365.766 227.663 365.766 227.118C365.766 226.573 365.909 226.038 366.183 225.566C366.456 225.094 366.848 224.703 367.321 224.431L387.773 212.643C389.515 211.642 391.489 211.116 393.499 211.116C395.509 211.116 397.484 211.642 399.225 212.643L419.678 224.431C420.151 224.703 420.544 225.095 420.816 225.567C421.089 226.039 421.233 226.574 421.233 227.119C421.233 227.664 421.089 228.199 420.816 228.671C420.544 229.142 420.151 229.534 419.678 229.807L399.225 241.594C397.484 242.596 395.509 243.123 393.499 243.121ZM388.711 239.969C390.167 240.805 391.817 241.244 393.496 241.244C395.175 241.244 396.825 240.805 398.281 239.969L418.733 228.174C418.919 228.067 419.073 227.912 419.18 227.726C419.288 227.541 419.344 227.33 419.344 227.116C419.344 226.901 419.288 226.691 419.18 226.505C419.073 226.319 418.919 226.165 418.733 226.057L398.279 214.27C396.824 213.434 395.174 212.995 393.495 212.995C391.816 212.995 390.166 213.434 388.71 214.27L368.259 226.058C368.073 226.165 367.918 226.319 367.811 226.505C367.703 226.691 367.647 226.902 367.647 227.116C367.647 227.33 367.703 227.541 367.811 227.727C367.918 227.913 368.073 228.067 368.259 228.174L388.711 239.969Z"}"${add_attribute("fill", $color, 0)}></path><path d="${"M27.7337 261.673C25.7238 261.675 23.7488 261.148 22.0076 260.146L1.55485 248.358C1.08214 248.085 0.68958 247.694 0.416638 247.222C0.143697 246.75 0 246.215 0 245.67C0 245.125 0.143697 244.59 0.416638 244.118C0.68958 243.647 1.08214 243.255 1.55485 242.983L22.0068 231.195C23.7485 230.194 25.7231 229.667 27.7329 229.667C29.7427 229.667 31.7173 230.194 33.459 231.195L53.9117 242.983C54.3847 243.255 54.7775 243.647 55.0506 244.119C55.3237 244.59 55.4675 245.126 55.4675 245.671C55.4675 246.215 55.3237 246.751 55.0506 247.222C54.7775 247.694 54.3847 248.086 53.9117 248.358L33.4605 260.146C31.7189 261.148 29.7438 261.675 27.7337 261.673V261.673ZM27.7337 231.548C26.0543 231.547 24.4042 231.987 22.9489 232.824L2.49615 244.611C2.31013 244.719 2.15569 244.873 2.04832 245.059C1.94094 245.245 1.88442 245.456 1.88442 245.67C1.88442 245.885 1.94094 246.096 2.04832 246.281C2.15569 246.467 2.31013 246.622 2.49615 246.729L22.9481 258.517C24.4041 259.353 26.054 259.792 27.7333 259.792C29.4126 259.792 31.0625 259.353 32.5184 258.517L52.9728 246.729C53.1588 246.622 53.3133 246.468 53.4208 246.282C53.5282 246.096 53.5847 245.885 53.5847 245.671C53.5847 245.457 53.5282 245.246 53.4208 245.06C53.3133 244.874 53.1588 244.72 52.9728 244.613L32.5177 232.824C31.0624 231.987 29.4123 231.547 27.7329 231.548H27.7337Z"}"${add_attribute("fill", $color, 0)}></path><path opacity="${"0.6"}" d="${"M234.851 313.101L88.6088 228.807C86.4773 227.579 86.7449 225.433 89.2058 224.014L183.068 169.914C185.529 168.495 189.253 168.341 191.384 169.569L337.627 253.863C339.759 255.092 339.491 257.238 337.03 258.656L243.167 312.757C240.706 314.179 236.982 314.33 234.851 313.101Z"}" fill="${"#030830"}"></path><path d="${"M238.2 328.318C236.49 328.318 234.85 327.963 233.597 327.24L66.6888 231.039C65.325 230.254 64.5762 229.12 64.5762 227.849C64.5762 226.388 65.5934 224.959 67.3711 223.939L181.147 157.391C184.268 155.594 188.852 155.419 191.586 156.995L358.493 253.2C359.857 253.981 360.606 255.118 360.606 256.389C360.606 257.85 359.589 259.275 357.811 260.295L244.037 326.846C242.345 327.822 240.224 328.318 238.2 328.318ZM187.007 157.807C185.298 157.807 183.481 158.219 182.096 159.016L68.3171 225.564C67.1513 226.237 66.4596 227.09 66.4596 227.848C66.4596 228.58 67.0965 229.097 67.6333 229.41L234.54 325.613C236.671 326.843 240.587 326.663 243.088 325.223L356.864 258.675C358.03 258.002 358.723 257.151 358.723 256.392C358.723 255.66 358.086 255.142 357.549 254.829L190.643 158.624C189.691 158.076 188.383 157.807 187.007 157.807Z"}"${add_attribute("fill", $color, 0)}></path><path d="${"M376.476 112.544L230.806 28.5823C229.805 28.0051 228.76 27.8863 227.833 28.1566L227.819 28.1613L225.122 29.0987L226.072 29.3229C225.666 29.8115 225.363 30.3772 225.183 30.9859L192.241 137.769C191.425 140.417 192.62 143.634 194.911 144.956L340.579 228.913C340.914 229.107 341.275 229.254 341.651 229.35L341.29 230.131L343.866 229.227H343.86C344.916 228.808 345.785 227.867 346.208 226.507L379.149 119.727C379.962 117.081 378.767 113.865 376.476 112.544Z"}" fill="${"url(#paint0_radial)"}"></path><path d="${"M335.364 232.9L335.415 232.962L191.534 150.03C189.421 148.809 185.72 148.962 183.276 150.371L90.313 203.953L87.2129 202.772L88.0838 207.114C88.1996 207.766 88.6573 208.378 89.4797 208.852L234.698 292.548C236.814 293.768 240.511 293.615 242.956 292.207L336.155 238.485C337.305 237.823 337.966 237.001 338.13 236.187L338.135 236.194L339.025 231.968L335.364 232.9Z"}" fill="${"url(#paint1_radial)"}"></path><path d="${"M234.851 288.728L88.6088 204.435C86.4773 203.206 86.7449 201.06 89.2058 199.642L183.068 145.541C185.529 144.122 189.253 143.968 191.384 145.197L337.627 229.49C339.759 230.719 339.491 232.866 337.03 234.284L243.167 288.384C240.706 289.807 236.982 289.957 234.851 288.728Z"}" fill="${"url(#paint2_radial)"}"></path><path d="${"M337.029 233.147L243.167 287.247C240.706 288.666 236.986 288.82 234.851 287.592L88.6088 203.298C87.8827 202.88 87.4563 202.351 87.2786 201.784C86.9962 202.762 87.4093 203.744 88.6088 204.435L234.851 288.729C236.983 289.957 240.706 289.803 243.167 288.384L337.029 234.284C338.652 233.347 339.298 232.101 338.957 231.003C338.737 231.767 338.107 232.527 337.029 233.147Z"}" fill="${"white"}"></path><g opacity="${"0.4"}"><path opacity="${"0.4"}" d="${"M158.361 190.757L153.424 187.911C153.027 187.683 153.077 187.286 153.535 187.02L159.363 183.661C159.821 183.397 160.513 183.368 160.91 183.597L165.847 186.443C166.244 186.671 166.194 187.068 165.736 187.334L159.908 190.693C159.451 190.955 158.761 190.984 158.361 190.757Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M165.986 195.15L161.049 192.304C160.652 192.076 160.702 191.679 161.16 191.413L166.988 188.054C167.445 187.79 168.138 187.761 168.535 187.99L173.471 190.835C173.867 191.063 173.818 191.46 173.36 191.726L167.532 195.085C167.075 195.35 166.383 195.379 165.986 195.15Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M173.611 199.545L168.674 196.699C168.277 196.471 168.327 196.074 168.785 195.808L174.613 192.449C175.071 192.185 175.763 192.156 176.159 192.385L181.097 195.23C181.493 195.459 181.444 195.855 180.986 196.122L175.158 199.481C174.7 199.745 174.007 199.774 173.611 199.545Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M184.156 195.913L179.219 193.067C178.823 192.839 178.872 192.442 179.33 192.175L184.222 189.355C184.679 189.091 185.372 189.063 185.768 189.291L190.706 192.137C191.102 192.366 191.052 192.762 190.595 193.029L185.703 195.849C185.245 196.116 184.553 196.147 184.156 195.913Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M191.781 200.31L186.844 197.464C186.447 197.236 186.497 196.839 186.955 196.573L191.847 193.753C192.305 193.489 192.997 193.461 193.394 193.689L198.331 196.535C198.728 196.764 198.678 197.16 198.22 197.427L193.328 200.246C192.871 200.51 192.179 200.539 191.781 200.31Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M199.406 204.706L194.469 201.859C194.072 201.631 194.122 201.234 194.58 200.968L199.472 198.148C199.93 197.885 200.622 197.856 201.019 198.084L205.956 200.931C206.352 201.159 206.303 201.555 205.845 201.822L200.952 204.641C200.495 204.905 199.803 204.934 199.406 204.706Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M207.032 209.101L202.094 206.254C201.698 206.026 201.747 205.629 202.205 205.363L207.097 202.543C207.555 202.279 208.247 202.251 208.643 202.479L213.581 205.325C213.977 205.553 213.928 205.95 213.47 206.217L208.578 209.037C208.12 209.3 207.43 209.329 207.032 209.101Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M214.658 213.495L209.721 210.649C209.325 210.421 209.374 210.024 209.832 209.757L214.724 206.938C215.182 206.674 215.874 206.645 216.271 206.874L221.208 209.72C221.605 209.948 221.555 210.345 221.097 210.611L216.205 213.431C215.747 213.695 215.055 213.722 214.658 213.495Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M222.283 217.89L217.346 215.044C216.949 214.815 216.999 214.419 217.457 214.152L222.349 211.333C222.807 211.069 223.499 211.04 223.896 211.269L228.833 214.115C229.23 214.344 229.18 214.74 228.722 215.006L223.83 217.826C223.372 218.09 222.68 218.118 222.283 217.89Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M229.908 222.285L224.971 219.439C224.574 219.21 224.624 218.814 225.082 218.548L229.974 215.728C230.432 215.464 231.124 215.435 231.521 215.664L236.458 218.51C236.855 218.739 236.805 219.135 236.347 219.401L231.455 222.221C230.998 222.485 230.305 222.514 229.908 222.285Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M237.533 226.68L232.596 223.834C232.199 223.606 232.249 223.209 232.706 222.942L237.599 220.122C238.057 219.858 238.749 219.83 239.146 220.058L244.083 222.904C244.479 223.133 244.43 223.529 243.972 223.795L239.079 226.615C238.622 226.88 237.929 226.908 237.533 226.68Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M245.157 231.075L240.217 228.229C239.821 228.001 239.87 227.604 240.328 227.338L245.22 224.518C245.678 224.254 246.37 224.226 246.766 224.454L251.704 227.3C252.1 227.528 252.05 227.924 251.592 228.192L246.701 231.011C246.246 231.275 245.554 231.304 245.157 231.075Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M252.781 235.47L247.844 232.624C247.447 232.395 247.497 231.999 247.955 231.732L252.847 228.912C253.305 228.649 253.997 228.62 254.394 228.848L259.332 231.695C259.728 231.923 259.678 232.32 259.22 232.586L254.328 235.406C253.871 235.673 253.178 235.698 252.781 235.47Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M195.391 193.835L190.454 190.989C190.057 190.761 190.106 190.364 190.564 190.098L195.457 187.278C195.914 187.014 196.607 186.985 197.003 187.213L201.94 190.06C202.337 190.288 202.288 190.685 201.83 190.951L196.937 193.771C196.479 194.038 195.787 194.064 195.391 193.835Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M187.652 189.374L182.715 186.528C182.319 186.3 182.368 185.903 182.826 185.637L187.718 182.817C188.176 182.553 188.869 182.525 189.265 182.753L194.206 185.601C194.603 185.83 194.553 186.226 194.095 186.493L189.198 189.31C188.741 189.574 188.049 189.603 187.652 189.374Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M179.901 184.907L169.268 178.778C168.871 178.549 168.921 178.153 169.379 177.886L174.271 175.067C174.729 174.803 175.421 174.774 175.817 175.003L186.451 181.132C186.848 181.36 186.798 181.757 186.34 182.023L181.448 184.843C180.991 185.107 180.298 185.133 179.901 184.907Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M185.32 179.473L176.69 174.499C176.293 174.271 176.343 173.874 176.8 173.608L181.693 170.788C182.151 170.524 182.843 170.495 183.239 170.724L191.869 175.698C192.266 175.927 192.216 176.323 191.759 176.59L186.866 179.409C186.408 179.673 185.716 179.702 185.32 179.473Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M203.015 198.23L198.078 195.384C197.682 195.155 197.731 194.759 198.189 194.492L203.082 191.672C203.54 191.409 204.231 191.38 204.628 191.609L209.565 194.454C209.962 194.683 209.912 195.079 209.454 195.346L204.562 198.166C204.105 198.429 203.412 198.458 203.015 198.23Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M210.639 202.624L205.701 199.779C205.305 199.55 205.355 199.154 205.812 198.887L210.704 196.068C211.162 195.804 211.855 195.775 212.251 196.004L217.189 198.849C217.585 199.077 217.535 199.474 217.077 199.74L212.186 202.56C211.734 202.824 211.038 202.852 210.639 202.624Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M218.266 207.019L213.328 204.174C212.932 203.945 212.982 203.549 213.439 203.282L218.331 200.462C218.789 200.198 219.482 200.169 219.878 200.398L224.816 203.244C225.212 203.473 225.162 203.869 224.705 204.135L219.813 206.955C219.355 207.219 218.662 207.248 218.266 207.019Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M225.891 211.414L220.954 208.569C220.557 208.34 220.606 207.944 221.064 207.677L225.957 204.857C226.414 204.593 227.107 204.565 227.503 204.793L232.441 207.639C232.837 207.868 232.788 208.264 232.33 208.53L227.437 211.35C226.979 211.614 226.287 211.643 225.891 211.414Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M233.518 215.809L228.58 212.963C228.184 212.735 228.233 212.338 228.691 212.072L233.584 209.252C234.042 208.988 234.734 208.96 235.13 209.188L240.068 212.034C240.464 212.263 240.415 212.659 239.956 212.926L235.064 215.745C234.607 216.009 233.914 216.038 233.518 215.809Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M241.14 220.206L236.203 217.36C235.807 217.132 235.856 216.736 236.314 216.469L241.206 213.649C241.664 213.386 242.356 213.357 242.753 213.585L247.69 216.431C248.087 216.66 248.037 217.056 247.579 217.323L242.687 220.142C242.23 220.404 241.537 220.433 241.14 220.206Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M248.768 224.599L243.83 221.753C243.433 221.525 243.484 221.128 243.941 220.862L248.833 218.042C249.291 217.778 249.984 217.75 250.38 217.978L255.318 220.824C255.715 221.052 255.664 221.449 255.207 221.716L250.315 224.536C249.857 224.799 249.164 224.828 248.768 224.599Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M256.391 228.994L251.453 226.148C251.057 225.919 251.107 225.523 251.564 225.256L256.457 222.437C256.914 222.173 257.607 222.144 258.004 222.373L262.941 225.219C263.337 225.447 263.288 225.844 262.83 226.11L257.937 228.93C257.479 229.193 256.787 229.222 256.391 228.994Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M264.016 233.389L259.078 230.543C258.682 230.315 258.731 229.919 259.189 229.651L264.082 226.832C264.54 226.568 265.232 226.539 265.628 226.768L270.566 229.614C270.962 229.842 270.913 230.239 270.455 230.505L265.562 233.325C265.104 233.589 264.412 233.617 264.016 233.389Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M277.572 241.202L266.799 234.993C266.403 234.764 266.452 234.368 266.91 234.102L271.802 231.282C272.26 231.018 272.953 230.989 273.349 231.218L284.122 237.427C284.518 237.655 284.469 238.052 284.011 238.318L279.118 241.138C278.661 241.402 277.968 241.43 277.572 241.202Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M292.415 232.645L283.323 227.404C282.926 227.176 282.975 226.779 283.433 226.513L288.326 223.693C288.784 223.429 289.476 223.401 289.873 223.629L298.965 228.87C299.362 229.099 299.312 229.495 298.854 229.762L293.962 232.582C293.504 232.845 292.812 232.874 292.415 232.645Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M216.369 197.37L211.432 194.524C211.035 194.295 211.085 193.899 211.542 193.632L216.435 190.813C216.893 190.549 217.585 190.52 217.981 190.749L222.919 193.595C223.315 193.823 223.266 194.22 222.808 194.486L217.916 197.306C217.458 197.57 216.765 197.598 216.369 197.37Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M208.554 192.866L203.617 190.02C203.221 189.791 203.27 189.395 203.728 189.128L208.621 186.309C209.079 186.045 209.771 186.016 210.167 186.245L215.104 189.09C215.501 189.319 215.451 189.715 214.993 189.982L210.101 192.802C209.644 193.066 208.951 193.094 208.554 192.866Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M200.74 188.361L195.803 185.515C195.406 185.287 195.456 184.89 195.914 184.624L200.806 181.805C201.264 181.541 201.956 181.512 202.353 181.741L207.29 184.586C207.687 184.814 207.637 185.211 207.179 185.477L202.287 188.297C201.829 188.561 201.137 188.589 200.74 188.361Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M192.926 183.858L187.988 181.011C187.592 180.783 187.642 180.386 188.1 180.12L192.991 177.3C193.449 177.037 194.142 177.008 194.538 177.236L199.476 180.082C199.872 180.311 199.822 180.707 199.365 180.974L194.473 183.794C194.015 184.057 193.322 184.086 192.926 183.858Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M223.996 201.765L219.058 198.919C218.662 198.69 218.712 198.294 219.17 198.028L224.062 195.208C224.519 194.944 225.212 194.915 225.609 195.144L230.546 197.99C230.943 198.218 230.893 198.614 230.435 198.881L225.543 201.701C225.085 201.965 224.393 201.993 223.996 201.765Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M231.621 206.16L226.684 203.314C226.287 203.085 226.337 202.689 226.795 202.423L231.687 199.603C232.145 199.339 232.837 199.31 233.234 199.538L238.171 202.384C238.568 202.613 238.518 203.009 238.06 203.276L233.168 206.096C232.71 206.36 232.018 206.389 231.621 206.16Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M239.244 210.555L234.307 207.709C233.91 207.481 233.96 207.084 234.418 206.817L239.31 203.997C239.768 203.733 240.46 203.705 240.857 203.933L245.795 206.779C246.19 207.008 246.141 207.404 245.683 207.671L240.791 210.491C240.334 210.755 239.641 210.783 239.244 210.555Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M246.868 214.949L241.93 212.103C241.534 211.875 241.583 211.478 242.041 211.212L246.933 208.392C247.391 208.129 248.084 208.1 248.48 208.328L253.418 211.174C253.814 211.403 253.764 211.799 253.307 212.066L248.414 214.886C247.963 215.149 247.267 215.178 246.868 214.949Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M254.497 219.347L249.558 216.5C249.162 216.272 249.212 215.875 249.67 215.609L254.561 212.789C255.02 212.526 255.712 212.497 256.108 212.726L261.046 215.571C261.442 215.799 261.392 216.196 260.935 216.463L256.043 219.283C255.585 219.544 254.892 219.573 254.497 219.347Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M262.119 223.739L257.182 220.893C256.785 220.664 256.835 220.268 257.293 220.001L262.185 217.182C262.643 216.918 263.335 216.889 263.732 217.118L268.669 219.964C269.066 220.192 269.016 220.589 268.558 220.855L263.666 223.675C263.208 223.939 262.516 223.967 262.119 223.739Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M269.744 228.134L264.807 225.288C264.41 225.059 264.46 224.663 264.918 224.397L269.81 221.577C270.268 221.313 270.96 221.284 271.357 221.513L276.294 224.359C276.691 224.587 276.641 224.983 276.183 225.25L271.291 228.07C270.833 228.334 270.141 228.362 269.744 228.134Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M277.369 232.529L272.432 229.683C272.035 229.454 272.085 229.058 272.543 228.792L277.435 225.972C277.892 225.708 278.585 225.679 278.981 225.908L283.919 228.754C284.315 228.982 284.266 229.378 283.808 229.645L278.915 232.465C278.457 232.729 277.765 232.757 277.369 232.529Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M284.994 236.923L280.056 234.077C279.661 233.848 279.71 233.452 280.168 233.186L285.06 230.366C285.518 230.102 286.21 230.074 286.606 230.302L291.544 233.148C291.94 233.377 291.891 233.773 291.433 234.039L286.541 236.859C286.083 237.124 285.39 237.152 284.994 236.923Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M212.355 186.499L207.418 183.654C207.022 183.425 207.071 183.029 207.529 182.762L212.421 179.942C212.879 179.678 213.571 179.649 213.968 179.878L218.905 182.724C219.302 182.953 219.252 183.349 218.794 183.615L213.902 186.435C213.444 186.699 212.752 186.727 212.355 186.499Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M204.769 182.126L199.832 179.281C199.435 179.052 199.486 178.656 199.943 178.389L204.835 175.57C205.293 175.306 205.985 175.277 206.382 175.506L211.319 178.351C211.716 178.579 211.666 178.976 211.208 179.243L206.316 182.062C205.856 182.326 205.161 182.355 204.769 182.126Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M197.18 177.754L192.242 174.908C191.846 174.679 191.896 174.283 192.353 174.016L197.245 171.196C197.703 170.933 198.396 170.904 198.792 171.133L203.73 173.978C204.126 174.206 204.076 174.603 203.619 174.87L198.726 177.689C198.269 177.953 197.576 177.982 197.18 177.754Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M189.594 173.38L184.656 170.534C184.26 170.306 184.309 169.909 184.767 169.643L189.66 166.823C190.118 166.559 190.81 166.531 191.206 166.759L196.143 169.605C196.54 169.834 196.491 170.23 196.032 170.497L191.14 173.317C190.686 173.58 189.99 173.609 189.594 173.38Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M197.396 168.884L192.459 166.039C192.062 165.81 192.112 165.414 192.57 165.147L194.188 164.215C194.645 163.951 195.338 163.923 195.734 164.151L200.672 166.996C201.068 167.225 201.018 167.621 200.561 167.888L198.943 168.82C198.486 169.084 197.793 169.112 197.396 168.884Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M207.297 174.587L202.359 171.741C201.963 171.513 202.013 171.116 202.471 170.85L204.088 169.918C204.546 169.654 205.238 169.625 205.634 169.854L210.571 172.7C210.968 172.928 210.918 173.325 210.46 173.591L208.844 174.524C208.385 174.79 207.693 174.821 207.297 174.587Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M214.854 178.945L209.916 176.099C209.52 175.871 209.569 175.474 210.028 175.207L211.644 174.275C212.102 174.011 212.794 173.982 213.191 174.211L218.128 177.057C218.525 177.285 218.475 177.682 218.017 177.949L216.4 178.883C215.942 179.145 215.25 179.174 214.854 178.945Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M222.407 183.3L217.469 180.454C217.073 180.225 217.122 179.829 217.58 179.563L219.197 178.63C219.655 178.367 220.347 178.338 220.744 178.566L225.681 181.413C226.078 181.641 226.028 182.038 225.57 182.304L223.953 183.236C223.495 183.5 222.803 183.529 222.407 183.3Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M229.965 187.655L225.027 184.809C224.631 184.58 224.681 184.184 225.138 183.918L226.756 182.985C227.213 182.722 227.906 182.693 228.302 182.921L233.24 185.767C233.636 185.996 233.586 186.392 233.129 186.659L231.511 187.591C231.051 187.855 230.356 187.883 229.965 187.655Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M272.141 211.966L267.203 209.121C266.807 208.893 266.857 208.496 267.314 208.229L268.931 207.298C269.389 207.034 270.082 207.005 270.478 207.234L275.415 210.079C275.812 210.307 275.762 210.704 275.304 210.97L273.688 211.902C273.236 212.166 272.541 212.195 272.141 211.966Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M279.699 216.322L274.762 213.476C274.365 213.247 274.415 212.851 274.872 212.585L276.49 211.653C276.947 211.389 277.64 211.36 278.037 211.589L282.974 214.434C283.371 214.662 283.321 215.059 282.863 215.326L281.245 216.258C280.788 216.522 280.095 216.551 279.699 216.322Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M287.254 220.675L282.317 217.829C281.92 217.6 281.969 217.204 282.427 216.938L284.045 216.005C284.502 215.742 285.195 215.713 285.591 215.941L290.529 218.788C290.925 219.016 290.875 219.412 290.418 219.679L288.8 220.611C288.343 220.876 287.65 220.909 287.254 220.675Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M294.809 225.031L289.871 222.186C289.475 221.957 289.524 221.561 289.982 221.293L291.599 220.362C292.057 220.098 292.749 220.07 293.146 220.298L298.083 223.144C298.48 223.373 298.429 223.769 297.972 224.036L296.355 224.971C295.897 225.231 295.204 225.259 294.809 225.031Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M219.978 190.894L215.041 188.049C214.644 187.82 214.695 187.424 215.152 187.157L220.044 184.337C220.502 184.073 221.194 184.044 221.591 184.273L226.528 187.119C226.925 187.348 226.875 187.744 226.417 188.01L221.525 190.83C221.068 191.094 220.375 191.123 219.978 190.894Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M227.604 195.287L222.666 192.442C222.269 192.214 222.32 191.817 222.777 191.55L227.669 188.73C228.127 188.466 228.82 188.438 229.216 188.666L234.154 191.512C234.55 191.741 234.5 192.137 234.043 192.404L229.151 195.223C228.693 195.489 228 195.522 227.604 195.287Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M235.229 199.684L230.291 196.838C229.895 196.61 229.944 196.213 230.402 195.947L235.295 193.127C235.752 192.863 236.445 192.835 236.841 193.063L241.779 195.912C242.175 196.141 242.126 196.537 241.668 196.805L236.776 199.624C236.317 199.884 235.625 199.913 235.229 199.684Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M242.855 204.079L237.918 201.233C237.522 201.005 237.571 200.608 238.029 200.341L242.922 197.521C243.379 197.258 244.072 197.229 244.468 197.457L249.405 200.304C249.802 200.532 249.753 200.929 249.294 201.195L244.402 204.015C243.944 204.279 243.252 204.307 242.855 204.079Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M250.478 208.474L245.541 205.628C245.144 205.4 245.195 205.003 245.652 204.736L250.544 201.917C251.002 201.653 251.694 201.624 252.091 201.853L257.028 204.699C257.425 204.927 257.375 205.324 256.917 205.59L252.025 208.41C251.567 208.674 250.875 208.702 250.478 208.474Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M258.104 212.869L253.166 210.023C252.769 209.794 252.82 209.398 253.277 209.131L258.169 206.312C258.627 206.048 259.32 206.019 259.716 206.248L264.654 209.094C265.051 209.322 265 209.719 264.543 209.985L259.651 212.805C259.193 213.069 258.5 213.098 258.104 212.869Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M265.73 217.263L260.795 214.418C260.398 214.189 260.448 213.793 260.905 213.526L265.798 210.707C266.256 210.443 266.948 210.414 267.345 210.642L272.282 213.488C272.678 213.717 272.629 214.113 272.171 214.379L267.278 217.199C266.82 217.463 266.126 217.491 265.73 217.263Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M273.354 221.658L268.416 218.813C268.02 218.584 268.069 218.188 268.527 217.921L273.42 215.101C273.877 214.837 274.57 214.808 274.966 215.037L279.903 217.883C280.299 218.112 280.249 218.508 279.792 218.774L274.9 221.594C274.442 221.858 273.75 221.887 273.354 221.658Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M280.982 226.053L276.045 223.207C275.649 222.979 275.698 222.582 276.156 222.316L281.048 219.496C281.506 219.232 282.198 219.204 282.595 219.432L287.532 222.278C287.929 222.507 287.879 222.903 287.421 223.17L282.526 225.987C282.068 226.253 281.373 226.282 280.982 226.053Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M176.387 191.437L161.846 183.055C161.449 182.827 161.499 182.43 161.957 182.164L166.849 179.344C167.307 179.08 167.999 179.052 168.396 179.28L182.939 187.662C183.335 187.89 183.286 188.287 182.828 188.553L177.936 191.373C177.476 191.637 176.783 191.665 176.387 191.437Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M270.061 245.428L255.519 237.047C255.123 236.819 255.173 236.422 255.63 236.156L260.523 233.336C260.981 233.072 261.673 233.043 262.069 233.272L276.611 241.653C277.007 241.882 276.958 242.278 276.5 242.545L271.608 245.364C271.15 245.628 270.457 245.657 270.061 245.428Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M239.566 237.561L234.629 234.715C234.232 234.486 234.282 234.09 234.74 233.824L240.568 230.465C241.026 230.201 241.718 230.172 242.115 230.401L247.052 233.247C247.448 233.475 247.399 233.871 246.941 234.138L241.113 237.497C240.655 237.761 239.963 237.79 239.566 237.561Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M184.197 205.645L176.301 201.094C175.905 200.866 175.954 200.469 176.412 200.202L182.24 196.843C182.698 196.579 183.391 196.551 183.786 196.779L191.683 201.33C192.08 201.559 192.03 201.955 191.572 202.222L185.744 205.581C185.289 205.845 184.594 205.873 184.197 205.645Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M232.219 233.33L224.322 228.779C223.926 228.55 223.976 228.154 224.434 227.886L230.261 224.528C230.719 224.264 231.412 224.235 231.808 224.463L239.704 229.015C240.101 229.243 240.051 229.64 239.593 229.907L233.765 233.266C233.308 233.526 232.615 233.555 232.219 233.33Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M195.196 211.986L187.299 207.435C186.902 207.206 186.952 206.81 187.41 206.544L193.238 203.185C193.696 202.922 194.388 202.893 194.785 203.121L202.681 207.673C203.078 207.901 203.028 208.298 202.57 208.564L196.742 211.923C196.284 212.186 195.592 212.215 195.196 211.986Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M194.839 203.151L229.171 222.94C229.596 223.185 229.596 223.584 229.171 223.829L223.224 227.254C222.797 227.5 222.107 227.5 221.681 227.254L187.354 207.465L194.839 203.151Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M260.88 245.529L266.38 248.699C266.704 248.886 266.664 249.214 266.289 249.429L263.905 250.804C263.529 251.02 262.962 251.043 262.637 250.856L257.138 247.686C256.812 247.499 256.853 247.172 257.229 246.955L259.613 245.581C259.987 245.365 260.555 245.341 260.88 245.529Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M253.191 241.098L258.691 244.266C259.016 244.453 258.975 244.781 258.6 244.997L256.216 246.375C255.841 246.591 255.277 246.615 254.948 246.427L249.45 243.256C249.125 243.068 249.166 242.741 249.54 242.525L251.925 241.151C252.299 240.934 252.866 240.911 253.191 241.098Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M245.568 236.703L251.067 239.873C251.392 240.061 251.352 240.388 250.976 240.604L248.59 241.979C248.216 242.194 247.647 242.218 247.323 242.031L241.823 238.861C241.498 238.673 241.539 238.346 241.914 238.13L244.298 236.756C244.678 236.539 245.242 236.516 245.568 236.703Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M257.4 238.671L262.899 241.84C263.225 242.028 263.184 242.355 262.808 242.572L260.424 243.946C260.049 244.162 259.481 244.185 259.157 243.998L253.657 240.828C253.332 240.641 253.373 240.313 253.748 240.097L256.132 238.723C256.507 238.507 257.075 238.485 257.4 238.671Z"}" fill="${"#09133D"}"></path></g><path d="${"M158.363 190.757L153.426 187.911C153.029 187.683 153.079 187.286 153.537 187.02L159.365 183.661C159.823 183.397 160.515 183.368 160.912 183.597L165.849 186.443C166.246 186.671 166.196 187.068 165.738 187.334L159.91 190.693C159.452 190.955 158.763 190.984 158.363 190.757Z"}" fill="${"#161623"}"></path><path d="${"M165.986 195.15L161.049 192.304C160.652 192.076 160.702 191.68 161.16 191.413L166.988 188.054C167.445 187.79 168.138 187.761 168.535 187.99L173.471 190.835C173.867 191.063 173.818 191.46 173.36 191.726L167.532 195.085C167.075 195.35 166.383 195.379 165.986 195.15Z"}" fill="${"#161623"}"></path><path d="${"M173.611 199.545L168.674 196.699C168.277 196.471 168.327 196.074 168.785 195.808L174.613 192.449C175.071 192.185 175.763 192.156 176.159 192.385L181.097 195.231C181.493 195.46 181.444 195.856 180.986 196.122L175.158 199.481C174.7 199.745 174.007 199.774 173.611 199.545Z"}" fill="${"#161623"}"></path><path d="${"M184.158 195.913L179.221 193.067C178.825 192.839 178.874 192.442 179.332 192.176L184.224 189.356C184.681 189.092 185.374 189.063 185.77 189.292L190.708 192.137C191.104 192.366 191.054 192.762 190.597 193.029L185.705 195.849C185.247 196.116 184.554 196.147 184.158 195.913Z"}" fill="${"#161623"}"></path><path d="${"M191.781 200.31L186.844 197.465C186.447 197.236 186.497 196.84 186.955 196.573L191.847 193.753C192.305 193.489 192.997 193.461 193.394 193.689L198.331 196.535C198.728 196.764 198.678 197.16 198.22 197.427L193.328 200.246C192.871 200.51 192.179 200.539 191.781 200.31Z"}" fill="${"#161623"}"></path><path d="${"M199.406 204.706L194.469 201.859C194.072 201.631 194.122 201.234 194.58 200.968L199.472 198.148C199.93 197.885 200.622 197.856 201.019 198.084L205.956 200.931C206.352 201.159 206.303 201.555 205.845 201.822L200.952 204.641C200.495 204.905 199.803 204.934 199.406 204.706Z"}" fill="${"#161623"}"></path><path d="${"M207.032 209.101L202.094 206.254C201.698 206.026 201.747 205.629 202.205 205.363L207.097 202.543C207.555 202.279 208.247 202.251 208.643 202.479L213.581 205.325C213.977 205.553 213.928 205.95 213.47 206.217L208.578 209.037C208.12 209.3 207.43 209.329 207.032 209.101Z"}" fill="${"#161623"}"></path><path d="${"M214.658 213.495L209.721 210.65C209.325 210.421 209.374 210.025 209.832 209.758L214.724 206.938C215.182 206.674 215.874 206.646 216.271 206.874L221.208 209.72C221.605 209.948 221.555 210.345 221.097 210.611L216.205 213.431C215.747 213.695 215.055 213.723 214.658 213.495Z"}" fill="${"#161623"}"></path><path d="${"M222.283 217.891L217.346 215.045C216.949 214.816 216.999 214.42 217.457 214.153L222.349 211.333C222.807 211.069 223.499 211.041 223.896 211.269L228.833 214.115C229.23 214.344 229.18 214.74 228.722 215.007L223.83 217.827C223.372 218.091 222.68 218.119 222.283 217.891Z"}" fill="${"#161623"}"></path><path d="${"M229.908 222.285L224.971 219.439C224.574 219.21 224.624 218.814 225.082 218.548L229.974 215.728C230.431 215.464 231.124 215.435 231.521 215.664L236.458 218.51C236.854 218.739 236.804 219.135 236.347 219.401L231.455 222.221C230.997 222.485 230.305 222.514 229.908 222.285Z"}" fill="${"#161623"}"></path><path d="${"M237.533 226.68L232.596 223.834C232.199 223.606 232.249 223.209 232.706 222.943L237.599 220.123C238.057 219.859 238.749 219.831 239.146 220.059L244.083 222.904C244.479 223.133 244.43 223.529 243.972 223.796L239.079 226.616C238.622 226.88 237.929 226.909 237.533 226.68Z"}" fill="${"#161623"}"></path><path d="${"M245.155 231.075L240.215 228.229C239.819 228.001 239.868 227.604 240.326 227.338L245.218 224.518C245.676 224.254 246.369 224.226 246.764 224.454L251.702 227.3C252.098 227.528 252.048 227.924 251.591 228.192L246.699 231.011C246.244 231.275 245.552 231.304 245.155 231.075Z"}" fill="${"#161623"}"></path><path d="${"M252.781 235.47L247.844 232.624C247.447 232.395 247.497 231.999 247.955 231.732L252.847 228.912C253.305 228.649 253.997 228.62 254.394 228.848L259.331 231.695C259.728 231.923 259.678 232.32 259.22 232.586L254.328 235.406C253.87 235.673 253.178 235.698 252.781 235.47Z"}" fill="${"#161623"}"></path><path d="${"M195.391 193.835L190.454 190.989C190.057 190.761 190.106 190.364 190.564 190.098L195.457 187.278C195.914 187.014 196.607 186.986 197.003 187.214L201.94 190.06C202.337 190.288 202.288 190.685 201.83 190.952L196.937 193.772C196.479 194.038 195.787 194.064 195.391 193.835Z"}" fill="${"#161623"}"></path><path d="${"M187.652 189.374L182.715 186.529C182.319 186.3 182.368 185.904 182.826 185.637L187.718 182.817C188.176 182.553 188.869 182.525 189.265 182.753L194.206 185.601C194.603 185.83 194.553 186.226 194.095 186.493L189.198 189.31C188.741 189.574 188.049 189.603 187.652 189.374Z"}" fill="${"#161623"}"></path><path d="${"M179.901 184.907L169.268 178.778C168.871 178.549 168.921 178.153 169.379 177.886L174.271 175.067C174.729 174.803 175.421 174.774 175.817 175.003L186.451 181.132C186.848 181.361 186.798 181.757 186.34 182.023L181.448 184.843C180.991 185.107 180.298 185.133 179.901 184.907Z"}" fill="${"#161623"}"></path><path d="${"M185.322 179.473L176.692 174.5C176.295 174.271 176.344 173.875 176.802 173.608L181.695 170.788C182.153 170.524 182.845 170.495 183.241 170.724L191.871 175.698C192.268 175.927 192.218 176.323 191.761 176.59L186.868 179.409C186.41 179.673 185.718 179.702 185.322 179.473Z"}" fill="${"#161623"}"></path><path d="${"M203.017 198.23L198.08 195.384C197.684 195.155 197.733 194.759 198.191 194.492L203.084 191.672C203.542 191.409 204.233 191.38 204.63 191.609L209.567 194.455C209.964 194.683 209.914 195.08 209.456 195.346L204.564 198.166C204.106 198.429 203.414 198.458 203.017 198.23Z"}" fill="${"#161623"}"></path><path d="${"M210.639 202.625L205.701 199.779C205.305 199.55 205.355 199.154 205.812 198.887L210.704 196.068C211.162 195.804 211.855 195.775 212.251 196.004L217.189 198.85C217.585 199.078 217.535 199.475 217.077 199.741L212.186 202.561C211.734 202.825 211.038 202.853 210.639 202.625Z"}" fill="${"#161623"}"></path><path d="${"M218.268 207.02L213.33 204.174C212.933 203.945 212.984 203.549 213.441 203.283L218.333 200.463C218.791 200.199 219.484 200.17 219.88 200.399L224.818 203.245C225.214 203.473 225.164 203.869 224.706 204.136L219.815 206.956C219.357 207.22 218.664 207.249 218.268 207.02Z"}" fill="${"#161623"}"></path><path d="${"M225.893 211.415L220.956 208.569C220.559 208.34 220.608 207.944 221.066 207.678L225.959 204.858C226.416 204.594 227.109 204.565 227.505 204.794L232.443 207.639C232.839 207.868 232.79 208.264 232.332 208.531L227.439 211.351C226.981 211.614 226.289 211.643 225.893 211.415Z"}" fill="${"#161623"}"></path><path d="${"M233.518 215.809L228.58 212.964C228.184 212.735 228.233 212.339 228.691 212.072L233.584 209.252C234.042 208.988 234.734 208.96 235.13 209.188L240.068 212.034C240.464 212.263 240.415 212.659 239.956 212.926L235.064 215.745C234.607 216.009 233.914 216.038 233.518 215.809Z"}" fill="${"#161623"}"></path><path d="${"M241.142 220.206L236.205 217.36C235.809 217.132 235.858 216.736 236.316 216.469L241.208 213.649C241.666 213.386 242.358 213.357 242.755 213.585L247.692 216.431C248.089 216.66 248.039 217.056 247.581 217.323L242.689 220.142C242.231 220.404 241.539 220.433 241.142 220.206Z"}" fill="${"#161623"}"></path><path d="${"M248.768 224.599L243.83 221.753C243.433 221.525 243.484 221.128 243.941 220.862L248.833 218.042C249.291 217.779 249.984 217.75 250.38 217.978L255.318 220.825C255.715 221.053 255.664 221.449 255.207 221.716L250.315 224.536C249.857 224.799 249.164 224.828 248.768 224.599Z"}" fill="${"#161623"}"></path><path d="${"M256.391 228.994L251.453 226.149C251.057 225.92 251.107 225.524 251.564 225.256L256.457 222.437C256.914 222.173 257.607 222.144 258.004 222.373L262.941 225.219C263.337 225.447 263.288 225.844 262.83 226.11L257.937 228.93C257.479 229.193 256.787 229.222 256.391 228.994Z"}" fill="${"#161623"}"></path><path d="${"M264.018 233.389L259.08 230.544C258.684 230.315 258.733 229.919 259.191 229.652L264.084 226.833C264.541 226.568 265.234 226.54 265.63 226.768L270.568 229.614C270.964 229.842 270.915 230.239 270.457 230.505L265.564 233.325C265.106 233.589 264.414 233.618 264.018 233.389Z"}" fill="${"#161623"}"></path><path d="${"M277.571 241.202L266.797 234.993C266.401 234.764 266.45 234.368 266.908 234.102L271.801 231.282C272.259 231.018 272.951 230.989 273.347 231.218L284.121 237.427C284.517 237.655 284.468 238.052 284.01 238.318L279.117 241.138C278.659 241.402 277.967 241.43 277.571 241.202Z"}" fill="${"#161623"}"></path><path d="${"M292.417 232.646L283.325 227.405C282.928 227.177 282.977 226.78 283.435 226.513L288.328 223.694C288.786 223.429 289.478 223.401 289.875 223.629L298.967 228.87C299.364 229.099 299.314 229.495 298.856 229.762L293.964 232.582C293.506 232.846 292.814 232.874 292.417 232.646Z"}" fill="${"#161623"}"></path><path d="${"M216.369 197.37L211.432 194.525C211.035 194.296 211.085 193.9 211.542 193.632L216.435 190.813C216.893 190.549 217.585 190.52 217.981 190.749L222.919 193.595C223.315 193.823 223.266 194.22 222.808 194.486L217.916 197.306C217.458 197.57 216.765 197.598 216.369 197.37Z"}" fill="${"#161623"}"></path><path d="${"M208.556 192.866L203.619 190.02C203.223 189.791 203.272 189.395 203.73 189.128L208.623 186.309C209.081 186.045 209.773 186.016 210.169 186.245L215.106 189.091C215.503 189.319 215.453 189.716 214.995 189.982L210.103 192.802C209.646 193.066 208.953 193.094 208.556 192.866Z"}" fill="${"#161623"}"></path><path d="${"M200.74 188.362L195.803 185.515C195.406 185.287 195.456 184.89 195.914 184.624L200.806 181.805C201.264 181.541 201.956 181.512 202.353 181.741L207.29 184.586C207.687 184.815 207.637 185.211 207.179 185.478L202.287 188.298C201.829 188.562 201.137 188.59 200.74 188.362Z"}" fill="${"#161623"}"></path><path d="${"M192.928 183.858L187.99 181.011C187.594 180.783 187.644 180.386 188.101 180.12L192.994 177.3C193.451 177.037 194.144 177.008 194.541 177.236L199.478 180.082C199.875 180.311 199.825 180.707 199.367 180.974L194.475 183.794C194.017 184.057 193.325 184.086 192.928 183.858Z"}" fill="${"#161623"}"></path><path d="${"M223.996 201.765L219.058 198.919C218.662 198.69 218.712 198.294 219.17 198.028L224.062 195.208C224.519 194.944 225.212 194.915 225.608 195.144L230.546 197.99C230.942 198.219 230.892 198.615 230.434 198.881L225.543 201.701C225.085 201.965 224.392 201.993 223.996 201.765Z"}" fill="${"#161623"}"></path><path d="${"M231.619 206.16L226.682 203.314C226.285 203.085 226.335 202.689 226.793 202.423L231.685 199.603C232.143 199.339 232.835 199.31 233.232 199.539L238.169 202.385C238.566 202.614 238.516 203.01 238.058 203.276L233.166 206.096C232.708 206.36 232.016 206.389 231.619 206.16Z"}" fill="${"#161623"}"></path><path d="${"M239.246 210.555L234.309 207.709C233.912 207.481 233.962 207.084 234.42 206.817L239.312 203.997C239.769 203.733 240.462 203.705 240.859 203.933L245.796 206.779C246.192 207.008 246.142 207.404 245.685 207.671L240.793 210.491C240.335 210.755 239.643 210.783 239.246 210.555Z"}" fill="${"#161623"}"></path><path d="${"M246.868 214.949L241.929 212.103C241.534 211.875 241.583 211.479 242.041 211.212L246.933 208.392C247.391 208.129 248.083 208.1 248.479 208.328L253.417 211.174C253.813 211.403 253.764 211.799 253.306 212.066L248.414 214.886C247.963 215.149 247.267 215.178 246.868 214.949Z"}" fill="${"#161623"}"></path><path d="${"M254.495 219.347L249.556 216.501C249.161 216.273 249.21 215.876 249.668 215.609L254.56 212.789C255.018 212.526 255.711 212.497 256.106 212.726L261.044 215.572C261.441 215.8 261.39 216.197 260.933 216.463L256.041 219.283C255.583 219.544 254.891 219.573 254.495 219.347Z"}" fill="${"#161623"}"></path><path d="${"M262.119 223.739L257.182 220.894C256.785 220.665 256.835 220.269 257.293 220.002L262.185 217.182C262.643 216.918 263.335 216.889 263.732 217.118L268.669 219.964C269.066 220.192 269.016 220.589 268.558 220.855L263.666 223.675C263.208 223.939 262.516 223.967 262.119 223.739Z"}" fill="${"#161623"}"></path><path d="${"M269.744 228.134L264.807 225.289C264.41 225.06 264.46 224.664 264.918 224.397L269.81 221.577C270.268 221.313 270.96 221.284 271.357 221.513L276.294 224.359C276.691 224.587 276.641 224.984 276.183 225.25L271.291 228.07C270.833 228.334 270.141 228.362 269.744 228.134Z"}" fill="${"#161623"}"></path><path d="${"M277.369 232.529L272.432 229.683C272.035 229.455 272.085 229.058 272.543 228.792L277.435 225.972C277.893 225.708 278.585 225.679 278.981 225.908L283.919 228.754C284.315 228.983 284.266 229.379 283.808 229.645L278.915 232.465C278.458 232.729 277.765 232.757 277.369 232.529Z"}" fill="${"#161623"}"></path><path d="${"M284.994 236.923L280.056 234.077C279.661 233.849 279.71 233.453 280.168 233.186L285.06 230.366C285.518 230.102 286.21 230.074 286.606 230.302L291.544 233.148C291.94 233.377 291.891 233.773 291.433 234.039L286.541 236.859C286.083 237.124 285.39 237.153 284.994 236.923Z"}" fill="${"#161623"}"></path><path d="${"M212.355 186.5L207.418 183.654C207.022 183.425 207.071 183.029 207.529 182.763L212.421 179.943C212.879 179.679 213.571 179.65 213.968 179.879L218.905 182.724C219.302 182.953 219.252 183.349 218.794 183.616L213.902 186.435C213.444 186.699 212.752 186.728 212.355 186.5Z"}" fill="${"#161623"}"></path><path d="${"M204.771 182.127L199.834 179.281C199.437 179.052 199.487 178.656 199.945 178.389L204.837 175.57C205.295 175.306 205.987 175.277 206.384 175.506L211.321 178.351C211.718 178.58 211.668 178.976 211.21 179.243L206.318 182.063C205.858 182.327 205.163 182.355 204.771 182.127Z"}" fill="${"#161623"}"></path><path d="${"M197.182 177.754L192.244 174.908C191.848 174.679 191.898 174.283 192.355 174.016L197.247 171.196C197.705 170.933 198.398 170.904 198.794 171.133L203.732 173.978C204.128 174.207 204.078 174.603 203.621 174.87L198.728 177.69C198.271 177.953 197.578 177.982 197.182 177.754Z"}" fill="${"#161623"}"></path><path d="${"M189.594 173.381L184.656 170.535C184.26 170.307 184.309 169.91 184.767 169.643L189.66 166.823C190.118 166.559 190.81 166.531 191.206 166.759L196.143 169.606C196.54 169.834 196.491 170.231 196.032 170.497L191.14 173.317C190.686 173.581 189.99 173.61 189.594 173.381Z"}" fill="${"#161623"}"></path><path d="${"M197.397 168.885L192.459 166.039C192.062 165.81 192.112 165.414 192.57 165.148L194.188 164.215C194.645 163.951 195.338 163.923 195.735 164.151L200.672 166.997C201.068 167.226 201.019 167.622 200.561 167.889L198.944 168.821C198.486 169.084 197.793 169.112 197.397 168.885Z"}" fill="${"#161623"}"></path><path d="${"M207.297 174.587L202.359 171.741C201.963 171.513 202.013 171.117 202.471 170.85L204.088 169.918C204.546 169.654 205.238 169.625 205.634 169.854L210.571 172.7C210.968 172.928 210.918 173.325 210.46 173.591L208.844 174.524C208.385 174.79 207.693 174.822 207.297 174.587Z"}" fill="${"#161623"}"></path><path d="${"M214.854 178.945L209.916 176.099C209.52 175.871 209.569 175.474 210.028 175.208L211.644 174.276C212.102 174.012 212.794 173.983 213.191 174.212L218.128 177.058C218.525 177.286 218.475 177.683 218.017 177.949L216.4 178.883C215.942 179.145 215.25 179.174 214.854 178.945Z"}" fill="${"#161623"}"></path><path d="${"M222.409 183.3L217.471 180.454C217.075 180.225 217.124 179.829 217.582 179.563L219.199 178.63C219.657 178.367 220.349 178.338 220.746 178.566L225.683 181.413C226.08 181.641 226.03 182.038 225.572 182.304L223.955 183.236C223.497 183.5 222.805 183.529 222.409 183.3Z"}" fill="${"#161623"}"></path><path d="${"M229.968 187.655L225.029 184.809C224.633 184.581 224.682 184.184 225.14 183.918L226.758 182.985C227.216 182.722 227.908 182.693 228.305 182.921L233.243 185.767C233.639 185.996 233.589 186.392 233.131 186.659L231.514 187.591C231.054 187.855 230.359 187.883 229.968 187.655Z"}" fill="${"#161623"}"></path><path d="${"M272.14 211.967L267.203 209.121C266.807 208.893 266.857 208.496 267.314 208.23L268.931 207.298C269.389 207.034 270.082 207.005 270.478 207.234L275.415 210.079C275.811 210.307 275.761 210.704 275.303 210.971L273.687 211.903C273.236 212.167 272.54 212.195 272.14 211.967Z"}" fill="${"#161623"}"></path><path d="${"M279.699 216.322L274.762 213.476C274.365 213.247 274.415 212.851 274.872 212.585L276.49 211.653C276.947 211.389 277.64 211.36 278.037 211.589L282.974 214.435C283.371 214.663 283.321 215.06 282.863 215.326L281.245 216.258C280.788 216.522 280.095 216.551 279.699 216.322Z"}" fill="${"#161623"}"></path><path d="${"M287.254 220.675L282.317 217.829C281.92 217.6 281.969 217.204 282.427 216.938L284.045 216.005C284.502 215.742 285.195 215.713 285.591 215.941L290.529 218.788C290.925 219.016 290.875 219.413 290.418 219.679L288.8 220.611C288.343 220.877 287.65 220.909 287.254 220.675Z"}" fill="${"#161623"}"></path><path d="${"M294.811 225.032L289.873 222.186C289.477 221.957 289.526 221.561 289.984 221.294L291.601 220.363C292.059 220.099 292.751 220.071 293.148 220.299L298.085 223.145C298.482 223.373 298.431 223.769 297.974 224.037L296.357 224.972C295.899 225.232 295.206 225.26 294.811 225.032Z"}" fill="${"#161623"}"></path><path d="${"M219.98 190.895L215.043 188.049C214.646 187.82 214.696 187.424 215.154 187.158L220.046 184.338C220.504 184.074 221.196 184.045 221.593 184.274L226.53 187.119C226.927 187.348 226.877 187.744 226.419 188.011L221.527 190.831C221.07 191.095 220.377 191.124 219.98 190.895Z"}" fill="${"#161623"}"></path><path d="${"M227.605 195.288L222.668 192.442C222.271 192.214 222.321 191.817 222.779 191.551L227.671 188.731C228.129 188.467 228.821 188.438 229.218 188.667L234.155 191.512C234.551 191.741 234.502 192.137 234.044 192.404L229.152 195.224C228.695 195.489 228.002 195.522 227.605 195.288Z"}" fill="${"#161623"}"></path><path d="${"M235.229 199.684L230.291 196.838C229.895 196.61 229.944 196.213 230.402 195.947L235.295 193.127C235.752 192.863 236.445 192.835 236.841 193.063L241.779 195.912C242.175 196.141 242.126 196.537 241.668 196.805L236.776 199.624C236.317 199.884 235.625 199.913 235.229 199.684Z"}" fill="${"#161623"}"></path><path d="${"M242.853 204.08L237.916 201.233C237.52 201.005 237.569 200.608 238.027 200.342L242.92 197.522C243.377 197.259 244.07 197.23 244.466 197.458L249.403 200.304C249.8 200.533 249.751 200.929 249.292 201.196L244.4 204.016C243.942 204.279 243.25 204.308 242.853 204.08Z"}" fill="${"#161623"}"></path><path d="${"M250.48 208.475L245.543 205.628C245.146 205.4 245.196 205.003 245.654 204.737L250.546 201.917C251.004 201.653 251.696 201.624 252.093 201.853L257.03 204.699C257.427 204.927 257.377 205.324 256.919 205.59L252.027 208.41C251.57 208.675 250.877 208.703 250.48 208.475Z"}" fill="${"#161623"}"></path><path d="${"M258.105 212.869L253.168 210.023C252.771 209.795 252.821 209.399 253.279 209.131L258.171 206.312C258.629 206.048 259.321 206.019 259.718 206.248L264.655 209.094C265.052 209.322 265.002 209.719 264.544 209.985L259.652 212.805C259.195 213.069 258.502 213.098 258.105 212.869Z"}" fill="${"#161623"}"></path><path d="${"M265.728 217.263L260.793 214.418C260.396 214.189 260.447 213.793 260.903 213.527L265.796 210.707C266.254 210.443 266.946 210.414 267.343 210.643L272.28 213.488C272.676 213.717 272.627 214.113 272.169 214.38L267.276 217.199C266.818 217.463 266.124 217.492 265.728 217.263Z"}" fill="${"#161623"}"></path><path d="${"M273.354 221.658L268.416 218.813C268.02 218.584 268.069 218.188 268.527 217.921L273.42 215.102C273.877 214.838 274.57 214.809 274.966 215.038L279.903 217.883C280.299 218.112 280.249 218.508 279.792 218.774L274.9 221.594C274.442 221.858 273.75 221.887 273.354 221.658Z"}" fill="${"#161623"}"></path><path d="${"M280.984 226.053L276.047 223.207C275.651 222.979 275.7 222.583 276.158 222.316L281.05 219.496C281.508 219.232 282.2 219.204 282.597 219.432L287.534 222.278C287.931 222.507 287.881 222.903 287.423 223.17L282.528 225.987C282.07 226.253 281.375 226.282 280.984 226.053Z"}" fill="${"#161623"}"></path><path d="${"M176.387 191.437L161.846 183.056C161.449 182.828 161.499 182.431 161.957 182.164L166.849 179.344C167.307 179.08 167.999 179.052 168.396 179.28L182.939 187.662C183.335 187.89 183.286 188.287 182.828 188.553L177.936 191.373C177.476 191.637 176.783 191.665 176.387 191.437Z"}" fill="${"#161623"}"></path><path d="${"M270.061 245.429L255.519 237.048C255.123 236.819 255.173 236.423 255.63 236.156L260.523 233.336C260.981 233.072 261.673 233.043 262.069 233.272L276.611 241.653C277.007 241.882 276.958 242.278 276.5 242.545L271.608 245.365C271.15 245.629 270.457 245.657 270.061 245.429Z"}" fill="${"#161623"}"></path><path d="${"M239.568 237.561L234.631 234.716C234.234 234.487 234.284 234.091 234.742 233.824L240.57 230.465C241.028 230.201 241.72 230.172 242.117 230.401L247.054 233.247C247.45 233.475 247.401 233.872 246.943 234.138L241.115 237.497C240.657 237.761 239.965 237.79 239.568 237.561Z"}" fill="${"#161623"}"></path><path d="${"M184.195 205.646L176.299 201.094C175.903 200.866 175.952 200.469 176.41 200.203L182.238 196.844C182.696 196.58 183.389 196.552 183.784 196.78L191.681 201.331C192.078 201.559 192.028 201.955 191.57 202.223L185.742 205.581C185.287 205.845 184.592 205.874 184.195 205.646Z"}" fill="${"#161623"}"></path><path d="${"M232.221 233.33L224.324 228.779C223.928 228.55 223.978 228.154 224.435 227.887L230.263 224.528C230.721 224.264 231.413 224.236 231.81 224.464L239.706 229.016C240.103 229.244 240.053 229.64 239.595 229.907L233.767 233.266C233.309 233.527 232.617 233.556 232.221 233.33Z"}" fill="${"#161623"}"></path><path d="${"M195.198 211.986L187.301 207.435C186.904 207.207 186.954 206.811 187.412 206.544L193.24 203.185C193.698 202.922 194.39 202.893 194.787 203.121L202.683 207.673C203.079 207.901 203.03 208.298 202.572 208.564L196.744 211.923C196.286 212.186 195.594 212.215 195.198 211.986Z"}" fill="${"#161623"}"></path><path d="${"M194.839 203.152L229.171 222.941C229.596 223.186 229.596 223.584 229.171 223.829L223.224 227.255C222.797 227.5 222.107 227.5 221.681 227.255L187.354 207.466L194.839 203.152Z"}" fill="${"#161623"}"></path><path d="${"M260.878 245.529L266.378 248.699C266.703 248.887 266.662 249.214 266.287 249.43L263.903 250.805C263.527 251.02 262.96 251.044 262.635 250.857L257.136 247.687C256.81 247.499 256.851 247.172 257.227 246.956L259.611 245.582C259.985 245.365 260.553 245.342 260.878 245.529Z"}" fill="${"#161623"}"></path><path d="${"M253.191 241.099L258.691 244.266C259.016 244.454 258.975 244.781 258.6 244.997L256.216 246.375C255.841 246.592 255.277 246.615 254.948 246.428L249.45 243.256C249.125 243.069 249.166 242.741 249.54 242.525L251.925 241.151C252.299 240.934 252.866 240.911 253.191 241.099Z"}" fill="${"#161623"}"></path><path d="${"M245.564 236.704L251.063 239.874C251.388 240.061 251.348 240.388 250.972 240.605L248.586 241.979C248.212 242.194 247.644 242.219 247.319 242.031L241.819 238.861C241.494 238.674 241.535 238.346 241.91 238.13L244.294 236.756C244.674 236.539 245.238 236.516 245.564 236.704Z"}" fill="${"#161623"}"></path><path d="${"M257.4 238.671L262.899 241.84C263.225 242.028 263.184 242.355 262.808 242.572L260.424 243.946C260.049 244.162 259.481 244.185 259.157 243.998L253.657 240.828C253.332 240.641 253.373 240.313 253.748 240.097L256.132 238.723C256.507 238.507 257.075 238.485 257.4 238.671Z"}" fill="${"#161623"}"></path><path d="${"M338.102 229.78L192.428 145.819C190.138 144.498 188.942 141.281 189.758 138.632L222.7 31.8529C223.516 29.2048 226.034 28.1283 228.325 29.4493L373.996 113.411C376.287 114.731 377.482 117.949 376.666 120.598L343.724 227.381C342.908 230.025 340.389 231.1 338.102 229.78Z"}" fill="${"url(#paint3_radial)"}"></path><path d="${"M336.725 226.041L195.434 144.535C193.243 143.271 192.097 140.193 192.878 137.66L224.373 35.5797C225.155 33.0456 227.564 32.0161 229.756 33.2792L371.044 114.784C373.235 116.047 374.381 119.125 373.6 121.658L342.105 223.739C341.327 226.274 338.917 227.305 336.725 226.041Z"}" fill="${"url(#paint4_linear)"}"></path><path opacity="${"0.4"}" d="${"M336.725 226.041L195.434 144.535C193.243 143.271 192.097 140.193 192.878 137.66L224.373 35.5797C225.155 33.0456 227.564 32.0161 229.756 33.2792L371.044 114.784C373.235 116.047 374.381 119.125 373.6 121.658L342.105 223.739C341.327 226.274 338.917 227.305 336.725 226.041Z"}" fill="${"#09133D"}"></path><path d="${"M336.725 226.041L195.434 144.535C193.243 143.271 192.097 140.193 192.878 137.66L224.373 35.5797C225.155 33.0456 227.564 32.0161 229.756 33.2792L371.044 114.784C373.235 116.047 374.381 119.125 373.6 121.658L342.105 223.739C341.327 226.274 338.917 227.305 336.725 226.041Z"}" fill="${"#202235"}"></path><path opacity="${"0.5"}" d="${"M329.134 194.846L233.488 139.716C231.984 138.849 231.199 136.737 231.735 134.998L253.362 64.8866C253.898 63.1477 255.553 62.4416 257.056 63.3079L352.703 118.438C354.207 119.305 354.992 121.417 354.456 123.156L332.826 193.267C332.292 195.006 330.638 195.712 329.134 194.846Z"}" fill="${"#09133D"}"></path><path d="${"M316.209 196.538L220.562 141.408C219.058 140.542 218.273 138.429 218.809 136.691L240.44 66.5785C240.975 64.8405 242.63 64.1335 244.133 65.0006L339.779 120.129C341.284 120.997 342.069 123.109 341.533 124.848L319.903 194.959C319.367 196.698 317.714 197.405 316.209 196.538Z"}" fill="${"url(#paint5_radial)"}"></path><g opacity="${"0.5"}"><path opacity="${"0.5"}" d="${"M316.209 196.538L220.562 141.408C219.058 140.542 218.273 138.429 218.809 136.691L240.44 66.5785C240.975 64.8405 242.63 64.1335 244.133 65.0006L339.779 120.129C341.284 120.997 342.069 123.109 341.533 124.848L319.903 194.959C319.367 196.698 317.714 197.405 316.209 196.538Z"}" fill="${"#09133D"}"></path></g><path d="${"M339.782 120.129L244.135 65.0005C243.192 64.4537 242.191 64.5318 241.443 65.0919C241.928 65.0775 242.407 65.1998 242.824 65.4449L338.472 120.575C339.976 121.441 340.761 123.554 340.226 125.292L318.595 195.404C318.395 196.053 318.039 196.558 317.593 196.888C318.619 196.858 319.533 196.164 319.905 194.956L341.535 124.845C342.071 123.109 341.287 121 339.782 120.129Z"}" fill="${"#F6F6FA"}"></path><path d="${"M195.577 253.791C194.258 253.791 192.994 253.518 192.032 252.962L153.711 230.875C152.694 230.288 152.137 229.452 152.137 228.517C152.137 227.434 152.907 226.367 154.249 225.593L173.974 214.223C176.385 212.835 179.921 212.699 182.034 213.91L220.354 235.998C221.371 236.583 221.928 237.421 221.929 238.355C221.929 239.439 221.159 240.505 219.816 241.279L200.09 252.65C198.78 253.405 197.14 253.791 195.577 253.791ZM178.506 214.203C177.121 214.203 175.65 214.536 174.529 215.181L154.804 226.551C153.812 227.122 153.239 227.84 153.239 228.518C153.239 229.196 153.795 229.65 154.262 229.918L192.583 252.006C194.321 253.006 197.502 252.866 199.532 251.694L219.258 240.324C220.25 239.752 220.818 239.036 220.818 238.356C220.818 237.677 220.262 237.225 219.796 236.957L181.478 214.871C180.7 214.426 179.632 214.203 178.506 214.203V214.203Z"}" fill="${"#161623"}"></path><path d="${"M267.43 101.784L261.517 98.3756C260.97 98.0632 260.675 97.2992 260.86 96.6782C261.046 96.0533 261.643 95.8095 262.19 96.1259L268.103 99.5341C268.651 99.8465 268.947 100.61 268.761 101.232C268.574 101.852 267.979 102.096 267.43 101.784Z"}" fill="${"#8A85B8"}"></path><path d="${"M281.514 109.902L272.795 104.876C272.247 104.563 271.952 103.8 272.137 103.178C272.324 102.557 272.92 102.31 273.468 102.626L282.187 107.652C282.735 107.968 283.03 108.728 282.845 109.349C282.658 109.97 282.063 110.22 281.514 109.902Z"}" fill="${"#8A85B8"}"></path><path d="${"M255.504 128.066L249.592 124.657C249.044 124.344 248.749 123.581 248.934 122.959C249.121 122.338 249.717 122.091 250.264 122.407L256.178 125.815C256.726 126.128 257.021 126.892 256.835 127.513C256.648 128.135 256.053 128.382 255.504 128.066Z"}" fill="${"#8A85B8"}"></path><path d="${"M268.061 135.302L259.342 130.277C258.794 129.965 258.499 129.201 258.684 128.58C258.87 127.955 259.467 127.711 260.015 128.027L268.734 133.053C269.282 133.365 269.577 134.129 269.391 134.75C269.205 135.373 268.609 135.619 268.061 135.302Z"}" fill="${"#8A85B8"}"></path><path d="${"M249.717 97.0968L246.023 94.9674C245.476 94.6549 245.181 93.8918 245.366 93.27C245.552 92.6451 246.148 92.4013 246.696 92.7177L250.39 94.8471C250.938 95.1595 251.234 95.9235 251.047 96.5445C250.858 97.1679 250.266 97.4155 249.717 97.0968Z"}" fill="${"#8A85B8"}"></path><path d="${"M260.832 109.032L249.545 102.527C248.997 102.214 248.702 101.45 248.887 100.829C249.074 100.204 249.67 99.9607 250.218 100.277L261.504 106.783C262.052 107.096 262.347 107.86 262.161 108.481C261.975 109.101 261.38 109.348 260.832 109.032Z"}" fill="${"#8A85B8"}"></path><path d="${"M250.42 114.084L246.727 111.954C246.179 111.642 245.883 110.879 246.069 110.257C246.255 109.632 246.852 109.388 247.399 109.705L251.093 111.834C251.641 112.146 251.936 112.91 251.75 113.531C251.564 114.152 250.969 114.4 250.42 114.084Z"}" fill="${"#8A85B8"}"></path><path d="${"M269.421 147.139L259.555 141.452C259.007 141.14 258.712 140.376 258.897 139.755C259.083 139.134 259.68 138.886 260.227 139.203L270.093 144.889C270.641 145.202 270.936 145.966 270.751 146.587C270.565 147.208 269.969 147.455 269.421 147.139Z"}" fill="${"#8A85B8"}"></path><path d="${"M246.281 122.749L243.91 121.383C243.362 121.067 243.067 120.307 243.253 119.686C243.438 119.061 244.035 118.817 244.583 119.133L246.955 120.499C247.502 120.816 247.797 121.576 247.611 122.197C247.425 122.819 246.829 123.066 246.281 122.749Z"}" fill="${"#8A85B8"}"></path><path d="${"M244.038 132.508L241.093 130.81C240.545 130.498 240.25 129.735 240.437 129.113C240.622 128.492 241.219 128.244 241.767 128.561L244.711 130.258C245.259 130.571 245.554 131.335 245.369 131.956C245.182 132.577 244.587 132.824 244.038 132.508Z"}" fill="${"#8A85B8"}"></path><path d="${"M255.494 139.111L247.728 134.636C247.181 134.324 246.886 133.56 247.071 132.939C247.257 132.318 247.854 132.07 248.401 132.386L256.165 136.861C256.713 137.173 257.008 137.937 256.822 138.558C256.638 139.18 256.043 139.427 255.494 139.111Z"}" fill="${"#8A85B8"}"></path><path d="${"M245.267 138.743L239.685 135.525C239.138 135.213 238.843 134.449 239.028 133.828C239.214 133.203 239.81 132.959 240.358 133.276L245.94 136.493C246.487 136.806 246.782 137.569 246.597 138.191C246.411 138.811 245.815 139.059 245.267 138.743Z"}" fill="${"#8A85B8"}"></path><path d="${"M277.889 152.041L274.304 149.975C273.756 149.663 273.461 148.899 273.648 148.278C273.833 147.653 274.43 147.409 274.978 147.726L278.562 149.792C279.11 150.108 279.405 150.868 279.219 151.489C279.033 152.11 278.438 152.358 277.889 152.041Z"}" fill="${"#8A85B8"}"></path><path d="${"M264.163 122.004L254.296 116.317C253.749 116.005 253.454 115.241 253.64 114.62C253.825 113.995 254.422 113.751 254.97 114.068L264.836 119.754C265.384 120.067 265.679 120.83 265.493 121.452C265.307 122.073 264.712 122.32 264.163 122.004Z"}" fill="${"#8A85B8"}"></path><path d="${"M265.334 117.152L248.139 107.241C247.591 106.929 247.296 106.165 247.481 105.543C247.667 104.922 248.264 104.675 248.811 104.991L266.008 114.903C266.556 115.215 266.851 115.978 266.665 116.6C266.477 117.221 265.882 117.469 265.334 117.152Z"}" fill="${"#7574AD"}"></path><path d="${"M255.186 122.356L245.32 116.669C244.772 116.356 244.477 115.592 244.663 114.971C244.849 114.346 245.445 114.103 245.993 114.419L255.858 120.106C256.406 120.418 256.701 121.182 256.516 121.803C256.33 122.424 255.735 122.672 255.186 122.356Z"}" fill="${"#7574AD"}"></path><path d="${"M271.647 126.318L268.062 124.251C267.515 123.938 267.22 123.175 267.405 122.553C267.59 121.928 268.188 121.685 268.735 122.001L272.32 124.067C272.868 124.379 273.163 125.143 272.978 125.764C272.791 126.39 272.196 126.633 271.647 126.318Z"}" fill="${"#7574AD"}"></path><path d="${"M308.111 125.23L286.883 112.995C286.335 112.683 286.04 111.919 286.225 111.298C286.411 110.673 287.008 110.429 287.556 110.745L308.784 122.981C309.331 123.297 309.626 124.057 309.441 124.678C309.255 125.297 308.659 125.547 308.111 125.23Z"}" fill="${"#7574AD"}"></path><path d="${"M254.361 132.933L242.502 126.097C241.954 125.785 241.659 125.021 241.845 124.4C242.03 123.775 242.627 123.531 243.175 123.847L255.034 130.686C255.581 130.999 255.877 131.763 255.691 132.385C255.505 133.002 254.91 133.249 254.361 132.933Z"}"${add_attribute("fill", $color, 0)}></path><path d="${"M256.151 95.2813L247.431 90.2562C246.883 89.9438 246.588 89.1798 246.775 88.5588C246.96 87.9339 247.557 87.6902 248.105 88.0058L256.823 93.0347C257.37 93.3472 257.665 94.1111 257.48 94.7321C257.294 95.35 256.699 95.5976 256.151 95.2813Z"}"${add_attribute("fill", $color, 0)}></path><path d="${"M243.444 143.218L233.346 137.397C232.798 137.08 232.502 136.321 232.689 135.699C232.874 135.074 233.471 134.831 234.019 135.147L244.117 140.967C244.664 141.284 244.959 142.044 244.774 142.665C244.587 143.286 243.992 143.533 243.444 143.218Z"}" fill="${"#7574AD"}"></path><path d="${"M310.494 114.331L306.171 111.84C305.771 111.605 305.556 111.053 305.691 110.599C305.827 110.145 306.262 109.964 306.663 110.195L310.985 112.687C311.386 112.921 311.601 113.473 311.466 113.928C311.33 114.382 310.894 114.562 310.494 114.331Z"}" fill="${"#F6F6FA"}"></path><path d="${"M318.738 119.083L314.416 116.591C314.014 116.357 313.799 115.805 313.935 115.351C314.071 114.897 314.506 114.716 314.907 114.947L319.229 117.438C319.63 117.672 319.845 118.225 319.71 118.679C319.574 119.133 319.138 119.314 318.738 119.083Z"}" fill="${"#F6F6FA"}"></path><path d="${"M326.982 123.835L322.659 121.344C322.259 121.11 322.043 120.557 322.18 120.103C322.315 119.649 322.75 119.468 323.151 119.7L327.473 122.191C327.875 122.425 328.09 122.977 327.954 123.431C327.818 123.886 327.382 124.066 326.982 123.835Z"}" fill="${"#F6F6FA"}"></path><path d="${"M331.033 126.174L330.904 126.096C330.503 125.861 330.288 125.309 330.423 124.855C330.559 124.401 330.994 124.22 331.395 124.451L331.525 124.53C331.926 124.764 332.141 125.316 332.005 125.77C331.869 126.224 331.435 126.405 331.033 126.174Z"}"${add_attribute("fill", $color, 0)}></path><path d="${"M107.952 176.671C105.176 176.674 102.448 175.946 100.042 174.562L71.0876 157.871C70.4779 157.52 69.9715 157.014 69.6194 156.406C69.2674 155.798 69.082 155.107 69.082 154.405C69.082 153.702 69.2674 153.012 69.6194 152.403C69.9715 151.795 70.4779 151.29 71.0876 150.939L100.039 134.25C102.445 132.868 105.173 132.14 107.95 132.14C110.726 132.14 113.454 132.868 115.861 134.25L144.812 150.939C145.422 151.29 145.928 151.796 146.28 152.404C146.632 153.012 146.817 153.703 146.817 154.405C146.817 155.108 146.632 155.798 146.28 156.407C145.928 157.015 145.422 157.52 144.812 157.871L115.861 174.56C113.456 175.944 110.729 176.672 107.952 176.671ZM100.983 172.933C103.104 174.15 105.507 174.791 107.953 174.791C110.399 174.791 112.802 174.15 114.923 172.933L143.874 156.245C144.196 156.058 144.463 155.791 144.649 155.468C144.835 155.146 144.933 154.781 144.933 154.409C144.933 154.038 144.835 153.672 144.649 153.35C144.463 153.028 144.196 152.76 143.874 152.574L114.923 135.884C112.802 134.667 110.399 134.026 107.953 134.026C105.507 134.026 103.103 134.667 100.983 135.884L72.032 152.573C71.7097 152.759 71.4422 153.027 71.2562 153.349C71.0702 153.671 70.9723 154.037 70.9723 154.409C70.9723 154.78 71.0702 155.146 71.2562 155.468C71.4422 155.79 71.7097 156.058 72.032 156.244L100.983 172.933Z"}"${add_attribute("fill", $color, 0)}></path><path opacity="${"0.6"}" d="${"M107.807 166.263C118.79 166.263 127.694 161.131 127.694 154.8C127.694 148.469 118.79 143.337 107.807 143.337C96.8237 143.337 87.9199 148.469 87.9199 154.8C87.9199 161.131 96.8237 166.263 107.807 166.263Z"}" fill="${"#030830"}"></path><path d="${"M137.286 73.1023H80.6406L85.9097 134.33C85.9097 137.731 88.1601 141.131 92.6624 143.725C101.665 148.915 116.262 148.915 125.265 143.725C129.768 141.13 132.018 137.73 132.018 134.329L137.286 73.1023Z"}" fill="${"url(#paint6_radial)"}"></path><path opacity="${"0.4"}" d="${"M137.286 73.1023H80.6406L81.5076 83.1752C82.8057 84.8367 84.5522 86.4295 86.7579 87.8902C97.5817 95.0581 115.441 96.4399 127.628 91.2773L125.742 136.059C125.664 138.012 124.985 139.909 123.718 141.398C121.883 143.554 118.348 146.091 111.553 147.525C116.56 147.201 121.423 145.94 125.264 143.726C129.766 141.131 132.016 137.731 132.016 134.33L136.242 85.2265L137.286 73.1023Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M108.963 89.4268C124.606 89.4268 137.286 82.1181 137.286 73.1023C137.286 64.0866 124.606 56.7778 108.963 56.7778C93.3212 56.7778 80.6406 64.0866 80.6406 73.1023C80.6406 82.1181 93.3212 89.4268 108.963 89.4268Z"}" fill="${"#09133D"}"></path><path opacity="${"0.4"}" d="${"M108.963 81.4094C122.436 81.4094 133.358 75.1142 133.358 67.3486C133.358 59.5831 122.436 53.2878 108.963 53.2878C95.4903 53.2878 84.5684 59.5831 84.5684 67.3486C84.5684 75.1142 95.4903 81.4094 108.963 81.4094Z"}" fill="${"#09133D"}"></path><path d="${"M138.967 72.3347L138.962 72.2855C138.962 72.2573 138.956 72.2292 138.953 72.2019L138.41 66.7197L138.386 66.7815C138.143 62.632 135.28 58.5239 129.785 55.3563C118.283 48.7282 99.6415 48.7282 88.1416 55.3563C82.5079 58.6043 79.6417 62.8398 79.5283 67.0955L79.522 67.0814L79.004 71.9628C78.9892 72.0902 78.9727 72.2167 78.9633 72.344L78.9547 72.4222H78.9602C78.6472 77.0724 81.569 81.7812 87.7293 85.3323C99.4568 92.0916 118.471 92.0924 130.2 85.3323C136.399 81.7593 139.319 77.013 138.967 72.3347Z"}" fill="${"url(#paint7_linear)"}"></path><path d="${"M108.963 81.4094C122.436 81.4094 133.358 75.1142 133.358 67.3486C133.358 59.5831 122.436 53.2878 108.963 53.2878C95.4903 53.2878 84.5684 59.5831 84.5684 67.3486C84.5684 75.1142 95.4903 81.4094 108.963 81.4094Z"}" fill="${"url(#paint8_linear)"}"></path><path d="${"M107.807 81.4094C121.28 81.4094 132.202 75.1142 132.202 67.3486C132.202 59.5831 121.28 53.2878 107.807 53.2878C94.3341 53.2878 83.4121 59.5831 83.4121 67.3486C83.4121 75.1142 94.3341 81.4094 107.807 81.4094Z"}" fill="${"url(#paint9_linear)"}"></path><path opacity="${"0.4"}" d="${"M94.608 59.5002C104.135 54.0087 119.58 54.0087 129.108 59.5002C129.229 59.5705 129.331 59.6471 129.449 59.7182C128.452 58.8391 127.368 58.0643 126.213 57.406C116.687 51.9145 101.24 51.9145 91.7137 57.406C82.3085 62.8264 82.2068 71.5674 91.3733 77.073C85.2529 71.6252 86.3249 64.2738 94.608 59.5002Z"}" fill="${"#09133D"}"></path><path d="${"M91.7129 59.8463C101.24 54.3548 116.686 54.3548 126.212 59.8463C130.438 62.2812 132.785 65.387 133.262 68.5687C133.862 64.5754 131.515 60.4619 126.212 57.406C116.686 51.9145 101.24 51.9145 91.7129 57.406C86.4109 60.4626 84.0643 64.5754 84.6637 68.5687C85.1418 65.3862 87.4892 62.2804 91.7129 59.8463Z"}" fill="${"url(#paint10_linear)"}"></path><path d="${"M129.968 55.4866C118.485 48.7328 99.7724 48.5679 88.1724 55.1194C76.5725 61.6709 76.4778 72.4554 87.9612 79.2092C99.4446 85.963 118.156 86.1278 129.756 79.5771C141.356 73.0264 141.451 62.2404 129.968 55.4866ZM126.213 77.2907C123.03 79.1249 119.182 80.3317 115.12 80.9403L114.677 79.4881C114.59 79.203 114.414 78.9533 114.175 78.7755C113.935 78.5978 113.645 78.5015 113.347 78.5007H104.583C104.284 78.5008 103.993 78.5968 103.752 78.7746C103.512 78.9523 103.335 79.2025 103.248 79.4881L102.806 80.9403C98.7435 80.3317 94.8961 79.1241 91.7139 77.29C82.1866 71.7993 82.1866 62.8965 91.7139 57.4058C101.241 51.9152 116.687 51.9144 126.213 57.4058C135.74 62.8973 135.741 71.7993 126.213 77.2907Z"}" fill="${"url(#paint11_radial)"}"></path><path d="${"M126.211 56.3647C116.685 50.8739 101.239 50.8732 91.7116 56.3647C86.7187 59.2425 84.3479 63.0569 84.5912 66.8267C84.8095 63.4045 87.1804 60.0182 91.7116 57.406C101.239 51.9144 116.685 51.9144 126.211 57.406C130.749 60.0189 133.116 63.4045 133.331 66.8275C133.578 63.0576 131.206 59.2425 126.211 56.3647Z"}" fill="${"#F6F6FA"}"></path><path d="${"M129.755 78.536C118.155 85.0867 99.4428 84.9218 87.9593 78.1681C82.4946 74.9544 79.6582 70.8253 79.4305 66.6782C79.2044 71.1714 82.0384 75.727 87.9593 79.2093C99.4428 85.9631 118.155 86.1279 129.755 79.5773C135.834 76.1402 138.748 71.5471 138.496 66.9766C138.283 71.1971 135.373 75.363 129.755 78.536Z"}" fill="${"#F6F6FA"}"></path><path d="${"M112.192 80.2842H105.734C105.706 80.2842 105.684 80.3069 105.684 80.335V81.6465C105.684 81.6745 105.706 81.6973 105.734 81.6973H112.192C112.22 81.6973 112.243 81.6745 112.243 81.6465V80.335C112.243 80.3069 112.22 80.2842 112.192 80.2842Z"}" fill="${"#1C226D"}"></path><path d="${"M111.58 80.2842H106.345C106.169 80.2842 106.001 80.3537 105.877 80.4775C105.753 80.6013 105.684 80.7692 105.684 80.9442V81.0372C105.687 81.0972 105.699 81.1563 105.719 81.213C105.755 81.0748 105.837 80.9525 105.95 80.8649C106.063 80.7772 106.202 80.7291 106.345 80.7279H111.58C111.723 80.7292 111.862 80.7774 111.975 80.865C112.088 80.9527 112.169 81.0749 112.206 81.213C112.226 81.1562 112.238 81.0971 112.241 81.0372V80.9442C112.241 80.7692 112.172 80.6013 112.048 80.4775C111.924 80.3537 111.756 80.2842 111.58 80.2842Z"}" fill="${"url(#paint12_linear)"}"></path><path d="${"M109.765 128.041C109.456 129.199 108.7 130.187 107.661 130.789C106.622 131.39 105.387 131.555 104.227 131.247C103.067 130.939 102.076 130.183 101.474 129.147C100.872 128.11 100.707 126.877 101.015 125.718C101.657 123.307 103.935 122.624 106.351 123.266C108.766 123.907 110.405 125.629 109.765 128.041Z"}"${add_attribute("fill", $color, 0)}></path><path d="${"M113.327 123.281C112.417 124.17 111.251 124.055 110.478 123.265C109.705 122.474 109.617 121.312 110.526 120.42C111.435 119.528 113.169 119.092 113.943 119.883C114.717 120.675 114.239 122.392 113.327 123.281Z"}"${add_attribute("fill", $color, 0)}></path><path d="${"M108.596 119.502C108.373 120.751 107.358 121.336 106.268 121.142C105.178 120.947 104.428 120.048 104.651 118.798C104.874 117.549 106.028 116.184 107.118 116.377C108.208 116.57 108.82 118.249 108.596 119.502Z"}"${add_attribute("fill", $color, 0)}></path><path d="${"M102.761 118.923C103.245 120.095 102.702 121.135 101.678 121.556C100.655 121.976 99.5392 121.621 99.0548 120.445C98.5705 119.268 98.8115 117.502 99.8373 117.081C100.863 116.661 102.275 117.747 102.761 118.923Z"}"${add_attribute("fill", $color, 0)}></path><path opacity="${"0.5"}" d="${"M110.819 80.9903C110.819 80.9903 126.656 75.6925 120.244 57.5261C113.831 39.3596 101.346 33.8236 106.376 19.2942C106.376 19.2942 98.4943 31.0591 105.86 46.9766C113.225 62.8941 114.84 61.0647 114.754 68.6778C114.651 77.7211 107.332 80.9942 107.332 80.9942L110.819 80.9903Z"}" fill="${"white"}"></path><path opacity="${"0.5"}" d="${"M112.243 21.8183C112.243 21.8183 110.594 10.951 120.805 0C120.805 0 111.776 20.1334 114.729 30.0743C114.729 30.0743 112.34 23.7548 112.243 21.8183Z"}" fill="${"white"}"></path><defs><radialGradient id="${"paint0_radial"}" cx="${"0"}" cy="${"0"}" r="${"1"}" gradientUnits="${"userSpaceOnUse"}" gradientTransform="${"translate(228.091 23.3111) scale(226.103 225.724)"}"><stop stop-color="${"#8A85B8"}"></stop><stop offset="${"0.47"}" stop-color="${"#7574AD"}"></stop><stop offset="${"0.59"}" stop-color="${"#54537F"}"></stop><stop offset="${"0.68"}" stop-color="${"#3B395B"}"></stop><stop offset="${"0.74"}" stop-color="${"#383E5C"}"></stop></radialGradient><radialGradient id="${"paint1_radial"}" cx="${"0"}" cy="${"0"}" r="${"1"}" gradientUnits="${"userSpaceOnUse"}" gradientTransform="${"translate(289092 377720) scale(795671 455533)"}"><stop stop-color="${"#8A85B8"}"></stop><stop offset="${"0.47"}" stop-color="${"#7574AD"}"></stop><stop offset="${"0.59"}" stop-color="${"#54537F"}"></stop><stop offset="${"0.68"}" stop-color="${"#3B395B"}"></stop><stop offset="${"0.74"}" stop-color="${"#383E5C"}"></stop></radialGradient><radialGradient id="${"paint2_radial"}" cx="${"0"}" cy="${"0"}" r="${"1"}" gradientUnits="${"userSpaceOnUse"}" gradientTransform="${"translate(181.5 200.26) scale(221.712 221.341)"}"><stop stop-color="${"#F6F6FA"}"></stop><stop offset="${"0.29"}" stop-color="${"#837DB2"}"></stop><stop offset="${"0.35"}" stop-color="${"#6D6898"}"></stop><stop offset="${"0.44"}" stop-color="${"#524F77"}"></stop><stop offset="${"0.51"}" stop-color="${"#413F62"}"></stop><stop offset="${"0.56"}" stop-color="${"#3B395B"}"></stop><stop offset="${"0.88"}" stop-color="${"#393C5C"}"></stop><stop offset="${"0.95"}" stop-color="${"#383E5C"}"></stop></radialGradient><radialGradient id="${"paint3_radial"}" cx="${"0"}" cy="${"0"}" r="${"1"}" gradientUnits="${"userSpaceOnUse"}" gradientTransform="${"translate(402057 181578) scale(541685 582261)"}"><stop stop-color="${"#F6F6FA"}"></stop><stop offset="${"0.29"}" stop-color="${"#837DB2"}"></stop><stop offset="${"0.35"}" stop-color="${"#6D6898"}"></stop><stop offset="${"0.44"}" stop-color="${"#524F77"}"></stop><stop offset="${"0.51"}" stop-color="${"#413F62"}"></stop><stop offset="${"0.56"}" stop-color="${"#3B395B"}"></stop><stop offset="${"0.88"}" stop-color="${"#393C5C"}"></stop><stop offset="${"0.95"}" stop-color="${"#383E5C"}"></stop></radialGradient><linearGradient id="${"paint4_linear"}" x1="${"192.633"}" y1="${"129.659"}" x2="${"373.848"}" y2="${"129.659"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#3C3689"}"></stop><stop offset="${"1"}" stop-color="${"#50418E"}"></stop></linearGradient><radialGradient id="${"paint5_radial"}" cx="${"0"}" cy="${"0"}" r="${"1"}" gradientUnits="${"userSpaceOnUse"}" gradientTransform="${"translate(134245 37628.9) scale(553950 595440)"}"><stop stop-color="${"#F6F6FA"}"></stop><stop offset="${"0.29"}" stop-color="${"#837DB2"}"></stop><stop offset="${"0.35"}" stop-color="${"#6D6898"}"></stop><stop offset="${"0.44"}" stop-color="${"#524F77"}"></stop><stop offset="${"0.51"}" stop-color="${"#413F62"}"></stop><stop offset="${"0.56"}" stop-color="${"#3B395B"}"></stop><stop offset="${"0.88"}" stop-color="${"#393C5C"}"></stop><stop offset="${"0.95"}" stop-color="${"#383E5C"}"></stop></radialGradient><radialGradient id="${"paint6_radial"}" cx="${"0"}" cy="${"0"}" r="${"1"}" gradientUnits="${"userSpaceOnUse"}" gradientTransform="${"translate(55081.2 86976.1) scale(121207 159445)"}"><stop stop-color="${"#F6F6FA"}"></stop><stop offset="${"0.29"}" stop-color="${"#837DB2"}"></stop><stop offset="${"0.35"}" stop-color="${"#6D6898"}"></stop><stop offset="${"0.44"}" stop-color="${"#524F77"}"></stop><stop offset="${"0.51"}" stop-color="${"#413F62"}"></stop><stop offset="${"0.56"}" stop-color="${"#3B395B"}"></stop><stop offset="${"0.88"}" stop-color="${"#393C5C"}"></stop><stop offset="${"0.95"}" stop-color="${"#383E5C"}"></stop></radialGradient><linearGradient id="${"paint7_linear"}" x1="${"78.9383"}" y1="${"70.3951"}" x2="${"138.993"}" y2="${"70.3951"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#8A85B8"}"></stop><stop offset="${"0.08"}" stop-color="${"#8580B4"}"></stop><stop offset="${"0.27"}" stop-color="${"#837DB2"}"></stop><stop offset="${"0.29"}" stop-color="${"#7B76A9"}"></stop><stop offset="${"0.38"}" stop-color="${"#64608D"}"></stop><stop offset="${"0.48"}" stop-color="${"#524F77"}"></stop><stop offset="${"0.59"}" stop-color="${"#454267"}"></stop><stop offset="${"0.71"}" stop-color="${"#3D3B5E"}"></stop><stop offset="${"0.88"}" stop-color="${"#3B395B"}"></stop></linearGradient><linearGradient id="${"paint8_linear"}" x1="${"84.5684"}" y1="${"67.3486"}" x2="${"133.358"}" y2="${"67.3486"}" gradientUnits="${"userSpaceOnUse"}"><stop offset="${"0.16"}" stop-color="${"#383E5C"}"></stop><stop offset="${"0.55"}" stop-color="${"#393F5E"}"></stop><stop offset="${"0.7"}" stop-color="${"#3F4465"}"></stop><stop offset="${"0.8"}" stop-color="${"#474C70"}"></stop><stop offset="${"0.88"}" stop-color="${"#545781"}"></stop><stop offset="${"0.95"}" stop-color="${"#646597"}"></stop><stop offset="${"1"}" stop-color="${"#7574AD"}"></stop></linearGradient><linearGradient id="${"paint9_linear"}" x1="${"83.4121"}" y1="${"67.3486"}" x2="${"132.202"}" y2="${"67.3486"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#383E5C"}"></stop><stop offset="${"1"}" stop-color="${"#7574AD"}"></stop></linearGradient><linearGradient id="${"paint10_linear"}" x1="${"52810.3"}" y1="${"11972.4"}" x2="${"91161.5"}" y2="${"11972.4"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#383E5C"}"></stop><stop offset="${"1"}" stop-color="${"#7574AD"}"></stop></linearGradient><radialGradient id="${"paint11_radial"}" cx="${"0"}" cy="${"0"}" r="${"1"}" gradientUnits="${"userSpaceOnUse"}" gradientTransform="${"translate(54047.9 23356.8) scale(82736.6 47693.1)"}"><stop stop-color="${"#F6F6FA"}"></stop><stop offset="${"0.29"}" stop-color="${"#837DB2"}"></stop><stop offset="${"0.35"}" stop-color="${"#6D6898"}"></stop><stop offset="${"0.44"}" stop-color="${"#524F77"}"></stop><stop offset="${"0.51"}" stop-color="${"#413F62"}"></stop><stop offset="${"0.56"}" stop-color="${"#3B395B"}"></stop><stop offset="${"0.88"}" stop-color="${"#393C5C"}"></stop><stop offset="${"0.95"}" stop-color="${"#383E5C"}"></stop></radialGradient><linearGradient id="${"paint12_linear"}" x1="${"105.103"}" y1="${"80.7482"}" x2="${"113.614"}" y2="${"80.7482"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#1D225B"}"></stop><stop offset="${"0.24"}" stop-color="${"#1F235D"}"></stop><stop offset="${"0.37"}" stop-color="${"#272764"}"></stop><stop offset="${"0.47"}" stop-color="${"#352F70"}"></stop><stop offset="${"0.56"}" stop-color="${"#473980"}"></stop><stop offset="${"0.61"}" stop-color="${"#57418E"}"></stop><stop offset="${"0.65"}" stop-color="${"#715184"}"></stop><stop offset="${"0.72"}" stop-color="${"#966876"}"></stop><stop offset="${"0.79"}" stop-color="${"#B37A6A"}"></stop><stop offset="${"0.86"}" stop-color="${"#C78762"}"></stop><stop offset="${"0.93"}" stop-color="${"#D48E5E"}"></stop><stop offset="${"1"}" stop-color="${"#D8915C"}"></stop></linearGradient></defs></svg>
        
</div>`;
});

/* src/components/DesignIcon.svelte generated by Svelte v3.35.0 */

const css$6 = {
	code: ".design-icon-container.svelte-1ty1afj.svelte-1ty1afj{display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:0}.design-icon-container.svelte-1ty1afj>svg.svelte-1ty1afj{width:100%;height:auto}@media screen and (min-width: 1600){}@media screen and (max-width: 1200){.design-icon-container.svelte-1ty1afj.svelte-1ty1afj{display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:0;width:13rem;height:90%}}",
	map: "{\"version\":3,\"file\":\"DesignIcon.svelte\",\"sources\":[\"DesignIcon.svelte\"],\"sourcesContent\":[\"<script lang=\\\"ts\\\">import { color } from '../stores.js';\\n</script>\\n\\n<!-- Icon SVG code for changing colors -->\\n\\n<div class=\\\"design-icon-container\\\">\\n    <svg viewBox=\\\"0 0 575 328\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n        <path d=\\\"M551.576 228.84C549.839 228.841 548.132 228.384 546.627 227.516L529.944 217.874C529.474 217.602 529.084 217.212 528.812 216.742C528.541 216.272 528.398 215.738 528.398 215.195C528.398 214.652 528.541 214.119 528.812 213.649C529.084 213.179 529.474 212.788 529.944 212.517L546.628 202.877C548.134 202.01 549.84 201.553 551.577 201.553C553.314 201.553 555.021 202.01 556.526 202.877L573.209 212.518C573.679 212.79 574.069 213.18 574.34 213.65C574.612 214.12 574.754 214.654 574.754 215.197C574.754 215.74 574.612 216.273 574.34 216.743C574.069 217.213 573.679 217.604 573.209 217.875L556.523 227.516C555.019 228.384 553.313 228.841 551.576 228.84V228.84ZM551.576 204.199C550.305 204.198 549.055 204.531 547.953 205.166L531.267 214.809C531.199 214.848 531.143 214.904 531.105 214.972C531.066 215.039 531.045 215.116 531.045 215.194C531.045 215.272 531.066 215.348 531.105 215.416C531.143 215.484 531.199 215.54 531.267 215.579L547.95 225.22C549.053 225.855 550.303 226.189 551.575 226.189C552.847 226.189 554.097 225.855 555.2 225.22L571.886 215.583C571.954 215.544 572.009 215.487 572.048 215.42C572.087 215.352 572.107 215.275 572.107 215.197C572.107 215.119 572.087 215.043 572.048 214.975C572.009 214.907 571.954 214.851 571.886 214.812L555.203 205.169C554.1 204.533 552.848 204.198 551.575 204.199H551.576Z\\\" fill=\\\"{$color}\\\"/>\\n        <path d=\\\"M472.945 273.188C470.124 273.189 467.352 272.448 464.908 271.038V271.038L436.195 254.449C435.531 254.066 434.98 253.515 434.597 252.851C434.214 252.187 434.013 251.434 434.013 250.667C434.013 249.9 434.214 249.147 434.597 248.483C434.98 247.819 435.531 247.268 436.195 246.885L464.906 230.296C467.352 228.888 470.124 228.147 472.945 228.147C475.766 228.147 478.538 228.888 480.984 230.296L509.696 246.885C510.359 247.268 510.91 247.819 511.293 248.483C511.676 249.147 511.878 249.9 511.878 250.667C511.878 251.434 511.676 252.187 511.293 252.851C510.91 253.515 510.359 254.066 509.696 254.449L480.984 271.038C478.539 272.448 475.767 273.189 472.945 273.188V273.188ZM466.229 268.745C468.273 269.92 470.589 270.539 472.946 270.539C475.303 270.539 477.619 269.92 479.662 268.745L508.374 252.156C508.635 252.004 508.851 251.787 509.002 251.525C509.153 251.264 509.232 250.967 509.232 250.665C509.232 250.364 509.153 250.067 509.002 249.805C508.851 249.544 508.635 249.327 508.374 249.175L479.662 232.586C477.619 231.411 475.302 230.792 472.945 230.792C470.588 230.792 468.272 231.411 466.228 232.586L437.516 249.175C437.255 249.327 437.039 249.544 436.888 249.805C436.738 250.067 436.658 250.364 436.658 250.665C436.658 250.967 436.738 251.264 436.888 251.525C437.039 251.787 437.255 252.004 437.516 252.156L466.229 268.745Z\\\" fill=\\\"{$color}\\\"/>\\n        <path d=\\\"M38.9338 225.616C36.1116 225.618 33.3385 224.877 30.8935 223.466L2.18188 206.877C1.51852 206.494 0.967648 205.943 0.584643 205.279C0.201638 204.615 0 203.862 0 203.095C0 202.329 0.201638 201.575 0.584643 200.912C0.967648 200.248 1.51852 199.696 2.18188 199.313L30.8921 182.725C33.338 181.316 36.1102 180.575 38.9318 180.575C41.7534 180.575 44.5256 181.316 46.9714 182.725L75.683 199.313C76.3464 199.696 76.8973 200.248 77.2803 200.912C77.6633 201.575 77.8649 202.329 77.8649 203.095C77.8649 203.862 77.6633 204.615 77.2803 205.279C76.8973 205.943 76.3464 206.494 75.683 206.877L46.9728 223.466C44.5281 224.876 41.7555 225.618 38.9338 225.616ZM38.9338 183.214C36.576 183.213 34.2595 183.833 32.2165 185.011L3.50628 201.6C3.24501 201.75 3.02803 201.968 2.87717 202.229C2.72631 202.49 2.64689 202.787 2.64689 203.089C2.64689 203.391 2.72631 203.688 2.87717 203.949C3.02803 204.211 3.24501 204.428 3.50628 204.579L32.2179 221.167C34.2613 222.343 36.5773 222.962 38.9345 222.962C41.2917 222.962 43.6077 222.343 45.6512 221.167L74.3614 204.579C74.623 204.428 74.8403 204.211 74.9915 203.949C75.1426 203.688 75.2222 203.391 75.2222 203.089C75.2222 202.787 75.1426 202.49 74.9915 202.229C74.8403 201.967 74.623 201.75 74.3614 201.6L45.6498 185.011C43.6068 183.833 41.2903 183.213 38.9325 183.214H38.9338Z\\\" fill=\\\"{$color}\\\"/>\\n        <path d=\\\"M129.787 121.556C125.889 121.56 122.058 120.535 118.681 118.585V118.585L78.0274 95.0943C77.1722 94.5998 76.4621 93.8887 75.9684 93.0325C75.4747 92.1763 75.2148 91.2051 75.2148 90.2165C75.2148 89.2279 75.4747 88.2567 75.9684 87.4005C76.4621 86.5443 77.1722 85.8332 78.0274 85.3387L118.679 61.849C122.058 59.9029 125.888 58.8787 129.786 58.8787C133.684 58.8787 137.513 59.9029 140.892 61.849L181.54 85.3387C182.395 85.8331 183.106 86.5443 183.6 87.4006C184.094 88.257 184.354 89.2284 184.354 90.2172C184.354 91.206 184.094 92.1774 183.6 93.0338C183.106 93.8901 182.395 94.6012 181.54 95.0957L140.893 118.585C137.516 120.535 133.686 121.56 129.787 121.556V121.556ZM120.011 116.293C122.987 118.007 126.361 118.908 129.794 118.908C133.227 118.908 136.601 118.007 139.577 116.293L180.224 92.8037C180.677 92.5413 181.053 92.1642 181.314 91.7104C181.576 91.2565 181.714 90.7418 181.714 90.2179C181.714 89.6939 181.576 89.1792 181.314 88.7254C181.053 88.2715 180.677 87.8945 180.224 87.6321L139.569 64.1438C136.593 62.4303 133.219 61.5285 129.786 61.5285C126.352 61.5285 122.979 62.4303 120.002 64.1438L79.3559 87.6321C78.9025 87.894 78.5259 88.2708 78.2641 88.7246C78.0023 89.1784 77.8645 89.6932 77.8645 90.2172C77.8645 90.7412 78.0023 91.256 78.2641 91.7098C78.5259 92.1636 78.9025 92.5404 79.3559 92.8023L120.011 116.293Z\\\" fill=\\\"{$color}\\\"/>\\n        <path opacity=\\\"0.6\\\" d=\\\"M221.25 325.757L102.944 257.315C97.1933 253.998 97.9142 248.191 104.554 244.35L357.745 98.0255C364.385 94.1879 374.428 93.7718 380.179 97.0938L498.485 165.536C504.235 168.854 503.514 174.66 496.874 178.501L243.683 324.826C237.043 328.662 227 329.08 221.25 325.757Z\\\" fill=\\\"#030830\\\"/>\\n        <path d=\\\"M492.387 133.662L492.525 133.83L380.59 69.0686C374.88 65.7702 364.908 66.1835 358.315 69.9934L107.548 214.917L99.1855 211.721L101.533 223.471H101.544C101.856 225.238 103.092 226.891 105.309 228.171L220.834 295.005C226.543 298.304 236.515 297.891 243.108 294.08L494.513 148.79C497.615 146.993 499.398 144.771 499.842 142.569L499.855 142.586L502.254 131.156L492.387 133.662Z\\\" fill=\\\"url(#paint0_radial)\\\"/>\\n        <path d=\\\"M221.25 284.662L102.944 216.221C97.1933 212.903 97.9142 207.097 104.554 203.255L357.745 56.9311C364.385 53.0935 374.428 52.6761 380.179 55.9993L498.485 124.442C504.235 127.76 503.514 133.566 496.874 137.406L243.683 283.73C237.043 287.568 227 287.985 221.25 284.662Z\\\" fill=\\\"#717CB4\\\"/>\\n        <path d=\\\"M221.402 277.019L112.413 213.978C106.795 210.731 107.499 205.061 113.987 201.31L357.822 60.3595C364.313 56.6104 374.118 56.2026 379.741 59.4498L489.613 122.997C495.231 126.245 494.527 131.917 488.039 135.666L243.321 276.109C236.834 279.859 227.02 280.266 221.402 277.019Z\\\" fill=\\\"url(#paint1_radial)\\\"/>\\n        <path d=\\\"M221.402 277.019L112.413 213.978C106.795 210.731 107.499 205.061 113.987 201.31L357.822 60.3595C364.313 56.6104 374.118 56.2026 379.741 59.4498L489.613 122.997C495.231 126.245 494.527 131.917 488.039 135.666L243.321 276.109C236.834 279.859 227.02 280.266 221.402 277.019Z\\\" fill=\\\"#3B395B\\\"/>\\n        <path d=\\\"M423.917 84.998L419.674 87.4519C416.387 89.3513 416.03 92.2254 418.877 93.8705L420.877 95.0262C423.724 96.6713 428.697 96.4653 431.985 94.5659L436.223 92.1162L423.917 84.998Z\\\" fill=\\\"#202235\\\"/>\\n        <path d=\\\"M234.192 196.31L286.136 226.404C292.412 229.998 303.347 229.507 310.563 225.298C317.777 221.092 318.541 214.769 312.266 211.172L260.322 181.084C254.048 177.49 243.112 177.982 235.896 182.19C228.68 186.39 227.916 192.714 234.192 196.31Z\\\" fill=\\\"#F6F6FA\\\"/>\\n        <path d=\\\"M253.623 194.365L246.339 190.155C245.258 189.53 245.393 188.438 246.643 187.716C247.886 186.993 249.781 186.916 250.862 187.541L258.146 191.75C259.227 192.375 259.092 193.468 257.843 194.189C256.595 194.908 254.704 194.987 253.623 194.365Z\\\" fill=\\\"#717CB4\\\"/>\\n        <path d=\\\"M280.717 210.019L261.264 198.776C260.181 198.151 260.318 197.059 261.566 196.337C262.809 195.616 264.705 195.537 265.787 196.162L285.24 207.405C286.321 208.029 286.186 209.122 284.936 209.843C283.688 210.565 281.799 210.644 280.717 210.019Z\\\" fill=\\\"#717CB4\\\"/>\\n        <path d=\\\"M295.473 218.545L288.405 214.46C287.323 213.835 287.459 212.743 288.709 212.022C289.952 211.3 291.846 211.221 292.929 211.846L299.997 215.931C301.078 216.556 300.943 217.648 299.693 218.37C298.443 219.093 296.556 219.17 295.473 218.545Z\\\" fill=\\\"#717CB4\\\"/>\\n        <path d=\\\"M250.657 157.15L327.92 202.255C334.195 205.849 345.13 205.358 352.346 201.149C359.561 196.945 360.324 190.622 354.049 187.025L276.786 141.92C270.512 138.326 259.576 138.816 252.361 143.026C245.148 147.225 244.386 153.553 250.657 157.15Z\\\" fill=\\\"#F6F6FA\\\"/>\\n        <path d=\\\"M283.959 163.287C282.806 162.621 280.937 162.621 279.784 163.287L277.729 164.484C276.577 165.151 276.577 166.23 277.729 166.897C278.881 167.563 280.751 167.563 281.904 166.897L283.959 165.699C285.111 165.033 285.111 163.952 283.959 163.287Z\\\" fill=\\\"#717CB4\\\"/>\\n        <path d=\\\"M303.471 162.357C302.318 161.692 300.449 161.691 299.298 162.357L286.672 169.653C285.519 170.32 285.519 171.401 286.672 172.066C287.826 172.731 289.693 172.732 290.846 172.066L303.471 164.769C304.624 164.103 304.624 163.023 303.471 162.357Z\\\" fill=\\\"#717CB4\\\"/>\\n        <path d=\\\"M342.386 191.556C341.234 190.89 339.366 190.89 338.212 191.556L331.393 195.498C330.241 196.164 330.241 197.244 331.393 197.91C332.545 198.576 334.415 198.575 335.567 197.91L342.386 193.969C343.539 193.302 343.539 192.223 342.386 191.556Z\\\" fill=\\\"#717CB4\\\"/>\\n        <path d=\\\"M332.589 186.881C331.438 186.214 329.568 186.214 328.416 186.881L322.449 190.336C321.296 191.001 321.296 192.082 322.449 192.749C323.602 193.415 325.47 193.414 326.622 192.749L332.589 189.293C333.742 188.627 333.742 187.547 332.589 186.881Z\\\" fill=\\\"#717CB4\\\"/>\\n        <path d=\\\"M330.306 177.865C329.152 177.199 327.284 177.199 326.131 177.865L313.505 185.161C312.354 185.826 312.354 186.907 313.505 187.574C314.657 188.24 316.527 188.239 317.68 187.574L330.306 180.276C331.457 179.61 331.457 178.531 330.306 177.865Z\\\" fill=\\\"#717CB4\\\"/>\\n        <path d=\\\"M318.687 174.241C317.535 173.575 315.666 173.575 314.513 174.241L304.563 179.992C303.411 180.657 303.411 181.738 304.563 182.403C305.715 183.068 307.585 183.069 308.736 182.403L318.68 176.654C319.847 175.987 319.847 174.908 318.687 174.241Z\\\" fill=\\\"#717CB4\\\"/>\\n        <path d=\\\"M305.762 171.374C304.611 170.707 302.741 170.707 301.589 171.374L295.622 174.829C294.47 175.494 294.47 176.575 295.622 177.24C296.773 177.905 298.643 177.907 299.795 177.24L305.762 173.793C306.915 173.119 306.915 172.04 305.762 171.374Z\\\" fill=\\\"#717CB4\\\"/>\\n        <path d=\\\"M286.116 130.637L321.302 150.938C327.578 154.532 338.513 154.041 345.728 149.832C352.944 145.626 353.707 139.303 347.431 135.706L312.245 115.415C305.97 111.821 295.035 112.312 287.819 116.521C280.603 120.721 279.841 127.043 286.116 130.637Z\\\" fill=\\\"#202235\\\"/>\\n        <path d=\\\"M496.874 134.332L243.683 280.655C237.044 284.493 227 284.909 221.25 281.587L102.942 213.145C100.984 212.013 99.835 210.582 99.3516 209.05C98.5907 211.697 99.7052 214.35 102.942 216.221L221.25 284.662C227 287.979 237.044 287.565 243.683 283.731L496.874 137.41C501.252 134.88 502.997 131.506 502.072 128.541C501.478 130.596 499.78 132.652 496.874 134.332Z\\\" fill=\\\"#F6F6FA\\\"/>\\n        <path d=\\\"M158.262 168.957L223.713 206.598C229.989 210.193 240.924 209.702 248.14 205.492C255.355 201.287 256.118 194.964 249.844 191.367L184.391 153.726C178.117 150.132 167.181 150.622 159.965 154.832C152.738 159.037 151.98 165.361 158.262 168.957Z\\\" fill=\\\"#7E87BB\\\"/>\\n        <g opacity=\\\"0.6\\\">\\n        <path opacity=\\\"0.6\\\" d=\\\"M158.262 204.809L223.713 242.451C229.989 246.045 240.924 245.554 248.14 241.345C255.355 237.139 256.118 230.816 249.844 227.221L184.391 189.578C178.117 185.984 167.181 186.475 159.965 190.684C152.738 194.889 151.98 201.214 158.262 204.809Z\\\" fill=\\\"#030830\\\"/>\\n        </g>\\n        <path d=\\\"M203.213 182.001L183.76 170.759C182.679 170.133 182.814 169.041 184.063 168.319C185.306 167.598 187.202 167.519 188.283 168.145L207.736 179.387C208.818 180.012 208.682 181.104 207.434 181.826C206.187 182.549 204.295 182.626 203.213 182.001Z\\\" fill=\\\"#202235\\\"/>\\n        <path d=\\\"M217.97 190.528L210.902 186.444C209.821 185.818 209.956 184.726 211.204 184.004C212.447 183.283 214.344 183.204 215.425 183.83L222.493 187.914C223.575 188.54 223.439 189.631 222.191 190.354C220.941 191.075 219.052 191.154 217.97 190.528Z\\\" fill=\\\"#202235\\\"/>\\n        <path style=\\\"mix-blend-mode:lighten\\\" opacity=\\\"0.4\\\" d=\\\"M254.106 0H154.006V162.653L154.028 162.661C153.963 165.024 155.339 167.285 158.255 168.957L223.706 206.598C229.982 210.192 240.917 209.701 248.133 205.492C251.665 203.434 253.64 200.868 254.01 198.362L254.111 198.398L254.106 0Z\\\" fill=\\\"url(#paint2_linear)\\\"/>\\n        <path d=\\\"M301.408 126.627L295.608 123.272C294.527 122.647 294.662 121.555 295.91 120.834C297.153 120.112 299.049 120.033 300.131 120.658L305.931 124.013C307.012 124.639 306.877 125.73 305.628 126.453C304.377 127.18 302.489 127.256 301.408 126.627Z\\\" fill=\\\"#717CB4\\\"/>\\n        <path d=\\\"M323.998 139.686L308.69 130.838C307.609 130.213 307.744 129.121 308.993 128.4C310.236 127.678 312.132 127.599 313.213 128.224L328.521 137.071C329.602 137.696 329.467 138.788 328.217 139.51C326.968 140.232 325.079 140.313 323.998 139.686Z\\\" fill=\\\"#717CB4\\\"/>\\n        <path d=\\\"M275.198 156.374C270.374 159.161 262.554 159.161 257.73 156.374C252.906 153.587 252.907 149.067 257.73 146.283C262.552 143.499 270.374 143.496 275.197 146.283C280.019 149.07 280.021 153.584 275.198 156.374Z\\\" fill=\\\"#717CB4\\\"/>\\n        <path d=\\\"M261.16 150.987L265.879 148.26C266.698 147.786 268.088 147.983 268.429 148.629L270.482 152.542C270.838 153.22 269.743 153.853 268.57 153.648L261.803 152.462C260.69 152.267 260.341 151.46 261.16 150.987Z\\\" fill=\\\"{$color}\\\"/>\\n        <path d=\\\"M266.1 35.7431L271.988 39.1465C273.093 39.7824 274.876 39.7824 275.976 39.1465C277.077 38.5106 277.081 37.4779 275.976 36.8407L270.089 33.4386C268.984 32.8027 267.203 32.8013 266.1 33.4386C264.998 34.0759 265 35.1127 266.1 35.7431Z\\\" fill=\\\"{$color}\\\"/>\\n        <path d=\\\"M257.745 40.5728L274.364 50.1805C275.469 50.8164 277.252 50.8164 278.352 50.1805C279.453 49.5446 279.457 48.5119 278.352 47.8746L261.733 38.267C260.629 37.6311 258.846 37.6311 257.745 38.267C256.644 38.9029 256.643 39.9369 257.745 40.5728Z\\\" fill=\\\"#7574AD\\\"/>\\n        <path d=\\\"M299.868 52.9543C300.973 52.317 300.973 51.2844 299.868 50.6485L283.249 41.0436C282.144 40.4077 280.362 40.4077 279.26 41.0436C278.158 41.6795 278.155 42.7121 279.26 43.3494L295.881 52.9529C296.98 53.5902 298.766 53.5902 299.868 52.9543Z\\\" fill=\\\"#7574AD\\\"/>\\n        <path d=\\\"M312.88 58.1672L311.903 57.6032L307.182 54.8813C306.078 54.2454 304.295 54.244 303.193 54.8813C302.091 55.5185 302.088 56.5498 303.193 57.1871L307.914 59.9146L308.891 60.48L313.612 63.2074C314.717 63.8447 316.5 63.8447 317.601 63.2074C318.701 62.5702 318.705 61.5403 317.601 60.903L312.88 58.1672Z\\\" fill=\\\"#8A85B8\\\"/>\\n        <path d=\\\"M345.571 275.334L369.573 289.205C370.954 290.005 373.204 290.005 374.589 289.205C375.974 288.404 375.97 287.108 374.589 286.302L350.585 272.429C349.204 271.629 346.954 271.629 345.571 272.429C344.187 273.23 344.185 274.533 345.571 275.334Z\\\" fill=\\\"#8A85B8\\\"/>\\n        <path d=\\\"M335.059 278.508C333.678 279.308 333.678 280.606 335.059 281.411L371.982 302.746C373.364 303.545 375.613 303.546 376.998 302.746C378.384 301.945 378.379 300.647 376.998 299.843L340.075 278.504C338.69 277.707 336.444 277.707 335.059 278.508Z\\\" fill=\\\"#7574AD\\\"/>\\n        <path d=\\\"M324.55 287.478L331.953 291.757C333.334 292.557 335.584 292.557 336.969 291.757C338.354 290.957 338.35 289.66 336.969 288.854L329.565 284.569C328.184 283.768 325.935 283.768 324.55 284.569C323.164 285.369 323.164 286.678 324.55 287.478Z\\\" fill=\\\"#8A85B8\\\"/>\\n        <path d=\\\"M314.047 293.552L334.944 305.631C336.325 306.431 338.575 306.431 339.96 305.631C341.345 304.83 341.341 303.532 339.96 302.728L319.063 290.649C317.682 289.85 315.432 289.849 314.047 290.649C312.662 291.45 312.666 292.752 314.047 293.552Z\\\" fill=\\\"{$color}\\\"/>\\n        <path d=\\\"M367.013 309.119C368.394 308.319 368.394 307.021 367.013 306.216L346.113 294.138C344.732 293.338 342.484 293.338 341.099 294.138C339.714 294.939 339.718 296.237 341.099 297.041L361.997 309.118C363.382 309.92 365.627 309.92 367.013 309.119Z\\\" fill=\\\"#8A85B8\\\"/>\\n        <path d=\\\"M383.372 315.675L382.144 314.966L376.206 311.535C374.825 310.735 372.575 310.733 371.19 311.535C369.804 312.337 369.809 313.632 371.19 314.438L377.128 317.869L378.356 318.58L384.294 322.011C385.675 322.811 387.925 322.811 389.31 322.011C390.695 321.211 390.691 319.913 389.31 319.108L383.372 315.675Z\\\" fill=\\\"#7574AD\\\"/>\\n        <path d=\\\"M467.393 124.363L466.417 123.799L461.695 121.07C460.59 120.434 458.809 120.434 457.707 121.07C456.604 121.706 456.602 122.739 457.707 123.376L462.428 126.105L463.405 126.669L468.127 129.392C469.232 130.028 471.013 130.028 472.115 129.392C473.217 128.756 473.22 127.724 472.115 127.086L467.393 124.363Z\\\" fill=\\\"#717CB4\\\"/>\\n        <path d=\\\"M378.681 72.903L377.705 72.3376L372.984 69.6088C371.88 68.9729 370.097 68.9729 368.995 69.6088C367.893 70.2447 367.89 71.2787 368.995 71.9146L373.709 74.6489L374.686 75.2129L379.408 77.9418C380.512 78.5791 382.295 78.5777 383.396 77.9418C384.497 77.3059 384.501 76.2732 383.396 75.636L378.681 72.903Z\\\" fill=\\\"#717CB4\\\"/>\\n        <path d=\\\"M397.149 83.457L396.172 82.8916L391.451 80.1627C390.346 79.5268 388.564 79.5268 387.462 80.1627C386.36 80.7986 386.358 81.8313 387.462 82.4686L392.184 85.1975L393.16 85.7615L394.667 86.631C395.772 87.2683 397.553 87.2683 398.655 86.631C399.757 85.9937 399.76 84.9625 398.655 84.3252L397.149 83.457Z\\\" fill=\\\"#717CB4\\\"/>\\n        <path d=\\\"M365.606 112.454L374.963 107.047L372.603 106.255L374.086 105.396C375.674 105.856 376.873 106.064 377.684 106.019L379.203 106.897L367.602 113.603L365.606 112.454Z\\\" fill=\\\"#F6F6FA\\\"/>\\n        <path d=\\\"M370.323 115.179L371.722 114.371L378.992 113.443C379.104 113.428 379.39 113.393 379.857 113.341C380.323 113.288 380.638 113.248 380.808 113.219C380.978 113.19 381.232 113.143 381.568 113.081C381.861 113.025 382.15 112.945 382.431 112.842C382.669 112.749 382.9 112.639 383.121 112.511C383.579 112.247 383.845 111.999 383.921 111.768C383.997 111.537 383.859 111.331 383.507 111.147C382.764 110.755 381.789 110.909 380.582 111.609L380.098 111.885L378.14 110.752L378.637 110.465C379.141 110.169 379.674 109.926 380.228 109.74C380.752 109.564 381.296 109.45 381.847 109.401C382.406 109.353 382.97 109.394 383.516 109.524C384.093 109.66 384.647 109.881 385.158 110.181C386.138 110.747 386.613 111.329 386.584 111.925C386.554 112.522 386.056 113.099 385.088 113.659C384.759 113.85 384.414 114.014 384.058 114.148C383.683 114.29 383.297 114.399 382.903 114.476C382.489 114.56 382.127 114.624 381.819 114.668C381.511 114.712 381.102 114.759 380.595 114.816L380.457 114.83L380.347 114.844L380.223 114.857L374.204 115.576L377.684 117.588L376.082 118.512L370.323 115.179Z\\\" fill=\\\"#F6F6FA\\\"/>\\n        <path d=\\\"M378.89 118.788L380.773 117.7L382.661 118.792L380.779 119.88L378.89 118.788ZM383.627 116.051L385.517 114.958L387.406 116.051L385.516 117.143L383.627 116.051Z\\\" fill=\\\"#F6F6FA\\\"/>\\n        <path d=\\\"M383.633 123.058C382.597 122.46 382.119 121.852 382.199 121.233C382.279 120.615 382.841 120.005 383.885 119.403L384.3 119.164L386.284 120.311L385.962 120.498C385.385 120.843 385.03 121.14 384.898 121.387C384.76 121.633 384.898 121.873 385.305 122.11C385.477 122.208 385.664 122.279 385.857 122.32C386.034 122.357 386.215 122.371 386.396 122.361C386.588 122.344 386.777 122.3 386.958 122.233C387.157 122.164 387.352 122.083 387.542 121.991C387.726 121.899 387.938 121.784 388.178 121.646C388.792 121.29 389.164 120.955 389.282 120.659C389.401 120.364 389.227 120.054 388.759 119.75C388.74 119.739 388.69 119.71 388.608 119.659L388.462 119.571L390.126 118.604C390.278 118.692 390.368 118.742 390.402 118.754C390.848 119.023 391.361 119.158 391.882 119.146C392.342 119.117 392.863 118.933 393.445 118.593C393.959 118.295 394.266 118.028 394.366 117.791C394.467 117.552 394.318 117.318 393.923 117.089C393.76 116.994 393.583 116.925 393.399 116.884C393.229 116.846 393.053 116.831 392.879 116.841C392.695 116.856 392.514 116.891 392.339 116.946C392.154 117.005 391.974 117.074 391.797 117.154C391.627 117.234 391.438 117.332 391.227 117.448L390.832 117.683L388.845 116.536L389.385 116.223C390.32 115.667 391.384 115.366 392.471 115.35C393.544 115.34 394.599 115.623 395.522 116.169C396.498 116.735 396.98 117.321 396.975 117.932C396.969 118.543 396.471 119.132 395.486 119.701C394.85 120.074 394.146 120.314 393.414 120.405C392.745 120.498 392.064 120.444 391.417 120.247C391.744 120.635 391.809 121.043 391.611 121.47C391.413 121.896 390.933 122.33 390.17 122.77C389.162 123.378 388.028 123.746 386.856 123.846C385.726 123.918 384.602 123.643 383.633 123.058V123.058Z\\\" fill=\\\"#F6F6FA\\\"/>\\n        <path d=\\\"M393.884 127.916C392.777 127.978 391.676 127.713 390.719 127.154C389.752 126.592 389.306 125.982 389.407 125.327C389.507 124.672 390.065 124.049 391.091 123.455L396.201 120.508C397.19 119.916 398.305 119.569 399.455 119.496C400.568 119.434 401.673 119.706 402.631 120.276C403.628 120.852 404.075 121.464 403.972 122.111C403.865 122.756 403.282 123.383 402.234 123.994L397.131 126.941C396.143 127.523 395.029 127.858 393.884 127.916V127.916ZM392.428 126.169C393.1 126.558 394.005 126.423 395.143 125.764L400.181 122.851C400.331 122.765 400.458 122.685 400.578 122.608C400.698 122.53 400.808 122.446 400.927 122.353C401.029 122.277 401.118 122.183 401.19 122.077C401.245 121.993 401.284 121.899 401.306 121.8C401.315 121.752 401.314 121.702 401.302 121.654C401.29 121.607 401.268 121.562 401.236 121.524C401.149 121.414 401.04 121.323 400.916 121.257C400.745 121.159 400.558 121.093 400.364 121.062C400.176 121.029 399.984 121.024 399.795 121.046C399.599 121.071 399.406 121.117 399.22 121.184C399.037 121.248 398.858 121.323 398.683 121.406C398.53 121.482 398.358 121.575 398.171 121.683L393.133 124.595C391.991 125.255 391.756 125.78 392.428 126.169V126.169Z\\\" fill=\\\"#F6F6FA\\\"/>\\n        <path d=\\\"M428.129 92.4352C426.798 93.2052 424.639 93.2052 423.308 92.4352C421.977 91.6652 421.977 90.4183 423.308 89.6483C424.639 88.8783 426.798 88.8797 428.129 89.6483C429.461 90.4169 429.461 91.6652 428.129 92.4352Z\\\" fill=\\\"#161623\\\"/>\\n        <defs>\\n        <radialGradient id=\\\"paint0_radial\\\" cx=\\\"0\\\" cy=\\\"0\\\" r=\\\"1\\\" gradientUnits=\\\"userSpaceOnUse\\\" gradientTransform=\\\"translate(103.333 155.336) scale(395.561 395.953)\\\">\\n        <stop stop-color=\\\"#F6F6FA\\\"/>\\n        <stop offset=\\\"0.28\\\" stop-color=\\\"#7574AD\\\"/>\\n        <stop offset=\\\"0.4\\\" stop-color=\\\"#717CB4\\\"/>\\n        <stop offset=\\\"0.54\\\" stop-color=\\\"#3B395B\\\"/>\\n        </radialGradient>\\n        <radialGradient id=\\\"paint1_radial\\\" cx=\\\"0\\\" cy=\\\"0\\\" r=\\\"1\\\" gradientUnits=\\\"userSpaceOnUse\\\" gradientTransform=\\\"translate(190.581 53.9603) scale(328.014 328.339)\\\">\\n        <stop stop-color=\\\"#50418E\\\"/>\\n        <stop offset=\\\"1\\\" stop-color=\\\"#3C3689\\\"/>\\n        </radialGradient>\\n        <linearGradient id=\\\"paint2_linear\\\" x1=\\\"204.059\\\" y1=\\\"209.003\\\" x2=\\\"204.059\\\" y2=\\\"0\\\" gradientUnits=\\\"userSpaceOnUse\\\">\\n        <stop stop-color=\\\"#8A85B8\\\"/>\\n        <stop offset=\\\"0.25\\\" stop-color=\\\"#615E83\\\"/>\\n        <stop offset=\\\"0.48\\\" stop-color=\\\"#413F5A\\\"/>\\n        <stop offset=\\\"0.69\\\" stop-color=\\\"#29283C\\\"/>\\n        <stop offset=\\\"0.87\\\" stop-color=\\\"#1B1B29\\\"/>\\n        <stop offset=\\\"1\\\" stop-color=\\\"#161623\\\"/>\\n        </linearGradient>\\n        </defs>\\n        </svg>\\n        \\n</div>\\n\\n<style>\\n    .design-icon-container{\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n        box-sizing: border-box;\\n        padding: 0;\\n    }\\n    .design-icon-container > svg{\\n        width: 100%;\\n        height: auto;\\n    }\\n    .selected{\\n        height:170px;\\n    }\\n\\n    @media screen and (min-width: 1600){\\n        \\n    }\\n    @media screen and (max-width: 1200){\\n        .design-icon-container{\\n            display: flex;\\n            align-items: center;\\n            justify-content: center;\\n            box-sizing: border-box;\\n            padding: 0;\\n            width: 13rem;\\n            height: 90%;\\n        }   \\n    }\\n</style>\"],\"names\":[],\"mappings\":\"AAsFI,oDAAsB,CAAC,AACnB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,CAAC,AACd,CAAC,AACD,qCAAsB,CAAG,kBAAG,CAAC,AACzB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,AAChB,CAAC,AAKD,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,IAAI,CAAC,CAAC,AAEpC,CAAC,AACD,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,IAAI,CAAC,CAAC,AAChC,oDAAsB,CAAC,AACnB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,CAAC,CACV,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,GAAG,AACf,CAAC,AACL,CAAC\"}"
};

const DesignIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $color, $$unsubscribe_color;
	$$unsubscribe_color = subscribe(color, value => $color = value);
	$$result.css.add(css$6);
	$$unsubscribe_color();

	return `

<div class="${"design-icon-container svelte-1ty1afj"}"><svg viewBox="${"0 0 575 328"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-1ty1afj"}"><path d="${"M551.576 228.84C549.839 228.841 548.132 228.384 546.627 227.516L529.944 217.874C529.474 217.602 529.084 217.212 528.812 216.742C528.541 216.272 528.398 215.738 528.398 215.195C528.398 214.652 528.541 214.119 528.812 213.649C529.084 213.179 529.474 212.788 529.944 212.517L546.628 202.877C548.134 202.01 549.84 201.553 551.577 201.553C553.314 201.553 555.021 202.01 556.526 202.877L573.209 212.518C573.679 212.79 574.069 213.18 574.34 213.65C574.612 214.12 574.754 214.654 574.754 215.197C574.754 215.74 574.612 216.273 574.34 216.743C574.069 217.213 573.679 217.604 573.209 217.875L556.523 227.516C555.019 228.384 553.313 228.841 551.576 228.84V228.84ZM551.576 204.199C550.305 204.198 549.055 204.531 547.953 205.166L531.267 214.809C531.199 214.848 531.143 214.904 531.105 214.972C531.066 215.039 531.045 215.116 531.045 215.194C531.045 215.272 531.066 215.348 531.105 215.416C531.143 215.484 531.199 215.54 531.267 215.579L547.95 225.22C549.053 225.855 550.303 226.189 551.575 226.189C552.847 226.189 554.097 225.855 555.2 225.22L571.886 215.583C571.954 215.544 572.009 215.487 572.048 215.42C572.087 215.352 572.107 215.275 572.107 215.197C572.107 215.119 572.087 215.043 572.048 214.975C572.009 214.907 571.954 214.851 571.886 214.812L555.203 205.169C554.1 204.533 552.848 204.198 551.575 204.199H551.576Z"}"${add_attribute("fill", $color, 0)}></path><path d="${"M472.945 273.188C470.124 273.189 467.352 272.448 464.908 271.038V271.038L436.195 254.449C435.531 254.066 434.98 253.515 434.597 252.851C434.214 252.187 434.013 251.434 434.013 250.667C434.013 249.9 434.214 249.147 434.597 248.483C434.98 247.819 435.531 247.268 436.195 246.885L464.906 230.296C467.352 228.888 470.124 228.147 472.945 228.147C475.766 228.147 478.538 228.888 480.984 230.296L509.696 246.885C510.359 247.268 510.91 247.819 511.293 248.483C511.676 249.147 511.878 249.9 511.878 250.667C511.878 251.434 511.676 252.187 511.293 252.851C510.91 253.515 510.359 254.066 509.696 254.449L480.984 271.038C478.539 272.448 475.767 273.189 472.945 273.188V273.188ZM466.229 268.745C468.273 269.92 470.589 270.539 472.946 270.539C475.303 270.539 477.619 269.92 479.662 268.745L508.374 252.156C508.635 252.004 508.851 251.787 509.002 251.525C509.153 251.264 509.232 250.967 509.232 250.665C509.232 250.364 509.153 250.067 509.002 249.805C508.851 249.544 508.635 249.327 508.374 249.175L479.662 232.586C477.619 231.411 475.302 230.792 472.945 230.792C470.588 230.792 468.272 231.411 466.228 232.586L437.516 249.175C437.255 249.327 437.039 249.544 436.888 249.805C436.738 250.067 436.658 250.364 436.658 250.665C436.658 250.967 436.738 251.264 436.888 251.525C437.039 251.787 437.255 252.004 437.516 252.156L466.229 268.745Z"}"${add_attribute("fill", $color, 0)}></path><path d="${"M38.9338 225.616C36.1116 225.618 33.3385 224.877 30.8935 223.466L2.18188 206.877C1.51852 206.494 0.967648 205.943 0.584643 205.279C0.201638 204.615 0 203.862 0 203.095C0 202.329 0.201638 201.575 0.584643 200.912C0.967648 200.248 1.51852 199.696 2.18188 199.313L30.8921 182.725C33.338 181.316 36.1102 180.575 38.9318 180.575C41.7534 180.575 44.5256 181.316 46.9714 182.725L75.683 199.313C76.3464 199.696 76.8973 200.248 77.2803 200.912C77.6633 201.575 77.8649 202.329 77.8649 203.095C77.8649 203.862 77.6633 204.615 77.2803 205.279C76.8973 205.943 76.3464 206.494 75.683 206.877L46.9728 223.466C44.5281 224.876 41.7555 225.618 38.9338 225.616ZM38.9338 183.214C36.576 183.213 34.2595 183.833 32.2165 185.011L3.50628 201.6C3.24501 201.75 3.02803 201.968 2.87717 202.229C2.72631 202.49 2.64689 202.787 2.64689 203.089C2.64689 203.391 2.72631 203.688 2.87717 203.949C3.02803 204.211 3.24501 204.428 3.50628 204.579L32.2179 221.167C34.2613 222.343 36.5773 222.962 38.9345 222.962C41.2917 222.962 43.6077 222.343 45.6512 221.167L74.3614 204.579C74.623 204.428 74.8403 204.211 74.9915 203.949C75.1426 203.688 75.2222 203.391 75.2222 203.089C75.2222 202.787 75.1426 202.49 74.9915 202.229C74.8403 201.967 74.623 201.75 74.3614 201.6L45.6498 185.011C43.6068 183.833 41.2903 183.213 38.9325 183.214H38.9338Z"}"${add_attribute("fill", $color, 0)}></path><path d="${"M129.787 121.556C125.889 121.56 122.058 120.535 118.681 118.585V118.585L78.0274 95.0943C77.1722 94.5998 76.4621 93.8887 75.9684 93.0325C75.4747 92.1763 75.2148 91.2051 75.2148 90.2165C75.2148 89.2279 75.4747 88.2567 75.9684 87.4005C76.4621 86.5443 77.1722 85.8332 78.0274 85.3387L118.679 61.849C122.058 59.9029 125.888 58.8787 129.786 58.8787C133.684 58.8787 137.513 59.9029 140.892 61.849L181.54 85.3387C182.395 85.8331 183.106 86.5443 183.6 87.4006C184.094 88.257 184.354 89.2284 184.354 90.2172C184.354 91.206 184.094 92.1774 183.6 93.0338C183.106 93.8901 182.395 94.6012 181.54 95.0957L140.893 118.585C137.516 120.535 133.686 121.56 129.787 121.556V121.556ZM120.011 116.293C122.987 118.007 126.361 118.908 129.794 118.908C133.227 118.908 136.601 118.007 139.577 116.293L180.224 92.8037C180.677 92.5413 181.053 92.1642 181.314 91.7104C181.576 91.2565 181.714 90.7418 181.714 90.2179C181.714 89.6939 181.576 89.1792 181.314 88.7254C181.053 88.2715 180.677 87.8945 180.224 87.6321L139.569 64.1438C136.593 62.4303 133.219 61.5285 129.786 61.5285C126.352 61.5285 122.979 62.4303 120.002 64.1438L79.3559 87.6321C78.9025 87.894 78.5259 88.2708 78.2641 88.7246C78.0023 89.1784 77.8645 89.6932 77.8645 90.2172C77.8645 90.7412 78.0023 91.256 78.2641 91.7098C78.5259 92.1636 78.9025 92.5404 79.3559 92.8023L120.011 116.293Z"}"${add_attribute("fill", $color, 0)}></path><path opacity="${"0.6"}" d="${"M221.25 325.757L102.944 257.315C97.1933 253.998 97.9142 248.191 104.554 244.35L357.745 98.0255C364.385 94.1879 374.428 93.7718 380.179 97.0938L498.485 165.536C504.235 168.854 503.514 174.66 496.874 178.501L243.683 324.826C237.043 328.662 227 329.08 221.25 325.757Z"}" fill="${"#030830"}"></path><path d="${"M492.387 133.662L492.525 133.83L380.59 69.0686C374.88 65.7702 364.908 66.1835 358.315 69.9934L107.548 214.917L99.1855 211.721L101.533 223.471H101.544C101.856 225.238 103.092 226.891 105.309 228.171L220.834 295.005C226.543 298.304 236.515 297.891 243.108 294.08L494.513 148.79C497.615 146.993 499.398 144.771 499.842 142.569L499.855 142.586L502.254 131.156L492.387 133.662Z"}" fill="${"url(#paint0_radial)"}"></path><path d="${"M221.25 284.662L102.944 216.221C97.1933 212.903 97.9142 207.097 104.554 203.255L357.745 56.9311C364.385 53.0935 374.428 52.6761 380.179 55.9993L498.485 124.442C504.235 127.76 503.514 133.566 496.874 137.406L243.683 283.73C237.043 287.568 227 287.985 221.25 284.662Z"}" fill="${"#717CB4"}"></path><path d="${"M221.402 277.019L112.413 213.978C106.795 210.731 107.499 205.061 113.987 201.31L357.822 60.3595C364.313 56.6104 374.118 56.2026 379.741 59.4498L489.613 122.997C495.231 126.245 494.527 131.917 488.039 135.666L243.321 276.109C236.834 279.859 227.02 280.266 221.402 277.019Z"}" fill="${"url(#paint1_radial)"}"></path><path d="${"M221.402 277.019L112.413 213.978C106.795 210.731 107.499 205.061 113.987 201.31L357.822 60.3595C364.313 56.6104 374.118 56.2026 379.741 59.4498L489.613 122.997C495.231 126.245 494.527 131.917 488.039 135.666L243.321 276.109C236.834 279.859 227.02 280.266 221.402 277.019Z"}" fill="${"#3B395B"}"></path><path d="${"M423.917 84.998L419.674 87.4519C416.387 89.3513 416.03 92.2254 418.877 93.8705L420.877 95.0262C423.724 96.6713 428.697 96.4653 431.985 94.5659L436.223 92.1162L423.917 84.998Z"}" fill="${"#202235"}"></path><path d="${"M234.192 196.31L286.136 226.404C292.412 229.998 303.347 229.507 310.563 225.298C317.777 221.092 318.541 214.769 312.266 211.172L260.322 181.084C254.048 177.49 243.112 177.982 235.896 182.19C228.68 186.39 227.916 192.714 234.192 196.31Z"}" fill="${"#F6F6FA"}"></path><path d="${"M253.623 194.365L246.339 190.155C245.258 189.53 245.393 188.438 246.643 187.716C247.886 186.993 249.781 186.916 250.862 187.541L258.146 191.75C259.227 192.375 259.092 193.468 257.843 194.189C256.595 194.908 254.704 194.987 253.623 194.365Z"}" fill="${"#717CB4"}"></path><path d="${"M280.717 210.019L261.264 198.776C260.181 198.151 260.318 197.059 261.566 196.337C262.809 195.616 264.705 195.537 265.787 196.162L285.24 207.405C286.321 208.029 286.186 209.122 284.936 209.843C283.688 210.565 281.799 210.644 280.717 210.019Z"}" fill="${"#717CB4"}"></path><path d="${"M295.473 218.545L288.405 214.46C287.323 213.835 287.459 212.743 288.709 212.022C289.952 211.3 291.846 211.221 292.929 211.846L299.997 215.931C301.078 216.556 300.943 217.648 299.693 218.37C298.443 219.093 296.556 219.17 295.473 218.545Z"}" fill="${"#717CB4"}"></path><path d="${"M250.657 157.15L327.92 202.255C334.195 205.849 345.13 205.358 352.346 201.149C359.561 196.945 360.324 190.622 354.049 187.025L276.786 141.92C270.512 138.326 259.576 138.816 252.361 143.026C245.148 147.225 244.386 153.553 250.657 157.15Z"}" fill="${"#F6F6FA"}"></path><path d="${"M283.959 163.287C282.806 162.621 280.937 162.621 279.784 163.287L277.729 164.484C276.577 165.151 276.577 166.23 277.729 166.897C278.881 167.563 280.751 167.563 281.904 166.897L283.959 165.699C285.111 165.033 285.111 163.952 283.959 163.287Z"}" fill="${"#717CB4"}"></path><path d="${"M303.471 162.357C302.318 161.692 300.449 161.691 299.298 162.357L286.672 169.653C285.519 170.32 285.519 171.401 286.672 172.066C287.826 172.731 289.693 172.732 290.846 172.066L303.471 164.769C304.624 164.103 304.624 163.023 303.471 162.357Z"}" fill="${"#717CB4"}"></path><path d="${"M342.386 191.556C341.234 190.89 339.366 190.89 338.212 191.556L331.393 195.498C330.241 196.164 330.241 197.244 331.393 197.91C332.545 198.576 334.415 198.575 335.567 197.91L342.386 193.969C343.539 193.302 343.539 192.223 342.386 191.556Z"}" fill="${"#717CB4"}"></path><path d="${"M332.589 186.881C331.438 186.214 329.568 186.214 328.416 186.881L322.449 190.336C321.296 191.001 321.296 192.082 322.449 192.749C323.602 193.415 325.47 193.414 326.622 192.749L332.589 189.293C333.742 188.627 333.742 187.547 332.589 186.881Z"}" fill="${"#717CB4"}"></path><path d="${"M330.306 177.865C329.152 177.199 327.284 177.199 326.131 177.865L313.505 185.161C312.354 185.826 312.354 186.907 313.505 187.574C314.657 188.24 316.527 188.239 317.68 187.574L330.306 180.276C331.457 179.61 331.457 178.531 330.306 177.865Z"}" fill="${"#717CB4"}"></path><path d="${"M318.687 174.241C317.535 173.575 315.666 173.575 314.513 174.241L304.563 179.992C303.411 180.657 303.411 181.738 304.563 182.403C305.715 183.068 307.585 183.069 308.736 182.403L318.68 176.654C319.847 175.987 319.847 174.908 318.687 174.241Z"}" fill="${"#717CB4"}"></path><path d="${"M305.762 171.374C304.611 170.707 302.741 170.707 301.589 171.374L295.622 174.829C294.47 175.494 294.47 176.575 295.622 177.24C296.773 177.905 298.643 177.907 299.795 177.24L305.762 173.793C306.915 173.119 306.915 172.04 305.762 171.374Z"}" fill="${"#717CB4"}"></path><path d="${"M286.116 130.637L321.302 150.938C327.578 154.532 338.513 154.041 345.728 149.832C352.944 145.626 353.707 139.303 347.431 135.706L312.245 115.415C305.97 111.821 295.035 112.312 287.819 116.521C280.603 120.721 279.841 127.043 286.116 130.637Z"}" fill="${"#202235"}"></path><path d="${"M496.874 134.332L243.683 280.655C237.044 284.493 227 284.909 221.25 281.587L102.942 213.145C100.984 212.013 99.835 210.582 99.3516 209.05C98.5907 211.697 99.7052 214.35 102.942 216.221L221.25 284.662C227 287.979 237.044 287.565 243.683 283.731L496.874 137.41C501.252 134.88 502.997 131.506 502.072 128.541C501.478 130.596 499.78 132.652 496.874 134.332Z"}" fill="${"#F6F6FA"}"></path><path d="${"M158.262 168.957L223.713 206.598C229.989 210.193 240.924 209.702 248.14 205.492C255.355 201.287 256.118 194.964 249.844 191.367L184.391 153.726C178.117 150.132 167.181 150.622 159.965 154.832C152.738 159.037 151.98 165.361 158.262 168.957Z"}" fill="${"#7E87BB"}"></path><g opacity="${"0.6"}"><path opacity="${"0.6"}" d="${"M158.262 204.809L223.713 242.451C229.989 246.045 240.924 245.554 248.14 241.345C255.355 237.139 256.118 230.816 249.844 227.221L184.391 189.578C178.117 185.984 167.181 186.475 159.965 190.684C152.738 194.889 151.98 201.214 158.262 204.809Z"}" fill="${"#030830"}"></path></g><path d="${"M203.213 182.001L183.76 170.759C182.679 170.133 182.814 169.041 184.063 168.319C185.306 167.598 187.202 167.519 188.283 168.145L207.736 179.387C208.818 180.012 208.682 181.104 207.434 181.826C206.187 182.549 204.295 182.626 203.213 182.001Z"}" fill="${"#202235"}"></path><path d="${"M217.97 190.528L210.902 186.444C209.821 185.818 209.956 184.726 211.204 184.004C212.447 183.283 214.344 183.204 215.425 183.83L222.493 187.914C223.575 188.54 223.439 189.631 222.191 190.354C220.941 191.075 219.052 191.154 217.97 190.528Z"}" fill="${"#202235"}"></path><path style="${"mix-blend-mode:lighten"}" opacity="${"0.4"}" d="${"M254.106 0H154.006V162.653L154.028 162.661C153.963 165.024 155.339 167.285 158.255 168.957L223.706 206.598C229.982 210.192 240.917 209.701 248.133 205.492C251.665 203.434 253.64 200.868 254.01 198.362L254.111 198.398L254.106 0Z"}" fill="${"url(#paint2_linear)"}"></path><path d="${"M301.408 126.627L295.608 123.272C294.527 122.647 294.662 121.555 295.91 120.834C297.153 120.112 299.049 120.033 300.131 120.658L305.931 124.013C307.012 124.639 306.877 125.73 305.628 126.453C304.377 127.18 302.489 127.256 301.408 126.627Z"}" fill="${"#717CB4"}"></path><path d="${"M323.998 139.686L308.69 130.838C307.609 130.213 307.744 129.121 308.993 128.4C310.236 127.678 312.132 127.599 313.213 128.224L328.521 137.071C329.602 137.696 329.467 138.788 328.217 139.51C326.968 140.232 325.079 140.313 323.998 139.686Z"}" fill="${"#717CB4"}"></path><path d="${"M275.198 156.374C270.374 159.161 262.554 159.161 257.73 156.374C252.906 153.587 252.907 149.067 257.73 146.283C262.552 143.499 270.374 143.496 275.197 146.283C280.019 149.07 280.021 153.584 275.198 156.374Z"}" fill="${"#717CB4"}"></path><path d="${"M261.16 150.987L265.879 148.26C266.698 147.786 268.088 147.983 268.429 148.629L270.482 152.542C270.838 153.22 269.743 153.853 268.57 153.648L261.803 152.462C260.69 152.267 260.341 151.46 261.16 150.987Z"}"${add_attribute("fill", $color, 0)}></path><path d="${"M266.1 35.7431L271.988 39.1465C273.093 39.7824 274.876 39.7824 275.976 39.1465C277.077 38.5106 277.081 37.4779 275.976 36.8407L270.089 33.4386C268.984 32.8027 267.203 32.8013 266.1 33.4386C264.998 34.0759 265 35.1127 266.1 35.7431Z"}"${add_attribute("fill", $color, 0)}></path><path d="${"M257.745 40.5728L274.364 50.1805C275.469 50.8164 277.252 50.8164 278.352 50.1805C279.453 49.5446 279.457 48.5119 278.352 47.8746L261.733 38.267C260.629 37.6311 258.846 37.6311 257.745 38.267C256.644 38.9029 256.643 39.9369 257.745 40.5728Z"}" fill="${"#7574AD"}"></path><path d="${"M299.868 52.9543C300.973 52.317 300.973 51.2844 299.868 50.6485L283.249 41.0436C282.144 40.4077 280.362 40.4077 279.26 41.0436C278.158 41.6795 278.155 42.7121 279.26 43.3494L295.881 52.9529C296.98 53.5902 298.766 53.5902 299.868 52.9543Z"}" fill="${"#7574AD"}"></path><path d="${"M312.88 58.1672L311.903 57.6032L307.182 54.8813C306.078 54.2454 304.295 54.244 303.193 54.8813C302.091 55.5185 302.088 56.5498 303.193 57.1871L307.914 59.9146L308.891 60.48L313.612 63.2074C314.717 63.8447 316.5 63.8447 317.601 63.2074C318.701 62.5702 318.705 61.5403 317.601 60.903L312.88 58.1672Z"}" fill="${"#8A85B8"}"></path><path d="${"M345.571 275.334L369.573 289.205C370.954 290.005 373.204 290.005 374.589 289.205C375.974 288.404 375.97 287.108 374.589 286.302L350.585 272.429C349.204 271.629 346.954 271.629 345.571 272.429C344.187 273.23 344.185 274.533 345.571 275.334Z"}" fill="${"#8A85B8"}"></path><path d="${"M335.059 278.508C333.678 279.308 333.678 280.606 335.059 281.411L371.982 302.746C373.364 303.545 375.613 303.546 376.998 302.746C378.384 301.945 378.379 300.647 376.998 299.843L340.075 278.504C338.69 277.707 336.444 277.707 335.059 278.508Z"}" fill="${"#7574AD"}"></path><path d="${"M324.55 287.478L331.953 291.757C333.334 292.557 335.584 292.557 336.969 291.757C338.354 290.957 338.35 289.66 336.969 288.854L329.565 284.569C328.184 283.768 325.935 283.768 324.55 284.569C323.164 285.369 323.164 286.678 324.55 287.478Z"}" fill="${"#8A85B8"}"></path><path d="${"M314.047 293.552L334.944 305.631C336.325 306.431 338.575 306.431 339.96 305.631C341.345 304.83 341.341 303.532 339.96 302.728L319.063 290.649C317.682 289.85 315.432 289.849 314.047 290.649C312.662 291.45 312.666 292.752 314.047 293.552Z"}"${add_attribute("fill", $color, 0)}></path><path d="${"M367.013 309.119C368.394 308.319 368.394 307.021 367.013 306.216L346.113 294.138C344.732 293.338 342.484 293.338 341.099 294.138C339.714 294.939 339.718 296.237 341.099 297.041L361.997 309.118C363.382 309.92 365.627 309.92 367.013 309.119Z"}" fill="${"#8A85B8"}"></path><path d="${"M383.372 315.675L382.144 314.966L376.206 311.535C374.825 310.735 372.575 310.733 371.19 311.535C369.804 312.337 369.809 313.632 371.19 314.438L377.128 317.869L378.356 318.58L384.294 322.011C385.675 322.811 387.925 322.811 389.31 322.011C390.695 321.211 390.691 319.913 389.31 319.108L383.372 315.675Z"}" fill="${"#7574AD"}"></path><path d="${"M467.393 124.363L466.417 123.799L461.695 121.07C460.59 120.434 458.809 120.434 457.707 121.07C456.604 121.706 456.602 122.739 457.707 123.376L462.428 126.105L463.405 126.669L468.127 129.392C469.232 130.028 471.013 130.028 472.115 129.392C473.217 128.756 473.22 127.724 472.115 127.086L467.393 124.363Z"}" fill="${"#717CB4"}"></path><path d="${"M378.681 72.903L377.705 72.3376L372.984 69.6088C371.88 68.9729 370.097 68.9729 368.995 69.6088C367.893 70.2447 367.89 71.2787 368.995 71.9146L373.709 74.6489L374.686 75.2129L379.408 77.9418C380.512 78.5791 382.295 78.5777 383.396 77.9418C384.497 77.3059 384.501 76.2732 383.396 75.636L378.681 72.903Z"}" fill="${"#717CB4"}"></path><path d="${"M397.149 83.457L396.172 82.8916L391.451 80.1627C390.346 79.5268 388.564 79.5268 387.462 80.1627C386.36 80.7986 386.358 81.8313 387.462 82.4686L392.184 85.1975L393.16 85.7615L394.667 86.631C395.772 87.2683 397.553 87.2683 398.655 86.631C399.757 85.9937 399.76 84.9625 398.655 84.3252L397.149 83.457Z"}" fill="${"#717CB4"}"></path><path d="${"M365.606 112.454L374.963 107.047L372.603 106.255L374.086 105.396C375.674 105.856 376.873 106.064 377.684 106.019L379.203 106.897L367.602 113.603L365.606 112.454Z"}" fill="${"#F6F6FA"}"></path><path d="${"M370.323 115.179L371.722 114.371L378.992 113.443C379.104 113.428 379.39 113.393 379.857 113.341C380.323 113.288 380.638 113.248 380.808 113.219C380.978 113.19 381.232 113.143 381.568 113.081C381.861 113.025 382.15 112.945 382.431 112.842C382.669 112.749 382.9 112.639 383.121 112.511C383.579 112.247 383.845 111.999 383.921 111.768C383.997 111.537 383.859 111.331 383.507 111.147C382.764 110.755 381.789 110.909 380.582 111.609L380.098 111.885L378.14 110.752L378.637 110.465C379.141 110.169 379.674 109.926 380.228 109.74C380.752 109.564 381.296 109.45 381.847 109.401C382.406 109.353 382.97 109.394 383.516 109.524C384.093 109.66 384.647 109.881 385.158 110.181C386.138 110.747 386.613 111.329 386.584 111.925C386.554 112.522 386.056 113.099 385.088 113.659C384.759 113.85 384.414 114.014 384.058 114.148C383.683 114.29 383.297 114.399 382.903 114.476C382.489 114.56 382.127 114.624 381.819 114.668C381.511 114.712 381.102 114.759 380.595 114.816L380.457 114.83L380.347 114.844L380.223 114.857L374.204 115.576L377.684 117.588L376.082 118.512L370.323 115.179Z"}" fill="${"#F6F6FA"}"></path><path d="${"M378.89 118.788L380.773 117.7L382.661 118.792L380.779 119.88L378.89 118.788ZM383.627 116.051L385.517 114.958L387.406 116.051L385.516 117.143L383.627 116.051Z"}" fill="${"#F6F6FA"}"></path><path d="${"M383.633 123.058C382.597 122.46 382.119 121.852 382.199 121.233C382.279 120.615 382.841 120.005 383.885 119.403L384.3 119.164L386.284 120.311L385.962 120.498C385.385 120.843 385.03 121.14 384.898 121.387C384.76 121.633 384.898 121.873 385.305 122.11C385.477 122.208 385.664 122.279 385.857 122.32C386.034 122.357 386.215 122.371 386.396 122.361C386.588 122.344 386.777 122.3 386.958 122.233C387.157 122.164 387.352 122.083 387.542 121.991C387.726 121.899 387.938 121.784 388.178 121.646C388.792 121.29 389.164 120.955 389.282 120.659C389.401 120.364 389.227 120.054 388.759 119.75C388.74 119.739 388.69 119.71 388.608 119.659L388.462 119.571L390.126 118.604C390.278 118.692 390.368 118.742 390.402 118.754C390.848 119.023 391.361 119.158 391.882 119.146C392.342 119.117 392.863 118.933 393.445 118.593C393.959 118.295 394.266 118.028 394.366 117.791C394.467 117.552 394.318 117.318 393.923 117.089C393.76 116.994 393.583 116.925 393.399 116.884C393.229 116.846 393.053 116.831 392.879 116.841C392.695 116.856 392.514 116.891 392.339 116.946C392.154 117.005 391.974 117.074 391.797 117.154C391.627 117.234 391.438 117.332 391.227 117.448L390.832 117.683L388.845 116.536L389.385 116.223C390.32 115.667 391.384 115.366 392.471 115.35C393.544 115.34 394.599 115.623 395.522 116.169C396.498 116.735 396.98 117.321 396.975 117.932C396.969 118.543 396.471 119.132 395.486 119.701C394.85 120.074 394.146 120.314 393.414 120.405C392.745 120.498 392.064 120.444 391.417 120.247C391.744 120.635 391.809 121.043 391.611 121.47C391.413 121.896 390.933 122.33 390.17 122.77C389.162 123.378 388.028 123.746 386.856 123.846C385.726 123.918 384.602 123.643 383.633 123.058V123.058Z"}" fill="${"#F6F6FA"}"></path><path d="${"M393.884 127.916C392.777 127.978 391.676 127.713 390.719 127.154C389.752 126.592 389.306 125.982 389.407 125.327C389.507 124.672 390.065 124.049 391.091 123.455L396.201 120.508C397.19 119.916 398.305 119.569 399.455 119.496C400.568 119.434 401.673 119.706 402.631 120.276C403.628 120.852 404.075 121.464 403.972 122.111C403.865 122.756 403.282 123.383 402.234 123.994L397.131 126.941C396.143 127.523 395.029 127.858 393.884 127.916V127.916ZM392.428 126.169C393.1 126.558 394.005 126.423 395.143 125.764L400.181 122.851C400.331 122.765 400.458 122.685 400.578 122.608C400.698 122.53 400.808 122.446 400.927 122.353C401.029 122.277 401.118 122.183 401.19 122.077C401.245 121.993 401.284 121.899 401.306 121.8C401.315 121.752 401.314 121.702 401.302 121.654C401.29 121.607 401.268 121.562 401.236 121.524C401.149 121.414 401.04 121.323 400.916 121.257C400.745 121.159 400.558 121.093 400.364 121.062C400.176 121.029 399.984 121.024 399.795 121.046C399.599 121.071 399.406 121.117 399.22 121.184C399.037 121.248 398.858 121.323 398.683 121.406C398.53 121.482 398.358 121.575 398.171 121.683L393.133 124.595C391.991 125.255 391.756 125.78 392.428 126.169V126.169Z"}" fill="${"#F6F6FA"}"></path><path d="${"M428.129 92.4352C426.798 93.2052 424.639 93.2052 423.308 92.4352C421.977 91.6652 421.977 90.4183 423.308 89.6483C424.639 88.8783 426.798 88.8797 428.129 89.6483C429.461 90.4169 429.461 91.6652 428.129 92.4352Z"}" fill="${"#161623"}"></path><defs><radialGradient id="${"paint0_radial"}" cx="${"0"}" cy="${"0"}" r="${"1"}" gradientUnits="${"userSpaceOnUse"}" gradientTransform="${"translate(103.333 155.336) scale(395.561 395.953)"}"><stop stop-color="${"#F6F6FA"}"></stop><stop offset="${"0.28"}" stop-color="${"#7574AD"}"></stop><stop offset="${"0.4"}" stop-color="${"#717CB4"}"></stop><stop offset="${"0.54"}" stop-color="${"#3B395B"}"></stop></radialGradient><radialGradient id="${"paint1_radial"}" cx="${"0"}" cy="${"0"}" r="${"1"}" gradientUnits="${"userSpaceOnUse"}" gradientTransform="${"translate(190.581 53.9603) scale(328.014 328.339)"}"><stop stop-color="${"#50418E"}"></stop><stop offset="${"1"}" stop-color="${"#3C3689"}"></stop></radialGradient><linearGradient id="${"paint2_linear"}" x1="${"204.059"}" y1="${"209.003"}" x2="${"204.059"}" y2="${"0"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#8A85B8"}"></stop><stop offset="${"0.25"}" stop-color="${"#615E83"}"></stop><stop offset="${"0.48"}" stop-color="${"#413F5A"}"></stop><stop offset="${"0.69"}" stop-color="${"#29283C"}"></stop><stop offset="${"0.87"}" stop-color="${"#1B1B29"}"></stop><stop offset="${"1"}" stop-color="${"#161623"}"></stop></linearGradient></defs></svg>
        
</div>`;
});

/* src/routes/portfolio.svelte generated by Svelte v3.35.0 */

const css$5 = {
	code: ":root{--animate-duration:500ms;--animate-delay:0.4s}.portfolio.svelte-sbtd47.svelte-sbtd47{width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden}.portfolio-card.svelte-sbtd47.svelte-sbtd47{display:flex;align-items:center;justify-content:center;top:50%;position:relative;height:20rem;width:20rem;margin:2rem;background-color:var(--bg-color);border-radius:0.5rem;-webkit-box-shadow:0px 0px 60px 5px rgba(0, 0, 0, 0.44);-moz-box-shadow:0px 0px 60px 5px rgba(0, 0, 0, 0.44);box-shadow:0px 0px 60px 5px rgba(0, 0, 0, 0.44)}.card-content.svelte-sbtd47.svelte-sbtd47{overflow-y:auto;display:none;position:absolute;top:0;text-align:left;padding:1rem;height:100%;background:var(--main-color)}.card-content.svelte-sbtd47 h2.svelte-sbtd47{color:var(--white);margin-bottom:1rem;position:sticky;font-weight:900}.card-content.svelte-sbtd47 p.svelte-sbtd47{color:var(--white);font-weight:300;font-size:1rem}.show.svelte-sbtd47.svelte-sbtd47{display:block}@media screen and (max-width: 600px){.portfolio.svelte-sbtd47.svelte-sbtd47{flex-direction:column}.portfolio-card.svelte-sbtd47.svelte-sbtd47{width:12.5rem;height:12.5rem;top:0%;margin:1rem}.card-header.svelte-sbtd47.svelte-sbtd47{display:none}.card-content.svelte-sbtd47.svelte-sbtd47{display:block}.card-content.svelte-sbtd47 p.svelte-sbtd47{width:12rem}}",
	map: "{\"version\":3,\"file\":\"portfolio.svelte\",\"sources\":[\"portfolio.svelte\"],\"sourcesContent\":[\"<script lang=\\\"ts\\\">import { goto } from \\\"@sapper/app\\\";\\nimport ProgIcon from \\\"../components/ProgIcon.svelte\\\";\\nimport DesignIcon from \\\"../components/DesignIcon.svelte\\\";\\nexport let isDesignSelected = false;\\nexport let isProgSelected = false;\\nimport Container from \\\"../components/Container.svelte\\\";\\nimport { color } from \\\"../stores.js\\\";\\nfunction handleMouseWheel(e) {\\n    if (!isDesignSelected || !isProgSelected) {\\n        if (e.deltaY > 0) {\\n            goto(\\\"/contact\\\", { replace: true });\\n        }\\n        else {\\n            goto(\\\"/about\\\", { replace: true });\\n        }\\n    }\\n    else {\\n        return;\\n    }\\n}\\nfunction setDesignSelect(value) {\\n    isDesignSelected = value;\\n}\\nfunction setProgSelect(value) {\\n    isProgSelected = value;\\n}\\n</script>\\n\\n<svelte:head>\\n    <title>Portfolio | Arthur Matias</title>\\n</svelte:head>\\n<Container>\\n    <div\\n        class=\\\"portfolio\\\"\\n        style={`--main-color: ${$color}`}\\n        on:wheel={(e) => handleMouseWheel(e)}\\n    >\\n        <a\\n            href=\\\"https://github.com/Arthur-Matias\\\"\\n            on:mouseover={() => setProgSelect(true)}\\n            on:mouseout={() => setProgSelect(false)}\\n        >\\n            <div class=\\\"portfolio-card animate__animated animate__fadeIn\\\">\\n                <div class=\\\"card-header\\\">\\n                    <ProgIcon />\\n                </div>\\n                <div\\n                    class={`${\\n                        isProgSelected\\n                            ? \\\"show animate__animated animate__bounceInDown card-content\\\"\\n                            : \\\"card-content\\\"\\n                    }`}\\n                >\\n                    <h2>Programming</h2>\\n                    <p\\n                        class=\\\"animate__animated animate__fadeIn animate__delay-1s\\\"\\n                    >\\n                        Click here to take a look at my GitHub profile, i work\\n                        with web development, focusing on the front-end, but I\\n                        also have knowledge on back-end and other languages,\\n                        such as C #, Java and Python.\\n                    </p>\\n                </div>\\n            </div>\\n        </a>\\n        <a href=\\\"https://github.com/Arthur-Matias\\\">\\n            <div\\n                class=\\\"portfolio-card animate__animated animate__fadeIn\\\"\\n                on:mouseover={() => setDesignSelect(true)}\\n                on:mouseout={() => setDesignSelect(false)}\\n            >\\n                <div class=\\\"card-header\\\">\\n                    <DesignIcon />\\n                </div>\\n                <div\\n                    class={`${\\n                        isDesignSelected\\n                            ? \\\"show animate__animated animate__bounceInDown card-content\\\"\\n                            : \\\"card-content\\\"\\n                    }`}\\n                >\\n                    <h2>Design</h2>\\n                    <p\\n                        class=\\\"animate__animated animate__fadeIn animate__delay-1s\\\"\\n                    >\\n                        Click here to take a look at my Behance profile. i work\\n                        with Graphic Design since 2017. Currently learning more\\n                        about UI/UX. I have knowledge on the whole Adobe suite\\n                        as i do also know some other softwares like Corel Draw,\\n                        Gimp, Inkscape, Da'Vinci Resolve, Sony Vegas, Figma,\\n                        Framer and more...\\n                    </p>\\n                </div>\\n            </div>\\n        </a>\\n    </div>\\n</Container>\\n\\n<style>\\n    :root {\\n        --animate-duration: 500ms;\\n        --animate-delay: 0.4s;\\n    }\\n    .portfolio {\\n        width: 100%;\\n        height: 100%;\\n\\n        display: flex;\\n\\n        align-items: center;\\n        justify-content: center;\\n        overflow: hidden;\\n    }\\n\\n    .portfolio-card {\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n        top: 50%;\\n        position: relative;\\n        height: 20rem;\\n        width: 20rem;\\n        margin: 2rem;\\n        background-color: var(--bg-color);\\n        border-radius: 0.5rem;\\n\\n        -webkit-box-shadow: 0px 0px 60px 5px rgba(0, 0, 0, 0.44);\\n        -moz-box-shadow: 0px 0px 60px 5px rgba(0, 0, 0, 0.44);\\n        box-shadow: 0px 0px 60px 5px rgba(0, 0, 0, 0.44);\\n    }\\n    .card-content {\\n        overflow-y: auto;\\n        display: none;\\n        position: absolute;\\n        top: 0;\\n        text-align: left;\\n        padding: 1rem;\\n        height: 100%;\\n        background: var(--main-color);\\n    }\\n    .card-content h2 {\\n        color: var(--white);\\n        margin-bottom: 1rem;\\n        position: sticky;\\n        font-weight: 900;\\n    }\\n\\n    .card-content p {\\n        color: var(--white);\\n        font-weight: 300;\\n        font-size: 1rem;\\n    }\\n\\n    .show {\\n        display: block;\\n    }\\n\\n    @media screen and (max-width: 600px) {\\n        .portfolio {\\n            flex-direction: column;\\n        }\\n        .portfolio-card {\\n            width: 12.5rem;\\n            height: 12.5rem;\\n            top: 0%;\\n            margin: 1rem;\\n        }\\n        .card-header {\\n            display: none;\\n        }\\n        .card-content {\\n            display: block;\\n        }\\n        .card-content p {\\n            width: 12rem;\\n        }\\n    }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAmGI,KAAK,AAAC,CAAC,AACH,kBAAkB,CAAE,KAAK,CACzB,eAAe,CAAE,IAAI,AACzB,CAAC,AACD,UAAU,4BAAC,CAAC,AACR,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CAEZ,OAAO,CAAE,IAAI,CAEb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,QAAQ,CAAE,MAAM,AACpB,CAAC,AAED,eAAe,4BAAC,CAAC,AACb,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,GAAG,CAAE,GAAG,CACR,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,IAAI,UAAU,CAAC,CACjC,aAAa,CAAE,MAAM,CAErB,kBAAkB,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACxD,eAAe,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACrD,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,AACpD,CAAC,AACD,aAAa,4BAAC,CAAC,AACX,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,YAAY,CAAC,AACjC,CAAC,AACD,2BAAa,CAAC,EAAE,cAAC,CAAC,AACd,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,aAAa,CAAE,IAAI,CACnB,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,GAAG,AACpB,CAAC,AAED,2BAAa,CAAC,CAAC,cAAC,CAAC,AACb,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,AACnB,CAAC,AAED,KAAK,4BAAC,CAAC,AACH,OAAO,CAAE,KAAK,AAClB,CAAC,AAED,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAClC,UAAU,4BAAC,CAAC,AACR,cAAc,CAAE,MAAM,AAC1B,CAAC,AACD,eAAe,4BAAC,CAAC,AACb,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,OAAO,CACf,GAAG,CAAE,EAAE,CACP,MAAM,CAAE,IAAI,AAChB,CAAC,AACD,YAAY,4BAAC,CAAC,AACV,OAAO,CAAE,IAAI,AACjB,CAAC,AACD,aAAa,4BAAC,CAAC,AACX,OAAO,CAAE,KAAK,AAClB,CAAC,AACD,2BAAa,CAAC,CAAC,cAAC,CAAC,AACb,KAAK,CAAE,KAAK,AAChB,CAAC,AACL,CAAC\"}"
};

const Portfolio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $color, $$unsubscribe_color;
	$$unsubscribe_color = subscribe(color, value => $color = value);
	let { isDesignSelected = false } = $$props;
	let { isProgSelected = false } = $$props;

	if ($$props.isDesignSelected === void 0 && $$bindings.isDesignSelected && isDesignSelected !== void 0) $$bindings.isDesignSelected(isDesignSelected);
	if ($$props.isProgSelected === void 0 && $$bindings.isProgSelected && isProgSelected !== void 0) $$bindings.isProgSelected(isProgSelected);
	$$result.css.add(css$5);
	$$unsubscribe_color();

	return `${($$result.head += `${($$result.title = `<title>Portfolio | Arthur Matias</title>`, "")}`, "")}
${validate_component(Container, "Container").$$render($$result, {}, {}, {
		default: () => `<div class="${"portfolio svelte-sbtd47"}"${add_attribute("style", `--main-color: ${$color}`, 0)}><a href="${"https://github.com/Arthur-Matias"}" class="${"svelte-sbtd47"}"><div class="${"portfolio-card animate__animated animate__fadeIn svelte-sbtd47"}"><div class="${"card-header svelte-sbtd47"}">${validate_component(ProgIcon, "ProgIcon").$$render($$result, {}, {}, {})}</div>
                <div class="${escape(null_to_empty(`${isProgSelected
		? "show animate__animated animate__bounceInDown card-content"
		: "card-content"}`)) + " svelte-sbtd47"}"><h2 class="${"svelte-sbtd47"}">Programming</h2>
                    <p class="${"animate__animated animate__fadeIn animate__delay-1s svelte-sbtd47"}">Click here to take a look at my GitHub profile, i work
                        with web development, focusing on the front-end, but I
                        also have knowledge on back-end and other languages,
                        such as C #, Java and Python.
                    </p></div></div></a>
        <a href="${"https://github.com/Arthur-Matias"}" class="${"svelte-sbtd47"}"><div class="${"portfolio-card animate__animated animate__fadeIn svelte-sbtd47"}"><div class="${"card-header svelte-sbtd47"}">${validate_component(DesignIcon, "DesignIcon").$$render($$result, {}, {}, {})}</div>
                <div class="${escape(null_to_empty(`${isDesignSelected
		? "show animate__animated animate__bounceInDown card-content"
		: "card-content"}`)) + " svelte-sbtd47"}"><h2 class="${"svelte-sbtd47"}">Design</h2>
                    <p class="${"animate__animated animate__fadeIn animate__delay-1s svelte-sbtd47"}">Click here to take a look at my Behance profile. i work
                        with Graphic Design since 2017. Currently learning more
                        about UI/UX. I have knowledge on the whole Adobe suite
                        as i do also know some other softwares like Corel Draw,
                        Gimp, Inkscape, Da&#39;Vinci Resolve, Sony Vegas, Figma,
                        Framer and more...
                    </p></div></div></a></div>`
	})}`;
});

var component_1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': Portfolio
});

/* src/routes/contact.svelte generated by Svelte v3.35.0 */

const css$4 = {
	code: ".Contact.svelte-1xpqjlp.svelte-1xpqjlp{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative}.content-wrapper.svelte-1xpqjlp.svelte-1xpqjlp{text-align:center\n    }.contact-title.svelte-1xpqjlp.svelte-1xpqjlp{text-decoration:underline;font-weight:300;left:0}.call-to-action.svelte-1xpqjlp.svelte-1xpqjlp{max-width:40rem;line-height:2rem;margin-bottom:1rem}.contact-ways-list.svelte-1xpqjlp.svelte-1xpqjlp{list-style-type:none}.list-item.svelte-1xpqjlp.svelte-1xpqjlp{margin-top:2rem}.list-item-title.svelte-1xpqjlp.svelte-1xpqjlp{font-weight:300;color:var(--white);line-height:.2rem}.list-item-text.svelte-1xpqjlp.svelte-1xpqjlp{color:var(--white)}@media screen and (min-width: 1200px) and (max-width: 1600px){}@media screen and (max-width: 600px){.content-wrapper.svelte-1xpqjlp h1.svelte-1xpqjlp{font-size:1.5rem}.list-item-text.svelte-1xpqjlp.svelte-1xpqjlp{margin-top:.2rem;font-size:1rem}}",
	map: "{\"version\":3,\"file\":\"contact.svelte\",\"sources\":[\"contact.svelte\"],\"sourcesContent\":[\"<script lang=\\\"ts\\\">import { goto } from '@sapper/app';\\nimport { color } from '../stores.js';\\nimport Container from \\\"../components/Container.svelte\\\";\\nexport const pageNum = '04';\\nfunction handleScroll(e) {\\n    if (e.deltaY > 0) {\\n    }\\n    else {\\n        goto(\\\"/portfolio\\\", { replace: true });\\n    }\\n}\\n</script>\\n<svelte:head>\\n\\t<title>Arthur Matias | Contact</title>\\n</svelte:head>\\n<Container>\\n    <div class=\\\"Contact\\\" on:wheel={e=>handleScroll(e)} >\\n        <div class=\\\"content-wrapper\\\">\\n            <h4 class=\\\"contact-title animate__animated animate__bounceIn\\\" style={`color: ${$color}`}>Get in Touch</h4>\\n            <h1 class=\\\"call-to-action animate__animated animate__lightSpeedInLeft\\\">Let's make something amazing together</h1>\\n            <ul class=\\\"contact-ways-list\\\">\\n                <li class='list-item animate__animated animate__flipInX'>\\n                    <a target=\\\"_blank\\\" href=\\\"mailto:ahmmfdc@gmail.com\\\">\\n                        <h5 class=\\\"list-item-title\\\">Mail me</h5>\\n                        <h3 class=\\\"list-item-text\\\">ahmmfdc@gmail.com</h3>\\n                    </a>\\n                </li>\\n                <li class='list-item animate__animated animate__flipInX'>\\n                    <a target=\\\"_blank\\\" href=\\\"https://behance.net/arthurmm18\\\">\\n                        <h5 class=\\\"list-item-title\\\">Find me on Behance</h5>\\n                        <h3 class=\\\"list-item-text\\\">behance.net/arthurmm18</h3>\\n                    </a>\\n                    </li>\\n                    <li class='list-item animate__animated animate__flipInX'>\\n                        <a target=\\\"_blank\\\" href=\\\"https://linkedin.com/in/arthur-matias\\\">\\n                        <h5 class=\\\"list-item-title\\\">Find me on LinkedIn</h5>\\n                        <h3 class=\\\"list-item-text\\\">linkedin.com/in/arthur-matias</h3>\\n                    </a>\\n                </li>\\n                <li class='list-item animate__animated animate__flipInX'>\\n                    <a target=\\\"_blank\\\" href=\\\"https://github.com/Arthur-Matias\\\">\\n                        <h5 class=\\\"list-item-title\\\">Find me on GitHub</h5>\\n                        <h3 class=\\\"list-item-text\\\">github.com/Arthur-Matias</h3>\\n                    </a>\\n                </li>\\n            </ul>\\n        </div>\\n    </div>\\n</Container>\\n\\n<style>\\n    \\n    .Contact{\\n        width: 100%;\\n        height: 100%;\\n        display: flex;\\n        flex-direction: column;\\n        align-items: center;\\n        justify-content: center;\\n        position: relative;\\n    }\\n    .content-wrapper{\\n        text-align: center\\n    }\\n    .contact-title{\\n        text-decoration: underline;\\n        font-weight: 300;\\n        left: 0;\\n    }\\n    .call-to-action{\\n        max-width: 40rem;\\n        line-height: 2rem;\\n        margin-bottom: 1rem;\\n    }\\n    .contact-ways-list{\\n        list-style-type: none;\\n    }\\n\\n    .list-item{\\n        margin-top: 2rem;\\n    }\\n\\n    .list-item-title{\\n        font-weight: 300;\\n        color: var(--white);\\n        line-height: .2rem;\\n    }\\n    .list-item-text{\\n        color: var(--white);\\n    }\\n    \\n    @media screen and (min-width: 1200px) and (max-width: 1600px){\\n        \\n    }\\n    @media screen and (max-width: 600px){\\n        .content-wrapper h1{\\n            font-size: 1.5rem;\\n        }\\n        .list-item-text{\\n            margin-top: .2rem;\\n            font-size: 1rem;\\n        }\\n    }\\n</style>\"],\"names\":[],\"mappings\":\"AAoDI,sCAAQ,CAAC,AACL,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,QAAQ,CAAE,QAAQ,AACtB,CAAC,AACD,8CAAgB,CAAC,AACb,UAAU,CAAE,MAAM;IACtB,CAAC,AACD,4CAAc,CAAC,AACX,eAAe,CAAE,SAAS,CAC1B,WAAW,CAAE,GAAG,CAChB,IAAI,CAAE,CAAC,AACX,CAAC,AACD,6CAAe,CAAC,AACZ,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,IAAI,CACjB,aAAa,CAAE,IAAI,AACvB,CAAC,AACD,gDAAkB,CAAC,AACf,eAAe,CAAE,IAAI,AACzB,CAAC,AAED,wCAAU,CAAC,AACP,UAAU,CAAE,IAAI,AACpB,CAAC,AAED,8CAAgB,CAAC,AACb,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,WAAW,CAAE,KAAK,AACtB,CAAC,AACD,6CAAe,CAAC,AACZ,KAAK,CAAE,IAAI,OAAO,CAAC,AACvB,CAAC,AAED,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,CAAC,AAE9D,CAAC,AACD,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAC,CAAC,AACjC,+BAAgB,CAAC,iBAAE,CAAC,AAChB,SAAS,CAAE,MAAM,AACrB,CAAC,AACD,6CAAe,CAAC,AACZ,UAAU,CAAE,KAAK,CACjB,SAAS,CAAE,IAAI,AACnB,CAAC,AACL,CAAC\"}"
};

const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $color, $$unsubscribe_color;
	$$unsubscribe_color = subscribe(color, value => $color = value);
	const pageNum = "04";

	if ($$props.pageNum === void 0 && $$bindings.pageNum && pageNum !== void 0) $$bindings.pageNum(pageNum);
	$$result.css.add(css$4);
	$$unsubscribe_color();

	return `${($$result.head += `${($$result.title = `<title>Arthur Matias | Contact</title>`, "")}`, "")}
${validate_component(Container, "Container").$$render($$result, {}, {}, {
		default: () => `<div class="${"Contact svelte-1xpqjlp"}"><div class="${"content-wrapper svelte-1xpqjlp"}"><h4 class="${"contact-title animate__animated animate__bounceIn svelte-1xpqjlp"}"${add_attribute("style", `color: ${$color}`, 0)}>Get in Touch</h4>
            <h1 class="${"call-to-action animate__animated animate__lightSpeedInLeft svelte-1xpqjlp"}">Let&#39;s make something amazing together</h1>
            <ul class="${"contact-ways-list svelte-1xpqjlp"}"><li class="${"list-item animate__animated animate__flipInX svelte-1xpqjlp"}"><a target="${"_blank"}" href="${"mailto:ahmmfdc@gmail.com"}"><h5 class="${"list-item-title svelte-1xpqjlp"}">Mail me</h5>
                        <h3 class="${"list-item-text svelte-1xpqjlp"}">ahmmfdc@gmail.com</h3></a></li>
                <li class="${"list-item animate__animated animate__flipInX svelte-1xpqjlp"}"><a target="${"_blank"}" href="${"https://behance.net/arthurmm18"}"><h5 class="${"list-item-title svelte-1xpqjlp"}">Find me on Behance</h5>
                        <h3 class="${"list-item-text svelte-1xpqjlp"}">behance.net/arthurmm18</h3></a></li>
                    <li class="${"list-item animate__animated animate__flipInX svelte-1xpqjlp"}"><a target="${"_blank"}" href="${"https://linkedin.com/in/arthur-matias"}"><h5 class="${"list-item-title svelte-1xpqjlp"}">Find me on LinkedIn</h5>
                        <h3 class="${"list-item-text svelte-1xpqjlp"}">linkedin.com/in/arthur-matias</h3></a></li>
                <li class="${"list-item animate__animated animate__flipInX svelte-1xpqjlp"}"><a target="${"_blank"}" href="${"https://github.com/Arthur-Matias"}"><h5 class="${"list-item-title svelte-1xpqjlp"}">Find me on GitHub</h5>
                        <h3 class="${"list-item-text svelte-1xpqjlp"}">github.com/Arthur-Matias</h3></a></li></ul></div></div>`
	})}`;
});

var component_2 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': Contact
});

/* src/components/Me.svelte generated by Svelte v3.35.0 */

const css$3 = {
	code: "#me.svelte-dm1b80.svelte-dm1b80{box-sizing:border-box;margin:0;padding:0;margin-left:2rem}#me.animate__animated.animate__fadeInUp.svelte-dm1b80.svelte-dm1b80{animation-duration:1s}#me.svelte-dm1b80>svg.svelte-dm1b80{height:28rem;margin-bottom:-2rem}@media screen and (max-width: 1200px){#me.svelte-dm1b80>svg.svelte-dm1b80{margin:0;margin-bottom:-1rem}}@media screen and (max-width: 600px){#me.svelte-dm1b80>svg.svelte-dm1b80{height:8rem}}@media screen and (max-height: 768px){#me.svelte-dm1b80>svg.svelte-dm1b80{height:16rem}}",
	map: "{\"version\":3,\"file\":\"Me.svelte\",\"sources\":[\"Me.svelte\"],\"sourcesContent\":[\"<!-- this component take care of my svg colors -->\\n<script lang=\\\"ts\\\">import { color, secondaryColor } from '../stores.js';\\n</script>\\n\\n<div class=\\\"animate__animated animate__fadeInUp\\\" id=\\\"me\\\">\\n    <svg  viewBox=\\\"0 0 431 418\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n        <path d=\\\"M264.874 199.913L264.044 196.735L264.731 199.868L264.874 199.913Z\\\" fill=\\\"#0C8FE7\\\"/>\\n        <path d=\\\"M267.38 142.519C267.151 142.885 266.944 143.242 266.662 143.622C267.002 143.313 267.31 142.967 267.586 142.57C267.516 142.546 267.442 142.559 267.38 142.519Z\\\" fill=\\\"#0C8FE7\\\"/>\\n        <path d=\\\"M269.442 136.786C269.206 138.252 268.802 139.568 268.272 140.782C268.361 140.771 268.435 140.76 268.541 140.75C268.987 139.603 269.267 138.254 269.442 136.786Z\\\" fill=\\\"#0C8FE7\\\"/>\\n        <path d=\\\"M128.973 109.515C128.973 109.515 128.973 109.515 128.978 109.518V109.515H128.973ZM152.999 199.868L118.725 210.89L141.301 216.705L142.535 217.235L149.889 214.298L153.004 199.866H152.999V199.868Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M96.4775 417.357L96.4727 417.546H96.7333C96.7156 417.489 96.7011 417.447 96.6722 417.357H96.4775Z\\\" fill=\\\"#171932\\\"/>\\n        <path d=\\\"M323.821 233.162C327.345 234.884 338.054 240.132 349.784 246.045C341.722 241.639 332.915 237.268 323.821 233.162Z\\\" fill=\\\"#0C8FE7\\\"/>\\n        <path d=\\\"M96.494 416.798L96.4795 417.357H96.6742C96.6275 417.217 96.5648 417.022 96.494 416.798Z\\\" fill=\\\"#0C8FE7\\\"/>\\n        <path d=\\\"M83.5238 361.053C79.6689 337.416 73.6484 313.794 66.2877 305.718C63.1182 302.24 51.7578 294.198 42.6354 293.555C41.1037 293.447 39.7039 293.294 38.3991 293.109C36.5521 308.479 30.8261 364.982 44.0914 382.275C56.5571 398.526 83.3324 403.788 93.1016 405.206C90.3391 395.077 86.5308 379.501 83.5238 361.053Z\\\" fill=\\\"{$color}\\\"/>\\n        <path d=\\\"M193.472 239.017L209.96 264.14L210.25 264.28L210.251 264.278L226.585 239.017L277.986 216.706L266.41 212.675C265.194 218.088 260.081 222.619 253.009 223.781C238.737 226.124 217.075 228.963 196.164 229.013C188.415 223.459 177.827 215.37 176.685 211.879C174.862 206.309 173.525 189.9 173.525 189.9C177.219 193.07 210.293 198.009 223.361 192.784C226.747 191.429 231.162 188.43 235.685 184.907C203.636 193.765 176.822 184.62 158.537 177.277C158.335 177.195 158.13 177.097 157.927 177.01L153 199.868H153.002L149.89 214.3H149.889L142.536 217.235L193.472 239.017Z\\\" fill=\\\"#BFBEC9\\\"/>\\n        <path d=\\\"M173.525 189.901C173.525 189.901 174.862 206.311 176.685 211.879C177.828 215.37 188.417 223.459 196.164 229.013C217.075 228.961 238.737 226.125 253.01 223.781C260.081 222.62 265.194 218.087 266.41 212.675L265.81 212.467L264.729 199.868H264.73L264.043 196.735L264.037 196.714H264.039L259.286 175.04C253.859 178.118 248.078 180.853 242.016 182.945C239.884 183.681 237.775 184.329 235.687 184.907C231.164 188.432 226.749 191.429 223.363 192.784C210.293 198.009 177.218 193.069 173.525 189.901ZM228.92 197.622C228.92 197.622 227.061 208.099 204.387 211.919C181.715 215.74 190.247 198.283 190.247 198.283C190.247 198.283 197.134 203.777 211.069 203.788C223.184 203.798 228.92 197.622 228.92 197.622Z\\\" fill=\\\"#F6F6FB\\\"/>\\n        <path d=\\\"M190.245 198.283C190.245 198.283 181.713 215.742 204.386 211.919C227.06 208.099 228.918 197.622 228.918 197.622C228.918 197.622 223.184 203.798 211.068 203.788C197.133 203.777 190.245 198.283 190.245 198.283Z\\\" fill=\\\"#BFBEC9\\\"/>\\n        <path d=\\\"M207.824 128.22C207.816 128.222 207.801 128.225 207.793 128.227C207.803 128.228 207.82 128.232 207.83 128.235C207.947 128.222 208.108 128.191 207.824 128.22Z\\\" fill=\\\"#F2E0E0\\\"/>\\n        <path d=\\\"M215.656 121.207C215.989 121.267 216.322 121.33 216.604 121.444C216.322 121.33 216.002 121.254 215.656 121.207Z\\\" fill=\\\"#F2E0E0\\\"/>\\n        <path d=\\\"M207.779 128.223C207.767 128.227 207.787 128.225 207.786 128.228C207.787 128.228 207.792 128.227 207.794 128.227C207.789 128.227 207.782 128.225 207.779 128.223Z\\\" fill=\\\"#F2E0E0\\\"/>\\n        <path d=\\\"M155.73 144.711C154.91 143.758 154.089 142.79 153.266 141.768C153.578 142.348 153.967 142.949 154.422 143.571C154.504 143.646 154.562 143.756 154.648 143.827C154.945 144.073 155.346 144.397 155.73 144.711Z\\\" fill=\\\"#F2E0E0\\\"/>\\n        <path d=\\\"M281.053 85.8126C279.544 85.1264 278.064 84.83 276.655 84.7237C271.743 84.3597 267.831 86.7371 267.831 86.7371C267.831 86.7371 267.828 86.7404 267.82 86.7516C267.672 86.932 265.965 89.026 265.177 90.3951C265.177 90.3951 259.534 86.0719 259.34 83.7234C259.148 81.375 260.498 73.4871 260.498 73.4871C260.498 73.4871 254.088 71.1628 252.185 65.4898C252.164 65.4399 252.146 65.3915 252.125 65.3416C252.079 65.1934 251.998 65.0662 251.956 64.9099C251.945 64.8713 251.936 64.8213 251.924 64.7795C250.402 60.5947 249.54 53.311 247.299 47.5381C245.716 43.9477 243.539 40.8519 240.405 39.2991C232.346 35.1708 223.593 36.7267 223.593 36.7267C223.593 36.7267 226.97 24.1871 231.221 18.5656C230.586 18.353 229.939 18.1806 229.295 17.9857C228.444 20.4582 226.872 24.7283 224.903 28.7503C224.903 28.7535 224.9 28.7568 224.9 28.7616C224.871 28.818 224.84 28.8744 224.811 28.9307C224.811 28.9307 222.963 33.1122 219.709 37.9396C216.455 42.7638 211.792 48.2371 206.166 50.8111C195.005 55.93 163.488 65.1226 162.996 65.2643L189.403 50.8143C189.031 50.9093 177.114 54.0149 166.568 59.2466C163.889 60.5738 161.596 62.1298 159.667 63.7148C159.998 65.7379 160.246 67.355 160.317 68.0767C160.603 71.0404 162.013 116.029 166.63 127.967C173.788 146.478 207.125 165.763 212.111 168.568C216.152 168.479 218.87 168.143 218.87 168.143C218.87 168.143 218.926 168.154 218.964 168.157C219.003 168.151 219.047 168.151 219.085 168.143C229.944 165.871 241.365 160.297 250.525 154.825C250.303 154.435 250.356 153.937 250.719 153.657C251.115 153.353 251.673 153.424 251.981 153.813C251.984 153.82 252.019 153.867 252.04 153.899C258.471 149.959 263.653 146.166 266.48 143.825C266.548 143.769 266.593 143.683 266.657 143.624C266.94 143.245 267.144 142.884 267.375 142.52C267.188 142.4 267.035 142.216 266.979 141.986C266.858 141.501 267.153 141.013 267.635 140.889C267.674 140.882 267.918 140.832 268.264 140.782C268.794 139.57 269.197 138.254 269.434 136.785C269.448 136.686 269.466 136.586 269.476 136.483C269.296 135.85 263.544 115.344 259.932 108.822C256.26 102.197 262.189 95.854 262.189 95.854L267.86 107.591C268.137 108.115 269.479 111.249 270.398 112.275C271.136 113.482 272.338 115.458 273.768 117.868C278.202 116.365 282.534 109.495 284.125 102.4C284.125 102.406 284.122 102.435 284.122 102.435C284.122 102.435 287.819 88.8907 281.053 85.8126ZM214.862 64.6377L215.751 78.5578C215.751 78.5578 213.837 77.3594 212.957 73.3969C212.017 69.1655 214.862 64.6377 214.862 64.6377ZM237.689 86.9836C237.787 87.3444 237.911 87.6987 237.911 88.0902C237.911 90.5031 235.958 92.4585 233.547 92.4585C231.137 92.4585 229.187 90.5031 229.187 88.0902C229.187 87.3476 229.421 86.6791 229.746 86.0671C225.548 86.0316 223.595 85.3632 223.595 85.3632C223.595 85.3632 231.432 81.2316 236.915 83.7927C242.395 86.3506 244.297 88.5396 244.297 88.5396C244.297 88.5396 241.204 87.6842 237.689 86.9836ZM253.265 80.895C252.006 81.267 223 81.6343 218.508 79.049V79.0909C218.508 79.0909 218.363 78.9878 218.141 78.772C218.099 78.7253 217.996 78.6866 217.967 78.6415C217.949 78.6125 217.946 78.5739 217.928 78.5465C217.282 77.8313 216.278 76.3527 215.887 73.7078C215.248 69.4104 218.876 65.1483 218.876 65.1483L218.643 74.0203C220.395 70.3349 223.865 66.1679 223.865 66.1679C223.865 66.1679 224.882 69.9387 227.476 70.4477C232.373 71.4093 255.922 74.7484 255.922 74.7484C255.922 74.7484 254.582 80.5068 253.265 80.895Z\\\" fill=\\\"#F6F6FB\\\"/>\\n        <path d=\\\"M145.868 117.779C145.868 117.779 145.868 117.779 145.872 117.783V117.779H145.868Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M217.346 145.207C217.385 144.386 213.831 144.188 208.858 143.488C205.198 142.973 199.806 142.902 198.088 139.626C197.855 139.18 197.016 139.23 196.77 138.763C191.611 136.158 188.018 132.714 186.607 131.398C186.359 131.166 186.525 130.752 186.864 130.752H190.616C188.238 129.496 182.98 125.952 181.156 124.374C180.456 123.768 180.023 123.369 179.96 123.311C179.211 121.89 176.083 133.682 191.802 144.411C195.67 147.051 200.321 151.889 201.465 151.976C202.068 152.021 217.042 151.521 217.346 145.207Z\\\" fill=\\\"#BFBEC9\\\"/>\\n        <path d=\\\"M184.539 110.8C184.747 110.702 184.959 110.592 185.157 110.521C185.138 110.529 184.909 110.627 184.539 110.8Z\\\" fill=\\\"#959BAB\\\"/>\\n        <path d=\\\"M215.13 112.272C214.876 112.784 214.451 113.471 213.795 114.263C211.603 113.517 209.872 113.086 209.494 113.421C208.823 114.015 208.032 115.384 207.465 116.452C206.896 115.384 206.104 114.015 205.433 113.421C204.589 112.667 196.982 115.745 192.498 117.662L195.074 119.675C195.074 119.675 186.678 124.768 187.187 122.393C187.402 121.381 187.801 119.91 188.188 118.554C188.657 116.902 189.039 115.228 189.369 113.543C190.503 107.753 196.823 89.9715 196.823 89.4706C196.823 88.1401 196.173 86.8064 195.032 85.7417C196.177 85.5548 196.724 85.3632 196.724 85.3632C196.724 85.3632 188.887 81.2316 183.408 83.7927C183.107 83.9312 182.856 84.0649 182.577 84.2034C177.656 84.2147 172.211 83.0534 170.501 81.3057C177.073 81.507 196.116 81.2558 199.59 79.0523L199.583 79.0909C199.583 79.0909 199.717 78.975 199.912 78.7865C199.961 78.7366 200.06 78.6947 200.092 78.6415C200.103 78.6238 200.106 78.6029 200.116 78.5852C200.597 78.1003 201.335 77.2547 202.095 76.0804C204.215 77.1339 206.169 79.1328 206.169 82.9535C206.169 83.216 206.017 83.7556 205.773 84.4644C205.589 84.5497 205.412 84.6657 205.314 84.8606C201.99 91.6386 194.44 107.712 196.242 110.594C197.284 112.25 201.821 112.691 206.368 112.691C209.813 112.693 213.195 112.441 215.13 112.272Z\\\" fill=\\\"#CCCCCC\\\"/>\\n        <path d=\\\"M155.407 143.857C155.023 143.545 154.622 143.221 154.323 142.973C154.237 142.902 154.179 142.793 154.097 142.717C153.795 142.433 153.515 142.121 153.266 141.768C153.901 144.009 156.604 147.288 160.337 149.728C158.792 148.148 156.973 145.676 155.407 143.857Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M196.243 110.595C197.282 112.251 201.821 112.694 206.369 112.694C209.814 112.694 213.196 112.443 215.13 112.272C215.274 112.259 215.474 112.245 215.599 112.232C216.095 112.185 216.462 111.745 216.415 111.246C216.37 110.747 215.928 110.405 215.43 110.428C207.606 111.148 198.635 111.004 197.781 109.64C196.972 108.002 201.904 95.9181 206.942 85.6625C207.161 85.2131 206.977 84.6703 206.528 84.4513C206.279 84.3272 206.014 84.3578 205.774 84.4658C205.589 84.5495 205.413 84.6687 205.315 84.8636C201.991 91.64 194.441 107.712 196.243 110.595Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M212.957 73.3952C213.838 77.3593 215.751 78.556 215.751 78.556L214.863 64.636C214.865 64.6376 212.017 69.1654 212.957 73.3952Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M157.761 60.0905C156.86 60.6221 155.007 61.7415 152.983 63.0945C152.912 63.8194 152.865 64.5168 152.865 65.1483C152.865 66.2468 152.951 67.9719 153.084 70.053L158.335 59.7651C158.134 59.8714 157.959 59.9826 157.761 60.0905Z\\\" fill=\\\"#959BAB\\\"/>\\n        <path d=\\\"M166.634 127.967C162.017 116.028 160.609 71.0419 160.322 68.0749C160.253 67.3549 160.004 65.7377 159.671 63.713C156.614 66.2193 154.474 68.7901 153.123 70.6698C153.448 75.5536 154.017 82.264 154.469 88.3026C150.058 86.257 141.069 83.1724 136.973 89.617C132.101 97.2809 137.635 112.494 144.245 116.95C144.653 117.212 145.068 117.457 145.937 117.813C146.286 117.956 146.644 118.079 146.998 118.14C147.512 118.229 148.011 118.269 148.499 118.28L157.985 98.5131C157.985 98.5131 160.059 103.766 160.059 110.961C160.059 118.156 151.802 134.652 153.266 141.768C154.09 142.789 154.912 143.759 155.731 144.711C157.296 146.529 158.85 148.209 160.396 149.788C168.825 156.11 182.704 162.962 191.134 165.857C198.315 168.321 206.504 168.688 212.118 168.568C207.128 165.763 173.795 146.479 166.634 127.967Z\\\" fill=\\\"#BFBEC9\\\"/>\\n        <path d=\\\"M252.186 65.485C252.168 65.435 252.144 65.3899 252.128 65.3384C252.147 65.3867 252.167 65.4399 252.186 65.485Z\\\" fill=\\\"#0D3285\\\"/>\\n        <path d=\\\"M251.92 64.7778C250.911 60.9056 249.932 53.5348 247.293 47.5364C249.534 53.3093 250.397 60.5899 251.92 64.7778Z\\\" fill=\\\"#0D3285\\\"/>\\n        <path d=\\\"M148.01 32.7322C137.311 48.8171 138.188 63.3943 140.209 71.8426C140.341 63.7342 141.686 44.816 150.8 30.0696C152.795 26.8417 155.424 24.1211 158.404 21.7598C154.636 24.5464 151.075 28.1238 148.01 32.7322Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M158.342 59.7506C158.342 59.7506 158.12 59.8795 157.761 60.0905C157.957 59.9826 158.134 59.8714 158.334 59.7635L158.342 59.7506Z\\\" fill=\\\"#0D3285\\\"/>\\n        <path d=\\\"M141.851 90.6834C137.823 92.2039 139.169 98.7645 139.169 98.7645C139.169 98.7645 141.517 96.2211 144.197 98.7645C146.879 101.306 146.59 110.318 146.59 110.318C146.59 110.318 150.736 109.982 150.903 104.276C151.072 98.5712 147.447 88.5717 141.851 90.6834Z\\\" fill=\\\"#999999\\\"/>\\n        <path d=\\\"M271.244 108.055C271.165 107.782 271.109 107.59 271.109 107.59C271.109 107.59 271.363 107.999 271.804 108.717C272.81 109.42 273.759 109.513 273.759 109.513C273.759 109.513 273.469 100.501 276.151 97.9592C278.833 95.4158 281.181 97.9592 281.181 97.9592C281.181 97.9592 282.527 91.4002 278.499 89.8781C272.903 87.7664 269.28 97.7659 269.447 103.471C269.46 103.904 269.534 104.249 269.589 104.623L271.244 108.055Z\\\" fill=\\\"#CCCCCC\\\"/>\\n        <path d=\\\"M235.299 121.964C236.28 123.048 237.131 124.203 237.247 125.066C237.537 127.242 238.132 130 238.132 130C238.132 130 242 122.289 239.26 120.268C238.035 119.364 236.465 118.994 235.093 118.846C235.258 120.158 235.35 121.172 235.299 121.964Z\\\" fill=\\\"#CCCCCC\\\"/>\\n        <path d=\\\"M270.709 157.086C270.699 157.246 270.719 157.371 270.704 157.536C270.702 157.547 270.701 157.56 270.699 157.571C270.812 157.367 270.913 157.164 271.024 156.958L270.709 157.086Z\\\" fill=\\\"#171932\\\"/>\\n        <path d=\\\"M265.374 147.681C264.931 147.457 264.745 146.918 264.963 146.471C265.185 146.025 265.715 145.84 266.164 146.049C266.376 146.153 271.256 148.649 270.707 157.086L271.022 156.959C273.376 152.599 275.27 148.334 275.971 144.949C275.761 144.756 275.566 144.529 275.338 144.369C271.684 141.821 268.223 142.614 268.077 142.649C267.904 142.693 267.744 142.628 267.586 142.572C267.312 142.967 267.002 143.314 266.662 143.624C266.596 143.685 266.553 143.77 266.484 143.827C263.659 146.169 258.473 149.957 252.044 153.899C252.335 154.303 253.981 156.796 253.971 161.898C253.97 162.503 253.944 163.218 253.902 163.998C254.514 163.758 255.122 163.513 255.736 163.255L255.923 163.188L257.419 167.123L258.74 161.946L268.836 157.848C268.852 157.69 268.887 157.537 268.9 157.378C269.557 149.865 265.546 147.767 265.374 147.681Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M128.973 109.515C128.973 109.515 128.973 109.515 128.978 109.518V109.515H128.973ZM152.999 199.868L118.725 210.89L141.301 216.705L142.535 217.235L149.889 214.298L153.004 199.866H152.999V199.868Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M146.504 31.7271C133.292 51.5891 137.14 69.3138 139.743 76.6765C140.545 78.9444 141.233 80.2636 141.262 80.3152C141.425 80.6164 141.735 80.7855 142.054 80.7855C142.203 80.7855 142.351 80.7517 142.488 80.6744C142.927 80.4327 143.085 79.8835 142.849 79.4437C142.805 79.368 141.331 76.5396 140.207 71.841C138.186 63.3927 137.311 48.8154 148.008 32.7305C151.073 28.1222 154.634 24.5447 158.402 21.7582C174.283 10.0062 193.907 12.5318 196.29 13.4918C196.698 13.7173 197.215 13.5997 197.477 13.2051C197.757 12.7895 197.647 12.2274 197.234 11.9471C196.483 11.4397 190.029 10.2945 181.785 11.124C180.102 11.2931 178.352 11.538 176.552 11.8956C167.695 13.6545 155.29 18.5189 146.504 31.7271Z\\\" fill=\\\"{$color}\\\"/>\\n        <path d=\\\"M234.972 123.316C234.908 123.374 234.477 123.768 233.778 124.374C234.333 124.105 234.734 123.754 234.972 123.316Z\\\" fill=\\\"#0D3285\\\"/>\\n        <path d=\\\"M235.296 121.932C235.158 121.805 235.056 121.713 235 121.663C235.177 121.758 235.278 121.851 235.296 121.932Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M207.784 128.228C207.78 128.235 207.788 128.238 207.831 128.233C207.821 128.232 207.803 128.228 207.793 128.225C207.791 128.227 207.786 128.228 207.784 128.228Z\\\" fill=\\\"#171932\\\"/>\\n        <path d=\\\"M223.971 124.999C221.852 124.282 219.506 122.629 216.607 121.445C216.325 121.329 215.992 121.268 215.659 121.209C212.56 120.655 207.621 122.269 207.621 122.269C207.621 122.269 201.229 120.262 198.33 121.447C195.429 122.631 193.083 124.284 190.964 125C188.98 125.672 182.275 124.685 179.961 123.312C180.025 123.37 180.456 123.77 181.156 124.375C182.979 125.954 186.419 128.8 188.797 130.056C189.288 130.316 189.749 130.53 190.123 130.627C193.049 131.376 206.004 128.599 207.787 128.23C207.788 128.228 207.769 128.23 207.78 128.225C207.784 128.227 207.79 128.227 207.795 128.227C207.803 128.225 207.817 128.222 207.825 128.22C208.109 128.191 207.948 128.222 207.832 128.233C210.35 128.671 222.074 131.326 224.811 130.625C227.003 130.065 231.579 126.278 233.779 124.374C234.477 123.768 234.908 123.372 234.972 123.315C232.66 124.688 225.956 125.67 223.971 124.999Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M264.729 199.868L265.811 212.467L266.411 212.675L277.985 216.706L300.228 210.888L264.874 199.913L264.731 199.868H264.729Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M311.934 215.162C315.237 217.821 320.593 222.727 322.952 226.857C323.791 228.326 324.313 229.291 324.313 229.291L321.636 209.152L317.16 208.226L266.41 197.734C266.41 197.734 269.974 198.934 275.101 200.715C287.405 204.987 308.772 212.617 311.934 215.162Z\\\" fill=\\\"{$color}\\\"/>\\n        <path d=\\\"M382.643 264.386C375.448 260.103 361.266 253.499 349.049 246.621C337.609 240.18 326.646 235.307 323.087 233.739C322.26 233.375 321.803 233.165 321.803 233.165C321.803 233.165 321.849 233.194 321.933 233.265C324.525 235.443 365.735 270.056 380.912 285.186C396.584 300.808 412.247 358.497 412.247 358.497C412.247 358.497 410.863 355.282 409.772 350.089C405.227 328.434 392.9 272.005 386.881 267.158C386.051 266.487 384.571 265.533 382.643 264.386Z\\\" fill=\\\"{$color}\\\"/>\\n        <path d=\\\"M148.774 117.28C150.379 117.28 151.679 115.978 151.679 114.371C151.679 112.764 150.379 111.462 148.774 111.462C147.169 111.462 145.868 112.764 145.868 114.371C145.868 115.978 147.169 117.28 148.774 117.28Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M267.822 86.75L265.179 90.3936C265.967 89.0244 267.674 86.9304 267.822 86.75Z\\\" fill=\\\"#F2E0E0\\\"/>\\n        <path d=\\\"M221.193 11.7651C226.033 15.837 228.19 26.9528 225.159 32.8868C227.128 28.8647 230.621 23.9069 231.474 21.4344C231.918 20.1474 232.175 19.3243 232.175 19.3243C232.682 17.5654 232.849 15.9788 232.787 14.5339C232.447 6.79432 224.816 0.770131 213.224 0.905433C206.948 0.979528 191.356 -0.241417 174.717 3.81283C178.184 3.37793 181.806 3.13954 185.556 3.10893C201.375 3.07672 216.426 6.69123 221.193 11.7651Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M185.569 4.92268C177.391 4.98711 169.906 6.10819 163.3 8.06846C161.617 8.95115 159.961 9.9482 158.349 11.087C154.465 13.8301 150.825 17.3496 147.61 21.8758C127.455 50.2507 138.787 78.5563 138.787 78.5563C138.787 78.5563 139.073 77.8524 139.744 76.6749C137.141 69.3122 133.291 51.5876 146.505 31.7255C155.291 18.5174 167.695 13.6529 176.552 11.8956C178.351 11.538 180.103 11.2932 181.786 11.124C191.906 8.55974 201.476 7.80108 206.172 7.43866C206.713 7.39678 207.261 7.42578 207.808 7.43222C201.96 5.92456 194.554 4.91785 186.352 4.91785C186.092 4.91946 185.833 4.92107 185.569 4.92268Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M272.513 116.32C274.118 116.32 275.419 115.018 275.419 113.411C275.419 111.804 274.118 110.502 272.513 110.502C270.908 110.502 269.607 111.804 269.607 113.411C269.607 115.018 270.908 116.32 272.513 116.32Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M276.246 142.807C276.255 142.564 276.305 142.287 276.294 142.058C275.859 132.914 270.685 114.703 269.763 111.517L267.868 107.591L262.2 95.8539C262.2 95.8539 256.27 102.197 259.94 108.822C263.551 115.346 269.306 135.849 269.483 136.483C269.472 136.586 269.454 136.683 269.443 136.785C269.268 138.25 268.988 139.6 268.542 140.749C270.006 140.602 273.07 140.647 276.246 142.807Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M264.064 172.841C264.094 172.783 266.686 168.048 268.099 162.08C263.064 170.465 257.578 177.838 257.578 177.838C257.765 177.739 257.984 177.59 258.18 177.477C259.863 176.506 261.855 175.032 264.022 173.194C264.033 173.075 263.999 172.954 264.064 172.841Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M280.487 154.538C280.474 154.467 279.198 147.903 275.974 144.949C275.272 148.334 273.377 152.599 271.025 156.959C270.914 157.164 270.812 157.368 270.7 157.573C270.254 162.595 268.598 167.252 267.297 170.273C272.183 165.73 277.372 160.111 281.254 155.237C280.882 155.176 280.559 154.926 280.487 154.538Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M269.607 110.987C269.607 110.987 269.672 111.206 269.762 111.518C270.684 114.704 275.858 132.915 276.292 142.06C276.304 142.288 276.254 142.564 276.244 142.809C276.288 142.838 276.329 142.854 276.371 142.884C280.453 145.731 282.006 152.902 282.223 154.002C285.148 150.205 284.477 145.223 284.327 143.624C283.988 140.019 279.103 126.833 273.776 117.87C272.344 115.46 271.142 113.483 270.402 112.277C269.899 111.456 269.607 110.987 269.607 110.987Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M264.065 172.841C264.002 172.954 264.034 173.075 264.021 173.194C263.986 173.542 264.084 173.891 264.411 174.073C264.548 174.152 264.7 174.191 264.852 174.191C265.165 174.191 265.474 174.025 265.64 173.729C265.711 173.601 266.425 172.294 267.296 170.27C268.597 167.249 270.253 162.592 270.698 157.57C270.7 157.558 270.703 157.546 270.703 157.534C270.718 157.37 270.698 157.244 270.708 157.085C271.258 148.648 266.377 146.151 266.165 146.048C265.716 145.839 265.186 146.024 264.964 146.47C264.745 146.916 264.932 147.456 265.375 147.68C265.547 147.765 269.558 149.864 268.901 157.375C268.887 157.534 268.853 157.687 268.837 157.845C268.684 159.3 268.422 160.714 268.098 162.078C266.686 168.048 264.095 172.783 264.065 172.841Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M253.973 161.896C253.973 162.502 253.944 163.215 253.902 163.997C253.583 169.939 252.238 180.035 252.174 180.516C252.11 180.969 251.725 181.302 251.276 181.302C251.238 181.302 251.194 181.299 251.156 181.291C250.662 181.227 250.311 180.771 250.378 180.276C250.393 180.164 251.658 170.694 252.047 164.708C252.118 163.637 252.163 162.664 252.163 161.893C252.174 157.114 250.559 154.928 250.559 154.928C250.535 154.896 250.547 154.857 250.53 154.825C250.308 154.435 250.361 153.937 250.724 153.657C251.12 153.353 251.678 153.424 251.986 153.813C251.989 153.82 252.024 153.867 252.045 153.899C252.336 154.301 253.982 156.795 253.973 161.896Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M276.374 142.883C276.331 142.854 276.291 142.836 276.247 142.807C273.07 140.647 270.008 140.602 268.542 140.75C268.436 140.76 268.362 140.771 268.273 140.783C267.926 140.829 267.681 140.879 267.644 140.887C267.162 141.01 266.867 141.498 266.988 141.983C267.046 142.215 267.197 142.397 267.384 142.517C267.447 142.558 267.519 142.545 267.59 142.569C267.749 142.624 267.908 142.688 268.08 142.646C268.228 142.611 271.689 141.818 275.341 144.366C275.57 144.526 275.763 144.753 275.975 144.946C279.199 147.902 280.475 154.464 280.488 154.535C280.561 154.923 280.884 155.175 281.254 155.233C281.299 155.239 281.333 155.278 281.378 155.278C281.431 155.278 281.489 155.273 281.54 155.262C282.033 155.171 282.358 154.701 282.268 154.21C282.264 154.19 282.239 154.066 282.224 153.999C282.007 152.9 280.456 145.729 276.374 142.883Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M276.246 142.807C276.255 142.564 276.305 142.287 276.294 142.058C275.859 132.914 270.685 114.703 269.763 111.517L267.868 107.591L262.2 95.8539C262.2 95.8539 256.27 102.197 259.94 108.822C263.551 115.346 269.306 135.849 269.483 136.483C269.472 136.586 269.454 136.683 269.443 136.785C269.268 138.25 268.988 139.6 268.542 140.749C270.006 140.602 273.07 140.647 276.246 142.807Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M264.065 172.841C264.001 172.954 264.033 173.075 264.023 173.195C261.855 175.035 259.864 176.507 258.183 177.478C257.985 177.591 257.766 177.741 257.578 177.839C257.578 177.839 263.064 170.464 268.1 162.081C266.686 168.047 264.097 172.785 264.065 172.841Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M280.487 154.538C280.474 154.467 279.198 147.903 275.974 144.949C275.272 148.334 273.377 152.599 271.025 156.959C270.914 157.164 270.812 157.368 270.7 157.573C270.254 162.595 268.598 167.252 267.297 170.273C272.183 165.73 277.372 160.111 281.254 155.237C280.882 155.176 280.559 154.926 280.487 154.538Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M270.709 157.086C270.698 157.246 270.716 157.373 270.703 157.536C270.703 157.547 270.7 157.56 270.7 157.571C270.254 162.594 268.597 167.249 267.297 170.274C266.425 172.293 265.71 173.601 265.64 173.73C265.474 174.027 265.167 174.194 264.851 174.194C264.7 174.194 264.547 174.155 264.409 174.078C264.084 173.895 263.984 173.543 264.019 173.197C264.031 173.076 263.999 172.957 264.061 172.843C264.093 172.786 266.682 168.049 268.096 162.083C268.418 160.717 268.684 159.303 268.835 157.848C268.849 157.689 268.885 157.537 268.899 157.378C269.556 149.869 265.546 147.767 265.373 147.683C264.93 147.461 264.743 146.919 264.962 146.473C265.184 146.027 265.715 145.843 266.164 146.053C266.376 146.153 271.256 148.649 270.709 157.086Z\\\" fill=\\\"{$color}\\\"/>\\n        <path d=\\\"M253.973 161.896C253.973 162.502 253.944 163.215 253.902 163.997C253.583 169.939 252.238 180.035 252.174 180.516C252.11 180.969 251.725 181.302 251.276 181.302C251.238 181.302 251.194 181.299 251.156 181.291C250.662 181.227 250.311 180.771 250.378 180.276C250.393 180.164 251.658 170.694 252.047 164.708C252.118 163.637 252.163 162.664 252.163 161.893C252.174 157.114 250.559 154.928 250.559 154.928C250.535 154.896 250.547 154.857 250.53 154.825C250.308 154.435 250.361 153.937 250.724 153.657C251.12 153.353 251.678 153.424 251.986 153.813C251.989 153.82 252.024 153.867 252.045 153.899C252.336 154.301 253.982 156.795 253.973 161.896Z\\\" fill=\\\"{$color}\\\"/>\\n        <path d=\\\"M276.374 142.883C276.331 142.854 276.291 142.836 276.247 142.807C273.07 140.647 270.008 140.602 268.542 140.75C268.436 140.76 268.362 140.771 268.273 140.783C267.926 140.829 267.681 140.879 267.644 140.887C267.162 141.01 266.867 141.498 266.988 141.983C267.046 142.215 267.197 142.397 267.384 142.517C267.447 142.558 267.519 142.545 267.59 142.569C267.749 142.624 267.908 142.688 268.08 142.646C268.228 142.611 271.689 141.818 275.341 144.366C275.57 144.526 275.763 144.753 275.975 144.946C279.199 147.902 280.475 154.464 280.488 154.535C280.561 154.923 280.884 155.175 281.254 155.233C281.299 155.239 281.333 155.278 281.378 155.278C281.431 155.278 281.489 155.273 281.54 155.262C282.033 155.171 282.358 154.701 282.268 154.21C282.264 154.19 282.239 154.066 282.224 153.999C282.007 152.9 280.456 145.729 276.374 142.883Z\\\" fill=\\\"{$color}\\\"/>\\n        <path d=\\\"M140.45 20.0024C120.299 44.9915 128.763 73.4824 128.855 73.7627C128.979 74.146 129.333 74.3876 129.714 74.3876C129.806 74.3876 129.901 74.3731 129.992 74.3441C130.47 74.1895 130.728 73.6789 130.573 73.2037C130.488 72.9315 122.307 45.3862 141.858 21.1429C145.152 17.058 149.745 13.6996 155.276 11.087C157.757 9.91596 160.446 8.91569 163.3 8.06844C169.906 6.10816 177.391 4.98708 185.569 4.92265C185.832 4.92104 186.091 4.91943 186.354 4.91943C194.554 4.91943 201.96 5.92614 207.81 7.4338C213.954 9.01877 218.379 11.1546 220.149 13.2808C220.47 13.6658 221.037 13.7141 221.424 13.3968C221.807 13.0762 221.859 12.506 221.54 12.1211C221.441 12.0003 221.305 11.8859 221.194 11.7667C216.427 6.69286 201.376 3.07835 185.556 3.11378C181.805 3.14278 178.184 3.38117 174.717 3.81768C165.678 4.95325 157.707 7.44347 151.264 11.0902C146.912 13.5498 143.248 16.5329 140.45 20.0024Z\\\" fill=\\\"{$color}\\\"/>\\n        <path d=\\\"M267.833 86.7357C267.833 86.7357 267.83 86.7389 267.822 86.7502L265.175 90.3937C265.175 90.3937 262.443 58.2045 260.536 44.3521C260.285 42.5336 260.049 41.0163 259.837 39.9451C257.993 30.7091 238.62 16.8567 238.62 16.8567C239.009 16.7263 239.63 16.8245 240.366 17.0516C242.076 17.5687 244.584 18.941 247.414 20.8224C254.947 25.8318 264.604 34.3236 266.6 39.3298C269.673 47.026 267.833 86.7357 267.833 86.7357Z\\\" fill=\\\"{$color}\\\"/>\\n        <path d=\\\"M233.212 13.6803C233.06 15.4006 232.415 17.0339 231.352 18.3933C231.307 18.4497 231.263 18.5077 231.218 18.5657C226.966 24.184 224.816 36.5706 224.816 36.5706C224.816 36.5706 232.343 35.1676 240.4 39.296C240.386 39.2895 240.374 39.2782 240.36 39.2718C240.36 39.2718 241.272 39.7357 245.28 39.2718L249.288 38.8063L251.992 44.998V38.0331L257.21 37.0667L260.494 48.6753L260.532 44.3521C260.281 42.5336 260.045 41.0162 259.831 39.9451C257.985 30.7091 238.616 16.8567 238.616 16.8567C239.005 16.7262 239.623 16.8261 240.362 17.05C240.072 16.9356 239.784 16.8293 239.498 16.7327C238.988 16.5587 238.926 15.8612 239.399 15.6035C242.456 13.9477 245.933 12.3369 248.784 11.087C252.026 9.66632 254.446 8.71276 254.446 8.71276C254.446 8.71276 249.598 6.56242 243.563 9.19437C242.381 9.70981 241.411 10.3767 240.551 11.087C239.187 12.2129 238.141 13.1632 237.285 14.1394C236.523 15.0092 236.056 15.1155 235.06 15.5423C235.055 15.5439 235.049 15.5423 235.044 15.5423C235.041 15.5423 235.038 15.5423 235.035 15.5423C234.698 15.5439 234.489 15.5214 234.679 15.2443C235.619 13.8768 236.669 12.461 237.734 11.087C241.422 6.33047 245.278 2.08294 245.278 2.08294C245.278 2.08294 238.991 1.01018 235.348 6.92C234.486 8.31974 233.968 9.74525 233.638 11.087C233.411 12.0132 233.281 12.891 233.212 13.6803Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M181.785 11.1256C181.785 11.1256 195.733 6.05338 207.807 7.43218C207.807 7.43218 215.723 8.68534 220.146 13.2792C220.146 13.2792 220.585 13.8993 221.422 13.3919C222.257 12.8862 221.192 11.7651 221.192 11.7651C221.192 11.7651 229.45 18.0035 227.518 27.6486C225.586 37.2938 220.68 42.7252 208.198 50.0058C195.717 57.2863 170.061 62.969 163.003 65.2627C163.003 65.2627 188.023 51.1317 189.41 50.8128C189.41 50.8128 161.664 56.8837 153.123 70.6668C153.123 70.6668 153.602 67.4163 158.334 59.7621L152.984 63.0947C152.984 63.0947 153.248 75.5747 154.468 88.3012C154.468 88.3012 146.64 84.4805 141.519 86.1654L138.784 78.5562L139.741 76.6749C139.741 76.6749 140.845 79.6145 141.26 80.3152C141.26 80.3152 141.622 81.0158 142.486 80.676C142.486 80.676 143.191 80.3796 142.847 79.4454C142.502 78.5111 140.572 73.629 140.208 71.8394C139.888 70.2625 137.005 40.1899 158.405 21.7581C158.405 21.7581 174.399 8.6644 196.291 13.4918C196.291 13.4918 197.131 13.8671 197.556 13.0617C197.98 12.2564 197.058 11.8569 196.869 11.7941C196.679 11.7296 192.013 10.0448 181.785 11.1256Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M258.736 161.943L268.834 157.847C268.834 157.847 268.572 160.26 268.095 162.081C267.619 163.902 258.913 176.588 257.573 177.839C257.573 177.839 257.951 177.614 258.178 177.479C258.178 177.479 248.985 185.265 244.766 187.133C240.548 189.002 222.168 203.991 186.447 192.719C150.726 181.447 135.02 156.494 138.952 144.711C142.885 132.929 149.212 114.65 157.982 98.5118C157.982 98.5118 161.276 107.464 159.839 113.305C158.402 119.145 152.202 136.086 153.267 141.765C154.332 147.446 185.705 171.577 218.876 168.143C218.876 168.143 233.671 169.902 244.224 166.983V171.812L248.596 165.855L252.048 164.709C252.048 164.709 250.945 178.682 250.38 180.276C250.38 180.276 250.251 181.178 251.157 181.291C252.063 181.404 252.174 180.516 252.174 180.516C252.174 180.516 254.087 164.715 253.902 163.997L255.922 163.183L257.42 167.12L258.736 161.943Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M99.5698 230.939L105.914 232.912L183.186 256.948L191.822 241.607L207.604 266.97L184.999 265.57L103.183 241.602C71.6232 249.068 42.7838 271.934 45.2357 278.859C47.6909 285.795 89.2358 323.352 101.396 337.409C116.523 354.895 132.707 412.449 134.068 417.357H330.363C330.369 417.241 334.042 351.605 336.798 338.298C339.554 324.982 356.094 307.225 356.094 307.225C356.094 307.225 349.663 323.502 346.905 344.956C344.153 366.385 372.057 417.239 372.122 417.355H430.475L419.245 379.192L412.248 357.917C412.248 357.917 397.322 300.228 381.648 284.606C366.473 269.476 325.304 234.842 322.712 232.664C321.456 232.1 320.198 231.541 318.933 230.989L324.315 229.29C321.956 225.16 317.038 216.958 313.736 214.298C310.575 211.753 289.207 204.123 276.904 199.853L264.041 196.711H264.039L264.046 196.732L264.876 199.91L300.231 210.887L277.988 216.703L226.587 239.014L210.254 264.275L210.252 264.277L209.963 264.136L193.475 239.014L142.537 217.236L141.3 216.706L118.724 210.89L153.001 199.868L153.584 197.163L96.537 210.89L93.4737 229.043L99.0292 230.772C99.0549 230.762 99.0823 230.751 99.1096 230.739C99.1289 230.731 99.3027 230.809 99.5698 230.939ZM228.209 241.607L236.719 256.948L318.898 231.002L328.67 237.698L234.933 265.568H210.899L228.209 241.607Z\\\" fill=\\\"{$color}\\\"/>\\n        <path d=\\\"M185 265.568L207.605 266.968L191.823 241.605L183.186 256.946L105.914 232.911L99.5703 230.937C101.633 231.939 110.052 236.53 109.077 237.121C106.841 238.479 105.753 240.993 103.346 241.559C103.292 241.572 103.239 241.589 103.184 241.602L185 265.568Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M210.896 265.569H234.93L328.668 237.698L318.897 231.002L236.718 256.948L228.208 241.607L210.896 265.569Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M346.903 344.957C349.661 323.502 356.091 307.227 356.091 307.227C356.091 307.227 339.552 324.984 336.796 338.3C334.042 351.605 330.367 417.243 330.36 417.359V417.363H372.121L372.118 417.359C372.055 417.243 344.15 366.388 346.903 344.957Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M101.396 337.411C89.2358 323.354 47.6909 285.796 45.2357 278.86C42.7838 271.936 71.6232 249.07 103.183 241.604C103.238 241.591 103.291 241.575 103.346 241.56C105.754 240.995 106.84 238.481 109.077 237.123C110.052 236.53 101.632 231.941 99.5698 230.939C99.3027 230.81 99.1289 230.731 99.1096 230.739C99.0823 230.749 99.0549 230.76 99.0292 230.772C65.2777 243.801 28.2683 261.318 23.7891 279.092C23.7216 279.079 23.6781 279.071 23.6781 279.071L23.5172 280.035C23.4223 280.413 23.3242 280.922 23.2679 281.537L6.46455 382.675L3.5074 400.468L0.669305 417.547L0.616211 417.868H96.4662L96.4742 417.547L96.4791 417.359L96.4935 416.8C96.5643 417.024 96.6271 417.219 96.6737 417.359C96.7027 417.45 96.7172 417.492 96.7349 417.547C96.7622 417.629 96.7944 417.731 96.7944 417.731H134.171C134.171 417.731 134.153 417.666 134.121 417.547C134.11 417.504 134.084 417.415 134.068 417.359C132.707 412.451 116.523 354.897 101.396 337.411ZM44.0918 382.275C30.8265 364.982 36.5525 308.479 38.3995 293.109C39.7027 293.294 41.1041 293.447 42.6358 293.555C51.7598 294.198 63.1202 302.24 66.2881 305.718C73.6488 313.794 79.6677 337.414 83.5242 361.053C86.5313 379.501 90.3395 395.077 93.1036 405.206C83.3344 403.788 56.5575 398.526 44.0918 382.275Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M247.314 47.5365C249.954 53.5349 250.934 60.9056 251.941 64.7779C251.952 64.8198 251.962 64.8697 251.973 64.9083C252.014 65.063 252.094 65.1886 252.142 65.34C252.158 65.3916 252.182 65.4351 252.2 65.4866C254.105 71.1629 260.515 73.4856 260.515 73.4856C260.515 73.4856 259.165 81.3734 259.358 83.7235C259.551 86.0735 265.194 90.3968 265.194 90.3968C265.194 90.3968 262.462 58.206 260.554 44.3536L260.515 48.6769L257.233 37.0682L252.015 38.0347V44.9995L249.311 38.8078L245.303 39.2733C241.295 39.7372 240.383 39.2733 240.383 39.2733C240.397 39.2798 240.41 39.2911 240.423 39.2975C243.556 40.8503 245.732 43.9429 247.314 47.5365Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <g clip-path=\\\"url(#clip0)\\\">\\n        <path d=\\\"M166.718 381.644L212.383 303.786L257.836 381.644L247.634 398.701C247.634 398.701 220.804 376.536 186.819 398.701L201.576 372.922C202.695 370.953 204.454 369.421 206.565 368.579C210.663 366.967 218.026 365.846 227.849 371.604L212.277 344.284L180.817 398.701H176.714L166.718 381.644Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        </g>\\n        <path d=\\\"M267.823 86.75L265.177 90.3936C265.97 89.0244 267.675 86.9304 267.823 86.75Z\\\" fill=\\\"#0D3285\\\"/>\\n        <path d=\\\"M199.592 79.0522L199.584 79.0925C199.584 79.0925 199.719 78.9765 199.914 78.7897C199.962 78.7397 200.062 78.6946 200.092 78.6431C200.102 78.627 200.107 78.6028 200.118 78.5867C200.597 78.1035 201.337 77.2579 202.097 76.0836C202.666 75.2025 203.241 74.1556 203.709 72.904C205.223 68.8691 202.711 64.2849 202.711 64.2849L200.631 74.1346C200.322 69.9837 198.852 64.9099 198.852 64.9099C198.852 64.9099 196.68 68.4326 192.334 70.3188C187.988 72.2049 164.4 74.7515 164.4 74.7515C164.4 74.7515 167.037 80.7725 168.279 81.1623C168.463 81.2203 169.296 81.2702 170.505 81.3073C177.072 81.5054 196.117 81.2557 199.592 79.0522Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M196.727 85.3646C196.727 85.3646 188.887 81.2331 183.407 83.7909C183.106 83.9311 182.858 84.0647 182.578 84.2017C177.764 86.5759 176.023 88.5378 176.023 88.5378C176.023 88.5378 179.117 87.6857 182.631 86.9834C182.535 87.3458 182.408 87.697 182.408 88.09C182.408 90.5029 184.361 92.4583 186.771 92.4583C189.181 92.4583 191.134 90.5029 191.134 88.09C191.134 87.3474 190.902 86.6806 190.576 86.0685C192.539 86.0524 194.03 85.9026 195.036 85.7415C196.178 85.5563 196.727 85.3646 196.727 85.3646Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M215.888 73.7061C216.28 76.3542 217.284 77.8329 217.93 78.5448C217.946 78.5738 217.951 78.6125 217.968 78.6398C217.999 78.6866 218.099 78.7252 218.144 78.7703C218.364 78.9845 218.51 79.0892 218.51 79.0892L218.512 79.0458C223.002 81.6326 252.009 81.2654 253.266 80.8933C254.587 80.5035 255.925 74.7467 255.925 74.7467C255.925 74.7467 232.376 71.4044 227.48 70.4428C224.885 69.9338 223.866 66.163 223.866 66.163C223.866 66.163 220.398 70.3284 218.646 74.017L218.879 65.145C218.877 65.1482 215.249 69.4087 215.888 73.7061Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M236.915 83.7912C231.435 81.2333 223.595 85.3649 223.595 85.3649C223.595 85.3649 225.551 86.0333 229.747 86.0688C229.421 86.6808 229.187 87.3477 229.187 88.0902C229.187 90.5031 231.14 92.4586 233.549 92.4586C235.958 92.4586 237.912 90.5031 237.912 88.0902C237.912 87.6972 237.787 87.3461 237.689 86.9837C241.204 87.6859 244.298 88.538 244.298 88.538C244.298 88.538 242.395 86.349 236.915 83.7912Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M232.975 164.093C228.389 165.978 223.693 167.536 219.093 168.497C219.055 168.504 219.011 168.504 218.973 168.512C218.934 168.508 218.878 168.497 218.878 168.497C218.878 168.497 216.16 168.834 212.119 168.922C206.504 169.043 198.318 168.674 191.139 166.21C188.825 165.417 186.1 164.324 183.192 163.027C184.648 157.499 192.503 153.063 202.65 151.892C203.883 151.747 204.813 150.7 204.819 149.455C204.822 148.956 204.801 148.443 204.755 147.923C204.571 145.915 203.458 144.081 201.73 143.041C200.129 142.079 198.469 140.689 196.77 138.764C196.77 138.764 212.172 140.763 218.973 139.14C218.973 139.14 216.949 141.775 213.638 143.487C211.916 144.375 210.737 146.055 210.415 147.968C210.355 148.344 210.302 148.725 210.259 149.118C210.114 150.47 211.121 151.668 212.471 151.8C223.679 152.876 232.293 157.918 232.975 164.093Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M252.16 161.893C252.16 162.665 252.113 163.637 252.044 164.709C250.878 165.129 249.723 165.522 248.592 165.855L244.22 171.812V166.983C230.501 170.106 219.852 168.32 218.969 168.157C219.007 168.151 219.051 168.151 219.089 168.143C227.526 166.377 236.303 162.621 244.095 158.46C242.664 153.474 237.95 137.72 232.873 128.125C231.812 126.12 229.658 124.97 227.396 125.15C225.934 125.263 224.661 125.232 223.966 124.999C221.85 124.284 219.503 122.629 216.602 121.444C216.319 121.331 216.002 121.252 215.654 121.207C212.556 120.655 207.616 122.269 207.616 122.269C207.616 122.269 201.224 120.26 198.323 121.444C195.422 122.629 193.077 124.284 190.956 124.999C190.306 125.218 189.151 125.261 187.808 125.168C186.207 125.062 184.715 125.996 184.101 127.481C180.275 136.735 174.639 152.001 172.639 157.46C170.65 156.378 168.692 155.253 166.834 154.115C171.286 141.578 177.578 127.822 179.406 123.895C179.734 123.188 180.371 122.739 181.049 122.357C183.9 120.737 186.939 119.891 189.305 119.063C189.592 118.965 190.638 118.462 192.082 117.839C196.492 115.943 204.558 112.643 205.431 113.421C206.102 114.015 206.894 115.384 207.463 116.452C208.028 115.384 208.82 114.015 209.492 113.421C209.87 113.084 211.602 113.516 213.793 114.263C218.33 115.805 224.865 118.714 225.618 119.063C226.587 119.513 233.198 120.769 234.897 121.61C234.932 121.628 234.967 121.645 234.995 121.663C235.051 121.713 235.154 121.805 235.291 121.932C237.81 124.245 244.972 141.507 249.787 155.189L249.568 155.39C249.89 155.204 250.212 155.012 250.526 154.825C250.543 154.857 250.529 154.896 250.554 154.928C250.556 154.928 252.171 157.114 252.16 161.893Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <path d=\\\"M234.999 121.663C234.97 121.645 234.934 121.627 234.9 121.61L234.939 121.606C234.939 121.606 234.96 121.624 234.999 121.663Z\\\" fill=\\\"{$secondaryColor}\\\"/>\\n        <defs>\\n        <clipPath id=\\\"clip0\\\">\\n        <rect width=\\\"91.1183\\\" height=\\\"94.9149\\\" fill=\\\"white\\\" transform=\\\"translate(166.718 303.786)\\\"/>\\n        </clipPath>\\n        </defs>\\n        </svg>\\n</div>\\n\\n<style>\\n    #me{\\n        box-sizing: border-box;\\n        margin:0;\\n        padding: 0;\\n        margin-left: 2rem;\\n    }\\n    #me.animate__animated.animate__fadeInUp{\\n        animation-duration: 1s;\\n    }\\n    #me > svg{\\n        height: 28rem;\\n        margin-bottom: -2rem;\\n\\n    }\\n    @media screen and (max-width: 1200px){\\n        #me > svg{\\n            margin: 0;\\n            margin-bottom: -1rem;\\n        }\\n    }\\n    @media screen and (max-width: 600px){\\n        #me > svg{\\n            height: 8rem;\\n        }\\n    }\\n    @media screen and (max-height: 768px){\\n        #me > svg{\\n            height: 16rem;\\n        }\\n    }\\n</style>\"],\"names\":[],\"mappings\":\"AAkGI,+BAAG,CAAC,AACA,UAAU,CAAE,UAAU,CACtB,OAAO,CAAC,CACR,OAAO,CAAE,CAAC,CACV,WAAW,CAAE,IAAI,AACrB,CAAC,AACD,GAAG,kBAAkB,8CAAkB,CAAC,AACpC,kBAAkB,CAAE,EAAE,AAC1B,CAAC,AACD,iBAAG,CAAG,iBAAG,CAAC,AACN,MAAM,CAAE,KAAK,CACb,aAAa,CAAE,KAAK,AAExB,CAAC,AACD,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,CAAC,AAClC,iBAAG,CAAG,iBAAG,CAAC,AACN,MAAM,CAAE,CAAC,CACT,aAAa,CAAE,KAAK,AACxB,CAAC,AACL,CAAC,AACD,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAC,CAAC,AACjC,iBAAG,CAAG,iBAAG,CAAC,AACN,MAAM,CAAE,IAAI,AAChB,CAAC,AACL,CAAC,AACD,OAAO,MAAM,CAAC,GAAG,CAAC,aAAa,KAAK,CAAC,CAAC,AAClC,iBAAG,CAAG,iBAAG,CAAC,AACN,MAAM,CAAE,KAAK,AACjB,CAAC,AACL,CAAC\"}"
};

const Me = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $secondaryColor, $$unsubscribe_secondaryColor;
	let $color, $$unsubscribe_color;
	$$unsubscribe_secondaryColor = subscribe(secondaryColor, value => $secondaryColor = value);
	$$unsubscribe_color = subscribe(color, value => $color = value);
	$$result.css.add(css$3);
	$$unsubscribe_secondaryColor();
	$$unsubscribe_color();

	return `


<div class="${"animate__animated animate__fadeInUp svelte-dm1b80"}" id="${"me"}"><svg viewBox="${"0 0 431 418"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-dm1b80"}"><path d="${"M264.874 199.913L264.044 196.735L264.731 199.868L264.874 199.913Z"}" fill="${"#0C8FE7"}"></path><path d="${"M267.38 142.519C267.151 142.885 266.944 143.242 266.662 143.622C267.002 143.313 267.31 142.967 267.586 142.57C267.516 142.546 267.442 142.559 267.38 142.519Z"}" fill="${"#0C8FE7"}"></path><path d="${"M269.442 136.786C269.206 138.252 268.802 139.568 268.272 140.782C268.361 140.771 268.435 140.76 268.541 140.75C268.987 139.603 269.267 138.254 269.442 136.786Z"}" fill="${"#0C8FE7"}"></path><path d="${"M128.973 109.515C128.973 109.515 128.973 109.515 128.978 109.518V109.515H128.973ZM152.999 199.868L118.725 210.89L141.301 216.705L142.535 217.235L149.889 214.298L153.004 199.866H152.999V199.868Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M96.4775 417.357L96.4727 417.546H96.7333C96.7156 417.489 96.7011 417.447 96.6722 417.357H96.4775Z"}" fill="${"#171932"}"></path><path d="${"M323.821 233.162C327.345 234.884 338.054 240.132 349.784 246.045C341.722 241.639 332.915 237.268 323.821 233.162Z"}" fill="${"#0C8FE7"}"></path><path d="${"M96.494 416.798L96.4795 417.357H96.6742C96.6275 417.217 96.5648 417.022 96.494 416.798Z"}" fill="${"#0C8FE7"}"></path><path d="${"M83.5238 361.053C79.6689 337.416 73.6484 313.794 66.2877 305.718C63.1182 302.24 51.7578 294.198 42.6354 293.555C41.1037 293.447 39.7039 293.294 38.3991 293.109C36.5521 308.479 30.8261 364.982 44.0914 382.275C56.5571 398.526 83.3324 403.788 93.1016 405.206C90.3391 395.077 86.5308 379.501 83.5238 361.053Z"}"${add_attribute("fill", $color, 0)}></path><path d="${"M193.472 239.017L209.96 264.14L210.25 264.28L210.251 264.278L226.585 239.017L277.986 216.706L266.41 212.675C265.194 218.088 260.081 222.619 253.009 223.781C238.737 226.124 217.075 228.963 196.164 229.013C188.415 223.459 177.827 215.37 176.685 211.879C174.862 206.309 173.525 189.9 173.525 189.9C177.219 193.07 210.293 198.009 223.361 192.784C226.747 191.429 231.162 188.43 235.685 184.907C203.636 193.765 176.822 184.62 158.537 177.277C158.335 177.195 158.13 177.097 157.927 177.01L153 199.868H153.002L149.89 214.3H149.889L142.536 217.235L193.472 239.017Z"}" fill="${"#BFBEC9"}"></path><path d="${"M173.525 189.901C173.525 189.901 174.862 206.311 176.685 211.879C177.828 215.37 188.417 223.459 196.164 229.013C217.075 228.961 238.737 226.125 253.01 223.781C260.081 222.62 265.194 218.087 266.41 212.675L265.81 212.467L264.729 199.868H264.73L264.043 196.735L264.037 196.714H264.039L259.286 175.04C253.859 178.118 248.078 180.853 242.016 182.945C239.884 183.681 237.775 184.329 235.687 184.907C231.164 188.432 226.749 191.429 223.363 192.784C210.293 198.009 177.218 193.069 173.525 189.901ZM228.92 197.622C228.92 197.622 227.061 208.099 204.387 211.919C181.715 215.74 190.247 198.283 190.247 198.283C190.247 198.283 197.134 203.777 211.069 203.788C223.184 203.798 228.92 197.622 228.92 197.622Z"}" fill="${"#F6F6FB"}"></path><path d="${"M190.245 198.283C190.245 198.283 181.713 215.742 204.386 211.919C227.06 208.099 228.918 197.622 228.918 197.622C228.918 197.622 223.184 203.798 211.068 203.788C197.133 203.777 190.245 198.283 190.245 198.283Z"}" fill="${"#BFBEC9"}"></path><path d="${"M207.824 128.22C207.816 128.222 207.801 128.225 207.793 128.227C207.803 128.228 207.82 128.232 207.83 128.235C207.947 128.222 208.108 128.191 207.824 128.22Z"}" fill="${"#F2E0E0"}"></path><path d="${"M215.656 121.207C215.989 121.267 216.322 121.33 216.604 121.444C216.322 121.33 216.002 121.254 215.656 121.207Z"}" fill="${"#F2E0E0"}"></path><path d="${"M207.779 128.223C207.767 128.227 207.787 128.225 207.786 128.228C207.787 128.228 207.792 128.227 207.794 128.227C207.789 128.227 207.782 128.225 207.779 128.223Z"}" fill="${"#F2E0E0"}"></path><path d="${"M155.73 144.711C154.91 143.758 154.089 142.79 153.266 141.768C153.578 142.348 153.967 142.949 154.422 143.571C154.504 143.646 154.562 143.756 154.648 143.827C154.945 144.073 155.346 144.397 155.73 144.711Z"}" fill="${"#F2E0E0"}"></path><path d="${"M281.053 85.8126C279.544 85.1264 278.064 84.83 276.655 84.7237C271.743 84.3597 267.831 86.7371 267.831 86.7371C267.831 86.7371 267.828 86.7404 267.82 86.7516C267.672 86.932 265.965 89.026 265.177 90.3951C265.177 90.3951 259.534 86.0719 259.34 83.7234C259.148 81.375 260.498 73.4871 260.498 73.4871C260.498 73.4871 254.088 71.1628 252.185 65.4898C252.164 65.4399 252.146 65.3915 252.125 65.3416C252.079 65.1934 251.998 65.0662 251.956 64.9099C251.945 64.8713 251.936 64.8213 251.924 64.7795C250.402 60.5947 249.54 53.311 247.299 47.5381C245.716 43.9477 243.539 40.8519 240.405 39.2991C232.346 35.1708 223.593 36.7267 223.593 36.7267C223.593 36.7267 226.97 24.1871 231.221 18.5656C230.586 18.353 229.939 18.1806 229.295 17.9857C228.444 20.4582 226.872 24.7283 224.903 28.7503C224.903 28.7535 224.9 28.7568 224.9 28.7616C224.871 28.818 224.84 28.8744 224.811 28.9307C224.811 28.9307 222.963 33.1122 219.709 37.9396C216.455 42.7638 211.792 48.2371 206.166 50.8111C195.005 55.93 163.488 65.1226 162.996 65.2643L189.403 50.8143C189.031 50.9093 177.114 54.0149 166.568 59.2466C163.889 60.5738 161.596 62.1298 159.667 63.7148C159.998 65.7379 160.246 67.355 160.317 68.0767C160.603 71.0404 162.013 116.029 166.63 127.967C173.788 146.478 207.125 165.763 212.111 168.568C216.152 168.479 218.87 168.143 218.87 168.143C218.87 168.143 218.926 168.154 218.964 168.157C219.003 168.151 219.047 168.151 219.085 168.143C229.944 165.871 241.365 160.297 250.525 154.825C250.303 154.435 250.356 153.937 250.719 153.657C251.115 153.353 251.673 153.424 251.981 153.813C251.984 153.82 252.019 153.867 252.04 153.899C258.471 149.959 263.653 146.166 266.48 143.825C266.548 143.769 266.593 143.683 266.657 143.624C266.94 143.245 267.144 142.884 267.375 142.52C267.188 142.4 267.035 142.216 266.979 141.986C266.858 141.501 267.153 141.013 267.635 140.889C267.674 140.882 267.918 140.832 268.264 140.782C268.794 139.57 269.197 138.254 269.434 136.785C269.448 136.686 269.466 136.586 269.476 136.483C269.296 135.85 263.544 115.344 259.932 108.822C256.26 102.197 262.189 95.854 262.189 95.854L267.86 107.591C268.137 108.115 269.479 111.249 270.398 112.275C271.136 113.482 272.338 115.458 273.768 117.868C278.202 116.365 282.534 109.495 284.125 102.4C284.125 102.406 284.122 102.435 284.122 102.435C284.122 102.435 287.819 88.8907 281.053 85.8126ZM214.862 64.6377L215.751 78.5578C215.751 78.5578 213.837 77.3594 212.957 73.3969C212.017 69.1655 214.862 64.6377 214.862 64.6377ZM237.689 86.9836C237.787 87.3444 237.911 87.6987 237.911 88.0902C237.911 90.5031 235.958 92.4585 233.547 92.4585C231.137 92.4585 229.187 90.5031 229.187 88.0902C229.187 87.3476 229.421 86.6791 229.746 86.0671C225.548 86.0316 223.595 85.3632 223.595 85.3632C223.595 85.3632 231.432 81.2316 236.915 83.7927C242.395 86.3506 244.297 88.5396 244.297 88.5396C244.297 88.5396 241.204 87.6842 237.689 86.9836ZM253.265 80.895C252.006 81.267 223 81.6343 218.508 79.049V79.0909C218.508 79.0909 218.363 78.9878 218.141 78.772C218.099 78.7253 217.996 78.6866 217.967 78.6415C217.949 78.6125 217.946 78.5739 217.928 78.5465C217.282 77.8313 216.278 76.3527 215.887 73.7078C215.248 69.4104 218.876 65.1483 218.876 65.1483L218.643 74.0203C220.395 70.3349 223.865 66.1679 223.865 66.1679C223.865 66.1679 224.882 69.9387 227.476 70.4477C232.373 71.4093 255.922 74.7484 255.922 74.7484C255.922 74.7484 254.582 80.5068 253.265 80.895Z"}" fill="${"#F6F6FB"}"></path><path d="${"M145.868 117.779C145.868 117.779 145.868 117.779 145.872 117.783V117.779H145.868Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M217.346 145.207C217.385 144.386 213.831 144.188 208.858 143.488C205.198 142.973 199.806 142.902 198.088 139.626C197.855 139.18 197.016 139.23 196.77 138.763C191.611 136.158 188.018 132.714 186.607 131.398C186.359 131.166 186.525 130.752 186.864 130.752H190.616C188.238 129.496 182.98 125.952 181.156 124.374C180.456 123.768 180.023 123.369 179.96 123.311C179.211 121.89 176.083 133.682 191.802 144.411C195.67 147.051 200.321 151.889 201.465 151.976C202.068 152.021 217.042 151.521 217.346 145.207Z"}" fill="${"#BFBEC9"}"></path><path d="${"M184.539 110.8C184.747 110.702 184.959 110.592 185.157 110.521C185.138 110.529 184.909 110.627 184.539 110.8Z"}" fill="${"#959BAB"}"></path><path d="${"M215.13 112.272C214.876 112.784 214.451 113.471 213.795 114.263C211.603 113.517 209.872 113.086 209.494 113.421C208.823 114.015 208.032 115.384 207.465 116.452C206.896 115.384 206.104 114.015 205.433 113.421C204.589 112.667 196.982 115.745 192.498 117.662L195.074 119.675C195.074 119.675 186.678 124.768 187.187 122.393C187.402 121.381 187.801 119.91 188.188 118.554C188.657 116.902 189.039 115.228 189.369 113.543C190.503 107.753 196.823 89.9715 196.823 89.4706C196.823 88.1401 196.173 86.8064 195.032 85.7417C196.177 85.5548 196.724 85.3632 196.724 85.3632C196.724 85.3632 188.887 81.2316 183.408 83.7927C183.107 83.9312 182.856 84.0649 182.577 84.2034C177.656 84.2147 172.211 83.0534 170.501 81.3057C177.073 81.507 196.116 81.2558 199.59 79.0523L199.583 79.0909C199.583 79.0909 199.717 78.975 199.912 78.7865C199.961 78.7366 200.06 78.6947 200.092 78.6415C200.103 78.6238 200.106 78.6029 200.116 78.5852C200.597 78.1003 201.335 77.2547 202.095 76.0804C204.215 77.1339 206.169 79.1328 206.169 82.9535C206.169 83.216 206.017 83.7556 205.773 84.4644C205.589 84.5497 205.412 84.6657 205.314 84.8606C201.99 91.6386 194.44 107.712 196.242 110.594C197.284 112.25 201.821 112.691 206.368 112.691C209.813 112.693 213.195 112.441 215.13 112.272Z"}" fill="${"#CCCCCC"}"></path><path d="${"M155.407 143.857C155.023 143.545 154.622 143.221 154.323 142.973C154.237 142.902 154.179 142.793 154.097 142.717C153.795 142.433 153.515 142.121 153.266 141.768C153.901 144.009 156.604 147.288 160.337 149.728C158.792 148.148 156.973 145.676 155.407 143.857Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M196.243 110.595C197.282 112.251 201.821 112.694 206.369 112.694C209.814 112.694 213.196 112.443 215.13 112.272C215.274 112.259 215.474 112.245 215.599 112.232C216.095 112.185 216.462 111.745 216.415 111.246C216.37 110.747 215.928 110.405 215.43 110.428C207.606 111.148 198.635 111.004 197.781 109.64C196.972 108.002 201.904 95.9181 206.942 85.6625C207.161 85.2131 206.977 84.6703 206.528 84.4513C206.279 84.3272 206.014 84.3578 205.774 84.4658C205.589 84.5495 205.413 84.6687 205.315 84.8636C201.991 91.64 194.441 107.712 196.243 110.595Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M212.957 73.3952C213.838 77.3593 215.751 78.556 215.751 78.556L214.863 64.636C214.865 64.6376 212.017 69.1654 212.957 73.3952Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M157.761 60.0905C156.86 60.6221 155.007 61.7415 152.983 63.0945C152.912 63.8194 152.865 64.5168 152.865 65.1483C152.865 66.2468 152.951 67.9719 153.084 70.053L158.335 59.7651C158.134 59.8714 157.959 59.9826 157.761 60.0905Z"}" fill="${"#959BAB"}"></path><path d="${"M166.634 127.967C162.017 116.028 160.609 71.0419 160.322 68.0749C160.253 67.3549 160.004 65.7377 159.671 63.713C156.614 66.2193 154.474 68.7901 153.123 70.6698C153.448 75.5536 154.017 82.264 154.469 88.3026C150.058 86.257 141.069 83.1724 136.973 89.617C132.101 97.2809 137.635 112.494 144.245 116.95C144.653 117.212 145.068 117.457 145.937 117.813C146.286 117.956 146.644 118.079 146.998 118.14C147.512 118.229 148.011 118.269 148.499 118.28L157.985 98.5131C157.985 98.5131 160.059 103.766 160.059 110.961C160.059 118.156 151.802 134.652 153.266 141.768C154.09 142.789 154.912 143.759 155.731 144.711C157.296 146.529 158.85 148.209 160.396 149.788C168.825 156.11 182.704 162.962 191.134 165.857C198.315 168.321 206.504 168.688 212.118 168.568C207.128 165.763 173.795 146.479 166.634 127.967Z"}" fill="${"#BFBEC9"}"></path><path d="${"M252.186 65.485C252.168 65.435 252.144 65.3899 252.128 65.3384C252.147 65.3867 252.167 65.4399 252.186 65.485Z"}" fill="${"#0D3285"}"></path><path d="${"M251.92 64.7778C250.911 60.9056 249.932 53.5348 247.293 47.5364C249.534 53.3093 250.397 60.5899 251.92 64.7778Z"}" fill="${"#0D3285"}"></path><path d="${"M148.01 32.7322C137.311 48.8171 138.188 63.3943 140.209 71.8426C140.341 63.7342 141.686 44.816 150.8 30.0696C152.795 26.8417 155.424 24.1211 158.404 21.7598C154.636 24.5464 151.075 28.1238 148.01 32.7322Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M158.342 59.7506C158.342 59.7506 158.12 59.8795 157.761 60.0905C157.957 59.9826 158.134 59.8714 158.334 59.7635L158.342 59.7506Z"}" fill="${"#0D3285"}"></path><path d="${"M141.851 90.6834C137.823 92.2039 139.169 98.7645 139.169 98.7645C139.169 98.7645 141.517 96.2211 144.197 98.7645C146.879 101.306 146.59 110.318 146.59 110.318C146.59 110.318 150.736 109.982 150.903 104.276C151.072 98.5712 147.447 88.5717 141.851 90.6834Z"}" fill="${"#999999"}"></path><path d="${"M271.244 108.055C271.165 107.782 271.109 107.59 271.109 107.59C271.109 107.59 271.363 107.999 271.804 108.717C272.81 109.42 273.759 109.513 273.759 109.513C273.759 109.513 273.469 100.501 276.151 97.9592C278.833 95.4158 281.181 97.9592 281.181 97.9592C281.181 97.9592 282.527 91.4002 278.499 89.8781C272.903 87.7664 269.28 97.7659 269.447 103.471C269.46 103.904 269.534 104.249 269.589 104.623L271.244 108.055Z"}" fill="${"#CCCCCC"}"></path><path d="${"M235.299 121.964C236.28 123.048 237.131 124.203 237.247 125.066C237.537 127.242 238.132 130 238.132 130C238.132 130 242 122.289 239.26 120.268C238.035 119.364 236.465 118.994 235.093 118.846C235.258 120.158 235.35 121.172 235.299 121.964Z"}" fill="${"#CCCCCC"}"></path><path d="${"M270.709 157.086C270.699 157.246 270.719 157.371 270.704 157.536C270.702 157.547 270.701 157.56 270.699 157.571C270.812 157.367 270.913 157.164 271.024 156.958L270.709 157.086Z"}" fill="${"#171932"}"></path><path d="${"M265.374 147.681C264.931 147.457 264.745 146.918 264.963 146.471C265.185 146.025 265.715 145.84 266.164 146.049C266.376 146.153 271.256 148.649 270.707 157.086L271.022 156.959C273.376 152.599 275.27 148.334 275.971 144.949C275.761 144.756 275.566 144.529 275.338 144.369C271.684 141.821 268.223 142.614 268.077 142.649C267.904 142.693 267.744 142.628 267.586 142.572C267.312 142.967 267.002 143.314 266.662 143.624C266.596 143.685 266.553 143.77 266.484 143.827C263.659 146.169 258.473 149.957 252.044 153.899C252.335 154.303 253.981 156.796 253.971 161.898C253.97 162.503 253.944 163.218 253.902 163.998C254.514 163.758 255.122 163.513 255.736 163.255L255.923 163.188L257.419 167.123L258.74 161.946L268.836 157.848C268.852 157.69 268.887 157.537 268.9 157.378C269.557 149.865 265.546 147.767 265.374 147.681Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M128.973 109.515C128.973 109.515 128.973 109.515 128.978 109.518V109.515H128.973ZM152.999 199.868L118.725 210.89L141.301 216.705L142.535 217.235L149.889 214.298L153.004 199.866H152.999V199.868Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M146.504 31.7271C133.292 51.5891 137.14 69.3138 139.743 76.6765C140.545 78.9444 141.233 80.2636 141.262 80.3152C141.425 80.6164 141.735 80.7855 142.054 80.7855C142.203 80.7855 142.351 80.7517 142.488 80.6744C142.927 80.4327 143.085 79.8835 142.849 79.4437C142.805 79.368 141.331 76.5396 140.207 71.841C138.186 63.3927 137.311 48.8154 148.008 32.7305C151.073 28.1222 154.634 24.5447 158.402 21.7582C174.283 10.0062 193.907 12.5318 196.29 13.4918C196.698 13.7173 197.215 13.5997 197.477 13.2051C197.757 12.7895 197.647 12.2274 197.234 11.9471C196.483 11.4397 190.029 10.2945 181.785 11.124C180.102 11.2931 178.352 11.538 176.552 11.8956C167.695 13.6545 155.29 18.5189 146.504 31.7271Z"}"${add_attribute("fill", $color, 0)}></path><path d="${"M234.972 123.316C234.908 123.374 234.477 123.768 233.778 124.374C234.333 124.105 234.734 123.754 234.972 123.316Z"}" fill="${"#0D3285"}"></path><path d="${"M235.296 121.932C235.158 121.805 235.056 121.713 235 121.663C235.177 121.758 235.278 121.851 235.296 121.932Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M207.784 128.228C207.78 128.235 207.788 128.238 207.831 128.233C207.821 128.232 207.803 128.228 207.793 128.225C207.791 128.227 207.786 128.228 207.784 128.228Z"}" fill="${"#171932"}"></path><path d="${"M223.971 124.999C221.852 124.282 219.506 122.629 216.607 121.445C216.325 121.329 215.992 121.268 215.659 121.209C212.56 120.655 207.621 122.269 207.621 122.269C207.621 122.269 201.229 120.262 198.33 121.447C195.429 122.631 193.083 124.284 190.964 125C188.98 125.672 182.275 124.685 179.961 123.312C180.025 123.37 180.456 123.77 181.156 124.375C182.979 125.954 186.419 128.8 188.797 130.056C189.288 130.316 189.749 130.53 190.123 130.627C193.049 131.376 206.004 128.599 207.787 128.23C207.788 128.228 207.769 128.23 207.78 128.225C207.784 128.227 207.79 128.227 207.795 128.227C207.803 128.225 207.817 128.222 207.825 128.22C208.109 128.191 207.948 128.222 207.832 128.233C210.35 128.671 222.074 131.326 224.811 130.625C227.003 130.065 231.579 126.278 233.779 124.374C234.477 123.768 234.908 123.372 234.972 123.315C232.66 124.688 225.956 125.67 223.971 124.999Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M264.729 199.868L265.811 212.467L266.411 212.675L277.985 216.706L300.228 210.888L264.874 199.913L264.731 199.868H264.729Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M311.934 215.162C315.237 217.821 320.593 222.727 322.952 226.857C323.791 228.326 324.313 229.291 324.313 229.291L321.636 209.152L317.16 208.226L266.41 197.734C266.41 197.734 269.974 198.934 275.101 200.715C287.405 204.987 308.772 212.617 311.934 215.162Z"}"${add_attribute("fill", $color, 0)}></path><path d="${"M382.643 264.386C375.448 260.103 361.266 253.499 349.049 246.621C337.609 240.18 326.646 235.307 323.087 233.739C322.26 233.375 321.803 233.165 321.803 233.165C321.803 233.165 321.849 233.194 321.933 233.265C324.525 235.443 365.735 270.056 380.912 285.186C396.584 300.808 412.247 358.497 412.247 358.497C412.247 358.497 410.863 355.282 409.772 350.089C405.227 328.434 392.9 272.005 386.881 267.158C386.051 266.487 384.571 265.533 382.643 264.386Z"}"${add_attribute("fill", $color, 0)}></path><path d="${"M148.774 117.28C150.379 117.28 151.679 115.978 151.679 114.371C151.679 112.764 150.379 111.462 148.774 111.462C147.169 111.462 145.868 112.764 145.868 114.371C145.868 115.978 147.169 117.28 148.774 117.28Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M267.822 86.75L265.179 90.3936C265.967 89.0244 267.674 86.9304 267.822 86.75Z"}" fill="${"#F2E0E0"}"></path><path d="${"M221.193 11.7651C226.033 15.837 228.19 26.9528 225.159 32.8868C227.128 28.8647 230.621 23.9069 231.474 21.4344C231.918 20.1474 232.175 19.3243 232.175 19.3243C232.682 17.5654 232.849 15.9788 232.787 14.5339C232.447 6.79432 224.816 0.770131 213.224 0.905433C206.948 0.979528 191.356 -0.241417 174.717 3.81283C178.184 3.37793 181.806 3.13954 185.556 3.10893C201.375 3.07672 216.426 6.69123 221.193 11.7651Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M185.569 4.92268C177.391 4.98711 169.906 6.10819 163.3 8.06846C161.617 8.95115 159.961 9.9482 158.349 11.087C154.465 13.8301 150.825 17.3496 147.61 21.8758C127.455 50.2507 138.787 78.5563 138.787 78.5563C138.787 78.5563 139.073 77.8524 139.744 76.6749C137.141 69.3122 133.291 51.5876 146.505 31.7255C155.291 18.5174 167.695 13.6529 176.552 11.8956C178.351 11.538 180.103 11.2932 181.786 11.124C191.906 8.55974 201.476 7.80108 206.172 7.43866C206.713 7.39678 207.261 7.42578 207.808 7.43222C201.96 5.92456 194.554 4.91785 186.352 4.91785C186.092 4.91946 185.833 4.92107 185.569 4.92268Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M272.513 116.32C274.118 116.32 275.419 115.018 275.419 113.411C275.419 111.804 274.118 110.502 272.513 110.502C270.908 110.502 269.607 111.804 269.607 113.411C269.607 115.018 270.908 116.32 272.513 116.32Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M276.246 142.807C276.255 142.564 276.305 142.287 276.294 142.058C275.859 132.914 270.685 114.703 269.763 111.517L267.868 107.591L262.2 95.8539C262.2 95.8539 256.27 102.197 259.94 108.822C263.551 115.346 269.306 135.849 269.483 136.483C269.472 136.586 269.454 136.683 269.443 136.785C269.268 138.25 268.988 139.6 268.542 140.749C270.006 140.602 273.07 140.647 276.246 142.807Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M264.064 172.841C264.094 172.783 266.686 168.048 268.099 162.08C263.064 170.465 257.578 177.838 257.578 177.838C257.765 177.739 257.984 177.59 258.18 177.477C259.863 176.506 261.855 175.032 264.022 173.194C264.033 173.075 263.999 172.954 264.064 172.841Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M280.487 154.538C280.474 154.467 279.198 147.903 275.974 144.949C275.272 148.334 273.377 152.599 271.025 156.959C270.914 157.164 270.812 157.368 270.7 157.573C270.254 162.595 268.598 167.252 267.297 170.273C272.183 165.73 277.372 160.111 281.254 155.237C280.882 155.176 280.559 154.926 280.487 154.538Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M269.607 110.987C269.607 110.987 269.672 111.206 269.762 111.518C270.684 114.704 275.858 132.915 276.292 142.06C276.304 142.288 276.254 142.564 276.244 142.809C276.288 142.838 276.329 142.854 276.371 142.884C280.453 145.731 282.006 152.902 282.223 154.002C285.148 150.205 284.477 145.223 284.327 143.624C283.988 140.019 279.103 126.833 273.776 117.87C272.344 115.46 271.142 113.483 270.402 112.277C269.899 111.456 269.607 110.987 269.607 110.987Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M264.065 172.841C264.002 172.954 264.034 173.075 264.021 173.194C263.986 173.542 264.084 173.891 264.411 174.073C264.548 174.152 264.7 174.191 264.852 174.191C265.165 174.191 265.474 174.025 265.64 173.729C265.711 173.601 266.425 172.294 267.296 170.27C268.597 167.249 270.253 162.592 270.698 157.57C270.7 157.558 270.703 157.546 270.703 157.534C270.718 157.37 270.698 157.244 270.708 157.085C271.258 148.648 266.377 146.151 266.165 146.048C265.716 145.839 265.186 146.024 264.964 146.47C264.745 146.916 264.932 147.456 265.375 147.68C265.547 147.765 269.558 149.864 268.901 157.375C268.887 157.534 268.853 157.687 268.837 157.845C268.684 159.3 268.422 160.714 268.098 162.078C266.686 168.048 264.095 172.783 264.065 172.841Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M253.973 161.896C253.973 162.502 253.944 163.215 253.902 163.997C253.583 169.939 252.238 180.035 252.174 180.516C252.11 180.969 251.725 181.302 251.276 181.302C251.238 181.302 251.194 181.299 251.156 181.291C250.662 181.227 250.311 180.771 250.378 180.276C250.393 180.164 251.658 170.694 252.047 164.708C252.118 163.637 252.163 162.664 252.163 161.893C252.174 157.114 250.559 154.928 250.559 154.928C250.535 154.896 250.547 154.857 250.53 154.825C250.308 154.435 250.361 153.937 250.724 153.657C251.12 153.353 251.678 153.424 251.986 153.813C251.989 153.82 252.024 153.867 252.045 153.899C252.336 154.301 253.982 156.795 253.973 161.896Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M276.374 142.883C276.331 142.854 276.291 142.836 276.247 142.807C273.07 140.647 270.008 140.602 268.542 140.75C268.436 140.76 268.362 140.771 268.273 140.783C267.926 140.829 267.681 140.879 267.644 140.887C267.162 141.01 266.867 141.498 266.988 141.983C267.046 142.215 267.197 142.397 267.384 142.517C267.447 142.558 267.519 142.545 267.59 142.569C267.749 142.624 267.908 142.688 268.08 142.646C268.228 142.611 271.689 141.818 275.341 144.366C275.57 144.526 275.763 144.753 275.975 144.946C279.199 147.902 280.475 154.464 280.488 154.535C280.561 154.923 280.884 155.175 281.254 155.233C281.299 155.239 281.333 155.278 281.378 155.278C281.431 155.278 281.489 155.273 281.54 155.262C282.033 155.171 282.358 154.701 282.268 154.21C282.264 154.19 282.239 154.066 282.224 153.999C282.007 152.9 280.456 145.729 276.374 142.883Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M276.246 142.807C276.255 142.564 276.305 142.287 276.294 142.058C275.859 132.914 270.685 114.703 269.763 111.517L267.868 107.591L262.2 95.8539C262.2 95.8539 256.27 102.197 259.94 108.822C263.551 115.346 269.306 135.849 269.483 136.483C269.472 136.586 269.454 136.683 269.443 136.785C269.268 138.25 268.988 139.6 268.542 140.749C270.006 140.602 273.07 140.647 276.246 142.807Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M264.065 172.841C264.001 172.954 264.033 173.075 264.023 173.195C261.855 175.035 259.864 176.507 258.183 177.478C257.985 177.591 257.766 177.741 257.578 177.839C257.578 177.839 263.064 170.464 268.1 162.081C266.686 168.047 264.097 172.785 264.065 172.841Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M280.487 154.538C280.474 154.467 279.198 147.903 275.974 144.949C275.272 148.334 273.377 152.599 271.025 156.959C270.914 157.164 270.812 157.368 270.7 157.573C270.254 162.595 268.598 167.252 267.297 170.273C272.183 165.73 277.372 160.111 281.254 155.237C280.882 155.176 280.559 154.926 280.487 154.538Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M270.709 157.086C270.698 157.246 270.716 157.373 270.703 157.536C270.703 157.547 270.7 157.56 270.7 157.571C270.254 162.594 268.597 167.249 267.297 170.274C266.425 172.293 265.71 173.601 265.64 173.73C265.474 174.027 265.167 174.194 264.851 174.194C264.7 174.194 264.547 174.155 264.409 174.078C264.084 173.895 263.984 173.543 264.019 173.197C264.031 173.076 263.999 172.957 264.061 172.843C264.093 172.786 266.682 168.049 268.096 162.083C268.418 160.717 268.684 159.303 268.835 157.848C268.849 157.689 268.885 157.537 268.899 157.378C269.556 149.869 265.546 147.767 265.373 147.683C264.93 147.461 264.743 146.919 264.962 146.473C265.184 146.027 265.715 145.843 266.164 146.053C266.376 146.153 271.256 148.649 270.709 157.086Z"}"${add_attribute("fill", $color, 0)}></path><path d="${"M253.973 161.896C253.973 162.502 253.944 163.215 253.902 163.997C253.583 169.939 252.238 180.035 252.174 180.516C252.11 180.969 251.725 181.302 251.276 181.302C251.238 181.302 251.194 181.299 251.156 181.291C250.662 181.227 250.311 180.771 250.378 180.276C250.393 180.164 251.658 170.694 252.047 164.708C252.118 163.637 252.163 162.664 252.163 161.893C252.174 157.114 250.559 154.928 250.559 154.928C250.535 154.896 250.547 154.857 250.53 154.825C250.308 154.435 250.361 153.937 250.724 153.657C251.12 153.353 251.678 153.424 251.986 153.813C251.989 153.82 252.024 153.867 252.045 153.899C252.336 154.301 253.982 156.795 253.973 161.896Z"}"${add_attribute("fill", $color, 0)}></path><path d="${"M276.374 142.883C276.331 142.854 276.291 142.836 276.247 142.807C273.07 140.647 270.008 140.602 268.542 140.75C268.436 140.76 268.362 140.771 268.273 140.783C267.926 140.829 267.681 140.879 267.644 140.887C267.162 141.01 266.867 141.498 266.988 141.983C267.046 142.215 267.197 142.397 267.384 142.517C267.447 142.558 267.519 142.545 267.59 142.569C267.749 142.624 267.908 142.688 268.08 142.646C268.228 142.611 271.689 141.818 275.341 144.366C275.57 144.526 275.763 144.753 275.975 144.946C279.199 147.902 280.475 154.464 280.488 154.535C280.561 154.923 280.884 155.175 281.254 155.233C281.299 155.239 281.333 155.278 281.378 155.278C281.431 155.278 281.489 155.273 281.54 155.262C282.033 155.171 282.358 154.701 282.268 154.21C282.264 154.19 282.239 154.066 282.224 153.999C282.007 152.9 280.456 145.729 276.374 142.883Z"}"${add_attribute("fill", $color, 0)}></path><path d="${"M140.45 20.0024C120.299 44.9915 128.763 73.4824 128.855 73.7627C128.979 74.146 129.333 74.3876 129.714 74.3876C129.806 74.3876 129.901 74.3731 129.992 74.3441C130.47 74.1895 130.728 73.6789 130.573 73.2037C130.488 72.9315 122.307 45.3862 141.858 21.1429C145.152 17.058 149.745 13.6996 155.276 11.087C157.757 9.91596 160.446 8.91569 163.3 8.06844C169.906 6.10816 177.391 4.98708 185.569 4.92265C185.832 4.92104 186.091 4.91943 186.354 4.91943C194.554 4.91943 201.96 5.92614 207.81 7.4338C213.954 9.01877 218.379 11.1546 220.149 13.2808C220.47 13.6658 221.037 13.7141 221.424 13.3968C221.807 13.0762 221.859 12.506 221.54 12.1211C221.441 12.0003 221.305 11.8859 221.194 11.7667C216.427 6.69286 201.376 3.07835 185.556 3.11378C181.805 3.14278 178.184 3.38117 174.717 3.81768C165.678 4.95325 157.707 7.44347 151.264 11.0902C146.912 13.5498 143.248 16.5329 140.45 20.0024Z"}"${add_attribute("fill", $color, 0)}></path><path d="${"M267.833 86.7357C267.833 86.7357 267.83 86.7389 267.822 86.7502L265.175 90.3937C265.175 90.3937 262.443 58.2045 260.536 44.3521C260.285 42.5336 260.049 41.0163 259.837 39.9451C257.993 30.7091 238.62 16.8567 238.62 16.8567C239.009 16.7263 239.63 16.8245 240.366 17.0516C242.076 17.5687 244.584 18.941 247.414 20.8224C254.947 25.8318 264.604 34.3236 266.6 39.3298C269.673 47.026 267.833 86.7357 267.833 86.7357Z"}"${add_attribute("fill", $color, 0)}></path><path d="${"M233.212 13.6803C233.06 15.4006 232.415 17.0339 231.352 18.3933C231.307 18.4497 231.263 18.5077 231.218 18.5657C226.966 24.184 224.816 36.5706 224.816 36.5706C224.816 36.5706 232.343 35.1676 240.4 39.296C240.386 39.2895 240.374 39.2782 240.36 39.2718C240.36 39.2718 241.272 39.7357 245.28 39.2718L249.288 38.8063L251.992 44.998V38.0331L257.21 37.0667L260.494 48.6753L260.532 44.3521C260.281 42.5336 260.045 41.0162 259.831 39.9451C257.985 30.7091 238.616 16.8567 238.616 16.8567C239.005 16.7262 239.623 16.8261 240.362 17.05C240.072 16.9356 239.784 16.8293 239.498 16.7327C238.988 16.5587 238.926 15.8612 239.399 15.6035C242.456 13.9477 245.933 12.3369 248.784 11.087C252.026 9.66632 254.446 8.71276 254.446 8.71276C254.446 8.71276 249.598 6.56242 243.563 9.19437C242.381 9.70981 241.411 10.3767 240.551 11.087C239.187 12.2129 238.141 13.1632 237.285 14.1394C236.523 15.0092 236.056 15.1155 235.06 15.5423C235.055 15.5439 235.049 15.5423 235.044 15.5423C235.041 15.5423 235.038 15.5423 235.035 15.5423C234.698 15.5439 234.489 15.5214 234.679 15.2443C235.619 13.8768 236.669 12.461 237.734 11.087C241.422 6.33047 245.278 2.08294 245.278 2.08294C245.278 2.08294 238.991 1.01018 235.348 6.92C234.486 8.31974 233.968 9.74525 233.638 11.087C233.411 12.0132 233.281 12.891 233.212 13.6803Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M181.785 11.1256C181.785 11.1256 195.733 6.05338 207.807 7.43218C207.807 7.43218 215.723 8.68534 220.146 13.2792C220.146 13.2792 220.585 13.8993 221.422 13.3919C222.257 12.8862 221.192 11.7651 221.192 11.7651C221.192 11.7651 229.45 18.0035 227.518 27.6486C225.586 37.2938 220.68 42.7252 208.198 50.0058C195.717 57.2863 170.061 62.969 163.003 65.2627C163.003 65.2627 188.023 51.1317 189.41 50.8128C189.41 50.8128 161.664 56.8837 153.123 70.6668C153.123 70.6668 153.602 67.4163 158.334 59.7621L152.984 63.0947C152.984 63.0947 153.248 75.5747 154.468 88.3012C154.468 88.3012 146.64 84.4805 141.519 86.1654L138.784 78.5562L139.741 76.6749C139.741 76.6749 140.845 79.6145 141.26 80.3152C141.26 80.3152 141.622 81.0158 142.486 80.676C142.486 80.676 143.191 80.3796 142.847 79.4454C142.502 78.5111 140.572 73.629 140.208 71.8394C139.888 70.2625 137.005 40.1899 158.405 21.7581C158.405 21.7581 174.399 8.6644 196.291 13.4918C196.291 13.4918 197.131 13.8671 197.556 13.0617C197.98 12.2564 197.058 11.8569 196.869 11.7941C196.679 11.7296 192.013 10.0448 181.785 11.1256Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M258.736 161.943L268.834 157.847C268.834 157.847 268.572 160.26 268.095 162.081C267.619 163.902 258.913 176.588 257.573 177.839C257.573 177.839 257.951 177.614 258.178 177.479C258.178 177.479 248.985 185.265 244.766 187.133C240.548 189.002 222.168 203.991 186.447 192.719C150.726 181.447 135.02 156.494 138.952 144.711C142.885 132.929 149.212 114.65 157.982 98.5118C157.982 98.5118 161.276 107.464 159.839 113.305C158.402 119.145 152.202 136.086 153.267 141.765C154.332 147.446 185.705 171.577 218.876 168.143C218.876 168.143 233.671 169.902 244.224 166.983V171.812L248.596 165.855L252.048 164.709C252.048 164.709 250.945 178.682 250.38 180.276C250.38 180.276 250.251 181.178 251.157 181.291C252.063 181.404 252.174 180.516 252.174 180.516C252.174 180.516 254.087 164.715 253.902 163.997L255.922 163.183L257.42 167.12L258.736 161.943Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M99.5698 230.939L105.914 232.912L183.186 256.948L191.822 241.607L207.604 266.97L184.999 265.57L103.183 241.602C71.6232 249.068 42.7838 271.934 45.2357 278.859C47.6909 285.795 89.2358 323.352 101.396 337.409C116.523 354.895 132.707 412.449 134.068 417.357H330.363C330.369 417.241 334.042 351.605 336.798 338.298C339.554 324.982 356.094 307.225 356.094 307.225C356.094 307.225 349.663 323.502 346.905 344.956C344.153 366.385 372.057 417.239 372.122 417.355H430.475L419.245 379.192L412.248 357.917C412.248 357.917 397.322 300.228 381.648 284.606C366.473 269.476 325.304 234.842 322.712 232.664C321.456 232.1 320.198 231.541 318.933 230.989L324.315 229.29C321.956 225.16 317.038 216.958 313.736 214.298C310.575 211.753 289.207 204.123 276.904 199.853L264.041 196.711H264.039L264.046 196.732L264.876 199.91L300.231 210.887L277.988 216.703L226.587 239.014L210.254 264.275L210.252 264.277L209.963 264.136L193.475 239.014L142.537 217.236L141.3 216.706L118.724 210.89L153.001 199.868L153.584 197.163L96.537 210.89L93.4737 229.043L99.0292 230.772C99.0549 230.762 99.0823 230.751 99.1096 230.739C99.1289 230.731 99.3027 230.809 99.5698 230.939ZM228.209 241.607L236.719 256.948L318.898 231.002L328.67 237.698L234.933 265.568H210.899L228.209 241.607Z"}"${add_attribute("fill", $color, 0)}></path><path d="${"M185 265.568L207.605 266.968L191.823 241.605L183.186 256.946L105.914 232.911L99.5703 230.937C101.633 231.939 110.052 236.53 109.077 237.121C106.841 238.479 105.753 240.993 103.346 241.559C103.292 241.572 103.239 241.589 103.184 241.602L185 265.568Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M210.896 265.569H234.93L328.668 237.698L318.897 231.002L236.718 256.948L228.208 241.607L210.896 265.569Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M346.903 344.957C349.661 323.502 356.091 307.227 356.091 307.227C356.091 307.227 339.552 324.984 336.796 338.3C334.042 351.605 330.367 417.243 330.36 417.359V417.363H372.121L372.118 417.359C372.055 417.243 344.15 366.388 346.903 344.957Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M101.396 337.411C89.2358 323.354 47.6909 285.796 45.2357 278.86C42.7838 271.936 71.6232 249.07 103.183 241.604C103.238 241.591 103.291 241.575 103.346 241.56C105.754 240.995 106.84 238.481 109.077 237.123C110.052 236.53 101.632 231.941 99.5698 230.939C99.3027 230.81 99.1289 230.731 99.1096 230.739C99.0823 230.749 99.0549 230.76 99.0292 230.772C65.2777 243.801 28.2683 261.318 23.7891 279.092C23.7216 279.079 23.6781 279.071 23.6781 279.071L23.5172 280.035C23.4223 280.413 23.3242 280.922 23.2679 281.537L6.46455 382.675L3.5074 400.468L0.669305 417.547L0.616211 417.868H96.4662L96.4742 417.547L96.4791 417.359L96.4935 416.8C96.5643 417.024 96.6271 417.219 96.6737 417.359C96.7027 417.45 96.7172 417.492 96.7349 417.547C96.7622 417.629 96.7944 417.731 96.7944 417.731H134.171C134.171 417.731 134.153 417.666 134.121 417.547C134.11 417.504 134.084 417.415 134.068 417.359C132.707 412.451 116.523 354.897 101.396 337.411ZM44.0918 382.275C30.8265 364.982 36.5525 308.479 38.3995 293.109C39.7027 293.294 41.1041 293.447 42.6358 293.555C51.7598 294.198 63.1202 302.24 66.2881 305.718C73.6488 313.794 79.6677 337.414 83.5242 361.053C86.5313 379.501 90.3395 395.077 93.1036 405.206C83.3344 403.788 56.5575 398.526 44.0918 382.275Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M247.314 47.5365C249.954 53.5349 250.934 60.9056 251.941 64.7779C251.952 64.8198 251.962 64.8697 251.973 64.9083C252.014 65.063 252.094 65.1886 252.142 65.34C252.158 65.3916 252.182 65.4351 252.2 65.4866C254.105 71.1629 260.515 73.4856 260.515 73.4856C260.515 73.4856 259.165 81.3734 259.358 83.7235C259.551 86.0735 265.194 90.3968 265.194 90.3968C265.194 90.3968 262.462 58.206 260.554 44.3536L260.515 48.6769L257.233 37.0682L252.015 38.0347V44.9995L249.311 38.8078L245.303 39.2733C241.295 39.7372 240.383 39.2733 240.383 39.2733C240.397 39.2798 240.41 39.2911 240.423 39.2975C243.556 40.8503 245.732 43.9429 247.314 47.5365Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><g clip-path="${"url(#clip0)"}"><path d="${"M166.718 381.644L212.383 303.786L257.836 381.644L247.634 398.701C247.634 398.701 220.804 376.536 186.819 398.701L201.576 372.922C202.695 370.953 204.454 369.421 206.565 368.579C210.663 366.967 218.026 365.846 227.849 371.604L212.277 344.284L180.817 398.701H176.714L166.718 381.644Z"}"${add_attribute("fill", $secondaryColor, 0)}></path></g><path d="${"M267.823 86.75L265.177 90.3936C265.97 89.0244 267.675 86.9304 267.823 86.75Z"}" fill="${"#0D3285"}"></path><path d="${"M199.592 79.0522L199.584 79.0925C199.584 79.0925 199.719 78.9765 199.914 78.7897C199.962 78.7397 200.062 78.6946 200.092 78.6431C200.102 78.627 200.107 78.6028 200.118 78.5867C200.597 78.1035 201.337 77.2579 202.097 76.0836C202.666 75.2025 203.241 74.1556 203.709 72.904C205.223 68.8691 202.711 64.2849 202.711 64.2849L200.631 74.1346C200.322 69.9837 198.852 64.9099 198.852 64.9099C198.852 64.9099 196.68 68.4326 192.334 70.3188C187.988 72.2049 164.4 74.7515 164.4 74.7515C164.4 74.7515 167.037 80.7725 168.279 81.1623C168.463 81.2203 169.296 81.2702 170.505 81.3073C177.072 81.5054 196.117 81.2557 199.592 79.0522Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M196.727 85.3646C196.727 85.3646 188.887 81.2331 183.407 83.7909C183.106 83.9311 182.858 84.0647 182.578 84.2017C177.764 86.5759 176.023 88.5378 176.023 88.5378C176.023 88.5378 179.117 87.6857 182.631 86.9834C182.535 87.3458 182.408 87.697 182.408 88.09C182.408 90.5029 184.361 92.4583 186.771 92.4583C189.181 92.4583 191.134 90.5029 191.134 88.09C191.134 87.3474 190.902 86.6806 190.576 86.0685C192.539 86.0524 194.03 85.9026 195.036 85.7415C196.178 85.5563 196.727 85.3646 196.727 85.3646Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M215.888 73.7061C216.28 76.3542 217.284 77.8329 217.93 78.5448C217.946 78.5738 217.951 78.6125 217.968 78.6398C217.999 78.6866 218.099 78.7252 218.144 78.7703C218.364 78.9845 218.51 79.0892 218.51 79.0892L218.512 79.0458C223.002 81.6326 252.009 81.2654 253.266 80.8933C254.587 80.5035 255.925 74.7467 255.925 74.7467C255.925 74.7467 232.376 71.4044 227.48 70.4428C224.885 69.9338 223.866 66.163 223.866 66.163C223.866 66.163 220.398 70.3284 218.646 74.017L218.879 65.145C218.877 65.1482 215.249 69.4087 215.888 73.7061Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M236.915 83.7912C231.435 81.2333 223.595 85.3649 223.595 85.3649C223.595 85.3649 225.551 86.0333 229.747 86.0688C229.421 86.6808 229.187 87.3477 229.187 88.0902C229.187 90.5031 231.14 92.4586 233.549 92.4586C235.958 92.4586 237.912 90.5031 237.912 88.0902C237.912 87.6972 237.787 87.3461 237.689 86.9837C241.204 87.6859 244.298 88.538 244.298 88.538C244.298 88.538 242.395 86.349 236.915 83.7912Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M232.975 164.093C228.389 165.978 223.693 167.536 219.093 168.497C219.055 168.504 219.011 168.504 218.973 168.512C218.934 168.508 218.878 168.497 218.878 168.497C218.878 168.497 216.16 168.834 212.119 168.922C206.504 169.043 198.318 168.674 191.139 166.21C188.825 165.417 186.1 164.324 183.192 163.027C184.648 157.499 192.503 153.063 202.65 151.892C203.883 151.747 204.813 150.7 204.819 149.455C204.822 148.956 204.801 148.443 204.755 147.923C204.571 145.915 203.458 144.081 201.73 143.041C200.129 142.079 198.469 140.689 196.77 138.764C196.77 138.764 212.172 140.763 218.973 139.14C218.973 139.14 216.949 141.775 213.638 143.487C211.916 144.375 210.737 146.055 210.415 147.968C210.355 148.344 210.302 148.725 210.259 149.118C210.114 150.47 211.121 151.668 212.471 151.8C223.679 152.876 232.293 157.918 232.975 164.093Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M252.16 161.893C252.16 162.665 252.113 163.637 252.044 164.709C250.878 165.129 249.723 165.522 248.592 165.855L244.22 171.812V166.983C230.501 170.106 219.852 168.32 218.969 168.157C219.007 168.151 219.051 168.151 219.089 168.143C227.526 166.377 236.303 162.621 244.095 158.46C242.664 153.474 237.95 137.72 232.873 128.125C231.812 126.12 229.658 124.97 227.396 125.15C225.934 125.263 224.661 125.232 223.966 124.999C221.85 124.284 219.503 122.629 216.602 121.444C216.319 121.331 216.002 121.252 215.654 121.207C212.556 120.655 207.616 122.269 207.616 122.269C207.616 122.269 201.224 120.26 198.323 121.444C195.422 122.629 193.077 124.284 190.956 124.999C190.306 125.218 189.151 125.261 187.808 125.168C186.207 125.062 184.715 125.996 184.101 127.481C180.275 136.735 174.639 152.001 172.639 157.46C170.65 156.378 168.692 155.253 166.834 154.115C171.286 141.578 177.578 127.822 179.406 123.895C179.734 123.188 180.371 122.739 181.049 122.357C183.9 120.737 186.939 119.891 189.305 119.063C189.592 118.965 190.638 118.462 192.082 117.839C196.492 115.943 204.558 112.643 205.431 113.421C206.102 114.015 206.894 115.384 207.463 116.452C208.028 115.384 208.82 114.015 209.492 113.421C209.87 113.084 211.602 113.516 213.793 114.263C218.33 115.805 224.865 118.714 225.618 119.063C226.587 119.513 233.198 120.769 234.897 121.61C234.932 121.628 234.967 121.645 234.995 121.663C235.051 121.713 235.154 121.805 235.291 121.932C237.81 124.245 244.972 141.507 249.787 155.189L249.568 155.39C249.89 155.204 250.212 155.012 250.526 154.825C250.543 154.857 250.529 154.896 250.554 154.928C250.556 154.928 252.171 157.114 252.16 161.893Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><path d="${"M234.999 121.663C234.97 121.645 234.934 121.627 234.9 121.61L234.939 121.606C234.939 121.606 234.96 121.624 234.999 121.663Z"}"${add_attribute("fill", $secondaryColor, 0)}></path><defs><clipPath id="${"clip0"}"><rect width="${"91.1183"}" height="${"94.9149"}" fill="${"white"}" transform="${"translate(166.718 303.786)"}"></rect></clipPath></defs></svg>
</div>`;
});

/* src/routes/about.svelte generated by Svelte v3.35.0 */

const css$2 = {
	code: ".about.svelte-13qwwxm.svelte-13qwwxm{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden}.about-card.svelte-13qwwxm.svelte-13qwwxm{background-color:var(--bg-color);padding:1rem;max-width:70vw;min-width:18rem;border-radius:.5rem}.about-card.svelte-13qwwxm>p.svelte-13qwwxm{font-size:1.5rem}.about-card.animate__animated.animate__bounceIn.svelte-13qwwxm.svelte-13qwwxm{animation-delay:.5s}@media screen and (max-width: 600px){.about-card.svelte-13qwwxm.svelte-13qwwxm{padding:2rem;max-height:15rem}.about-card.svelte-13qwwxm>p.svelte-13qwwxm{font-size:.8rem}}@media screen and (min-width: 1600px){}@media screen and (min-width: 1200px) and (max-width: 1600px){.about-card.svelte-13qwwxm.svelte-13qwwxm{max-width:60vw}}",
	map: "{\"version\":3,\"file\":\"about.svelte\",\"sources\":[\"about.svelte\"],\"sourcesContent\":[\"<svelte:head>\\n\\t<title>About | Arthur Matias</title>\\n</svelte:head>\\n\\n<script lang=\\\"ts\\\">import { goto } from '@sapper/app';\\nimport Me from '../components/Me.svelte';\\nimport Container from '../components/Container.svelte';\\nfunction handleMouseWheel(e) {\\n    if (e.deltaY > 0) {\\n        goto(\\\"/portfolio\\\", { replace: true });\\n    }\\n    else {\\n        goto(\\\"/\\\", { replace: true });\\n    }\\n}\\nlet lastTouch;\\nfunction handleTouchMove(e) {\\n    let element = e.changedTouches[0];\\n    console.log(e.changedTouches[0]);\\n    if (lastTouch === undefined) {\\n        lastTouch = e.changedTouches[0];\\n    }\\n    else if (lastTouch.screenY > element.screenY) {\\n        goto(\\\"/portfolio\\\", { replace: true });\\n    }\\n    else if (lastTouch.screenY < element.screenY) {\\n        goto(\\\"/\\\", { replace: true });\\n    }\\n}\\n</script>\\n\\t\\n\\t<Container>\\n\\t\\t<div class=\\\"about\\\" on:touchmove={e=>{handleTouchMove(e)}} on:wheel={handleMouseWheel}>\\n\\t\\t\\t<Me />\\n\\t\\t\\t<div class=\\\"about-card animate__animated animate__bounceIn\\\">\\n\\t\\t\\t\\t<p>I'm a <b>Designer</b> & <b>Front-end Developer</b> from Brazil, feel free to contact if you want to know more about me, my past projects or even to discuss a future one.</p>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</Container>\\n\\t\\n\\t<style>\\n\\t\\t.about{\\n\\t\\t\\twidth: 100%;\\n\\t\\t\\theight: 100%;\\n\\t\\t\\t/* background-color: blue; */\\n\\t\\t\\tdisplay: flex;\\n\\t\\t\\tflex-direction: column;\\n\\t\\t\\talign-items: center;\\n\\t\\t\\tjustify-content: center;\\n\\t\\t\\toverflow: hidden;\\n\\t\\t}\\n\\t\\n\\t\\t.about-card{\\n\\t\\t\\tbackground-color: var(--bg-color);\\n\\t\\t\\tpadding: 1rem;\\n\\t\\t\\tmax-width: 70vw;\\n\\t\\t\\tmin-width: 18rem;\\n\\t\\t\\tborder-radius: .5rem;\\n\\t\\t\\t\\n\\t\\t}\\n\\t\\n\\t\\t.about-card > p{\\n\\t\\t\\tfont-size: 1.5rem;\\n\\t\\t}\\n\\t\\n\\t\\t.about-card.animate__animated.animate__bounceIn{\\n\\t\\t\\tanimation-delay: .5s;\\n\\t\\t}\\n\\t\\n\\t\\t@media screen and (max-width: 600px){\\n\\t\\t\\t.about-card{\\n\\t\\t\\t\\tpadding: 2rem;\\n\\t\\t\\t\\tmax-height: 15rem;\\n\\t\\t\\t}\\n\\t\\t\\t.about-card > p{\\n\\t\\t\\t\\tfont-size: .8rem;\\n\\t\\t\\t}\\n\\t\\n\\t\\t}\\n\\t\\t@media screen and (min-width: 1600px){\\n\\t\\t\\t\\n\\t\\t}\\n\\t\\t@media screen and (min-width: 1200px) and (max-width: 1600px){\\n\\t\\t\\t.about-card{\\n\\t\\t\\t\\tmax-width: 60vw;\\n\\t\\t\\t}\\n\\t  }\\n\\t</style>\"],\"names\":[],\"mappings\":\"AAyCE,oCAAM,CAAC,AACN,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CAEZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,QAAQ,CAAE,MAAM,AACjB,CAAC,AAED,yCAAW,CAAC,AACX,gBAAgB,CAAE,IAAI,UAAU,CAAC,CACjC,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,KAAK,CAChB,aAAa,CAAE,KAAK,AAErB,CAAC,AAED,0BAAW,CAAG,gBAAC,CAAC,AACf,SAAS,CAAE,MAAM,AAClB,CAAC,AAED,WAAW,kBAAkB,gDAAkB,CAAC,AAC/C,eAAe,CAAE,GAAG,AACrB,CAAC,AAED,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAC,CAAC,AACpC,yCAAW,CAAC,AACX,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,KAAK,AAClB,CAAC,AACD,0BAAW,CAAG,gBAAC,CAAC,AACf,SAAS,CAAE,KAAK,AACjB,CAAC,AAEF,CAAC,AACD,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,CAAC,AAEtC,CAAC,AACD,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,CAAC,AAC7D,yCAAW,CAAC,AACX,SAAS,CAAE,IAAI,AAChB,CAAC,AACD,CAAC\"}"
};

const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {

	$$result.css.add(css$2);

	return `${($$result.head += `${($$result.title = `<title>About | Arthur Matias</title>`, "")}`, "")}


	
	${validate_component(Container, "Container").$$render($$result, {}, {}, {
		default: () => `<div class="${"about svelte-13qwwxm"}">${validate_component(Me, "Me").$$render($$result, {}, {}, {})}
			<div class="${"about-card animate__animated animate__bounceIn svelte-13qwwxm"}"><p class="${"svelte-13qwwxm"}">I&#39;m a <b>Designer</b> &amp; <b>Front-end Developer</b> from Brazil, feel free to contact if you want to know more about me, my past projects or even to discuss a future one.</p></div></div>`
	})}`;
});

var component_3 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': About
});

/* src/routes/blog/index.svelte generated by Svelte v3.35.0 */

const css$1 = {
	code: "ul.svelte-1frg2tf{margin:0 0 1em 0;line-height:1.5}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\" lang=\\\"ts\\\">export function preload() {\\n    return this.fetch(`blog.json`).then((r) => r.json()).then((posts) => {\\n        return { posts };\\n    });\\n}\\n</script>\\n\\n<script lang=\\\"ts\\\">export let posts;\\n</script>\\n\\n<style>\\n\\tul {\\n\\t\\tmargin: 0 0 1em 0;\\n\\t\\tline-height: 1.5;\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>Blog | Arthur Matias</title>\\n</svelte:head>\\n\\n<h1>Recent posts</h1>\\n\\n<ul>\\n\\t{#each posts as post}\\n\\t\\t<!-- we're using the non-standard `rel=prefetch` attribute to\\n\\t\\t\\t\\ttell Sapper to load the data for the page as soon as\\n\\t\\t\\t\\tthe user hovers over the link or taps it, instead of\\n\\t\\t\\t\\twaiting for the 'click' event -->\\n\\t\\t<li><a rel=\\\"prefetch\\\" href=\\\"blog/{post.slug}\\\">{post.title}</a></li>\\n\\t{/each}\\n</ul>\\n\"],\"names\":[],\"mappings\":\"AAWC,EAAE,eAAC,CAAC,AACH,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CACjB,WAAW,CAAE,GAAG,AACjB,CAAC\"}"
};

function preload$1() {
	return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
		return { posts };
	});
}

const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { posts } = $$props;
	if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0) $$bindings.posts(posts);
	$$result.css.add(css$1);

	return `${($$result.head += `${($$result.title = `<title>Blog | Arthur Matias</title>`, "")}`, "")}

<h1>Recent posts</h1>

<ul class="${"svelte-1frg2tf"}">${each(posts, post => `
		<li><a rel="${"prefetch"}" href="${"blog/" + escape(post.slug)}">${escape(post.title)}</a></li>`)}</ul>`;
});

var component_4 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': Blog,
	preload: preload$1
});

/* src/routes/blog/[slug].svelte generated by Svelte v3.35.0 */

const css = {
	code: ".content.svelte-emm3f3 h2{font-size:1.4em;font-weight:500}.content.svelte-emm3f3 pre{background-color:#f9f9f9;box-shadow:inset 1px 1px 5px rgba(0, 0, 0, 0.05);padding:0.5em;border-radius:2px;overflow-x:auto}.content.svelte-emm3f3 pre code{background-color:transparent;padding:0}.content.svelte-emm3f3 ul{line-height:1.5}.content.svelte-emm3f3 li{margin:0 0 0.5em 0}",
	map: "{\"version\":3,\"file\":\"[slug].svelte\",\"sources\":[\"[slug].svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\" lang=\\\"ts\\\">var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\\n    return new (P || (P = Promise))(function (resolve, reject) {\\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\\n        function rejected(value) { try { step(generator[\\\"throw\\\"](value)); } catch (e) { reject(e); } }\\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\\n    });\\n};\\nexport function preload({ params }) {\\n    return __awaiter(this, void 0, void 0, function* () {\\n        // the `slug` parameter is available because\\n        // this file is called [slug].svelte\\n        const res = yield this.fetch(`blog/${params.slug}.json`);\\n        const data = yield res.json();\\n        if (res.status === 200) {\\n            return { post: data };\\n        }\\n        else {\\n            this.error(res.status, data.message);\\n        }\\n    });\\n}\\n</script>\\n\\n<script lang=\\\"ts\\\">export let post;\\n</script>\\n\\n<style>\\n\\t/*\\n\\t\\tBy default, CSS is locally scoped to the component,\\n\\t\\tand any unused styles are dead-code-eliminated.\\n\\t\\tIn this page, Svelte can't know which elements are\\n\\t\\tgoing to appear inside the {{{post.html}}} block,\\n\\t\\tso we have to use the :global(...) modifier to target\\n\\t\\tall elements inside .content\\n\\t*/\\n\\t.content :global(h2) {\\n\\t\\tfont-size: 1.4em;\\n\\t\\tfont-weight: 500;\\n\\t}\\n\\n\\t.content :global(pre) {\\n\\t\\tbackground-color: #f9f9f9;\\n\\t\\tbox-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);\\n\\t\\tpadding: 0.5em;\\n\\t\\tborder-radius: 2px;\\n\\t\\toverflow-x: auto;\\n\\t}\\n\\n\\t.content :global(pre) :global(code) {\\n\\t\\tbackground-color: transparent;\\n\\t\\tpadding: 0;\\n\\t}\\n\\n\\t.content :global(ul) {\\n\\t\\tline-height: 1.5;\\n\\t}\\n\\n\\t.content :global(li) {\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>{post.title}</title>\\n</svelte:head>\\n\\n<h1>{post.title}</h1>\\n\\n<div class=\\\"content\\\">\\n\\t{@html post.html}\\n</div>\\n\"],\"names\":[],\"mappings\":\"AAqCC,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,GAAG,AAAE,CAAC,AACtB,gBAAgB,CAAE,OAAO,CACzB,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACjD,OAAO,CAAE,KAAK,CACd,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,IAAI,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,GAAG,AAAC,CAAC,AAAQ,IAAI,AAAE,CAAC,AACpC,gBAAgB,CAAE,WAAW,CAC7B,OAAO,CAAE,CAAC,AACX,CAAC,AAED,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC\"}"
};

var __awaiter$1 = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	function adopt(value) {
		return value instanceof P
		? value
		: new P(function (resolve) {
					resolve(value);
				});
	}

	return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch(e) {
					reject(e);
				}
			}

			function rejected(value) {
				try {
					step(generator["throw"](value));
				} catch(e) {
					reject(e);
				}
			}

			function step(result) {
				result.done
				? resolve(result.value)
				: adopt(result.value).then(fulfilled, rejected);
			}

			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
};

function preload({ params }) {
	return __awaiter$1(this, void 0, void 0, function* () {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = yield this.fetch(`blog/${params.slug}.json`);

		const data = yield res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	});
}

const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { post } = $$props;
	if ($$props.post === void 0 && $$bindings.post && post !== void 0) $$bindings.post(post);
	$$result.css.add(css);

	return `${($$result.head += `${($$result.title = `<title>${escape(post.title)}</title>`, "")}`, "")}

<h1>${escape(post.title)}</h1>

<div class="${"content svelte-emm3f3"}">${post.html}</div>`;
});

var component_5 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': U5Bslugu5D,
	preload: preload
});

// This file is generated by Sapper — do not edit it!

const d = decodeURIComponent;

const manifest = {
	server_routes: [
		{
			// blog/index.json.js
			pattern: /^\/blog\.json$/,
			handlers: route_0,
			params: () => ({})
		},

		{
			// blog/[slug].json.js
			pattern: /^\/blog\/([^/]+?)\.json$/,
			handlers: route_1,
			params: match => ({ slug: d(match[1]) })
		}
	],

	pages: [
		{
			// index.svelte
			pattern: /^\/$/,
			parts: [
				{ name: "index", file: "index.svelte", component: component_0 }
			]
		},

		{
			// portfolio.svelte
			pattern: /^\/portfolio\/?$/,
			parts: [
				{ name: "portfolio", file: "portfolio.svelte", component: component_1 }
			]
		},

		{
			// contact.svelte
			pattern: /^\/contact\/?$/,
			parts: [
				{ name: "contact", file: "contact.svelte", component: component_2 }
			]
		},

		{
			// about.svelte
			pattern: /^\/about\/?$/,
			parts: [
				{ name: "about", file: "about.svelte", component: component_3 }
			]
		},

		{
			// blog/index.svelte
			pattern: /^\/blog\/?$/,
			parts: [
				{ name: "blog", file: "blog/index.svelte", component: component_4 }
			]
		},

		{
			// blog/[slug].svelte
			pattern: /^\/blog\/([^/]+?)\/?$/,
			parts: [
				null,
				{ name: "blog_$slug", file: "blog/[slug].svelte", component: component_5, params: match => ({ slug: d(match[1]) }) }
			]
		}
	],

	root_comp,
	error: Error$1
};

const build_dir = "__sapper__/build";

/**
 * @param typeMap [Object] Map of MIME type -> Array[extensions]
 * @param ...
 */
function Mime() {
  this._types = Object.create(null);
  this._extensions = Object.create(null);

  for (var i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }

  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}

/**
 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
 * to an array of extensions associated with the type.  The first extension is
 * used as the default extension for the type.
 *
 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
 *
 * If a type declares an extension that has already been defined, an error will
 * be thrown.  To suppress this error and force the extension to be associated
 * with the new type, pass `force`=true.  Alternatively, you may prefix the
 * extension with "*" to map the type to extension, without mapping the
 * extension to the type.
 *
 * e.g. mime.define({'audio/wav', ['wav']}, {'audio/x-wav', ['*wav']});
 *
 *
 * @param map (Object) type definitions
 * @param force (Boolean) if true, force overriding of existing definitions
 */
Mime.prototype.define = function(typeMap, force) {
  for (var type in typeMap) {
    var extensions = typeMap[type].map(function(t) {return t.toLowerCase()});
    type = type.toLowerCase();

    for (var i = 0; i < extensions.length; i++) {
      var ext = extensions[i];

      // '*' prefix = not the preferred type for this extension.  So fixup the
      // extension, and skip it.
      if (ext[0] == '*') {
        continue;
      }

      if (!force && (ext in this._types)) {
        throw new Error(
          'Attempt to change mapping for "' + ext +
          '" extension from "' + this._types[ext] + '" to "' + type +
          '". Pass `force=true` to allow this, otherwise remove "' + ext +
          '" from the list of extensions for "' + type + '".'
        );
      }

      this._types[ext] = type;
    }

    // Use first extension as default
    if (force || !this._extensions[type]) {
      var ext = extensions[0];
      this._extensions[type] = (ext[0] != '*') ? ext : ext.substr(1);
    }
  }
};

/**
 * Lookup a mime type based on extension
 */
Mime.prototype.getType = function(path) {
  path = String(path);
  var last = path.replace(/^.*[/\\]/, '').toLowerCase();
  var ext = last.replace(/^.*\./, '').toLowerCase();

  var hasPath = last.length < path.length;
  var hasDot = ext.length < last.length - 1;

  return (hasDot || !hasPath) && this._types[ext] || null;
};

/**
 * Return file extension associated with a mime type
 */
Mime.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};

var Mime_1 = Mime;

var standard = {"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomdeleted+xml":["atomdeleted"],"application/atomsvc+xml":["atomsvc"],"application/atsc-dwd+xml":["dwd"],"application/atsc-held+xml":["held"],"application/atsc-rsat+xml":["rsat"],"application/bdoc":["bdoc"],"application/calendar+xml":["xcs"],"application/ccxml+xml":["ccxml"],"application/cdfx+xml":["cdfx"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["ecma","es"],"application/emma+xml":["emma"],"application/emotionml+xml":["emotionml"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/fdt+xml":["fdt"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/its+xml":["its"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lgr+xml":["lgr"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mmt-aei+xml":["maei"],"application/mmt-usd+xml":["musd"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/mrb-consumer+xml":["*xdf"],"application/mrb-publish+xml":["*xdf"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/node":["cjs"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/p2p-overlay+xml":["relo"],"application/patch-ops-error+xml":["*xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/provenance+xml":["provx"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/route-apd+xml":["rapd"],"application/route-s-tsid+xml":["sls"],"application/route-usd+xml":["rusd"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/senml+xml":["senmlx"],"application/sensml+xml":["sensmlx"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/swid+xml":["swidtag"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/toml":["toml"],"application/ttml+xml":["ttml"],"application/urc-ressheet+xml":["rsheet"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-att+xml":["xav"],"application/xcap-caps+xml":["xca"],"application/xcap-diff+xml":["xdf"],"application/xcap-el+xml":["xel"],"application/xcap-error+xml":["xer"],"application/xcap-ns+xml":["xns"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xliff+xml":["xlf"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mobile-xmf":["mxmf"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/hej2k":["hej2"],"image/hsj2":["hsj2"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jph":["jph"],"image/jphc":["jhc"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/jxra":["jxra"],"image/jxrs":["jxrs"],"image/jxs":["jxs"],"image/jxsc":["jxsc"],"image/jxsi":["jxsi"],"image/jxss":["jxss"],"image/ktx":["ktx"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/mtl":["mtl"],"model/obj":["obj"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]};

var lite = new Mime_1(standard);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function get_server_route_handler(routes) {
    function handle_route(route, req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.params = route.params(route.pattern.exec(req.path));
            const method = req.method.toLowerCase();
            // 'delete' cannot be exported from a module because it is a keyword,
            // so check for 'del' instead
            const method_export = method === 'delete' ? 'del' : method;
            const handle_method = route.handlers[method_export];
            if (handle_method) {
                if (process.env.SAPPER_EXPORT) {
                    const { write, end, setHeader } = res;
                    const chunks = [];
                    const headers = {};
                    // intercept data so that it can be exported
                    res.write = function (chunk) {
                        chunks.push(Buffer.from(chunk));
                        return write.apply(res, [chunk]);
                    };
                    res.setHeader = function (name, value) {
                        headers[name.toLowerCase()] = value;
                        setHeader.apply(res, [name, value]);
                    };
                    res.end = function (chunk) {
                        if (chunk)
                            chunks.push(Buffer.from(chunk));
                        end.apply(res, [chunk]);
                        process.send({
                            __sapper__: true,
                            event: 'file',
                            url: req.url,
                            method: req.method,
                            status: res.statusCode,
                            type: headers['content-type'],
                            body: Buffer.concat(chunks)
                        });
                    };
                }
                const handle_next = (err) => {
                    if (err) {
                        res.statusCode = 500;
                        res.end(err.message);
                    }
                    else {
                        process.nextTick(next);
                    }
                };
                try {
                    yield handle_method(req, res, handle_next);
                }
                catch (err) {
                    console.error(err);
                    handle_next(err);
                }
            }
            else {
                // no matching handler for method
                process.nextTick(next);
            }
        });
    }
    return function find_route(req, res, next) {
        for (const route of routes) {
            if (route.pattern.test(req.path)) {
                handle_route(route, req, res, next);
                return;
            }
        }
        next();
    };
}

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var parse_1 = parse;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped = {
    '<': '\\u003C',
    '>': '\\u003E',
    '/': '\\u002F',
    '\\': '\\\\',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\0': '\\0',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function devalue(value) {
    var counts = new Map();
    function walk(thing) {
        if (typeof thing === 'function') {
            throw new Error("Cannot stringify a function");
        }
        if (counts.has(thing)) {
            counts.set(thing, counts.get(thing) + 1);
            return;
        }
        counts.set(thing, 1);
        if (!isPrimitive(thing)) {
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                case 'Date':
                case 'RegExp':
                    return;
                case 'Array':
                    thing.forEach(walk);
                    break;
                case 'Set':
                case 'Map':
                    Array.from(thing).forEach(walk);
                    break;
                default:
                    var proto = Object.getPrototypeOf(thing);
                    if (proto !== Object.prototype &&
                        proto !== null &&
                        Object.getOwnPropertyNames(proto).sort().join('\0') !== objectProtoOwnPropertyNames) {
                        throw new Error("Cannot stringify arbitrary non-POJOs");
                    }
                    if (Object.getOwnPropertySymbols(thing).length > 0) {
                        throw new Error("Cannot stringify POJOs with symbolic keys");
                    }
                    Object.keys(thing).forEach(function (key) { return walk(thing[key]); });
            }
        }
    }
    walk(value);
    var names = new Map();
    Array.from(counts)
        .filter(function (entry) { return entry[1] > 1; })
        .sort(function (a, b) { return b[1] - a[1]; })
        .forEach(function (entry, i) {
        names.set(entry[0], getName(i));
    });
    function stringify(thing) {
        if (names.has(thing)) {
            return names.get(thing);
        }
        if (isPrimitive(thing)) {
            return stringifyPrimitive(thing);
        }
        var type = getType(thing);
        switch (type) {
            case 'Number':
            case 'String':
            case 'Boolean':
                return "Object(" + stringify(thing.valueOf()) + ")";
            case 'RegExp':
                return "new RegExp(" + stringifyString(thing.source) + ", \"" + thing.flags + "\")";
            case 'Date':
                return "new Date(" + thing.getTime() + ")";
            case 'Array':
                var members = thing.map(function (v, i) { return i in thing ? stringify(v) : ''; });
                var tail = thing.length === 0 || (thing.length - 1 in thing) ? '' : ',';
                return "[" + members.join(',') + tail + "]";
            case 'Set':
            case 'Map':
                return "new " + type + "([" + Array.from(thing).map(stringify).join(',') + "])";
            default:
                var obj = "{" + Object.keys(thing).map(function (key) { return safeKey(key) + ":" + stringify(thing[key]); }).join(',') + "}";
                var proto = Object.getPrototypeOf(thing);
                if (proto === null) {
                    return Object.keys(thing).length > 0
                        ? "Object.assign(Object.create(null)," + obj + ")"
                        : "Object.create(null)";
                }
                return obj;
        }
    }
    var str = stringify(value);
    if (names.size) {
        var params_1 = [];
        var statements_1 = [];
        var values_1 = [];
        names.forEach(function (name, thing) {
            params_1.push(name);
            if (isPrimitive(thing)) {
                values_1.push(stringifyPrimitive(thing));
                return;
            }
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                    values_1.push("Object(" + stringify(thing.valueOf()) + ")");
                    break;
                case 'RegExp':
                    values_1.push(thing.toString());
                    break;
                case 'Date':
                    values_1.push("new Date(" + thing.getTime() + ")");
                    break;
                case 'Array':
                    values_1.push("Array(" + thing.length + ")");
                    thing.forEach(function (v, i) {
                        statements_1.push(name + "[" + i + "]=" + stringify(v));
                    });
                    break;
                case 'Set':
                    values_1.push("new Set");
                    statements_1.push(name + "." + Array.from(thing).map(function (v) { return "add(" + stringify(v) + ")"; }).join('.'));
                    break;
                case 'Map':
                    values_1.push("new Map");
                    statements_1.push(name + "." + Array.from(thing).map(function (_a) {
                        var k = _a[0], v = _a[1];
                        return "set(" + stringify(k) + ", " + stringify(v) + ")";
                    }).join('.'));
                    break;
                default:
                    values_1.push(Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}');
                    Object.keys(thing).forEach(function (key) {
                        statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
                    });
            }
        });
        statements_1.push("return " + str);
        return "(function(" + params_1.join(',') + "){" + statements_1.join(';') + "}(" + values_1.join(',') + "))";
    }
    else {
        return str;
    }
}
function getName(num) {
    var name = '';
    do {
        name = chars[num % chars.length] + name;
        num = ~~(num / chars.length) - 1;
    } while (num >= 0);
    return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
    return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
    if (typeof thing === 'string')
        return stringifyString(thing);
    if (thing === void 0)
        return 'void 0';
    if (thing === 0 && 1 / thing < 0)
        return '-0';
    var str = String(thing);
    if (typeof thing === 'number')
        return str.replace(/^(-)?0\./, '$1.');
    return str;
}
function getType(thing) {
    return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
    return escaped[c] || c;
}
function escapeUnsafeChars(str) {
    return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
    var result = '"';
    for (var i = 0; i < str.length; i += 1) {
        var char = str.charAt(i);
        var code = char.charCodeAt(0);
        if (char === '"') {
            result += '\\"';
        }
        else if (char in escaped) {
            result += escaped[char];
        }
        else if (code >= 0xd800 && code <= 0xdfff) {
            var next = str.charCodeAt(i + 1);
            // If this is the beginning of a [high, low] surrogate pair,
            // add the next two characters, otherwise escape
            if (code <= 0xdbff && (next >= 0xdc00 && next <= 0xdfff)) {
                result += char + str[++i];
            }
            else {
                result += "\\u" + code.toString(16).toUpperCase();
            }
        }
        else {
            result += char;
        }
    }
    result += '"';
    return result;
}

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream__default['default'].Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream__default['default'].PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream__default['default']) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream__default['default']) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream__default['default'])) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
		if (!res) {
			res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
			if (res) {
				res.pop(); // drop last quote
			}
		}

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream__default['default'] && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream__default['default']) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http__default['default'].STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url__default['default'].parse;
const format_url = Url__default['default'].format;

const streamDestructionSupported = 'destroy' in Stream__default['default'].Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream__default['default'].Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream__default['default'].PassThrough;
const resolve_url = Url__default['default'].resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https__default['default'] : http__default['default']).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream__default['default'].Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout,
							size: request.size
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib__default['default'].Z_SYNC_FLUSH,
				finishFlush: zlib__default['default'].Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib__default['default'].createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib__default['default'].createInflate());
					} else {
						body = body.pipe(zlib__default['default'].createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib__default['default'].createBrotliDecompress === 'function') {
				body = body.pipe(zlib__default['default'].createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
var encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
var decode$1 = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};

var base64 = {
	encode: encode,
	decode: decode$1
};

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
var encode$1 = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
var decode$2 = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};

var base64Vlq = {
	encode: encode$1,
	decode: decode$2
};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var util = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port;
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */
function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;

/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */
function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    }
    // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.
    sourceURL = sourceRoot + sourceURL;
  }

  // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).
  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);
    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }
    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');
      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }
    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;
});

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */


var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

var ArraySet_1 = ArraySet;

var arraySet = {
	ArraySet: ArraySet_1
};

var binarySearch = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};
});

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
var quickSort_1 = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};

var quickSort = {
	quickSort: quickSort_1
};

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */



var ArraySet$1 = arraySet.ArraySet;

var quickSort$1 = quickSort.quickSort;

function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL)
    : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
};

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

var SourceMapConsumer_1 = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  if (sourceRoot) {
    sourceRoot = util.normalize(sourceRoot);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet$1.fromArray(names.map(String), true);
  this._sources = ArraySet$1.fromArray(sources, true);

  this._absoluteSources = this._sources.toArray().map(function (s) {
    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  }

  // Maybe aSource is an absolute URL as returned by |sources|.  In
  // this case we can't simply undo the transform.
  var i;
  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }

  return -1;
};

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet$1.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet$1.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function (s) {
      return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort$1(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._absoluteSources.slice();
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64Vlq.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort$1(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort$1(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }

    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util.relative(this.sourceRoot, relativeSource);
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

var BasicSourceMapConsumer_1 = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet$1();
  this._names = new ArraySet$1();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = null;
        if (mapping.name) {
          name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);
        }

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort$1(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort$1(this.__originalMappings, util.compareByOriginalPositions);
  };

var IndexedSourceMapConsumer_1 = IndexedSourceMapConsumer;

var sourceMapConsumer = {
	SourceMapConsumer: SourceMapConsumer_1,
	BasicSourceMapConsumer: BasicSourceMapConsumer_1,
	IndexedSourceMapConsumer: IndexedSourceMapConsumer_1
};

var SourceMapConsumer$1 = sourceMapConsumer.SourceMapConsumer;

function get_sourcemap_url(contents) {
    const reversed = contents
        .split('\n')
        .reverse()
        .join('\n');
    const match = /\/[/*]#[ \t]+sourceMappingURL=([^\s'"]+?)(?:[ \t]+|$)/gm.exec(reversed);
    if (match)
        return match[1];
    return undefined;
}
const file_cache = new Map();
function get_file_contents(file_path) {
    if (file_cache.has(file_path)) {
        return file_cache.get(file_path);
    }
    try {
        const data = fs__default['default'].readFileSync(file_path, 'utf8');
        file_cache.set(file_path, data);
        return data;
    }
    catch (_a) {
        return undefined;
    }
}
function sourcemap_stacktrace(stack) {
    const replace = (line) => line.replace(/^ {4}at (?:(.+?)\s+\()?(?:(.+?):(\d+)(?::(\d+))?)\)?/, (input, var_name, file_path, line_num, column) => {
        if (!file_path)
            return input;
        const contents = get_file_contents(file_path);
        if (!contents)
            return input;
        const sourcemap_url = get_sourcemap_url(contents);
        if (!sourcemap_url)
            return input;
        let dir = path__default['default'].dirname(file_path);
        let sourcemap_data;
        if (/^data:application\/json[^,]+base64,/.test(sourcemap_url)) {
            const raw_data = sourcemap_url.slice(sourcemap_url.indexOf(',') + 1);
            try {
                sourcemap_data = Buffer.from(raw_data, 'base64').toString();
            }
            catch (_a) {
                return input;
            }
        }
        else {
            const sourcemap_path = path__default['default'].resolve(dir, sourcemap_url);
            const data = get_file_contents(sourcemap_path);
            if (!data)
                return input;
            sourcemap_data = data;
            dir = path__default['default'].dirname(sourcemap_path);
        }
        let raw_sourcemap;
        try {
            raw_sourcemap = JSON.parse(sourcemap_data);
        }
        catch (_b) {
            return input;
        }
        const consumer = new SourceMapConsumer$1(raw_sourcemap);
        const pos = consumer.originalPositionFor({
            line: Number(line_num),
            column: Number(column),
            bias: SourceMapConsumer$1.LEAST_UPPER_BOUND
        });
        if (!pos.source)
            return input;
        const source_path = path__default['default'].resolve(dir, pos.source);
        const source = `${source_path}:${pos.line || 0}:${pos.column || 0}`;
        if (!var_name)
            return `    at ${source}`;
        return `    at ${var_name} (${source})`;
    });
    file_cache.clear();
    return stack
        .split('\n')
        .map(replace)
        .join('\n');
}

function get_page_handler(manifest, session_getter) {
    const get_build_info = (assets => () => assets)(JSON.parse(fs__default['default'].readFileSync(path__default['default'].join(build_dir, 'build.json'), 'utf-8')));
    const template = (str => () => str)(read_template(build_dir));
    const has_service_worker = fs__default['default'].existsSync(path__default['default'].join(build_dir, 'service-worker.js'));
    const { pages, error: error_route } = manifest;
    function bail(res, err) {
        console.error(err);
        const message = 'Internal server error';
        res.statusCode = 500;
        res.end(`<pre>${message}</pre>`);
    }
    function handle_error(req, res, statusCode, error) {
        handle_page({
            pattern: null,
            parts: [
                { name: null, component: { default: error_route } }
            ]
        }, req, res, statusCode, error || 'Unknown error');
    }
    function handle_page(page, req, res, status = 200, error = null) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const is_service_worker_index = req.path === '/service-worker-index.html';
            const build_info = get_build_info();
            res.setHeader('Content-Type', 'text/html');
            // preload main js and css
            // TODO detect other stuff we can preload like fonts?
            let preload_files = Array.isArray(build_info.assets.main) ? build_info.assets.main : [build_info.assets.main];
            if ((_a = build_info === null || build_info === void 0 ? void 0 : build_info.css) === null || _a === void 0 ? void 0 : _a.main) {
                preload_files = preload_files.concat((_b = build_info === null || build_info === void 0 ? void 0 : build_info.css) === null || _b === void 0 ? void 0 : _b.main);
            }
            let es6_preload = false;
            if (build_info.bundler === 'rollup') {
                es6_preload = true;
                const route = page.parts[page.parts.length - 1].file;
                const deps = build_info.dependencies[route];
                if (deps) {
                    preload_files = preload_files.concat(deps);
                }
            }
            else if (!error && !is_service_worker_index) {
                page.parts.forEach(part => {
                    if (!part)
                        return;
                    // using concat because it could be a string or an array. thanks webpack!
                    preload_files = preload_files.concat(build_info.assets[part.name]);
                });
            }
            const link = preload_files
                .filter((v, i, a) => a.indexOf(v) === i) // remove any duplicates
                .filter(file => file && !file.match(/\.map$/)) // exclude source maps
                .map((file) => {
                const as = /\.css$/.test(file) ? 'style' : 'script';
                const rel = es6_preload && as === 'script' ? 'modulepreload' : 'preload';
                return `<${req.baseUrl}/client/${file}>;rel="${rel}";as="${as}"`;
            })
                .join(', ');
            res.setHeader('Link', link);
            let session;
            try {
                session = yield session_getter(req, res);
            }
            catch (err) {
                return bail(res, err);
            }
            let redirect;
            let preload_error;
            const preload_context = {
                redirect: (statusCode, location) => {
                    if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
                        throw new Error('Conflicting redirects');
                    }
                    location = location.replace(/^\//g, ''); // leading slash (only)
                    redirect = { statusCode, location };
                },
                error: (statusCode, message) => {
                    preload_error = { statusCode, message };
                },
                fetch: (url, opts) => {
                    const protocol = req.socket.encrypted ? 'https' : 'http';
                    const parsed = new Url__default['default'].URL(url, `${protocol}://127.0.0.1:${process.env.PORT}${req.baseUrl ? req.baseUrl + '/' : ''}`);
                    opts = Object.assign({}, opts);
                    const include_credentials = (opts.credentials === 'include' ||
                        opts.credentials !== 'omit' && parsed.origin === `${protocol}://127.0.0.1:${process.env.PORT}`);
                    if (include_credentials) {
                        opts.headers = Object.assign({}, opts.headers);
                        const cookies = Object.assign({}, parse_1(req.headers.cookie || ''), parse_1(opts.headers.cookie || ''));
                        const set_cookie = res.getHeader('Set-Cookie');
                        (Array.isArray(set_cookie) ? set_cookie : [set_cookie]).forEach((s) => {
                            const m = /([^=]+)=([^;]+)/.exec(s);
                            if (m)
                                cookies[m[1]] = m[2];
                        });
                        const str = Object.keys(cookies)
                            .map(key => `${key}=${cookies[key]}`)
                            .join('; ');
                        opts.headers.cookie = str;
                        if (!opts.headers.authorization && req.headers.authorization) {
                            opts.headers.authorization = req.headers.authorization;
                        }
                    }
                    return fetch(parsed.href, opts);
                }
            };
            let preloaded;
            let match;
            let params;
            try {
                const root_preload = manifest.root_comp.preload || (() => { });
                const root_preloaded = root_preload.call(preload_context, {
                    host: req.headers.host,
                    path: req.path,
                    query: req.query,
                    params: {}
                }, session);
                match = error ? null : page.pattern.exec(req.path);
                let toPreload = [root_preloaded];
                if (!is_service_worker_index) {
                    toPreload = toPreload.concat(page.parts.map(part => {
                        if (!part)
                            return null;
                        // the deepest level is used below, to initialise the store
                        params = part.params ? part.params(match) : {};
                        return part.component.preload
                            ? part.component.preload.call(preload_context, {
                                host: req.headers.host,
                                path: req.path,
                                query: req.query,
                                params
                            }, session)
                            : {};
                    }));
                }
                preloaded = yield Promise.all(toPreload);
            }
            catch (err) {
                if (error) {
                    return bail(res, err);
                }
                preload_error = { statusCode: 500, message: err };
                preloaded = []; // appease TypeScript
            }
            try {
                if (redirect) {
                    const location = Url__default['default'].resolve((req.baseUrl || '') + '/', redirect.location);
                    res.statusCode = redirect.statusCode;
                    res.setHeader('Location', location);
                    res.end();
                    return;
                }
                if (preload_error) {
                    if (!error) {
                        handle_error(req, res, preload_error.statusCode, preload_error.message);
                    }
                    else {
                        bail(res, preload_error.message);
                    }
                    return;
                }
                const segments = req.path.split('/').filter(Boolean);
                // TODO make this less confusing
                const layout_segments = [segments[0]];
                let l = 1;
                page.parts.forEach((part, i) => {
                    layout_segments[l] = segments[i + 1];
                    if (!part)
                        return null;
                    l++;
                });
                if (error instanceof Error && error.stack) {
                    error.stack = sourcemap_stacktrace(error.stack);
                }
                const pageContext = {
                    host: req.headers.host,
                    path: req.path,
                    query: req.query,
                    params,
                    error: error
                        ? error instanceof Error
                            ? error
                            : { message: error, name: 'PreloadError' }
                        : null
                };
                const props = {
                    stores: {
                        page: {
                            subscribe: writable(pageContext).subscribe
                        },
                        preloading: {
                            subscribe: writable(null).subscribe
                        },
                        session: writable(session)
                    },
                    segments: layout_segments,
                    status: error ? status : 200,
                    error: pageContext.error,
                    level0: {
                        props: preloaded[0]
                    },
                    level1: {
                        segment: segments[0],
                        props: {}
                    }
                };
                if (!is_service_worker_index) {
                    let level_index = 1;
                    for (let i = 0; i < page.parts.length; i += 1) {
                        const part = page.parts[i];
                        if (!part)
                            continue;
                        props[`level${level_index++}`] = {
                            component: part.component.default,
                            props: preloaded[i + 1] || {},
                            segment: segments[i]
                        };
                    }
                }
                const { html, head, css } = App.render(props);
                const serialized = {
                    preloaded: `[${preloaded.map(data => try_serialize(data, err => {
                        console.error(`Failed to serialize preloaded data to transmit to the client at the /${segments.join('/')} route: ${err.message}`);
                        console.warn('The client will re-render over the server-rendered page fresh instead of continuing where it left off. See https://sapper.svelte.dev/docs#Return_value for more information');
                    })).join(',')}]`,
                    session: session && try_serialize(session, err => {
                        throw new Error(`Failed to serialize session data: ${err.message}`);
                    }),
                    error: error && serialize_error(props.error)
                };
                let script = `__SAPPER__={${[
                    error && `error:${serialized.error},status:${status}`,
                    `baseUrl:"${req.baseUrl}"`,
                    serialized.preloaded && `preloaded:${serialized.preloaded}`,
                    serialized.session && `session:${serialized.session}`
                ].filter(Boolean).join(',')}};`;
                if (has_service_worker) {
                    script += `if('serviceWorker' in navigator)navigator.serviceWorker.register('${req.baseUrl}/service-worker.js');`;
                }
                const file = [].concat(build_info.assets.main).filter(f => f && /\.js$/.test(f))[0];
                const main = `${req.baseUrl}/client/${file}`;
                // users can set a CSP nonce using res.locals.nonce
                const nonce_value = (res.locals && res.locals.nonce) ? res.locals.nonce : '';
                const nonce_attr = nonce_value ? ` nonce="${nonce_value}"` : '';
                if (build_info.bundler === 'rollup') {
                    if (build_info.legacy_assets) {
                        const legacy_main = `${req.baseUrl}/client/legacy/${build_info.legacy_assets.main}`;
                        script += `(function(){try{eval("async function x(){}");var main="${main}"}catch(e){main="${legacy_main}"};var s=document.createElement("script");try{new Function("if(0)import('')")();s.src=main;s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main",main);}document.head.appendChild(s);}());`;
                    }
                    else {
                        script += `var s=document.createElement("script");try{new Function("if(0)import('')")();s.src="${main}";s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main","${main}")}document.head.appendChild(s)`;
                    }
                }
                else {
                    script += `</script><script${nonce_attr} src="${main}" defer>`;
                }
                let styles;
                // TODO make this consistent across apps
                // TODO embed build_info in placeholder.ts
                if (build_info.css && build_info.css.main) {
                    const css_chunks = new Set(build_info.css.main);
                    page.parts.forEach(part => {
                        if (!part || !build_info.dependencies)
                            return;
                        const deps_for_part = build_info.dependencies[part.file];
                        if (deps_for_part) {
                            deps_for_part.filter(d => d.endsWith('.css')).forEach(chunk => {
                                css_chunks.add(chunk);
                            });
                        }
                    });
                    styles = Array.from(css_chunks)
                        .map(href => `<link rel="stylesheet" href="client/${href}">`)
                        .join('');
                }
                else {
                    styles = (css && css.code ? `<style${nonce_attr}>${css.code}</style>` : '');
                }
                const body = template()
                    .replace('%sapper.base%', () => `<base href="${req.baseUrl}/">`)
                    .replace('%sapper.scripts%', () => `<script${nonce_attr}>${script}</script>`)
                    .replace('%sapper.html%', () => html)
                    .replace('%sapper.head%', () => head)
                    .replace('%sapper.styles%', () => styles)
                    .replace(/%sapper\.cspnonce%/g, () => nonce_value);
                res.statusCode = status;
                res.end(body);
            }
            catch (err) {
                if (error) {
                    bail(res, err);
                }
                else {
                    handle_error(req, res, 500, err);
                }
            }
        });
    }
    return function find_route(req, res, next) {
        const path = req.path === '/service-worker-index.html' ? '/' : req.path;
        const page = pages.find(page => page.pattern.test(path));
        if (page) {
            handle_page(page, req, res);
        }
        else {
            handle_error(req, res, 404, 'Not found');
        }
    };
}
function read_template(dir = build_dir) {
    return fs__default['default'].readFileSync(`${dir}/template.html`, 'utf-8');
}
function try_serialize(data, fail) {
    try {
        return devalue(data);
    }
    catch (err) {
        if (fail)
            fail(err);
        return null;
    }
}
// Ensure we return something truthy so the client will not re-render the page over the error
function serialize_error(error) {
    if (!error)
        return null;
    let serialized = try_serialize(error);
    if (!serialized) {
        const { name, message, stack } = error;
        serialized = try_serialize({ name, message, stack });
    }
    if (!serialized) {
        serialized = '{}';
    }
    return serialized;
}

function middleware(opts = {}) {
    const { session, ignore } = opts;
    let emitted_basepath = false;
    return compose_handlers(ignore, [
        (req, res, next) => {
            if (req.baseUrl === undefined) {
                let originalUrl = req.originalUrl || req.url;
                if (req.url === '/' && originalUrl[originalUrl.length - 1] !== '/') {
                    originalUrl += '/';
                }
                req.baseUrl = originalUrl
                    ? originalUrl.slice(0, -req.url.length)
                    : '';
            }
            if (!emitted_basepath && process.send) {
                process.send({
                    __sapper__: true,
                    event: 'basepath',
                    basepath: req.baseUrl
                });
                emitted_basepath = true;
            }
            if (req.path === undefined) {
                req.path = req.url.replace(/\?.*/, '');
            }
            next();
        },
        fs__default['default'].existsSync(path__default['default'].join(build_dir, 'service-worker.js')) && serve({
            pathname: '/service-worker.js',
            cache_control: 'no-cache, no-store, must-revalidate'
        }),
        fs__default['default'].existsSync(path__default['default'].join(build_dir, 'service-worker.js.map')) && serve({
            pathname: '/service-worker.js.map',
            cache_control: 'no-cache, no-store, must-revalidate'
        }),
        serve({
            prefix: '/client/',
            cache_control: 'max-age=31536000, immutable'
        }),
        get_server_route_handler(manifest.server_routes),
        get_page_handler(manifest, session || noop)
    ].filter(Boolean));
}
function compose_handlers(ignore, handlers) {
    const total = handlers.length;
    function nth_handler(n, req, res, next) {
        if (n >= total) {
            return next();
        }
        handlers[n](req, res, () => nth_handler(n + 1, req, res, next));
    }
    return !ignore
        ? (req, res, next) => nth_handler(0, req, res, next)
        : (req, res, next) => {
            if (should_ignore(req.path, ignore)) {
                next();
            }
            else {
                nth_handler(0, req, res, next);
            }
        };
}
function should_ignore(uri, val) {
    if (Array.isArray(val))
        return val.some(x => should_ignore(uri, x));
    if (val instanceof RegExp)
        return val.test(uri);
    if (typeof val === 'function')
        return val(uri);
    return uri.startsWith(val.charCodeAt(0) === 47 ? val : `/${val}`);
}
function serve({ prefix, pathname, cache_control }) {
    const filter = pathname
        ? (req) => req.path === pathname
        : (req) => req.path.startsWith(prefix);
    const cache = new Map();
    const read = (file) => (cache.has(file) ? cache : cache.set(file, fs__default['default'].readFileSync(path__default['default'].join(build_dir, file)))).get(file);
    return (req, res, next) => {
        if (filter(req)) {
            const type = lite.getType(req.path);
            try {
                const file = path__default['default'].posix.normalize(decodeURIComponent(req.path));
                const data = read(file);
                res.setHeader('Content-Type', type);
                res.setHeader('Cache-Control', cache_control);
                res.end(data);
            }
            catch (err) {
                if (err.code === 'ENOENT') {
                    next();
                }
                else {
                    console.error(err);
                    res.statusCode = 500;
                    res.end('an error occurred while reading a static file from disk');
                }
            }
        }
        else {
            next();
        }
    };
}
function noop() { }

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
polka__default['default']()
    .use(compression__default['default']({ threshold: 0 }), sirv__default['default']('static', { dev }), middleware({}))
    .listen(PORT, err => {
    if (err)
        console.log('error', err);
});
