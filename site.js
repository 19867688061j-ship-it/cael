const PRODUCTS = [
  {
    id: "arc",
    name: "Arc Light",
    price: 36,
    room: "Kitchen",
    roomKey: "kitchen",
    order: 1,
    scene: "arc",
    image: "images/lamp.jpg",
    images: ["images/lamp.jpg", "images/night.jpg", "images/linen.jpg"],
    line: "A motion light for cabinets, closets, and the hall you cross at night.",
    story: "It sits under the cabinet and wakes when you do. When you step away, it goes quiet. A slim bar, meant to be left out.",
    points: ["Wakes with motion, then rests", "Recharges with USB-C", "Three light colors", "Magnet or adhesive. No drill."],
    care: "Mount it with the magnet or the adhesive pad. A lumen number goes on this page only after a sample is measured.",
    tags: "light cabinet closet motion lamp hallway night",
    swatches: [
      { id: "bone", name: "Bone", hex: "#E6D9C8" },
      { id: "stone", name: "Stone", hex: "#C9C2B6" },
      { id: "ink", name: "Ink", hex: "#2C2926" }
    ]
  },
  {
    id: "fold",
    name: "Fold Rack",
    price: 28,
    room: "Kitchen",
    roomKey: "kitchen",
    order: 2,
    scene: "fold",
    image: "images/sink.jpg",
    images: ["images/sink.jpg", "images/kitchen.jpg", "images/table.jpg"],
    line: "A rack that folds flat and gives the counter back.",
    story: "It sits at the sink edge so water can return toward the basin. When the counter is needed, it folds out of the way.",
    points: ["Folds flat", "Sits at the sink edge", "Silicone body", "For a small apartment sink"],
    care: "Measure the sink before you expect a tight fit. Heat limit and load are not printed until the sample is tested.",
    tags: "dish rack sink fold silicone drying kitchen",
    swatches: [
      { id: "sand", name: "Sand", hex: "#E4CDBB" },
      { id: "cloud", name: "Cloud", hex: "#F4F0EA" }
    ]
  },
  {
    id: "line",
    name: "Line Clips",
    price: 16,
    room: "Desk",
    roomKey: "desk",
    order: 3,
    scene: "line",
    image: "images/desk.jpg",
    images: ["images/desk.jpg", "images/living.jpg", "images/soft.jpg"],
    line: "Clips that hold a cord along the desk. No drill.",
    story: "Three opening sizes, adhesive pads, and a desk that looks finished. Removal is not promised to be mark-free.",
    points: ["Adhesive cord clips", "Three opening sizes", "No drilling", "For a home desk"],
    care: "Press onto a clean, dry edge. This page does not promise the paint will be untouched when a clip comes off.",
    tags: "cable clip cord desk organizer adhesive",
    swatches: [
      { id: "bone", name: "Bone", hex: "#E6D9C8" },
      { id: "stone", name: "Stone", hex: "#C9C2B6" }
    ]
  },
  {
    id: "sweep",
    name: "Oak Sweep",
    price: 24,
    room: "Kitchen",
    roomKey: "kitchen",
    order: 4,
    scene: "sweep",
    image: "images/table.jpg",
    images: ["images/table.jpg", "images/kitchen.jpg", "images/linen.jpg"],
    line: "A short brush for crumbs on the table.",
    story: "Oak handle, olive bristles, small enough to live in a drawer or a crock. It is a table brush, not a floor broom.",
    points: ["Short oak handle", "Olive bristles", "For crumbs on a table", "Stands in a crock or a drawer"],
    care: "Shake it out. Keep it dry. Bristle length is described from the sample, not from a catalog guess.",
    tags: "brush crumb table oak kitchen sweep",
    swatches: [{ id: "oak", name: "Oak", hex: "#C4A484" }]
  },
  {
    id: "hook",
    name: "Still Hook",
    price: 18,
    room: "Entry",
    roomKey: "entry",
    order: 5,
    scene: "hook",
    image: "images/entry.jpg",
    images: ["images/entry.jpg", "images/soft.jpg", "images/living.jpg"],
    line: "Two matte hooks for the door you actually use.",
    story: "They sit over the door. No drill, no extra holes in a rental. A tote or a robe, not a closet system.",
    points: ["Two hooks", "Sits over the door", "No drill", "Bone or ink"],
    care: "Made for a standard interior door. A weight rating is left off until the sample is hung and measured.",
    tags: "hook door entry robe tote no drill",
    swatches: [
      { id: "bone", name: "Bone", hex: "#E6D9C8" },
      { id: "ink", name: "Ink", hex: "#2C2926" }
    ]
  },
  {
    id: "drawer",
    name: "Drawer Rest",
    price: 26,
    room: "Closet",
    roomKey: "closet",
    order: 6,
    scene: "drawer",
    image: "images/closet.jpg",
    images: ["images/closet.jpg", "images/linen.jpg", "images/soft.jpg"],
    line: "Soft cells for a shallow drawer.",
    story: "Three soft sections for the drawer that never quite closes. They sit loose, so you can turn them to the drawer you have.",
    points: ["Three soft cells", "Sits loose in the drawer", "For a shallow drawer", "Vanity, kitchen, or dresser"],
    care: "Measure the drawer. This page does not claim a universal fit.",
    tags: "drawer organizer closet vanity divider",
    swatches: [
      { id: "sand", name: "Sand", hex: "#E4CDBB" },
      { id: "cloud", name: "Cloud", hex: "#F4F0EA" }
    ]
  }
];

