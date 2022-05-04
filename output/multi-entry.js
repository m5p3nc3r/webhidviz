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
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1 = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
      e$3 = Symbol(),
      n$5 = new Map();

class s$3 {
  constructor(t, n) {
    if (this._$cssResult$ = !0, n !== e$3) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t;
  }

  get styleSheet() {
    let e = n$5.get(this.cssText);
    return t$1 && void 0 === e && (n$5.set(this.cssText, e = new CSSStyleSheet()), e.replaceSync(this.cssText)), e;
  }

  toString() {
    return this.cssText;
  }

}

const o$3 = t => new s$3("string" == typeof t ? t : t + "", e$3),
      r$2 = (t, ...n) => {
  const o = 1 === t.length ? t[0] : n.reduce((e, n, s) => e + (t => {
    if (!0 === t._$cssResult$) return t.cssText;
    if ("number" == typeof t) return t;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + t[s + 1], t[0]);
  return new s$3(o, e$3);
},
      i$2 = (e, n) => {
  t$1 ? e.adoptedStyleSheets = n.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : n.forEach(t => {
    const n = document.createElement("style"),
          s = window.litNonce;
    void 0 !== s && n.setAttribute("nonce", s), n.textContent = t.cssText, e.appendChild(n);
  });
},
      S$1 = t$1 ? t => t : t => t instanceof CSSStyleSheet ? (t => {
  let e = "";

  for (const n of t.cssRules) e += n.cssText;

  return o$3(e);
})(t) : t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

var s$2;

const e$2 = window.trustedTypes,
      r$1 = e$2 ? e$2.emptyScript : "",
      h$1 = window.reactiveElementPolyfillSupport,
      o$2 = {
  toAttribute(t, i) {
    switch (i) {
      case Boolean:
        t = t ? r$1 : null;
        break;

      case Object:
      case Array:
        t = null == t ? t : JSON.stringify(t);
    }

    return t;
  },

  fromAttribute(t, i) {
    let s = t;

    switch (i) {
      case Boolean:
        s = null !== t;
        break;

      case Number:
        s = null === t ? null : Number(t);
        break;

      case Object:
      case Array:
        try {
          s = JSON.parse(t);
        } catch (t) {
          s = null;
        }

    }

    return s;
  }

},
      n$4 = (t, i) => i !== t && (i == i || t == t),
      l$2 = {
  attribute: !0,
  type: String,
  converter: o$2,
  reflect: !1,
  hasChanged: n$4
};

class a$1 extends HTMLElement {
  constructor() {
    super(), this._$Et = new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$Ei = null, this.o();
  }

  static addInitializer(t) {
    var i;
    null !== (i = this.l) && void 0 !== i || (this.l = []), this.l.push(t);
  }

  static get observedAttributes() {
    this.finalize();
    const t = [];
    return this.elementProperties.forEach((i, s) => {
      const e = this._$Eh(s, i);

      void 0 !== e && (this._$Eu.set(e, s), t.push(e));
    }), t;
  }

  static createProperty(t, i = l$2) {
    if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
      const s = "symbol" == typeof t ? Symbol() : "__" + t,
            e = this.getPropertyDescriptor(t, s, i);
      void 0 !== e && Object.defineProperty(this.prototype, t, e);
    }
  }

  static getPropertyDescriptor(t, i, s) {
    return {
      get() {
        return this[i];
      },

      set(e) {
        const r = this[t];
        this[i] = e, this.requestUpdate(t, r, s);
      },

      configurable: !0,
      enumerable: !0
    };
  }

  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || l$2;
  }

  static finalize() {
    if (this.hasOwnProperty("finalized")) return !1;
    this.finalized = !0;
    const t = Object.getPrototypeOf(this);

    if (t.finalize(), this.elementProperties = new Map(t.elementProperties), this._$Eu = new Map(), this.hasOwnProperty("properties")) {
      const t = this.properties,
            i = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];

      for (const s of i) this.createProperty(s, t[s]);
    }

    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }

  static finalizeStyles(i) {
    const s = [];

    if (Array.isArray(i)) {
      const e = new Set(i.flat(1 / 0).reverse());

      for (const i of e) s.unshift(S$1(i));
    } else void 0 !== i && s.push(S$1(i));

    return s;
  }

  static _$Eh(t, i) {
    const s = i.attribute;
    return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
  }

  o() {
    var t;
    this._$Ep = new Promise(t => this.enableUpdating = t), this._$AL = new Map(), this._$Em(), this.requestUpdate(), null === (t = this.constructor.l) || void 0 === t || t.forEach(t => t(this));
  }

  addController(t) {
    var i, s;
    (null !== (i = this._$Eg) && void 0 !== i ? i : this._$Eg = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
  }

  removeController(t) {
    var i;
    null === (i = this._$Eg) || void 0 === i || i.splice(this._$Eg.indexOf(t) >>> 0, 1);
  }

  _$Em() {
    this.constructor.elementProperties.forEach((t, i) => {
      this.hasOwnProperty(i) && (this._$Et.set(i, this[i]), delete this[i]);
    });
  }

  createRenderRoot() {
    var t;
    const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
    return i$2(s, this.constructor.elementStyles), s;
  }

  connectedCallback() {
    var t;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$Eg) || void 0 === t || t.forEach(t => {
      var i;
      return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
    });
  }

  enableUpdating(t) {}

  disconnectedCallback() {
    var t;
    null === (t = this._$Eg) || void 0 === t || t.forEach(t => {
      var i;
      return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
    });
  }

  attributeChangedCallback(t, i, s) {
    this._$AK(t, s);
  }

  _$ES(t, i, s = l$2) {
    var e, r;

    const h = this.constructor._$Eh(t, s);

    if (void 0 !== h && !0 === s.reflect) {
      const n = (null !== (r = null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) && void 0 !== r ? r : o$2.toAttribute)(i, s.type);
      this._$Ei = t, null == n ? this.removeAttribute(h) : this.setAttribute(h, n), this._$Ei = null;
    }
  }

  _$AK(t, i) {
    var s, e, r;

    const h = this.constructor,
          n = h._$Eu.get(t);

    if (void 0 !== n && this._$Ei !== n) {
      const t = h.getPropertyOptions(n),
            l = t.converter,
            a = null !== (r = null !== (e = null === (s = l) || void 0 === s ? void 0 : s.fromAttribute) && void 0 !== e ? e : "function" == typeof l ? l : null) && void 0 !== r ? r : o$2.fromAttribute;
      this._$Ei = n, this[n] = a(i, t.type), this._$Ei = null;
    }
  }

  requestUpdate(t, i, s) {
    let e = !0;
    void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || n$4)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$Ei !== t && (void 0 === this._$EC && (this._$EC = new Map()), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$Ep = this._$E_());
  }

  async _$E_() {
    this.isUpdatePending = !0;

    try {
      await this._$Ep;
    } catch (t) {
      Promise.reject(t);
    }

    const t = this.scheduleUpdate();
    return null != t && (await t), !this.isUpdatePending;
  }

  scheduleUpdate() {
    return this.performUpdate();
  }

  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    this.hasUpdated, this._$Et && (this._$Et.forEach((t, i) => this[i] = t), this._$Et = void 0);
    let i = !1;
    const s = this._$AL;

    try {
      i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$Eg) || void 0 === t || t.forEach(t => {
        var i;
        return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
      }), this.update(s)) : this._$EU();
    } catch (t) {
      throw i = !1, this._$EU(), t;
    }

    i && this._$AE(s);
  }

  willUpdate(t) {}

  _$AE(t) {
    var i;
    null === (i = this._$Eg) || void 0 === i || i.forEach(t => {
      var i;
      return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }

  _$EU() {
    this._$AL = new Map(), this.isUpdatePending = !1;
  }

  get updateComplete() {
    return this.getUpdateComplete();
  }

  getUpdateComplete() {
    return this._$Ep;
  }

  shouldUpdate(t) {
    return !0;
  }

  update(t) {
    void 0 !== this._$EC && (this._$EC.forEach((t, i) => this._$ES(i, this[i], t)), this._$EC = void 0), this._$EU();
  }

  updated(t) {}

  firstUpdated(t) {}

}

a$1.finalized = !0, a$1.elementProperties = new Map(), a$1.elementStyles = [], a$1.shadowRootOptions = {
  mode: "open"
}, null == h$1 || h$1({
  ReactiveElement: a$1
}), (null !== (s$2 = globalThis.reactiveElementVersions) && void 0 !== s$2 ? s$2 : globalThis.reactiveElementVersions = []).push("1.3.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;

const i$1 = globalThis.trustedTypes,
      s$1 = i$1 ? i$1.createPolicy("lit-html", {
  createHTML: t => t
}) : void 0,
      e$1 = `lit$${(Math.random() + "").slice(9)}$`,
      o$1 = "?" + e$1,
      n$3 = `<${o$1}>`,
      l$1 = document,
      h = (t = "") => l$1.createComment(t),
      r = t => null === t || "object" != typeof t && "function" != typeof t,
      d = Array.isArray,
      u = t => {
  var i;
  return d(t) || "function" == typeof (null === (i = t) || void 0 === i ? void 0 : i[Symbol.iterator]);
},
      c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
      v = /-->/g,
      a = />/g,
      f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
      _ = /'/g,
      m = /"/g,
      g = /^(?:script|style|textarea|title)$/i,
      p = t => (i, ...s) => ({
  _$litType$: t,
  strings: i,
  values: s
}),
      $ = p(1),
      b = Symbol.for("lit-noChange"),
      w = Symbol.for("lit-nothing"),
      T = new WeakMap(),
      x = (t, i, s) => {
  var e, o;
  const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
  let l = n._$litPart$;

  if (void 0 === l) {
    const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
    n._$litPart$ = l = new N(i.insertBefore(h(), t), t, void 0, null != s ? s : {});
  }

  return l._$AI(t), l;
},
      A = l$1.createTreeWalker(l$1, 129, null, !1),
      C = (t, i) => {
  const o = t.length - 1,
        l = [];
  let h,
      r = 2 === i ? "<svg>" : "",
      d = c;

  for (let i = 0; i < o; i++) {
    const s = t[i];
    let o,
        u,
        p = -1,
        $ = 0;

    for (; $ < s.length && (d.lastIndex = $, u = d.exec(s), null !== u);) $ = d.lastIndex, d === c ? "!--" === u[1] ? d = v : void 0 !== u[1] ? d = a : void 0 !== u[2] ? (g.test(u[2]) && (h = RegExp("</" + u[2], "g")), d = f) : void 0 !== u[3] && (d = f) : d === f ? ">" === u[0] ? (d = null != h ? h : c, p = -1) : void 0 === u[1] ? p = -2 : (p = d.lastIndex - u[2].length, o = u[1], d = void 0 === u[3] ? f : '"' === u[3] ? m : _) : d === m || d === _ ? d = f : d === v || d === a ? d = c : (d = f, h = void 0);

    const y = d === f && t[i + 1].startsWith("/>") ? " " : "";
    r += d === c ? s + n$3 : p >= 0 ? (l.push(o), s.slice(0, p) + "$lit$" + s.slice(p) + e$1 + y) : s + e$1 + (-2 === p ? (l.push(void 0), i) : y);
  }

  const u = r + (t[o] || "<?>") + (2 === i ? "</svg>" : "");
  if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return [void 0 !== s$1 ? s$1.createHTML(u) : u, l];
};

class E {
  constructor({
    strings: t,
    _$litType$: s
  }, n) {
    let l;
    this.parts = [];
    let r = 0,
        d = 0;
    const u = t.length - 1,
          c = this.parts,
          [v, a] = C(t, s);

    if (this.el = E.createElement(v, n), A.currentNode = this.el.content, 2 === s) {
      const t = this.el.content,
            i = t.firstChild;
      i.remove(), t.append(...i.childNodes);
    }

    for (; null !== (l = A.nextNode()) && c.length < u;) {
      if (1 === l.nodeType) {
        if (l.hasAttributes()) {
          const t = [];

          for (const i of l.getAttributeNames()) if (i.endsWith("$lit$") || i.startsWith(e$1)) {
            const s = a[d++];

            if (t.push(i), void 0 !== s) {
              const t = l.getAttribute(s.toLowerCase() + "$lit$").split(e$1),
                    i = /([.?@])?(.*)/.exec(s);
              c.push({
                type: 1,
                index: r,
                name: i[2],
                strings: t,
                ctor: "." === i[1] ? M : "?" === i[1] ? H : "@" === i[1] ? I : S
              });
            } else c.push({
              type: 6,
              index: r
            });
          }

          for (const i of t) l.removeAttribute(i);
        }

        if (g.test(l.tagName)) {
          const t = l.textContent.split(e$1),
                s = t.length - 1;

          if (s > 0) {
            l.textContent = i$1 ? i$1.emptyScript : "";

            for (let i = 0; i < s; i++) l.append(t[i], h()), A.nextNode(), c.push({
              type: 2,
              index: ++r
            });

            l.append(t[s], h());
          }
        }
      } else if (8 === l.nodeType) if (l.data === o$1) c.push({
        type: 2,
        index: r
      });else {
        let t = -1;

        for (; -1 !== (t = l.data.indexOf(e$1, t + 1));) c.push({
          type: 7,
          index: r
        }), t += e$1.length - 1;
      }

      r++;
    }
  }

  static createElement(t, i) {
    const s = l$1.createElement("template");
    return s.innerHTML = t, s;
  }

}

function P(t, i, s = t, e) {
  var o, n, l, h;
  if (i === b) return i;
  let d = void 0 !== e ? null === (o = s._$Cl) || void 0 === o ? void 0 : o[e] : s._$Cu;
  const u = r(i) ? void 0 : i._$litDirective$;
  return (null == d ? void 0 : d.constructor) !== u && (null === (n = null == d ? void 0 : d._$AO) || void 0 === n || n.call(d, !1), void 0 === u ? d = void 0 : (d = new u(t), d._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Cl) && void 0 !== l ? l : h._$Cl = [])[e] = d : s._$Cu = d), void 0 !== d && (i = P(t, d._$AS(t, i.values), d, e)), i;
}

class V {
  constructor(t, i) {
    this.v = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
  }

  get parentNode() {
    return this._$AM.parentNode;
  }

  get _$AU() {
    return this._$AM._$AU;
  }

  p(t) {
    var i;
    const {
      el: {
        content: s
      },
      parts: e
    } = this._$AD,
          o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : l$1).importNode(s, !0);
    A.currentNode = o;
    let n = A.nextNode(),
        h = 0,
        r = 0,
        d = e[0];

    for (; void 0 !== d;) {
      if (h === d.index) {
        let i;
        2 === d.type ? i = new N(n, n.nextSibling, this, t) : 1 === d.type ? i = new d.ctor(n, d.name, d.strings, this, t) : 6 === d.type && (i = new L(n, this, t)), this.v.push(i), d = e[++r];
      }

      h !== (null == d ? void 0 : d.index) && (n = A.nextNode(), h++);
    }

    return o;
  }

  m(t) {
    let i = 0;

    for (const s of this.v) void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
  }

}

