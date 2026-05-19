// BM Vocab Word Bank — 400 words (200 primary + 200 secondary)
// Phase 2: Replace with Firestore "words" collection (same object shape)
// TO ADD WORDS: append objects to the WORDS array below. Categories auto-appear in UI.
// SCHEMA per word:
//   id:         unique string e.g. "pri-001" / "sec-001"
//   bm:         Bahasa Malaysia word/phrase
//   en:         English meaning
//   category:   category key (must match CATEGORIES config)
//   level:      "primary" | "secondary"
//   difficulty: 1 (easy) | 2 (medium) | 3 (hard)
//   emoji:      single emoji illustration
//   baseWord:   (optional) root/base word in BM
//   baseWordEn: (optional) English meaning of base word
//   exBM:       example sentence in BM
//   exEN:       example sentence in English

const WORDS = [

  // ════════════════════════════════════════════════════════════
  // PRIMARY — 200 words
  // ════════════════════════════════════════════════════════════

  // ── Haiwan (Animals) ─────────────────────────────────────
  {id:"pri-001",bm:"kucing",en:"cat",category:"haiwan",level:"primary",difficulty:1,emoji:"🐱",exBM:"Saya ada seekor kucing.",exEN:"I have a cat."},
  {id:"pri-002",bm:"anjing",en:"dog",category:"haiwan",level:"primary",difficulty:1,emoji:"🐶",exBM:"Anjing itu berlari laju.",exEN:"The dog runs fast."},
  {id:"pri-003",bm:"ikan",en:"fish",category:"haiwan",level:"primary",difficulty:1,emoji:"🐟",exBM:"Ikan itu berenang.",exEN:"The fish swims."},
  {id:"pri-004",bm:"burung",en:"bird",category:"haiwan",level:"primary",difficulty:1,emoji:"🐦",exBM:"Burung itu bernyanyi.",exEN:"The bird sings."},
  {id:"pri-005",bm:"harimau",en:"tiger",category:"haiwan",level:"primary",difficulty:2,emoji:"🐯",exBM:"Harimau tinggal di hutan.",exEN:"Tigers live in the forest."},
  {id:"pri-006",bm:"gajah",en:"elephant",category:"haiwan",level:"primary",difficulty:2,emoji:"🐘",exBM:"Gajah adalah haiwan besar.",exEN:"Elephants are big animals."},
  {id:"pri-007",bm:"monyet",en:"monkey",category:"haiwan",level:"primary",difficulty:1,emoji:"🐒",exBM:"Monyet suka makan pisang.",exEN:"Monkeys like to eat bananas."},
  {id:"pri-008",bm:"arnab",en:"rabbit",category:"haiwan",level:"primary",difficulty:2,emoji:"🐰",exBM:"Arnab makan lobak.",exEN:"The rabbit eats carrots."},
  {id:"pri-009",bm:"kuda",en:"horse",category:"haiwan",level:"primary",difficulty:1,emoji:"🐴",exBM:"Kuda berlari sangat laju.",exEN:"Horses run very fast."},
  {id:"pri-010",bm:"lembu",en:"cow",category:"haiwan",level:"primary",difficulty:1,emoji:"🐄",exBM:"Lembu memberi susu.",exEN:"Cows give milk."},
  {id:"pri-011",bm:"ayam",en:"chicken",category:"haiwan",level:"primary",difficulty:1,emoji:"🐓",exBM:"Ayam berkokok setiap pagi.",exEN:"The chicken crows every morning."},
  {id:"pri-012",bm:"itik",en:"duck",category:"haiwan",level:"primary",difficulty:1,emoji:"🦆",exBM:"Itik berenang di kolam.",exEN:"Ducks swim in the pond."},
  {id:"pri-013",bm:"katak",en:"frog",category:"haiwan",level:"primary",difficulty:1,emoji:"🐸",exBM:"Katak melompat ke dalam air.",exEN:"The frog jumps into the water."},
  {id:"pri-014",bm:"ular",en:"snake",category:"haiwan",level:"primary",difficulty:1,emoji:"🐍",exBM:"Ular itu panjang dan licin.",exEN:"The snake is long and slippery."},
  {id:"pri-015",bm:"rama-rama",en:"butterfly",category:"haiwan",level:"primary",difficulty:2,emoji:"🦋",exBM:"Rama-rama itu cantik.",exEN:"The butterfly is beautiful."},
  {id:"pri-016",bm:"semut",en:"ant",category:"haiwan",level:"primary",difficulty:1,emoji:"🐜",exBM:"Semut bekerja keras setiap hari.",exEN:"Ants work hard every day."},
  {id:"pri-017",bm:"lebah",en:"bee",category:"haiwan",level:"primary",difficulty:2,emoji:"🐝",exBM:"Lebah menghasilkan madu.",exEN:"Bees produce honey."},
  {id:"pri-018",bm:"buaya",en:"crocodile",category:"haiwan",level:"primary",difficulty:2,emoji:"🐊",exBM:"Buaya tinggal di sungai.",exEN:"Crocodiles live in rivers."},
  {id:"pri-019",bm:"singa",en:"lion",category:"haiwan",level:"primary",difficulty:2,emoji:"🦁",exBM:"Singa adalah raja hutan.",exEN:"The lion is the king of the jungle."},
  {id:"pri-020",bm:"tikus",en:"mouse / rat",category:"haiwan",level:"primary",difficulty:1,emoji:"🐭",exBM:"Tikus mencuri makanan.",exEN:"The mouse steals food."},

  // ── Makanan (Food) ────────────────────────────────────────
  {id:"pri-021",bm:"nasi",en:"rice",category:"makanan",level:"primary",difficulty:1,emoji:"🍚",exBM:"Saya makan nasi setiap hari.",exEN:"I eat rice every day."},
  {id:"pri-022",bm:"roti",en:"bread",category:"makanan",level:"primary",difficulty:1,emoji:"🍞",exBM:"Saya makan roti untuk sarapan.",exEN:"I eat bread for breakfast."},
  {id:"pri-023",bm:"air",en:"water",category:"makanan",level:"primary",difficulty:1,emoji:"💧",exBM:"Minum air banyak-banyak.",exEN:"Drink lots of water."},
  {id:"pri-024",bm:"susu",en:"milk",category:"makanan",level:"primary",difficulty:1,emoji:"🥛",exBM:"Saya minum susu setiap pagi.",exEN:"I drink milk every morning."},
  {id:"pri-025",bm:"telur",en:"egg",category:"makanan",level:"primary",difficulty:1,emoji:"🥚",exBM:"Ibu masak telur goreng.",exEN:"Mum cooks fried eggs."},
  {id:"pri-026",bm:"buah",en:"fruit",category:"makanan",level:"primary",difficulty:1,emoji:"🍎",exBM:"Makan buah setiap hari.",exEN:"Eat fruit every day."},
  {id:"pri-027",bm:"pisang",en:"banana",category:"makanan",level:"primary",difficulty:1,emoji:"🍌",exBM:"Pisang itu manis.",exEN:"The banana is sweet."},
  {id:"pri-028",bm:"epal",en:"apple",category:"makanan",level:"primary",difficulty:1,emoji:"🍎",exBM:"Saya suka makan epal.",exEN:"I like to eat apples."},
  {id:"pri-029",bm:"sayur",en:"vegetable",category:"makanan",level:"primary",difficulty:2,emoji:"🥦",exBM:"Makan sayur untuk sihat.",exEN:"Eat vegetables to stay healthy."},
  {id:"pri-030",bm:"mee",en:"noodles",category:"makanan",level:"primary",difficulty:1,emoji:"🍜",exBM:"Mee goreng sedap sekali.",exEN:"Fried noodles are very delicious."},
  {id:"pri-031",bm:"ais krim",en:"ice cream",category:"makanan",level:"primary",difficulty:2,emoji:"🍦",exBM:"Ais krim itu sejuk.",exEN:"Ice cream is cold."},
  {id:"pri-032",bm:"kek",en:"cake",category:"makanan",level:"primary",difficulty:1,emoji:"🎂",exBM:"Kek itu sedap.",exEN:"The cake is delicious."},
  {id:"pri-033",bm:"ikan goreng",en:"fried fish",category:"makanan",level:"primary",difficulty:2,emoji:"🐟",exBM:"Ikan goreng sangat sedap.",exEN:"Fried fish is very delicious."},
  {id:"pri-034",bm:"gula",en:"sugar",category:"makanan",level:"primary",difficulty:1,emoji:"🍬",exBM:"Jangan makan gula terlalu banyak.",exEN:"Do not eat too much sugar."},
  {id:"pri-035",bm:"garam",en:"salt",category:"makanan",level:"primary",difficulty:1,emoji:"🧂",exBM:"Tambah sedikit garam.",exEN:"Add a little salt."},
  {id:"pri-036",bm:"minyak",en:"oil",category:"makanan",level:"primary",difficulty:2,emoji:"🫙",exBM:"Goreng dengan sedikit minyak.",exEN:"Fry with a little oil."},
  {id:"pri-037",bm:"teh",en:"tea",category:"makanan",level:"primary",difficulty:1,emoji:"🍵",exBM:"Ibu minum teh setiap petang.",exEN:"Mother drinks tea every afternoon."},
  {id:"pri-038",bm:"kopi",en:"coffee",category:"makanan",level:"primary",difficulty:1,emoji:"☕",exBM:"Bapa suka minum kopi.",exEN:"Father likes to drink coffee."},
  {id:"pri-039",bm:"limau",en:"lime / lemon",category:"makanan",level:"primary",difficulty:2,emoji:"🍋",exBM:"Limau itu masam.",exEN:"The lime is sour."},
  {id:"pri-040",bm:"mangga",en:"mango",category:"makanan",level:"primary",difficulty:2,emoji:"🥭",exBM:"Mangga itu manis dan masam.",exEN:"The mango is sweet and sour."},

  // ── Keluarga (Family) ─────────────────────────────────────
  {id:"pri-041",bm:"ibu",en:"mother",category:"keluarga",level:"primary",difficulty:1,emoji:"👩",exBM:"Ibu masak makanan.",exEN:"Mother cooks food."},
  {id:"pri-042",bm:"bapa",en:"father",category:"keluarga",level:"primary",difficulty:1,emoji:"👨",exBM:"Bapa pergi bekerja.",exEN:"Father goes to work."},
  {id:"pri-043",bm:"abang",en:"elder brother",category:"keluarga",level:"primary",difficulty:2,emoji:"👦",exBM:"Abang saya pandai.",exEN:"My elder brother is clever."},
  {id:"pri-044",bm:"kakak",en:"elder sister",category:"keluarga",level:"primary",difficulty:2,emoji:"👧",exBM:"Kakak tolong saya belajar.",exEN:"Elder sister helps me study."},
  {id:"pri-045",bm:"adik",en:"younger sibling",category:"keluarga",level:"primary",difficulty:2,emoji:"👶",exBM:"Adik saya comel.",exEN:"My younger sibling is cute."},
  {id:"pri-046",bm:"datuk",en:"grandfather",category:"keluarga",level:"primary",difficulty:2,emoji:"👴",exBM:"Datuk tinggal di kampung.",exEN:"Grandfather lives in the village."},
  {id:"pri-047",bm:"nenek",en:"grandmother",category:"keluarga",level:"primary",difficulty:2,emoji:"👵",exBM:"Nenek masak sedap.",exEN:"Grandmother cooks deliciously."},
  {id:"pri-048",bm:"pakcik",en:"uncle",category:"keluarga",level:"primary",difficulty:2,emoji:"🧔",exBM:"Pakcik bagi hadiah.",exEN:"Uncle gives gifts."},
  {id:"pri-049",bm:"makcik",en:"aunt",category:"keluarga",level:"primary",difficulty:2,emoji:"👩",exBM:"Makcik baik hati.",exEN:"Aunt is kind-hearted."},
  {id:"pri-050",bm:"sepupu",en:"cousin",category:"keluarga",level:"primary",difficulty:2,emoji:"🧑",exBM:"Sepupu saya datang melawat.",exEN:"My cousin came to visit."},

  // ── Warna (Colours) ───────────────────────────────────────
  {id:"pri-051",bm:"merah",en:"red",category:"warna",level:"primary",difficulty:1,emoji:"🔴",exBM:"Baju saya berwarna merah.",exEN:"My shirt is red."},
  {id:"pri-052",bm:"biru",en:"blue",category:"warna",level:"primary",difficulty:1,emoji:"🔵",exBM:"Langit berwarna biru.",exEN:"The sky is blue."},
  {id:"pri-053",bm:"hijau",en:"green",category:"warna",level:"primary",difficulty:1,emoji:"💚",exBM:"Rumput berwarna hijau.",exEN:"Grass is green."},
  {id:"pri-054",bm:"kuning",en:"yellow",category:"warna",level:"primary",difficulty:1,emoji:"💛",exBM:"Pisang berwarna kuning.",exEN:"Bananas are yellow."},
  {id:"pri-055",bm:"putih",en:"white",category:"warna",level:"primary",difficulty:1,emoji:"⚪",exBM:"Awan berwarna putih.",exEN:"Clouds are white."},
  {id:"pri-056",bm:"hitam",en:"black",category:"warna",level:"primary",difficulty:1,emoji:"⚫",exBM:"Langit malam berwarna hitam.",exEN:"The night sky is black."},
  {id:"pri-057",bm:"jingga",en:"orange",category:"warna",level:"primary",difficulty:2,emoji:"🟠",exBM:"Oren berwarna jingga.",exEN:"Oranges are orange-coloured."},
  {id:"pri-058",bm:"ungu",en:"purple",category:"warna",level:"primary",difficulty:2,emoji:"💜",exBM:"Bunga itu berwarna ungu.",exEN:"The flower is purple."},
  {id:"pri-059",bm:"merah jambu",en:"pink",category:"warna",level:"primary",difficulty:2,emoji:"🌸",exBM:"Baju dia berwarna merah jambu.",exEN:"Her shirt is pink."},
  {id:"pri-060",bm:"coklat",en:"brown",category:"warna",level:"primary",difficulty:1,emoji:"🟤",exBM:"Coklat berwarna coklat.",exEN:"Chocolate is brown."},

  // ── Sekolah (School) ──────────────────────────────────────
  {id:"pri-061",bm:"buku",en:"book",category:"sekolah",level:"primary",difficulty:1,emoji:"📚",exBM:"Saya baca buku.",exEN:"I read a book."},
  {id:"pri-062",bm:"pensil",en:"pencil",category:"sekolah",level:"primary",difficulty:1,emoji:"✏️",exBM:"Saya tulis dengan pensil.",exEN:"I write with a pencil."},
  {id:"pri-063",bm:"pen",en:"pen",category:"sekolah",level:"primary",difficulty:1,emoji:"🖊️",exBM:"Guru menulis dengan pen.",exEN:"The teacher writes with a pen."},
  {id:"pri-064",bm:"kertas",en:"paper",category:"sekolah",level:"primary",difficulty:1,emoji:"📄",exBM:"Saya lukis di atas kertas.",exEN:"I draw on paper."},
  {id:"pri-065",bm:"pembaris",en:"ruler",category:"sekolah",level:"primary",difficulty:2,emoji:"📏",exBM:"Pembaris untuk mengukur.",exEN:"A ruler is for measuring."},
  {id:"pri-066",bm:"beg",en:"bag",category:"sekolah",level:"primary",difficulty:1,emoji:"🎒",exBM:"Beg saya berat.",exEN:"My bag is heavy."},
  {id:"pri-067",bm:"meja",en:"table / desk",category:"sekolah",level:"primary",difficulty:1,emoji:"🪑",exBM:"Buku di atas meja.",exEN:"The book is on the table."},
  {id:"pri-068",bm:"kerusi",en:"chair",category:"sekolah",level:"primary",difficulty:1,emoji:"🪑",exBM:"Saya duduk di kerusi.",exEN:"I sit on a chair."},
  {id:"pri-069",bm:"guru",en:"teacher",category:"sekolah",level:"primary",difficulty:1,emoji:"👩‍🏫",exBM:"Guru mengajar kami.",exEN:"The teacher teaches us."},
  {id:"pri-070",bm:"murid",en:"student / pupil",category:"sekolah",level:"primary",difficulty:1,emoji:"🧑‍🎓",exBM:"Murid belajar rajin.",exEN:"The student studies hard."},
  {id:"pri-071",bm:"kelas",en:"class / classroom",category:"sekolah",level:"primary",difficulty:1,emoji:"🏫",exBM:"Kelas saya seronok.",exEN:"My class is fun."},
  {id:"pri-072",bm:"papan hitam",en:"blackboard",category:"sekolah",level:"primary",difficulty:2,emoji:"🖊️",exBM:"Guru menulis di papan hitam.",exEN:"The teacher writes on the blackboard."},
  {id:"pri-073",bm:"kantin",en:"canteen",category:"sekolah",level:"primary",difficulty:2,emoji:"🍱",exBM:"Kami makan di kantin.",exEN:"We eat at the canteen."},
  {id:"pri-074",bm:"padang",en:"field / ground",category:"sekolah",level:"primary",difficulty:2,emoji:"🏟️",exBM:"Kami bermain di padang.",exEN:"We play on the field."},
  {id:"pri-075",bm:"peperiksaan",en:"examination",category:"sekolah",level:"primary",difficulty:3,emoji:"📝",exBM:"Peperiksaan akan datang minggu depan.",exEN:"The examination is coming next week."},

  // ── Rumah (Home) ──────────────────────────────────────────
  {id:"pri-076",bm:"rumah",en:"house / home",category:"rumah",level:"primary",difficulty:1,emoji:"🏠",exBM:"Rumah saya besar.",exEN:"My house is big."},
  {id:"pri-077",bm:"bilik",en:"room",category:"rumah",level:"primary",difficulty:1,emoji:"🚪",exBM:"Bilik saya kemas.",exEN:"My room is tidy."},
  {id:"pri-078",bm:"dapur",en:"kitchen",category:"rumah",level:"primary",difficulty:2,emoji:"🍳",exBM:"Ibu memasak di dapur.",exEN:"Mother cooks in the kitchen."},
  {id:"pri-079",bm:"pintu",en:"door",category:"rumah",level:"primary",difficulty:1,emoji:"🚪",exBM:"Tutup pintu itu.",exEN:"Close that door."},
  {id:"pri-080",bm:"tingkap",en:"window",category:"rumah",level:"primary",difficulty:2,emoji:"🪟",exBM:"Buka tingkap bilik.",exEN:"Open the bedroom window."},
  {id:"pri-081",bm:"katil",en:"bed",category:"rumah",level:"primary",difficulty:1,emoji:"🛏️",exBM:"Saya tidur di katil.",exEN:"I sleep in bed."},
  {id:"pri-082",bm:"tandas",en:"toilet / bathroom",category:"rumah",level:"primary",difficulty:1,emoji:"🚽",exBM:"Tandas ada di dalam rumah.",exEN:"The toilet is inside the house."},
  {id:"pri-083",bm:"peti sejuk",en:"refrigerator / fridge",category:"rumah",level:"primary",difficulty:2,emoji:"🧊",exBM:"Air sejuk dalam peti sejuk.",exEN:"Cold water is in the fridge."},
  {id:"pri-084",bm:"televisyen",en:"television",category:"rumah",level:"primary",difficulty:2,emoji:"📺",exBM:"Saya tengok televisyen malam.",exEN:"I watch television at night."},
  {id:"pri-085",bm:"telefon",en:"telephone / phone",category:"rumah",level:"primary",difficulty:1,emoji:"📱",exBM:"Ibu menelefon datuk.",exEN:"Mother calls grandfather."},

  // ── Alam Sekitar (Nature) ─────────────────────────────────
  {id:"pri-086",bm:"pokok",en:"tree",category:"alam",level:"primary",difficulty:1,emoji:"🌳",exBM:"Pokok itu tinggi.",exEN:"The tree is tall."},
  {id:"pri-087",bm:"bunga",en:"flower",category:"alam",level:"primary",difficulty:1,emoji:"🌸",exBM:"Bunga itu cantik.",exEN:"The flower is beautiful."},
  {id:"pri-088",bm:"langit",en:"sky",category:"alam",level:"primary",difficulty:1,emoji:"☁️",exBM:"Langit berwarna biru.",exEN:"The sky is blue."},
  {id:"pri-089",bm:"matahari",en:"sun",category:"alam",level:"primary",difficulty:1,emoji:"☀️",exBM:"Matahari bersinar terik.",exEN:"The sun shines brightly."},
  {id:"pri-090",bm:"hujan",en:"rain",category:"alam",level:"primary",difficulty:1,emoji:"🌧️",exBM:"Hujan turun dengan lebat.",exEN:"The rain falls heavily."},
  {id:"pri-091",bm:"laut",en:"sea / ocean",category:"alam",level:"primary",difficulty:1,emoji:"🌊",exBM:"Laut berwarna biru.",exEN:"The sea is blue."},
  {id:"pri-092",bm:"gunung",en:"mountain",category:"alam",level:"primary",difficulty:2,emoji:"⛰️",exBM:"Gunung itu tinggi.",exEN:"The mountain is tall."},
  {id:"pri-093",bm:"sungai",en:"river",category:"alam",level:"primary",difficulty:2,emoji:"🏞️",exBM:"Sungai itu dalam.",exEN:"The river is deep."},
  {id:"pri-094",bm:"hutan",en:"forest / jungle",category:"alam",level:"primary",difficulty:1,emoji:"🌲",exBM:"Hutan di Malaysia sangat lebat.",exEN:"The forest in Malaysia is very dense."},
  {id:"pri-095",bm:"batu",en:"rock / stone",category:"alam",level:"primary",difficulty:1,emoji:"🪨",exBM:"Batu itu keras.",exEN:"The rock is hard."},
  {id:"pri-096",bm:"pasir",en:"sand",category:"alam",level:"primary",difficulty:1,emoji:"🏖️",exBM:"Pasir di pantai putih.",exEN:"The sand at the beach is white."},
  {id:"pri-097",bm:"awan",en:"cloud",category:"alam",level:"primary",difficulty:1,emoji:"☁️",exBM:"Awan menutupi matahari.",exEN:"Clouds cover the sun."},
  {id:"pri-098",bm:"angin",en:"wind",category:"alam",level:"primary",difficulty:1,emoji:"💨",exBM:"Angin bertiup kencang.",exEN:"The wind blows strongly."},
  {id:"pri-099",bm:"bintang",en:"star",category:"alam",level:"primary",difficulty:1,emoji:"⭐",exBM:"Bintang bersinar di langit malam.",exEN:"Stars shine in the night sky."},
  {id:"pri-100",bm:"bulan",en:"moon",category:"alam",level:"primary",difficulty:1,emoji:"🌙",exBM:"Bulan bersinar pada malam hari.",exEN:"The moon shines at night."},

  // ── Perbuatan (Actions) ───────────────────────────────────
  {id:"pri-101",bm:"makan",en:"eat",category:"perbuatan",level:"primary",difficulty:1,emoji:"🍽️",exBM:"Mari kita makan.",exEN:"Let us eat."},
  {id:"pri-102",bm:"minum",en:"drink",category:"perbuatan",level:"primary",difficulty:1,emoji:"🥤",exBM:"Minum air sebelum tidur.",exEN:"Drink water before sleeping."},
  {id:"pri-103",bm:"tidur",en:"sleep",category:"perbuatan",level:"primary",difficulty:1,emoji:"😴",exBM:"Tidur awal setiap malam.",exEN:"Sleep early every night."},
  {id:"pri-104",bm:"berlari",en:"run",category:"perbuatan",level:"primary",difficulty:1,emoji:"🏃",exBM:"Kami berlari di padang.",exEN:"We run on the field."},
  {id:"pri-105",bm:"berjalan",en:"walk",category:"perbuatan",level:"primary",difficulty:1,emoji:"🚶",exBM:"Kami berjalan ke sekolah.",exEN:"We walk to school."},
  {id:"pri-106",bm:"membaca",en:"read",category:"perbuatan",level:"primary",difficulty:1,emoji:"📖",exBM:"Saya suka membaca buku.",exEN:"I like to read books."},
  {id:"pri-107",bm:"menulis",en:"write",category:"perbuatan",level:"primary",difficulty:1,emoji:"✍️",exBM:"Guru minta kami menulis.",exEN:"The teacher asks us to write."},
  {id:"pri-108",bm:"bermain",en:"play",category:"perbuatan",level:"primary",difficulty:1,emoji:"⚽",exBM:"Kami bermain bola.",exEN:"We play football."},
  {id:"pri-109",bm:"menyanyi",en:"sing",category:"perbuatan",level:"primary",difficulty:1,emoji:"🎵",exBM:"Kami menyanyi lagu kebangsaan.",exEN:"We sing the national anthem."},
  {id:"pri-110",bm:"menari",en:"dance",category:"perbuatan",level:"primary",difficulty:1,emoji:"💃",exBM:"Dia menari dengan cantik.",exEN:"She dances beautifully."},
  {id:"pri-111",bm:"melukis",en:"draw / paint",category:"perbuatan",level:"primary",difficulty:2,emoji:"🎨",exBM:"Saya suka melukis gambar.",exEN:"I like to draw pictures."},
  {id:"pri-112",bm:"memasak",en:"cook",category:"perbuatan",level:"primary",difficulty:1,emoji:"👨‍🍳",exBM:"Ibu memasak nasi goreng.",exEN:"Mother cooks fried rice."},
  {id:"pri-113",bm:"berenang",en:"swim",category:"perbuatan",level:"primary",difficulty:2,emoji:"🏊",exBM:"Kami berenang di kolam.",exEN:"We swim in the pool."},
  {id:"pri-114",bm:"menonton",en:"watch",category:"perbuatan",level:"primary",difficulty:2,emoji:"👀",exBM:"Kami menonton wayang.",exEN:"We watch a movie."},
  {id:"pri-115",bm:"ketawa",en:"laugh",category:"perbuatan",level:"primary",difficulty:1,emoji:"😂",exBM:"Dia ketawa dengan kuat.",exEN:"She laughs loudly."},

  // ── Sifat (Adjectives) ────────────────────────────────────
  {id:"pri-116",bm:"besar",en:"big / large",category:"sifat",level:"primary",difficulty:1,emoji:"🐘",exBM:"Gajah itu besar.",exEN:"The elephant is big."},
  {id:"pri-117",bm:"kecil",en:"small / little",category:"sifat",level:"primary",difficulty:1,emoji:"🐜",exBM:"Semut itu kecil.",exEN:"The ant is small."},
  {id:"pri-118",bm:"panjang",en:"long",category:"sifat",level:"primary",difficulty:1,emoji:"📏",exBM:"Ular itu panjang.",exEN:"The snake is long."},
  {id:"pri-119",bm:"pendek",en:"short",category:"sifat",level:"primary",difficulty:1,emoji:"📏",exBM:"Rambut dia pendek.",exEN:"Her hair is short."},
  {id:"pri-120",bm:"cantik",en:"beautiful / pretty",category:"sifat",level:"primary",difficulty:1,emoji:"💐",exBM:"Bunga itu cantik.",exEN:"The flower is beautiful."},
  {id:"pri-121",bm:"pandai",en:"clever / smart",category:"sifat",level:"primary",difficulty:1,emoji:"🧠",exBM:"Dia murid yang pandai.",exEN:"She is a clever student."},
  {id:"pri-122",bm:"baik",en:"good / kind",category:"sifat",level:"primary",difficulty:1,emoji:"😊",exBM:"Dia seorang yang baik.",exEN:"She is a good person."},
  {id:"pri-123",bm:"malas",en:"lazy",category:"sifat",level:"primary",difficulty:1,emoji:"😪",exBM:"Jangan jadi murid malas.",exEN:"Do not be a lazy student."},
  {id:"pri-124",bm:"rajin",en:"hardworking / diligent",category:"sifat",level:"primary",difficulty:2,emoji:"💪",exBM:"Murid rajin dapat markah baik.",exEN:"Hardworking students get good marks."},
  {id:"pri-125",bm:"lapar",en:"hungry",category:"sifat",level:"primary",difficulty:1,emoji:"🍽️",exBM:"Saya lapar sekarang.",exEN:"I am hungry now."},
  {id:"pri-126",bm:"dahaga",en:"thirsty",category:"sifat",level:"primary",difficulty:2,emoji:"💧",exBM:"Saya dahaga, nak minum air.",exEN:"I am thirsty, I want water."},
  {id:"pri-127",bm:"gembira",en:"happy / joyful",category:"sifat",level:"primary",difficulty:1,emoji:"😄",exBM:"Saya gembira hari ini.",exEN:"I am happy today."},
  {id:"pri-128",bm:"sedih",en:"sad",category:"sifat",level:"primary",difficulty:1,emoji:"😢",exBM:"Dia kelihatan sedih.",exEN:"She looks sad."},
  {id:"pri-129",bm:"takut",en:"afraid / scared",category:"sifat",level:"primary",difficulty:1,emoji:"😨",exBM:"Saya takut dengan ular.",exEN:"I am scared of snakes."},
  {id:"pri-130",bm:"marah",en:"angry",category:"sifat",level:"primary",difficulty:1,emoji:"😡",exBM:"Guru marah kerana kami bising.",exEN:"The teacher is angry because we are noisy."},

  // ── Nombor & Masa (Numbers & Time) ────────────────────────
  {id:"pri-131",bm:"satu",en:"one",category:"nombor",level:"primary",difficulty:1,emoji:"1️⃣",exBM:"Saya ada satu buku.",exEN:"I have one book."},
  {id:"pri-132",bm:"dua",en:"two",category:"nombor",level:"primary",difficulty:1,emoji:"2️⃣",exBM:"Ada dua ekor kucing.",exEN:"There are two cats."},
  {id:"pri-133",bm:"tiga",en:"three",category:"nombor",level:"primary",difficulty:1,emoji:"3️⃣",exBM:"Tiga orang murid.",exEN:"Three students."},
  {id:"pri-134",bm:"empat",en:"four",category:"nombor",level:"primary",difficulty:1,emoji:"4️⃣",exBM:"Empat biji epal.",exEN:"Four apples."},
  {id:"pri-135",bm:"lima",en:"five",category:"nombor",level:"primary",difficulty:1,emoji:"5️⃣",exBM:"Lima helai kertas.",exEN:"Five sheets of paper."},
  {id:"pri-136",bm:"pagi",en:"morning",category:"nombor",level:"primary",difficulty:1,emoji:"🌅",exBM:"Selamat pagi!",exEN:"Good morning!"},
  {id:"pri-137",bm:"petang",en:"afternoon / evening",category:"nombor",level:"primary",difficulty:1,emoji:"🌤️",exBM:"Selamat petang!",exEN:"Good afternoon!"},
  {id:"pri-138",bm:"malam",en:"night / evening",category:"nombor",level:"primary",difficulty:1,emoji:"🌙",exBM:"Selamat malam!",exEN:"Good night!"},
  {id:"pri-139",bm:"hari ini",en:"today",category:"nombor",level:"primary",difficulty:2,emoji:"📅",exBM:"Hari ini hari Isnin.",exEN:"Today is Monday."},
  {id:"pri-140",bm:"semalam",en:"yesterday",category:"nombor",level:"primary",difficulty:2,emoji:"⏮️",exBM:"Semalam saya pergi sekolah.",exEN:"Yesterday I went to school."},
  {id:"pri-141",bm:"esok",en:"tomorrow",category:"nombor",level:"primary",difficulty:2,emoji:"⏭️",exBM:"Esok ada ujian.",exEN:"Tomorrow there is a test."},
  {id:"pri-142",bm:"minggu",en:"week",category:"nombor",level:"primary",difficulty:1,emoji:"🗓️",exBM:"Satu minggu ada tujuh hari.",exEN:"One week has seven days."},
  {id:"pri-143",bm:"bulan",en:"month",category:"nombor",level:"primary",difficulty:1,emoji:"📆",exBM:"Satu tahun ada dua belas bulan.",exEN:"One year has twelve months."},
  {id:"pri-144",bm:"tahun",en:"year",category:"nombor",level:"primary",difficulty:1,emoji:"🎊",exBM:"Tahun baru akan tiba.",exEN:"The new year is coming."},
  {id:"pri-145",bm:"jam",en:"hour / clock",category:"nombor",level:"primary",difficulty:1,emoji:"🕐",exBM:"Sekarang pukul berapa?",exEN:"What time is it now?"},

  // ── Badan (Body) ──────────────────────────────────────────
  {id:"pri-146",bm:"kepala",en:"head",category:"badan",level:"primary",difficulty:1,emoji:"🗣️",exBM:"Kepala saya sakit.",exEN:"My head hurts."},
  {id:"pri-147",bm:"mata",en:"eye(s)",category:"badan",level:"primary",difficulty:1,emoji:"👁️",exBM:"Jaga mata anda.",exEN:"Take care of your eyes."},
  {id:"pri-148",bm:"telinga",en:"ear(s)",category:"badan",level:"primary",difficulty:1,emoji:"👂",exBM:"Telinga saya sakit.",exEN:"My ear hurts."},
  {id:"pri-149",bm:"hidung",en:"nose",category:"badan",level:"primary",difficulty:1,emoji:"👃",exBM:"Hidung saya berair.",exEN:"My nose is running."},
  {id:"pri-150",bm:"mulut",en:"mouth",category:"badan",level:"primary",difficulty:1,emoji:"👄",exBM:"Tutup mulut semasa makan.",exEN:"Close your mouth while eating."},
  {id:"pri-151",bm:"tangan",en:"hand(s) / arm",category:"badan",level:"primary",difficulty:1,emoji:"🤚",exBM:"Basuh tangan sebelum makan.",exEN:"Wash your hands before eating."},
  {id:"pri-152",bm:"kaki",en:"leg(s) / foot",category:"badan",level:"primary",difficulty:1,emoji:"🦶",exBM:"Kaki saya sakit.",exEN:"My leg hurts."},
  {id:"pri-153",bm:"rambut",en:"hair",category:"badan",level:"primary",difficulty:1,emoji:"💇",exBM:"Rambut dia panjang.",exEN:"Her hair is long."},
  {id:"pri-154",bm:"gigi",en:"teeth / tooth",category:"badan",level:"primary",difficulty:1,emoji:"🦷",exBM:"Gosok gigi dua kali sehari.",exEN:"Brush your teeth twice a day."},
  {id:"pri-155",bm:"perut",en:"stomach / belly",category:"badan",level:"primary",difficulty:1,emoji:"🫃",exBM:"Perut saya sakit.",exEN:"My stomach hurts."},

  // ── Tempat (Places) ───────────────────────────────────────
  {id:"pri-156",bm:"sekolah",en:"school",category:"tempat",level:"primary",difficulty:1,emoji:"🏫",exBM:"Saya pergi ke sekolah setiap hari.",exEN:"I go to school every day."},
  {id:"pri-157",bm:"hospital",en:"hospital",category:"tempat",level:"primary",difficulty:2,emoji:"🏥",exBM:"Doktor bekerja di hospital.",exEN:"Doctors work at the hospital."},
  {id:"pri-158",bm:"pasar",en:"market",category:"tempat",level:"primary",difficulty:1,emoji:"🛒",exBM:"Ibu membeli sayur di pasar.",exEN:"Mother buys vegetables at the market."},
  {id:"pri-159",bm:"masjid",en:"mosque",category:"tempat",level:"primary",difficulty:2,emoji:"🕌",exBM:"Bapa pergi ke masjid setiap Jumaat.",exEN:"Father goes to the mosque every Friday."},
  {id:"pri-160",bm:"perpustakaan",en:"library",category:"tempat",level:"primary",difficulty:3,emoji:"📚",exBM:"Saya membaca buku di perpustakaan.",exEN:"I read books at the library."},
  {id:"pri-161",bm:"kedai",en:"shop / store",category:"tempat",level:"primary",difficulty:1,emoji:"🏪",exBM:"Kami pergi ke kedai.",exEN:"We go to the shop."},
  {id:"pri-162",bm:"taman",en:"park / garden",category:"tempat",level:"primary",difficulty:1,emoji:"🌳",exBM:"Kami bermain di taman.",exEN:"We play in the park."},
  {id:"pri-163",bm:"pantai",en:"beach",category:"tempat",level:"primary",difficulty:1,emoji:"🏖️",exBM:"Kami pergi ke pantai.",exEN:"We go to the beach."},
  {id:"pri-164",bm:"bandar",en:"town / city",category:"tempat",level:"primary",difficulty:2,emoji:"🏙️",exBM:"Saya tinggal di bandar.",exEN:"I live in the city."},
  {id:"pri-165",bm:"kampung",en:"village",category:"tempat",level:"primary",difficulty:1,emoji:"🏡",exBM:"Datuk tinggal di kampung.",exEN:"Grandfather lives in the village."},

  // ── Kata Tanya (Question Words) ───────────────────────────
  {id:"pri-166",bm:"apa",en:"what",category:"kata_tanya",level:"primary",difficulty:1,emoji:"❓",exBM:"Apa nama kamu?",exEN:"What is your name?"},
  {id:"pri-167",bm:"siapa",en:"who",category:"kata_tanya",level:"primary",difficulty:1,emoji:"🙋",exBM:"Siapa nama kamu?",exEN:"Who are you?"},
  {id:"pri-168",bm:"di mana",en:"where",category:"kata_tanya",level:"primary",difficulty:1,emoji:"📍",exBM:"Di mana kamu tinggal?",exEN:"Where do you live?"},
  {id:"pri-169",bm:"bila",en:"when",category:"kata_tanya",level:"primary",difficulty:1,emoji:"📅",exBM:"Bila kamu bangun pagi?",exEN:"When do you wake up?"},
  {id:"pri-170",bm:"mengapa",en:"why",category:"kata_tanya",level:"primary",difficulty:2,emoji:"🤔",exBM:"Mengapa kamu lambat?",exEN:"Why are you late?"},
  {id:"pri-171",bm:"bagaimana",en:"how",category:"kata_tanya",level:"primary",difficulty:2,emoji:"💭",exBM:"Bagaimana kamu pergi ke sekolah?",exEN:"How do you go to school?"},
  {id:"pri-172",bm:"berapa",en:"how many / how much",category:"kata_tanya",level:"primary",difficulty:2,emoji:"🔢",exBM:"Berapa harga ini?",exEN:"How much does this cost?"},

  // ── Pakaian (Clothing) ────────────────────────────────────
  {id:"pri-173",bm:"baju",en:"shirt / clothes",category:"pakaian",level:"primary",difficulty:1,emoji:"👕",exBM:"Saya pakai baju putih.",exEN:"I wear a white shirt."},
  {id:"pri-174",bm:"seluar",en:"trousers / pants",category:"pakaian",level:"primary",difficulty:1,emoji:"👖",exBM:"Seluar saya biru.",exEN:"My trousers are blue."},
  {id:"pri-175",bm:"kasut",en:"shoes",category:"pakaian",level:"primary",difficulty:1,emoji:"👟",exBM:"Kasut saya putih.",exEN:"My shoes are white."},
  {id:"pri-176",bm:"topi",en:"hat / cap",category:"pakaian",level:"primary",difficulty:1,emoji:"🧢",exBM:"Dia pakai topi merah.",exEN:"He wears a red cap."},
  {id:"pri-177",bm:"stokin",en:"socks",category:"pakaian",level:"primary",difficulty:2,emoji:"🧦",exBM:"Pakai stokin sebelum kasut.",exEN:"Wear socks before shoes."},
  {id:"pri-178",bm:"baju sekolah",en:"school uniform",category:"pakaian",level:"primary",difficulty:2,emoji:"👔",exBM:"Pakai baju sekolah setiap hari.",exEN:"Wear school uniform every day."},

  // ── Kata Hubung (Connectors) ──────────────────────────────
  {id:"pri-179",bm:"dan",en:"and",category:"kata_hubung",level:"primary",difficulty:1,emoji:"➕",exBM:"Saya dan kamu kawan baik.",exEN:"You and I are good friends."},
  {id:"pri-180",bm:"tetapi",en:"but",category:"kata_hubung",level:"primary",difficulty:1,emoji:"↩️",exBM:"Saya lapar tetapi tiada makanan.",exEN:"I am hungry but there is no food."},
  {id:"pri-181",bm:"atau",en:"or",category:"kata_hubung",level:"primary",difficulty:1,emoji:"🔀",exBM:"Nak nasi atau roti?",exEN:"Do you want rice or bread?"},
  {id:"pri-182",bm:"kerana",en:"because",category:"kata_hubung",level:"primary",difficulty:2,emoji:"💡",exBM:"Saya rajin kerana saya suka belajar.",exEN:"I am diligent because I like studying."},
  {id:"pri-183",bm:"jika",en:"if",category:"kata_hubung",level:"primary",difficulty:2,emoji:"🤞",exBM:"Jika kamu rajin, kamu akan berjaya.",exEN:"If you are diligent, you will succeed."},
  {id:"pri-184",bm:"supaya",en:"so that / in order to",category:"kata_hubung",level:"primary",difficulty:3,emoji:"🎯",exBM:"Belajar rajin supaya dapat markah tinggi.",exEN:"Study hard so that you can get high marks."},

  // ── Pelbagai (Miscellaneous) ──────────────────────────────
  {id:"pri-185",bm:"terima kasih",en:"thank you",category:"umum",level:"primary",difficulty:1,emoji:"🙏",exBM:"Terima kasih atas bantuan kamu.",exEN:"Thank you for your help."},
  {id:"pri-186",bm:"maaf",en:"sorry / excuse me",category:"umum",level:"primary",difficulty:1,emoji:"😔",exBM:"Maaf, saya lambat.",exEN:"Sorry, I am late."},
  {id:"pri-187",bm:"tolong",en:"please / help",category:"umum",level:"primary",difficulty:1,emoji:"🆘",exBM:"Tolong saya.",exEN:"Please help me."},
  {id:"pri-188",bm:"sama-sama",en:"you are welcome",category:"umum",level:"primary",difficulty:2,emoji:"😊",exBM:"Sama-sama, tiada masalah.",exEN:"You are welcome, no problem."},
  {id:"pri-189",bm:"ya",en:"yes",category:"umum",level:"primary",difficulty:1,emoji:"✅",exBM:"Ya, saya faham.",exEN:"Yes, I understand."},
  {id:"pri-190",bm:"tidak",en:"no / not",category:"umum",level:"primary",difficulty:1,emoji:"❌",exBM:"Tidak, saya tidak faham.",exEN:"No, I do not understand."},
  {id:"pri-191",bm:"selamat datang",en:"welcome",category:"umum",level:"primary",difficulty:2,emoji:"🎉",exBM:"Selamat datang ke sekolah kami.",exEN:"Welcome to our school."},
  {id:"pri-192",bm:"hadiah",en:"gift / present",category:"umum",level:"primary",difficulty:2,emoji:"🎁",exBM:"Saya dapat hadiah.",exEN:"I received a gift."},
  {id:"pri-193",bm:"wang",en:"money",category:"umum",level:"primary",difficulty:1,emoji:"💰",exBM:"Saya simpan wang.",exEN:"I save money."},
  {id:"pri-194",bm:"warna",en:"colour",category:"umum",level:"primary",difficulty:1,emoji:"🌈",exBM:"Apa warna kegemaran kamu?",exEN:"What is your favourite colour?"},
  {id:"pri-195",bm:"nombor",en:"number",category:"umum",level:"primary",difficulty:1,emoji:"🔢",exBM:"Tulis nombor itu.",exEN:"Write that number."},
  {id:"pri-196",bm:"lagu",en:"song",category:"umum",level:"primary",difficulty:1,emoji:"🎵",exBM:"Lagu itu sangat merdu.",exEN:"The song is very melodious."},
  {id:"pri-197",bm:"cerita",en:"story",category:"umum",level:"primary",difficulty:1,emoji:"📖",exBM:"Ibu cerita sebelum tidur.",exEN:"Mother tells a story before sleeping."},
  {id:"pri-198",bm:"gambar",en:"picture / photo",category:"umum",level:"primary",difficulty:1,emoji:"🖼️",exBM:"Lukis gambar di kertas.",exEN:"Draw a picture on paper."},
  {id:"pri-199",bm:"mainan",en:"toy",category:"umum",level:"primary",difficulty:1,emoji:"🧸",exBM:"Adik bermain dengan mainan.",exEN:"My younger sibling plays with toys."},
  {id:"pri-200",bm:"sakit",en:"sick / pain",category:"umum",level:"primary",difficulty:1,emoji:"🤒",exBM:"Saya sakit hari ini.",exEN:"I am sick today."},

  // ════════════════════════════════════════════════════════════
  // SECONDARY — 200 words
  // ════════════════════════════════════════════════════════════

  // ── Kata Nama (Nouns) ─────────────────────────────────────
  {id:"sec-001",bm:"pengetahuan",en:"knowledge",category:"kata_nama",level:"secondary",difficulty:2,emoji:"🧠",baseWord:"tahu",baseWordEn:"know / aware",exBM:"Pengetahuan itu amat berharga.",exEN:"Knowledge is very precious."},
  {id:"sec-002",bm:"persekitaran",en:"environment",category:"kata_nama",level:"secondary",difficulty:3,emoji:"🌿",baseWord:"sekitar",baseWordEn:"surroundings / around",exBM:"Jaga persekitaran kita.",exEN:"Take care of our environment."},
  {id:"sec-003",bm:"kemajuan",en:"progress / advancement",category:"kata_nama",level:"secondary",difficulty:2,emoji:"📈",baseWord:"maju",baseWordEn:"advance / progress",exBM:"Malaysia terus mencapai kemajuan.",exEN:"Malaysia continues to achieve progress."},
  {id:"sec-004",bm:"masyarakat",en:"society / community",category:"kata_nama",level:"secondary",difficulty:2,emoji:"👥",exBM:"Kita hidup dalam masyarakat.",exEN:"We live in a society."},
  {id:"sec-005",bm:"kerajaan",en:"government",category:"kata_nama",level:"secondary",difficulty:2,emoji:"🏛️",baseWord:"raja",baseWordEn:"king / ruler",exBM:"Kerajaan membina sekolah baharu.",exEN:"The government builds new schools."},
  {id:"sec-006",bm:"pendidikan",en:"education",category:"kata_nama",level:"secondary",difficulty:2,emoji:"🎓",baseWord:"didik",baseWordEn:"educate / guide",exBM:"Pendidikan penting untuk masa depan.",exEN:"Education is important for the future."},
  {id:"sec-007",bm:"peluang",en:"opportunity / chance",category:"kata_nama",level:"secondary",difficulty:2,emoji:"🚪",exBM:"Ambil setiap peluang yang ada.",exEN:"Take every opportunity available."},
  {id:"sec-008",bm:"cabaran",en:"challenge",category:"kata_nama",level:"secondary",difficulty:2,emoji:"⚡",baseWord:"cabar",baseWordEn:"challenge / dare",exBM:"Hadapi cabaran dengan berani.",exEN:"Face challenges bravely."},
  {id:"sec-009",bm:"kejayaan",en:"success / achievement",category:"kata_nama",level:"secondary",difficulty:2,emoji:"🏆",baseWord:"jaya",baseWordEn:"success / triumph",exBM:"Kejayaan datang dari usaha.",exEN:"Success comes from effort."},
  {id:"sec-010",bm:"kegagalan",en:"failure",category:"kata_nama",level:"secondary",difficulty:2,emoji:"😔",baseWord:"gagal",baseWordEn:"fail",exBM:"Kegagalan adalah guru terbaik.",exEN:"Failure is the best teacher."},
  {id:"sec-011",bm:"perjuangan",en:"struggle / fight",category:"kata_nama",level:"secondary",difficulty:3,emoji:"💪",baseWord:"juang",baseWordEn:"fight / strive",exBM:"Perjuangan mereka tidak sia-sia.",exEN:"Their struggle was not in vain."},
  {id:"sec-012",bm:"tanggungjawab",en:"responsibility",category:"kata_nama",level:"secondary",difficulty:3,emoji:"🎯",baseWord:"tanggung",baseWordEn:"bear / carry (responsibility)",exBM:"Ini tanggungjawab kita bersama.",exEN:"This is our shared responsibility."},
  {id:"sec-013",bm:"kesedaran",en:"awareness / consciousness",category:"kata_nama",level:"secondary",difficulty:3,emoji:"💡",baseWord:"sedar",baseWordEn:"aware / conscious",exBM:"Kesedaran alam sekitar penting.",exEN:"Environmental awareness is important."},
  {id:"sec-014",bm:"kepentingan",en:"importance / interest",category:"kata_nama",level:"secondary",difficulty:2,emoji:"⭐",baseWord:"penting",baseWordEn:"important",exBM:"Kepentingan pendidikan tidak boleh diabaikan.",exEN:"The importance of education cannot be ignored."},
  {id:"sec-015",bm:"perkembangan",en:"development / growth",category:"kata_nama",level:"secondary",difficulty:3,emoji:"🌱",baseWord:"kembang",baseWordEn:"develop / bloom",exBM:"Perkembangan teknologi sangat pesat.",exEN:"Technological development is very rapid."},
  {id:"sec-016",bm:"penyelesaian",en:"solution / resolution",category:"kata_nama",level:"secondary",difficulty:3,emoji:"🔧",baseWord:"selesai",baseWordEn:"finish / resolve",exBM:"Cari penyelesaian kepada masalah.",exEN:"Find a solution to the problem."},
  {id:"sec-017",bm:"keamanan",en:"peace",category:"kata_nama",level:"secondary",difficulty:2,emoji:"🕊️",baseWord:"aman",baseWordEn:"peaceful / safe",exBM:"Kita perlu menjaga keamanan negara.",exEN:"We need to maintain peace in the country."},
  {id:"sec-018",bm:"kesejahteraan",en:"welfare / well-being",category:"kata_nama",level:"secondary",difficulty:3,emoji:"🌸",baseWord:"sejahtera",baseWordEn:"prosperous / well",exBM:"Kesejahteraan rakyat adalah keutamaan.",exEN:"The welfare of the people is a priority."},
  {id:"sec-019",bm:"usaha",en:"effort / attempt",category:"kata_nama",level:"secondary",difficulty:1,emoji:"💪",exBM:"Usaha keras membuahkan hasil.",exEN:"Hard effort bears results."},
  {id:"sec-020",bm:"impian",en:"dream / aspiration",category:"kata_nama",level:"secondary",difficulty:1,emoji:"💭",exBM:"Kejar impian anda dengan gigih.",exEN:"Chase your dreams with determination."},

  // ── Sains (Science) ───────────────────────────────────────
  {id:"sec-021",bm:"ekosistem",en:"ecosystem",category:"sains",level:"secondary",difficulty:3,emoji:"🌱",exBM:"Hutan adalah ekosistem penting.",exEN:"Forests are important ecosystems."},
  {id:"sec-022",bm:"pencemaran",en:"pollution",category:"sains",level:"secondary",difficulty:2,emoji:"🏭",baseWord:"cemar",baseWordEn:"pollute / dirty",exBM:"Pencemaran udara bahaya.",exEN:"Air pollution is dangerous."},
  {id:"sec-023",bm:"tenaga",en:"energy",category:"sains",level:"secondary",difficulty:2,emoji:"⚡",exBM:"Tenaga suria adalah bersih.",exEN:"Solar energy is clean."},
  {id:"sec-024",bm:"graviti",en:"gravity",category:"sains",level:"secondary",difficulty:2,emoji:"🍎",exBM:"Graviti menarik benda ke bawah.",exEN:"Gravity pulls things downward."},
  {id:"sec-025",bm:"molekul",en:"molecule",category:"sains",level:"secondary",difficulty:3,emoji:"⚗️",exBM:"Air terdiri daripada molekul.",exEN:"Water is made of molecules."},
  {id:"sec-026",bm:"atom",en:"atom",category:"sains",level:"secondary",difficulty:3,emoji:"⚛️",exBM:"Atom adalah zarah terkecil.",exEN:"Atoms are the smallest particles."},
  {id:"sec-027",bm:"cahaya",en:"light",category:"sains",level:"secondary",difficulty:1,emoji:"💡",exBM:"Cahaya bergerak sangat laju.",exEN:"Light moves very fast."},
  {id:"sec-028",bm:"haba",en:"heat",category:"sains",level:"secondary",difficulty:2,emoji:"🔥",exBM:"Haba boleh memuai benda.",exEN:"Heat can expand objects."},
  {id:"sec-029",bm:"oksigen",en:"oxygen",category:"sains",level:"secondary",difficulty:2,emoji:"💨",exBM:"Kita perlukan oksigen untuk hidup.",exEN:"We need oxygen to live."},
  {id:"sec-030",bm:"fotosintesis",en:"photosynthesis",category:"sains",level:"secondary",difficulty:3,emoji:"🌿",exBM:"Fotosintesis berlaku di dalam daun.",exEN:"Photosynthesis happens in leaves."},
  {id:"sec-031",bm:"hipotesis",en:"hypothesis",category:"sains",level:"secondary",difficulty:3,emoji:"🔬",exBM:"Buat hipotesis sebelum eksperimen.",exEN:"Form a hypothesis before the experiment."},
  {id:"sec-032",bm:"eksperimen",en:"experiment",category:"sains",level:"secondary",difficulty:2,emoji:"⚗️",exBM:"Eksperimen sains sangat menarik.",exEN:"Science experiments are very interesting."},
  {id:"sec-033",bm:"pemerhati",en:"observer",category:"sains",level:"secondary",difficulty:3,emoji:"👁️",baseWord:"pemerhatian",baseWordEn:"observation",exBM:"Pemerhati mencatat data dengan teliti.",exEN:"The observer records data carefully."},
  {id:"sec-034",bm:"organisma",en:"organism",category:"sains",level:"secondary",difficulty:3,emoji:"🦠",exBM:"Bakteria adalah organisma kecil.",exEN:"Bacteria are small organisms."},
  {id:"sec-035",bm:"planet",en:"planet",category:"sains",level:"secondary",difficulty:1,emoji:"🪐",exBM:"Bumi adalah planet ketiga.",exEN:"Earth is the third planet."},
  {id:"sec-036",bm:"sumber alam",en:"natural resources",category:"sains",level:"secondary",difficulty:2,emoji:"🌍",exBM:"Sumber alam perlu dijaga.",exEN:"Natural resources must be protected."},
  {id:"sec-037",bm:"penyebab",en:"cause / reason",category:"sains",level:"secondary",difficulty:2,emoji:"🔍",baseWord:"sebab",baseWordEn:"cause / because",exBM:"Apakah penyebab hujan asid?",exEN:"What is the cause of acid rain?"},
  {id:"sec-038",bm:"kesan",en:"effect / impact",category:"sains",level:"secondary",difficulty:2,emoji:"💥",exBM:"Apakah kesan pencemaran?",exEN:"What are the effects of pollution?"},
  {id:"sec-039",bm:"kitar semula",en:"recycle",category:"sains",level:"secondary",difficulty:2,emoji:"♻️",exBM:"Kitar semula untuk jaga alam.",exEN:"Recycle to protect the environment."},
  {id:"sec-040",bm:"kepupusan",en:"extinction",category:"sains",level:"secondary",difficulty:3,emoji:"🦕",baseWord:"pupus",baseWordEn:"extinct / disappear",exBM:"Harimau menghadapi ancaman kepupusan.",exEN:"Tigers face the threat of extinction."},

  // ── Sejarah & Geografi (History & Geography) ──────────────
  {id:"sec-041",bm:"kemerdekaan",en:"independence",category:"sejarah",level:"secondary",difficulty:2,emoji:"🇲🇾",baseWord:"merdeka",baseWordEn:"independent / free",exBM:"Malaysia merdeka pada tahun 1957.",exEN:"Malaysia became independent in 1957."},
  {id:"sec-042",bm:"penjajah",en:"colonizer",category:"sejarah",level:"secondary",difficulty:3,emoji:"⚔️",baseWord:"jajah",baseWordEn:"colonise",exBM:"Penjajah datang ke Tanah Melayu.",exEN:"Colonizers came to Malaya."},
  {id:"sec-043",bm:"warisan",en:"heritage / legacy",category:"sejarah",level:"secondary",difficulty:2,emoji:"🏛️",baseWord:"waris",baseWordEn:"heir / inherit",exBM:"Kita perlu jaga warisan budaya.",exEN:"We must preserve cultural heritage."},
  {id:"sec-044",bm:"tamadun",en:"civilisation",category:"sejarah",level:"secondary",difficulty:3,emoji:"🏺",exBM:"Tamadun manusia bermula ribuan tahun lalu.",exEN:"Human civilisation began thousands of years ago."},
  {id:"sec-045",bm:"benua",en:"continent",category:"sejarah",level:"secondary",difficulty:2,emoji:"🌍",exBM:"Terdapat tujuh benua di dunia.",exEN:"There are seven continents in the world."},
  {id:"sec-046",bm:"sempadan",en:"border / boundary",category:"sejarah",level:"secondary",difficulty:2,emoji:"📍",exBM:"Sempadan negara perlu dijaga.",exEN:"National borders must be protected."},
  {id:"sec-047",bm:"populasi",en:"population",category:"sejarah",level:"secondary",difficulty:2,emoji:"👥",exBM:"Populasi Malaysia terus meningkat.",exEN:"Malaysia's population keeps growing."},
  {id:"sec-048",bm:"bencana alam",en:"natural disaster",category:"sejarah",level:"secondary",difficulty:3,emoji:"🌊",exBM:"Bencana alam boleh menyebabkan kehilangan nyawa.",exEN:"Natural disasters can cause loss of life."},
  {id:"sec-049",bm:"perlembagaan",en:"constitution",category:"sejarah",level:"secondary",difficulty:3,emoji:"📜",baseWord:"lembaga",baseWordEn:"institution / body",exBM:"Perlembagaan Malaysia digubal pada 1957.",exEN:"Malaysia's constitution was drafted in 1957."},
  {id:"sec-050",bm:"sejarah",en:"history",category:"sejarah",level:"secondary",difficulty:1,emoji:"📜",exBM:"Kita belajar sejarah di sekolah.",exEN:"We learn history at school."},

  // ── Ekonomi (Economics) ───────────────────────────────────
  {id:"sec-051",bm:"ekonomi",en:"economy",category:"ekonomi",level:"secondary",difficulty:2,emoji:"💹",exBM:"Ekonomi Malaysia terus berkembang.",exEN:"Malaysia's economy keeps growing."},
  {id:"sec-052",bm:"pelaburan",en:"investment",category:"ekonomi",level:"secondary",difficulty:3,emoji:"💰",baseWord:"labur",baseWordEn:"invest",exBM:"Pelaburan asing penting bagi negara.",exEN:"Foreign investment is important for the country."},
  {id:"sec-053",bm:"eksport",en:"export",category:"ekonomi",level:"secondary",difficulty:2,emoji:"📦",exBM:"Malaysia mengeksport minyak sawit.",exEN:"Malaysia exports palm oil."},
  {id:"sec-054",bm:"import",en:"import",category:"ekonomi",level:"secondary",difficulty:2,emoji:"🚢",exBM:"Kita mengimport teknologi dari luar.",exEN:"We import technology from abroad."},
  {id:"sec-055",bm:"inflasi",en:"inflation",category:"ekonomi",level:"secondary",difficulty:3,emoji:"💸",exBM:"Inflasi menyebabkan harga barang naik.",exEN:"Inflation causes prices to rise."},
  {id:"sec-056",bm:"perdagangan",en:"trade / commerce",category:"ekonomi",level:"secondary",difficulty:2,emoji:"🤝",baseWord:"dagang",baseWordEn:"trade / commerce",exBM:"Perdagangan antara negara penting.",exEN:"Trade between countries is important."},
  {id:"sec-057",bm:"pendapatan",en:"income / earnings",category:"ekonomi",level:"secondary",difficulty:2,emoji:"💵",baseWord:"dapat",baseWordEn:"get / obtain",exBM:"Pendapatan rakyat semakin meningkat.",exEN:"People's income is increasing."},
  {id:"sec-058",bm:"perbelanjaan",en:"expenditure / spending",category:"ekonomi",level:"secondary",difficulty:3,emoji:"🛒",baseWord:"belanja",baseWordEn:"spend",exBM:"Kurangkan perbelanjaan yang tidak perlu.",exEN:"Reduce unnecessary expenditure."},
  {id:"sec-059",bm:"cukai",en:"tax",category:"ekonomi",level:"secondary",difficulty:2,emoji:"📋",exBM:"Cukai digunakan untuk membangun negara.",exEN:"Taxes are used to develop the country."},
  {id:"sec-060",bm:"kemiskinan",en:"poverty",category:"ekonomi",level:"secondary",difficulty:3,emoji:"😔",baseWord:"miskin",baseWordEn:"poor",exBM:"Kemiskinan perlu dihapuskan.",exEN:"Poverty must be eradicated."},

  // ── Kata Kerja (Verbs) ────────────────────────────────────
  {id:"sec-061",bm:"mencapai",en:"to achieve / attain",category:"kata_kerja",level:"secondary",difficulty:2,emoji:"🏆",baseWord:"capai",baseWordEn:"reach / achieve",exBM:"Dia mencapai kejayaan besar.",exEN:"She achieved great success."},
  {id:"sec-062",bm:"membangun",en:"to develop / build",category:"kata_kerja",level:"secondary",difficulty:2,emoji:"🏗️",baseWord:"bangun",baseWordEn:"rise / build",exBM:"Kita perlu membangun negara.",exEN:"We need to develop the country."},
  {id:"sec-063",bm:"menganalisis",en:"to analyse",category:"kata_kerja",level:"secondary",difficulty:3,emoji:"🔬",baseWord:"analisis",baseWordEn:"analysis",exBM:"Kita perlu menganalisis data ini.",exEN:"We need to analyse this data."},
  {id:"sec-064",bm:"menjelaskan",en:"to explain / clarify",category:"kata_kerja",level:"secondary",difficulty:2,emoji:"💬",baseWord:"jelas",baseWordEn:"clear / obvious",exBM:"Guru menjelaskan topik itu.",exEN:"The teacher explains the topic."},
  {id:"sec-065",bm:"mempertahankan",en:"to defend / maintain",category:"kata_kerja",level:"secondary",difficulty:3,emoji:"🛡️",baseWord:"tahan",baseWordEn:"endure / hold",exBM:"Kita mesti mempertahankan negara.",exEN:"We must defend our country."},
  {id:"sec-066",bm:"menyumbang",en:"to contribute",category:"kata_kerja",level:"secondary",difficulty:2,emoji:"🤲",baseWord:"sumbang",baseWordEn:"contribute",exBM:"Mari kita menyumbang kepada komuniti.",exEN:"Let us contribute to the community."},
  {id:"sec-067",bm:"meningkatkan",en:"to increase / improve",category:"kata_kerja",level:"secondary",difficulty:2,emoji:"📈",baseWord:"tingkat",baseWordEn:"level / raise",exBM:"Kita perlu meningkatkan prestasi.",exEN:"We need to improve performance."},
  {id:"sec-068",bm:"mengurangkan",en:"to reduce / decrease",category:"kata_kerja",level:"secondary",difficulty:2,emoji:"📉",baseWord:"kurang",baseWordEn:"less / reduce",exBM:"Kurangkan pembaziran makanan.",exEN:"Reduce food wastage."},
  {id:"sec-069",bm:"melaksanakan",en:"to implement / carry out",category:"kata_kerja",level:"secondary",difficulty:3,emoji:"⚙️",baseWord:"laksana",baseWordEn:"implement / execute",exBM:"Kita perlu melaksanakan rancangan ini.",exEN:"We need to implement this plan."},
  {id:"sec-070",bm:"mengatasi",en:"to overcome / solve",category:"kata_kerja",level:"secondary",difficulty:2,emoji:"🔓",baseWord:"atas",baseWordEn:"above / overcome",exBM:"Kita perlu mengatasi masalah ini.",exEN:"We need to overcome this problem."},
  {id:"sec-071",bm:"memupuk",en:"to foster / cultivate",category:"kata_kerja",level:"secondary",difficulty:3,emoji:"🌱",baseWord:"pupuk",baseWordEn:"fertilise / nurture",exBM:"Memupuk semangat cintakan negara.",exEN:"Foster the spirit of loving the country."},
  {id:"sec-072",bm:"menghargai",en:"to appreciate / value",category:"kata_kerja",level:"secondary",difficulty:2,emoji:"💎",baseWord:"harga",baseWordEn:"price / value",exBM:"Kita mesti menghargai jasa guru.",exEN:"We must appreciate the contributions of teachers."},
  {id:"sec-073",bm:"mewujudkan",en:"to create / establish",category:"kata_kerja",level:"secondary",difficulty:3,emoji:"✨",baseWord:"wujud",baseWordEn:"exist / exist",exBM:"Mewujudkan masyarakat yang harmoni.",exEN:"Create a harmonious society."},
  {id:"sec-074",bm:"memelihara",en:"to preserve / maintain",category:"kata_kerja",level:"secondary",difficulty:2,emoji:"🛡️",baseWord:"pelihara",baseWordEn:"care for / preserve",exBM:"Kita perlu memelihara alam sekitar.",exEN:"We need to preserve the environment."},
  {id:"sec-075",bm:"mengukuhkan",en:"to strengthen / reinforce",category:"kata_kerja",level:"secondary",difficulty:3,emoji:"💪",baseWord:"kukuh",baseWordEn:"strong / firm",exBM:"Mengukuhkan perpaduan kaum.",exEN:"Strengthen racial unity."},

  // ── Kata Adjektif (Adjectives) ────────────────────────────
  {id:"sec-076",bm:"cemerlang",en:"excellent / outstanding",category:"adjektif",level:"secondary",difficulty:2,emoji:"⭐",exBM:"Dia pelajar yang cemerlang.",exEN:"She is an excellent student."},
  {id:"sec-077",bm:"berkesan",en:"effective",category:"adjektif",level:"secondary",difficulty:2,emoji:"✅",baseWord:"kesan",baseWordEn:"effect / impact",exBM:"Kaedah ini sangat berkesan.",exEN:"This method is very effective."},
  {id:"sec-078",bm:"mencabar",en:"challenging",category:"adjektif",level:"secondary",difficulty:2,emoji:"⚡",baseWord:"cabar",baseWordEn:"challenge",exBM:"Soalan ini sangat mencabar.",exEN:"This question is very challenging."},
  {id:"sec-079",bm:"harmoni",en:"harmonious",category:"adjektif",level:"secondary",difficulty:2,emoji:"🕊️",exBM:"Masyarakat kita hidup harmoni.",exEN:"Our society lives harmoniously."},
  {id:"sec-080",bm:"berdaya saing",en:"competitive",category:"adjektif",level:"secondary",difficulty:3,emoji:"🏅",baseWord:"saing",baseWordEn:"compete",exBM:"Pelajar mesti berdaya saing.",exEN:"Students must be competitive."},
  {id:"sec-081",bm:"mapan",en:"sustainable / stable",category:"adjektif",level:"secondary",difficulty:3,emoji:"♻️",exBM:"Pembangunan mapan adalah penting.",exEN:"Sustainable development is important."},
  {id:"sec-082",bm:"kreatif",en:"creative",category:"adjektif",level:"secondary",difficulty:1,emoji:"🎨",exBM:"Dia seorang pelajar yang kreatif.",exEN:"She is a creative student."},
  {id:"sec-083",bm:"inovatif",en:"innovative",category:"adjektif",level:"secondary",difficulty:2,emoji:"💡",baseWord:"inovasi",baseWordEn:"innovation",exBM:"Pemikiran inovatif diperlukan.",exEN:"Innovative thinking is needed."},
  {id:"sec-084",bm:"gigih",en:"persevering / tenacious",category:"adjektif",level:"secondary",difficulty:2,emoji:"🏋️",exBM:"Dia belajar dengan gigih.",exEN:"She studies with perseverance."},
  {id:"sec-085",bm:"dermawan",en:"generous / charitable",category:"adjektif",level:"secondary",difficulty:3,emoji:"💝",exBM:"Dia seorang yang dermawan.",exEN:"He is a generous person."},
  {id:"sec-086",bm:"berwawasan",en:"visionary",category:"adjektif",level:"secondary",difficulty:3,emoji:"🔭",baseWord:"wawasan",baseWordEn:"vision / foresight",exBM:"Pemimpin yang berwawasan penting.",exEN:"Visionary leaders are important."},
  {id:"sec-087",bm:"patriotik",en:"patriotic",category:"adjektif",level:"secondary",difficulty:2,emoji:"🇲🇾",exBM:"Kita harus bersikap patriotik.",exEN:"We must be patriotic."},
  {id:"sec-088",bm:"bertanggungjawab",en:"responsible",category:"adjektif",level:"secondary",difficulty:2,emoji:"🎯",baseWord:"tanggung",baseWordEn:"bear / carry",exBM:"Jadilah pelajar yang bertanggungjawab.",exEN:"Be a responsible student."},
  {id:"sec-089",bm:"proaktif",en:"proactive",category:"adjektif",level:"secondary",difficulty:3,emoji:"🚀",exBM:"Sikap proaktif amat digalakkan.",exEN:"A proactive attitude is highly encouraged."},
  {id:"sec-090",bm:"kritis",en:"critical",category:"adjektif",level:"secondary",difficulty:2,emoji:"🤔",exBM:"Berfikiran kritis dalam pelajaran.",exEN:"Think critically in your studies."},

  // ── Frasa & Kata Hubung (Phrases & Connectors) ────────────
  {id:"sec-091",bm:"oleh itu",en:"therefore",category:"frasa",level:"secondary",difficulty:2,emoji:"➡️",exBM:"Oleh itu, kita perlu berhati-hati.",exEN:"Therefore, we need to be careful."},
  {id:"sec-092",bm:"walau bagaimanapun",en:"however",category:"frasa",level:"secondary",difficulty:3,emoji:"↩️",exBM:"Walau bagaimanapun, masalah masih ada.",exEN:"However, the problem still exists."},
  {id:"sec-093",bm:"selain itu",en:"besides that / furthermore",category:"frasa",level:"secondary",difficulty:2,emoji:"➕",exBM:"Selain itu, kita juga perlu belajar.",exEN:"Besides that, we also need to study."},
  {id:"sec-094",bm:"sebagai contoh",en:"for example",category:"frasa",level:"secondary",difficulty:2,emoji:"📝",exBM:"Sebagai contoh, kita boleh kitar semula.",exEN:"For example, we can recycle."},
  {id:"sec-095",bm:"kesimpulannya",en:"in conclusion",category:"frasa",level:"secondary",difficulty:2,emoji:"🔚",baseWord:"simpul",baseWordEn:"knot / conclude",exBM:"Kesimpulannya, kita mesti berusaha.",exEN:"In conclusion, we must strive."},
  {id:"sec-096",bm:"di samping itu",en:"in addition to that",category:"frasa",level:"secondary",difficulty:2,emoji:"➕",exBM:"Di samping itu, kita perlu bersatu.",exEN:"In addition to that, we need to unite."},
  {id:"sec-097",bm:"pada masa yang sama",en:"at the same time",category:"frasa",level:"secondary",difficulty:2,emoji:"⏱️",exBM:"Pada masa yang sama, kita mesti bersedia.",exEN:"At the same time, we must be prepared."},
  {id:"sec-098",bm:"sehubungan dengan itu",en:"in relation to that",category:"frasa",level:"secondary",difficulty:3,emoji:"🔗",exBM:"Sehubungan dengan itu, langkah diambil.",exEN:"In relation to that, steps have been taken."},
  {id:"sec-099",bm:"justeru itu",en:"hence / thus",category:"frasa",level:"secondary",difficulty:3,emoji:"➡️",exBM:"Justeru itu, kita mesti bertindak.",exEN:"Hence, we must take action."},
  {id:"sec-100",bm:"tambahan pula",en:"moreover / furthermore",category:"frasa",level:"secondary",difficulty:2,emoji:"📊",exBM:"Tambahan pula, alam sekitar terjejas.",exEN:"Moreover, the environment is affected."},

  // ── Teknologi (Technology) ────────────────────────────────
  {id:"sec-101",bm:"teknologi",en:"technology",category:"teknologi",level:"secondary",difficulty:1,emoji:"💻",exBM:"Teknologi memudahkan kehidupan.",exEN:"Technology makes life easier."},
  {id:"sec-102",bm:"rangkaian",en:"network",category:"teknologi",level:"secondary",difficulty:2,emoji:"🌐",baseWord:"rangkai",baseWordEn:"link / network",exBM:"Rangkaian internet laju di sini.",exEN:"The internet network is fast here."},
  {id:"sec-103",bm:"perisian",en:"software",category:"teknologi",level:"secondary",difficulty:3,emoji:"💿",exBM:"Perisian ini percuma digunakan.",exEN:"This software is free to use."},
  {id:"sec-104",bm:"perkakasan",en:"hardware",category:"teknologi",level:"secondary",difficulty:3,emoji:"🖥️",exBM:"Perkakasan komputer perlu dikemas kini.",exEN:"Computer hardware needs to be updated."},
  {id:"sec-105",bm:"kecerdasan buatan",en:"artificial intelligence",category:"teknologi",level:"secondary",difficulty:3,emoji:"🤖",exBM:"Kecerdasan buatan mengubah dunia.",exEN:"Artificial intelligence is changing the world."},
  {id:"sec-106",bm:"inovasi",en:"innovation",category:"teknologi",level:"secondary",difficulty:2,emoji:"💡",baseWord:"inovatif",baseWordEn:"innovative",exBM:"Inovasi membantu kemajuan.",exEN:"Innovation helps progress."},
  {id:"sec-107",bm:"data",en:"data",category:"teknologi",level:"secondary",difficulty:1,emoji:"📊",exBM:"Data ini sangat berguna.",exEN:"This data is very useful."},
  {id:"sec-108",bm:"digital",en:"digital",category:"teknologi",level:"secondary",difficulty:1,emoji:"📱",exBM:"Era digital membawa banyak perubahan.",exEN:"The digital era brings many changes."},
  {id:"sec-109",bm:"keselamatan siber",en:"cybersecurity",category:"teknologi",level:"secondary",difficulty:3,emoji:"🔐",exBM:"Keselamatan siber amat penting.",exEN:"Cybersecurity is very important."},
  {id:"sec-110",bm:"automasi",en:"automation",category:"teknologi",level:"secondary",difficulty:3,emoji:"🤖",exBM:"Automasi mengubah industri pembuatan.",exEN:"Automation is changing the manufacturing industry."},

  // ── Kesihatan (Health) ────────────────────────────────────
  {id:"sec-111",bm:"kesihatan",en:"health",category:"kesihatan",level:"secondary",difficulty:1,emoji:"❤️",baseWord:"sihat",baseWordEn:"healthy",exBM:"Jaga kesihatan anda.",exEN:"Take care of your health."},
  {id:"sec-112",bm:"penyakit",en:"disease / illness",category:"kesihatan",level:"secondary",difficulty:2,emoji:"🤒",baseWord:"sakit",baseWordEn:"sick / pain",exBM:"Penyakit boleh dicegah.",exEN:"Diseases can be prevented."},
  {id:"sec-113",bm:"vaksin",en:"vaccine",category:"kesihatan",level:"secondary",difficulty:2,emoji:"💉",exBM:"Vaksin melindungi daripada penyakit.",exEN:"Vaccines protect against disease."},
  {id:"sec-114",bm:"pemakanan",en:"nutrition",category:"kesihatan",level:"secondary",difficulty:2,emoji:"🥗",baseWord:"makan",baseWordEn:"eat",exBM:"Pemakanan seimbang penting untuk kesihatan.",exEN:"Balanced nutrition is important for health."},
  {id:"sec-115",bm:"senaman",en:"exercise",category:"kesihatan",level:"secondary",difficulty:2,emoji:"🏃",exBM:"Lakukan senaman setiap hari.",exEN:"Do exercise every day."},
  {id:"sec-116",bm:"pencegahan",en:"prevention",category:"kesihatan",level:"secondary",difficulty:3,emoji:"🛡️",baseWord:"cegah",baseWordEn:"prevent",exBM:"Pencegahan lebih baik daripada rawatan.",exEN:"Prevention is better than cure."},
  {id:"sec-117",bm:"rawatan",en:"treatment",category:"kesihatan",level:"secondary",difficulty:2,emoji:"💊",baseWord:"rawat",baseWordEn:"treat / care",exBM:"Dapatkan rawatan dengan segera.",exEN:"Get treatment immediately."},
  {id:"sec-118",bm:"kebersihan",en:"cleanliness / hygiene",category:"kesihatan",level:"secondary",difficulty:2,emoji:"🧼",baseWord:"bersih",baseWordEn:"clean",exBM:"Jaga kebersihan diri dan persekitaran.",exEN:"Maintain personal and environmental cleanliness."},
  {id:"sec-119",bm:"mental",en:"mental",category:"kesihatan",level:"secondary",difficulty:2,emoji:"🧠",exBM:"Kesihatan mental sama penting.",exEN:"Mental health is equally important."},
  {id:"sec-120",bm:"fizikal",en:"physical",category:"kesihatan",level:"secondary",difficulty:1,emoji:"💪",exBM:"Aktiviti fizikal baik untuk kesihatan.",exEN:"Physical activity is good for health."},

  // ── Budaya (Culture) ──────────────────────────────────────
  {id:"sec-121",bm:"budaya",en:"culture",category:"budaya",level:"secondary",difficulty:1,emoji:"🎭",exBM:"Budaya kita kaya dan unik.",exEN:"Our culture is rich and unique."},
  {id:"sec-122",bm:"adat",en:"customs / tradition",category:"budaya",level:"secondary",difficulty:2,emoji:"🎎",exBM:"Kita hormati adat setempat.",exEN:"We respect local customs."},
  {id:"sec-123",bm:"perpaduan",en:"unity",category:"budaya",level:"secondary",difficulty:2,emoji:"🤝",baseWord:"padu",baseWordEn:"unite / solid",exBM:"Perpaduan kaum adalah kekuatan kita.",exEN:"Racial unity is our strength."},
  {id:"sec-124",bm:"kepelbagaian",en:"diversity",category:"budaya",level:"secondary",difficulty:3,emoji:"🌈",baseWord:"pelbagai",baseWordEn:"various / diverse",exBM:"Kepelbagaian budaya menambah kekayaan.",exEN:"Cultural diversity adds richness."},
  {id:"sec-125",bm:"perayaan",en:"festival / celebration",category:"budaya",level:"secondary",difficulty:2,emoji:"🎉",baseWord:"raya",baseWordEn:"celebrate / festival",exBM:"Perayaan disambut bersama-sama.",exEN:"Festivals are celebrated together."},
  {id:"sec-126",bm:"toleransi",en:"tolerance",category:"budaya",level:"secondary",difficulty:2,emoji:"🕊️",exBM:"Toleransi penting dalam masyarakat berbilang kaum.",exEN:"Tolerance is important in a multiracial society."},
  {id:"sec-127",bm:"patriotisme",en:"patriotism",category:"budaya",level:"secondary",difficulty:3,emoji:"🇲🇾",baseWord:"patriot",baseWordEn:"patriot",exBM:"Patriotisme bermaksud cinta akan negara.",exEN:"Patriotism means love for the country."},
  {id:"sec-128",bm:"hormat",en:"respect",category:"budaya",level:"secondary",difficulty:1,emoji:"🙏",exBM:"Hormati orang yang lebih tua.",exEN:"Respect the elderly."},
  {id:"sec-129",bm:"kerjasama",en:"cooperation / teamwork",category:"budaya",level:"secondary",difficulty:2,emoji:"🤝",baseWord:"kerja",baseWordEn:"work",exBM:"Kerjasama penting dalam sebuah pasukan.",exEN:"Cooperation is important in a team."},
  {id:"sec-130",bm:"kesukarelaan",en:"volunteerism",category:"budaya",level:"secondary",difficulty:3,emoji:"🙋",baseWord:"sukarela",baseWordEn:"voluntary / volunteer",exBM:"Kesukarelaan mencerminkan semangat murni.",exEN:"Volunteerism reflects a noble spirit."},

  // ── Nilai Murni (Values) ──────────────────────────────────
  {id:"sec-131",bm:"integriti",en:"integrity",category:"nilai",level:"secondary",difficulty:3,emoji:"🛡️",exBM:"Integriti adalah nilai yang mulia.",exEN:"Integrity is a noble value."},
  {id:"sec-132",bm:"amanah",en:"trustworthiness",category:"nilai",level:"secondary",difficulty:2,emoji:"🤲",exBM:"Jadilah seorang yang amanah.",exEN:"Be a trustworthy person."},
  {id:"sec-133",bm:"dedikasi",en:"dedication",category:"nilai",level:"secondary",difficulty:2,emoji:"🎯",exBM:"Dedikasi beliau patut dicontohi.",exEN:"His dedication is worth emulating."},
  {id:"sec-134",bm:"motivasi",en:"motivation",category:"nilai",level:"secondary",difficulty:2,emoji:"🚀",exBM:"Motivasi penting untuk berjaya.",exEN:"Motivation is important to succeed."},
  {id:"sec-135",bm:"nilai",en:"value / principle",category:"nilai",level:"secondary",difficulty:1,emoji:"💎",exBM:"Nilai murni perlu diamalkan.",exEN:"Noble values must be practised."},
  {id:"sec-136",bm:"hak",en:"rights",category:"nilai",level:"secondary",difficulty:2,emoji:"⚖️",exBM:"Setiap orang mempunyai hak.",exEN:"Every person has rights."},
  {id:"sec-137",bm:"kewajipan",en:"obligation / duty",category:"nilai",level:"secondary",difficulty:3,emoji:"📋",baseWord:"wajib",baseWordEn:"obligatory / compulsory",exBM:"Kewajipan kita ialah belajar bersungguh.",exEN:"Our duty is to study diligently."},
  {id:"sec-138",bm:"kejujuran",en:"honesty",category:"nilai",level:"secondary",difficulty:2,emoji:"✨",baseWord:"jujur",baseWordEn:"honest",exBM:"Kejujuran adalah asas kepercayaan.",exEN:"Honesty is the foundation of trust."},
  {id:"sec-139",bm:"keadilan",en:"justice / fairness",category:"nilai",level:"secondary",difficulty:2,emoji:"⚖️",baseWord:"adil",baseWordEn:"fair / just",exBM:"Keadilan perlu ditegakkan.",exEN:"Justice must be upheld."},
  {id:"sec-140",bm:"keberanian",en:"bravery / courage",category:"nilai",level:"secondary",difficulty:2,emoji:"🦁",baseWord:"berani",baseWordEn:"brave / courageous",exBM:"Keberanian diperlukan untuk berjaya.",exEN:"Courage is needed to succeed."},

  // ── Kepimpinan & Organisasi (Leadership & Org) ────────────
  {id:"sec-141",bm:"kepimpinan",en:"leadership",category:"kepimpinan",level:"secondary",difficulty:3,emoji:"👑",baseWord:"pimpin",baseWordEn:"lead / guide",exBM:"Kepimpinan yang baik penting.",exEN:"Good leadership is important."},
  {id:"sec-142",bm:"strategi",en:"strategy",category:"kepimpinan",level:"secondary",difficulty:2,emoji:"♟️",exBM:"Kita perlukan strategi yang baik.",exEN:"We need a good strategy."},
  {id:"sec-143",bm:"analisis",en:"analysis",category:"kepimpinan",level:"secondary",difficulty:3,emoji:"🔍",exBM:"Analisis data menunjukkan trend.",exEN:"Data analysis shows trends."},
  {id:"sec-144",bm:"komunikasi",en:"communication",category:"kepimpinan",level:"secondary",difficulty:2,emoji:"💬",exBM:"Komunikasi yang baik penting.",exEN:"Good communication is important."},
  {id:"sec-145",bm:"perancangan",en:"planning",category:"kepimpinan",level:"secondary",difficulty:2,emoji:"📋",baseWord:"rancang",baseWordEn:"plan",exBM:"Perancangan yang baik menentukan kejayaan.",exEN:"Good planning determines success."},
  {id:"sec-146",bm:"pelaksanaan",en:"implementation / execution",category:"kepimpinan",level:"secondary",difficulty:3,emoji:"⚙️",baseWord:"laksana",baseWordEn:"execute",exBM:"Pelaksanaan program berjalan lancar.",exEN:"Programme implementation runs smoothly."},
  {id:"sec-147",bm:"penilaian",en:"assessment / evaluation",category:"kepimpinan",level:"secondary",difficulty:2,emoji:"📊",baseWord:"nilai",baseWordEn:"value / assess",exBM:"Penilaian dibuat secara adil.",exEN:"Assessment is done fairly."},
  {id:"sec-148",bm:"pengurusan",en:"management",category:"kepimpinan",level:"secondary",difficulty:2,emoji:"📁",baseWord:"urus",baseWordEn:"manage / handle",exBM:"Pengurusan masa yang baik penting.",exEN:"Good time management is important."},
  {id:"sec-149",bm:"persaingan",en:"competition",category:"kepimpinan",level:"secondary",difficulty:2,emoji:"🥊",baseWord:"saing",baseWordEn:"compete",exBM:"Persaingan sihat menggalakkan kemajuan.",exEN:"Healthy competition encourages progress."},
  {id:"sec-150",bm:"pencapaian",en:"achievement / accomplishment",category:"kepimpinan",level:"secondary",difficulty:2,emoji:"🏅",baseWord:"capai",baseWordEn:"achieve / reach",exBM:"Pencapaian akademik beliau cemerlang.",exEN:"His academic achievement is excellent."},

  // ── Alam Sekitar (Environment) ────────────────────────────
  {id:"sec-151",bm:"pemanasan global",en:"global warming",category:"alam_sekitar",level:"secondary",difficulty:3,emoji:"🌡️",exBM:"Pemanasan global ancaman serius.",exEN:"Global warming is a serious threat."},
  {id:"sec-152",bm:"perubahan iklim",en:"climate change",category:"alam_sekitar",level:"secondary",difficulty:3,emoji:"🌪️",exBM:"Perubahan iklim memberi kesan besar.",exEN:"Climate change has a big impact."},
  {id:"sec-153",bm:"biodiversiti",en:"biodiversity",category:"alam_sekitar",level:"secondary",difficulty:3,emoji:"🦜",exBM:"Biodiversiti Malaysia sangat kaya.",exEN:"Malaysia's biodiversity is very rich."},
  {id:"sec-154",bm:"pembukaan hutan",en:"deforestation",category:"alam_sekitar",level:"secondary",difficulty:3,emoji:"🌲",baseWord:"buka",baseWordEn:"open / clear",exBM:"Pembukaan hutan mengancam hidupan liar.",exEN:"Deforestation threatens wildlife."},
  {id:"sec-155",bm:"tenaga boleh baharu",en:"renewable energy",category:"alam_sekitar",level:"secondary",difficulty:3,emoji:"☀️",exBM:"Tenaga boleh baharu menggantikan bahan api fosil.",exEN:"Renewable energy replaces fossil fuels."},
  {id:"sec-156",bm:"pembaziran",en:"waste / wastage",category:"alam_sekitar",level:"secondary",difficulty:2,emoji:"🗑️",baseWord:"bazir",baseWordEn:"waste",exBM:"Kurangkan pembaziran makanan.",exEN:"Reduce food wastage."},
  {id:"sec-157",bm:"penghijauan",en:"greening / afforestation",category:"alam_sekitar",level:"secondary",difficulty:3,emoji:"🌱",baseWord:"hijau",baseWordEn:"green",exBM:"Program penghijauan bandar perlu diteruskan.",exEN:"Urban greening programmes must continue."},
  {id:"sec-158",bm:"hidupan liar",en:"wildlife",category:"alam_sekitar",level:"secondary",difficulty:2,emoji:"🐾",baseWord:"hidup",baseWordEn:"live / alive",exBM:"Hidupan liar perlu dilindungi.",exEN:"Wildlife must be protected."},
  {id:"sec-159",bm:"pengurusan sisa",en:"waste management",category:"alam_sekitar",level:"secondary",difficulty:3,emoji:"♻️",exBM:"Pengurusan sisa yang baik penting.",exEN:"Good waste management is important."},
  {id:"sec-160",bm:"kawasan perlindungan",en:"protected area",category:"alam_sekitar",level:"secondary",difficulty:3,emoji:"🌿",exBM:"Kawasan perlindungan menjaga hidupan liar.",exEN:"Protected areas safeguard wildlife."},

  // ── Sastera (Literature & Language) ──────────────────────
  {id:"sec-161",bm:"karangan",en:"essay / composition",category:"sastera",level:"secondary",difficulty:2,emoji:"📝",baseWord:"karang",baseWordEn:"compose / arrange",exBM:"Tulis karangan tentang alam sekitar.",exEN:"Write an essay about the environment."},
  {id:"sec-162",bm:"puisi",en:"poetry / poem",category:"sastera",level:"secondary",difficulty:2,emoji:"🎭",exBM:"Puisi itu indah sekali.",exEN:"The poem is very beautiful."},
  {id:"sec-163",bm:"peribahasa",en:"proverb",category:"sastera",level:"secondary",difficulty:3,emoji:"📖",exBM:"Peribahasa mencerminkan budaya bangsa.",exEN:"Proverbs reflect the culture of a nation."},
  {id:"sec-164",bm:"pantun",en:"pantun (Malay poem)",category:"sastera",level:"secondary",difficulty:3,emoji:"🎵",exBM:"Pantun adalah warisan sastera Melayu.",exEN:"Pantun is a heritage of Malay literature."},
  {id:"sec-165",bm:"novel",en:"novel",category:"sastera",level:"secondary",difficulty:1,emoji:"📚",exBM:"Novel itu menarik.",exEN:"The novel is interesting."},
  {id:"sec-166",bm:"penceritaan",en:"narration / storytelling",category:"sastera",level:"secondary",difficulty:3,emoji:"📖",baseWord:"cerita",baseWordEn:"story",exBM:"Penceritaan yang baik menarik perhatian.",exEN:"Good narration attracts attention."},
  {id:"sec-167",bm:"tema",en:"theme",category:"sastera",level:"secondary",difficulty:2,emoji:"🎯",exBM:"Tema cerita itu ialah kasih sayang.",exEN:"The theme of the story is love."},
  {id:"sec-168",bm:"watak",en:"character",category:"sastera",level:"secondary",difficulty:2,emoji:"🎭",exBM:"Watak utama ialah seorang pelajar.",exEN:"The main character is a student."},
  {id:"sec-169",bm:"latar",en:"setting",category:"sastera",level:"secondary",difficulty:2,emoji:"🏞️",exBM:"Latar cerita ini ialah kampung.",exEN:"The setting of this story is a village."},
  {id:"sec-170",bm:"plot",en:"plot",category:"sastera",level:"secondary",difficulty:2,emoji:"📊",exBM:"Plot cerita itu sangat menarik.",exEN:"The plot of the story is very interesting."},

  // ── Matematik (Mathematics) ───────────────────────────────
  {id:"sec-171",bm:"persamaan",en:"equation",category:"matematik",level:"secondary",difficulty:3,emoji:"➗",baseWord:"sama",baseWordEn:"equal / same",exBM:"Selesaikan persamaan matematik ini.",exEN:"Solve this mathematical equation."},
  {id:"sec-172",bm:"pemboleh ubah",en:"variable",category:"matematik",level:"secondary",difficulty:3,emoji:"x",baseWord:"ubah",baseWordEn:"change",exBM:"x ialah pemboleh ubah.",exEN:"x is a variable."},
  {id:"sec-173",bm:"statistik",en:"statistics",category:"matematik",level:"secondary",difficulty:3,emoji:"📊",exBM:"Statistik menunjukkan peningkatan.",exEN:"Statistics show an increase."},
  {id:"sec-174",bm:"pecahan",en:"fraction",category:"matematik",level:"secondary",difficulty:2,emoji:"½",baseWord:"pecah",baseWordEn:"break / fraction",exBM:"½ ialah satu pecahan.",exEN:"½ is a fraction."},
  {id:"sec-175",bm:"nisbah",en:"ratio",category:"matematik",level:"secondary",difficulty:2,emoji:"⚖️",exBM:"Nisbah murid lelaki kepada perempuan.",exEN:"The ratio of male to female students."},

  // ── Sivik & Kewarganegaraan (Civics) ─────────────────────
  {id:"sec-176",bm:"demokrasi",en:"democracy",category:"sivik",level:"secondary",difficulty:3,emoji:"🗳️",exBM:"Malaysia mengamalkan demokrasi berparlimen.",exEN:"Malaysia practises parliamentary democracy."},
  {id:"sec-177",bm:"undang-undang",en:"law",category:"sivik",level:"secondary",difficulty:2,emoji:"⚖️",exBM:"Semua warganegara perlu ikut undang-undang.",exEN:"All citizens must follow the law."},
  {id:"sec-178",bm:"pilihan raya",en:"election",category:"sivik",level:"secondary",difficulty:2,emoji:"🗳️",baseWord:"pilih",baseWordEn:"choose / select",exBM:"Pilihan raya diadakan setiap lima tahun.",exEN:"Elections are held every five years."},
  {id:"sec-179",bm:"warganegara",en:"citizen",category:"sivik",level:"secondary",difficulty:2,emoji:"🪪",baseWord:"negara",baseWordEn:"country",exBM:"Setiap warganegara ada hak dan tanggungjawab.",exEN:"Every citizen has rights and responsibilities."},
  {id:"sec-180",bm:"parlimen",en:"parliament",category:"sivik",level:"secondary",difficulty:3,emoji:"🏛️",exBM:"Undang-undang dibuat di parlimen.",exEN:"Laws are made in parliament."},
  {id:"sec-181",bm:"menteri",en:"minister",category:"sivik",level:"secondary",difficulty:2,emoji:"👔",exBM:"Menteri bertanggungjawab kepada rakyat.",exEN:"Ministers are responsible to the people."},
  {id:"sec-182",bm:"kedaulatan",en:"sovereignty",category:"sivik",level:"secondary",difficulty:3,emoji:"👑",baseWord:"daulat",baseWordEn:"sovereignty",exBM:"Kedaulatan negara perlu dipertahankan.",exEN:"National sovereignty must be defended."},
  {id:"sec-183",bm:"hak asasi manusia",en:"human rights",category:"sivik",level:"secondary",difficulty:3,emoji:"✊",exBM:"Hak asasi manusia perlu dilindungi.",exEN:"Human rights must be protected."},
  {id:"sec-184",bm:"budi bicara",en:"discretion / wisdom",category:"sivik",level:"secondary",difficulty:3,emoji:"🤔",exBM:"Gunakan budi bicara dalam membuat keputusan.",exEN:"Use discretion in making decisions."},
  {id:"sec-185",bm:"rukun negara",en:"national principles (Rukun Negara)",category:"sivik",level:"secondary",difficulty:3,emoji:"🇲🇾",exBM:"Rukun Negara adalah asas perpaduan.",exEN:"Rukun Negara is the foundation of unity."},

  // ── Pelbagai (Miscellaneous Secondary) ───────────────────
  {id:"sec-186",bm:"bakat",en:"talent",category:"nilai",level:"secondary",difficulty:2,emoji:"🌟",exBM:"Dia mempunyai bakat dalam muzik.",exEN:"She has a talent in music."},
  {id:"sec-187",bm:"pengaruh",en:"influence",category:"kata_nama",level:"secondary",difficulty:2,emoji:"🌊",baseWord:"arus",baseWordEn:"current / influence",exBM:"Pengaruh rakan sebaya sangat besar.",exEN:"The influence of peers is very great."},
  {id:"sec-188",bm:"pembangunan",en:"development",category:"kata_nama",level:"secondary",difficulty:2,emoji:"🏗️",baseWord:"bangun",baseWordEn:"rise / build",exBM:"Pembangunan negara pesat berlaku.",exEN:"National development is progressing rapidly."},
  {id:"sec-189",bm:"pengangkutan",en:"transportation",category:"kata_nama",level:"secondary",difficulty:2,emoji:"🚌",baseWord:"angkut",baseWordEn:"transport / carry",exBM:"Pengangkutan awam semakin baik.",exEN:"Public transportation is getting better."},
  {id:"sec-190",bm:"infrastruktur",en:"infrastructure",category:"kata_nama",level:"secondary",difficulty:3,emoji:"🌉",exBM:"Infrastruktur negara perlu diperbaiki.",exEN:"The country's infrastructure needs improvement."},
  {id:"sec-191",bm:"hubungan diplomatik",en:"diplomatic relations",category:"sivik",level:"secondary",difficulty:3,emoji:"🤝",exBM:"Hubungan diplomatik antara negara penting.",exEN:"Diplomatic relations between countries are important."},
  {id:"sec-192",bm:"globalisasi",en:"globalisation",category:"kata_nama",level:"secondary",difficulty:3,emoji:"🌐",exBM:"Globalisasi memberi kesan kepada budaya.",exEN:"Globalisation has an impact on culture."},
  {id:"sec-193",bm:"imigresen",en:"immigration",category:"kata_nama",level:"secondary",difficulty:3,emoji:"✈️",exBM:"Imigresen mengawal kemasukan orang asing.",exEN:"Immigration controls the entry of foreigners."},
  {id:"sec-194",bm:"etnik",en:"ethnic",category:"budaya",level:"secondary",difficulty:2,emoji:"🌍",exBM:"Malaysia mempunyai pelbagai etnik.",exEN:"Malaysia has various ethnic groups."},
  {id:"sec-195",bm:"diskriminasi",en:"discrimination",category:"nilai",level:"secondary",difficulty:3,emoji:"🚫",exBM:"Diskriminasi tidak boleh diterima.",exEN:"Discrimination cannot be tolerated."},
  {id:"sec-196",bm:"kesaksamaan",en:"equality",category:"nilai",level:"secondary",difficulty:3,emoji:"⚖️",baseWord:"sama",baseWordEn:"same / equal",exBM:"Kesaksamaan gender perlu diperjuangkan.",exEN:"Gender equality must be fought for."},
  {id:"sec-197",bm:"pemberdayaan",en:"empowerment",category:"nilai",level:"secondary",difficulty:3,emoji:"💪",baseWord:"dayam",baseWordEn:"power / capacity",exBM:"Pemberdayaan wanita penting.",exEN:"Women's empowerment is important."},
  {id:"sec-198",bm:"akses",en:"access",category:"kata_nama",level:"secondary",difficulty:2,emoji:"🔓",exBM:"Semua orang perlu akses kepada pendidikan.",exEN:"Everyone needs access to education."},
  {id:"sec-199",bm:"pemikiran kritikal",en:"critical thinking",category:"kepimpinan",level:"secondary",difficulty:3,emoji:"🧠",exBM:"Pemikiran kritikal penting dalam era moden.",exEN:"Critical thinking is important in the modern era."},
  {id:"sec-200",bm:"kemampanan",en:"sustainability",category:"alam_sekitar",level:"secondary",difficulty:3,emoji:"♻️",baseWord:"mampu",baseWordEn:"able / capable",exBM:"Kemampanan alam sekitar perlu dijaga.",exEN:"Environmental sustainability must be maintained."},

]; // END WORDS