const SCENES = {
  arc: '<div class="cab"></div><div class="wash"></div><div class="bar"></div><div class="ledge"></div><div class="cup"></div><div class="leaf"></div>',
  fold: '<div class="sink"></div><div class="rack"></div><div class="rib r1"></div><div class="rib r2"></div><div class="rib r3"></div><div class="plate"></div>',
  line: '<div class="desk"></div><div class="cord"></div><div class="clip c1"></div><div class="clip c2"></div><div class="clip c3"></div>',
  sweep: '<div class="board"></div><div class="handle"></div><div class="bristle"></div><div class="crumb k1"></div><div class="crumb k2"></div><div class="crumb k3"></div>',
  hook: '<div class="door"></div><div class="hook h1"></div><div class="hook h2"></div><div class="tote"></div>',
  drawer: '<div class="tray"></div><div class="cell d1"></div><div class="cell d2"></div><div class="cell d3"></div>'
};

const SHIP = 75;

function esc(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[ch]));
}

function product(id) {
  return PRODUCTS.find((item) => item.id === id);
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem("cael-bag") || "[]");
  } catch {
    return [];
  }
}

function setCart(items) {
  try {
    localStorage.setItem("cael-bag", JSON.stringify(items));
  } catch {
    /* private mode */
  }
  renderBag();
}

function fillScenes(root) {
  root.querySelectorAll("[data-scene]").forEach((node) => {
    if (node.querySelector(".scene-inner")) return;
    const kind = node.dataset.scene;
    node.classList.add("scene", "scene-" + kind);
    const inner = document.createElement("div");
    inner.className = "scene-inner";
    inner.innerHTML = SCENES[kind] || "";
    node.prepend(inner);
  });
}

