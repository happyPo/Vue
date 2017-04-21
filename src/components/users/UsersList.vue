<template>
    <div>
        <CreateUser/>
        <ul class="list">
            <User v-for="(user, index) in filteredUser" :user_data="{user: user, user_index: index}" :key="this.id"/>
        </ul>
    </div>
</template>
<script>
    import CreateUser from '../CreateUser.vue'
    import UsersFilter from '../filter/UsersFilter'
    import UserDetail from './UserDetail'
    import User from './User'

    //    var link = 'https://randomuser.me/api/?results=20';
    var link2 = [{
        "gender": "male",
        "name": {"title": "mr", "first": "marvin", "last": "thomas"},
        "location": {"street": "1091 new road", "city": "peterborough", "state": "lancashire", "postcode": "JK05 4LN"},
        "email": "marvin.thomas@example.com",
        "login": {
            "username": "ticklishmouse596",
            "password": "bruno",
            "salt": "kutih2Kc",
            "md5": "a8091860c9461e27648151a7734edd63",
            "sha1": "d132cd34d4f769a38380557592e9292928b1f9f1",
            "sha256": "2b953aea7519bb5d3932421299257a71c1d46d3b1b0f64657667d73bfc4f5c1f"
        },
        "dob": "1971-10-11 02:31:09",
        "registered": "2011-01-22 13:02:40",
        "phone": "016977 3784",
        "cell": "0793-296-292",
        "id": {"name": "NINO", "value": "LC 86 38 79 H"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/23.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/23.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/23.jpg"
        },
        "nat": "GB"
    }, {
        "gender": "female",
        "name": {"title": "miss", "first": "josefine", "last": "jørgensen"},
        "location": {"street": "1219 stenager", "city": "hornbæk", "state": "syddanmark", "postcode": 94729},
        "email": "josefine.jørgensen@example.com",
        "login": {
            "username": "lazytiger342",
            "password": "idiot",
            "salt": "0tCx3sVJ",
            "md5": "85ad851c1b87fca8007e6101739b035a",
            "sha1": "8d17c21ea02b57570884e6e4fdd7e9f69889a455",
            "sha256": "60440ff8ed573653e579e77b3433fc1f4f7c04d7089de1d05ce29a796244d2bc"
        },
        "dob": "1989-04-18 18:11:38",
        "registered": "2016-06-22 15:38:13",
        "phone": "57897748",
        "cell": "47243021",
        "id": {"name": "CPR", "value": "187179-2743"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/23.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/23.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/23.jpg"
        },
        "nat": "DK"
    }, {
        "gender": "male",
        "name": {"title": "mr", "first": "cristian", "last": "crespo"},
        "location": {
            "street": "3472 calle de toledo",
            "city": "vitoria",
            "state": "castilla la mancha",
            "postcode": 18482
        },
        "email": "cristian.crespo@example.com",
        "login": {
            "username": "tinymouse567",
            "password": "trample",
            "salt": "zms4GDkB",
            "md5": "5437c3e4f75d42723d9d70d26626d50f",
            "sha1": "8b21f9c54c83b975ccb799f1bdba95faeddaa915",
            "sha256": "aa704c3ecf5564eeccc80c30699b757ac40bad1a25f4d94ed606da6dbf0077df"
        },
        "dob": "1976-10-26 13:41:44",
        "registered": "2014-02-19 07:23:33",
        "phone": "940-744-228",
        "cell": "651-875-569",
        "id": {"name": "DNI", "value": "02508074-B"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/51.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/51.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/51.jpg"
        },
        "nat": "ES"
    }, {
        "gender": "male",
        "name": {"title": "monsieur", "first": "paul", "last": "leclerc"},
        "location": {"street": "9531 rue paul-duvivier", "city": "bettens", "state": "zug", "postcode": 6288},
        "email": "paul.leclerc@example.com",
        "login": {
            "username": "browngoose947",
            "password": "1201",
            "salt": "848oFKY4",
            "md5": "dd7ebae7e0b74c109da99af27a4741e3",
            "sha1": "39a5004bdbc5348a03173c7366152d52c7a300a2",
            "sha256": "51929846a5cb2624e5ad02631f6abebffbb1904817d63587cdb70600000a4ba8"
        },
        "dob": "1959-06-07 06:50:02",
        "registered": "2004-11-06 11:22:50",
        "phone": "(368)-623-1013",
        "cell": "(855)-985-4215",
        "id": {"name": "AVS", "value": "756.VKAD.UNCV.12"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/33.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/33.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/33.jpg"
        },
        "nat": "CH"
    }, {
        "gender": "male",
        "name": {"title": "mr", "first": "victor", "last": "lévesque"},
        "location": {"street": "1253 lakeview ave", "city": "keswick", "state": "nova scotia", "postcode": 67473},
        "email": "victor.lévesque@example.com",
        "login": {
            "username": "whiteostrich724",
            "password": "bentley",
            "salt": "qVppRti5",
            "md5": "7edb91d7bb096e138655f6d78659444d",
            "sha1": "b0213f8b2a3b1d373f0fa2ff23bc598551c7e524",
            "sha256": "94a9ea4e678149bbb8480c81c10d95af3a96e7875311cb88093f7531b7261de4"
        },
        "dob": "1952-05-21 13:26:46",
        "registered": "2009-09-14 09:26:45",
        "phone": "705-937-9817",
        "cell": "392-534-4980",
        "id": {"name": "", "value": null},
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/53.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/53.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/53.jpg"
        },
        "nat": "CA"
    }, {
        "gender": "female",
        "name": {"title": "miss", "first": "aubrey", "last": "harcourt"},
        "location": {
            "street": "6561 brock rd",
            "city": "havelock",
            "state": "northwest territories",
            "postcode": 80511
        },
        "email": "aubrey.harcourt@example.com",
        "login": {
            "username": "redsnake747",
            "password": "biggie",
            "salt": "ALXdfUWN",
            "md5": "af6d733e61f42157ae359d2edad6834f",
            "sha1": "6084b9be05f293275603f2caeef4579c0a935d78",
            "sha256": "73106aa9b212541454f2c0bf49d0fda54c5369b13f2ccf9ba97805b89427498e"
        },
        "dob": "1968-06-16 05:48:10",
        "registered": "2007-04-30 16:08:03",
        "phone": "237-545-5954",
        "cell": "799-532-3426",
        "id": {"name": "", "value": null},
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/22.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/22.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/22.jpg"
        },
        "nat": "CA"
    }, {
        "gender": "male",
        "name": {"title": "mr", "first": "tommi", "last": "vogt"},
        "location": {"street": "6715 dorfstraße", "city": "verden", "state": "hessen", "postcode": 92247},
        "email": "tommi.vogt@example.com",
        "login": {
            "username": "tinyostrich121",
            "password": "istheman",
            "salt": "ef9l5Q2D",
            "md5": "98f66cd2685986879f56adc9b1dd080a",
            "sha1": "1c6a8fffedf1749577e8076bd3fde73ccd0d38cb",
            "sha256": "69be703275a99b8baf22680d49938da27426a4a3bf265b7a5009b91f9acdc9ac"
        },
        "dob": "1963-01-12 07:37:19",
        "registered": "2004-11-22 01:46:22",
        "phone": "0378-3628018",
        "cell": "0177-5531103",
        "id": {"name": "", "value": null},
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/42.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/42.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/42.jpg"
        },
        "nat": "DE"
    }, {
        "gender": "female",
        "name": {"title": "ms", "first": "sophie", "last": "anderson"},
        "location": {"street": "9045 regent ave", "city": "sutton", "state": "nova scotia", "postcode": 24197},
        "email": "sophie.anderson@example.com",
        "login": {
            "username": "ticklishfrog525",
            "password": "lawrence",
            "salt": "h8C9jhsB",
            "md5": "d4879c6a75250568580b515292288c88",
            "sha1": "1329b6b87f14d6a3684a48d34b858a2dce7a050a",
            "sha256": "3ebb904c89e1e85dad44255f400d81039ace719769947fb361f4be830c7360e0"
        },
        "dob": "1982-07-03 20:54:59",
        "registered": "2008-12-27 20:53:54",
        "phone": "406-560-4554",
        "cell": "241-216-2783",
        "id": {"name": "", "value": null},
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/14.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/14.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/14.jpg"
        },
        "nat": "CA"
    }, {
        "gender": "female",
        "name": {"title": "mrs", "first": "latife", "last": "kocabıyık"},
        "location": {"street": "1378 tunalı hilmi cd", "city": "giresun", "state": "kahramanmaraş", "postcode": 65327},
        "email": "latife.kocabıyık@example.com",
        "login": {
            "username": "yellowkoala908",
            "password": "pathfind",
            "salt": "QuYuB7Si",
            "md5": "222285f1b41993f636d2b0fb013708dd",
            "sha1": "aea4b454ce11ef3378638204e907303aed2e54ff",
            "sha256": "26b685c9379192103abbfc037e4d88f77da8ab679e8d5600dbc87622af2eefdd"
        },
        "dob": "1993-03-21 19:52:51",
        "registered": "2016-07-06 23:49:22",
        "phone": "(820)-772-2780",
        "cell": "(097)-807-1835",
        "id": {"name": "", "value": null},
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/28.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/28.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/28.jpg"
        },
        "nat": "TR"
    }, {
        "gender": "female",
        "name": {"title": "miss", "first": "veera", "last": "remes"},
        "location": {"street": "6387 siilitie", "city": "lapinlahti", "state": "north karelia", "postcode": 14318},
        "email": "veera.remes@example.com",
        "login": {
            "username": "yellowgorilla256",
            "password": "rrpass1",
            "salt": "P32un3gn",
            "md5": "a9582d2d05794dd0ff70ebfe3da331ac",
            "sha1": "637ee467b4fb4edd3e9d92cc9a35a0e3d41b0986",
            "sha256": "2c212d15f37cf5fefabb9e2f09cac76f64f7e66eaad73e49a60e79a52ad229e2"
        },
        "dob": "1994-11-06 01:02:22",
        "registered": "2004-05-06 08:09:35",
        "phone": "07-942-483",
        "cell": "043-013-11-02",
        "id": {"name": "HETU", "value": "1094-320M"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/39.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/39.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/39.jpg"
        },
        "nat": "FI"
    }, {
        "gender": "male",
        "name": {"title": "mr", "first": "lucas", "last": "nielsen"},
        "location": {"street": "2859 tolstrupvej", "city": "kongsvinger", "state": "nordjylland", "postcode": 81065},
        "email": "lucas.nielsen@example.com",
        "login": {
            "username": "organicsnake659",
            "password": "explorer",
            "salt": "DUGzOhPn",
            "md5": "ec460481236434339ee8f4123e5e5761",
            "sha1": "64cd85a41caeb2d8c4322bcc0b50bcdb520f0cd9",
            "sha256": "96f2cc53e38f6ce940690f84fd02bcaabca9a3dc8872d5e356e7bcd61eb7fe9a"
        },
        "dob": "1987-03-18 00:04:12",
        "registered": "2005-06-11 22:42:18",
        "phone": "18195857",
        "cell": "53529934",
        "id": {"name": "CPR", "value": "372093-3507"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/39.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/39.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/39.jpg"
        },
        "nat": "DK"
    }, {
        "gender": "male",
        "name": {"title": "mr", "first": "francisco", "last": "duarte"},
        "location": {"street": "2274 rua onze ", "city": "bauru", "state": "roraima", "postcode": 17648},
        "email": "francisco.duarte@example.com",
        "login": {
            "username": "goldendog457",
            "password": "cricket1",
            "salt": "sqShUNFA",
            "md5": "dbe740cdf27efb717b07f86641b1632f",
            "sha1": "cd929a90e262513b77ff235f79756e1a1184c003",
            "sha256": "0593d5a5e0a899bbb0b8d88308e06998d4e990d55dfd3b4b0f5af99092335791"
        },
        "dob": "1947-12-24 13:18:04",
        "registered": "2008-05-07 08:54:32",
        "phone": "(45) 6189-2274",
        "cell": "(76) 9237-3042",
        "id": {"name": "", "value": null},
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/49.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/49.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/49.jpg"
        },
        "nat": "BR"
    }, {
        "gender": "male",
        "name": {"title": "mr", "first": "deniz", "last": "alyanak"},
        "location": {"street": "8205 filistin cd", "city": "ankara", "state": "aksaray", "postcode": 47013},
        "email": "deniz.alyanak@example.com",
        "login": {
            "username": "orangedog635",
            "password": "5555555",
            "salt": "ScDkcuhC",
            "md5": "a8bfb525a90d626074f422ec6209db15",
            "sha1": "33c154c94e590e1feca53f5fead5eb9bde158fa7",
            "sha256": "12e3ccd9180b881c135bb55ae8d90b5551b9c17442bef4a25c66d1bedd3781de"
        },
        "dob": "1953-03-03 17:07:44",
        "registered": "2010-01-01 12:21:11",
        "phone": "(385)-176-1746",
        "cell": "(567)-178-5095",
        "id": {"name": "", "value": null},
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/14.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/14.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/14.jpg"
        },
        "nat": "TR"
    }, {
        "gender": "female",
        "name": {"title": "mrs", "first": "freya", "last": "singh"},
        "location": {
            "street": "3670 taharoto road",
            "city": "tauranga",
            "state": "manawatu-wanganui",
            "postcode": 39522
        },
        "email": "freya.singh@example.com",
        "login": {
            "username": "ticklishbutterfly374",
            "password": "bloody",
            "salt": "HzZ6jlAV",
            "md5": "0c4e0e7accfd8fd0874c377b8a1b9122",
            "sha1": "4dfb0c4d754c0b885234b2e26aa85db68e0ddef6",
            "sha256": "960332a655861d12a6563540104b69475c56c3c085b917f381b9992433a9566b"
        },
        "dob": "1982-10-17 16:54:22",
        "registered": "2012-09-04 18:04:09",
        "phone": "(524)-509-0663",
        "cell": "(845)-273-8281",
        "id": {"name": "", "value": null},
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/76.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/76.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/76.jpg"
        },
        "nat": "NZ"
    }, {
        "gender": "male",
        "name": {"title": "mr", "first": "peter", "last": "gardner"},
        "location": {"street": "9332 albert road", "city": "carrigtwohill", "state": "cork city", "postcode": 16859},
        "email": "peter.gardner@example.com",
        "login": {
            "username": "bigkoala632",
            "password": "january",
            "salt": "tUTc8CsB",
            "md5": "23412bdb5dd0da4881d93634e6631178",
            "sha1": "8a510cb46eaa91a0c0d118a84289a3472fdd0927",
            "sha256": "cacd6738097574ded4c57935708137311d7139b1536af50607e853a949113af6"
        },
        "dob": "1945-06-02 21:49:41",
        "registered": "2013-10-30 18:39:18",
        "phone": "011-799-2581",
        "cell": "081-791-6664",
        "id": {"name": "PPS", "value": "0321685T"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/99.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/99.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/99.jpg"
        },
        "nat": "IE"
    }, {
        "gender": "male",
        "name": {"title": "mr", "first": "كيان", "last": "حسینی"},
        "location": {"street": "1304 میدان ولیعصر (عج)", "city": "پاکدشت", "state": "فارس", "postcode": 44828},
        "email": "كيان.حسینی@example.com",
        "login": {
            "username": "heavybear231",
            "password": "simone",
            "salt": "tc0dkfs7",
            "md5": "0b48a1e36ffbb567881b62b7f43ce1b4",
            "sha1": "dad7f5da37a5fd690f8d6c9e76845a3c1479fd4d",
            "sha256": "ea0f8d1e680afabbbc4c6a674fddd6b46db8a594e5d8f76fbea895ddd6fee828"
        },
        "dob": "1993-08-25 04:06:15",
        "registered": "2011-08-19 19:42:27",
        "phone": "099-43091738",
        "cell": "0947-721-1345",
        "id": {"name": "", "value": null},
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/37.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/37.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/37.jpg"
        },
        "nat": "IR"
    }, {
        "gender": "male",
        "name": {"title": "mr", "first": "darrell", "last": "ryan"},
        "location": {
            "street": "3262 mockingbird ln",
            "city": "shepparton",
            "state": "western australia",
            "postcode": 4455
        },
        "email": "darrell.ryan@example.com",
        "login": {
            "username": "blueladybug864",
            "password": "wilder",
            "salt": "XSJ92U3D",
            "md5": "bf8e5f27ff1c11cf028ca80f212b700b",
            "sha1": "d4184e51fdfe5c6857a7b08049bf1711edecef9a",
            "sha256": "967b5919da707f9ec8592aefe3cdad14393ae3d4353df5331b1537c51af92cbe"
        },
        "dob": "1950-03-24 12:24:36",
        "registered": "2008-03-26 04:08:09",
        "phone": "02-4944-6661",
        "cell": "0493-855-476",
        "id": {"name": "TFN", "value": "664907349"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/40.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/40.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/40.jpg"
        },
        "nat": "AU"
    }, {
        "gender": "female",
        "name": {"title": "mademoiselle", "first": "apolline", "last": "lucas"},
        "location": {"street": "5158 rue barrème", "city": "lussy-sur-morges", "state": "glarus", "postcode": 6206},
        "email": "apolline.lucas@example.com",
        "login": {
            "username": "tinycat818",
            "password": "winter1",
            "salt": "itw1YeMq",
            "md5": "85f5bbbb6d156bbb5c733d729919acb9",
            "sha1": "e99fe488ea6d7f8d5bd5a75236c8d0772f5a8e6e",
            "sha256": "8a00495954a2555bbfa79a63cfa5f845fca45cbbb2a0ecb4197348a0a227db40"
        },
        "dob": "1955-11-12 13:09:12",
        "registered": "2005-01-10 23:57:46",
        "phone": "(123)-523-5065",
        "cell": "(305)-726-4365",
        "id": {"name": "AVS", "value": "756.ZQWL.BCVA.82"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/9.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/9.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/9.jpg"
        },
        "nat": "CH"
    }, {
        "gender": "male",
        "name": {"title": "mr", "first": "lars", "last": "möller"},
        "location": {"street": "8084 erlenweg", "city": "bautzen", "state": "sachsen-anhalt", "postcode": 24995},
        "email": "lars.möller@example.com",
        "login": {
            "username": "lazysnake209",
            "password": "sigmachi",
            "salt": "eCEDELVw",
            "md5": "7e16827d758366b53ac734dc538a0890",
            "sha1": "01c7f06616d65a68111f92696552dc323a9f21eb",
            "sha256": "fe6eb31de834c32f4f5bb20636b3566d4b0dd0dffdfd2901e11615053a7b6a7d"
        },
        "dob": "1965-04-23 13:34:19",
        "registered": "2009-12-06 20:00:14",
        "phone": "0376-6224597",
        "cell": "0171-5440547",
        "id": {"name": "", "value": null},
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/18.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/18.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/18.jpg"
        },
        "nat": "DE"
    }, {
        "gender": "male",
        "name": {"title": "monsieur", "first": "charles", "last": "morel"},
        "location": {"street": "1267 rue andré-gide", "city": "ballens", "state": "aargau", "postcode": 6920},
        "email": "charles.morel@example.com",
        "login": {
            "username": "whitedog537",
            "password": "bushido",
            "salt": "TbXqmeTG",
            "md5": "a1d4828acf403079b644b68fc796eae8",
            "sha1": "7aa7b97353c2f6fdb26ac52c58a9417f54426625",
            "sha256": "7deb5cc69a937c0674759053ffe57773e7fc399560a31286ee6ae1deeeba59a4"
        },
        "dob": "1970-09-14 01:30:45",
        "registered": "2007-03-12 17:12:55",
        "phone": "(484)-157-2442",
        "cell": "(908)-884-8777",
        "id": {"name": "AVS", "value": "756.GQPT.JZJX.39"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/69.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/69.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/69.jpg"
        },
        "nat": "CH"
    }];

    export default{
        data() {
            return {
//                usersArr: ''
                filter: '',
                usersArr: link2,
                filterText: '',
            }
        },
        components: {
            User,
            UserDetail,
            UsersFilter,
            CreateUser
        },
        computed: {
            filteredUser(){
                return this.usersArr.filter((user) => {
                    return user.name.first.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase());
                });
            }
        },
        mounted() {
            Event.$on('filterChanged', (data) => {
                this.filter = data ;
            });
        }
    }
</script>