// ════════════════════════════════════════════════════════════
// CATEGORIES CONFIG
// To add a new category: add entry here + tag words with category id
// ════════════════════════════════════════════════════════════
const CATEGORIES = {
  primary: [
    {id:"all",      label:"All Words",      labelBM:"Semua Perkataan",  icon:"🌟"},
    {id:"haiwan",   label:"Animals",        labelBM:"Haiwan",           icon:"🐾"},
    {id:"makanan",  label:"Food",           labelBM:"Makanan",          icon:"🍚"},
    {id:"keluarga", label:"Family",         labelBM:"Keluarga",         icon:"👨‍👩‍👧"},
    {id:"warna",    label:"Colours",        labelBM:"Warna",            icon:"🎨"},
    {id:"sekolah",  label:"School",         labelBM:"Sekolah",          icon:"📚"},
    {id:"rumah",    label:"Home",           labelBM:"Rumah",            icon:"🏠"},
    {id:"alam",     label:"Nature",         labelBM:"Alam Sekitar",     icon:"🌳"},
    {id:"perbuatan",label:"Actions",        labelBM:"Perbuatan",        icon:"⚽"},
    {id:"sifat",    label:"Describing",     labelBM:"Sifat",            icon:"💡"},
    {id:"nombor",   label:"Time & Numbers", labelBM:"Nombor & Masa",    icon:"🕐"},
    {id:"badan",    label:"Body",           labelBM:"Anggota Badan",    icon:"🧍"},
    {id:"tempat",   label:"Places",         labelBM:"Tempat",           icon:"📍"},
    {id:"kata_tanya",label:"Questions",     labelBM:"Kata Tanya",       icon:"❓"},
    {id:"pakaian",  label:"Clothing",       labelBM:"Pakaian",          icon:"👕"},
    {id:"kata_hubung",label:"Connectors",   labelBM:"Kata Hubung",      icon:"🔗"},
    {id:"umum",     label:"General",        labelBM:"Umum",             icon:"📌"},
  ],
  secondary: [
    {id:"all",        label:"All Words",     labelBM:"Semua Perkataan",  icon:"🌟"},
    {id:"kata_nama",  label:"Nouns",         labelBM:"Kata Nama",        icon:"📖"},
    {id:"kata_kerja", label:"Verbs",         labelBM:"Kata Kerja",       icon:"⚡"},
    {id:"adjektif",   label:"Adjectives",    labelBM:"Adjektif",         icon:"✨"},
    {id:"frasa",      label:"Phrases",       labelBM:"Frasa",            icon:"💬"},
    {id:"sains",      label:"Science",       labelBM:"Sains",            icon:"🔬"},
    {id:"sejarah",    label:"History",       labelBM:"Sejarah",          icon:"🏛️"},
    {id:"ekonomi",    label:"Economics",     labelBM:"Ekonomi",          icon:"💹"},
    {id:"teknologi",  label:"Technology",    labelBM:"Teknologi",        icon:"💻"},
    {id:"kesihatan",  label:"Health",        labelBM:"Kesihatan",        icon:"❤️"},
    {id:"budaya",     label:"Culture",       labelBM:"Budaya",           icon:"🎭"},
    {id:"nilai",      label:"Values",        labelBM:"Nilai Murni",      icon:"💎"},
    {id:"kepimpinan", label:"Leadership",    labelBM:"Kepimpinan",       icon:"👑"},
    {id:"alam_sekitar",label:"Environment",  labelBM:"Alam Sekitar",     icon:"🌿"},
    {id:"sastera",    label:"Literature",    labelBM:"Sastera",          icon:"📝"},
    {id:"matematik",  label:"Mathematics",   labelBM:"Matematik",        icon:"➗"},
    {id:"sivik",      label:"Civics",        labelBM:"Sivik",            icon:"🗳️"},
  ],
};

