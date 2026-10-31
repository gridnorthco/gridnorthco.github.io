/* GridNorthCo Christmas art set: original SVG illustrations (night + storybook palettes) */
(function (g) {
  "use strict";
  const PAL = {
    night: {
      sky1: "#0A1338", sky2: "#1B2D6B", sky3: "#33478F", star: "#FFF6D8", moon: "#FFF1C9", moonGlow: "rgba(255,236,180,.28)",
      hill1: "#DCE6F7", hill2: "#C3D2EE", hill3: "#A9BDE3", snow: "#FFFFFF", shadow: "#B4C4E6",
      house1: "#7A3B3B", house2: "#3E4F86", house3: "#8A5A3C", roof: "#F4F8FF", window: "#FFD36B", door: "#4A2A20",
      pine: "#1E4A47", pine2: "#2A6158", trunk: "#5B3A29", silhouette: "#0C1740",
      red: "#D7263D", redDark: "#A8172B", white: "#FFFFFF", skin: "#F6C9A9", cheek: "#F2919A", nose: "#E98C7B",
      ink: "#1D2340", gold: "#F2B630", green: "#2E8B57", brown: "#6E4A33", carrot: "#F08A24", fur: "#8B5E3C", furDark: "#6B4329"
    },
    story: {
      sky1: "#FBF1E1", sky2: "#F6E2C6", sky3: "#F1D3AE", star: "#E0A526", moon: "#FFF9EC", moonGlow: "rgba(224,165,38,.18)",
      hill1: "#FFFFFF", hill2: "#F3ECE2", hill3: "#E9DFD2", snow: "#FFFFFF", shadow: "#E2D6C7",
      house1: "#C8102E", house2: "#1F5C3F", house3: "#B9783F", roof: "#FFFFFF", window: "#F6C25B", door: "#5A3220",
      pine: "#1F5C3F", pine2: "#2F7A52", trunk: "#6B4329", silhouette: "#7A2E2E",
      red: "#C8102E", redDark: "#97102A", white: "#FFFFFF", skin: "#F4C3A0", cheek: "#EE8E92", nose: "#E2877A",
      ink: "#3A2A22", gold: "#E0A526", green: "#1F5C3F", brown: "#6B4329", carrot: "#EE7F22", fur: "#9A6A44", furDark: "#73492D"
    }
  };

  /* ---------- characters ---------- */
  function reindeer(p, o = {}) {
    const m = o.mono, c = (k) => m || p[k];
    const legs = (x, y, a, b, cls) => `<g class="${cls}" style="transform-origin:${x}px ${y}px"><path d="M${x} ${y} L${x + a} ${y + 11}" /><path d="M${x - 2} ${y + 1} L${x + b} ${y + 12}" /></g>`;
    return `<g class="reindeer">
      <g stroke="${c("furDark")}" stroke-width="3.2" stroke-linecap="round" fill="none">
        ${legs(19, 26, -8, -4, "leg-b")}${legs(37, 26, 8, 3, "leg-f")}
      </g>
      <ellipse cx="12.5" cy="18" rx="3.2" ry="2.4" fill="${m || p.white}"/>
      <ellipse cx="28" cy="22" rx="15" ry="7.6" fill="${c("fur")}"/>
      <path d="M36 17 L43 6 L49 8 L44 21 Z" fill="${c("fur")}"/>
      <ellipse cx="49" cy="7.5" rx="6" ry="4" fill="${c("fur")}" transform="rotate(18 49 7.5)"/>
      <ellipse cx="54.5" cy="10" rx="3.4" ry="2.5" fill="${c("fur")}"/>
      ${m ? "" : `<circle cx="57.4" cy="10.4" r="1.7" fill="${p.furDark}"/><circle cx="50" cy="5.6" r="1.1" fill="${p.ink}"/>`}
      <path d="M45 3.5 L42 1 L45.5 0.8 Z" fill="${c("furDark")}"/>
      <g stroke="${c("furDark")}" stroke-width="1.8" stroke-linecap="round" fill="none">
        <path d="M46 3 C44 -2 41 -5 36 -7"/><path d="M42.5 -2.2 L38.5 -1.4"/><path d="M40 -4.6 L38.5 -8.6"/>
        <path d="M48.5 2.6 C48 -2 47.5 -5 50 -9"/><path d="M48.2 -2.4 L51.8 -3.4"/><path d="M48.6 -6 L46.4 -9.6"/>
      </g>
      ${m ? "" : `<path d="M36 18 Q 40 22 44 18" stroke="${p.red}" stroke-width="2.4" fill="none"/><circle cx="40" cy="21.4" r="1.6" fill="${p.gold}"/>`}
    </g>`;
  }

  function santaInSleigh(p, o = {}) {
    const m = o.mono, c = (k) => m || p[k];
    return `<g class="sleigh">
      <path d="M8 2 C2 -10 18 -16 22 -6 C27 -14 38 -10 32 2 Z" fill="${c("brown")}"/>
      <rect x="10" y="-6" width="9" height="8" rx="1.5" fill="${m || p.gold}"/><rect x="21" y="-9" width="8" height="10" rx="1.5" fill="${m || p.green}"/>
      <g class="santa-body">
        <circle cx="31" cy="0" r="9" fill="${c("red")}"/>
        <circle cx="34" cy="-11" r="6" fill="${c("skin")}"/>
        <path d="M28.5 -10 Q 34 0 39.6 -10 Q 39 -3 34 -2 Q 29 -3 28.5 -10 Z" fill="${m || p.white}"/>
        <path d="M28 -14 Q 33 -26 41 -19 L40 -14 Z" fill="${c("red")}"/>
        <rect x="27.5" y="-15.5" width="13" height="3.4" rx="1.7" fill="${m || p.white}"/>
        <circle cx="41.5" cy="-19.5" r="2.2" fill="${m || p.white}"/>
        <path class="santa-arm" d="M36 -2 L44 -12" stroke="${c("red")}" stroke-width="4" stroke-linecap="round" style="transform-origin:36px -2px"/>
      </g>
      <path d="M2 18 Q 2 2 14 4 L42 4 Q 47 4 47.5 10 L49 22 Q 49 26 43 26 L8 26 Q 2 26 2 18 Z" fill="${c("redDark")}"/>
      <path d="M8 9 Q 24 13 44 8" stroke="${m || p.gold}" stroke-width="2" fill="none"/>
      <g stroke="${m || p.gold}" stroke-width="2.2" fill="none" stroke-linecap="round">
        <path d="M-6 32 L44 32 Q 54 32 52 22"/><path d="M12 26 L10 32"/><path d="M38 26 L40 32"/>
      </g>
    </g>`;
  }

  /* team flying right; viewBox ~ 0 0 260 60 */
  function sleighTeam(p, o = {}) {
    const m = o.mono, line = m || p.gold;
    return `<g class="team">
      <path d="M52 34 Q 90 30 112 32 M52 34 Q 110 34 176 32" stroke="${line}" stroke-width="1.2" fill="none" opacity=".9"/>
      <g transform="translate(0 6)">${santaInSleigh(p, o)}</g>
      <g transform="translate(104 12)" class="rd rd2">${reindeer(p, o)}</g>
      <g transform="translate(168 6)" class="rd rd1">${reindeer(p, o)}</g>
    </g>`;
  }

  function snowman(p, o = {}) {
    return `<g class="snowman">
      <ellipse cx="50" cy="140" rx="40" ry="6" fill="${p.shadow}" opacity=".7"/>
      <circle cx="50" cy="108" r="33" fill="${p.snow}"/><path d="M24 118 A33 33 0 0 0 76 118 A40 40 0 0 1 24 118 Z" fill="${p.shadow}" opacity=".55"/>
      <circle cx="50" cy="62" r="24" fill="${p.snow}"/><path d="M32 70 A24 24 0 0 0 68 70 A30 30 0 0 1 32 70 Z" fill="${p.shadow}" opacity=".5"/>
      <circle cx="50" cy="28" r="18" fill="${p.snow}"/>
      <g stroke="${p.brown}" stroke-width="2.6" stroke-linecap="round" fill="none">
        <path d="M28 60 L6 48"/><path d="M14 52 L10 42"/><path d="M14 52 L4 54"/>
        <g class="snow-arm" style="transform-origin:72px 60px"><path d="M72 60 L92 42"/><path d="M86 47 L94 46"/><path d="M86 47 L88 38"/></g>
      </g>
      <circle cx="50" cy="56" r="2.6" fill="${p.ink}"/><circle cx="50" cy="66" r="2.6" fill="${p.ink}"/><circle cx="50" cy="98" r="2.8" fill="${p.ink}"/>
      <circle cx="43.5" cy="24" r="2.3" fill="${p.ink}"/><circle cx="56.5" cy="24" r="2.3" fill="${p.ink}"/>
      <path d="M49 29 L64 32 L49 33 Z" fill="${p.carrot}"/>
      <g fill="${p.ink}"><circle cx="42" cy="36" r="1.2"/><circle cx="46" cy="38.2" r="1.2"/><circle cx="50.5" cy="38.8" r="1.2"/><circle cx="55" cy="38" r="1.2"/><circle cx="58.6" cy="35.8" r="1.2"/></g>
      <circle cx="40" cy="31" r="2.6" fill="${p.cheek}" opacity=".55"/><circle cx="60" cy="31" r="2.6" fill="${p.cheek}" opacity=".55"/>
      <path d="M31 43 Q 50 52 69 43 L69 49 Q 50 58 31 49 Z" fill="${p.red}"/>
      <path d="M58 48 L66 72 L58 74 L53 50 Z" fill="${p.red}"/><path d="M58 70 L66 72 L58 74 Z" fill="${p.redDark}"/>
      <rect x="31" y="9" width="38" height="5" rx="2.5" fill="${p.ink}"/>
      <path d="M37 10 L39 -12 L61 -12 L63 10 Z" fill="${p.ink}"/><rect x="38" y="2" width="24" height="5" fill="${p.red}"/>
      <path d="M58 4 l3 -4 l3 4 l-3 3 z" fill="${p.green}"/><circle cx="61" cy="4" r="1.6" fill="${p.red}"/>
    </g>`;
  }

  function santaFace(p) {
    return `<g class="santa-face">
      <path d="M22 50 C24 18 60 4 92 18 C104 24 108 36 104 46 L22 50 Z" fill="${p.red}"/>
      <path d="M86 16 C100 18 112 30 110 44" stroke="${p.red}" stroke-width="12" stroke-linecap="round" fill="none"/>
      <circle cx="110" cy="48" r="9" fill="${p.white}"/>
      <circle cx="64" cy="66" r="26" fill="${p.skin}"/>
      <rect x="16" y="40" width="94" height="17" rx="8.5" fill="${p.white}"/>
      <g class="blink"><ellipse cx="54" cy="64" rx="2.8" ry="3.4" fill="${p.ink}"/><ellipse cx="74" cy="64" rx="2.8" ry="3.4" fill="${p.ink}"/></g>
      <circle cx="55" cy="62.8" r="1" fill="#fff"/><circle cx="75" cy="62.8" r="1" fill="#fff"/>
      <path d="M48 58 Q 54 55 59 58 M69 58 Q 74 55 80 58" stroke="${p.white}" stroke-width="3.4" stroke-linecap="round" fill="none"/>
      <circle cx="46" cy="72" r="5" fill="${p.cheek}" opacity=".6"/><circle cx="82" cy="72" r="5" fill="${p.cheek}" opacity=".6"/>
      <path d="M36 70 C30 92 44 118 64 126 C84 118 98 92 92 70 C86 84 78 88 64 88 C50 88 42 84 36 70 Z" fill="${p.white}"/>
      <path d="M64 80 C56 74 44 78 42 86 C50 84 58 86 64 83 C70 86 78 84 86 86 C84 78 72 74 64 80 Z" fill="${p.white}" stroke="${p.shadow}" stroke-width="1"/>
      <circle cx="64" cy="73" r="5.5" fill="${p.nose}"/>
      <path d="M58 92 Q 64 97 70 92" stroke="${p.redDark}" stroke-width="2.4" stroke-linecap="round" fill="none"/>
    </g>`;
  }

  function present(p, x, y, w, h, col, rib) {
    return `<g class="gift"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${col}"/>
      <rect x="${x + w / 2 - 3.5}" y="${y}" width="7" height="${h}" fill="${rib}"/><rect x="${x}" y="${y + h * 0.32}" width="${w}" height="6" fill="${rib}"/>
      <path d="M${x + w / 2} ${y} c-10 -12 -18 -2 -10 2 z M${x + w / 2} ${y} c10 -12 18 -2 10 2 z" fill="${rib}"/></g>`;
  }

  function pine(p, x, y, s, o = {}) {
    const k = s / 100;
    return `<g transform="translate(${x} ${y}) scale(${k})">
      <rect x="-7" y="-16" width="14" height="18" fill="${p.trunk}"/>
      <path d="M0 -150 L34 -96 L18 -96 L46 -54 L26 -54 L56 -12 L-56 -12 L-26 -54 L-46 -54 L-18 -96 L-34 -96 Z" fill="${o.alt ? p.pine2 : p.pine}"/>
      <path d="M0 -150 L16 -124 Q 6 -118 0 -124 Q -8 -116 -16 -124 Z M-30 -90 Q -16 -82 -6 -90 Q 8 -80 24 -88 L18 -96 L-18 -96 Z M-40 -50 Q -22 -42 -4 -50 Q 14 -40 38 -48 L26 -54 L-26 -54 Z" fill="${p.snow}" opacity=".95"/>
      ${o.lights ? [[-20, -40], [14, -30], [-6, -70], [20, -66], [-28, -22], [30, -18], [4, -104], [-10, -118]].map(([a, b], i) => `<circle class="bulb b${i % 3}" cx="${a}" cy="${b}" r="4" fill="${[p.red, p.gold, p.window][i % 3]}"/>`).join("") : ""}
      ${o.star ? `<path class="treestar" d="M0 -168 l5 11 12 1 -9 8 3 12 -11 -7 -11 7 3 -12 -9 -8 12 -1z" fill="${p.gold}"/>` : ""}
    </g>`;
  }

  function house(p, x, y, w, h, wall, o = {}) {
    const roofH = h * 0.55;
    const wins = o.wins || 2, ww = w * 0.2;
    let win = "";
    for (let i = 0; i < wins; i++) {
      const wx = x + w * (0.18 + (i * (0.64 - ww / w)) / Math.max(1, wins - 1)), wy = y + h * 0.28;
      win += `<rect class="win w${i % 3}" x="${wx}" y="${wy}" width="${ww}" height="${ww * 1.1}" rx="2" fill="${p.window}"/><path d="M${wx + ww / 2} ${wy} v${ww * 1.1} M${wx} ${wy + ww * 0.55} h${ww}" stroke="${wall}" stroke-width="1.6" opacity=".55"/>`;
    }
    return `<g class="house">
      ${o.chimney ? `<rect x="${x + w * 0.68}" y="${y - roofH * 0.85}" width="${w * 0.13}" height="${roofH * 0.7}" fill="${p.house3}"/><rect x="${x + w * 0.66}" y="${y - roofH * 0.92}" width="${w * 0.17}" height="6" rx="3" fill="${p.roof}"/>
        <g class="smoke" fill="${p.roof}" opacity=".7"><circle cx="${x + w * 0.745}" cy="${y - roofH - 6}" r="5"/><circle cx="${x + w * 0.76}" cy="${y - roofH - 16}" r="6.5"/><circle cx="${x + w * 0.78}" cy="${y - roofH - 29}" r="8"/></g>` : ""}
      <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${wall}"/>
      <path d="M${x - w * 0.1} ${y + 4} L${x + w / 2} ${y - roofH} L${x + w * 1.1} ${y + 4} Z" fill="${p.roof}"/>
      <path d="M${x - w * 0.1} ${y + 4} q${w * 0.15} 10 ${w * 0.3} 0 q${w * 0.15} 10 ${w * 0.3} 0 q${w * 0.15} 10 ${w * 0.3} 0 q${w * 0.1} 8 ${w * 0.2} 0" fill="${p.roof}"/>
      ${win}
      <rect x="${x + w * 0.42}" y="${y + h * 0.58}" width="${w * 0.17}" height="${h * 0.42}" rx="${w * 0.08}" fill="${p.door}"/>
      ${o.wreath ? `<circle cx="${x + w * 0.505}" cy="${y + h * 0.7}" r="${w * 0.055}" fill="none" stroke="${p.green}" stroke-width="3"/><circle cx="${x + w * 0.505}" cy="${y + h * 0.7 + w * 0.055}" r="1.8" fill="${p.red}"/>` : ""}
    </g>`;
  }

  function stars(p, W, H, n, seed = 7) {
    let s = seed, out = "";
    const r = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
    for (let i = 0; i < n; i++) {
      const x = r() * W, y = r() * H, z = r();
      if (z > 0.86) out += `<path class="tw t${i % 4}" d="M${x} ${y - 5} L${x + 1.3} ${y - 1.3} L${x + 5} ${y} L${x + 1.3} ${y + 1.3} L${x} ${y + 5} L${x - 1.3} ${y + 1.3} L${x - 5} ${y} L${x - 1.3} ${y - 1.3} Z" fill="${p.star}"/>`;
      else out += `<circle class="tw t${i % 4}" cx="${x}" cy="${y}" r="${0.6 + z * 1.4}" fill="${p.star}" opacity="${0.45 + z * 0.55}"/>`;
    }
    return out;
  }

  /* full scene, viewBox 0 0 400 300 */
  function scene(name, o = {}) {
    const p = PAL[name] || PAL.night, W = 400, H = o.h || 300, id = "g" + name + (o.id || "");
    const night = name === "night";
    const mx = o.moonX ?? 290, my = o.moonY ?? 82, mr = o.moonR ?? 46;
    return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="scene ${name}" preserveAspectRatio="xMidYMax slice" role="img" aria-label="A snowy Christmas village">
      <defs>
        <linearGradient id="${id}s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${p.sky1}"/><stop offset=".65" stop-color="${p.sky2}"/><stop offset="1" stop-color="${p.sky3}"/></linearGradient>
        <radialGradient id="${id}m"><stop offset=".55" stop-color="${p.moonGlow}"/><stop offset="1" stop-color="rgba(0,0,0,0)"/></radialGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#${id}s)"/>
      ${stars(p, W, H * 0.62, night ? 70 : 26)}
      <circle cx="${mx}" cy="${my}" r="${mr * 2.1}" fill="url(#${id}m)"/>
      <circle cx="${mx}" cy="${my}" r="${mr}" fill="${p.moon}"/>
      ${night ? `<circle cx="${mx - 14}" cy="${my - 10}" r="${mr * 0.16}" fill="#F3E3B6"/><circle cx="${mx + 16}" cy="${my + 12}" r="${mr * 0.22}" fill="#F3E3B6"/><circle cx="${mx + 8}" cy="${my - 20}" r="${mr * 0.09}" fill="#F3E3B6"/>` : `<circle cx="${mx}" cy="${my}" r="${mr}" fill="none" stroke="${p.gold}" stroke-width="2" stroke-dasharray="2 6" opacity=".6"/>`}
      ${o.noSleigh ? "" : `<g class="flyer" style="--mx:${mx}px;--my:${my}px"><g transform="translate(${mx - 120} ${my - 30}) scale(.9)">${sleighTeam(p, { mono: night ? p.silhouette : null })}</g></g>`}
      <path d="M0 ${H * 0.66} Q 80 ${H * 0.58} 170 ${H * 0.65} T 400 ${H * 0.6} V ${H} H0 Z" fill="${p.hill3}"/>
      ${pine(p, 26, H * 0.68, 46, { alt: 1 })}${pine(p, 362, H * 0.64, 52)}${pine(p, 386, H * 0.67, 38, { alt: 1 })}
      <path d="M0 ${H * 0.76} Q 120 ${H * 0.68} 230 ${H * 0.75} T 400 ${H * 0.73} V ${H} H0 Z" fill="${p.hill2}"/>
      ${house(p, 58, H * 0.66, 64, 40, p.house1, { chimney: 1, wreath: 1 })}
      ${house(p, 146, H * 0.69, 50, 34, p.house2, { wins: 1 })}
      ${house(p, 236, H * 0.67, 70, 42, p.house3, { wins: 3, chimney: 1 })}
      ${pine(p, 214, H * 0.79, 44, { lights: 1, star: 1 })}
      <path d="M0 ${H * 0.86} Q 140 ${H * 0.79} 260 ${H * 0.86} T 400 ${H * 0.84} V ${H} H0 Z" fill="${p.hill1}"/>
      ${o.snowman === false ? "" : `<g transform="translate(318 ${H * 0.97 - 97}) scale(.62)">${snowman(p)}</g>`}
      ${o.gifts === false ? "" : present(p, 110, H * 0.93 - 22, 26, 22, p.red, p.gold) + present(p, 134, H * 0.93 - 16, 20, 16, p.green, p.white) + present(p, 92, H * 0.93 - 14, 18, 14, p.gold, p.red)}
    </svg>`;
  }

  const CSS = `
  .scene .tw{animation:tw 3.2s ease-in-out infinite}
  .scene .tw.t1{animation-delay:-.8s}.scene .tw.t2{animation-delay:-1.6s;animation-duration:4.1s}.scene .tw.t3{animation-delay:-2.4s;animation-duration:2.6s}
  @keyframes tw{0%,100%{opacity:1}50%{opacity:.25}}
  .scene .flyer{animation:fly 18s linear infinite}
  @keyframes fly{0%{transform:translate(-520px,40px)}55%{transform:translate(520px,-40px)}100%{transform:translate(520px,-40px)}}
  .scene .leg-f{animation:gal .42s ease-in-out infinite alternate}.scene .leg-b{animation:gal .42s ease-in-out infinite alternate-reverse}
  @keyframes gal{from{transform:rotate(-16deg)}to{transform:rotate(18deg)}}
  .scene .rd1{animation:bob .84s ease-in-out infinite alternate}.scene .rd2{animation:bob .84s ease-in-out infinite alternate-reverse}
  @keyframes bob{from{translate:0 -1.5px}to{translate:0 1.5px}}
  .santa-arm{animation:wave 1.1s ease-in-out infinite alternate}
  @keyframes wave{from{transform:rotate(-10deg)}to{transform:rotate(22deg)}}
  .snow-arm{animation:wave2 1.3s ease-in-out infinite alternate}
  @keyframes wave2{from{transform:rotate(-8deg)}to{transform:rotate(14deg)}}
  .scene .smoke circle{animation:smoke 3.6s ease-out infinite}
  .scene .smoke circle:nth-child(2){animation-delay:-1.2s}.scene .smoke circle:nth-child(3){animation-delay:-2.4s}
  @keyframes smoke{0%{transform:translateY(8px);opacity:0}30%{opacity:.75}100%{transform:translateY(-14px);opacity:0}}
  .scene .win{animation:glow 4s ease-in-out infinite}.scene .win.w1{animation-delay:-1.3s}.scene .win.w2{animation-delay:-2.6s}
  @keyframes glow{0%,100%{opacity:1}50%{opacity:.78}}
  .bulb{animation:bulb 1.6s steps(2) infinite}.bulb.b1{animation-delay:-.53s}.bulb.b2{animation-delay:-1.06s}
  @keyframes bulb{0%{opacity:1}50%{opacity:.35}}
  .treestar{animation:tw 2.4s ease-in-out infinite;transform-box:fill-box;transform-origin:center}
  .blink{animation:blink 4.5s infinite;transform-box:fill-box;transform-origin:center}
  @keyframes blink{0%,46%,50%,100%{transform:scaleY(1)}48%{transform:scaleY(.1)}}
  @media (prefers-reduced-motion:reduce){.scene *, .santa-arm, .snow-arm, .bulb, .blink{animation:none!important}.scene .flyer{transform:translate(0,0)}}
  `;

  g.XMAS = { PAL, scene, snowman, santaFace, sleighTeam, reindeer, present, pine, house, stars, CSS };
})(typeof window !== "undefined" ? window : globalThis);