function ensureChrome() {
  if (document.querySelector("[data-drawer]")) return;
  const holder = document.createElement("div");
  holder.innerHTML = `
    <div class="overlay" data-drawer="search" hidden>
      <button class="backdrop" type="button" data-close aria-label="Close search"></button>
      <div class="sheet-search" role="dialog" aria-label="Search" data-label="搜索 Search">
        <div class="sheet-head">
          <strong>Search</strong>
          <button type="button" data-close>Close</button>
        </div>
        <input id="q" type="search" placeholder="Light, rack, desk, hook" aria-label="Search objects">
        <div id="search-results"></div>
      </div>
    </div>
    <div class="overlay" data-drawer="bag" hidden>
      <button class="backdrop" type="button" data-close aria-label="Close bag"></button>
      <aside class="sheet-bag" role="dialog" aria-label="Bag" data-label="购物袋 Cart drawer">
        <div class="sheet-head">
          <h2>Your bag</h2>
          <button type="button" data-close>Close</button>
        </div>
        <p id="ship-note" class="bag-meta"></p>
        <div class="ship-track"><span id="ship-bar"></span></div>
        <div id="bag-lines"></div>
        <div class="sheet-foot">
          <p class="sub"><span>Subtotal</span><span id="subtotal">$0</span></p>
          <button type="button" class="btn full" id="checkout">Continue to checkout</button>
          <p class="fine">Under $75, sample shipping is $6. Tax finishes on Shopify Checkout. This preview does not take payment.</p>
          <p class="fine" id="checkout-note" hidden>When the store is live, this button opens Shopify Checkout.</p>
        </div>
      </aside>
    </div>
    <div class="overlay" data-drawer="menu" hidden>
      <button class="backdrop" type="button" data-close aria-label="Close menu"></button>
      <aside class="sheet-menu" role="dialog" aria-label="Menu">
        <button type="button" data-close>Close</button>
        <nav>
          <a href="shop.html">Shop</a>
          <a href="about.html">The Edit</a>
          <a href="support.html">Care</a>
          <button type="button" data-open="search">Search</button>
          <button type="button" data-open="account">Account</button>
        </nav>
      </aside>
    </div>
    <div class="overlay" data-drawer="account" hidden>
      <button class="backdrop" type="button" data-close aria-label="Close account"></button>
      <div class="sheet-note" role="dialog" aria-label="Account" data-label="客户账户 Customer account">
        <h2>Account</h2>
        <p class="lede">Sign-in is a Shopify customer account. This preview keeps the bag in this browser and does not create one.</p>
        <button type="button" class="btn" data-close>Close</button>
      </div>
    </div>`;
  document.body.append(...holder.children);
  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "label-toggle";
  toggle.id = "labels";
  toggle.textContent = "区块";
  document.body.append(toggle);
}

function renderBag() {
  const lines = document.getElementById("bag-lines");
  if (!lines) return;
  const cart = getCart();
  lines.innerHTML = "";
  let sub = 0;
  let count = 0;
  cart.forEach((item, index) => {
    const itemProduct = product(item.id);
    if (!itemProduct) return;
    sub += itemProduct.price * item.qty;
    count += item.qty;
    const row = document.createElement("div");
    row.className = "bag-line";
    const scene = document.createElement("img");
    scene.className = "bag-thumb";
    scene.alt = "";
    scene.src = itemProduct.image;
    const copy = document.createElement("div");
    const name = document.createElement("p");
    name.className = "bag-name";
    name.textContent = itemProduct.name;
    const meta = document.createElement("p");
    meta.className = "bag-meta";
    const swatch = itemProduct.swatches.find((entry) => entry.id === item.swatch);
    meta.textContent = swatch ? swatch.name : item.swatch;
    const qty = document.createElement("div");
    qty.className = "qty";
    const minus = document.createElement("button");
    minus.type = "button";
    minus.textContent = "–";
    minus.addEventListener("click", () => changeQty(index, -1));
    const num = document.createElement("span");
    num.textContent = String(item.qty);
    const plus = document.createElement("button");
    plus.type = "button";
    plus.textContent = "+";
    plus.addEventListener("click", () => changeQty(index, 1));
    qty.append(minus, num, plus);
    copy.append(name, meta, qty);
    const end = document.createElement("div");
    end.className = "bag-end";
    const price = document.createElement("p");
    price.textContent = "$" + itemProduct.price * item.qty;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "textish";
    remove.textContent = "Remove";
    remove.addEventListener("click", () => changeQty(index, -99));
    end.append(price, remove);
    row.append(scene, copy, end);
    lines.append(row);
  });
  if (!cart.length) {
    const empty = document.createElement("p");
    empty.className = "empty-bag";
    empty.textContent = "Your bag is empty.";
    const link = document.createElement("a");
    link.href = "shop.html";
    link.textContent = "Shop the edit";
    lines.append(empty, link);
  }
  document.querySelectorAll("[data-count]").forEach((node) => {
    node.textContent = String(count);
  });
  const subEl = document.getElementById("subtotal");
  if (subEl) subEl.textContent = "$" + sub;
  const note = document.getElementById("ship-note");
  const bar = document.getElementById("ship-bar");
  if (note && bar) {
    if (!cart.length) note.textContent = "Complimentary shipping from $" + SHIP + ".";
    else if (sub >= SHIP) note.textContent = "Complimentary shipping is unlocked.";
    else note.textContent = "$" + (SHIP - sub) + " away from complimentary shipping.";
    bar.style.width = Math.min(100, Math.round((sub / SHIP) * 100)) + "%";
  }
  const checkout = document.getElementById("checkout");
  if (checkout) checkout.disabled = cart.length === 0;
}