// ════════════════════════════════════════════════════════════
// PERIBAHASA — 30 Malay proverbs
// Available for BOTH primary (simpler ones, difficulty 1-2)
// and secondary (all). Category key: "peribahasa"
// Same schema as regular words; en = English equivalent/meaning
// ════════════════════════════════════════════════════════════

// Helper note: peribahasa words use level:"secondary" so they appear
// in the secondary word bank. The category "peribahasa" is added to
// the secondary CATEGORIES list below.
// To add primary-level proverbs, duplicate with level:"primary".

WORDS.push(

  // ── Tier 1: Well-known, used in everyday speech ──
  {id:"peri-001",
   bm:"Bersatu teguh, bercerai roboh",
   en:"United we stand, divided we fall",
   category:"peribahasa", level:"secondary", difficulty:1, emoji:"🤝",
   exBM:"Ingat peribahasa: bersatu teguh, bercerai roboh.",
   exEN:"Remember: united we stand, divided we fall."},

  {id:"peri-002",
   bm:"Seperti api dalam sekam",
   en:"Like fire hidden in husks — a hidden danger or grudge",
   category:"peribahasa", level:"secondary", difficulty:2, emoji:"🔥",
   exBM:"Permusuhan mereka seperti api dalam sekam.",
   exEN:"Their enmity is like fire hidden in husks."},

  {id:"peri-003",
   bm:"Alang-alang menyeluk pekasam, biar sampai ke pangkal lengan",
   en:"If you're going to do something, do it thoroughly",
   category:"peribahasa", level:"secondary", difficulty:3, emoji:"💪",
   exBM:"Alang-alang menyeluk pekasam, biar sampai ke pangkal lengan — jangan buat kerja separuh jalan.",
   exEN:"If you're going to do something, do it thoroughly — don't do things halfway."},

  {id:"peri-004",
   bm:"Seperti kacang lupakan kulit",
   en:"Like a bean that forgets its shell — forgetting one's roots",
   category:"peribahasa", level:"secondary", difficulty:2, emoji:"🫘",
   exBM:"Jangan jadi seperti kacang lupakan kulit setelah berjaya.",
   exEN:"Don't forget your roots after achieving success."},

  {id:"peri-005",
   bm:"Melentur buluh biarlah dari rebungnya",
   en:"Bend the bamboo while it is still a shoot — educate children early",
   category:"peribahasa", level:"secondary", difficulty:2, emoji:"🎋",
   exBM:"Melentur buluh biarlah dari rebungnya — didik anak sejak kecil.",
   exEN:"Train children from a young age — it is easier to shape them early."},

  {id:"peri-006",
   bm:"Harimau mati meninggalkan belang, gajah mati meninggalkan gading, manusia mati meninggalkan nama",
   en:"Tigers leave their stripes, elephants leave their tusks, men leave their reputation",
   category:"peribahasa", level:"secondary", difficulty:3, emoji:"🐯",
   exBM:"Harimau mati meninggalkan belang — tinggalkan nama yang baik.",
   exEN:"Leave a good name behind — your reputation outlives you."},

  {id:"peri-007",
   bm:"Air dicincang tidak akan putus",
   en:"Water cannot be severed by chopping — blood is thicker than water",
   category:"peribahasa", level:"secondary", difficulty:2, emoji:"💧",
   exBM:"Air dicincang tidak akan putus — hubungan adik-beradik kekal.",
   exEN:"Sibling bonds cannot be broken — water cannot be severed by chopping."},

  {id:"peri-008",
   bm:"Bagai aur dengan tebing",
   en:"Like bamboo and the riverbank — two things that depend on each other",
   category:"peribahasa", level:"secondary", difficulty:2, emoji:"🌿",
   exBM:"Hubungan mereka bagai aur dengan tebing, saling bergantung.",
   exEN:"Their relationship is mutually dependent, like bamboo and a riverbank."},

  {id:"peri-009",
   bm:"Berakit-rakit ke hulu, berenang-renang ke tepian; bersakit-sakit dahulu, bersenang-senang kemudian",
   en:"Suffer first, enjoy later — no pain, no gain",
   category:"peribahasa", level:"secondary", difficulty:3, emoji:"🏆",
   exBM:"Berakit-rakit ke hulu — usaha keras kini untuk kejayaan kemudian.",
   exEN:"Work hard now so you can enjoy the rewards later — no pain, no gain."},

  {id:"peri-010",
   bm:"Biar lambat, asal selamat",
   en:"Better slow and safe than fast and sorry",
   category:"peribahasa", level:"secondary", difficulty:1, emoji:"🐢",
   exBM:"Biar lambat, asal selamat — jangan tergesa-gesa.",
   exEN:"Better slow and safe than fast and sorry — don't rush."},

  // ── Tier 2: Common in essays and formal writing ──
  {id:"peri-011",
   bm:"Hendak seribu daya, tak hendak seribu dalih",
   en:"Where there is a will there is a way; unwilling people find a thousand excuses",
   category:"peribahasa", level:"secondary", difficulty:2, emoji:"🎯",
   exBM:"Hendak seribu daya — kalau mahu, pasti ada jalan.",
   exEN:"Where there's a will there's a way — the willing always find a path."},

  {id:"peri-012",
   bm:"Carik-carik bulu ayam, lama-lama bercantum juga",
   en:"A torn feather mends in time — family quarrels are eventually forgiven",
   category:"peribahasa", level:"secondary", difficulty:2, emoji:"🐓",
   exBM:"Carik-carik bulu ayam, lama-lama bercantum juga — keluarga akan berdamai.",
   exEN:"Family members always reconcile eventually, no matter how bad the quarrel."},

  {id:"peri-013",
   bm:"Seperti padi, makin berisi makin tunduk",
   en:"Like rice stalks — the more full, the more they bow (humility in success)",
   category:"peribahasa", level:"secondary", difficulty:2, emoji:"🌾",
   exBM:"Seperti padi, makin berisi makin tunduk — orang bijak sentiasa rendah hati.",
   exEN:"The wiser and more accomplished a person, the more humble they become."},

  {id:"peri-014",
   bm:"Tak kenal maka tak cinta",
   en:"You cannot love what you do not know — familiarity breeds affection",
   category:"peribahasa", level:"secondary", difficulty:1, emoji:"❤️",
   exBM:"Tak kenal maka tak cinta — kenali budaya kita lebih dalam.",
   exEN:"You cannot love what you do not know — learn about your culture first."},

  {id:"peri-015",
   bm:"Kalau tiada angin, masakan pokok bergoyang",
   en:"There is no smoke without fire — nothing happens without a cause",
   category:"peribahasa", level:"secondary", difficulty:2, emoji:"🌬️",
   exBM:"Kalau tiada angin, masakan pokok bergoyang — mesti ada sebabnya.",
   exEN:"There is no smoke without fire — there must be a reason behind every rumour."},

  {id:"peri-016",
   bm:"Sambil menyelam, minum air",
   en:"Drinking water while diving — killing two birds with one stone",
   category:"peribahasa", level:"secondary", difficulty:1, emoji:"🏊",
   exBM:"Sambil menyelam, minum air — selesaikan dua perkara sekaligus.",
   exEN:"Kill two birds with one stone — accomplish two things at once."},

  {id:"peri-017",
   bm:"Setinggi-tinggi terbang bangau, hinggap juga di belakang kerbau",
   en:"No matter how high the heron flies, it still lands on the buffalo's back — one always returns to one's origins",
   category:"peribahasa", level:"secondary", difficulty:3, emoji:"🦩",
   exBM:"Setinggi mana pun kita berjaya, jangan lupa asal usul kita.",
   exEN:"No matter how successful you become, never forget where you came from."},

  {id:"peri-018",
   bm:"Bulat air kerana pembetung, bulat manusia kerana muafakat",
   en:"Water is round because of its pipe; people are united by agreement — unity through consensus",
   category:"peribahasa", level:"secondary", difficulty:3, emoji:"⭕",
   exBM:"Bulat manusia kerana muafakat — keputusan dibuat bersama.",
   exEN:"Unity comes from consensus — decisions made together bind people together."},

  {id:"peri-019",
   bm:"Sedikit-sedikit, lama-lama jadi bukit",
   en:"Little by little, a hill is formed — small efforts accumulate into something great",
   category:"peribahasa", level:"secondary", difficulty:1, emoji:"⛰️",
   exBM:"Sedikit-sedikit, lama-lama jadi bukit — simpan duit sedikit demi sedikit.",
   exEN:"Save a little at a time — small consistent efforts eventually amount to something great."},

  {id:"peri-020",
   bm:"Sesal dahulu pendapatan, sesal kemudian tiada berguna",
   en:"Regret before acting is wisdom; regret after acting is useless — look before you leap",
   category:"peribahasa", level:"secondary", difficulty:2, emoji:"⚖️",
   exBM:"Sesal dahulu pendapatan — fikir masak-masak sebelum membuat keputusan.",
   exEN:"Think carefully before acting — regret after the fact is useless."},

  // ── Tier 3: Used in formal essays, literature ──
  {id:"peri-021",
   bm:"Bagai membelah buluh",
   en:"Like splitting bamboo — quick and decisive",
   category:"peribahasa", level:"secondary", difficulty:2, emoji:"🎍",
   exBM:"Kerjanya bagai membelah buluh — cepat dan tepat.",
   exEN:"He works quickly and decisively, like splitting bamboo."},

  {id:"peri-022",
   bm:"Hujan emas di negeri orang, hujan batu di negeri sendiri, lebih baik negeri sendiri",
   en:"Golden rain in another's land, stones in one's own, yet home is still best — there's no place like home",
   category:"peribahasa", level:"secondary", difficulty:3, emoji:"🏠",
   exBM:"Hujan emas di negeri orang — tetapi negeri sendiri tetap terbaik.",
   exEN:"No matter how prosperous another country is, home is still the best."},

  {id:"peri-023",
   bm:"Bagai pungguk rindukan bulan",
   en:"Like an owl longing for the moon — yearning for something unattainable",
   category:"peribahasa", level:"secondary", difficulty:2, emoji:"🦉",
   exBM:"Rindu dia bagai pungguk rindukan bulan — tidak mungkin bersama.",
   exEN:"Longing for something that can never be — like an owl yearning for the moon."},

  {id:"peri-024",
   bm:"Di mana bumi dipijak, di situ langit dijunjung",
   en:"Where you stand on earth, there too you hold up the sky — respect the customs of the land you are in",
   category:"peribahasa", level:"secondary", difficulty:2, emoji:"🌍",
   exBM:"Di mana bumi dipijak, di situ langit dijunjung — hormati adat tempatan.",
   exEN:"When in Rome, do as the Romans do — respect local customs wherever you are."},

  {id:"peri-025",
   bm:"Bagai telur di hujung tanduk",
   en:"Like an egg at the tip of a horn — in a very precarious or dangerous situation",
   category:"peribahasa", level:"secondary", difficulty:2, emoji:"🥚",
   exBM:"Keadaan syarikat itu bagai telur di hujung tanduk.",
   exEN:"The company's situation is extremely precarious — like an egg balanced on a horn tip."},

  {id:"peri-026",
   bm:"Mulut manis mematahkan tulang",
   en:"A sweet mouth breaks bones — kind words can achieve what force cannot",
   category:"peribahasa", level:"secondary", difficulty:2, emoji:"😊",
   exBM:"Mulut manis mematahkan tulang — gunakan kata-kata baik untuk memujuk.",
   exEN:"Gentle words are more powerful than force — a sweet mouth breaks bones."},

  {id:"peri-027",
   bm:"Seperti ketam mengajar anaknya berjalan betul",
   en:"Like a crab teaching its child to walk straight — a hypocrite preaching what they don't practise",
   category:"peribahasa", level:"secondary", difficulty:3, emoji:"🦀",
   exBM:"Jangan jadi seperti ketam mengajar anaknya berjalan betul.",
   exEN:"Don't be a hypocrite — practise what you preach."},

  {id:"peri-028",
   bm:"Tong kosong nyaring bunyinya",
   en:"An empty drum makes the most noise — those who talk the most often know the least",
   category:"peribahasa", level:"secondary", difficulty:1, emoji:"🥁",
   exBM:"Tong kosong nyaring bunyinya — jangan banyak cakap tapi tiada isi.",
   exEN:"Empty vessels make the most noise — those who know little often talk the most."},

  {id:"peri-029",
   bm:"Ikut hati mati, ikut rasa binasa",
   en:"Follow your heart and die, follow your impulse and perish — don't let emotions drive decisions",
   category:"peribahasa", level:"secondary", difficulty:3, emoji:"🧠",
   exBM:"Ikut hati mati — gunakan akal bukan emosi dalam membuat keputusan.",
   exEN:"Don't let raw emotion drive your decisions — reason must guide you."},

  {id:"peri-030",
   bm:"Genggam bara api biar sampai jadi arang",
   en:"Hold the burning coal until it becomes charcoal — persevere until the task is done",
   category:"peribahasa", level:"secondary", difficulty:3, emoji:"🔥",
   exBM:"Genggam bara api biar sampai jadi arang — jangan putus asa di tengah jalan.",
   exEN:"See things through to the end — don't give up halfway."}

); // end WORDS.push

