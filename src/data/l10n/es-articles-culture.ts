import type { ArticleL10n } from "./types";

// Español — 6 guías de cultura/gastronomía/belleza/itinerario
export const esArticlesCulture: Record<string, ArticleL10n> = {
  "how-to-plan-kdrama-trip": {
    title: "Cómo convertir tu lista de series en un itinerario por Corea (el método completo)",
    excerpt:
      "La guía pilar: un método de cinco pasos que transforma las series que amas en una ruta día a día — con geografía realista, plazos de reserva y los errores de todo primerizo.",
    sections: [
      {
        heading: "Empieza por los sentimientos, no por las listas",
        paragraphs: [
          "Todo viaje fan que decepciona comete el mismo error: partir de una lista de sitios famosos en vez de lo que sentiste viendo. Pararte en el muro de Goblin no significa nada si nunca viste Goblin; pararte donde rodó TU serie — aunque sea un callejón sin glamur — puede ser el pico emocional del viaje.",
          "Así que el paso uno es curaduría honesta: apunta los tres a cinco títulos que de verdad te movieron, no los que el algoritmo dice que son populares. Nuestro directorio de Series te dice entonces qué es realmente visitable de cada uno — algunos dramas queridos se rodaron casi todo en sets cerrados, mientras otros dejaron un rastro de lugares reales que se caminan en una tarde.",
        ],
      },
      {
        heading: "Paso dos: dale a la geografía poder de veto",
        paragraphs: [
          "Corea es compacta, pero no al nivel de teletransporte. El error clásico del primerizo es meter Seúl, Jeju, Busan y un amanecer en la costa de Gangwon en cinco días — un plan que pasa más horas en tránsito que dentro de las escenas. Regla de trabajo: cada región que añades cuesta medio día de pura logística.",
          "Agrupa las localizaciones de tus series por región con nuestro mapa de Lugares y sé implacable. Una lista cargada de Seúl (Itaewon Class, El juego del calamar, Goblin) es un viaje puro de Seúl con excursiones. Si la vida te da mandarinas exige Jeju — tres noches mínimo para sentirla y no solo tacharla. Cinco a siete días cubren cómodamente Seúl más UNA región; guarda el resto para el viaje secuela.",
        ],
        tip: "Nuestro planificador con IA hace esta agrupación automáticamente — elige series y días, y él ordena los lugares en jornadas geográficamente sensatas que luego editas.",
      },
      {
        heading: "Paso tres: ancla las reservas antes de seguir soñando",
        paragraphs: [
          "Solo un puñado de experiencias son escasas y con fecha fija; todo lo demás se dobla a su alrededor. Reserva vuelos y hotel primero, obvio — y a cuatro semanas, los anclajes escasos: mesas de Culinary Class Wars (las ventanas se llenan en minutos; ver la guía de reservas), coches de alquiler en Jeju en temporada alta y cualquier tour de acceso especial.",
          "Todo lo que en nuestras páginas de Lugares sea calle pública, palacio, mercado o costa no requiere reserva — y eso es la mayor parte de un itinerario fan. La escasez se concentra en la comida y unas pocas experiencias, que es exactamente donde rinde el esfuerzo de planificar.",
        ],
      },
      {
        heading: "Paso cuatro: días con un ritmo que sobreviva a la realidad",
        paragraphs: [
          "La forma sostenible de un día: un barrio ancla por la mañana (dos o tres lugares a pie), un destino gastronómico para almorzar, una zona distinta pero adyacente por la tarde, y una noche que no pida energía — un mercado, el río, una calle comercial. Cuatro a seis paradas; más que eso es viajar entre casillas de verificación.",
          "Alterna intensidades. Una subida al alba a Seongsan Ilchulbong se gana una tarde de cafés y costa; un día completo de palacio y hanok se gana una noche perezosa de ramyeon de tienda junto al Han — que además es una escena de drama que te toca vivir. Y seguro meteorológico: por cada día exterior, ten tu plan interior (museos, grandes almacenes, jjimjilbang).",
        ],
        list: [
          "Mañana: 2–3 lugares en UN barrio, llegando antes de las multitudes",
          "Almuerzo: el ancla gastronómica del día (reservada o con cola estratégica)",
          "Tarde: zona adyacente, 1–2 lugares máximo",
          "Noche: atmósfera sin esfuerzo — mercados, riberas, vistas nocturnas",
          "Todo día exterior lleva plan de lluvia",
        ],
      },
      {
        heading: "Paso cinco: deja agujeros en el plan",
        paragraphs: [
          "Los mejores momentos de un viaje fan no se pueden planear: el callejón lateral clavado a aquella escena, la abuela del mercado que te da de más por intentar hablar coreano, el café al que entras huyendo de la lluvia y resulta ser la localización favorita de alguien. Una agenda sin holgura no puede recibir suerte.",
          "En la práctica: media jornada totalmente libre por cada cuatro días de viaje, y nunca más de dos imprescindibles al día. Los fans que siguen esta regla vuelven diciendo que el viaje se sintió como vivir dentro de un drama. Los que no, vuelven con fotos de 40 sitios que no recuerdan haber visitado.",
        ],
      },
    ],
    faq: [
      { q: "¿Cuántos días necesito para un primer viaje K-drama?", a: "Cinco días completos hacen cantar a Seúl; siete permiten añadir Jeju o una costa. Con menos de cuatro, haz solo Seúl y hazlo despacio." },
      { q: "¿Tour guiado o por libre?", a: "Ambos funcionan. Los tours de día brillan en clústeres remotos (costas de Gangwon, sitios cercanos a CLOY) donde el tránsito en solitario se come el día; las ciudades van mejor por libre — nuestras rutas están hechas justo para eso." },
      { q: "¿Y si mi serie favorita aún no está en el sitio?", a: "Cuéntanoslo en Discord — las peticiones de localizaciones verificadas de los miembros son la forma en que crece la base de datos." },
    ],
    relatedLabels: ["Genera tu plan ahora", "Explora rutas listas", "Cuándo ir (guía de estaciones)"],
  },
  "seoul-neighborhoods-for-fans": {
    title: "Los barrios de Seúl con ojos de fan: dónde alojarse, pasear y sentirlo",
    excerpt:
      "Las callejuelas hanok de Bukchon, el Ssangmun-dong de Gi-hun, las cuestas de Itaewon, los cafés-almacén de Seongsu — un tour con lente fan por los barrios con carácter de Seúl y cuál debería ser TU base.",
    sections: [
      {
        heading: "Seúl es una colección de pueblos",
        paragraphs: [
          "Los dramas entienden algo que las guías pasan por alto: Seúl no es una ciudad sino docenas de aldeas con skyline puesto. Los guionistas eligen barrios como se elige reparto — Bukchon interpreta el linaje y el patrimonio, Ssangmun-dong la calidez obrera, Itaewon la ambición y la reinvención. Aprende ese casting y la ciudad entera se vuelve legible.",
          "Esta guía recorre los distritos que los fans realmente buscan, qué interpretó cada uno y — la pregunta más repetida en Discord — en cuál dormir.",
        ],
      },
      {
        heading: "El norte patrimonial: Bukchon, Ikseon-dong y el cinturón de palacios",
        paragraphs: [
          "Entre Gyeongbokgung y Changdeokgung se despliega el Seúl de los sageuk y cada foto de tejados hanok que hayas capturado. Bukchon es el icono — callejones de 600 años, luz de mañana sobre las tejas y horas de silencio estrictas porque allí vive gente de verdad. Al lado, Ikseon-dong convirtió sus hanok en el laberinto de cafés con más atmósfera de Seúl; el lugar para sentir la ciudad histórica con un flat white en la mano.",
          "KPop Demon Hunters pintó en animación esa textura de hanok contra skyline, y el contraste es la clave: párate en un callejón de Bukchon y la Lotte Tower flota tras aleros construidos bajo reyes. Alójate aquí si la atmósfera te importa más que la vida nocturna — las noches son calladas y las mañanas, magia.",
        ],
      },
      {
        heading: "El cinturón de vida real del norte: Ssangmun-dong y el Seúl universitario",
        paragraphs: [
          "El juego del calamar convirtió Ssangmun-dong en sinónimo del Seúl que los turistas no ven: callejuelas bajas, súper de barrio, vapor de mandu en el aire de invierno. Visitarlo es una clase magistral de viaje fan respetuoso — es un barrio en funcionamiento, no un set — y se empareja de forma natural con la muralla de Naksan, cuyas vistas al atardecer la era de la animación volvió a hacer famosas.",
          "Los distritos universitarios cercanos (Daehak-ro y, hacia el oeste, Hongdae) suministran la energía de los dramas juveniles: actuaciones callejeras, comida barata y buenísima, noraebang hasta el alba. Hongdae sigue siendo la base por defecto de los fans jóvenes — suficientemente céntrico, vivo a toda hora y con el AREX parando directamente allí.",
        ],
        tip: "Atajo para elegir base: Hongdae para energía y transporte, Myeongdong para compras y primeras visitas, el cinturón de palacios para atmósfera, y Gangnam solo si tu itinerario carga hacia el sur.",
      },
      {
        heading: "Itaewon y Yongsan: las cuestas de la ambición",
        paragraphs: [
          "Itaewon Class convirtió las cuestas de Itaewon en un peregrinaje de energía underdog, y el barrio lleva bien ese traje — el distrito más internacional de Seúl, con las vistas a la torre de Namsan que sostienen la mitad de las escenas emotivas de azotea de la televisión. Camina la calle de comida del mundo a la hora dorada y estás dentro de la paleta de la serie.",
          "Yongsan, cuesta abajo, se volvió discretamente destino gastronómico (varios chefs de Culinary Class Wars cocinan aquí), y el eje Itaewon–Hannam es donde avistar celebridades resulta menos mítico — valga lo que valga eso para tu chat de grupo.",
        ],
      },
      {
        heading: "Al sur del río: el brillo de Gangnam y el cool de Seongsu",
        paragraphs: [
          "Gangnam interpreta exactamente lo que interpreta en pantalla: oficinas chaebol, sótanos de lujo, las megapantallas de COEX de los montajes idol y el atrio-jardín de The Hyundai Seoul haciendo de reino comercial en La reina de las lágrimas. Ven a por una tarde concentrada de ese brillo — para la mayoría de fans, media jornada es la dosis justa.",
          "Seongsu, el 'Brooklyn de Seúl', es el barrio con el que los dramas codifican ahora a la clase creativa: cafés-almacén, cultura pop-up, experimentos de flagships K-beauty. Es el mejor café-hopping de la ciudad y el argumento más sólido de que el Seúl fan se renueva solo — tu próxima serie favorita está haciendo scouting aquí ahora mismo.",
        ],
      },
    ],
    faq: [
      { q: "¿Es apropiado visitar Itaewon tras la tragedia de 2022?", a: "Sí — el barrio pide desde hace tiempo que se vuelva y se apoye a sus negocios. Si pasas por el callejón conmemorativo, hazlo con respeto." },
      { q: "¿Qué barrio es mejor para compras K-beauty?", a: "Myeongdong por densidad y eficiencia de tax refund; Seongsu por flagships y tendencias. Nuestra sección de Belleza mapea ambos." },
      { q: "¿Puedo ver todos estos barrios en un viaje?", a: "En cinco días de Seúl, cómodamente — se agrupan a lo largo de dos ejes de metro. Nuestras rutas de Seúl los ordenan sin retrocesos." },
    ],
    relatedLabels: ["Ruta de clásicos K-drama de Seúl", "Seúl en tendencia en 2 días", "Etiqueta en zonas residenciales"],
  },
  "kdrama-food-bucket-list": {
    title: "La lista gastronómica del K-drama: 10 platos que conoces de la pantalla (y dónde comer cada uno)",
    excerpt:
      "Tteokbokki de carrito callejero, chimaek junto al Han, dalgona sin fecha límite — los platos que 400 episodios te enseñaron a desear, emparejados con los lugares que les hacen justicia.",
    sections: [
      {
        heading: "Este menú ya te lo sabes",
        paragraphs: [
          "Ninguna cocina del planeta tiene más minutos en pantalla que la coreana. Los dramas convierten la comida en arma — la invitación al ramyeon, la confesión con soju, el doenjang jjigae materno que arregla a un protagonista roto. Para cuando un fan aterriza en Incheon, lleva un temario sensorial completo con cero experiencia de campo.",
          "Esta lista cierra esa brecha: las diez comidas más famosas de la pantalla, lo que las series nunca te cuentan y, en concreto, dónde comer bien cada una — del nivel calle al nivel Culinary Class Wars.",
        ],
      },
      {
        heading: "El canon callejero: tteokbokki, hotteok, gimbap, dalgona",
        paragraphs: [
          "El tteokbokki — pasteles de arroz masticables en lava de gochujang — es la merienda de después de clase de todo flashback. Cómelo de pie en un puesto (los de Gwangjang son puro teatro) o en un bunsik de Ssangmun-dong para verosimilitud total de El juego del calamar; pide 'deol maepge' si el picante impone. El hotteok, la tortita de azúcar moreno fundido, es el snack invernal de toda cita con primera nieve; la cola te dice qué carrito.",
          "El mayak gimbap ('narcótico', mini rollos de alga) es la firma de Gwangjang — un chiste sobre lo adictivo que resiste cualquier revisión. Y el dalgona, el caramelo que traumatizó a una audiencia global, lo venden los mismos carritos de abuelo de siempre, ahora con fans haciendo cola para intentar el paraguas. Aquí perder no tiene castigo.",
        ],
      },
      {
        heading: "El canon de mesa: KBBQ, jjajangmyeon, samgyetang, naengmyeon",
        paragraphs: [
          "La barbacoa coreana no necesita presentación, pero los dramas codifican su verdadera función: es donde se disuelven las jerarquías. Pide samgyeopsal, deja que la ajumma lo corte con tijeras, envuélvelo en hoja de perilla y entiende retroactivamente cada cena de equipo. Los locales de barrio con carbón y taburetes bajos ganan a las cadenas famosas; sigue el humo y a los oficinistas hacia las 19:00.",
          "El jjajangmyeon — los fideos de judía negra de las mudanzas, los desamores y las escenas de restaurante chino — sabe mejor en los 중국집 de vieja escuela donde el aliento del wok es real. El samgyetang tiene su institución: Tosokchon junto a Gyeongbokgung, un patio hanok donde han hecho cola presidentes y equipos de rodaje por igual. Y el naengmyeon, el fideo helado de las escenas de verano y de los puristas del estilo Pyongyang, divide a los coreanos en facciones; el caldo austero de Eulji Myeonok es la respuesta clasicista.",
        ],
        tip: "Para quien viaja solo: el mínimo de dos raciones del KBBQ es la única barrera real de la comida coreana. Los menús de mediodía (y la ola creciente de barras de BBQ individual) lo resuelven — o convierte la barbacoa en tu quedada de Discord.",
      },
      {
        heading: "El canon ritual: chimaek y ramyeon de tienda",
        paragraphs: [
          "El chimaek — pollo frito + maekju (cerveza) — fue canonizado por Mi amor de las estrellas y nunca soltó la corona. La ceremonia completa exige el río Han: pide delivery a una estera en el parque de Banpo (hay apps y hasta kioscos) o lleva una caja de cualquier cadena al césped al atardecer. Es la mejor noche de nivel mundial más barata de cualquier capital.",
          "El ritual del ramyeon de tienda de conveniencia — dispensador de agua caliente, barra junto a la ventana, luces de la ciudad — es la gran escena democrática del K-drama, y GS25 y CU te lo montan idéntico a las 2 de la mañana. Mejora como los protagonistas: añade una loncha de queso y un gimbap triangular. Daño total: unos ₩4.000.",
        ],
      },
      {
        heading: "Ascender al nivel Culinary Class Wars",
        paragraphs: [
          "El programa que hizo del fine dining coreano un deporte de espectadores también lo volvió reservable-con-esfuerzo para los fans: restaurantes de chefs desde dim sum accesible hasta barras de tres estrellas Michelin, todos catalogados con su mecánica de reserva en nuestras páginas de Gastronomía. La jugada es un viaje en pirámide — canon callejero de día, una mesa de chef de nivel medio a mitad de viaje, y una reserva grial si los dioses de CatchTable sonríen.",
          "Lo que enseña la pirámide es la tesis del propio programa: la distancia entre un bindaetteok de ₩3.000 y una degustación de ₩300.000 es técnica y relato, no sinceridad. La comida coreana se toma en serio todos los precios. Llega con hambre a todos.",
        ],
      },
    ],
    faq: [
      { q: "No aguanto el picante. ¿Pasaré hambre?", a: "Para nada — samgyetang, kalguksu, gimbap, BBQ, jjajangmyeon y la mayor parte del fine dining son suaves. Aprende 'deol maepge haejuseyo' (menos picante) y 'an maepge' (sin picante) para el resto." },
      { q: "¿La comida callejera es segura?", a: "La calle coreana opera con estándares estrictos y rotación altísima — está entre las más seguras del mundo. Puesto lleno = producto fresco; es la única regla que necesitas." },
      { q: "¿Y los vegetarianos?", a: "Más complicado — caldos y banchan esconden anchoa y gamba. Los restaurantes de comida de templo, el jjajangmyeon pidiendo sin cerdo, el bibimbap sin ternera y el filtro 'Vegan' de CatchTable son los caballos de batalla." },
    ],
    relatedLabels: ["Todos los restaurantes famosos de pantalla", "La ruta Foodie Seoul de 3 días", "Cómo reservar de verdad las mesas calientes"],
  },
  "kbeauty-shopping-seoul": {
    title: "Compras K-beauty en Seúl: el manual de Olive Young (y más allá)",
    excerpt:
      "Estrategia planta a planta de Olive Young, Myeongdong vs. Seongsu, tax refund instantáneo y cómo montar un haul que quepa en tu maleta — la guía pilar tras nuestra sección de Belleza.",
    sections: [
      {
        heading: "Por qué las compras son medio viaje",
        paragraphs: [
          "El glow de piel de cristal que notaste durante 400 episodios es una economía de consumo real, y su catedral es Olive Young — la cadena de salud y belleza con una tienda aparentemente cada 300 metros y una web global a la que los fans ya piden con sobreprecio. Comprar en origen significa precios de calle un 30–50% por debajo de lo que cobra la mayoría de importadores, testers de todo y devolución de impuestos instantánea en caja.",
          "Esta guía es estrategia; las selecciones concretas (rutinas de inicio, protectores solares, cushions, regalos por menos de 20 USD) viven en nuestra sección de Belleza, curadas según lo que los compradores extranjeros realmente recompran.",
        ],
      },
      {
        heading: "El manual de Olive Young",
        paragraphs: [
          "Los flagships (Myeongdong Town es el gigante) lo tienen todo y personal que habla inglés, pero CUALQUIER sucursal grande tiene el 90% de lo que buscas con la mitad de gente. La lógica de tienda: paredes de skincare por marca y preocupación, un pasillo de solares que merece visado propio, maquillaje delante, pelo y cuerpo al fondo, y minitallas junto a caja perfectas para probar antes de comprometerse.",
          "El timing importa: las mañanas de diario son civilizadas; Myeongdong un sábado por la tarde es deporte de contacto. Vigila las etiquetas del lineal — Olive Young encadena 2+1 perpetuos y megarrebajas de temporada, y el precio efectivo del mismo sérum puede oscilar un 40% entre semanas.",
        ],
        list: [
          "Lleva el pasaporte — las devoluciones sobre ₩15.000 se aplican al instante en caja",
          "Los precios son por unidad; los 2+1 multiplican el valor en los básicos de recompra",
          "Los testers son lo esperado — el personal reparte algodones y desmaquillante",
          "La membresía para extranjeros de la app suma cupones extra",
          "En flagships hay envío al hotel para ir con las manos libres",
        ],
      },
      {
        heading: "Más allá de Olive Young: el circuito especialista",
        paragraphs: [
          "Las calles de marcas de Myeongdong (tiendas monomarca de Innisfree al flagship de Sulwhasoo) premian la lealtad a una casa concreta con exclusivas y muestras a manos llenas. Seongsu es el laboratorio de tendencias — pop-ups de marca, flagships de firmas dermatológicas como el espacio de Medicube, y el primer vistazo a lo que tu feed descubrirá el próximo trimestre.",
          "Los sótanos de los grandes almacenes (The Hyundai Seoul, convenientemente localización de La reina de las lágrimas) llevan el nivel lujo — Sulwhasoo, Hera, The History of Whoo — con mostradores duty-free para los tickets grandes. Y para regalos al por mayor, la sección de belleza de Daiso es el secreto a voces: productos legítimos de ₩3.000–5.000 que te permiten regalar a todo el chat sin facturar una segunda maleta.",
        ],
        tip: "La cultura dermatológica es la ola actual: las marcas de clínica y la estética 'skin booster' dominan los lineales 2025–26. Si los ingredientes te emocionan, los flagships de Seongsu explican la ciencia mejor que cualquier duty-free.",
      },
      {
        heading: "Matemática de maleta y sensatez aduanera",
        paragraphs: [
          "El fracaso clásico del haul es la física: el skincare es agua, el agua pesa y los 23 kg llegan antes de lo que crees. Estrategia — compra minitallas al principio para audicionar, haz un pedido grande en un flagship al final (o en Olive Young Global con entrega en casa) y dedica el equipaje de mano a los tarros de cristal y cushions que se aplastan.",
          "Los líquidos de más de 100 ml van facturados; los sticks solares y bálsamos vuelan en cabina. Y revisa las franquicias de importación personal de tu país si tu haul cruza de 'regalos' a 'mayoreo' — las historias de terror del subreddit de K-beauty se evitan todas con una mirada a las normas.",
        ],
      },
      {
        heading: "Un día de belleza que los fans corren de verdad",
        paragraphs: [
          "Mañana: barrido del flagship de Myeongdong con pasaporte, devolución en caja, y la caja al hotel o a envío. Almuerzo: kalguksu en Myeongdong Kyoja (la cola vuela). Tarde: Seongsu — dos experiencias flagship, una parada de recuperación en café-almacén. Noche: el food hall del sótano de The Hyundai y vitrinas de lujo, y luego aire del río Han para resetear la nariz tras 200 pruebas de fragancia.",
          "Insértalo como día de compras en cualquiera de nuestras rutas de Seúl; emparejado con las páginas de picks de belleza, tu lista queda decidida antes de entrar a la arena. Entra con lista, sal con la lista más exactamente tres impulsos — ese es el camino.",
        ],
      },
    ],
    faq: [
      { q: "¿Olive Young es más barato que comprar K-beauty en casa?", a: "Casi siempre, y de forma dramática frente a los precios de importación occidentales — más el tax refund encima. Las excepciones son artículos de marcas globales en rebajas profundas en tu país." },
      { q: "¿Envían al extranjero?", a: "Olive Young Global envía el mismo catálogo a la mayoría de países — la jugada es probar en tienda durante el viaje y repedir desde casa." },
      { q: "¿Los productos difieren de las versiones de exportación?", a: "Las fórmulas suelen ser idénticas; el packaging doméstico va un ciclo por delante y los bundles cambian. En solares, el mercado local estrena los filtros más nuevos primero." },
    ],
    relatedLabels: ["Nuestros picks de K-beauty", "El tax refund, explicado", "Ruta para primerizos (con día de compras)"],
  },
  "filming-location-photo-etiquette": {
    title: "Rodar la escena: técnica y etiqueta fotográfica en localizaciones de K-drama",
    excerpt:
      "Cómo conseguir la foto sin convertirte en el problema — reglas de zonas residenciales, estrategia de hora dorada, recreaciones respetuosas y por qué las mejores fotos fan se toman antes de las 9.",
    sections: [
      {
        heading: "El dilema del fotógrafo fan",
        paragraphs: [
          "Las localizaciones habitan un espacio raro: son a la vez lugares de peregrinaje para millones y, con frecuencia, la calle, la tienda o el trayecto de alguien. El dilema es real — la foto que honra la escena puede deshonrar el lugar. Las horas de silencio y los límites de visitantes de Bukchon son lo que pasa cuando suficiente gente elige la foto.",
          "La buena noticia: respetuoso y espectacular no son contrarios. Casi todas las técnicas que tranquilizan a los vecinos — horas tempranas, grupos pequeños, montajes rápidos — también hacen fotografías objetivamente mejores.",
        ],
      },
      {
        heading: "Las reglas de oro, por orden de importancia",
        paragraphs: [
          "Las zonas residenciales piden una cosa por encima de todo: silencio y brevedad. Habla en volumen de biblioteca, no apuntes jamás el objetivo a ventanas, puertas o residentes, y no alargues una composición más de unos minutos. Si un lugar publica horario de visitas (el de Bukchon es básicamente diurno), son reglas, no sugerencias — los vigilantes las aplican.",
          "En los negocios salidos de las series, la transacción es la etiqueta: pide primero, dispara después, y pregunta antes de fotografiar interiores — '사진 찍어도 돼요?' (sajin jjigeodo dwaeyo?) hace el trabajo con una sonrisa. Los trípodes merecen mención aparte: en callejones hanok estrechos y pasillos de mercado son un obstáculo; a pulso o con un gorila de bolsillo pasas por todas partes.",
        ],
        list: [
          "El amanecer gana a la hora dorada en zonas residenciales — encuadres vacíos Y vecinos contentos",
          "Nunca el objetivo hacia ventanas o puertas abiertas de casas",
          "Negocios: compra algo, luego pregunta, luego dispara",
          "Recreaciones rápidas; el equipo necesitó 40 tomas, tú tienes 3",
          "Drones: prácticamente prohibidos en Seúl sin permisos — no",
        ],
      },
      {
        heading: "Técnica: conseguir el encuadre que consiguió la serie",
        paragraphs: [
          "Haz captura de la escena antes de ir — clavar un encuadre es 80% pararse en el punto correcto, y la referencia zanja las discusiones al instante. Las series ruedan con focales más largas que el móvil por defecto: retroceder Y hacer zoom aplana la perspectiva hacia ese look cinematográfico mejor que pararse donde estuvieron los actores.",
          "La luz es el efecto especial real del show. Producción rodó tu callejón favorito al alba o al ocaso con camión de iluminación; tú consigues uno de esos gratis con puro timing. Los días nublados son secretamente excelentes para texturas hanok e interiores de mercado, y la lluvia convierte Ikseon-dong y las cuestas de Itaewon en el episodio melancólico que todos recuerdan.",
        ],
        tip: "El ritual de dos fotos que juran los fans: primero la recreación fiel, después tu propia composición del mismo lugar. La primera es para el fandom; la segunda suele ser la mejor fotografía.",
      },
      {
        heading: "Personas, permisos y publicación",
        paragraphs: [
          "La ley y la costumbre coreanas fruncen el ceño ante desconocidos identificables como sujeto; las escenas amplias de multitud están bien, los retratos de vecinos desprevenidos no. Con niños, no absoluto sin el sí de un padre. Los vendedores callejeros fotografiados en plena faena suelen disfrutarlo — tras una compra y un gesto de cabeza.",
          "Al publicar, geolocaliza sin miedo los sitios famosos, pero considera reservarte el pin exacto de los pequeños hallazgos residenciales — varias localizaciones queridas han suplicado a las plataformas ser retiradas tras inundaciones de fans. Añadir la nota de etiqueta al pie no cuesta nada y educa la marea algorítmica de la que formas parte. Comparte tus mejores encuadres en el #spot-photos de nuestro Discord — la sabiduría colectiva de localizaciones de esta comunidad empezó exactamente ahí.",
        ],
      },
    ],
    faq: [
      { q: "¿Puedo llevar hanbok para las fotos en los palacios?", a: "Se anima a ello — quien viste hanbok incluso entra gratis a los palacios principales. Las tiendas de alquiler se agrupan junto a Gyeongbokgung y Bukchon, peinado incluido." },
      { q: "¿Hay lugares donde la fotografía está vetada del todo?", a: "Dentro de algunos negocios, ciertas salas de museo y donde esté señalizado — además de rodajes activos con los que puedas toparte, donde el equipo te apartará. Obedece al instante; los sets se van en horas." },
      { q: "¿Mejor época del año para fotografiar localizaciones?", a: "Finales de octubre–principios de noviembre: follaje, luz limpia y mínimas sorpresas de tifón o monzón. Nuestra guía de estaciones desglosa el calendario completo." },
    ],
    relatedLabels: ["Etiqueta más allá de la cámara", "Todas las localizaciones", "Comparte tus fotos en la comunidad"],
  },
  "best-time-to-visit-korea": {
    title: "Cuándo visitar Corea: guía estación por estación para fans",
    excerpt:
      "Cerezos con energía Lovely Runner, primera nieve en clave Goblin, realidades del monzón y ventanas de festivales — cómo alinear el momento de tu viaje con la Corea que viste.",
    sections: [
      {
        heading: "El panorama honesto",
        paragraphs: [
          "Corea tiene cuatro estaciones rotundas y los dramas han romantizado cada una, así que la pregunta no es 'cuándo hace bueno' sino 'de qué Corea te enamoraste'. Los puntos dulces pragmáticos son de mediados de abril a principios de junio y de finales de septiembre a principios de noviembre — temperaturas suaves, luz fotogénica, lluvia manejable.",
          "Las dos ventanas que exigen compromiso con los ojos abiertos: de finales de junio a julio (el monzón jangma — real, cálido, mojado) y de finales de diciembre a febrero (frío de verdad, frecuentemente mágico). Agosto es calor húmedo y festivales; marzo, impredecible pero barato. Ninguna es errónea; todas son series distintas.",
        ],
      },
      {
        heading: "Primavera: la apuesta de los cerezos",
        paragraphs: [
          "La floración barre de sur a norte, de finales de marzo (Jeju, Busan) a comienzos-mediados de abril (Seúl), y cada ciudad alcanza el pico apenas una semana. Es gloriosa y es una apuesta — las fechas pico se mueven cada año, así que reserva flexible o apunta a mitad de ventana y disfruta la fase que te toque. Yeouido, el lago Seokchon y los jardines de palacio son las naves catedralicias de Seúl.",
          "Para los fans, la estación lleva una energía concreta: los dramas de romance universitario son dueños de esta luz. Jeju en primavera añade los campos amarillos de canola que Si la vida te da mandarinas volvió memoria colectiva — el paseo del cabo de Seopjikoji en abril es esa sensación de créditos iniciales, gratis.",
        ],
        tip: "El alojamiento en temporada de cerezos se agota con semanas y los precios suben. Si tus fechas son fijas y fallas la floración — el ciruelo (mediados de marzo) y el cerezo doble (finales de abril) enmarcan la ventana con belleza.",
      },
      {
        heading: "Verano: monzón, festivales y el Jeju verde",
        paragraphs: [
          "El jangma trae semanas de aguaceros intermitentes de finales de junio a julio; agosto cambia lluvia por humedad de sauna. Los dramas esconden esta estación dentro de cafés y confesiones besadas por la lluvia — tú también puedes: el verano es cuando el circuito interior museo-mall-jjimjilbang de Seúl y la fotografía melancólica de lluvia se ganan el sueldo.",
          "Las recompensas son reales: un Jeju exuberante con la mitad de gente que en primavera, el festival del barro de Boryeong y la temporada de playa en ambas costas, la cultura del bingsu en su cénit y la vida nocturna del Han a plena capacidad romántica. Empaca para la lluvia, ten pivotes interiores, y el verano premia a los flexibles.",
        ],
      },
      {
        heading: "Otoño: la elección de los profesionales",
        paragraphs: [
          "Octubre es Corea presumiendo — aire crujiente, cielos azules y follaje rodando hacia el sur desde Seoraksan (principios de octubre) hasta los palacios de Seúl y las murallas de Naksan (finales de octubre–principios de noviembre). Es la mejor ventana integral para fotografía de localizaciones y largas jornadas a pie, y por eso nuestras rutas asumen más o menos este clima.",
          "Extras específicos para fans: el Chuseok de la luna de cosecha trae multitudes en hanbok y eventos de palacio (pero también colapso de transporte y algunos cierres — revisa fechas), y el muro de Deoksugung dorado de ginkgos en noviembre es el paseo Goblin a máximo cine. Reserva pronto; los profesionales ya lo saben.",
        ],
      },
      {
        heading: "Invierno: la estación de Goblin",
        paragraphs: [
          "De diciembre a febrero hace un frío que los canadienses respetan — pero el invierno coreano es también canon de romance de primera nieve, vapor de comida callejera, estancias hanok con ondol y estaciones de esquí a una hora de Seúl (Yongpyong, la propia de Sonata de invierno). La isla Nami nevada, el sendero de abetos de Woljeongsa helado de blanco, el hotteok entre guantes: la estación entrega escenas que ningún otro mes puede.",
          "Practicidades: capas más un abrigo serio, heat-tech de cualquier Uniqlo o calentadores de manos de Daiso, y abrazar el 40% interior de cada día. El Año Nuevo Lunar (Seollal) cierra buena parte de Seúl unos días — una experiencia pacífica o frustrante, dependiendo por completo de la planificación.",
        ],
      },
    ],
    faq: [
      { q: "¿El mejor mes en general?", a: "Octubre, y no por poco — clima, luz, follaje y calendario de festivales se alinean. Mayo es su equivalente primaveral." },
      { q: "¿Cuándo son más baratos vuelos y hoteles?", a: "Finales de enero–febrero (excluyendo Seollal) y el hombro del monzón de junio. Ofertas de invierno más itinerarios de interior son una combinación genuinamente infravalorada." },
      { q: "¿Las localizaciones cierran en invierno?", a: "Las exteriores siguen abiertas (y fotografían de maravilla nevadas); los barcos a islas y los senderos de montaña cancelan con el tiempo. Los planes costeros de Jeju y Gangwon en enero piden mentalidad de flexibilidad el mismo día." },
    ],
    relatedLabels: ["Planifica según tus fechas", "La ruta de las mandarinas de Jeju (oro de primavera)", "La costa Goblin de Gangwon (drama invernal)"],
  },
};
