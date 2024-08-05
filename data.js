const adjectives = ["abandoned", "able", "absolute", "academic", "acceptable", "acclaimed", "accomplished", "accurate", "aching", "acidic", "acrobatic", "active", "actual", "adept", "admirable", "admired", "adolescent", "adorable", "adored", "advanced", "adventurous", "affectionate", "afraid", "aged", "aggravating", "aggressive", "agile", "agitated", "agonizing", "agreeable", "ajar", "alarmed", "alarming", "alert", "alienated", "alive", "all", "altruistic", "amazing", "ambitious", "ample", "amused", "amusing", "anchored", "ancient", "angelic", "angry", "anguished", "animated", "annual", "another", "antique", "anxious", "any", "apprehensive", "appropriate", "apt", "arctic", "arid", "aromatic", "artistic", "ashamed", "assured", "astonishing", "athletic", "attached", "attentive", "attractive", "austere", "authentic", "authorized", "automatic", "avaricious", "average", "aware", "awesome", "awful", "awkward", "babyish", "back", "bad", "baggy", "bare", "barren", "basic", "beautiful", "belated", "beloved", "beneficial", "best", "better", "bewitched", "big", "big", "biodegradable", "bite", "bitter", "black", "black", "bland", "blank", "blaring", "bleak", "blind", "blissful", "blond", "blue", "blushing", "bogus", "boiling", "bold", "bony", "boring", "bossy", "both", "bouncy", "bountiful", "bowed", "brave", "breakable", "brief", "bright", "brilliant", "brisk", "broken", "bronze", "brown", "bruised", "bubbly", "bulky", "bumpy", "buoyant", "burdensome", "burly", "bustling", "busy", "buttery", "buzzing", "calculating", "calm", "candid", "canine", "capital", "carefree", "careful", "careless", "caring", "cautious", "cavernous", "celebrated", "charming", "cheap", "cheerful", "cheery", "chief", "chilly", "chubby", "circular", "classic", "clean", "clear", "clear", "clever", "close", "closed", "cloudy", "clueless", "clumsy", "cluttered", "coarse", "cold", "colorful", "colorless", "colossal", "comfortable", "common", "compassionate", "competent", "complete", "complex", "complicated", "composed", "concerned", "concrete", "confused", "conscious", "considerate", "constant", "content", "conventional", "cooked", "cool", "cooperative", "coordinated", "corny", "corrupt", "costly", "courageous", "courteous", "crafty", "crazy", "creamy", "creative", "creepy", "criminal", "crisp", "critical", "crooked", "crowded", "cruel", "crushing", "cuddly", "cultivated", "cultured", "cumbersome", "curly", "curvy", "cute", "cylindrical", "damaged", "damp", "dangerous", "dapper", "daring", "dark", "darling", "dazzling", "dead", "deadly", "deafening", "dear", "dearest", "decent", "decimal", "decisive", "deep", "defenseless", "defensive", "defiant", "deficient", "definite", "definitive", "delayed", "delectable", "delicious", "delightful", "delirious", "demanding", "dense", "dental", "dependable", "dependent", "descriptive", "deserted", "detailed", "determined", "devoted", "different", "difficult", "digital", "diligent", "dim", "dimpled", "dimwitted", "direct", "dirty", "disastrous", "discrete", "disfigured", "disguised", "disgusting", "dishonest", "disloyal", "dismal", "distant", "distinct", "distorted", "dizzy", "dopey", "doting", "double", "downright", "drab", "drafty", "dramatic", "dreary", "droopy", "dry", "dual", "dull", "dutiful", "each", "eager", "early", "earnest", "easy", "easy", "ecstatic", "edible", "educated", "elaborate", "elastic", "elated", "elderly", "electric", "elegant", "elementary", "elliptical", "embarrassed", "embellished", "eminent", "emotional", "empty", "enchanted", "enchanting", "energetic", "enlightened", "enormous", "enraged", "entire", "envious", "equal", "equatorial", "essential", "esteemed", "ethical", "euphoric", "even", "evergreen", "everlasting", "every", "evil", "exalted", "excellent", "excitable", "excited", "exciting", "exemplary", "exhausted", "exotic", "expensive", "experienced", "expert", "extra", "extra", "extraneous", "extroverted", "fabulous", "failing", "faint", "fair", "faithful", "fake", "false", "familiar", "famous", "fancy", "fantastic", "far", "far", "far", "faraway", "fast", "fat", "fatal", "fatherly", "favorable", "favorite", "fearful", "fearless", "feisty", "feline", "female", "feminine", "few", "fickle", "filthy", "fine", "finished", "firm", "first", "firsthand", "fitting", "fixed", "flaky", "flamboyant", "flashy", "flat", "flawed", "flawless", "flickering", "flimsy", "flippant", "flowery", "fluffy", "fluid", "flustered", "focused", "fond", "foolhardy", "foolish", "forceful", "forked", "formal", "forsaken", "forthright", "fortunate", "fragrant", "frail", "frank", "frayed", "free", "frequent", "fresh", "friendly", "frightened", "frightening", "frigid", "frilly", "frivolous", "frizzy", "front", "frosty", "frozen", "frugal", "fruitful", "full", "fumbling", "functional", "funny", "fussy", "fuzzy", "gargantuan", "gaseous", "general", "generous", "gentle", "genuine", "giant", "giddy", "gifted", "gigantic", "giving", "glamorous", "glaring", "glass", "gleaming", "gleeful", "glistening", "glittering", "gloomy", "glorious", "glossy", "glum", "golden", "good", "good", "gorgeous", "graceful", "gracious", "grand", "grandiose", "granular", "grateful", "grave", "gray", "great", "greedy", "green", "gregarious", "grim", "grimy", "gripping", "grizzled", "gross", "grotesque", "grouchy", "grounded", "growing", "growling", "grown", "grubby", "gruesome", "grumpy", "guilty", "gullible", "gummy", "hairy", "half", "handmade", "handsome", "handy", "happy", "happy", "hard", "hard", "harmful", "harmless", "harmonious", "harsh", "hasty", "hateful", "haunting", "healthy", "heartfelt", "hearty", "heavenly", "heavy", "hefty", "helpful", "helpless", "hidden", "hideous", "high", "high", "hilarious", "hoarse", "hollow", "homely", "honest", "honorable", "honored", "hopeful", "horrible", "hospitable", "hot", "huge", "humble", "humiliating", "humming", "humongous", "hungry", "hurtful", "husky", "icky", "icy", "ideal", "idealistic", "identical", "idiotic", "idle", "idolized", "ignorant", "ill", "ill", "ill", "illegal", "illiterate", "illustrious", "imaginary", "imaginative", "immaculate", "immaterial", "immediate", "immense", "impartial", "impassioned", "impeccable", "imperfect", "imperturbable", "impish", "impolite", "important", "impossible", "impractical", "impressionable", "impressive", "improbable", "impure", "inborn", "incomparable", "incompatible", "incomplete", "inconsequential", "incredible", "indelible", "indolent", "inexperienced", "infamous", "infantile", "infatuated", "inferior", "infinite", "informal", "innocent", "insecure", "insidious", "insignificant", "insistent", "instructive", "insubstantial", "intelligent", "intent", "intentional", "interesting", "internal", "international", "intrepid", "ironclad", "irresponsible", "irritating", "itchy", "jaded", "jagged", "jam", "jaunty", "jealous", "jittery", "joint", "jolly", "jovial", "joyful", "joyous", "jubilant", "judicious", "juicy", "jumbo", "jumpy", "junior", "juvenile", "kaleidoscopic", "keen", "key", "kind", "kindhearted", "kindly", "klutzy", "knobby", "knotty", "knowing", "knowledgeable", "known", "kooky", "kosher", "lame", "lanky", "large", "last", "lasting", "late", "lavish", "lawful", "lazy", "leading", "leafy", "lean", "left", "legal", "legitimate", "light", "lighthearted", "likable", "likely", "limited", "limp", "limping", "linear", "lined", "liquid", "little", "live", "lively", "livid", "loathsome", "lone", "lonely", "long", "long", "loose", "lopsided", "lost", "loud", "lovable", "lovely", "loving", "low", "loyal", "lucky", "lumbering", "luminous", "lumpy", "lustrous", "luxurious", "mad", "made", "magnificent", "majestic", "major", "male", "mammoth", "married", "marvelous", "masculine", "massive", "mature", "meager", "mealy", "mean", "measly", "meaty", "medical", "mediocre", "medium", "meek", "mellow", "melodic", "memorable", "menacing", "merry", "messy", "metallic", "mild", "milky", "mindless", "miniature", "minor", "minty", "miserable", "miserly", "misguided", "misty", "mixed", "modern", "modest", "moist", "monstrous", "monthly", "monumental", "moral", "mortified", "motherly", "motionless", "mountainous", "muddy", "muffled", "multicolored", "mundane", "murky", "mushy", "musty", "muted", "mysterious", "naive", "narrow", "nasty", "natural", "naughty", "nautical", "near", "neat", "necessary", "needy", "negative", "neglected", "negligible", "neighboring", "nervous", "new", "next", "nice", "nifty", "nimble", "nippy", "nocturnal", "noisy", "nonstop", "normal", "notable", "noted", "noteworthy", "novel", "noxious", "numb", "nutritious", "nutty", "obedient", "obese", "oblong", "obvious", "occasional", "odd", "oddball", "offbeat", "offensive", "official", "oily", "old", "old", "only", "open", "optimal", "optimistic", "opulent", "orange", "orderly", "ordinary", "organic", "original", "ornate", "ornery", "other", "our", "outgoing", "outlandish", "outlying", "outrageous", "outstanding", "oval", "overcooked", "overdue", "overjoyed", "overlooked", "palatable", "pale", "paltry", "parallel", "parched", "partial", "passionate", "past", "pastel", "peaceful", "peppery", "perfect", "perfumed", "periodic", "perky", "personal", "pertinent", "pesky", "pessimistic", "petty", "phony", "physical", "piercing", "pink", "pitiful", "plain", "plaintive", "plastic", "playful", "pleasant", "pleased", "pleasing", "plump", "plush", "pointed", "pointless", "poised", "polished", "polite", "political", "poor", "popular", "portly", "posh", "positive", "possible", "potable", "powerful", "powerless", "practical", "precious", "present", "prestigious", "pretty", "previous", "pricey", "prickly", "primary", "prime", "pristine", "private", "prize", "probable", "productive", "profitable", "profuse", "proper", "proud", "prudent", "punctual", "pungent", "puny", "pure", "purple", "pushy", "putrid", "puzzled", "puzzling", "quaint", "qualified", "quarrelsome", "quarterly", "queasy", "querulous", "questionable", "quick", "quick", "quiet", "quintessential", "quirky", "quixotic", "quizzical", "radiant", "ragged", "rapid", "rare", "rash", "raw", "ready", "real", "realistic", "reasonable", "recent", "reckless", "rectangular", "red", "reflecting", "regal", "regular", "reliable", "relieved", "remarkable", "remorseful", "remote", "repentant", "repulsive", "required", "respectful", "responsible", "revolving", "rewarding", "rich", "right", "rigid", "ringed", "ripe", "roasted", "robust", "rosy", "rotating", "rotten", "rough", "round", "rowdy", "royal", "rubbery", "ruddy", "rude", "rundown", "runny", "rural", "rusty", "sad", "safe", "salty", "same", "sandy", "sane", "sarcastic", "sardonic", "satisfied", "scaly", "scarce", "scared", "scary", "scented", "scholarly", "scientific", "scornful", "scratchy", "scrawny", "second", "second", "secondary", "secret", "self", "self", "selfish", "sentimental", "separate", "serene", "serious", "serpentine", "several", "severe", "shabby", "shadowy", "shady", "shallow", "shameful", "shameless", "sharp", "shimmering", "shiny", "shocked", "shocking", "shoddy", "short", "short", "showy", "shrill", "shy", "sick", "silent", "silky", "silly", "silver", "similar", "simple", "simplistic", "sinful", "single", "sizzling", "skeletal", "skinny", "sleepy", "slight", "slim", "slimy", "slippery", "slow", "slushy", "small", "smart", "smoggy", "smooth", "smug", "snappy", "snarling", "sneaky", "sniveling", "snoopy", "sociable", "soft", "soggy", "solid", "somber", "some", "sophisticated", "sore", "sorrowful", "soulful", "soupy", "sour", "sparkling", "sparse", "specific", "spectacular", "speedy", "spherical", "spicy", "spiffy", "spirited", "spiteful", "splendid", "spotless", "spotted", "spry", "square", "squeaky", "squiggly", "stable", "staid", "stained", "stale", "standard", "starchy", "stark", "starry", "steel", "steep", "sticky", "stiff", "stimulating", "stingy", "stormy", "straight", "strange", "strict", "strident", "striking", "striped", "strong", "studious", "stunning", "stupendous", "stupid", "sturdy", "stylish", "subdued", "submissive", "substantial", "subtle", "suburban", "sudden", "sugary", "sunny", "super", "superb", "superficial", "superior", "supportive", "sure", "surprised", "suspicious", "svelte", "sweaty", "sweet", "sweltering", "swift", "sympathetic", "talkative", "tall", "tame", "tan", "tangible", "tart", "tasty", "tattered", "taut", "tedious", "teeming", "tempting", "tender", "tense", "tepid", "terrible", "terrific", "testy", "thankful", "that", "these", "thick", "thin", "third", "thirsty", "this", "thorny", "thorough", "those", "thoughtful", "threadbare", "thrifty", "thunderous", "tidy", "tight", "timely", "tinted", "tiny", "tired", "torn", "total", "tough", "tragic", "trained", "traumatic", "treasured", "tremendous", "triangular", "tricky", "trifling", "trim", "trivial", "troubled", "true", "trusting", "trustworthy", "trusty", "truthful", "tubby", "turbulent", "twin", "ugly", "ultimate", "unacceptable", "unaware", "uncomfortable", "uncommon", "unconscious", "understated", "unequaled", "uneven", "unfinished", "unfit", "unfolded", "unfortunate", "unhappy", "unhealthy", "uniform", "unimportant", "unique", "united", "unkempt", "unknown", "unlawful", "unlined", "unlucky", "unnatural", "unpleasant", "unrealistic", "unripe", "unruly", "unselfish", "unsightly", "unsteady", "unsung", "untidy", "untimely", "untried", "untrue", "unused", "unusual", "unwelcome", "unwieldy", "unwilling", "unwitting", "unwritten", "upbeat", "upright", "upset", "urban", "usable", "used", "useful", "useless", "utilized", "utter", "vacant", "vague", "vain", "valid", "valuable", "vapid", "variable", "vast", "velvety", "venerated", "vengeful", "verifiable", "vibrant", "vicious", "victorious", "vigilant", "vigorous", "villainous", "violent", "violet", "virtual", "virtuous", "visible", "vital", "vivacious", "vivid", "voluminous", "wan", "warlike", "warm", "warmhearted", "warped", "wary", "wasteful", "watchful", "waterlogged", "watery", "wavy", "weak", "wealthy", "weary", "webbed", "wee", "weekly", "weepy", "weighty", "weird", "welcome", "well", "well", "well", "well", "well", "well", "well", "well", "wet", "which", "whimsical", "whirlwind", "whispered", "white", "whole", "whopping", "wicked", "wide", "wide", "wiggly", "wild", "willing", "wilted", "winding", "windy", "winged", "wiry", "wise", "witty", "wobbly", "woeful", "wonderful", "wooden", "woozy", "wordy", "worldly", "worn", "worried", "worrisome", "worse", "worst", "worthless", "worthwhile", "worthy", "wrathful", "wretched", "writhing", "wrong", "wry", "xenial", "xerophytic", "xenogenetic", "xylophagous", "yawning", "yearly", "yellow", "yellowish", "young", "youthful", "yummy", "zany", "zealous", "zesty", "zigzag"];
const nouns = ["airplane", "alarm", "alley", "alleyway", "alphabet", "ambulance", "amplifier", "anchor", "ant", "apple", "apricot", "apron", "aquarium", "arrow", "artist", "ash", "ashtray", "attendant", "attic", "axe", "baby", "bag", "ball", "balloon", "banana", "basket", "bear", "bed", "bee", "bench", "bicycle", "bird", "boat", "book", "bottle", "box", "brick", "bridge", "bush", "butterfly", "cake", "camera", "candle", "car", "carpet", "cat", "cave", "chair", "chimney", "clock", "cloud", "clown", "coin", "computer", "cookie", "crayon", "crown", "cup", "curtain", "deer", "desk", "diamond", "dictionary", "dinosaur", "disclaimer", "disk", "doctor", "dog", "doll", "donkey", "door", "dragon", "drawer", "dress", "drum", "drumstick", "duck", "duckling", "dustpan", "eagle", "earring", "earth", "earthworm", "easel", "edge", "eel", "egg", "eggplant", "elbow", "elephant", "elevator", "elf", "engine", "envelope", "eraser", "espresso", "eucalyptus", "euphonium", "eyeball", "fan", "farmer", "feather", "fence", "ferry", "fire", "firefly", "fish", "fisherman", "flag", "flower", "flute", "fog", "foot", "fork", "fountain", "fox", "frame", "frog", "fruit", "garbage", "garden", "gasoline", "gate", "gecko", "ghost", "gift", "giraffe", "girl", "glasses", "globe", "goat", "goose", "grapes", "grass", "guitar", "gum", "gun", "gym", "hair", "ham", "hamburger", "hammer", "hand", "handle", "hanger", "harp", "hat", "hatbox", "heart", "helicopter", "hill", "hole", "home", "honey", "horn", "horse", "horseshoe", "hose", "house", "ice", "iceberg", "icicle", "igloo", "iguana", "incense", "index", "infant", "ingot", "ink", "insect", "instrument", "invitation", "iron", "island", "itch", "ivy", "jack", "jackal", "jacket", "jaguar", "jam", "jar", "jeans", "jeep", "jelly", "jellyfish", "jester", "jet", "jigsaw", "jingle", "jockey", "jogger", "jolt", "journal", "juice", "kaleidoscope", "kangaroo", "karate", "keg", "kernel", "ketchup", "kettle", "key", "keyboard", "kid", "kimono", "king", "kite", "kitten", "kiwi", "knife", "knob", "knot", "koala", "label", "ladder", "ladybug", "lake", "lamp", "laptop", "leaf", "leaflet", "lemon", "lemonade", "library", "lighthouse", "lion", "lioness", "lizard", "llama", "lock", "locket", "lollipop", "lunchbox", "magnet", "mailbox", "maple", "mask", "melon", "mirror", "mitten", "money", "monkey", "moon", "moose", "mop", "mosaic", "motorcycle", "mountain", "mouse", "muffin", "mule", "mushroom", "mustard", "nachos", "nail", "nanny", "narwhal", "necklace", "nectar", "nectarine", "needle", "nest", "net", "newspaper", "nib", "nickel", "noodle", "nose", "notebook", "nut", "nymph", "oak", "oar", "oasis", "ocean", "ocelot", "octopus", "olive", "omelet", "onion", "opal", "orange", "orb", "orchid", "ornament", "otter", "oven", "overalls", "owl", "oyster", "palace", "pancake", "panda", "parrot", "peacock", "pear", "pen", "pencil", "penguin", "pepper", "pie", "pig", "pillow", "pineapple", "pinecone", "pizza", "potato", "pumpkin", "purse", "quack", "quail", "quaker", "quarrel", "quarter", "quarterback", "quartz", "queen", "question", "queue", "quicklime", "quicksand", "quill", "quilt", "quince", "quinoa", "quiver", "quokka", "rabbit", "raccoon", "racquet", "radio", "rainbow", "rat", "reef", "reptile", "rhinoceros", "ribbon", "rice", "ring", "road", "robot", "rock", "rocket", "rope", "rose", "rug", "ruler", "sailboat", "salad", "sandwich", "scarf", "seal", "shirt", "shoe", "skateboard", "snake", "snowman", "sock", "spider", "spoon", "star", "stove", "suitcase", "sun", "surfboard", "swan", "table", "taco", "tail", "telephone", "telescope", "television", "tent", "tie", "tiger", "tissue", "tomato", "toothbrush", "toy", "tractor", "train", "tree", "trophy", "truck", "turtle", "udder", "ukulele", "umbrella", "umpire", "underwear", "unicorn", "unicycle", "uniform", "unit", "universe", "university", "upstairs", "urchin", "urinal", "urn", "utensil", "vacation", "vacuum", "van", "vase", "vegetable", "vehicle", "veil", "vein", "vest", "viking", "village", "vine", "vinegar", "violin", "virus", "volcano", "volleyball", "vulture", "waffle", "wagon", "wall", "wallet", "walnut", "wand", "watermelon", "wave", "whale", "wheel", "whistle", "wig", "windmill", "window", "witch", "wolf", "wombat", "worm", "wreath", "wrench", "x-ray", "xanadu", "xanthine", "xebec", "xenon", "xenophobia", "xeranthemum", "xerarch", "xerograph", "xerophyte", "xerus", "xiphias", "xylitol", "xylograph", "xylography", "xylophone", "xyst", "xystus", "yacht", "yak", "yam", "yard", "yardstick", "yarn", "yearbook", "yeast", "yew", "yo-yo", "yogurt", "yoke", "yolk", "yucca", "zebra", "zephyr", "zeppelin", "zigzag", "zipper", "zircon", "zither", "zucchini", "facebook", "pinterest", "categories", "comment", "website"];