// ════════════════════════════════════════════════════════════
// Add "peribahasa" to CATEGORIES so it appears in the UI.
// This runs once after the base CATEGORIES object is defined.
// ════════════════════════════════════════════════════════════
CATEGORIES.secondary.push(
  {id:"peribahasa", label:"Peribahasa", labelBM:"Peribahasa", icon:"📜"}
);


// ════════════════════════════════════════════════════════════
// UPSR-LEVEL VOCABULARY — 30 words
// Aligned to UPSR BM exam topics: health, environment, civic,
// daily life, description, and narrative writing.
// Category key: "upsr" — added to primary CATEGORIES below.
// level: "primary" so they appear in the primary word bank.
// ════════════════════════════════════════════════════════════

WORDS.push(

  // ── Kesihatan & Kebersihan (Health & Hygiene) ─────────────
  {id:"upsr-001",
   bm:"kebersihan",
   en:"cleanliness",
   category:"upsr", level:"primary", difficulty:2, emoji:"🧼",
   baseWord:"bersih", baseWordEn:"clean",
   exBM:"Kebersihan diri penting untuk kesihatan.",
   exEN:"Personal cleanliness is important for health."},

  {id:"upsr-002",
   bm:"penyakit",
   en:"illness / disease",
   category:"upsr", level:"primary", difficulty:2, emoji:"🤒",
   baseWord:"sakit", baseWordEn:"sick / pain",
   exBM:"Kita perlu elak penyakit dengan menjaga kebersihan.",
   exEN:"We must avoid illness by maintaining cleanliness."},

  {id:"upsr-003",
   bm:"doktor",
   en:"doctor",
   category:"upsr", level:"primary", difficulty:1, emoji:"👨‍⚕️",
   exBM:"Doktor merawat pesakit di hospital.",
   exEN:"The doctor treats patients at the hospital."},

  {id:"upsr-004",
   bm:"ubat",
   en:"medicine",
   category:"upsr", level:"primary", difficulty:1, emoji:"💊",
   exBM:"Minum ubat mengikut arahan doktor.",
   exEN:"Take medicine according to the doctor's instructions."},

  {id:"upsr-005",
   bm:"senaman",
   en:"exercise",
   category:"upsr", level:"primary", difficulty:2, emoji:"🏃",
   exBM:"Lakukan senaman setiap pagi untuk sihat.",
   exEN:"Do exercise every morning to stay healthy."},

  // ── Alam Sekitar (Environment) ────────────────────────────
  {id:"upsr-006",
   bm:"pencemaran",
   en:"pollution",
   category:"upsr", level:"primary", difficulty:3, emoji:"🏭",
   baseWord:"cemar", baseWordEn:"pollute / dirty",
   exBM:"Pencemaran sungai merosakkan hidupan air.",
   exEN:"River pollution destroys aquatic life."},

  {id:"upsr-007",
   bm:"kitar semula",
   en:"recycle",
   category:"upsr", level:"primary", difficulty:2, emoji:"♻️",
   exBM:"Kita perlu kitar semula kertas dan plastik.",
   exEN:"We must recycle paper and plastic."},

  {id:"upsr-008",
   bm:"alam sekitar",
   en:"environment / surroundings",
   category:"upsr", level:"primary", difficulty:2, emoji:"🌿",
   exBM:"Jaga alam sekitar supaya kekal bersih.",
   exEN:"Take care of the environment so it stays clean."},

  {id:"upsr-009",
   bm:"pokok",
   en:"tree",
   category:"upsr", level:"primary", difficulty:1, emoji:"🌳",
   exBM:"Tanam pokok untuk menghijau kawasan sekolah.",
   exEN:"Plant trees to green the school area."},

  {id:"upsr-010",
   bm:"banjir",
   en:"flood",
   category:"upsr", level:"primary", difficulty:2, emoji:"🌊",
   exBM:"Banjir berlaku apabila hujan turun dengan lebat.",
   exEN:"Floods occur when heavy rain falls."},

  // ── Kehidupan Seharian (Daily Life) ──────────────────────
  {id:"upsr-011",
   bm:"pasar raya",
   en:"supermarket",
   category:"upsr", level:"primary", difficulty:2, emoji:"🛒",
   exBM:"Ibu membeli barang keperluan di pasar raya.",
   exEN:"Mother buys household necessities at the supermarket."},

  {id:"upsr-012",
   bm:"jiran",
   en:"neighbour",
   category:"upsr", level:"primary", difficulty:1, emoji:"🏘️",
   exBM:"Kita perlu hidup rukun dengan jiran.",
   exEN:"We must live in harmony with our neighbours."},

  {id:"upsr-013",
   bm:"kenderaan",
   en:"vehicle / transport",
   category:"upsr", level:"primary", difficulty:2, emoji:"🚗",
   baseWord:"kender", baseWordEn:"ride / vehicle",
   exBM:"Pelbagai kenderaan lalu lalang di jalan raya.",
   exEN:"Various vehicles pass along the road."},

  {id:"upsr-014",
   bm:"bas sekolah",
   en:"school bus",
   category:"upsr", level:"primary", difficulty:1, emoji:"🚌",
   exBM:"Saya naik bas sekolah setiap pagi.",
   exEN:"I ride the school bus every morning."},

  {id:"upsr-015",
   bm:"perpustakaan",
   en:"library",
   category:"upsr", level:"primary", difficulty:3, emoji:"📚",
   exBM:"Saya pergi ke perpustakaan untuk membaca buku.",
   exEN:"I go to the library to read books."},

  // ── Sifat Murni & Nilai (Values & Character) ─────────────
  {id:"upsr-016",
   bm:"tolong-menolong",
   en:"helping one another / mutual assistance",
   category:"upsr", level:"primary", difficulty:2, emoji:"🤝",
   exBM:"Amalan tolong-menolong mencerminkan semangat mulia.",
   exEN:"The practice of helping one another reflects a noble spirit."},

  {id:"upsr-017",
   bm:"jujur",
   en:"honest",
   category:"upsr", level:"primary", difficulty:1, emoji:"✨",
   exBM:"Kita mesti bersikap jujur dalam semua perkara.",
   exEN:"We must be honest in all matters."},

  {id:"upsr-018",
   bm:"bertanggungjawab",
   en:"responsible",
   category:"upsr", level:"primary", difficulty:3, emoji:"🎯",
   baseWord:"tanggung", baseWordEn:"bear / carry",
   exBM:"Murid yang bertanggungjawab siapkan kerja rumah tepat masa.",
   exEN:"A responsible student completes homework on time."},

  {id:"upsr-019",
   bm:"menghormati",
   en:"to respect",
   category:"upsr", level:"primary", difficulty:2, emoji:"🙏",
   baseWord:"hormat", baseWordEn:"respect",
   exBM:"Kita perlu menghormati orang yang lebih tua.",
   exEN:"We must respect our elders."},

  {id:"upsr-020",
   bm:"berani",
   en:"brave / courageous",
   category:"upsr", level:"primary", difficulty:1, emoji:"🦁",
   exBM:"Murid yang berani tidak takut bertanya.",
   exEN:"A brave student is not afraid to ask questions."},

  // ── Aktiviti & Masa Lapang (Activities & Free Time) ──────
  {id:"upsr-021",
   bm:"aktiviti",
   en:"activity",
   category:"upsr", level:"primary", difficulty:2, emoji:"⚽",
   exBM:"Aktiviti kokurikulum membantu perkembangan diri pelajar.",
   exEN:"Co-curricular activities help students develop themselves."},

  {id:"upsr-022",
   bm:"pertandingan",
   en:"competition / contest",
   category:"upsr", level:"primary", difficulty:2, emoji:"🏆",
   baseWord:"tanding", baseWordEn:"compete",
   exBM:"Sekolah kami menyertai pertandingan sukan peringkat daerah.",
   exEN:"Our school entered a district-level sports competition."},

  {id:"upsr-023",
   bm:"hobi",
   en:"hobby",
   category:"upsr", level:"primary", difficulty:1, emoji:"🎨",
   exBM:"Hobi saya ialah melukis dan membaca.",
   exEN:"My hobbies are drawing and reading."},

  {id:"upsr-024",
   bm:"lawatan",
   en:"visit / excursion",
   category:"upsr", level:"primary", difficulty:2, emoji:"🚌",
   baseWord:"lawat", baseWordEn:"visit",
   exBM:"Kami pergi lawatan sambil belajar ke muzium.",
   exEN:"We went on an educational excursion to the museum."},

  {id:"upsr-025",
   bm:"muzium",
   en:"museum",
   category:"upsr", level:"primary", difficulty:2, emoji:"🏛️",
   exBM:"Muzium menyimpan pelbagai artifak bersejarah.",
   exEN:"The museum keeps various historical artefacts."},

  // ── Kata Sifat Berguna (Useful Adjectives for essays) ────
  {id:"upsr-026",
   bm:"menarik",
   en:"interesting / attractive",
   category:"upsr", level:"primary", difficulty:1, emoji:"✨",
   exBM:"Cerita itu sangat menarik dan menghiburkan.",
   exEN:"The story is very interesting and entertaining."},

  {id:"upsr-027",
   bm:"berguna",
   en:"useful / beneficial",
   category:"upsr", level:"primary", difficulty:2, emoji:"💡",
   baseWord:"guna", baseWordEn:"use",
   exBM:"Teknologi sangat berguna dalam kehidupan seharian.",
   exEN:"Technology is very useful in daily life."},

  {id:"upsr-028",
   bm:"berharga",
   en:"valuable / precious",
   category:"upsr", level:"primary", difficulty:2, emoji:"💎",
   baseWord:"harga", baseWordEn:"price / value",
   exBM:"Masa yang berlalu itu sangat berharga.",
   exEN:"Time that has passed is very precious."},

  {id:"upsr-029",
   bm:"membanggakan",
   en:"pride-worthy / something to be proud of",
   category:"upsr", level:"primary", difficulty:3, emoji:"🏅",
   baseWord:"bangga", baseWordEn:"proud",
   exBM:"Pencapaian pelajar itu sangat membanggakan sekolah.",
   exEN:"The student's achievement makes the school very proud."},

  {id:"upsr-030",
   bm:"bersungguh-sungguh",
   en:"wholeheartedly / with full effort",
   category:"upsr", level:"primary", difficulty:3, emoji:"💪",
   exBM:"Belajar bersungguh-sungguh untuk capai kejayaan.",
   exEN:"Study wholeheartedly to achieve success."}

); // end UPSR WORDS.push

