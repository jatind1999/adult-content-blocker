console.log("Extension script working");

// Use telegram bot
// Access token: 5506681587:AAEvdjNQohck8dtJGNUZHDcL1G1gK7GAqko
// Request link : https://api.telegram.org/bot5506681587:AAEvdjNQohck8dtJGNUZHDcL1G1gK7GAqko/getMe

const baseurl = "https://api.telegram.org/bot";
// Bad word list
const bad_words = [
  "nude",
  "cock",
  "sex",
  "bikini",
  "lingerie",
  "fingering",
  "cuckold",
  "anal",
  "penis",
  "ass",
  "titties",
  "boobs",
  "boobies",
  "fuck",
  "creampie",
  "sperm",
  "cum",
  "semen",
  "slut",
  "sluts",
  "whore",
  "whores",
  "banging",
  "stepmom",
  "stepsister",
  "milf",
  "vagina",
  "vaginal",
  "pussy",
  "clit",
  "brunette",
  "naughty",
  "butt",
  "bubble butt",
  "bdsm",
  "petite",
  "ebony",
  "threesome",
  "gloryhole",
  "uncensored",
  "jav",
  "javhd",
  "pornstar",
  "pornstars",
  "models",
  "model",
  "viagra",
  "horny",
  "nympho",
  "nymphomaniac",
  "18+",
  "mature",
  "asian",
  "gangbang",
  "foursome",
  "orgy",
  "interracial",
  "squirt",
  "squirting",
  "squirts",
  "masturbate",
  "masturbation",
  "masturbating",
  "bondage",
  "big dick",
  "dick",
  "desi",
  "bhaabhi",
  "bhabhi",
  "aunty",
  "mallu",
  "devar",
  "bbw",
  "cumshot",
  "hardcore",
  "livecam",
  "live cam",
  "live cams",
  "livecams",
  "suck",
  "nipples",
  "assfuck",
  "pussyfuck",
  "fetish",
  "choke",
  "choking",
  "choked",
  "hentai",
  "compilation",
  "lesbian",
  "trans",
  "gay",
  "hottest",
  "bj",
  "handjob",
  "blowjob",
  "ahole",
  "anus",
  "ash0le",
  "ash0les",
  "asholes",
  "ass monkey",
  "assface",
  "assh0le",
  "assh0lez",
  "asshole",
  "assholes",
  "assholz",
  "asswipe",
  "azzhole",
  "bassterds",
  "bastard",
  "bastards",
  "bastardz",
  "basterds",
  "basterdz",
  "biatch",
  "bitch",
  "bitches",
  "blow job",
  "boffing",
  "butthole",
  "buttwipe",
  "c0ck",
  "c0cks",
  "c0k",
  "carpet muncher",
  "cawk",
  "cawks",
  "cnts",
  "cntz",
  "cockhead",
  "cock-head",
  "cocks",
  "cocksucker",
  "cock-sucker",
  "crap",
  "cunt",
  "cunts",
  "cuntz",
  "dild0",
  "dild0s",
  "dildo",
  "dildos",
  "dilld0",
  "dilld0s",
  "dominatricks",
  "dominatrics",
  "dominatrix",
  "dykea",
  "enema",
  "f u c k",
  "f u c k e r",
  "fag",
  "fag1t",
  "faget",
  "fagg1t",
  "faggit",
  "faggot",
  "fagit",
  "fags",
  "fagz",
  "faig",
  "faigs",
  "fart",
  "flipping the bird",
  "fucker",
  "fuckin",
  "fucking",
  "fucks",
  "fudge packer",
  "fuk",
  "fukah",
  "fuken",
  "fuker",
  "fukin",
  "fukk",
  "fukkah",
  "fukken",
  "fukker",
  "fukkin",
  "g00k",
  "gayboy",
  "gaygirl",
  "gays",
  "gayz",
  "god-damned",
  "h00r",
  "h0ar",
  "h0re",
  "hells",
  "hoar",
  "hoor",
  "hoore",
  "jackoff",
  "jap",
  "japs",
  "jerk-off",
  "jisim",
  "jiss",
  "jizm",
  "jizz",
  "knob",
  "knobs",
  "knobz",
  "kunt",
  "kunts",
  "kuntz",
  "lezzian",
  "lipshits",
  "lipshitz",
  "masochist",
  "masokist",
  "massterbait",
  "masstrbait",
  "masstrbate",
  "masterbaiter",
  "masterbate",
  "masterbates",
  "motha fucker",
  "motha fuker",
  "motha fukkah",
  "motha fukker",
  "mother fucker",
  "mother fukah",
  "mother fuker",
  "mother fukkah",
  "mother fukker",
  "mother-fucker",
  "mutha fucker",
  "mutha fukah",
  "mutha fuker",
  "mutha fukkah",
  "mutha fukker",
  "n1gr",
  "nastt",
  "nigger",
  "nigur",
  "niiger",
  "niigr",
  "orafis",
  "orgasim",
  "orgasm",
  "orgasum",
  "oriface",
  "orifice",
  "orifiss",
  "packi",
  "packie",
  "packy",
  "paki",
  "pakie",
  "paky",
  "pecker",
  "peeenus",
  "peeenusss",
  "peenus",
  "peinus",
  "pen1s",
  "penas",
  "penis-breath",
  "penus",
  "penuus",
  "phuc",
  "phuck",
  "phuk",
  "phuker",
  "phukker",
  "polac",
  "polack",
  "polak",
  "poonani",
  "pr1c",
  "pr1ck",
  "pr1k",
  "pusse",
  "pussee",
  "puuke",
  "puuker",
  "queer",
  "queers",
  "queerz",
  "qweers",
  "qweerz",
  "qweir",
  "recktum",
  "rectum",
  "retard",
  "sadist",
  "scank",
  "schlong",
  "screwing",
  "sexy",
  "sh!t",
  "sh1t",
  "sh1ter",
  "sh1ts",
  "sh1tter",
  "sh1tz",
  "shit",
  "shits",
  "shitter",
  "shitty",
  "shity",
  "shitz",
  "shyt",
  "shyte",
  "shytty",
  "shyty",
  "skanck",
  "skank",
  "skankee",
  "skankey",
  "skanks",
  "skanky",
  "slutty",
  "slutz",
  "son-of-a-bitch",
  "tit",
  "turd",
  "va1jina",
  "vag1na",
  "vagiina",
  "vaj1na",
  "vajina",
  "vullva",
  "vulva",
  "w0p",
  "wh00r",
  "wh0re",
  "xrated",
  "xxx",
  "b!+ch",
  "arschloch",
  "b!tch",
  "b17ch",
  "b1tch",
  "bi+ch",
  "boiolas",
  "buceta",
  "chink",
  "cipa",
  "clits",
  "dirsa",
  "ejakulate",
  "fatass",
  "fcuk",
  "fux0r",
  "hoer",
  "hore",
  "jism",
  "kawk",
  "l3itch",
  "l3i+ch",
  "masterbat",
  "masterbat3",
  "motherfucker",
  "s.o.b.",
  "mofo",
  "nazi",
  "nigga",
  "nutsack",
  "pimpis",
  "scrotum",
  "shemale",
  "shi+",
  "sh!+",
  "smut",
  "teets",
  "tits",
  "b00bs",
  "teez",
  "testical",
  "testicle",
  "titt",
  "w00se",
  "wank",
  "whoar",
  "damn",
  "dyke",
  "@$$",
  "amcik",
  "andskota",
  "arse",
  "assrammer",
  "ayir",
  "bi7ch",
  "bollock",
  "breasts",
  "butt-pirate",
  "cabron",
  "cazzo",
  "chraa",
  "chuj",
  "d4mn",
  "daygo",
  "dego",
  "dike",
  "dupa",
  "dziwka",
  "ejackulate",
  "ekrem",
  "ekto",
  "enculer",
  "faen",
  "fanculo",
  "fanny",
  "feces",
  "feg",
  "felcher",
  "ficken",
  "fitt",
  "flikker",
  "foreskin",
  "fotze",
  "futkretzn",
  "gook",
  "guiena",
  "h0r",
  "h4x0r",
  "hell",
  "helvete",
  "honkey",
  "huevon",
  "hui",
  "injun",
  "kanker",
  "kike",
  "klootzak",
  "kraut",
  "knulle",
  "kuk",
  "kuksuger",
  "kurac",
  "kurwa",
  "kusi",
  "kyrpa",
  "lesbo",
  "mamhoon",
  "masturbat",
  "merd",
  "mibun",
  "monkleigh",
  "mouliewop",
  "muie",
  "mulkku",
  "muschi",
  "nazis",
  "nepesaurio",
  "orospu",
  "paska",
  "perse",
  "picka",
  "pierdol",
  "pillu",
  "pimmel",
  "piss",
  "pizda",
  "poontsee",
  "poop",
  "porn",
  "p0rn",
  "pr0n",
  "preteen",
  "teen",
  "teens",
  "pula",
  "pule",
  "puta",
  "puto",
  "qahbeh",
  "queef",
  "rautenberg",
  "schaffer",
  "scheiss",
  "schlampe",
  "schmuck",
  "screw",
  "sharmuta",
  "sharmute",
  "shipal",
  "shiz",
  "skribz",
  "skurwysyn",
  "sphencter",
  "spic",
  "spierdalaj",
  "splooge",
  "suka",
  "b00b",
  "twat",
  "vittu",
  "wetback",
  "wichser",
  "wop",
  "yed",
  "zabourah",
  "friends hot mom",
  "friend's hot mom",
  "friends hot sister",
  "friend's hot sister",
  "cum shot",
  "fake taxi",
  "facesitting",
  "male ejaculation",
  "ejaculation",
  "ejaculate",
  "crempie",
  "doggystyle",
  "real amateur",
  "big ass",
  "anal sex",
  "deepthroat",
  "big cock",
  "pov",
  "stepmom and son",
  "cum in mouth",
  "female ejaculation",
  "cuckold/hotwife",
  "natural tits",
  "footjob",
  "big natural tits",
  "missionary",
  "fisting",
  "fist-fucking",
  "hairy pussy",
  "big black cock",
  "femdom",
  "ass to mouth",
  "teen anal",
  "shaved pussy",
  "ass gaping",
  "pussy licking",
  "asmr",
  "double penetration",
  "bukkake",
  "pussyfucking",
  "cowgirl",
  "monster cock",
  "hot milf",
  "teen creampie",
  "cum in pussy",
  "mature anal",
  "cum inside",
  "lesbian seduction",
  "rough sex",
  "caught masturbating",
];
let token_id;

