//////////////////////////////////////////////////////////////////////////配置区块////////////////////////////////////////////////////////////////////////
let 哎呀呀这是我的ID啊 = "hxjx2266"; //ID
let 哎呀呀这是我的VL密钥 = "36473099-8f32-4df3-aec7-76d6417bc339"; //UUID
let 私钥开关 = false
let 咦这是我的私钥哎 = ""; 
let 隐藏订阅 = false 
let 嘲讽语 = "哎呀你找到了我，但是我就是不给你看，气不气，嘿嘿嘿" 
let 我的优选 = [] 
let 我的优选TXT ='https://txt.ab12.dpdns.org/ip.txt?token=xu' 

let 启用反代功能 = true 
let 反代IP = ['ProxyIP.US.CMLiussss.net','ProxyIP.SG.CMLiussss.net','ProxyIP.JP.CMLiussss.net','ProxyIP.Oracle.CMLiussss.net',]
let 启用SOCKS5反代 = true
let 启用SOCKS5全局反代 = false 
let 我的SOCKS5账号 = ['test123:test123@23.158.200.158:1080','admin:admin@206.237.13.40:1080','123456:123456@141.11.87.132:1080','12345678:12345678@8.219.107.42:1080',]
let 我的节点名字 = 'CF-Workers' 

//////////////////////////////////////////////////////////////////////////流控配置////////////////////////////////////////////////////////////////////////
let 启动控流机制 = false; //选择是否启动控流机制，true启动，false关闭，使用控流可提升连接稳定性，适合轻度使用

//////////////////////////////////////////////////////////////////////////转发配置////////////////////////////////////////////////////////////////////////
//以下是副worker的地址，不需要绑自定义域，直接使用dev最快，支持多路并发【建议1-3】，请求数会指数级增长【同账号下的情况】，如果不想并发只想负载均衡的话，并发数量设置1就行
//并发的作用仅限于返回最快握手成功的连接，并不是同时返回数据之类的，副worker部署5-10个以上可以明显改善网络质量，适量部署以防出事哦^_^
const 并发数量 = 2;
const 转发地址 = ['2501ts2.pages.dev','2502ts2.pages.dev','2503ts2.pages.dev','2504ts2.pages.dev','2505ts2.pages.dev','2506ts2.pages.dev','2508ts2.pages.dev','2509ts2.pages.dev',];

