import type { ArticleL10n } from "./types";

// Español — 6 guías prácticas (los índices de sección corresponden 1:1 al original)
export const esArticlesPractical: Record<string, ArticleL10n> = {
  "airport-to-seoul": {
    title: "Del aeropuerto de Incheon a Seúl: todas las opciones (2026)",
    excerpt:
      "AREX exprés vs. tren normal, autobús limusina o taxi — lo que cuesta de verdad cada uno, cuánto tarda y cuál conviene a un fan de K-dramas con maleta y jet lag.",
    sections: [
      {
        heading: "Las tres opciones reales",
        paragraphs: [
          "Todo primerizo aterriza en Incheon (ICN) con la misma pregunta: ¿cómo llego a mi hotel? La respuesta honesta es que solo hay tres opciones que valga la pena comparar — el tren AREX, el autobús limusina y el taxi. Todo lo demás (traslados privados, apps con tarifa dinámica) es una variación más cara del taxi.",
          "Tu decisión depende de tres factores: dónde te alojas, cuánto equipaje llevas y cuán destruido bajas del avión. Un viajero solo con equipaje de mano que duerme junto a Seoul Station tiene una respuesta totalmente distinta a la de una familia de cuatro rumbo a Gangnam a medianoche.",
        ],
      },
      {
        heading: "AREX: el tren que deberían tomar casi todos los fans",
        paragraphs: [
          "AREX opera dos servicios en la misma línea. El Exprés va sin paradas a Seoul Station en unos 43 minutos por unos ₩11.000, con asiento garantizado y portaequipajes. El tren normal hace paradas de cercanías, tarda unos 59 minutos y cuesta ₩4.000–5.000 con T-money — la mejor relación calidad-precio del transporte aeroportuario coreano.",
          "El tren normal conecta directamente con el metro: si tu hotel está cerca de Hongdae (estación Hongik University) — la base clásica de viajeros jóvenes y fans — un solo tren te deja casi en la puerta. El Exprés tiene más sentido si te alojas junto a Seoul Station o enlazas con el KTX a Busan.",
        ],
        tip: "Compra la tarjeta T-money en la tienda de conveniencia del aeropuerto ANTES de subir al tren normal — la necesitarás todo el viaje y así el trayecto sale más barato que el billete suelto.",
      },
      {
        heading: "Autobús limusina: el aliado del equipaje",
        paragraphs: [
          "Los autobuses limusina salen de paradas numeradas justo frente a llegadas y cubren todos los distritos hoteleros — Myeongdong, Gangnam, Jamsil, Hongdae. Cuenta unos ₩17.000–18.000 y 70–90 minutos según el tráfico. Los asientos se reclinan, los avisos están en inglés y el personal carga tus maletas.",
          "El bus gana cuando tu hotel no está junto al metro, cuando llevas dos o más maletas grandes, o cuando aterrizas agotado y quieres sentarte una sola vez y bajarte en tu barrio. Consulta el mapa de rutas en el mostrador de llegadas o busca tu hotel en Naver Map y localiza el icono del bus aeroportuario.",
        ],
      },
      {
        heading: "Taxi: cuándo compensa de verdad",
        paragraphs: [
          "Un taxi normal al centro de Seúl ronda los ₩70.000–100.000 con peajes y tarda cerca de una hora fuera de hora punta. Entre tres o cuatro personas, llegando pasada la medianoche sin trenes, o con alguien de movilidad reducida, los números empiezan a cuadrar.",
          "Usa solo las paradas oficiales e ignora a quien se te acerque dentro de la terminal ofreciéndote viaje — es la única estafa aeroportuaria que le queda a Corea. La app Kakao T (ver nuestra guía de conectividad) también funciona desde el aeropuerto y muestra la tarifa estimada por adelantado.",
        ],
        list: [
          "Solo, poco equipaje, hotel junto al metro → AREX normal",
          "Alojado junto a Seoul Station / enlace KTX → AREX Exprés",
          "Mucho equipaje u hotel lejos del metro → autobús limusina",
          "Grupo de 3–4, llegada nocturna → taxi con Kakao T",
        ],
      },
      {
        heading: "Llegadas nocturnas y la trampa de la primera noche",
        paragraphs: [
          "Trenes y casi todos los buses cierran entre las 22:30 y la medianoche. Si aterrizas a las 23:00, no apuestes al último AREX: reserva el shuttle del hotel, asume el taxi o duerme la primera noche junto al aeropuerto. Paradise City, el resort que los fans conocen por Infierno de solteros, está a diez minutos de la terminal — y cuenta como tu primera localización visitada.",
          "Elijas lo que elijas, guarda una captura del nombre y la dirección de tu hotel en coreano antes de volar. Todos los conductores y mostradores trabajan con direcciones en coreano; no todos con tu pronunciación.",
        ],
      },
    ],
    faq: [
      { q: "¿Merece la pena el Exprés frente al tren normal?", a: "Solo si vas justo a Seoul Station o necesitas asiento garantizado. El normal cuesta menos de la mitad y tarda apenas 15 minutos más." },
      { q: "¿Los buses del aeropuerto aceptan tarjeta?", a: "Sí — las tarjetas internacionales funcionan en los kioscos y con T-money. Lleva ₩20.000 en efectivo por si acaso." },
      { q: "¿Con cuánta antelación debo llegar a ICN para volver?", a: "Tres horas. La seguridad y los mostradores de tax refund se colapsan en horas punta — y querrás tiempo para la última pasada por el Olive Young de la zona de embarque." },
      { q: "¿Puedo usar Uber desde Incheon?", a: "El Uber coreano despacha en su mayoría taxis normales vía app. Kakao T es el estándar local y suele asignar más rápido." },
    ],
    relatedLabels: ["T-money y el metro, explicados", "SIM, eSIM y las apps necesarias", "Arma tu ruta con el planificador"],
  },
  "tmoney-and-subway": {
    title: "T-money, Climate Card y el metro de Seúl: clase magistral de transporte para fans",
    excerpt:
      "Una tarjeta de plástico desbloquea todas las localizaciones de esta guía. Cómo funciona T-money, cuándo gana un pase turístico y la etiqueta de metro que te delata como profesional.",
    sections: [
      {
        heading: "Por qué el transporte es tu superpoder en Corea",
        paragraphs: [
          "Casi todas las localizaciones de este sitio — del muro Goblin de Deoksugung a las callejuelas de Gi-hun en Ssangmun-dong — quedan a diez minutos a pie de una estación. El metro de Seúl es limpio, puntual, climatizado, totalmente señalizado en inglés y absurdamente barato para estándares occidentales. El fan que lo domina el primer día ve el doble que el que no.",
          "Su única rareza es el pago: no se compran billetes de papel. Todo funciona con una tarjeta recargable, y cuanto antes la tengas, más fluido será todo.",
        ],
      },
      {
        heading: "T-money: cómprala en la primera hora",
        paragraphs: [
          "La T-money se vende en cualquier tienda de conveniencia (CU, GS25, 7-Eleven) y en kioscos del aeropuerto por unos pocos miles de wones más el saldo que cargues. Toca al entrar, toca al salir — cubre metro, buses e incluso taxis en la mayoría de ciudades, y da un descuento por trasbordo que el billete suelto no tiene.",
          "A mediados de 2026 el billete base ronda los ₩1.500; un trayecto cruzado con trasbordo de bus rara vez pasa de ₩2.500. Recarga en efectivo en cualquier tienda o en las máquinas de estación (menú en inglés). La misma tarjeta sirve en Busan y en los buses de Jeju.",
        ],
        tip: "Las ediciones con personajes (siempre hay una colaboración de drama o K-pop en marcha) cuestan un poco más y son el souvenir auténtico más barato de Corea.",
      },
      {
        heading: "Cuándo un pase gana al pago por viaje",
        paragraphs: [
          "Seúl vende pases ilimitados de corta duración para turistas — pases de día y variantes cortas de la Climate Card. El punto de equilibrio son 8–10 viajes al día, que suena a mucho pero es exactamente un día completo de localizaciones: hotel → Bukchon → almuerzo → Deoksugung → Namsan → Gwangjang → hotel ya son seis validaciones.",
          "Haz la cuenta con tu ruta real. Siguiendo nuestra ruta de clásicos de Seúl, el pase diario suele ganar los días uno y dos. Si tu estilo es dos barrios al día con largas paradas de café, la T-money pelada sale más barata. Los precios de los pases cambian más que las tarifas: confírmalos en la oficina de atención de cualquier estación.",
        ],
      },
      {
        heading: "Leer el sistema como un local",
        paragraphs: [
          "Usa Naver Map o Kakao Metro para las rutas — Google Maps gestiona mal el transporte coreano (detalles en nuestra guía de apps). Las líneas van por colores y números; los trasbordos están señalizados con tiempos de caminata honestos. Las salidas están numeradas, y cada página de lugar de este sitio te dice qué salida tomar — ese único dato ahorra más tiempo que cualquier otra cosa que publiquemos.",
          "Los trenes circulan de ~05:30 a medianoche. Las horas punta (08:00–09:30, 18:00–19:30) se sobreviven pero no con maletas; programa las localizaciones a media mañana y a menudo tendrás los sitios famosos casi para ti.",
        ],
        list: [
          "En escaleras mecánicas: de pie a la derecha, caminar por la izquierda",
          "Los asientos prioritarios se dejan vacíos incluso llenos",
          "Las llamadas, en voz baja o mejor no; escribir es lo universal",
          "No se come en el metro (agua y café con tapa, sí)",
          "Deja salir antes de entrar — se hace fila en las marcas de la puerta",
        ],
      },
      {
        heading: "Buses: la llave del paisaje de drama",
        paragraphs: [
          "Los fans evitan los buses por miedo y se pierden el transporte más cinematográfico de Corea — la mitad de las escenas emotivas de bus se rodaron en líneas urbanas normales. Naver Map te dice exactamente qué bus, qué parada y cuántas quedan; las líneas principales repiten pantalla y megafonía en inglés.",
          "Valida la T-money al subir Y al bajar — el toque de salida es el que activa tu ventana de trasbordo gratuito. Si lo olvidas, el siguiente tramo cobra tarifa completa. Esa es toda la técnica; ya sabes montar en bus coreano.",
        ],
      },
    ],
    faq: [
      { q: "¿Puedo pagar con mi tarjeta contactless como en Londres?", a: "El pago abierto extranjero se está desplegando en los tornos de Seúl, pero varía por tarjeta y línea. La T-money funciona siempre y en todas partes — hazte una." },
      { q: "¿Y si mi saldo queda en negativo a mitad de trayecto?", a: "El torno de salida te parará; usa la máquina de ajuste junto a la línea de tornos, recarga y sal. Sin multa, sin drama." },
      { q: "¿Es seguro el metro de noche?", a: "El metro de Seúl está entre los más seguros del mundo a cualquier hora. Tu mayor riesgo es perder el último tren de medianoche y pagar taxi." },
      { q: "¿Puedo recuperar el saldo de la T-money antes de volver?", a: "Las tiendas de conveniencia devuelven saldos pequeños (con comisión). O quédate la tarjeta — vale durante años y es la excusa perfecta para volver." },
    ],
    relatedLabels: ["Del aeropuerto a Seúl: todas las opciones", "Ruta de clásicos de Seúl (solo metro)", "Las apps que sustituyen a Google Maps"],
  },
  "sim-esim-apps": {
    title: "Conectado en Corea: eSIM, SIM y las 6 apps que reemplazan a Google",
    excerpt:
      "Google Maps apenas navega en Corea. Este es el montaje de conectividad y el paquete exacto de apps — Naver Map, Papago, Kakao T y compañía — que usan locales y fans listos.",
    sections: [
      {
        heading: "Lo único que debes saber antes de aterrizar",
        paragraphs: [
          "Corea tiene uno de los internets móviles más rápidos del planeta y lo necesitarás sin parar — mapas, traducción, reservas y consultar en qué escena sale la calle donde estás. El error es asumir que tu paquete habitual de apps funciona: por la normativa cartográfica nacional, Google Maps no puede dar direcciones a pie ni en coche en Corea. Muestra lugares, pero navega mal.",
          "La solución es simple: resuelve los datos antes o en el aeropuerto e instala el paquete coreano de abajo. Treinta minutos de preparación compran un viaje sin fricción.",
        ],
      },
      {
        heading: "eSIM vs. SIM vs. Wi-Fi de bolsillo",
        paragraphs: [
          "Si tu móvil admite eSIM, compra una eSIM de viaje para Corea antes de volar — la activación es un escaneo de QR, los precios compiten entre sí y conservas tu SIM de casa activa para los SMS de verificación. Una semana de datos ilimitados suele costar menos que una buena cena en Myeongdong.",
          "Las SIM físicas se venden en mostradores del aeropuerto y tiendas de conveniencia; funcionan bien pero implican cambiar tarjetas y guardar el alfiler. El Wi-Fi de bolsillo solo gana con grupos de tres o más compartiendo un aparato, a cambio de una batería más que cargar cada noche. Para la mayoría de fans solos o en pareja, la eSIM es la respuesta limpia.",
        ],
        tip: "Compra la eSIM con unos días de margen e instala el QR en casa con Wi-Fi. Aterrizar con la conectividad ya funcionando convierte inmigración-AREX en una vuelta de la victoria de quince minutos.",
      },
      {
        heading: "Las seis apps esenciales",
        paragraphs: ["Instálalas antes de volar; varias piden tu número de casa para registrarte, y es más fácil mientras sigue activo."],
        list: [
          "Naver Map — EL mapa de Corea: a pie, transporte, llegadas de bus, interfaz en inglés. Cada mapQuery de este sitio se pega directamente.",
          "Papago — el traductor de Naver, mejor que Google Translate para coreano. El modo cámara lee menús; el modo conversación resuelve el taxi.",
          "Kakao T — taxis invocados como por magia, tarifa a la vista, sin coreano. Acepta tarjetas extranjeras.",
          "KakaoTalk — el mensajero de Corea. Algunas casas de huéspedes y operadores solo se comunican por aquí.",
          "CatchTable Global — la app de reservas de restaurantes para extranjeros (nuestra guía la cubre paso a paso).",
          "Klook o similar — para tours de día a localizaciones remotas como las costas de Gangwon.",
        ],
      },
      {
        heading: "Vivir sin la navegación de Google Maps",
        paragraphs: [
          "Trata Google Maps como tu capa de descubrimiento (reseñas, horarios en inglés) y Naver Map como la de ejecución (llegar de verdad). Busca en Naver en inglés — entiende 'Gyeongbokgung' y 'Tosokchon Samgyetang' — y al pulsar Direcciones, confía en él más que en tu instinto: sus rutas a pie usan callejones y pasos subterráneos que ningún mapa extranjero conoce.",
          "La noche anterior, guarda los lugares de tu ruta K-SPOT en una carpeta de favoritos de Naver Map. Y una captura del resumen: la cobertura coreana es excelente, pero los túneles entre estaciones cortan la señal justo cuando necesitas el número de salida.",
        ],
      },
      {
        heading: "Energía, enchufes y la realidad diaria",
        paragraphs: [
          "Corea usa el enchufe europeo de dos clavijas redondas (tipo C/F) a 220V. Un adaptador universal y una power bank de 10.000mAh te cubren — la navegación y la cámara se comerán la batería a media tarde, y la cafetería donde recargues probablemente salió en algo que has visto.",
          "El Wi-Fi gratuito cubre estaciones, cafés y zonas turísticas, pero no montes el viaje sobre él; un plan de datos cuesta demasiado poco para justificar cazar hotspots mientras tu grupo avanza.",
        ],
      },
    ],
    faq: [
      { q: "¿Necesito un número de teléfono coreano?", a: "Para un viaje turístico normal, no — eSIM de solo datos más KakaoTalk cubren la comunicación. El número local solo importa para algunos servicios domésticos." },
      { q: "¿Kakao T acepta tarjetas extranjeras?", a: "Sí, regístrala en la app. Si un pago falla, elige el modo 'pagar al conductor' y usa tu tarjeta física en el taxi." },
      { q: "¿Papago es de verdad mejor que Google Translate?", a: "Para coreano, consistentemente — sobre todo menús, carteles y fórmulas de cortesía. Ten los dos; discrepan de formas útiles." },
    ],
    relatedLabels: ["Cómo reservar restaurantes calientes", "Clase magistral de transporte", "Pregunta lo que sea al concierge IA"],
  },
  "money-cards-tax-refund": {
    title: "Dinero en Corea 2026: tarjetas, efectivo, WOWPASS y cómo recuperar impuestos",
    excerpt:
      "Corea es casi cashless — hasta que de repente no lo es. Qué funciona de verdad con tarjetas extranjeras, cuánto efectivo llevar y el tax refund instantáneo que casi todos los turistas dejan en la mesa.",
    sections: [
      {
        heading: "La realidad del 90% sin efectivo",
        paragraphs: [
          "Tu Visa o Mastercard funciona casi en todas partes: grandes almacenes, Olive Young, tiendas de conveniencia, cafés, taxis, e incluso muchos puestos de mercado ya te acercan un datáfono. El contactless y las carteras móviles se aceptan ampliamente en las ciudades. Si tu viaje es Seúl + Busan + lo esencial de Jeju, podrías sobrevivir solo con plástico.",
          "Las excepciones se agrupan justo donde van los fans: puestitos de Gwangjang, tiendas de snacks antiguas en callejones de localizaciones, cepillos de templos y algunos buses rurales. Por eso la fórmula es tarjeta primero, con colchón de efectivo.",
        ],
      },
      {
        heading: "Cuánto efectivo y dónde sacarlo",
        paragraphs: [
          "Lleva ₩50.000–100.000 (unos 40–75 USD) y repón cuando baje. Evita los cambios del aeropuerto salvo para el dinero de supervivencia; en la ciudad el cambio es mejor. Las opciones principales: ATMs con distintivo 'Global' (en cada tienda de conveniencia y estación) y las máquinas de cambio de Myeongdong y Hongdae.",
          "Avisa a tu banco de que viajas, y cuando el terminal ofrezca cobrar en tu moneda, elige siempre wones (KRW) — la conversión dinámica de divisa es el sobrecoste más silencioso del turismo.",
        ],
      },
      {
        heading: "WOWPASS: la tarjeta turística que resuelve tres problemas",
        paragraphs: [
          "WOWPASS es una prepago para visitantes extranjeros: se carga con efectivo en divisas o por app, se pasa como una débito en cualquier sitio y además funciona como T-money de transporte. Los kioscos del aeropuerto y de las estaciones grandes la emiten al momento con tu pasaporte.",
          "Brilla para viajeros cuyas tarjetas cobran comisión exterior, para adolescentes que viajan con padres y para quien quiere el gasto separado de su cuenta principal. Es opcional — una tarjeta de viaje sin comisiones hace lo mismo — pero como solución 'una tarjeta para todo' en dos semanas de viaje fan, es difícil de superar.",
        ],
        tip: "Uses la tarjeta que uses, sé constante — una sola tarjeta para todo hace triviales el cálculo del tax refund y las cuentas del viaje.",
      },
      {
        heading: "Tax refund: el dinero que los fans olvidan",
        paragraphs: [
          "Corea devuelve el IVA (≈10%) a los turistas en compras de tiendas adheridas — y, a diferencia de casi todos los países, buena parte se procesa al instante en caja. Gasta más de ~₩15.000 en una transacción en una tienda Tax Free (Olive Young, grandes almacenes, grandes cadenas de moda), muestra el pasaporte y el descuento se aplica en el acto hasta ciertos límites.",
          "Para compras grandes o tiendas sin devolución instantánea, guarda los formularios y tramítalos en el aeropuerto: primero el escaneo de aduanas (con los artículos accesibles) y luego el mostrador o kiosco de devolución, en efectivo o a tarjeta. Date treinta minutos extra; la cola es peor justo cuando los hauls de Olive Young embarcan en vuelos nocturnos.",
        ],
        list: [
          "Mínimo ~₩15.000 por ticket en tiendas Tax Free",
          "Pasaporte obligatorio al comprar — una foto suele valer, el físico es más seguro",
          "La devolución instantánea tiene topes por compra; lo caro va por el aeropuerto",
          "Pueden inspeccionar que esté sin usar — no quites etiquetas",
        ],
      },
      {
        heading: "Propinas y precios en los que confiar",
        paragraphs: [
          "En Corea no hay propina — ni taxis, ni restaurantes, ni cafés. El precio del menú es lo que pagas, impuestos incluidos. Intentar dejar propina suele desencadenar una educada persecución calle abajo para devolvértela.",
          "Eso hace el presupuesto coreano inusualmente predecible: una ronda de street food en Gwangjang baja de ₩15.000, una gran comida casual son ₩10.000–15.000 y los menús degustación de nuestra lista de Culinary Class Wars van a precio publicado. Los únicos comodines son las compras y el café-hopping — que, aviso justo, es donde muere el presupuesto de todos los fans.",
        ],
      },
    ],
    faq: [
      { q: "¿Aceptan American Express?", a: "En grandes almacenes, hoteles y restaurantes grandes, normalmente sí; las tiendas pequeñas suelen limitarse a Visa/Mastercard. Lleva respaldo." },
      { q: "¿Puedo cambiar dinero en bancos coreanos?", a: "Sí, con pasaporte, pero por cambio y colas resultan más prácticos los locales autorizados de Myeongdong y los ATMs Global." },
      { q: "¿El tax refund aplica a comidas?", a: "No — cubre bienes que sacas del país, no comida, alojamiento ni servicios consumidos en Corea." },
    ],
    relatedLabels: ["Estrategia de haul K-beauty (con tips fiscales)", "Lo que cuesta de verdad un viaje fan", "Apps de conectividad y pago"],
  },
  "booking-restaurants-catchtable": {
    title: "Cómo reservan los extranjeros los restaurantes más calientes de Corea (CatchTable, Naver y la cultura no-show)",
    excerpt:
      "Culinary Class Wars convirtió las mejores mesas de Seúl en las reservas más difíciles de Asia. El proceso exacto — apps, ventanas horarias, tácticas de lista de espera — que consigue silla a los fans extranjeros.",
    sections: [
      {
        heading: "Por qué reservar en Corea se siente distinto",
        paragraphs: [
          "Tras Culinary Class Wars, las reservas en los restaurantes del programa se dispararon — saltos de tres dígitos en semanas con cada temporada, y la réplica nunca se apagó del todo. La alta mesa de Seúl funciona ahora con apps de reserva y ventanas de apertura, como entradas de concierto. Entrar andando y confiar funciona en el 90% de los restaurantes coreanos y en el 0% de los famosos.",
          "La buena noticia: el sistema es transparente, va por app y es cada vez más amable con extranjeros. Entiende las ventanas y las listas de espera y tendrás las mismas opciones que un local con pulgares rápidos.",
        ],
      },
      {
        heading: "CatchTable Global: tu arma principal",
        paragraphs: [
          "CatchTable domina las reservas del fine dining coreano y su versión Global está hecha para usuarios extranjeros: interfaz en inglés, registro con número internacional, tarjetas extranjeras. La mayoría de los restaurantes de exalumnos de CCW en nuestras páginas de Gastronomía lo listan como canal de reserva.",
          "La mecánica: cada restaurante abre reservas según un calendario — comúnmente 30 días antes, a veces un 'drop' mensual de todo el mes siguiente. Los horarios populares vuelan en minutos. Localiza tu objetivo en nuestras páginas, mira su método de reserva y comprueba en la app su ritmo exacto de apertura.",
        ],
        list: [
          "Descarga CatchTable Global y complétalo ANTES del viaje",
          "Sigue a tus objetivos en la app y en Instagram — los calendarios de drops salen ahí primero",
          "Pon alarmas de apertura en hora coreana (KST)",
          "Reserva en el segundo en que abra la ventana; los detalles, después",
          "Únete a listas de espera sin vergüenza — las cancelaciones son constantes",
        ],
      },
      {
        heading: "Naver, el teléfono y el desvío humano",
        paragraphs: [
          "Fuera del fine dining, muchos usan Naver Reservations, que históricamente pedía cuenta coreana — el soporte a extranjeros mejora, pero si te bloquea, no te rindas. El concierge de tu hotel reserva por teléfono en treinta segundos; los anfitriones de guesthouse también suelen hacerlo si lo pides con amabilidad. En Corea es un favor normal, no una molestia.",
          "Para las leyendas sin reserva — los fideos de Myeongdong Kyoja, los puestos de Gwangjang, la cola del Tosokchon — la táctica es el reloj, no las apps: llega antes de las 11:30 o después de las 14:00 y las filas se reducen a minutos.",
        ],
        tip: "Los viajeros en solitario tienen ventaja real: las barras de los chefs guardan sillas individuales que los grupos no pueden ocupar, y las listas de espera liberan primero a los solos. Algunas de las mesas más difíciles de Seúl son más fáciles yendo solo.",
      },
      {
        heading: "Cultura no-show: la regla que no debes romper",
        paragraphs: [
          "La cultura gastronómica coreana se toma las reservas en serio — el problema del no-show creció tanto que los depósitos y garantías de tarjeta ya son estándar arriba. Espera prepagos o retenciones de ₩10.000–50.000 por persona en los sitios de menú degustación, perdidos si desapareces.",
          "Llega puntual; la ventana de cortesía ronda los diez minutos, tras los cuales tu mesa puede pasar legal y socialmente al siguiente. ¿Necesitas cancelar? Hazlo en la app cuanto antes — los huecos liberados van a fans en lista de espera como tú, y la economía del karma es real.",
        ],
      },
      {
        heading: "Un plan de reservas realista para un viaje gastronómico",
        paragraphs: [
          "Cuatro semanas antes: elige una o dos reservas 'grial' de nuestra lista CCW y pon alarmas para sus ventanas. Dos semanas antes: llena el plan con el nivel accesible — el dim sum de Tian Mi Mi, las instituciones walk-in y los mercados no necesitan apps. Sobre el terreno: deja los almuerzos flexibles y usa las notificaciones de lista de espera para mejorar cualquier día.",
          "Y reserva almuerzo antes que cena cuando el menú lo permita — las mismas cocinas, degustaciones al 60–70% del precio y mucha mejor disponibilidad. Tu noche queda libre para los mercados nocturnos, que ningún sistema de reservas ha conquistado aún.",
        ],
      },
    ],
    faq: [
      { q: "¿Necesito número coreano para CatchTable?", a: "No — la versión Global acepta números internacionales. Si un restaurante pide contacto local, da el teléfono de recepción de tu hotel." },
      { q: "¿Con cuánta antelación planifico un restaurante de CCW?", a: "Asume ventana de 30 días y reserva al segundo de abrir. Para los dos o tres nombres más difíciles, cualquier reserva lograda es el punto fijo alrededor del cual se dobla tu itinerario." },
      { q: "¿Y si tengo restricciones alimentarias?", a: "Indícalas al reservar — los menús son cerrados y la cocina necesita margen. 'Sin cilantro' es fácil; vegano estricto en una barra marinera puede ser sencillamente imposible." },
      { q: "¿Los depósitos se devuelven?", a: "Suelen descontarse de la cuenta o devolverse si cancelas dentro de plazo según la política del local — lee la pantalla de reserva; varía." },
    ],
    relatedLabels: ["Todos los restaurantes de Culinary Class Wars", "Seúl foodie: la ruta de 3 días", "La lista de platos de K-drama"],
  },
  "korea-travel-etiquette": {
    title: "Etiqueta coreana para fans + 15 frases que abren puertas",
    excerpt:
      "Aprendiste algo de coreano en 400 horas de dramas — esto es lo que de verdad importa en persona: la etiqueta que los locales notan, los modales en localizaciones y 15 frases con poder real.",
    sections: [
      {
        heading: "Relájate: el listón es más bajo de lo que temes",
        paragraphs: [
          "Los coreanos no esperan que los extranjeros ejecuten la etiqueta a la perfección — el esfuerzo visible compra simpatía instantánea. El puñado de reglas de abajo cubre el 95% de las situaciones; el resto se perdona con una sonrisa y una pequeña inclinación de cabeza, que además es cómo se dice gracias, perdón y hola sin palabras.",
          "El hábito de mayor rendimiento es la regla de las dos manos: da y recibe cosas (tarjetas, cambio, copas) con ambas manos, o con la derecha apoyada en la izquierda. En tiendas, restaurantes y en cada escena de soju que has visto, se lee como respeto inmediato.",
        ],
      },
      {
        heading: "Comer y beber, al estilo drama",
        paragraphs: [
          "Espera a que el mayor levante los palillos en una mesa compartida; nunca los claves verticales en el arroz (imaginería funeraria); sirve la bebida a los demás y no a ti, y gírate ligeramente al beber ante mayores — sí, exactamente como en las cenas de oficina. Entre viajeros nadie lo exige, pero ejecutarlo en un restaurante tradicional encanta a todos.",
          "Llama al personal con un claro '저기요' (jeogiyo — disculpe) o con el timbre de mesa; esperar educadamente en silencio te vuelve invisible, lo cual es eficiencia, no grosería. Y los banchan se rellenan gratis — pedir más kimchi es un cumplido, no una molestia.",
        ],
      },
      {
        heading: "Modales en localizaciones (lee esta, por favor)",
        paragraphs: [
          "Muchos lugares amados son sitios corrientes: Bukchon es un barrio residencial, en Ssangmun-dong vive gente real y aquel café del drama es el pequeño negocio de alguien. Bukchon aplica horas de silencio precisamente porque el turismo fan se volvió ruidoso — quédate en las vías públicas, baja la voz y jamás fotografíes hacia ventanas o puertas abiertas.",
          "En los negocios famosos por un show, la cortesía es simple: compra algo. Un café en la cafetería del drama, un snack en el puesto del mercado — la fama del rodaje no paga el alquiler; los clientes sí. Y no por casualidad, así se consiguen las mejores fotos y, a veces, una historia del día de rodaje.",
        ],
        tip: "Las multitudes de la hora dorada en los sitios famosos son brutales. Ir al amanecer regala encuadres vacíos Y cuenta como turismo respetuoso — los barrios residenciales están más silenciosos y hermosos antes de las 9.",
      },
      {
        heading: "Las 15 frases con poder real",
        paragraphs: ["Guía de pronunciación: lee la romanización tal cual; los coreanos recorren más de la mitad del camino."],
        list: [
          "안녕하세요 (annyeong-haseyo) — hola, el abridor universal",
          "감사합니다 (gamsahamnida) — gracias, formal y siempre correcto",
          "죄송합니다 (joesong-hamnida) — lo siento / disculpe (serio)",
          "저기요 (jeogiyo) — ¡disculpe! (llamar la atención)",
          "이거 주세요 (igeo juseyo) — este, por favor (señala y gana)",
          "얼마예요? (eolmayeyo) — ¿cuánto cuesta?",
          "맛있어요! (masisseoyo) — ¡está delicioso! (amistad instantánea)",
          "화장실 어디예요? (hwajangsil eodiyeyo) — ¿dónde está el baño?",
          "영어 하세요? (yeongeo haseyo) — ¿habla inglés?",
          "천천히 말해 주세요 (cheoncheonhi malhae juseyo) — más despacio, por favor",
          "포장해 주세요 (pojang-hae juseyo) — para llevar, por favor",
          "덜 맵게 해주세요 (deol maepge haejuseyo) — menos picante, por favor",
          "사진 찍어도 돼요? (sajin jjigeodo dwaeyo) — ¿puedo tomar una foto?",
          "카드 돼요? (kadeu dwaeyo) — ¿aceptan tarjeta?",
          "잘 먹었습니다 (jal meogeotseumnida) — 'he comido bien' — dilo al salir de cualquier restaurante y mira las caras iluminarse",
        ],
      },
      {
        heading: "Pequeñas fricciones, descifradas",
        paragraphs: [
          "Zapatos fuera donde veas suelo elevado o zapateros — restaurantes tradicionales, estancias hanok, algunos cafés. Sonarse la nariz en la mesa es peor que sorber fideos (sorber está bien). El espacio personal en filas y metro es más estrecho que el estándar occidental; nadie está siendo grosero.",
          "La edad y la jerarquía estructuran el idioma mismo, y eso no puedes navegarlo — así que no lo intentes. Usa por defecto las formas corteses de arriba, añade la pequeña inclinación, y te tratarán con más calidez que a muchos hablantes fluidos. El fandom es un rompehielos genuino: mencionar el drama que te trajo convierte a los dependientes en guías turísticos.",
        ],
      },
    ],
    faq: [
      { q: "¿Es obligatorio inclinarse?", a: "Un pequeño gesto de cabeza con saludos y agradecimientos basta de sobra para un extranjero. Las reverencias profundas, para los dramas." },
      { q: "¿Puedo vestir como quiera?", a: "Seúl es fashion y tolerante. Las únicas normas reales: hombros cubiertos en templos y palacios, y arreglarse un poco para el fine dining." },
      { q: "¿Está bien hablar de K-dramas con desconocidos?", a: "El contexto manda — dependientes y dueños de cafés en localizaciones lo adoran; los pasajeros absortos en el móvil, no. Lee el ambiente como en casa." },
    ],
    relatedLabels: ["Etiqueta fotográfica en localizaciones", "Barrios donde estas reglas importan", "Practica frases en nuestro Discord"],
  },
};