class N {
  constructor(t, i, s, e) {
    var o;
    this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cg = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
  }

  get _$AU() {
    var t, i;
    return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cg;
  }

  get parentNode() {
    let t = this._$AA.parentNode;
    const i = this._$AM;
    return void 0 !== i && 11 === t.nodeType && (t = i.parentNode), t;
  }

  get startNode() {
    return this._$AA;
  }

  get endNode() {
    return this._$AB;
  }

  _$AI(t, i = this) {
    t = P(this, t, i), r(t) ? t === w || null == t || "" === t ? (this._$AH !== w && this._$AR(), this._$AH = w) : t !== this._$AH && t !== b && this.$(t) : void 0 !== t._$litType$ ? this.T(t) : void 0 !== t.nodeType ? this.k(t) : u(t) ? this.S(t) : this.$(t);
  }

  M(t, i = this._$AB) {
    return this._$AA.parentNode.insertBefore(t, i);
  }

  k(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.M(t));
  }

  $(t) {
    this._$AH !== w && r(this._$AH) ? this._$AA.nextSibling.data = t : this.k(l$1.createTextNode(t)), this._$AH = t;
  }

  T(t) {
    var i;
    const {
      values: s,
      _$litType$: e
    } = t,
          o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = E.createElement(e.h, this.options)), e);
    if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.m(s);else {
      const t = new V(o, this),
            i = t.p(this.options);
      t.m(s), this.k(i), this._$AH = t;
    }
  }

  _$AC(t) {
    let i = T.get(t.strings);
    return void 0 === i && T.set(t.strings, i = new E(t)), i;
  }

  S(t) {
    d(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let s,
        e = 0;

    for (const o of t) e === i.length ? i.push(s = new N(this.M(h()), this.M(h()), this, this.options)) : s = i[e], s._$AI(o), e++;

    e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
  }

  _$AR(t = this._$AA.nextSibling, i) {
    var s;

    for (null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }

  setConnected(t) {
    var i;
    void 0 === this._$AM && (this._$Cg = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
  }

}

class S {
  constructor(t, i, s, e, o) {
    this.type = 1, this._$AH = w, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = w;
  }

  get tagName() {
    return this.element.tagName;
  }

  get _$AU() {
    return this._$AM._$AU;
  }

  _$AI(t, i = this, s, e) {
    const o = this.strings;
    let n = !1;
    if (void 0 === o) t = P(this, t, i, 0), n = !r(t) || t !== this._$AH && t !== b, n && (this._$AH = t);else {
      const e = t;
      let l, h;

      for (t = o[0], l = 0; l < o.length - 1; l++) h = P(this, e[s + l], i, l), h === b && (h = this._$AH[l]), n || (n = !r(h) || h !== this._$AH[l]), h === w ? t = w : t !== w && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
    }
    n && !e && this.C(t);
  }

  C(t) {
    t === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
  }

}

class M extends S {
  constructor() {
    super(...arguments), this.type = 3;
  }

  C(t) {
    this.element[this.name] = t === w ? void 0 : t;
  }

}

const k = i$1 ? i$1.emptyScript : "";

class H extends S {
  constructor() {
    super(...arguments), this.type = 4;
  }

  C(t) {
    t && t !== w ? this.element.setAttribute(this.name, k) : this.element.removeAttribute(this.name);
  }

}

class I extends S {
  constructor(t, i, s, e, o) {
    super(t, i, s, e, o), this.type = 5;
  }

  _$AI(t, i = this) {
    var s;
    if ((t = null !== (s = P(this, t, i, 0)) && void 0 !== s ? s : w) === b) return;
    const e = this._$AH,
          o = t === w && e !== w || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive,
          n = t !== w && (e === w || o);
    o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }

  handleEvent(t) {
    var i, s;
    "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
  }

}

class L {
  constructor(t, i, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
  }

  get _$AU() {
    return this._$AM._$AU;
  }

  _$AI(t) {
    P(this, t);
  }

}

const z = window.litHtmlPolyfillSupport;
null == z || z(E, N), (null !== (t = globalThis.litHtmlVersions) && void 0 !== t ? t : globalThis.litHtmlVersions = []).push("2.2.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

var l, o;

class s extends a$1 {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this._$Dt = void 0;
  }

  createRenderRoot() {
    var t, e;
    const i = super.createRenderRoot();
    return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
  }

  update(t) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Dt = x(i, this.renderRoot, this.renderOptions);
  }

  connectedCallback() {
    var t;
    super.connectedCallback(), null === (t = this._$Dt) || void 0 === t || t.setConnected(!0);
  }

  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), null === (t = this._$Dt) || void 0 === t || t.setConnected(!1);
  }

  render() {
    return b;
  }

}

