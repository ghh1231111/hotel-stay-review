"use strict";

// 文案只在当前页面中生成；用户在平台 App 中核对并提交。
const reviewBank = {
  卫生: [
    "房间收拾得很干净，床单和被套看起来整洁，卫生间也没有异味。入住时第一感觉就挺舒服，住下来很安心。",
    "进门后感觉房间清爽，桌面、地面和浴室都打扫得比较仔细。对出门住酒店的人来说，卫生做好了就很加分。",
    "这次入住最满意的是卫生，房间各处看着都整洁，洗漱区也很干净。整体体验比较省心。"
  ],
  服务: [
    "前台服务态度热情但不谄媚，让人感觉很舒服。入住时详细讲解了房间设施的使用方法，很专业。",
    "到店后办理入住很顺利，工作人员说话耐心，有问题也愿意帮忙处理。这样的服务让旅途轻松了不少。",
    "从办理入住到离店，遇到的工作人员都很友善。需要帮忙的时候回应也及时，整体服务令人满意。"
  ],
  交通: [
    "酒店的位置比较方便，出门找车、吃饭都不费事。第一次来附近也容易找到，行程安排省了不少心。",
    "周边交通挺便利，去计划中的几个地方都比较顺路。对短途出行来说，这一点很实用。",
    "从酒店出发去附近景点和商圈都方便，路线也好找。住在这里，出行时间更好安排。"
  ],
  性价比: [
    "对比了周边好几家酒店，这家性价比最高。价格便宜但品质不输星级酒店，住得很满意。下次还选这家。",
    "出差住酒店最怕贵，这家价格亲民但体验超出预期。该有的都有，不该省的一个没省，老板太良心了。",
    "预算有限时选了这家，住下来觉得挺划算。房间该有的设施齐全，卫生和服务也都照顾到了。"
  ],
  设施: [
    "房间里常用的设施准备得比较齐全，使用起来也顺手。入住期间没有因为设备问题耽误安排。",
    "房间布局合理，设施用起来方便。办理入住后很快就能安顿下来，体验比较轻松。",
    "需要用到的设备基本都能找到，房间里的细节考虑得挺周到。住下来没有什么不便。"
  ],
  安静: [
    "晚上房间比较安静，休息时没有被走廊或外面的声音打扰。白天跑了一天，回来能好好睡一觉很重要。",
    "整体环境安静舒适，不会有很杂乱的感觉。入住期间休息得不错，对睡眠比较在意的人可以参考。",
    "住的这间房隔音体验不错，夜里没有明显噪声。环境让人放松，第二天起来状态也好。"
  ],
  早餐: [
    "早餐的选择够用，味道也不错。早上不用再临时找吃的，吃完就能按计划出门。",
    "早餐供应比较及时，常见的几样选择都有。对赶行程的人来说很方便，整体吃得满意。",
    "早上在酒店吃了早餐，食物新鲜，口味也合适。这个小细节给这次入住加了分。"
  ],
  床品: [
    "房间有两张床，试了一下都很舒服。被子有薄厚两种可以选择，空调房里盖薄的刚刚好。床品品质超出这个价位的预期！",
    "床垫软硬度对我来说比较合适，枕头和被子也用着舒服。白天在外面走累了，晚上能睡好很重要。",
    "这次对床品印象不错，床单被套整洁，躺下后比较放松。住了一晚，休息得挺好。"
  ],
  热水: [
    "洗澡时热水来得比较快，水温稳定，用起来省心。玩了一天回来冲个澡，整个人都放松了。",
    "热水供应充足，花洒使用顺手。这个细节做好了，晚上回房间会舒服很多。",
    "入住期间洗漱很方便，热水和水压都比较稳定。整体体验挺满意。"
  ],
  停车: [
    "自驾过来停车挺方便，到店后不用四处找车位。带着行李入住时，这点很省事。",
    "停车安排比较清楚，进出也顺利。对开车来住的人来说是个实在的优点。",
    "这次是自驾出行，酒店的停车条件帮我省了不少时间。入住体验因此更轻松。"
  ],
  周边: [
    "酒店附近吃饭和逛逛的选择不少，晚上出门走走也方便。住在这里安排周边行程很轻松。",
    "周边配套比较丰富，空闲时不愁没地方去。对第一次来这边的人也挺友好。",
    "从酒店去附近几个想去的地方都顺路，回来后吃饭也方便。位置给这次入住加了分。"
  ],
  WiFi: [
    "房间里的 WiFi 连接顺利，查路线、处理消息都没有耽误。出门在外，网络稳定很实用。",
    "入住后很快就连上了网络，日常使用速度够用。晚上看视频和联系朋友也比较顺畅。",
    "网络使用体验不错，连接简单，入住期间没有遇到明显的卡顿。"
  ],
  通用: [
    "这次入住整体很顺利，房间住着舒服，办理入住也方便。对这次选择比较满意。",
    "房间实际情况和预期差不多，住下来比较舒心。卫生、服务和位置都有照顾到。",
    "整体体验不错，入住过程顺畅，房间也适合休息。下次来附近还会考虑这里。",
    "住了一晚感觉挺省心，房间整洁，服务也到位。给后来入住的人一个参考。",
    "这次选择比较合适，从到店到离开都没有遇到什么麻烦。住得舒适，愿意推荐。"
  ]
};