function changeQty(index, delta) {
  const cart = getCart();
  if (!cart[index]) return;
  cart[index].qty += delta;
  setCart(cart.filter((item) => item.qty > 0));
}

function addItem(id, swatch, qty) {
  const cart = getCart();
  const found = cart.find((item) => item.id === id && item.swatch === swatch);
  if (found) found.qty += qty;
  else cart.push({ id, swatch, qty });
  setCart(cart);
  openDrawer("bag");
}

function openDrawer(name) {
  document.querySelectorAll("[data-drawer]").forEach((el) => {
    el.hidden = el.dataset.drawer !== name;
  });
  document.body.classList.add("lock");
}

function closeDrawers() {
  document.querySelectorAll("[data-drawer]").forEach((el) => {
    el.hidden = true;
  });
  document.body.classList.remove("lock");
}

function renderPdp() {
  const root = document.getElementById("pdp");
  if (!root) return;
  const requested = new URLSearchParams(location.search).get("id") || "arc";
  const item = product(requested) || PRODUCTS[0];
  document.title = item.name + " · cael";
  const swatches = item.swatches.map((swatch, index) =>
    `<button type="button" class="swatch${index === 0 ? " on" : ""}" data-swatch="${esc(swatch.id)}" data-name="${esc(swatch.name)}" style="background:${swatch.hex}" aria-label="${esc(swatch.name)}"></button>`
  ).join("");
  const points = item.points.map((point) => `<li>${esc(point)}</li>`).join("");
  const shots = item.images.map((src, index) =>
    `<button type="button" data-src="${esc(src)}" class="${index === 0 ? "on" : ""}" aria-label="Photo ${index + 1}"><img src="${esc(src)}" alt=""></button>`
  ).join("");
  root.innerHTML = `
    <div class="pdp">
      <div class="gallery">
        <img class="main-photo" id="main-photo" src="${esc(item.images[0])}" alt="${esc(item.name)}">
        <div class="thumbs">${shots}</div>
      </div>
      <div class="buy">
        <p class="kicker">${esc(item.room)}</p>
        <h1>${esc(item.name)}</h1>
        <p class="price">$${item.price}</p>
        <p>${esc(item.story)}</p>
        <p class="kicker" style="margin-top:18px">Color · <span id="swatch-name">${esc(item.swatches[0].name)}</span></p>
        <div class="swatches">${swatches}</div>
        <ul class="points">${points}</ul>
        <div class="buy-row">
          <div class="qty" aria-label="Quantity">
            <button type="button" id="minus" aria-label="Fewer">–</button>
            <span id="qty">1</span>
            <button type="button" id="plus" aria-label="More">+</button>
          </div>
          <button type="button" class="btn" id="add">Add to bag</button>
        </div>
        <p class="fine">Ships in 3–6 business days. Same price in every color.</p>
        <div class="folds">
          <div class="fold">
            <button type="button" aria-expanded="true">Use</button>
            <div class="fold-a">${esc(item.care)}</div>
          </div>
          <div class="fold">
            <button type="button" aria-expanded="false">Shipping</button>
            <div class="fold-a" hidden>Ships in 3–6 business days. Complimentary over $75, otherwise $6. Checkout shows the final rate.</div>
          </div>
          <div class="fold">
            <button type="button" aria-expanded="false">Returns</button>
            <div class="fold-a" hidden>30 days. Unused, in its box. Return shipping is on the buyer unless it arrives damaged. The return address goes on the confirmation once fulfillment is connected.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="related">
      <h2>Also in the edit</h2>
      <div class="grid" id="related"></div>
    </div>`;
  const related = root.querySelector("#related");
  PRODUCTS.filter((other) => other.id !== item.id).slice(0, 3).forEach((other) => {
    related.append(makeCard(other));
  });
  let qty = 1;
  let current = item.swatches[0].id;
  root.querySelector("#minus").addEventListener("click", () => {
    qty = Math.max(1, qty - 1);
    root.querySelector("#qty").textContent = String(qty);
  });
  root.querySelector("#plus").addEventListener("click", () => {
    qty = Math.min(9, qty + 1);
    root.querySelector("#qty").textContent = String(qty);
  });
  root.querySelector("#add").addEventListener("click", () => addItem(item.id, current, qty));
  root.querySelectorAll(".swatch").forEach((button) => {
    button.addEventListener("click", () => {
      current = button.dataset.swatch;
      root.querySelectorAll(".swatch").forEach((swatch) => swatch.classList.toggle("on", swatch === button));
      root.querySelector("#swatch-name").textContent = button.dataset.name;
    });
  });
  root.querySelectorAll("[data-src]").forEach((button) => {
    button.addEventListener("click", () => {
      root.querySelector("#main-photo").src = button.dataset.src;
      root.querySelectorAll("[data-src]").forEach((view) => view.classList.toggle("on", view === button));
    });
  });
  bindFolds(root);
}