// Whenever bot token gets changed by user, then we fetch the updated bot token
chrome.storage.sync.onChanged.addListener((changes) => {
  for (let [key, { newValue }] of Object.entries(changes)) {
    if (key === "bot_token") {
      token_id = newValue;
    }
  }
  console.log(`New token: ${token_id}`);
});

function sendMessage(baseurl, token_id, siteUrl) {
  chrome.storage.sync.get(["bot_token"], (tokenObj) => {
    token_id = tokenObj.bot_token;
    // If no token is mentioned, no updates will be sent.
    if (!token_id) return;
    console.log(token_id);
    fetch(`${baseurl}${token_id}/getUpdates`)
      .then((response) => response.json())
      .then((data) => {
        const lastUpdate = data.result.slice(-1);
        return lastUpdate[0].my_chat_member.chat.id;
      })
      .then((groupId) => {
        const textMessage = `Adult Site is currently being accesed!
      
      
      
      
      
      
      
      Link: ${siteUrl}`;
        fetch(
          `${baseurl}${token_id}/sendMessage?chat_id=${groupId}&text=${textMessage}`
        );
      });
  });
}

function checkForAdultSite() {
  document.body.style.display = "none";
  // Get all text from page
  const all_text = document.body.textContent.split(" ");

  // Clean text, by removing characters having length < 2. Generally removes all extra \n, '', ' '
  let cleaned_text = all_text.filter((text) => text.length > 2);

  // For each word, transform it by lowercasing, and trimming
  for (let i = 0; i < cleaned_text.length; i++) {
    cleaned_text[i] = cleaned_text[i].toLowerCase().trim();
  }

  // Filter final words, by removing any unwanted characters.
  cleaned_text = cleaned_text.filter(
    (text) => text != "" && text != " " && text != "\n"
  );

  console.log("Text cleansed");
  console.log(cleaned_text);

  // Find the count of total words
  const totalWordCount = cleaned_text.length;

  // Find the count of bad words. Match bad word list with cleansed words.
  let matchCount = 0;
  for (let i = 0; i < cleaned_text.length; i++) {
    for (let j = 0; j < bad_words.length; j++) {
      if (cleaned_text[i] === bad_words[j]) {
        matchCount++;
        break;
      }
    }
  }

  // Calculate matched bad words count from total. If match count is >= 5 % of total then block page.
  const isAdultSite = matchCount / totalWordCount >= 0.01 ? true : false;

  if (isAdultSite) {
    // SENDING MESSAGE THROUGH BOT.
    const html = `
    <div style = "display: flex; flex-direction: column ;justify-content: center; align-items: center; height: 100vh">
      <img src="https://www.psdstamps.com/wp-content/uploads/2019/12/warning-stamp-png.png" alt="Warning Image" style="height: 40%; width: 40%"/>
      <h1 style="font-family: sans-serif; font-size: 70px; color: red; margin-bottom: 0">You are accessing Adult Websites!</h1>
      <p style="font-family: sans-serif; font-size: 50px; color: #FFF; text-align: center">Accessing adult content by minors is illegal. We have sent a message to your parents</p>
    </div>
  `;

    document.body.innerHTML = html;
    document.body.style.cssText = `
    display: block;
    background: #000;
  `;
    sendMessage(baseurl, token_id, window.location.href);
    window.history.pushState("", "Warning", "/Warning");
    console.log(`TotalWordCount: ${totalWordCount}\nMatchCount: ${matchCount}`);
  } else {
    console.log(`TotalWordCount: ${totalWordCount}\nMatchCount: ${matchCount}`);
    console.log("Site not Adult");
    document.body.style.display = "block";
  }
}
checkForAdultSite();

//https://api.telegram.org/bot5506681587:AAEvdjNQohck8dtJGNUZHDcL1G1gK7GAqko"