const endings = [
  "整体住下来比较省心，给后来入住的人一个真实参考。",
  "如果下次还来附近，应该还会优先考虑这家。",
  "对普通住客来说，干净、方便、舒服，这几点做到就很加分。",
  "整体体验对得起价格，也愿意推荐给有需要的朋友。"
];

const platforms = {
  meituan: {
    name: "美团",
    intent: "intent://www.meituan.com/#Intent;scheme=imeituan;package=com.sankuai.meituan;end",
    scheme: "imeituan://www.meituan.com",
    web: "https://i.meituan.com/",
    route: "美团 → 我的 → 待评价/订单 → 粘贴文案 → 提交"
  },
  ctrip: {
    name: "携程",
    intent: "intent://wireless/#Intent;scheme=ctrip;package=ctrip.android.view;end",
    scheme: "ctrip://wireless",
    web: "https://m.ctrip.com/webapp/myctrip/",
    route: "携程 → 我的 → 全部订单 → 找到订单 → 评价 → 粘贴"
  },
  fliggy: {
    name: "飞猪",
    intent: "intent://m.fliggy.com/#Intent;scheme=fliggy;package=com.taobao.trip;end",
    scheme: "fliggy://",
    web: "https://m.fliggy.com/",
    route: "飞猪 → 我的 → 全部订单 → 找到订单 → 评价 → 粘贴"
  }
};

const state = { rating: 0, tags: [], platform: "meituan", used: new Set() };
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const isWechat = () => /MicroMessenger/i.test(navigator.userAgent);
const isAndroid = () => /Android/i.test(navigator.userAgent);

function selectRating(button) {
  state.rating = Number(button.dataset.rating);
  $$(".rating-button").forEach((item) => {
    const active = item === button;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-pressed", String(active));
  });
  $("#generateButton").disabled = false;
}

function toggleTag(button) {
  const tag = button.dataset.tag;
  const active = !state.tags.includes(tag);
  state.tags = active ? [...state.tags, tag] : state.tags.filter((item) => item !== tag);
  button.classList.toggle("is-active", active);
  button.setAttribute("aria-pressed", String(active));
}

function selectPlatform(button) {
  state.platform = button.dataset.platform;
  $$(".platform-button").forEach((item) => {
    const active = item === button;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-pressed", String(active));
  });
  if (!$("#resultCard").hidden) showJumpHint();
}

function appUrl(platform) {
  return isAndroid() ? platform.intent : platform.scheme;
}