// ════════════════════════════════════════════════════════════
// Add "upsr" to primary CATEGORIES so it appears in the UI
// ════════════════════════════════════════════════════════════
CATEGORIES.primary.push(
  {id:"upsr", label:"UPSR Vocab", labelBM:"Vocab UPSR", icon:"📝"}
);

// ════════════════════════════════════════════════════════════
// NUMBERS 6–100 + ORDINALS + DAYS + MONTHS  — 52 words
// Category: "nombor"  Level: "primary"
// ════════════════════════════════════════════════════════════

WORDS.push(

  // ── Cardinal numbers 6–20 ─────────────────────────────────
  {id:"num-006",bm:"enam",      en:"six",        category:"nombor",level:"primary",difficulty:1,emoji:"6️⃣",exBM:"Saya ada enam buku.",      exEN:"I have six books."},
  {id:"num-007",bm:"tujuh",     en:"seven",      category:"nombor",level:"primary",difficulty:1,emoji:"7️⃣",exBM:"Seminggu ada tujuh hari.", exEN:"A week has seven days."},
  {id:"num-008",bm:"lapan",     en:"eight",      category:"nombor",level:"primary",difficulty:1,emoji:"8️⃣",exBM:"Lapan orang murid hadir.",  exEN:"Eight students are present."},
  {id:"num-009",bm:"sembilan",  en:"nine",       category:"nombor",level:"primary",difficulty:1,emoji:"9️⃣",exBM:"Sembilan hari lagi.",       exEN:"Nine more days."},
  {id:"num-010",bm:"sepuluh",   en:"ten",        category:"nombor",level:"primary",difficulty:1,emoji:"🔟",exBM:"Sepuluh minit lagi.",       exEN:"Ten more minutes."},
  {id:"num-011",bm:"sebelas",   en:"eleven",     category:"nombor",level:"primary",difficulty:1,emoji:"1️⃣1️⃣",exBM:"Sebelas orang peserta.",  exEN:"Eleven participants."},
  {id:"num-012",bm:"dua belas", en:"twelve",     category:"nombor",level:"primary",difficulty:1,emoji:"1️⃣2️⃣",exBM:"Setahun ada dua belas bulan.",exEN:"A year has twelve months."},
  {id:"num-013",bm:"tiga belas",en:"thirteen",   category:"nombor",level:"primary",difficulty:1,emoji:"🔢",exBM:"Tiga belas tahun umurnya.", exEN:"She is thirteen years old."},
  {id:"num-014",bm:"empat belas",en:"fourteen",  category:"nombor",level:"primary",difficulty:1,emoji:"🔢",exBM:"Empat belas orang hadir.",  exEN:"Fourteen people attended."},
  {id:"num-015",bm:"lima belas",en:"fifteen",    category:"nombor",level:"primary",difficulty:1,emoji:"🔢",exBM:"Lima belas minit perjalanan.",exEN:"Fifteen minutes journey."},
  {id:"num-016",bm:"enam belas",en:"sixteen",    category:"nombor",level:"primary",difficulty:2,emoji:"🔢",exBM:"Enam belas soalan dalam ujian.",exEN:"Sixteen questions in the test."},
  {id:"num-017",bm:"tujuh belas",en:"seventeen", category:"nombor",level:"primary",difficulty:2,emoji:"🔢",exBM:"Dia berumur tujuh belas tahun.",exEN:"She is seventeen years old."},
  {id:"num-018",bm:"lapan belas",en:"eighteen",  category:"nombor",level:"primary",difficulty:2,emoji:"🔢",exBM:"Lapan belas pelajar dalam kelas.",exEN:"Eighteen students in the class."},
  {id:"num-019",bm:"sembilan belas",en:"nineteen",category:"nombor",level:"primary",difficulty:2,emoji:"🔢",exBM:"Sembilan belas tahun yang lalu.",exEN:"Nineteen years ago."},
  {id:"num-020",bm:"dua puluh", en:"twenty",     category:"nombor",level:"primary",difficulty:1,emoji:"2️⃣0️⃣",exBM:"Dua puluh orang murid.",   exEN:"Twenty students."},

  // ── Tens 30–100 ───────────────────────────────────────────
  {id:"num-030",bm:"tiga puluh",  en:"thirty",   category:"nombor",level:"primary",difficulty:2,emoji:"🔢",exBM:"Tiga puluh hari dalam sebulan.",exEN:"Thirty days in a month."},
  {id:"num-040",bm:"empat puluh", en:"forty",    category:"nombor",level:"primary",difficulty:2,emoji:"🔢",exBM:"Empat puluh minit berlalu.",  exEN:"Forty minutes passed."},
  {id:"num-050",bm:"lima puluh",  en:"fifty",    category:"nombor",level:"primary",difficulty:2,emoji:"5️⃣0️⃣",exBM:"Lima puluh orang hadir.",   exEN:"Fifty people attended."},
  {id:"num-060",bm:"enam puluh",  en:"sixty",    category:"nombor",level:"primary",difficulty:2,emoji:"🔢",exBM:"Enam puluh saat sama dengan satu minit.",exEN:"Sixty seconds equals one minute."},
  {id:"num-070",bm:"tujuh puluh", en:"seventy",  category:"nombor",level:"primary",difficulty:2,emoji:"🔢",exBM:"Datuk saya berumur tujuh puluh tahun.",exEN:"My grandfather is seventy years old."},
  {id:"num-080",bm:"lapan puluh", en:"eighty",   category:"nombor",level:"primary",difficulty:2,emoji:"🔢",exBM:"Lapan puluh peratus lulus.",  exEN:"Eighty percent passed."},
  {id:"num-090",bm:"sembilan puluh",en:"ninety", category:"nombor",level:"primary",difficulty:2,emoji:"🔢",exBM:"Sembilan puluh sen bakinya.", exEN:"Ninety cents change."},
  {id:"num-100",bm:"seratus",     en:"one hundred",category:"nombor",level:"primary",difficulty:1,emoji:"💯",exBM:"Saya dapat seratus markah!", exEN:"I got one hundred marks!"},

  // ── Ordinals ──────────────────────────────────────────────
  {id:"num-ord-1",bm:"pertama",   en:"first",    category:"nombor",level:"primary",difficulty:1,emoji:"🥇",exBM:"Dia mendapat tempat pertama.", exEN:"She got first place."},
  {id:"num-ord-2",bm:"kedua",     en:"second",   category:"nombor",level:"primary",difficulty:1,emoji:"🥈",exBM:"Saya duduk di baris kedua.",    exEN:"I sit in the second row."},
  {id:"num-ord-3",bm:"ketiga",    en:"third",    category:"nombor",level:"primary",difficulty:1,emoji:"🥉",exBM:"Dia menang hadiah ketiga.",      exEN:"He won the third prize."},
  {id:"num-ord-4",bm:"keempat",   en:"fourth",   category:"nombor",level:"primary",difficulty:2,emoji:"4️⃣",exBM:"Ini percubaan keempat saya.",   exEN:"This is my fourth attempt."},
  {id:"num-ord-5",bm:"kelima",    en:"fifth",    category:"nombor",level:"primary",difficulty:2,emoji:"5️⃣",exBM:"Tingkat kelima hospital itu.",   exEN:"The fifth floor of that hospital."},

  // ── Days of the week ──────────────────────────────────────
  {id:"hari-1",bm:"Isnin",       en:"Monday",    category:"nombor",level:"primary",difficulty:1,emoji:"📅",exBM:"Sekolah bermula pada hari Isnin.",  exEN:"School starts on Monday."},
  {id:"hari-2",bm:"Selasa",      en:"Tuesday",   category:"nombor",level:"primary",difficulty:1,emoji:"📅",exBM:"Ujian BM pada hari Selasa.",         exEN:"BM test on Tuesday."},
  {id:"hari-3",bm:"Rabu",        en:"Wednesday", category:"nombor",level:"primary",difficulty:1,emoji:"📅",exBM:"Kelas seni pada hari Rabu.",          exEN:"Art class on Wednesday."},
  {id:"hari-4",bm:"Khamis",      en:"Thursday",  category:"nombor",level:"primary",difficulty:1,emoji:"📅",exBM:"Latihan bola pada hari Khamis.",      exEN:"Football practice on Thursday."},
  {id:"hari-5",bm:"Jumaat",      en:"Friday",    category:"nombor",level:"primary",difficulty:1,emoji:"📅",exBM:"Sekolah tamat awal pada hari Jumaat.",exEN:"School ends early on Friday."},
  {id:"hari-6",bm:"Sabtu",       en:"Saturday",  category:"nombor",level:"primary",difficulty:1,emoji:"📅",exBM:"Saya rehat pada hari Sabtu.",         exEN:"I rest on Saturday."},
  {id:"hari-7",bm:"Ahad",        en:"Sunday",    category:"nombor",level:"primary",difficulty:1,emoji:"📅",exBM:"Keluarga saya keluar pada hari Ahad.",exEN:"My family goes out on Sunday."},

  // ── Months of the year ────────────────────────────────────
  {id:"bln-01",bm:"Januari",     en:"January",   category:"nombor",level:"primary",difficulty:1,emoji:"📆",exBM:"Tahun baru bermula pada Januari.",   exEN:"The new year starts in January."},
  {id:"bln-02",bm:"Februari",    en:"February",  category:"nombor",level:"primary",difficulty:1,emoji:"📆",exBM:"Hari Valentine pada 14 Februari.",   exEN:"Valentine's Day is on 14 February."},
  {id:"bln-03",bm:"Mac",         en:"March",     category:"nombor",level:"primary",difficulty:1,emoji:"📆",exBM:"Cuti sekolah pada bulan Mac.",        exEN:"School holiday in March."},
  {id:"bln-04",bm:"April",       en:"April",     category:"nombor",level:"primary",difficulty:1,emoji:"📆",exBM:"Peperiksaan pada bulan April.",       exEN:"Examinations in April."},
  {id:"bln-05",bm:"Mei",         en:"May",       category:"nombor",level:"primary",difficulty:1,emoji:"📆",exBM:"Hari Ibu disambut pada bulan Mei.",   exEN:"Mother's Day is celebrated in May."},
  {id:"bln-06",bm:"Jun",         en:"June",      category:"nombor",level:"primary",difficulty:1,emoji:"📆",exBM:"Cuti panjang bermula Jun.",           exEN:"Long holidays start in June."},
  {id:"bln-07",bm:"Julai",       en:"July",      category:"nombor",level:"primary",difficulty:1,emoji:"📆",exBM:"Malaysia merdeka pada bulan Ogos.",   exEN:"Malaysia's independence is in August."},
  {id:"bln-08",bm:"Ogos",        en:"August",    category:"nombor",level:"primary",difficulty:1,emoji:"📆",exBM:"Sambutan Merdeka pada 31 Ogos.",      exEN:"Independence Day is on 31 August."},
  {id:"bln-09",bm:"September",   en:"September", category:"nombor",level:"primary",difficulty:1,emoji:"📆",exBM:"Sekolah bermula semula September.",   exEN:"School resumes in September."},
  {id:"bln-10",bm:"Oktober",     en:"October",   category:"nombor",level:"primary",difficulty:1,emoji:"📆",exBM:"Peperiksaan UPSR pada Oktober.",      exEN:"UPSR examinations in October."},
  {id:"bln-11",bm:"November",    en:"November",  category:"nombor",level:"primary",difficulty:1,emoji:"📆",exBM:"Keputusan peperiksaan pada November.", exEN:"Examination results in November."},
  {id:"bln-12",bm:"Disember",    en:"December",  category:"nombor",level:"primary",difficulty:1,emoji:"📆",exBM:"Cuti akhir tahun pada Disember.",     exEN:"Year-end holidays in December."},

); // end Numbers WORDS.push


