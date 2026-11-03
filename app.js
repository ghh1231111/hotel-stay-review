"use strict";

// 文案只在当前页面中生成；用户在平台 App 中核对并提交。
const reviewBank = {
  口味: [
    "这次点的菜很合口味，调味吃着舒服。吃完觉得这顿饭选得挺合适。",
    "菜品的味道不错，吃起来比较顺口。对这次用餐的口味体验很满意。",
    "这家最让我满意的是菜的味道，调味合适，吃起来挺有滋味。愿意为了这个口味再来。"
  ],
  食材: [
    "食材吃起来挺新鲜，口感也不错。对在意食材的人来说，这一点很加分。",
    "这次吃下来觉得食材的新鲜度不错，菜品入口的感觉挺好。整体吃得满意。",
    "对这顿饭的食材比较满意，新鲜度和口感都符合预期。吃得舒服，也愿意留下个好评。"
  ],
  服务: [
    "店员态度热情，沟通起来也有耐心。用餐过程中有需要时能得到回应，让人感觉挺舒服。",
    "从到店到吃完，服务都比较周到。店员说话客气，整顿饭吃得很轻松。",
    "这次对服务印象不错，店员友善，有需要时也愿意帮忙。服务做好了，用餐心情也会更好。"
  ],
  环境: [
    "店里的用餐环境挺舒服，坐下来吃饭很放松。整体氛围让这顿饭多了几分惬意。",
    "用餐空间给人的感觉不错，待着比较自在。吃饭的时候能放松下来，这点挺满意。",
    "这次对店里的环境印象不错，氛围舒适，坐着吃饭不局促。整体用餐感受挺好。"
  ],
  卫生: [
    "店里的桌面和餐具看着都很干净，用餐区域也整洁。坐下来吃饭比较安心。",
    "用餐时留意了一下卫生，桌椅和餐具都收拾得比较清爽。这个细节让我挺满意。",
    "店内整体干净整洁，桌面也收拾得利落。卫生做好了，吃饭的体验会舒服很多。"
  ],
  性价比: [
    "按这次的花费来看，吃下来觉得挺划算。日常想在外面吃顿饭，这家值得考虑。",
    "这顿饭的价格和实际体验比较匹配，吃完觉得钱花得值。性价比让我挺满意。",
    "这次用餐的整体体验对得起价格，吃下来觉得比较值。是愿意再考虑的一家店。"
  ],
  分量: [
    "菜品的分量挺实在，按自己的食量点下来，吃得比较满足。对分量的预期也比较好把握。",
    "这次对菜的分量很满意，上桌后感觉比较实在。吃下来饱足感不错。",
    "菜品的分量比较合适，这顿饭吃得挺满足。对在意分量的人来说可以参考。"
  ],
  上菜: [
    "这次上菜比较及时，没有等太久。吃饭的节奏挺顺，整体体验不错。",
    "点单后出餐速度让我满意，菜陆续上来，吃着也比较从容。时间安排上挺省心。",
    "这顿饭的上菜节奏不错，等待时间在能接受的范围内。用餐过程比较顺畅。"
  ],
  摆盘: [
    "菜上桌时看着挺有食欲，摆盘能看出用了心。视觉上的小细节给这顿饭加了分。",
    "这次对菜品的摆盘印象不错，上桌后看着整齐，也愿意多看两眼。用餐时多了一点仪式感。",
    "菜品呈现比较用心，搭配看着舒服。吃饭时能感受到店家在摆盘上的心思。"
  ],
  聚餐: [
    "这次一起吃饭的体验挺好，坐下来边吃边聊，感觉很自在。以后聚餐还会考虑这里。",
    "几个人一起过来吃饭，整体安排比较顺心。想找地方聚一聚时，这家可以列入备选。",
    "这家挺适合大家一起吃顿饭、聊聊天。这次聚餐吃得放松，也留下了不错的印象。"
  ],
  位置: [
    "店的位置比较好找，过来吃饭没有绕太多路。想在附近找地方吃饭时，这里挺方便。",
    "过来比较顺利，门店也容易找到。来店里吃饭，找店的过程挺省心。",
    "这家店的位置让我挺满意，过来吃饭方便。下次在附近活动时还会考虑来这里。"
  ],
  停车: [
    "这次开车过来吃饭，停车比较方便。少了找车位的折腾，到店用餐也更轻松。",
    "停车的安排比较清楚，进出也顺利。对开车来吃饭的人来说，是个实在的优点。",
    "开车来这家店用餐，停车没有费太多工夫。这一点让整顿饭的体验更省心。"
  ],
  通用: [
    "这次来店里吃饭，整体体验让我满意。记录一下这次感受，给想来尝试的人作个参考。",
    "这顿饭吃下来感觉不错，对这次的选择比较满意。有机会还会再来尝试。",
    "这次用餐的感受挺好，整体符合预期。愿意把这家店分享给想在附近吃饭的朋友。",
    "来这里吃了一顿饭，整体体验比较顺心。留下这次感受，供大家选店时参考。",
    "这次选了这家店，用餐后觉得挺合适。以后想在附近吃饭时，还会考虑这里。"
  ]
};