function makeCard(item) {
  const link = document.createElement("a");
  link.className = "card";
  link.href = "product.html?id=" + item.id;
  link.dataset.room = item.roomKey;
  link.dataset.price = String(item.price);
  link.dataset.order = String(item.order);
  const scene = document.createElement("div");
  scene.className = "photo";
  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.name;
  const quick = document.createElement("button");
  quick.className = "quick";
  quick.type = "button";
  quick.dataset.add = item.id;
  quick.dataset.swatch = item.swatches[0].id;
  quick.textContent = "Add to bag";
  scene.append(img, quick);
  const meta = document.createElement("div");
  meta.className = "card-meta";
  const titles = document.createElement("div");
  const kicker = document.createElement("p");
  kicker.className = "kicker";
  kicker.textContent = item.room;
  const heading = document.createElement("h2");
  heading.textContent = item.name;
  titles.append(kicker, heading);
  const price = document.createElement("p");
  price.textContent = "$" + item.price;
  meta.append(titles, price);
  const line = document.createElement("p");
  line.className = "card-line";
  line.textContent = item.line;
  link.append(scene, meta, line);
  return link;
}

function applyShop() {
  const grid = document.getElementById("shop-grid");
  if (!grid) return;
  const filter = document.querySelector(".chip.on")?.dataset.filter || "all";
  const sort = document.getElementById("sort")?.value || "featured";
  const cards = [...grid.querySelectorAll(".card")];
  cards.forEach((card) => {
    card.hidden = filter !== "all" && card.dataset.room !== filter;
  });
  const visible = cards.filter((card) => !card.hidden);
  visible.sort((a, b) => {
    if (sort === "low") return Number(a.dataset.price) - Number(b.dataset.price);
    if (sort === "high") return Number(b.dataset.price) - Number(a.dataset.price);
    return Number(a.dataset.order) - Number(b.dataset.order);
  });
  visible.forEach((card) => grid.append(card));
  cards.filter((card) => card.hidden).forEach((card) => grid.append(card));
  const count = document.getElementById("result-count");
  if (count) count.textContent = visible.length + (visible.length === 1 ? " object" : " objects");
  const empty = document.getElementById("empty");
  if (empty) empty.hidden = visible.length !== 0;
  document.querySelectorAll(".chip").forEach((chip) => {
    chip.setAttribute("aria-pressed", chip.classList.contains("on") ? "true" : "false");
  });
}