// ════════════════════════════════════════════════════════════
// TATABAHASA — 30 BM grammar terms
// Category: "tatabahasa"  Level: "secondary"
// ════════════════════════════════════════════════════════════

WORDS.push(

  // ── Parts of speech (Kata) ────────────────────────────────
  {id:"tata-001",bm:"kata nama",       en:"noun",               category:"tatabahasa",level:"secondary",difficulty:1,emoji:"📌",
   exBM:"'Kucing' ialah kata nama.",           exEN:"'Kucing' (cat) is a noun."},
  {id:"tata-002",bm:"kata kerja",       en:"verb",               category:"tatabahasa",level:"secondary",difficulty:1,emoji:"⚡",
   exBM:"'Berlari' ialah kata kerja.",          exEN:"'Berlari' (run) is a verb."},
  {id:"tata-003",bm:"kata adjektif",    en:"adjective",          category:"tatabahasa",level:"secondary",difficulty:1,emoji:"✨",
   exBM:"'Cantik' ialah kata adjektif.",        exEN:"'Cantik' (beautiful) is an adjective."},
  {id:"tata-004",bm:"kata adverba",     en:"adverb",             category:"tatabahasa",level:"secondary",difficulty:2,emoji:"🔄",
   exBM:"'Dengan cepat' ialah kata adverba.",   exEN:"'With speed' is an adverb."},
  {id:"tata-005",bm:"kata ganti nama",  en:"pronoun",            category:"tatabahasa",level:"secondary",difficulty:2,emoji:"👤",
   exBM:"'Saya', 'dia', 'mereka' ialah kata ganti nama.",exEN:"'Saya', 'dia', 'mereka' are pronouns."},
  {id:"tata-006",bm:"kata hubung",      en:"conjunction / connective",category:"tatabahasa",level:"secondary",difficulty:1,emoji:"🔗",
   exBM:"'Dan', 'tetapi', 'kerana' ialah kata hubung.",exEN:"'And', 'but', 'because' are conjunctions."},
  {id:"tata-007",bm:"kata sendi nama",  en:"preposition",        category:"tatabahasa",level:"secondary",difficulty:2,emoji:"📍",
   exBM:"'Di', 'ke', 'dari' ialah kata sendi nama.",exEN:"'Di', 'ke', 'dari' are prepositions."},
  {id:"tata-008",bm:"kata tanya",       en:"question word / interrogative",category:"tatabahasa",level:"secondary",difficulty:1,emoji:"❓",
   exBM:"'Apa', 'siapa', 'bila' ialah kata tanya.",exEN:"'What', 'who', 'when' are question words."},
  {id:"tata-009",bm:"kata seru",        en:"exclamation / interjection",category:"tatabahasa",level:"secondary",difficulty:2,emoji:"❗",
   exBM:"'Aduh!', 'Wah!' ialah kata seru.",    exEN:"'Ouch!', 'Wow!' are exclamations."},
  {id:"tata-010",bm:"kata perintah",    en:"imperative / command word",category:"tatabahasa",level:"secondary",difficulty:2,emoji:"🗣️",
   exBM:"'Tolong tutup pintu' menggunakan kata perintah.",exEN:"'Please close the door' uses imperative."},

  // ── Sentence structure (Ayat) ─────────────────────────────
  {id:"tata-011",bm:"ayat",             en:"sentence",           category:"tatabahasa",level:"secondary",difficulty:1,emoji:"📝",
   exBM:"Ayat mestilah lengkap dengan subjek dan predikat.",exEN:"A sentence must have a subject and predicate."},
  {id:"tata-012",bm:"ayat penyata",     en:"statement / declarative sentence",category:"tatabahasa",level:"secondary",difficulty:2,emoji:"📄",
   exBM:"'Saya pergi ke sekolah' ialah ayat penyata.",exEN:"'I go to school' is a declarative sentence."},
  {id:"tata-013",bm:"ayat tanya",       en:"question / interrogative sentence",category:"tatabahasa",level:"secondary",difficulty:2,emoji:"❓",
   exBM:"'Kamu pergi ke mana?' ialah ayat tanya.",exEN:"'Where are you going?' is a question sentence."},
  {id:"tata-014",bm:"ayat perintah",    en:"imperative sentence", category:"tatabahasa",level:"secondary",difficulty:2,emoji:"📢",
   exBM:"'Duduk!' ialah ayat perintah.",        exEN:"'Sit down!' is an imperative sentence."},
  {id:"tata-015",bm:"ayat seruan",      en:"exclamatory sentence",category:"tatabahasa",level:"secondary",difficulty:2,emoji:"❗",
   exBM:"'Alangkah cantiknya bunga itu!' ialah ayat seruan.",exEN:"'How beautiful that flower is!' is an exclamatory sentence."},
  {id:"tata-016",bm:"ayat tunggal",     en:"simple sentence",    category:"tatabahasa",level:"secondary",difficulty:2,emoji:"➡️",
   baseWord:"tunggal",baseWordEn:"single / simple",
   exBM:"'Ali berlari' ialah ayat tunggal.",    exEN:"'Ali runs' is a simple sentence."},
  {id:"tata-017",bm:"ayat majmuk",      en:"compound / complex sentence",category:"tatabahasa",level:"secondary",difficulty:3,emoji:"🔀",
   baseWord:"majmuk",baseWordEn:"compound / multiple",
   exBM:"Ayat majmuk mengandungi dua ayat yang dicantumkan.",exEN:"A compound sentence contains two joined clauses."},
  {id:"tata-018",bm:"subjek",           en:"subject",            category:"tatabahasa",level:"secondary",difficulty:1,emoji:"👤",
   exBM:"'Ali' ialah subjek dalam ayat 'Ali bermain bola'.",exEN:"'Ali' is the subject in 'Ali plays football'."},
  {id:"tata-019",bm:"predikat",         en:"predicate",          category:"tatabahasa",level:"secondary",difficulty:2,emoji:"📝",
   exBM:"'Bermain bola' ialah predikat ayat itu.",exEN:"'Plays football' is the predicate of that sentence."},
  {id:"tata-020",bm:"objek",            en:"object",             category:"tatabahasa",level:"secondary",difficulty:2,emoji:"🎯",
   exBM:"'Bola' ialah objek dalam 'Ali menendang bola'.",exEN:"'Ball' is the object in 'Ali kicks the ball'."},

  // ── Word formation (Pembentukan kata) ────────────────────
  {id:"tata-021",bm:"kata dasar",       en:"root word / base word",category:"tatabahasa",level:"secondary",difficulty:2,emoji:"🌱",
   baseWord:"dasar",baseWordEn:"base / foundation",
   exBM:"'Jalan' ialah kata dasar bagi 'berjalan'.",exEN:"'Jalan' is the root word for 'berjalan' (walk)."},
  {id:"tata-022",bm:"imbuhan",          en:"affix (prefix or suffix)",category:"tatabahasa",level:"secondary",difficulty:2,emoji:"🔧",
   exBM:"'me-', 'ber-', '-an' ialah imbuhan Bahasa Malaysia.",exEN:"'me-', 'ber-', '-an' are BM affixes."},
  {id:"tata-023",bm:"awalan",           en:"prefix",             category:"tatabahasa",level:"secondary",difficulty:2,emoji:"⬅️",
   baseWord:"awal",baseWordEn:"early / beginning",
   exBM:"'me-' dalam 'menulis' ialah awalan.",   exEN:"'me-' in 'menulis' (write) is a prefix."},
  {id:"tata-024",bm:"akhiran",          en:"suffix",             category:"tatabahasa",level:"secondary",difficulty:2,emoji:"➡️",
   baseWord:"akhir",baseWordEn:"end / final",
   exBM:"'-an' dalam 'makanan' ialah akhiran.",  exEN:"'-an' in 'makanan' (food) is a suffix."},
  {id:"tata-025",bm:"kata ganda",       en:"reduplication / reduplicated word",category:"tatabahasa",level:"secondary",difficulty:3,emoji:"🔁",
   baseWord:"ganda",baseWordEn:"double / multiply",
   exBM:"'Kanak-kanak', 'buku-buku' ialah kata ganda.",exEN:"'Kanak-kanak' (children), 'buku-buku' (books) are reduplicated words."},

  // ── Punctuation & writing (Tanda baca) ───────────────────
  {id:"tata-026",bm:"tanda baca",       en:"punctuation mark",   category:"tatabahasa",level:"secondary",difficulty:1,emoji:"✒️",
   exBM:"Gunakan tanda baca yang betul dalam penulisan.",exEN:"Use correct punctuation marks in writing."},
  {id:"tata-027",bm:"tanda noktah",     en:"full stop / period", category:"tatabahasa",level:"secondary",difficulty:1,emoji:"⏺️",
   baseWord:"noktah",baseWordEn:"full stop",
   exBM:"Setiap ayat tamat dengan tanda noktah.",exEN:"Every sentence ends with a full stop."},
  {id:"tata-028",bm:"tanda koma",       en:"comma",              category:"tatabahasa",level:"secondary",difficulty:1,emoji:"，",
   exBM:"Tanda koma digunakan untuk memisahkan senarai.",exEN:"A comma is used to separate items in a list."},
  {id:"tata-029",bm:"kata majmuk",      en:"compound word",      category:"tatabahasa",level:"secondary",difficulty:3,emoji:"🔗",
   baseWord:"majmuk",baseWordEn:"compound / multiple",
   exBM:"'Meja makan', 'kapal terbang' ialah kata majmuk.",exEN:"'Dining table', 'airplane' are compound words."},
  {id:"tata-030",bm:"sinonim",          en:"synonym",            category:"tatabahasa",level:"secondary",difficulty:2,emoji:"🔄",
   exBM:"'Cantik' dan 'indah' ialah sinonim.",   exEN:"'Cantik' and 'indah' are synonyms (both mean beautiful)."},

); // end Tatabahasa WORDS.push