function composeReview() {
  const sourceTags = state.tags.length ? state.tags : ["通用"];
  let pool = sourceTags.flatMap((tag) => reviewBank[tag].map((text, index) => ({ tag, index, text })));
  if (pool.length < 5) {
    pool = pool.concat(reviewBank.通用.map((text, index) => ({ tag: "通用", index, text })));
  }
  let available = pool.filter(({ tag, index }) => !state.used.has(`${tag}:${index}`));
  if (!available.length) {
    state.used.clear();
    available = pool;
  }
  const first = available[Math.floor(Math.random() * available.length)];
  state.used.add(`${first.tag}:${first.index}`);
  let text = first.text;

  if (state.tags.length >= 2 && Math.random() < 0.75) {
    const alternatives = state.tags.filter((tag) => tag !== first.tag);
    if (alternatives.length) {
      const tag = alternatives[Math.floor(Math.random() * alternatives.length)];
      const extra = reviewBank[tag][Math.floor(Math.random() * reviewBank[tag].length)];
      text += `另外，${extra.split("。").filter(Boolean).slice(0, 2).join("。")}。`;
    }
  }
  if (Math.random() < 0.65) text += endings[Math.floor(Math.random() * endings.length)];
  if (state.rating === 4) {
    text = text.replaceAll("五星好评", "好评").replaceAll("满分", "高分").replaceAll("五星", "四星");
    text = text.replaceAll("超出预期", "符合预期").replaceAll("太惊喜了", "还不错");
  }
  return text;
}

function showJumpHint(message) {
  const platform = platforms[state.platform];
  $$(".jump-button").forEach((button) => {
    button.classList.toggle("is-secondary", button.dataset.jump !== state.platform);
  });
  const hint = $("#jumpHint");
  if (message) {
    hint.replaceChildren(message);
    return;
  }
  if (isWechat()) {
    hint.innerHTML = `💡 <strong>文案已生成。</strong><br>复制后点下方“打开${platform.name}App”会直接尝试跳转；若微信拦截，请点右上角“…” → <strong>在浏览器打开</strong>，再点对应按钮。`;
  } else {
    hint.innerHTML = `💡 <strong>操作指引：</strong><br>1. 复制文案<br>2. 点“打开${platform.name}App”<br>3. ${platform.route}`;
  }
}

function generateReview() {
  if (!state.rating) return;
  $("#resultText").textContent = composeReview();
  $("#resultCard").hidden = false;
  $("#copyButton").textContent = "📋 复制文案";
  $("#copyButton").classList.remove("is-copied");
  showJumpHint();
  $("#resultCard").scrollIntoView({ behavior: "smooth", block: "center" });
}

async function copyReview() {
  const text = $("#resultText").textContent;
  let copied = false;
  try {
    await navigator.clipboard.writeText(text);
    copied = true;
  } catch (_) {
    const field = document.createElement("textarea");
    field.value = text;
    field.style.cssText = "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0";
    document.body.append(field);
    field.focus();
    field.select();
    field.setSelectionRange(0, text.length);
    try { copied = document.execCommand("copy"); } catch (_) {}
    field.remove();
  }
  if (!copied) {
    showJumpHint("复制失败，请长按上方文案手动复制，再点下方打开平台 App。");
    return;
  }
  $("#copyButton").textContent = "✅ 已复制，点下方打开平台";
  $("#copyButton").classList.add("is-copied");
  showJumpHint();
}

function jumpTo(button) {
  const platform = platforms[button.dataset.jump];
  state.platform = button.dataset.jump;
  selectPlatform($(`.platform-button[data-platform="${state.platform}"]`));
  const fallback = isWechat()
    ? `如果微信没有打开 App，请点右上角“…” → <strong>在浏览器打开</strong>，再点对应按钮。`
    : `如果没有跳转，请手动打开 App；也可<a href="${platform.web}" target="_blank" rel="noopener noreferrer">进入${platform.name}手机版网页</a>。`;
  $("#jumpHint").innerHTML = `💡 <strong>正在尝试打开${platform.name}App。</strong><br>${platform.route}<br>${fallback}`;
}

document.addEventListener("DOMContentLoaded", () => {
  if (isWechat()) $("#wechatGuide").hidden = false;
  $$(".jump-button").forEach((button) => { button.href = appUrl(platforms[button.dataset.jump]); });
  $$(".rating-button").forEach((button) => button.addEventListener("click", () => selectRating(button)));
  $$(".tag-button").forEach((button) => button.addEventListener("click", () => toggleTag(button)));
  $$(".platform-button").forEach((button) => button.addEventListener("click", () => selectPlatform(button)));
  $$(".jump-button").forEach((button) => button.addEventListener("click", () => jumpTo(button)));
  $("#generateButton").addEventListener("click", generateReview);
  $("#againButton").addEventListener("click", generateReview);
  $("#copyButton").addEventListener("click", copyReview);
});