const endings = [
  "记录一下这次用餐感受，给大家选店时作个参考。",
  "下次在附近想吃饭时，还会考虑这家。",
  "有机会再来，想试试店里的其他菜品。",
  "这顿饭吃得满意，愿意分享给想来尝试的朋友。"
];

const platforms = {
  meituan: {
    name: "美团",
    intent: "intent://www.meituan.com/#Intent;scheme=imeituan;package=com.sankuai.meituan;end",
    scheme: "imeituan://www.meituan.com",
    web: "https://i.meituan.com/",
    route: "在美团找到本次用餐的门店或订单，进入评价页，核对文案后粘贴并发布。"
  },
  dianping: {
    name: "大众点评",
    intent: "intent://#Intent;scheme=dianping;package=com.dianping.v1;end",
    scheme: "dianping://",
    web: "https://m.dianping.com/",
    route: "在大众点评找到本次用餐的门店，进入评价页，核对文案后粘贴并发布。"
  }
};

const state = { rating: 0, tags: [], platform: "meituan", used: new Set(), copied: false };
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
    text = text.replaceAll("很满意", "比较满意");
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
  const copyStep = state.copied ? "文案已复制 ✅" : "先点“复制文案”";
  if (isWechat()) {
    hint.innerHTML = `💡 <strong>${copyStep}</strong><br>当前在微信里，可能无法直接打开App。<br><strong>请点右上角“…” → 在浏览器打开</strong>，再点“打开${platform.name}App”。`;
  } else {
    hint.innerHTML = `💡 <strong>操作指引：</strong><br>1. ${copyStep}<br>2. 点“打开${platform.name}App”<br>3. ${platform.route}`;
  }
}

function generateReview() {
  if (!state.rating) return;
  $("#resultText").textContent = composeReview();
  state.copied = false;
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
    field.style.cssText = "position:fixed;opacity:0;top:0";
    document.body.append(field);
    field.select();
    copied = document.execCommand("copy");
    field.remove();
  }
  if (!copied) {
    showJumpHint("复制失败，请长按上方文案手动复制。");
    return;
  }
  state.copied = true;
  $("#copyButton").textContent = "✅ 已复制，点下方打开平台";
  $("#copyButton").classList.add("is-copied");
  showJumpHint();
}

function jumpTo(button) {
  const platform = platforms[button.dataset.jump];
  state.platform = button.dataset.jump;
  selectPlatform($(`.platform-button[data-platform="${state.platform}"]`));
  if (isWechat()) {
    $("#wechatGuide").hidden = false;
    const copyHint = state.copied ? "文案已复制，可在评价页粘贴。" : "请先复制上方文案，再到评价页粘贴。";
    $("#jumpHint").innerHTML = `💡 <strong>微信里可能无法打开${platform.name}App。</strong><br>请点右上角“…” → <strong>在浏览器打开</strong>，然后再次点击“打开${platform.name}App”。${copyHint}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  $("#jumpHint").innerHTML = `💡 <strong>正在尝试打开${platform.name}App。</strong><br>${platform.route}<br>如果没有跳转，请手动打开 App；也可<a href="${platform.web}" target="_blank" rel="noopener noreferrer">进入${platform.name}手机版网页</a>。`;
  window.location.href = isAndroid() ? platform.intent : platform.scheme;
}

document.addEventListener("DOMContentLoaded", () => {
  if (isWechat()) $("#wechatGuide").hidden = false;
  $$(".rating-button").forEach((button) => button.addEventListener("click", () => selectRating(button)));
  $$(".tag-button").forEach((button) => button.addEventListener("click", () => toggleTag(button)));
  $$(".platform-button").forEach((button) => button.addEventListener("click", () => selectPlatform(button)));
  $$(".jump-button").forEach((button) => button.addEventListener("click", () => jumpTo(button)));
  $("#generateButton").addEventListener("click", generateReview);
  $("#againButton").addEventListener("click", generateReview);
  $("#copyButton").addEventListener("click", copyReview);
});