// ════════════════════════════════════════════════════════════
// PT3 EXAM VOCABULARY — 40 words  (Form 1–3 level)
// Category: "pt3"  Level: "secondary"
// Covers: essay connectors, formal verbs, civic & moral topics
// ════════════════════════════════════════════════════════════

WORDS.push(

  // ── High-value essay connectors ──────────────────────────
  {id:"pt3-001",bm:"antaranya",       en:"among them / including",category:"pt3",level:"secondary",difficulty:2,emoji:"📋",
   exBM:"Terdapat beberapa sebab, antaranya kecuaian manusia.",exEN:"There are several reasons, among them human negligence."},
  {id:"pt3-002",bm:"sehubungan itu",  en:"in connection with that / therefore",category:"pt3",level:"secondary",difficulty:3,emoji:"🔗",
   exBM:"Sehubungan itu, kita mesti bertindak segera.",exEN:"In connection with that, we must act immediately."},
  {id:"pt3-003",bm:"lantaran itu",    en:"as a result / consequently",category:"pt3",level:"secondary",difficulty:3,emoji:"➡️",
   exBM:"Lantaran itu, masalah ini semakin serius.",exEN:"As a result, this problem is becoming more serious."},
  {id:"pt3-004",bm:"namun begitu",    en:"nevertheless / however",category:"pt3",level:"secondary",difficulty:2,emoji:"↩️",
   exBM:"Namun begitu, kita tidak boleh berputus asa.",exEN:"Nevertheless, we must not give up."},
  {id:"pt3-005",bm:"malahan",         en:"in fact / moreover / even",category:"pt3",level:"secondary",difficulty:2,emoji:"➕",
   exBM:"Malahan, keadaan itu boleh menjadi lebih buruk.",exEN:"In fact, the situation could get even worse."},
  {id:"pt3-006",bm:"sekiranya",       en:"if / should",           category:"pt3",level:"secondary",difficulty:2,emoji:"🤞",
   exBM:"Sekiranya kita bersatu, masalah ini boleh diatasi.",exEN:"If we unite, this problem can be overcome."},
  {id:"pt3-007",bm:"tegasnya",        en:"in short / to put it firmly",category:"pt3",level:"secondary",difficulty:3,emoji:"🎯",
   exBM:"Tegasnya, disiplin diri adalah kunci kejayaan.",exEN:"In short, self-discipline is the key to success."},
  {id:"pt3-008",bm:"rumusannya",      en:"in summary / to summarise",category:"pt3",level:"secondary",difficulty:2,emoji:"📝",
   baseWord:"rumus",baseWordEn:"formula / summarise",
   exBM:"Rumusannya, kita perlu bekerjasama.",   exEN:"In summary, we need to cooperate."},
  {id:"pt3-009",bm:"jelaslah bahawa", en:"it is clear that",       category:"pt3",level:"secondary",difficulty:2,emoji:"💡",
   exBM:"Jelaslah bahawa teknologi membawa manfaat.",exEN:"It is clear that technology brings benefits."},
  {id:"pt3-010",bm:"tidak dapat dinafikan",en:"it cannot be denied / undeniably",category:"pt3",level:"secondary",difficulty:3,emoji:"✅",
   exBM:"Tidak dapat dinafikan bahawa pendidikan penting.",exEN:"It cannot be denied that education is important."},

  // ── Formal verbs for essays ──────────────────────────────
  {id:"pt3-011",bm:"menangani",       en:"to handle / address / tackle",category:"pt3",level:"secondary",difficulty:2,emoji:"🔧",
   baseWord:"tangan",baseWordEn:"hand",
   exBM:"Kita mesti menangani masalah ini dengan bijak.",exEN:"We must handle this problem wisely."},
  {id:"pt3-012",bm:"mengambil berat", en:"to care about / take concern",category:"pt3",level:"secondary",difficulty:2,emoji:"❤️",
   exBM:"Ibu bapa perlu mengambil berat tentang pelajaran anak.",exEN:"Parents need to care about their children's education."},
  {id:"pt3-013",bm:"memainkan peranan",en:"to play a role",        category:"pt3",level:"secondary",difficulty:2,emoji:"🎭",
   exBM:"Guru memainkan peranan penting dalam pendidikan.",exEN:"Teachers play an important role in education."},
  {id:"pt3-014",bm:"mengamalkan",     en:"to practise / apply",    category:"pt3",level:"secondary",difficulty:2,emoji:"🔄",
   baseWord:"amal",baseWordEn:"practise / deed",
   exBM:"Kita perlu mengamalkan hidup sihat setiap hari.",exEN:"We need to practise a healthy lifestyle every day."},
  {id:"pt3-015",bm:"memupuk",         en:"to nurture / cultivate / foster",category:"pt3",level:"secondary",difficulty:3,emoji:"🌱",
   baseWord:"pupuk",baseWordEn:"fertilise / nurture",
   exBM:"Ibu bapa perlu memupuk minat membaca dalam diri anak.",exEN:"Parents need to nurture a love of reading in their children."},
  {id:"pt3-016",bm:"menerapkan",      en:"to instil / inculcate",  category:"pt3",level:"secondary",difficulty:3,emoji:"💉",
   baseWord:"terap",baseWordEn:"instil / apply",
   exBM:"Guru menerapkan nilai murni dalam diri murid.",exEN:"Teachers instil noble values in students."},
  {id:"pt3-017",bm:"mendedahkan",     en:"to expose / reveal",     category:"pt3",level:"secondary",difficulty:2,emoji:"👁️",
   baseWord:"dedah",baseWordEn:"expose",
   exBM:"Kita tidak harus mendedahkan maklumat peribadi.",exEN:"We should not expose personal information."},
  {id:"pt3-018",bm:"menggalakkan",    en:"to encourage / promote", category:"pt3",level:"secondary",difficulty:2,emoji:"📣",
   baseWord:"galak",baseWordEn:"encourage",
   exBM:"Guru menggalakkan murid belajar bersungguh-sungguh.",exEN:"Teachers encourage students to study wholeheartedly."},
  {id:"pt3-019",bm:"menyedari",       en:"to realise / be aware of",category:"pt3",level:"secondary",difficulty:2,emoji:"💡",
   baseWord:"sedar",baseWordEn:"aware / conscious",
   exBM:"Kita perlu menyedari kepentingan menjaga alam sekitar.",exEN:"We need to realise the importance of caring for the environment."},
  {id:"pt3-020",bm:"mengharungi",     en:"to face / go through (challenges)",category:"pt3",level:"secondary",difficulty:3,emoji:"⛵",
   exBM:"Beliau berjaya mengharungi pelbagai cabaran hidup.",exEN:"She successfully faced various life challenges."},

  // ── PT3 civic & moral vocabulary ─────────────────────────
  {id:"pt3-021",bm:"kesedaran sivik", en:"civic awareness",        category:"pt3",level:"secondary",difficulty:3,emoji:"🏛️",
   baseWord:"sivik",baseWordEn:"civic",
   exBM:"Kesedaran sivik perlu ditanam dalam diri setiap warganegara.",exEN:"Civic awareness must be instilled in every citizen."},
  {id:"pt3-022",bm:"semangat kekitaan",en:"sense of belonging / togetherness",category:"pt3",level:"secondary",difficulty:3,emoji:"🤝",
   exBM:"Semangat kekitaan mengeratkan hubungan masyarakat.",exEN:"A sense of togetherness strengthens community bonds."},
  {id:"pt3-023",bm:"prihatin",        en:"concerned / caring",     category:"pt3",level:"secondary",difficulty:2,emoji:"💙",
   exBM:"Jadilah warganegara yang prihatin terhadap masyarakat.",exEN:"Be a citizen who is concerned about the community."},
  {id:"pt3-024",bm:"berdikari",       en:"independent / self-reliant",category:"pt3",level:"secondary",difficulty:2,emoji:"💪",
   baseWord:"diri",baseWordEn:"self",
   exBM:"Pelajar perlu berdikari dalam menyelesaikan masalah.",exEN:"Students need to be self-reliant in solving problems."},
  {id:"pt3-025",bm:"berhemat",        en:"prudent / thrifty",      category:"pt3",level:"secondary",difficulty:2,emoji:"💰",
   exBM:"Kita perlu berhemat dalam berbelanja.",   exEN:"We need to be prudent when spending."},
  {id:"pt3-026",bm:"bermasyarakat",   en:"to live in society / social",category:"pt3",level:"secondary",difficulty:2,emoji:"👥",
   baseWord:"masyarakat",baseWordEn:"society",
   exBM:"Kita perlu hidup bermasyarakat dengan penuh harmoni.",exEN:"We must live socially in full harmony."},
  {id:"pt3-027",bm:"kepedulian",      en:"concern / caring attitude",category:"pt3",level:"secondary",difficulty:3,emoji:"🤲",
   baseWord:"peduli",baseWordEn:"care / concern",
   exBM:"Kepedulian terhadap orang lain mencerminkan nilai murni.",exEN:"Concern for others reflects noble values."},
  {id:"pt3-028",bm:"jati diri",       en:"identity / sense of self",category:"pt3",level:"secondary",difficulty:3,emoji:"🪞",
   exBM:"Kita perlu mempertahankan jati diri bangsa.",exEN:"We must defend our national identity."},
  {id:"pt3-029",bm:"warga emas",      en:"senior citizen / elderly",category:"pt3",level:"secondary",difficulty:2,emoji:"👴",
   exBM:"Kita perlu menghormati dan menjaga warga emas.",exEN:"We must respect and care for senior citizens."},
  {id:"pt3-030",bm:"kelestarian",     en:"sustainability / preservation",category:"pt3",level:"secondary",difficulty:3,emoji:"♻️",
   baseWord:"lestari",baseWordEn:"sustainable / preserved",
   exBM:"Kelestarian alam perlu dijaga untuk generasi akan datang.",exEN:"Environmental sustainability must be preserved for future generations."},

  // ── PT3 descriptive & narrative vocabulary ───────────────
  {id:"pt3-031",bm:"terpana",         en:"stunned / mesmerised / spellbound",category:"pt3",level:"secondary",difficulty:3,emoji:"😮",
   exBM:"Dia terpana melihat keindahan alam semula jadi.",exEN:"She was mesmerised by the beauty of nature."},
  {id:"pt3-032",bm:"terharu",         en:"touched / moved (emotionally)",category:"pt3",level:"secondary",difficulty:2,emoji:"🥺",
   exBM:"Saya terharu mendengar cerita itu.",   exEN:"I was touched hearing that story."},
  {id:"pt3-033",bm:"teruja",          en:"excited / thrilled",     category:"pt3",level:"secondary",difficulty:2,emoji:"🎉",
   exBM:"Murid-murid teruja apabila dengar berita itu.",exEN:"The students were excited when they heard the news."},
  {id:"pt3-034",bm:"tercengang",      en:"astonished / amazed",    category:"pt3",level:"secondary",difficulty:3,emoji:"😲",
   exBM:"Kami tercengang melihat pertunjukan itu.",exEN:"We were astonished watching that performance."},
  {id:"pt3-035",bm:"mengharukan",     en:"touching / moving (of an event)",category:"pt3",level:"secondary",difficulty:3,emoji:"💧",
   baseWord:"haru",baseWordEn:"touched / moved",
   exBM:"Peristiwa itu sangat mengharukan semua orang.",exEN:"That event was very touching for everyone."},
  {id:"pt3-036",bm:"tidak tergambar", en:"indescribable / beyond words",category:"pt3",level:"secondary",difficulty:3,emoji:"🤯",
   exBM:"Kegembiraan saya tidak tergambar dengan kata-kata.",exEN:"My joy was indescribable in words."},
  {id:"pt3-037",bm:"terdorong",       en:"motivated / driven / compelled",category:"pt3",level:"secondary",difficulty:3,emoji:"🚀",
   baseWord:"dorong",baseWordEn:"push / motivate",
   exBM:"Saya terdorong untuk terus belajar bersungguh-sungguh.",exEN:"I am motivated to keep studying wholeheartedly."},
  {id:"pt3-038",bm:"sebak",           en:"overcome with emotion / choked up",category:"pt3",level:"secondary",difficulty:3,emoji:"😢",
   exBM:"Hati saya sebak mendengar berita itu.",  exEN:"My heart was overcome with emotion hearing that news."},
  {id:"pt3-039",bm:"tersentuh hati",  en:"touched in the heart / moved",category:"pt3",level:"secondary",difficulty:2,emoji:"❤️",
   exBM:"Saya tersentuh hati melihat pengorbanan ibu saya.",exEN:"My heart was touched seeing my mother's sacrifice."},
  {id:"pt3-040",bm:"berbangga",       en:"to feel proud",          category:"pt3",level:"secondary",difficulty:2,emoji:"🏅",
   baseWord:"bangga",baseWordEn:"proud",
   exBM:"Saya berbangga menjadi rakyat Malaysia.",exEN:"I feel proud to be a Malaysian."},

); // end PT3 WORDS.push