function renderSearch() {
  const input = document.getElementById("q");
  const box = document.getElementById("search-results");
  if (!input || !box) return;
  const query = input.value.trim().toLowerCase();
  box.innerHTML = "";
  const list = PRODUCTS.filter((item) => !query || `${item.name} ${item.line} ${item.room} ${item.tags}`.toLowerCase().includes(query));
  if (!list.length) {
    const empty = document.createElement("p");
    empty.className = "lede";
    empty.textContent = "Nothing under that name.";
    box.append(empty);
    return;
  }
  list.forEach((item) => {
    const link = document.createElement("a");
    link.className = "s-row";
    link.href = "product.html?id=" + item.id;
    link.textContent = item.name + "  ·  " + item.room + "  ·  $" + item.price;
    box.append(link);
  });
}

function bindFolds(root) {
  root.querySelectorAll(".fold > button").forEach((button) => {
    if (button.dataset.bound) return;
    button.dataset.bound = "1";
    button.addEventListener("click", () => {
      const open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      button.nextElementSibling.hidden = open;
    });
  });
}

function onClick(event) {
  const opener = event.target.closest("[data-open]");
  if (opener) {
    event.preventDefault();
    openDrawer(opener.dataset.open);
    if (opener.dataset.open === "search") {
      renderSearch();
      setTimeout(() => document.getElementById("q")?.focus(), 40);
    }
    return;
  }
  if (event.target.closest("[data-close]")) {
    closeDrawers();
    return;
  }
  const add = event.target.closest("[data-add]");
  if (add) {
    event.preventDefault();
    event.stopPropagation();
    addItem(add.dataset.add, add.dataset.swatch || "bone", 1);
  }
}

function init() {
  ensureChrome();
  fillScenes(document);
  const room = new URLSearchParams(location.search).get("room");
  if (room) {
    const chip = document.querySelector(`.chip[data-filter="${room}"]`);
    if (chip) {
      document.querySelectorAll(".chip").forEach((item) => item.classList.remove("on"));
      chip.classList.add("on");
    }
  }
  applyShop();
  renderPdp();
  renderBag();
  bindFolds(document);
  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach((item) => item.classList.remove("on"));
      chip.classList.add("on");
      applyShop();
    });
  });
  document.getElementById("sort")?.addEventListener("change", applyShop);
  document.getElementById("q")?.addEventListener("input", renderSearch);
  document.getElementById("checkout")?.addEventListener("click", () => {
    if (!getCart().length) return;
    const note = document.getElementById("checkout-note");
    if (note) note.hidden = false;
  });
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const thanks = form.querySelector(".thanks");
      if (thanks) thanks.hidden = false;
      form.querySelectorAll("input, textarea").forEach((field) => {
        if (field.type !== "submit") field.value = "";
      });
    });
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("in");
    });
  }, { threshold: 0.16 });
  document.querySelectorAll(".rise").forEach((node) => observer.observe(node));
  const labels = document.getElementById("labels");
  if (sessionStorage.getItem("cael-labels") === "1") document.body.classList.add("labels");
  const syncLabels = () => {
    if (labels) labels.textContent = document.body.classList.contains("labels") ? "隐藏标注" : "区块";
  };
  syncLabels();
  labels?.addEventListener("click", () => {
    document.body.classList.toggle("labels");
    sessionStorage.setItem("cael-labels", document.body.classList.contains("labels") ? "1" : "0");
    syncLabels();
  });
  document.addEventListener("click", onClick);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDrawers();
  });
}

document.addEventListener("DOMContentLoaded", init);