s.finalized = !0, s._$litElement$ = !0, null === (l = globalThis.litElementHydrateSupport) || void 0 === l || l.call(globalThis, {
  LitElement: s
});
const n$2 = globalThis.litElementPolyfillSupport;
null == n$2 || n$2({
  LitElement: s
});
(null !== (o = globalThis.litElementVersions) && void 0 !== o ? o : globalThis.litElementVersions = []).push("3.2.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n$1 = n => e => "function" == typeof e ? ((n, e) => (window.customElements.define(n, e), e))(n, e) : ((n, e) => {
  const {
    kind: t,
    elements: i
  } = e;
  return {
    kind: t,
    elements: i,

    finisher(e) {
      window.customElements.define(n, e);
    }

  };
})(n, e);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i = (i, e) => "method" === e.kind && e.descriptor && !("value" in e.descriptor) ? { ...e,

  finisher(n) {
    n.createProperty(e.key, i);
  }

} : {
  kind: "field",
  key: Symbol(),
  placement: "own",
  descriptor: {},
  originalKey: e.key,

  initializer() {
    "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this));
  },

  finisher(n) {
    n.createProperty(e.key, i);
  }

};

function e(e) {
  return (n, t) => void 0 !== t ? ((i, e, n) => {
    e.constructor.createProperty(n, i);
  })(e, n, t) : i(e, n);
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

var n;
null != (null === (n = window.HTMLSlotElement) || void 0 === n ? void 0 : n.prototype.assignedElements) ? (o, n) => o.assignedElements(n) : (o, n) => o.assignedNodes(n).filter(o => o.nodeType === Node.ELEMENT_NODE);

class HIDDecode {
    static fromPacked(packed) {
        let page = (packed >> 16) & 0xffff;
        let id = packed & 0xffff;
        return [this.usagePage(page), this.usage(page, id)];
    }
    static usagePage(usagePage) {
        let ret = "";
        switch (usagePage ? usagePage : 0) {
            case 0x00:
                ret = "undefined";
                break;
            case 0x01:
                ret = "Generic Desktop Controls";
                break;
            case 0x02:
                ret = "Simulation Controls";
                break;
            case 0x03:
                ret = "VR Controls";
                break;
            case 0x04:
                ret = "Sport Controls";
                break;
            case 0x05:
                ret = "Game Controls";
                break;
            case 0x06:
                ret = "Generic Device Controls";
                break;
            case 0x07:
                ret = "Keyboard/Keypad";
                break;
            case 0x08:
                ret = "LEDs";
                break;
            case 0x09:
                ret = "Button";
                break;
            case 0x0a:
                ret = "Ordinal";
                break;
            case 0x0b:
                ret = "Telophony";
                break;
            case 0x0c:
                ret = "Consumer";
                break;
            case 0x0d:
                ret = "Digitizer";
                break;
            case 0x0e:
                ret = "Reserved";
                break;
            case 0x0f:
                ret = "PID Page";
                break;
            case 0x10:
                ret = "Unicode";
                break;
            default: {
                if (usagePage ? usagePage : 0 >= 0xff00)
                    ret = "Vendor-defined";
                else
                    ret = "Reserved or not decoded...";
                break;
            }
        }
        return ret;
    }
    static usage(usagePage, usage) {
        let ret = "";
        switch (usagePage ? usagePage : 0) {
            case 0x00:
                ret = "Undefined";
                break;
            case 0x01:
                ret = this.usage_genericDesktop(usage);
                break;
            default:
                ret = "DEFAULT";
                break;
        }
        return ret;
    }
    // https://www.usb.org/sites/default/files/documents/hut1_12v2.pdf page 26
    static usage_genericDesktop(usage) {
        let ret = "";
        switch (usage ? usage : 0) {
            case 0x00:
                ret = "Undefined";
                break;
            case 0x01:
                ret = "Pointer";
                break;
            case 0x02:
                ret = "Mouse";
                break;
            case 0x04:
                ret = "Joystick";
                break;
            case 0x05:
                ret = "Game Pad";
                break;
            case 0x06:
                ret = "Keyboard";
                break;
            case 0x07:
                ret = "Keypad";
                break;
            case 0x08:
                ret = "Multi-axis Controller";
                break;
            case 0x09:
                ret = "Tablet PC System Controls";
                break;
            // 0x10 - 0x2F Reserved
            case 0x30:
                ret = "X";
                break;
            case 0x31:
                ret = "Y";
                break;
            case 0x32:
                ret = "Z";
                break;
            case 0x33:
                ret = "Rx";
                break;
            case 0x34:
                ret = "Ry";
                break;
            case 0x35:
                ret = "Rz";
                break;
            case 0x36:
                ret = "Slider";
                break;
            case 0x37:
                ret = "Dial";
                break;
            case 0x38:
                ret = "Wheel";
                break;
            case 0x39:
                ret = "Hat switch";
                break;
            case 0x3A:
                ret = "Counted Buffer";
                break;
            case 0x3B:
                ret = "Byte Count";
                break;
            case 0x3C:
                ret = "Motion Wakeup";
                break;
            case 0x3D:
                ret = "Start";
                break;
            case 0x3E:
                ret = "Select";
                break;
            // 0x3F Reserved
            default:
                ret = "Unparsed (TODO)";
                break;
        }
        return ret;
    }
}

class HIDLitElement extends s {
    constructor() {
        super();
    }
}

let HIDUsageView = class HIDUsageView extends HIDLitElement {
    constructor(lMin, lMax, reportSize, usage) {
        super();
        // This is the raw value from the input stream
        this._value = 0;
        // The slider is a normailzed (0-1) verision of the raw input value
        // betwee lMin and lMax
        this.slider = 0;
        this.usage = usage ? HIDDecode.fromPacked(usage)[1] : undefined;
        this.lMin = lMin || 0;
        this.lMax = lMax || 0;
        this.reportSize = reportSize || 0;
    }
    get value() {
        return this._value;
    }
    set value(v) {
        const oldValue = this._value;
        if (this.lMin <= v && v <= this.lMax) {
            this._value = v;
            this.requestUpdate('value', oldValue);
            this.slider = this.normaliseValue(v);
        }
    }
    normaliseValue(val) {
        if (val < this.lMin)
            return 0;
        if (val >= this.lMax)
            return 100;
        let range = this.lMax - this.lMin;
        let value = val - this.lMin;
        return (value / range);
    }
    processStream(stream) {
        this.value = stream.read(this.reportSize);
    }
    render() {
        return $ `
        <div>${this.usage} ${this._value}</div>
        <progress max='1' value='${this.slider}'></progress>
        `;
    }
};
HIDUsageView.styles = r$2 `
    :host {
        padding: 10px;
    }
    `;
__decorate([
    e({ type: Number })
], HIDUsageView.prototype, "lMin", void 0);
__decorate([
    e({ type: Number })
], HIDUsageView.prototype, "lMax", void 0);
__decorate([
    e({ type: Number })
], HIDUsageView.prototype, "value", null);
__decorate([
    e({ type: Number })
], HIDUsageView.prototype, "slider", void 0);
HIDUsageView = __decorate([
    n$1('hid-usage')
], HIDUsageView);

var HIDReportType;
(function (HIDReportType) {
    HIDReportType[HIDReportType["Input"] = 0] = "Input";
    HIDReportType[HIDReportType["Output"] = 1] = "Output";
    HIDReportType[HIDReportType["Feature"] = 2] = "Feature";
    HIDReportType[HIDReportType["Undefined"] = 3] = "Undefined";
})(HIDReportType || (HIDReportType = {}));
let HIDReportItemView = class HIDReportItemView extends HIDLitElement {
    constructor(ctx) {
        super();
        this.type = HIDReportType.Undefined;
        if (ctx === null || ctx === void 0 ? void 0 : ctx.reportCount) {
            for (let i = 0; i < ctx.reportCount; i++) {
                if (ctx.logicalMinimum != undefined && ctx.logicalMaximum != undefined) {
                    let usage = ctx.usages ? ctx.usages[i] : undefined;
                    let lmin = ctx.logicalMinimum || 0;
                    let lmax = ctx.logicalMaximum ? ctx.logicalMaximum : lmin + (ctx.reportSize ? 1 << (ctx.reportSize - 1) : 0);
                    let usageView = new HIDUsageView(lmin, lmax, ctx.reportSize, usage);
                    this.appendChild(usageView);
                }
            }
        }
        this.reportSize = (ctx === null || ctx === void 0 ? void 0 : ctx.reportSize) || 0;
        this.reportCount = (ctx === null || ctx === void 0 ? void 0 : ctx.reportCount) || 0;
    }
    firstUpdated() {
        var _a;
        switch ((_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.slot) {
            case "input":
                this.type = HIDReportType.Input;
                break;
            case "output":
                this.type = HIDReportType.Output;
                break;
            case "feature":
                this.type = HIDReportType.Feature;
                break;
            default:
                this.type = HIDReportType.Undefined;
                break;
        }
    }
    processStream(stream) {
        if (this.type == HIDReportType.Input) {
            this.childNodes.forEach((e) => {
                if (e instanceof HIDLitElement) {
                    e.processStream(stream);
                }
            });
        }
    }
    render() {
        return $ `
        <p>HIDReportItemView
        <div class="container">
          <slot></slot>
        </div>
        `;
    }
};
HIDReportItemView.styles = r$2 `
    :host {
        display: block;
        padding: 10px;
    }
    .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    `;
HIDReportItemView = __decorate([
    n$1('hid-reportitem')
], HIDReportItemView);

let HIDReportInfoView = class HIDReportInfoView extends HIDLitElement {
    constructor(ctx) {
        super();
        this.reportId = (ctx === null || ctx === void 0 ? void 0 : ctx.reportId) || 0;
        for (let item of (ctx === null || ctx === void 0 ? void 0 : ctx.items) || []) {
            let reportView = new HIDReportItemView(item);
            this.appendChild(reportView);
        }
    }
    processStream(stream) {
        this.childNodes.forEach((e) => {
            if (e instanceof HIDLitElement) {
                e.processStream(stream);
            }
        });
    }
    render() {
        return $ `
        <p>Report ID ${this.reportId.toString()} 
        <slot></slot>
        `;
    }
};
__decorate([
    e({ type: Number })
], HIDReportInfoView.prototype, "reportId", void 0);
HIDReportInfoView = __decorate([
    n$1('hid-reportinfo')
], HIDReportInfoView);

let HIDCollectionInfoView = class HIDCollectionInfoView extends HIDLitElement {
    constructor(collection) {
        super();
        // Extract required data from HIDCollectionInfo
        this.type = (collection === null || collection === void 0 ? void 0 : collection.type) || 0;
        this.usagePage = (collection === null || collection === void 0 ? void 0 : collection.usagePage) || 0;
        this.usage = (collection === null || collection === void 0 ? void 0 : collection.usage) || 0;
        if (collection) {
            this.addReports("input", collection.inputReports);
            this.addReports("output", collection.outputReports);
            this.addReports("feature", collection.featureReports);
        }
    }
    addReports(slot, reports) {
        if (reports) {
            for (let report of reports) {
                let reportView = new HIDReportInfoView(report);
                reportView.setAttribute('slot', slot);
                this.appendChild(reportView);
            }
        }
    }
    processStream(stream) {
        this.childNodes.forEach((e) => {
            if (e instanceof HIDLitElement) {
                e.processStream(stream);
            }
        });
    }
    render() {
        return $ `
        <p>Type : ${this.type.toString()},
        Usage Page : ${HIDDecode.usagePage(this.usagePage)},
        Usage : ${HIDDecode.usage(this.usagePage, this.usage)}
        <slot name='input'></slot>
        <slot name='output'></slot>
        <slot name='feature'></slot>
        `;
    }
};
__decorate([
    e({ type: Number })
], HIDCollectionInfoView.prototype, "type", void 0);
__decorate([
    e({ type: Number })
], HIDCollectionInfoView.prototype, "usagePage", void 0);
__decorate([
    e({ type: Number })
], HIDCollectionInfoView.prototype, "usage", void 0);
HIDCollectionInfoView = __decorate([
    n$1('hid-collectioninfo')
], HIDCollectionInfoView);

/**
 * This code is modified from https://github.com/nebkat/bit-buffer-ts/
 *
 * I only need a stream reader for now, so have removed the writing bits
 * Stream writing will be added if we add report generation
 */
class BitView {
    constructor(buffer, byteOffset = 0, byteLength = buffer.length - byteOffset) {
        this.getBoolean = (offset) => this.getBit(offset) === 1;
        this.getInt8 = (offset) => this.getBits(offset, 8, true);
        this.getUint8 = (offset) => this.getBits(offset, 8, false);
        this.getInt16 = (offset) => this.getBits(offset, 16, true);
        this.getUint16 = (offset) => this.getBits(offset, 16, false);
        this.getInt32 = (offset) => this.getBits(offset, 32, true);
        this.getUint32 = (offset) => this.getBits(offset, 32, false);
        this.buffer = (byteOffset === 0 && byteLength === buffer.length)
            ? buffer : buffer.subarray(byteOffset, byteOffset + byteLength);
        this.byteLength = byteLength;
        this.bitLength = byteLength * 8;
    }
    checkBounds(offset, bits) {
        const available = (this.bitLength - offset);
        if (bits > available)
            throw new Error('Cannot get/set ' + bits + ' bit(s) from offset ' + offset + ', ' + available + ' available');
    }
    /**
     * Returns the bit value at the specified bit offset.
     *
     * @param offset Offset of bit.
     */
    getBit(offset) {
        return (this.buffer[offset >> 3] >> ((offset & 0b111)) & 0b1);
        //        return (this.buffer[offset >> 3] >> (7 - (offset & 0b111)) & 0b1) as (1 | 0);
    }
    /**
     * Returns a `bits` long value at the specified bit offset.
     *
     * @param offset Offset of bits.
     * @param bits Number of bits to read.
     * @param signed Whether the result should be a signed or unsigned value.
     */
    getBits(offset, bits, signed) {
        this.checkBounds(offset, bits);
        let value = 0;
        let written = 0;
        for (let index = 0; index < bits; index++) {
            let bit = this.getBit(offset + index);
            value += bit << written;
            written++;
        }
        if (signed) {
            // Read imaginary MSB and convert to signed if needed
            if (bits < 32 && value >> (bits - 1) > 0) {
                value |= -1 ^ ((1 << bits) - 1);
            }
            else if (bits > 32 && value > 2 ** (bits - 1)) {
                value -= 2 ** bits;
            }
        }
        return value;
    }
    /**
     * Returns a buffer containing the bytes at the specified bit offset.
     *
     * @param offset Offset of bytes.
     * @param byteLength Number of bytes to read.
     */
    readBuffer(offset, byteLength) {
        const buffer = new Uint8Array(byteLength);
        for (let i = 0; i < byteLength; i++)
            buffer[i] = this.getUint8(offset + (i * 8));
        return buffer;
    }
}
/**
 * Wrapper for {@link BitView}s that maintains an index while reading/writing sequential data.
 */
class BitInputStream {
    constructor(source, byteOffset, byteLength) {
        this.readBoolean = () => this.readBit() === 1;
        this.readInt8 = () => this.read(8, true);
        this.readUint8 = () => this.read(8, false);
        this.readInt16 = () => this.read(16, true);
        this.readUint16 = () => this.read(16, false);
        this.readInt32 = () => this.read(32, true);
        this.readUint32 = () => this.read(32, false);
        this.view = source instanceof BitView ? source : new BitView(source, byteOffset, byteLength);
        this.buffer = this.view.buffer;
        this.bitIndex = 0;
        this.bitLength = this.view.bitLength;
        this.byteLength = this.view.byteLength;
    }
    /** Alias for {@link bitIndex} */
    get index() { return this.bitIndex; }
    set index(val) { this.bitIndex = val; }
    ;
    /** Number of bits remaining in this stream's underlying buffer from the current position. */
    get bitsLeft() { return this.bitLength - this.bitIndex; }
    /** Current position of this stream (in bytes) from/to which data is read/written. */
    get byteIndex() { return Math.ceil(this.bitIndex / 8); }
    set byteIndex(val) { this.bitIndex = val * 8; }
    readBit() {
        const val = this.view.getBit(this.bitIndex);
        this.bitIndex++;
        return val;
    }
    read(bits, signed = false) {
        const val = this.view.getBits(this.bitIndex, bits, signed);
        this.bitIndex += bits;
        return val;
    }
    readBuffer(byteLength) {
        const buffer = this.view.readBuffer(this.bitIndex, byteLength);
        this.bitIndex += byteLength * 8;
        return buffer;
    }
    static test() {
        let assert = (v, t, desc) => {
            if (v == t) {
                console.log("OK    : " + desc + " => " + v + " == " + t);
            }
            if (v != t) {
                console.log("ERROR : " + desc + " => " + v + " != " + t);
            }
        };
        // Create a buffer
        let b = new Uint8Array([32, 0, 0, 0, 64, 0, 0, 0]);
        let s = new BitInputStream(b, 0, 8);
        console.log("Result = " + s.readUint32());
        console.log("Result = " + s.readUint32());
        b = new Uint8Array([0b10101010]);
        s = new BitInputStream(b, 0, 1);
        for (let i = 0; i < 32; i++) {
            console.log("Result = " + s.readBoolean());
        }
        b = new Uint8Array([0b10101010, 0b11010011]);
        s = new BitInputStream(b, 0, 2);
        console.log(" = " + s.read(4));
        console.log("Result = " + s.readBoolean());
        console.log("Result = " + s.readBoolean());
        console.log("Result = " + s.readBoolean());
        console.log("Result = " + s.readBoolean());
        console.log(" = " + s.read(6));
        console.log(" = " + s.read(2));
        // HID report taken directly from a PS4 controller
        b = new Uint8Array([
            150, 68, 91, 198, 40, 0, 90, 0, 0, 106, 177, 14, 33, 0, 244, 255,
            16, 0, 215, 248, 209, 31, 148, 255, 0, 0, 0, 0, 0, 27, 0, 0,
            1, 120, 9, 108, 165, 11, 128, 0, 0, 0, 0, 128, 0, 0, 0, 128,
            0, 0, 0, 0, 128, 0, 0, 0, 128, 0, 0, 0, 0, 128, 0
        ]);
        s = new BitInputStream(b, 0, b.length);
        assert(s.readUint8(), 150, "Left x"); // Left x
        assert(s.readUint8(), 68, "Left y");
        assert(s.readUint8(), 91, "Right x");
        assert(s.readUint8(), 198, "Right y");
        assert(s.read(4), 8, "Hat switch");
        assert(s.read(1), 0, "Button 1");
        assert(s.read(1), 1, "Button 2");
        assert(s.read(11), 0, "Buttons 3-13");
        assert(s.read(1), 1, "Button 14");
    }
}

let HIDDeviceView = class HIDDeviceView extends s {
    constructor(device) {
        super();
        this.test = false;
        this.vendorId = 0;
        this.productId = 0;
        this.productName = "";
        this.device = device;
    }
    // This function is called once after the first call to 'update'
    // This is the first time that the properties will be reflected properly
    firstUpdated() {
        // No need to run this code if we are in test mode.
        if (this.test)
            return;
        if (this.device == undefined) {
            // If a device wasn't set in the constructor, try and find a matching device from our attributes
            navigator.hid.getDevices().then((devices) => {
                let device = devices.find(d => d.vendorId == this.vendorId && d.productId == this.productId, this);
                this.setDevice(device);
            });
        }
        else {
            // Otherwise, setup based on the device that was given
            this.setDevice(this.device);
        }
    }
    setDevice(device) {
        if (device) {
            this.device = device;
            this.vendorId = device.vendorId;
            this.productId = device.productId;
            this.productName = device.productName;
            for (let collection of device.collections) {
                let collectionView = new HIDCollectionInfoView(collection);
                this.appendChild(collectionView);
            }
            device.open();
            this.device.oninputreport = (e) => this.processInputReport(e);
        }
    }
    processInputReport(report) {
        let { device, reportId, data } = report;
        this.lastReport = new Uint8Array(data.buffer);
        let stream = new BitInputStream(this.lastReport, 0, data.byteLength);
        // TODO: Make sure we pass this to the correct reportID
        // Iterate over the children that are of type HIDLitElelement
        this.childNodes.forEach((e) => {
            if (e instanceof HIDLitElement) {
                e.processStream(stream);
            }
        });
    }
    dumpLastReport() {
        console.log(this.lastReport || "");
    }
    render() {
        var _a, _b;
        return $ `
        <h1>Device</h1>
        <p>Product Name : ${this.productName}
        Product Id: ${(_a = this.productId) === null || _a === void 0 ? void 0 : _a.toString()}
        Vendor Id : ${(_b = this.vendorId) === null || _b === void 0 ? void 0 : _b.toString()}
        <slot></slot>
        `;
    }
};
__decorate([
    e({ type: Boolean })
], HIDDeviceView.prototype, "test", void 0);
__decorate([
    e({ type: Number })
], HIDDeviceView.prototype, "vendorId", void 0);
__decorate([
    e({ type: Number })
], HIDDeviceView.prototype, "productId", void 0);
__decorate([
    e({ type: String })
], HIDDeviceView.prototype, "productName", void 0);
HIDDeviceView = __decorate([
    n$1('hid-device')
], HIDDeviceView);

class HIDSelector {
    static select() {
        try {
            navigator.hid.requestDevice({ filters: [] }).then((devices) => {
                let device = devices[0];
                if (device) {
                    document.body.appendChild(new HIDDeviceView(device));
                    //                    document.body.innerHTML += "<hid-device vendorid='" + device.vendorId + "' productid='" + device.productId + "'></hid-device>";
                }
            });
        }
        catch (error) {
            console.log("An error occurred.");
        }
    }
}

export { BitInputStream, BitView, HIDCollectionInfoView, HIDDecode, HIDDeviceView, HIDLitElement, HIDReportInfoView, HIDReportItemView, HIDReportType, HIDSelector, HIDUsageView };
//# sourceMappingURL=multi-entry.js.map