// ════════════════════════════════════════════════════════════
// SPM VOCABULARY — 30 words  (Form 4–5 level)
// Category: "spm"  Level: "secondary"
// Advanced essay connectors, literary terms, abstract concepts
// ════════════════════════════════════════════════════════════

WORDS.push(

  // ── SPM high-value essay phrases ─────────────────────────
  {id:"spm-001",bm:"menurut kajian",  en:"according to research / studies show",category:"spm",level:"secondary",difficulty:3,emoji:"🔬",
   exBM:"Menurut kajian, tabiat membaca meningkatkan kecerdasan.",exEN:"According to research, reading habits increase intelligence."},
  {id:"spm-002",bm:"dalam erti kata lain",en:"in other words",    category:"spm",level:"secondary",difficulty:3,emoji:"↩️",
   exBM:"Dalam erti kata lain, kejayaan memerlukan pengorbanan.",exEN:"In other words, success requires sacrifice."},
  {id:"spm-003",bm:"tidak keterlaluan jika dikatakan",en:"it is not an exaggeration to say",category:"spm",level:"secondary",difficulty:3,emoji:"💬",
   exBM:"Tidak keterlaluan jika dikatakan pendidikan ialah segalanya.",exEN:"It is not an exaggeration to say education is everything."},
  {id:"spm-004",bm:"seiring dengan itu",en:"in tandem with that / alongside",category:"spm",level:"secondary",difficulty:3,emoji:"🔄",
   exBM:"Seiring dengan itu, teknologi terus berkembang pesat.",exEN:"In tandem with that, technology continues to advance rapidly."},
  {id:"spm-005",bm:"tidak dapat lari daripada",en:"cannot escape from / inevitably",category:"spm",level:"secondary",difficulty:3,emoji:"🔒",
   exBM:"Kita tidak dapat lari daripada cabaran globalisasi.",exEN:"We cannot escape from the challenges of globalisation."},
  {id:"spm-006",bm:"yang tidak ternilai",en:"invaluable / priceless",category:"spm",level:"secondary",difficulty:3,emoji:"💎",
   baseWord:"nilai",baseWordEn:"value",
   exBM:"Pengalaman hidup adalah sesuatu yang tidak ternilai.",exEN:"Life experience is something invaluable."},
  {id:"spm-007",bm:"memainkan fungsi",en:"to serve a function / to play a role",category:"spm",level:"secondary",difficulty:3,emoji:"⚙️",
   baseWord:"fungsi",baseWordEn:"function",
   exBM:"Media sosial memainkan fungsi penting dalam masyarakat.",exEN:"Social media plays an important function in society."},
  {id:"spm-008",bm:"prasangka",       en:"prejudice / preconception",category:"spm",level:"secondary",difficulty:3,emoji:"⚖️",
   exBM:"Kita perlu buang sikap prasangka terhadap orang lain.",exEN:"We must discard prejudice towards others."},
  {id:"spm-009",bm:"akar umbi",       en:"grassroots / roots",     category:"spm",level:"secondary",difficulty:3,emoji:"🌿",
   exBM:"Masalah ini perlu diselesaikan dari akar umbi.",exEN:"This problem needs to be solved from the grassroots."},
  {id:"spm-010",bm:"kontemporari",    en:"contemporary / modern",  category:"spm",level:"secondary",difficulty:3,emoji:"🌐",
   exBM:"Sastera kontemporari mencerminkan realiti masyarakat kini.",exEN:"Contemporary literature reflects today's social reality."},

  // ── Literary & analytical terms ───────────────────────────
  {id:"spm-011",bm:"plot",            en:"plot",                   category:"spm",level:"secondary",difficulty:1,emoji:"📊",
   exBM:"Plot cerita itu sangat menarik dan penuh kejutan.",exEN:"The plot of the story is interesting and full of surprises."},
  {id:"spm-012",bm:"watak protagonis",en:"protagonist / main character",category:"spm",level:"secondary",difficulty:3,emoji:"🦸",
   exBM:"Watak protagonis mempunyai sifat berani dan jujur.",exEN:"The protagonist has the qualities of bravery and honesty."},
  {id:"spm-013",bm:"watak antagonis", en:"antagonist / villain",   category:"spm",level:"secondary",difficulty:3,emoji:"🦹",
   exBM:"Watak antagonis menjadi penghalang kepada protagonis.",exEN:"The antagonist becomes an obstacle to the protagonist."},
  {id:"spm-014",bm:"perwatakan",      en:"characterisation",       category:"spm",level:"secondary",difficulty:3,emoji:"🎭",
   baseWord:"watak",baseWordEn:"character",
   exBM:"Perwatakan watak utama digambarkan dengan jelas.",exEN:"The characterisation of the main character is depicted clearly."},
  {id:"spm-015",bm:"mesej",           en:"message / moral",        category:"spm",level:"secondary",difficulty:1,emoji:"📨",
   exBM:"Apakah mesej yang ingin disampaikan dalam cerpen ini?",exEN:"What message does this short story want to convey?"},
  {id:"spm-016",bm:"nilai kemanusiaan",en:"human values",          category:"spm",level:"secondary",difficulty:3,emoji:"❤️",
   exBM:"Nilai kemanusiaan diterapkan dalam setiap karya sastera.",exEN:"Human values are instilled in every literary work."},
  {id:"spm-017",bm:"gaya bahasa",     en:"language style / literary device",category:"spm",level:"secondary",difficulty:3,emoji:"✍️",
   exBM:"Penulis menggunakan gaya bahasa yang indah.",exEN:"The writer uses beautiful language style."},
  {id:"spm-018",bm:"simbolisme",      en:"symbolism",              category:"spm",level:"secondary",difficulty:3,emoji:"🌹",
   exBM:"Simbolisme digunakan untuk menyampaikan mesej tersirat.",exEN:"Symbolism is used to convey implied messages."},
  {id:"spm-019",bm:"ironi",           en:"irony",                  category:"spm",level:"secondary",difficulty:3,emoji:"😏",
   exBM:"Pengarang menggunakan ironi untuk mengkritik masyarakat.",exEN:"The author uses irony to criticise society."},
  {id:"spm-020",bm:"hiperbola",       en:"hyperbole / exaggeration",category:"spm",level:"secondary",difficulty:3,emoji:"📢",
   exBM:"'Saya sudah menunggu seribu tahun' ialah hiperbola.",exEN:"'I have waited a thousand years' is hyperbole."},

  // ── SPM abstract / socio-economic vocabulary ──────────────
  {id:"spm-021",bm:"fenomena",        en:"phenomenon",             category:"spm",level:"secondary",difficulty:2,emoji:"🌪️",
   exBM:"Urbanisasi adalah fenomena yang berlaku di seluruh dunia.",exEN:"Urbanisation is a phenomenon occurring worldwide."},
  {id:"spm-022",bm:"paradigma",       en:"paradigm / mindset shift",category:"spm",level:"secondary",difficulty:3,emoji:"🧠",
   exBM:"Kita perlu mengubah paradigma berfikir kita.",exEN:"We need to change our paradigm of thinking."},
  {id:"spm-023",bm:"transformasi",    en:"transformation",         category:"spm",level:"secondary",difficulty:2,emoji:"🦋",
   exBM:"Transformasi pendidikan diperlukan untuk masa hadapan.",exEN:"Educational transformation is needed for the future."},
  {id:"spm-024",bm:"implikasi",       en:"implication / consequence",category:"spm",level:"secondary",difficulty:3,emoji:"💥",
   exBM:"Apakah implikasi pencemaran terhadap kesihatan?",exEN:"What are the implications of pollution on health?"},
  {id:"spm-025",bm:"mekanisme",       en:"mechanism / system",     category:"spm",level:"secondary",difficulty:3,emoji:"⚙️",
   exBM:"Kita perlukan mekanisme yang lebih berkesan.",exEN:"We need a more effective mechanism."},
  {id:"spm-026",bm:"urbanisasi",      en:"urbanisation",           category:"spm",level:"secondary",difficulty:3,emoji:"🏙️",
   baseWord:"bandar",baseWordEn:"city / town",
   exBM:"Urbanisasi menyebabkan peningkatan kos sara hidup.",exEN:"Urbanisation causes an increase in cost of living."},
  {id:"spm-027",bm:"rasuah",          en:"corruption / bribery",   category:"spm",level:"secondary",difficulty:2,emoji:"💸",
   exBM:"Rasuah menghalang kemajuan negara.",   exEN:"Corruption hinders the progress of the nation."},
  {id:"spm-028",bm:"ketidaksamaan",   en:"inequality",             category:"spm",level:"secondary",difficulty:3,emoji:"⚖️",
   baseWord:"sama",baseWordEn:"same / equal",
   exBM:"Ketidaksamaan peluang perlu dihapuskan.",exEN:"Inequality of opportunity must be eliminated."},
  {id:"spm-029",bm:"kemunduran",      en:"decline / regression",   category:"spm",level:"secondary",difficulty:3,emoji:"📉",
   baseWord:"mundur",baseWordEn:"backwards / regress",
   exBM:"Kemunduran moral menjadi ancaman kepada masyarakat.",exEN:"Moral decline is a threat to society."},
  {id:"spm-030",bm:"pemangkin",       en:"catalyst / driving force",category:"spm",level:"secondary",difficulty:3,emoji:"🚀",
   exBM:"Pendidikan ialah pemangkin kepada kemajuan negara.",exEN:"Education is the catalyst for national progress."},

); // end SPM WORDS.push


// ════════════════════════════════════════════════════════════
// Register new categories in UI
// ════════════════════════════════════════════════════════════
// Numbers, days, months all use category:"nombor" so they appear
// under the existing "Nombor & Masa" chip automatically.
// Update the existing nombor chip label to reflect expanded content:
const _nomborCat = CATEGORIES.primary.find(c => c.id === "nombor");
if (_nomborCat) {
  _nomborCat.label   = "Numbers & Calendar";
  _nomborCat.labelBM = "Nombor & Kalendar";
  _nomborCat.icon    = "📅";
}

CATEGORIES.secondary.push(
  {id:"tatabahasa", label:"Grammar (Tatabahasa)", labelBM:"Tatabahasa", icon:"📖"},
  {id:"pt3",        label:"PT3 Vocab",             labelBM:"Vocab PT3",  icon:"🎓"},
  {id:"spm",        label:"SPM Vocab",             labelBM:"Vocab SPM",  icon:"🏆"}
);

// Export for use in HTML (no module system needed)
// In React/Vite: export { WORDS, CATEGORIES };
