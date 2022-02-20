let ranges = [
  {
    "range": "top24",
    "topStart": 1,
    "topEnd": 24,
    "upper": 201000000000,  //201 000 000 000
    "lower": 29000000000, //29 000 000 000
    "amount": 24,
    "step": 7166666666, // 7 166 666 666
  },
  {
    "range": "top37",
    "topStart": 25,
    "topEnd": 61,
    "upper": 25000000000, //25 000 000 000
    "lower": 11500000001, //11 500 000 001
    "amount": 37,
    "step": 364864864, // 364 846 864
  },
  {
    "range": "top88",
    "topStart": 62,
    "topEnd": 149,
    "upper": 11500000000, //11 500 000 000
    "lower": 6500000001, //6 500 000 001
    "amount": 88,
    "step": 56818181, // 56 818 181
  },
  {
    "range": "top98",
    "topStart": 150,
    "topEnd": 247,
    "upper": 6500000000, //6 500 000 000
    "lower": 4500000001, //4 500 000 001
    "amount": 98,
    "step": 20408163, // 20 408 163
  },
  {
    "range": "top91",
    "topStart": 248,
    "topEnd": 338,
    "upper": 4500000000, //4 500 000 000
    "lower": 3500000001, //3 500 000 001
    "amount": 91,
    "step": 10989010, // 10 989 010
  },
  {
    "range": "top62",
    "topStart": 339,
    "topEnd": 400,
    "upper": 3500000000, //3 500 000 000
    "lower": 2000000001, //2 000 000 001
    "amount": 62,
    "step": 24193548, // 24 193 548
  },
  {
    "range": "billionaires",
    "topStart": 401,
    "topEnd": 2825,
    "upper": 2000000000, //2 000 000 000
    "lower": 1000000000, //1 000 000 000
    "amount": 2425,
    "step": 412371, // 412 371
  },
  {
    "range": "millionaires",
    "topStart": 2826,
    "topEnd": 20800000, // 20 800 000
    "upper": 999999999, // 999 999 999
    "lower": 1000000, //1 000 000
    "amount": 20797175, // 20 797 175
    "step": 48.0353701404,
  },
  {
    "range": "Luxembourg",
    "topStart": 20800001, //20 800 001
    "topEnd": 20862100, // 20 862 100
    "upper": 999999, 
    "lower": 9000, 
    "amount": 62100, 
    "step": 15.9581159420,
  },
  {
    "range": "Ireland",
    "topStart": 20862101, 
    "topEnd": 25783600, 
    "upper": 8999,
    "lower": 8000,
    "amount": 4921500,
    "step": 0.0002029869,
  },
  {
    "range": "Switzerland",
    "topStart": 25783601,
    "topEnd": 34353746,
    "upper": 7999,
    "lower": 7000,
    "amount": 8570146,
    "step": 0.0001165674,
  },
  {
    "range": "Norway",
    "topStart": 34353747,
    "topEnd": 39973246,
    "upper": 6999,
    "lower": 6800,
    "amount": 5619500,
    "step": 0.0000354124,
  },
  {
    "range": "USA",
    "topStart": 39973247,
    "topEnd": 373403067,
    "upper": 6799,
    "lower": 5663,
    "amount": 333429821,
    "step": 0.0000034070,
  },
  {
    "range": "Denmark",
    "topStart": 373403068,
    "topEnd": 379165149,
    "upper": 5662,
    "lower": 5600,
    "amount": 5762082,
    "step": 0.0000107600,
  },
  {
    "range": "Singapore",
    "topStart": 379165150,
    "topEnd": 384868749,
    "upper": 5599,
    "lower": 5508,
    "amount": 5703600,
    "step": 0.0000159548,
  },
  {
    "range": "Australia",
    "topStart": 384868750,
    "topEnd": 411197749,
    "upper": 5507,
    "lower": 5177,
    "amount": 26329000,
    "step": 0.0000125337,
  },
  {
    "range": "Qatar",
    "topStart": 411197750,
    "topEnd": 413950794,
    "upper": 5176,
    "lower": 5001,
    "amount": 2753045,
    "step": 0.0000635660,
  },
  {
    "range": "Sweden",
    "topStart": 413950795,
    "topEnd": 424264241,
    "upper": 5000,
    "lower": 4825,
    "amount": 10313447,
    "step": 0.0000169681,
  },
  {
    "range": "Netherlands",
    "topStart": 424264242,
    "topEnd": 441900786,
    "upper": 4824,
    "lower": 4616,
    "amount": 17636545,
    "step": 0.0000117937,
  },
  {
    "range": "Austria",
    "topStart": 441900787,
    "topEnd": 450816168,
    "upper": 4615,
    "lower": 4476,
    "amount": 8915382,
    "step": 0.0000117937,
  },
  {
    "range": "Finland",
    "topStart": 450816169,
    "topEnd": 456342942,
    "upper": 4475,
    "lower": 4411,
    "amount": 5526774,
    "step": 0.0000115800,
  },
  {
    "range": "Canada",
    "topStart": 456342943,
    "topEnd": 495004692,
    "upper": 4410,
    "lower": 4316,
    "amount": 38661750,
    "step": 0.0000024313,
  },
  {
    "range": "Germany",
    "topStart": 495004693,
    "topEnd": 578353992,
    "upper": 4315,
    "lower": 4000,
    "amount": 83349300,
    "step": 0.0000037793,
  },
  {
    "range": "GreatBritain",
    "topStart": 578353993,
    "topEnd": 646001104,
    "upper": 3999,
    "lower": 3821,
    "amount": 67647112,
    "step": 0.0000026313,
  },
  {
    "range": "France",
    "topStart": 646001105,
    "topEnd": 714960703,
    "upper": 3820,
    "lower": 3646,
    "amount": 68959599,
    "step": 0.0000025232,
  },
  {
    "range": "UAE",
    "topStart": 714960704,
    "topEnd": 724731703,
    "upper": 3645,
    "lower": 3403,
    "amount": 9771000,
    "step": 0.0000247672,
  },
  {
    "range": "Japan",
    "topStart": 724731704,
    "topEnd": 850141703,
    "upper": 3402,
    "lower": 3101,
    "amount": 125410000,
    "step": 0.0000024001,
  },
  {
    "range": "Italy",
    "topStart": 850141704,
    "topEnd": 909377916,
    "upper": 3100,
    "lower": 2942,
    "amount": 59236213,
    "step": 0.0000026673,
  },
  {
    "range": "Korea",
    "topStart": 909377917,
    "topEnd": 961158495,
    "upper": 2941,
    "lower": 2642,
    "amount": 51780579,
    "step": 0.0000057744,
  },
  {
    "range": "Spain",
    "topStart": 961158496,
    "topEnd": 1008093127,
    "upper": 2641,
    "lower": 2112,
    "amount": 46934632,
    "step": 0.0000112710,
  },
  {
    "range": "Poland",
    "topStart": 1008093128,
    "topEnd": 1046406162,
    "upper": 2111,
    "lower": 1421,
    "amount": 38313035,
    "step": 0.0000180095,
  },
  {
    "range": "Iran",
    "topStart": 1046406163,
    "topEnd": 1133292620,
    "upper": 1420,
    "lower": 1052,
    "amount": 86886458,
    "step": 0.0000042354,
  },
  {
    "range": "China",
    "topStart": 1133292621,
    "topEnd": 2582963176,
    "upper": 1051,
    "lower": 986,
    "amount": 1449670556,
    "step": 0.0000000448,
  },
  {
    "range": "Russia",
    "topStart": 2582963177,
    "topEnd": 2728441273,
    "upper": 985,
    "lower": 930,
    "amount": 145478097,
    "step": 0.0000003781,
  },
  {
    "range": "Malaysia",
    "topStart": 2728441274,
    "topEnd": 2762642788,
    "upper": 929,
    "lower": 906,
    "amount": 34201515,
    "step": 0.0000006725,
  },
  {
    "range": "Mexico",
    "topStart": 2762642789,
    "topEnd": 2893656812,
    "upper": 905,
    "lower": 829,
    "amount": 131014024,
    "step": 0.0000005801,
  },
  {
    "range": "Argentina",
    "topStart": 2893656813,
    "topEnd": 2938595524,
    "upper": 828,
    "lower": 806,
    "amount": 44938712,
    "step": 0.0000004896,
  },
  {
    "range": "Turkey",
    "topStart": 2938595525,
    "topEnd": 3024750521,
    "upper": 805,
    "lower": 701,
    "amount": 86154997,
    "step": 0.0000012071,
  },
  {
    "range": "Thailand",
    "topStart": 3024750522,
    "topEnd": 3094228094,
    "upper": 700,
    "lower": 651,
    "amount": 69477573,
    "step": 0.0000007053,
  },

  {
    "range": "Brazil",
    "topStart": 3094228095,
    "topEnd": 3303846754,
    "upper": 650,
    "lower": 611,
    "amount": 209618660,
    "step": 0.0000001861,
  },
  {
    "range": "SouthAfrica",
    "topStart": 3303846755,
    "topEnd": 3365803654,
    "upper": 610,
    "lower": 561,
    "amount": 61956900,
    "step": 0.0000007909,
  },
  {
    "range": "Peru",
    "topStart": 3365803655,
    "topEnd": 3397965838,
    "upper": 560,
    "lower": 503,
    "amount": 32162184,
    "step": 0.0000017723,
  },
  {
    "range": "Colombia",
    "topStart": 3397965839,
    "topEnd": 3447224332,
    "upper": 502,
    "lower": 451,
    "amount": 49258494,
    "step": 0.0000010354,
  },
  {
    "range": "Ukraine",
    "topStart": 3447224333,
    "topEnd": 3488725507,
    "upper": 450,
    "lower": 410,
    "amount": 41501175,
    "step": 0.0000009638,
  },
  {
    "range": "Iraq",
    "topStart": 3488725508,
    "topEnd": 3530035507,
    "upper": 409,
    "lower": 381,
    "amount": 41310000,
    "step": 0.0000006778,
  },
  {
    "range": "Indonesia",
    "topStart": 3530035508,
    "topEnd": 3807347407,
    "upper": 380,
    "lower": 329,
    "amount": 277311900,
    "step": 0.0000001839,
  },
  {
    "range": "Egypt",
    "topStart": 3807347408,
    "topEnd": 3913823367,
    "upper": 328,
    "lower": 317,
    "amount": 106475960,
    "step": 0.0000001033,
  },
  {
    "range": "Vietnam",
    "topStart": 3913823368,
    "topEnd": 4012032351,
    "upper": 316,
    "lower": 307,
    "amount": 98208984,
    "step": 0.0000000916,
  },
  {
    "range": "Algeria",
    "topStart": 4012032352,
    "topEnd": 4057685351,
    "upper": 306,
    "lower": 299,
    "amount": 45653000,
    "step": 0.0000001533,
  },
  {
    "range": "Philippines",
    "topStart": 4057685352,
    "topEnd": 4168822261,
    "upper": 298,
    "lower": 291,
    "amount": 111136910,
    "step": 0.0000000630,
  },
  {
    "range": "Morocco",
    "topStart": 4168822262,
    "topEnd": 4205657691,
    "upper": 290,
    "lower": 251,
    "amount": 36835430,
    "step": 0.0000010588,
  },
  {
    "range": "Congo",
    "topStart": 4205657692,
    "topEnd": 4307437954,
    "upper": 250,
    "lower": 211,
    "amount": 101780263,
    "step": 0.0000003832,
  },
  {
    "range": "Nigeria",
    "topStart": 4307437955,
    "topEnd": 4525786830,
    "upper": 210,
    "lower": 186,
    "amount": 218348876,
    "step": 0.0000001099,
  },
  {
    "range": "Kenya",
    "topStart": 4525786831,
    "topEnd": 4583351126,
    "upper": 185,
    "lower": 184,
    "amount": 57564296,
    "step": 0.0000000174,
  },
  {
    "range": "Angola",
    "topStart": 4583351127,
    "topEnd": 4618176126,
    "upper": 183,
    "lower": 182,
    "amount": 34825000,
    "step": 0.0000000287,
  },
  {
    "range": "Bangladesh",
    "topStart": 4618176127,
    "topEnd": 4798347801,
    "upper": 181,
    "lower": 178,
    "amount": 180171675,
    "step": 0.0000000167,
  },
  {
    "range": "India",
    "topStart": 4798347802,
    "topEnd": 6219013801,
    "upper": 177,
    "lower": 160,
    "amount": 1420666000,
    "step": 0.0000000120,
  },
  {
    "range": "Uzbekistan",
    "topStart": 6219013802,
    "topEnd": 6254468374,
    "upper": 159,
    "lower": 145,
    "amount": 35454573,
    "step": 0.0000003949,
  },
  {
    "range": "Venezuela",
    "topStart": 6254468375,
    "topEnd": 6287831374,
    "upper": 144,
    "lower": 133,
    "amount": 33363000,
    "step": 0.0000003297,
  },
  {
    "range": "Pakistan",
    "topStart": 6287831375,
    "topEnd": 6517378472,
    "upper": 132,
    "lower": 109,
    "amount": 229547098,
    "step": 0.0000001002,
  },
  {
    "range": "Myanmar",
    "topStart": 6517378473,
    "topEnd": 6571423472,
    "upper": 108,
    "lower": 101,
    "amount": 54045000,
    "step": 0.0000001295,
  },
  {
    "range": "Tanzania",
    "topStart": 6571423473,
    "topEnd": 6637314219,
    "upper": 100,
    "lower": 92,
    "amount": 65890747,
    "step": 0.0000001214,
  },
  {
    "range": "Uganda",
    "topStart": 6637314220,
    "topEnd": 6685320919,
    "upper": 91,
    "lower": 83,
    "amount": 48006700,
    "step": 0.0000001666,
  },
  {
    "range": "Ethiopia",
    "topStart": 6685320920,
    "topEnd": 6804199919,
    "upper": 82,
    "lower": 73,
    "amount": 118879000,
    "step": 0.0000000757,
  },
  {
    "range": "Sudan",
    "topStart": 6804199920,
    "topEnd": 6816539919,
    "upper": 72,
    "lower": 56,
    "amount": 12340000,
    "step": 0.0000012966,
  },
  {
    "range": "Afghanistan",
    "topStart": 6816539920,
    "topEnd": 6855765479,
    "upper": 55,
    "lower": 36,
    "amount": 39225560,
    "step": 0.0000004844,
  },
  {
    "range": "Bottom",
    "topStart": 6855765480,
    "topEnd": 6878043057,
    "upper": 35,
    "lower": 4,
    "amount": 22277578,
    "step": 0.0000013915
  },
  {
    "range": "Children",
    "topStart": 6878043058,
    "topEnd": 8000000000,
    "upper": 3,
    "lower": 0,
    "amount": 1121956942,
    "step": 0.0000000027
  },
]