//////////////////////////////////////////////////////////////////////////网页入口////////////////////////////////////////////////////////////////////////
export default {
  async fetch(访问请求) {
    const 读取我的请求标头 = 访问请求.headers.get('Upgrade');
    const 订阅地址 = new URL(访问请求.url);
    if (!读取我的请求标头 || 读取我的请求标头 !== 'websocket') {
      if (我的优选TXT) {
        const 读取优选文本 = await fetch(我的优选TXT);
        const 转换优选文本 = await 读取优选文本.text();
        const 优选节点 = 转换优选文本.split('\n').map(line => line.trim()).filter(line => line);
        我的优选 = 优选节点 || 我的优选
      }
      switch (订阅地址.pathname) {
        case `/${哎呀呀这是我的ID啊}`: {
          const 订阅页面 = 给我订阅页面(哎呀呀这是我的ID啊, 访问请求.headers.get('Host'));
          return new Response(`${订阅页面}`, {
            status: 200,
            headers: { "Content-Type": "text/plain;charset=utf-8" }
          });
        }
        case `/${哎呀呀这是我的ID啊}/${转码}${转码2}`: {
          if (隐藏订阅) {
            return new Response (`${嘲讽语}`, {
              status: 200,
              headers: { "Content-Type": "text/plain;charset=utf-8" }
            });
          } else {
            const 通用配置文件 = 给我通用配置文件(访问请求.headers.get('Host'));
            return new Response(`${通用配置文件}`, {
              status: 200,
              headers: { "Content-Type": "text/plain;charset=utf-8" }
            });
          }
        }
        case `/${哎呀呀这是我的ID啊}/${小猫}${咪}`: {
          if (隐藏订阅) {
            return new Response (`${嘲讽语}`, {
              status: 200,
              headers: { "Content-Type": "text/plain;charset=utf-8" }
            });
          } else {
            const 小猫咪配置文件 = 给我小猫咪配置文件(访问请求.headers.get('Host'));
            return new Response(`${小猫咪配置文件}`, {
              status: 200,
              headers: { "Content-Type": "text/plain;charset=utf-8" }
            });
          }
        }
        default:
          return new Response('Forbidden', { status: 403 });
      }
    } else if (读取我的请求标头 === 'websocket'){
      if (私钥开关) {
        const 验证我的私钥 = 访问请求.headers.get('my-key')
        if (验证我的私钥 === 咦这是我的私钥哎) {
          return await 负载均衡(访问请求);
        }
      } else {
        return await 负载均衡(访问请求);
      }
    }
  }
};
async function 负载均衡(访问请求) {
  读取我的加密访问内容数据头 = 访问请求.headers.get('sec-websocket-protocol');
  const 坻 = 使用64位加解密(读取我的加密访问内容数据头);
  await 验证VL密钥(坻);
  try {
    const 坼 = await 构建新请求();
    const 坽 = await Promise.any(
      坼.map(async (坾) => {
        const 坿 = await fetch(坾);
        return 坿.status === 101 ? 坿 : Promise.reject('状态码不是101');
      })
    )
    return 坽;
  } catch {
    return new Response('无可用WORKER, 检查地址', { status: 400 });
  }
}
function 使用64位加解密(还原混淆字符) {
  还原混淆字符 = 还原混淆字符.replace(/-/g, '+').replace(/_/g, '/');
  const 解密数据 = atob(还原混淆字符);
  const 解密_你_个_丁咚_咙_咚呛 = Uint8Array.from(解密数据, (c) => c.charCodeAt(0));
  return 解密_你_个_丁咚_咙_咚呛.buffer;
}
async function 验证VL密钥(垇) {
  if (!私钥开关 && 验证VL的密钥(new Uint8Array(垇.slice(1, 17))) !== 哎呀呀这是我的VL密钥) {
    return new Response('Forbidden', { status: 403 });
  }
}
function 验证VL的密钥(垈, 垉 = 0) {
  const 垊 = (
    转换密钥格式[垈[垉 + 0]] + 转换密钥格式[垈[垉 + 1]] +
    转换密钥格式[垈[垉 + 2]] + 转换密钥格式[垈[垉 + 3]] + "-" +
    转换密钥格式[垈[垉 + 4]] + 转换密钥格式[垈[垉 + 5]] + "-" +
    转换密钥格式[垈[垉 + 6]] + 转换密钥格式[垈[垉 + 7]] + "-" +
    转换密钥格式[垈[垉 + 8]] + 转换密钥格式[垈[垉 + 9]] + "-" +
    转换密钥格式[垈[垉 + 10]] + 转换密钥格式[垈[垉 + 11]] +
    转换密钥格式[垈[垉 + 12]] + 转换密钥格式[垈[垉 + 13]] +
    转换密钥格式[垈[垉 + 14]] + 转换密钥格式[垈[垉 + 15]]
  ).toLowerCase();
  return 垊;
}
const 转换密钥格式 = [];
for (let 垍 = 0; 垍 < 256; ++垍) {
  转换密钥格式.push((垍 + 256).toString(16).slice(1));
}
async function 构建新请求() {
  const 垎 = new Headers();
  垎.set('sec-websocket-protocol', 读取我的加密访问内容数据头);
  垎.set('key-open', 私钥开关 ? 'true' : 'false');
  垎.set('proxyip-open', 启用反代功能 ? 'true' : 'false');
  垎.set('socks5-open', 启用SOCKS5反代 ? 'true' : 'false');
  垎.set('socks5-global', 启用SOCKS5全局反代 ? 'true' : 'false');
  垎.set('safe-key', 哎呀呀这是我的ID啊);
  垎.set('kongliu-open', 启动控流机制 ? 'true' : 'false');
  垎.set('Connection', 'Upgrade');
  垎.set('Upgrade', 'websocket');
  const 垏 = [];
  const 垐 = new Set();
  const 垑 = Math.min(并发数量, 转发地址.length);
  const 垒 = (垓) => {
    const 垔 = Array.isArray(垓) ? 垓 : [垓];
    return 垔[Math.floor(Math.random() * 垔.length)];
  };
  while (垏.length < 垑) {
    const 垕 = 垒(反代IP);
    const 垖 = 垒(我的SOCKS5账号);
    const 垗 = new Headers(垎);
    垗.set('proxyip', 垕);
    垗.set('socks5', 垖);
    const 垘 = Math.floor(Math.random() * 转发地址.length);
    if (!垐.has(垘)) {
      const 垙 = `https://${转发地址[垘]}`;
      const 垚 = new Request(垙, {
        headers: 垗
      });
      垏.push(垚);
      垐.add(垘);
    }
  }
  return 垏;
}
//////////////////////////////////////////////////////////////////////////订阅页面////////////////////////////////////////////////////////////////////////
let 转码 = 'vl', 转码2 = 'ess', 符号 = '://', 小猫 = 'cla', 咪 = 'sh', 我的私钥, 读取我的加密访问内容数据头;
if (私钥开关) {
  我的私钥 = `my-key: ${咦这是我的私钥哎}`
} else {
  我的私钥 = ""
}
function 给我订阅页面(哎呀呀这是我的ID啊, hostName) {
return `
1、本worker的私钥功能只支持${小猫}${咪}，仅open${小猫}${咪}和${小猫}${咪} meta测试过，其他${小猫}${咪}类软件自行测试
2、若使用通用订阅请关闭私钥功能
3、其他需求自行研究
通用的：https${符号}${hostName}/${哎呀呀这是我的ID啊}/${转码}${转码2}
猫咪的：https${符号}${hostName}/${哎呀呀这是我的ID啊}/${小猫}${咪}
`;
}
function 给我通用配置文件(hostName) {
我的优选.push(`${hostName}:443#🇨🇳备用节点`)
if (私钥开关) {
  return `请先关闭私钥功能`
}else {
  return 我的优选.map(获取优选 => {
    const [主内容,tls] = 获取优选.split("@");
    const [地址端口, 节点名字 = 我的节点名字] = 主内容.split("#");
    const 拆分地址端口 = 地址端口.split(":");
    const 端口 =拆分地址端口.length > 1 ? Number(拆分地址端口.pop()) : 443;
    const 地址 = 拆分地址端口.join(":");
    const TLS开关 = tls === 'notls' ? 'security=none' : 'security=tls';
    return `${转码}${转码2}${符号}${哎呀呀这是我的VL密钥}@${地址}:${端口}?encryption=none&${TLS开关}&sni=${hostName}&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#${节点名字}`;
  }).join("\n");
}
}
function 给我小猫咪配置文件(hostName) {
我的优选.push(`${hostName}:443#🇨🇳备用节点`)
const 生成节点 = (我的优选) => {
  return 我的优选.map(获取优选 => {
    const [主内容,tls] = 获取优选.split("@");
    const [地址端口, 节点名字 = 我的节点名字] = 主内容.split("#");
    const 拆分地址端口 = 地址端口.split(":");
    const 端口 =拆分地址端口.length > 1 ? Number(拆分地址端口.pop()) : 443;
    const 地址 = 拆分地址端口.join(":").replace(/^\[(.+)\]$/, '$1');
    const TLS开关 = tls === 'notls' ? 'false' : 'true';
  return {
    nodeConfig: `- name: ${节点名字}
  type: ${转码}${转码2}
  server: ${地址}
  port: ${端口}
  uuid: ${哎呀呀这是我的VL密钥}
  udp: false
  tls: ${TLS开关}
  sni: ${hostName}
  network: ws
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${hostName}
      ${我的私钥}`,
    proxyConfig: `    - ${节点名字}`
    };
  });
};
const 节点配置 = 生成节点(我的优选).map(node => node.nodeConfig).join("\n");
const 代理配置 = 生成节点(我的优选).map(node => node.proxyConfig).join("\n");
return `
dns:
  nameserver:
    - 180.76.76.76
    - 2400:da00::6666
  fallback:
    - 8.8.8.8
    - 2001:4860:4860::8888
proxies:
${节点配置}
proxy-groups:
- name: 🚀 节点选择
  type: select
  proxies:
    - 自动选择
${代理配置}
- name: 自动选择
  type: url-test
  url: http://www.gstatic.com/generate_204
  interval: 60 #测试间隔
  tolerance: 30
  proxies:
${代理配置}
- name: 漏网之鱼
  type: select
  proxies:
    - DIRECT
    - 🚀 节点选择
rules: # 本人自用规则，不一定适合所有人所有客户端，如客户端因规则问题无法订阅就删除对应规则吧，每个人都有自己习惯的规则，自行研究哦
# 策略规则，建议使用meta内核，部分规则需打开${小猫}${咪} mate的使用geoip dat版数据库，比如TG规则就需要，或者自定义geoip的规则订阅
# 这是geoip的规则订阅链接，https://cdn.jsdelivr.net/gh/Loyalsoldier/geoip@release/Country.mmdb
# - GEOSITE,category-ads-all,REJECT #简单广告过滤规则，要增加规则数可使用category-ads-all
- GEOSITE,cn,DIRECT #国内域名直连规则
- GEOIP,CN,DIRECT,no-resolve #国内IP直连规则
- GEOSITE,cloudflare,🚀 节点选择 #CF域名规则
- GEOIP,CLOUDFLARE,🚀 节点选择,no-resolve #CFIP规则
- GEOSITE,gfw,🚀 节点选择 #GFW域名规则
- GEOSITE,google,🚀 节点选择 #GOOGLE域名规则
- GEOIP,GOOGLE,🚀 节点选择,no-resolve #GOOGLE IP规则
- GEOSITE,netflix,🚀 节点选择 #奈飞域名规则
- GEOIP,NETFLIX,🚀 节点选择,no-resolve #奈飞IP规则
- GEOSITE,telegram,🚀 节点选择 #TG域名规则
- GEOIP,TELEGRAM,🚀 节点选择,no-resolve #TG IP规则
- GEOSITE,openai,🚀 节点选择 #GPT规则
- MATCH,漏网之鱼
`
}