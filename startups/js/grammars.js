/**
 * @author Kate
 */

var grammars = {
 	
    scifi : {
	"origin": ["#title#: #abstract#"],


"code":["#phon#","#phon##v1#","#phon#gle", "#phon#is","#phon#ly","#phon#ster","#phon##sys#","#pico##phon#"],
"phon":["#v1##c1##v1##c1#","#c1##v1##c1#"],
	"v1" : ["a","i","u","e","o","","ae","y","oo"], "c1":["q","w","r","t","y","p","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","","ph","th","ch","sh"], 
	

"title": ["#code#","#descname#"],
"descname":["#pico##sys#"],
"pico":["Pico","Nano","Micro", "Chain","Immers","Un","Jumanji","Extra", "Mega","Super", "Unit","DNA","Gen","i","Inter","Black","Arami","Miera","Oka","Wiki","Quant","Sim","Simu","Quad","Alta",
"Alpha","Omega"],
"sys":["Sys","Systems","Tech","Tek","Data","Rack", "Lux","Luce","Lucid","Borg","Secure","Um", "Vista","Aurum"],
"abstract":["This is a solution for the problem of #problem#. This will benefit #persona#, and will do so by #solution#.",
"This solves #problem# #felt# by #persona# through #solution#.",
"As #persona#, some of us have #felt# #problem#. This solution will solve this by #solution#.",
"A #super# solution for #persona#. By #solution#, it solves #problem#.",
"Have #problem#? Get a #super# solution through #solution#. Make your #persona# happy.",
"Avoid #problem# with #solution#."],
"persona":["IT Managers", "IT Directors", "regular users", "customers", "a company's customers", "customers", "developers","project managers","administrators", "heavy users", "internal users","CTOs","CIOs","CXOs", "managers","mobile users", "digital nomads", "employees", "users", "new users", "unbanked users", "underbanked users","crypto traders", "KYC officers", "auditors", "CFOs"],
"super": ["top-notch", "cutting-edge","unique", "marvelous", "very advanced"],
"problem": ["#bad# #mp# #bizpro#"],
"bizpro":["payments", "banking","advertising","customer onboarding","customer service", "simulations", "audits","remittance","data warehouse","stock-keeping", "supply chain","loans", "negotiations","software creation", "software architecting", "server deployment", "data inheritance", "data matching", "pattern seeking", "signal-to-noise filtering", "anti-tampering", "KYC logging", "KYC blacklisting", "token creation", "ideation processing", "insight extraction"],
"bad":["slow","difficult","overly complex", "complex","cumbersome","inaccessible", "hard-to-understand","non-inclusive"],
"mp":["multi-party","multi-bank", "inter#categorial#", "consortium","integrated","multi-node", "aggregated", "pseudonymous", "networked"],
"categorial":["national", "regional", "generational", "company", "group","continental", "user", "admin", "role"],
"felt":["experienced","felt", "personally known", "personally felt", "personally experienced", "come across", "met","experienced first-hand","first-hand experience"],

"solution": ["#creating# #better# #bizpro# by #applying# #tech# in #subbizpro#","#applying# #tech# in #subbizpro# for #better# #bizpro#"], 
"applying":["applying","initiating","installing","migrating", "integrating"],
"subbizpro":["user logins","user creation","user management scenarios", "content management systems", "development cycles","data exchange networks", "user experience scenarios","mobile endpoint management","infrastructure systems", "customer interaction services","business process managers", "approval flow scenarios", "user interface interactions", "API connectors", "data-lake environments", "edge computing", "edge security", "fuzzy networking","cognitive security", "cognitive insights engines"],
"tech":["Blockchain", "Big Data", "AI", "Quantum Computing", "microservices architecture", "Design Thinking", "modular design", "genetic algorithm","multi-node databases","decentralized apps", "distributed applications","decentralized repository","Markov models","Machine Learning", "Platform-as-a-Service", "Business-Process-as-a-Service","Blockchain-as-a-Service","Docker deployment", "Flexible Infrastructure", "high-availability", "quantum codebase", "hash tables", "R", "Big Insights", "expert integrated systems", "Cloud-in-your-Data-Center", "managed services", "Agile methodology", "virtual networking", "decentralized virtual networks"],
"better": ["better", "more inclusive", "faster", "improved", "quicker", "faster", "more compliant", "regulation-compliant"],
"creating":["creating","initiating","enabling", "including","expanding", "considering","inducing","promoting", "indirectly promoting", "staging", "implementing", "establishing", "including"]
},

}



