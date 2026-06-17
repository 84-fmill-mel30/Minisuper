const productos = [ 
  {"codigo":"COCACOLA600","descripcion":"COCA COLA 600ML","precio":18,"stock":48,"categoria":"Bebidas"},
  {"codigo":"PEPSI600","descripcion":"PEPSI 600ML","precio":17,"stock":36,"categoria":"Bebidas"},
  {"codigo":"AGUA500","descripcion":"AGUA SIMPLE 500ML","precio":10,"stock":60,"categoria":"Bebidas"},
  {"codigo":"JARRITOS","descripcion":"JARRITOS SABORES 370ML","precio":16,"stock":24,"categoria":"Bebidas"},
  {"codigo":"JUMEX250","descripcion":"JUMEX JUGO 250ML SURTIDO","precio":12,"stock":48,"categoria":"Bebidas"},
  {"codigo":"LECHE1L","descripcion":"LECHE LALA ENTERA 1 LITRO","precio":28,"stock":24,"categoria":"Bebidas"},
  {"codigo":"YOGURT","descripcion":"YOGURT ALPURA NATURAL 900G","precio":45,"stock":12,"categoria":"Bebidas"},
  {"codigo":"CAFE NESCAFE","descripcion":"NESCAFE CLASICO SOBRE 2G","precio":5,"stock":100,"categoria":"Bebidas"},
  {"codigo":"LIPTON","descripcion":"TE LIPTON SOBRE SURTIDO","precio":5,"stock":60,"categoria":"Bebidas"},
  {"codigo":"GATORADE","descripcion":"GATORADE 500ML SURTIDO","precio":22,"stock":24,"categoria":"Bebidas"},

  # BOTANAS
  {"codigo":"SABRITAS40","descripcion":"SABRITAS ORIGINAL 40G","precio":20,"stock":30,"categoria":"Botanas"},
  {"codigo":"DORITOS","descripcion":"DORITOS NACHO 45G","precio":20,"stock":30,"categoria":"Botanas"},
  {"codigo":"RUFFLES","descripcion":"RUFFLES QUESO 45G","precio":20,"stock":24,"categoria":"Botanas"},
  {"codigo":"CHEETOS","descripcion":"CHEETOS FLAMIN HOT 45G","precio":20,"stock":24,"categoria":"Botanas"},
  {"codigo":"TAKIS","descripcion":"TAKIS FUEGO 68G","precio":25,"stock":24,"categoria":"Botanas"},
  {"codigo":"PALOMITAS","descripcion":"PALOMITAS ACT II MANTEQUILLA","precio":18,"stock":20,"categoria":"Botanas"},
  {"codigo":"NUEZ","descripcion":"CACAHUATES JAPONES 50G","precio":12,"stock":30,"categoria":"Botanas"},
  {"codigo":"DUVALÍN","descripcion":"DUVALIN AVELLANA VAINILLA","precio":8,"stock":50,"categoria":"Botanas"},

  # DULCES Y CHOCOLATES
  {"codigo":"CARLOS5","descripcion":"CARLOS V CHOCOLATE 23G","precio":10,"stock":60,"categoria":"Dulces"},
  {"codigo":"SNICKERS","descripcion":"SNICKERS 52G","precio":22,"stock":30,"categoria":"Dulces"},
  {"codigo":"KRANKY","descripcion":"KRANKY CHOCOLATE CEREAL 30G","precio":10,"stock":48,"categoria":"Dulces"},
  {"codigo":"PALETA","descripcion":"PALETA PAYASO","precio":8,"stock":48,"categoria":"Dulces"},
  {"codigo":"CHICLE","descripcion":"CHICLE TRIDENT SURTIDO","precio":12,"stock":60,"categoria":"Dulces"},
  {"codigo":"MAZAPAN","descripcion":"MAZAPAN DE LA ROSA","precio":6,"stock":60,"categoria":"Dulces"},

  # LÁCTEOS Y FRÍOS
  {"codigo":"QUESO200","descripcion":"QUESO MANCHEGO LALA 200G","precio":55,"stock":10,"categoria":"Lácteos"},
  {"codigo":"MANTEQUILLA","descripcion":"MANTEQUILLA LALA 90G","precio":28,"stock":12,"categoria":"Lácteos"},
  {"codigo":"CREMA","descripcion":"CREMA LALA 500G","precio":38,"stock":10,"categoria":"Lácteos"},
  {"codigo":"JAMON200","descripcion":"JAMÓN FUD SANDWICH 200G","precio":42,"stock":8,"categoria":"Lácteos"},
  {"codigo":"HUEVO","descripcion":"HUEVO BLANCO BACHOCO 12 PZA","precio":48,"stock":20,"categoria":"Lácteos"},

  # ABARROTES
  {"codigo":"ARROZKG","descripcion":"ARROZ MORELOS 1KG","precio":28,"stock":30,"categoria":"Abarrotes"},
  {"codigo":"FRIJOLKG","descripcion":"FRIJOL NEGRO 1KG","precio":35,"stock":24,"categoria":"Abarrotes"},
  {"codigo":"ACEITE","descripcion":"ACEITE VEGETAL 1 LITRO","precio":42,"stock":18,"categoria":"Abarrotes"},
  {"codigo":"AZUCAR","descripcion":"AZÚCAR ESTÁNDAR 1KG","precio":28,"stock":24,"categoria":"Abarrotes"},
  {"codigo":"SAL","descripcion":"SAL LA FINA 1KG","precio":18,"stock":24,"categoria":"Abarrotes"},
  {"codigo":"SOPAS","descripcion":"MARUCHAN SOPA RAMEN SURTIDA","precio":14,"stock":60,"categoria":"Abarrotes"},
  {"codigo":"ATUN","descripcion":"ATÚN DOLORES EN AGUA 140G","precio":22,"stock":36,"categoria":"Abarrotes"},
  {"codigo":"SARDINA","descripcion":"SARDINA CALMEX JITOMATE","precio":22,"stock":24,"categoria":"Abarrotes"},
  {"codigo":"TOMATE","descripcion":"SALSA TOMATE HERDEZ 210G","precio":22,"stock":24,"categoria":"Abarrotes"},
  {"codigo":"MAYONESA","descripcion":"MAYONESA HELLMANN'S 390G","precio":48,"stock":12,"categoria":"Abarrotes"},
  {"codigo":"MOSTAZA","descripcion":"MOSTAZA LA COSTEÑA 265G","precio":28,"stock":12,"categoria":"Abarrotes"},
  {"codigo":"PASTA","descripcion":"PASTA BARILLA ESPAGUETI 500G","precio":25,"stock":18,"categoria":"Abarrotes"},

  # TORTILLAS Y PAN
  {"codigo":"TORTILLA","descripcion":"TORTILLA MAIZ 1KG","precio":22,"stock":20,"categoria":"Pan y Tortilla"},
  {"codigo":"BIMBO","descripcion":"PAN BIMBO BLANCO 680G","precio":52,"stock":10,"categoria":"Pan y Tortilla"},
  {"codigo":"TOSTADAS","descripcion":"TOSTADAS CHARRAS 180G","precio":22,"stock":18,"categoria":"Pan y Tortilla"},
  {"codigo":"GALLETAS","descripcion":"GALLETAS MARIAS GAMESA 200G","precio":22,"stock":24,"categoria":"Pan y Tortilla"},

  # LIMPIEZA
  {"codigo":"DETERGENTE","descripcion":"DETERGENTE ROMA 500G","precio":25,"stock":18,"categoria":"Limpieza"},
  {"codigo":"JABON","descripcion":"JABÓN ZOTE BLANCO 400G","precio":22,"stock":18,"categoria":"Limpieza"},
  {"codigo":"PINOL","descripcion":"PINOL PINO 500ML","precio":25,"stock":12,"categoria":"Limpieza"},
  {"codigo":"CLORO","descripcion":"CLORO CLORALEX 1 LITRO","precio":22,"stock":12,"categoria":"Limpieza"},
  {"codigo":"ESPONJA","descripcion":"ESPONJA SCOTCH BRITE VERDE","precio":15,"stock":24,"categoria":"Limpieza"},
  {"codigo":"BOLSAS","descripcion":"BOLSAS BASURA NEGRAS 10 PZA","precio":18,"stock":20,"categoria":"Limpieza"},

  # HIGIENE
  {"codigo":"SHAMPOO","descripcion":"SHAMPOO HEAD SHOULDERS 180ML","precio":45,"stock":12,"categoria":"Higiene"},
  {"codigo":"JABONBANO","descripcion":"JABÓN DE BAÑO PALMOLIVE 150G","precio":18,"stock":24,"categoria":"Higiene"},
  {"codigo":"PASTADENT","descripcion":"PASTA DENTAL COLGATE 75ML","precio":28,"stock":18,"categoria":"Higiene"},
  {"codigo":"CEPILLO","descripcion":"CEPILLO DENTAL COLGATE SUAVE","precio":22,"stock":18,"categoria":"Higiene"},
  {"codigo":"PAPEL","descripcion":"PAPEL HIGIÉNICO REGIO 4 ROLLOS","precio":35,"stock":20,"categoria":"Higiene"},
  {"codigo":"SERVILLETAS","descripcion":"SERVILLETAS KLEENEX 100 PZA","precio":18,"stock":24,"categoria":"Higiene"},

  # CIGARROS Y MISC
  {"codigo":"MARLBORO","descripcion":"CIGARRO MARLBORO ROJO CAJETILLA","precio":72,"stock":10,"categoria":"Varios"},
  {"codigo":"LIGHTER","descripcion":"ENCENDEDOR BIC SURTIDO","precio":18,"stock":20,"categoria":"Varios"},
  {"codigo":"PILAS2AA","descripcion":"PILAS DURACELL AA 2 PZA","precio":42,"stock":12,"categoria":"Varios"},
  {"codigo":"SALDO50","descripcion":"SALDO TELCEL $50","precio":50,"stock":99,"categoria":"Recargas"},
  {"codigo":"SALDO100","descripcion":"SALDO TELCEL $100","precio":100,"stock":99,"categoria":"Recargas"},
  {"codigo":"SALDO200","descripcion":"SALDO MOVISTAR $200","precio":200,"stock":99,"categoria":"Recargas"},
];
