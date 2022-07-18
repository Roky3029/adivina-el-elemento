const Elementos = [
  {
    nombre: 'Hidrogeno',
    simbolo: 'H',
    grupo: 'no-metales',
    numeroAtomico: '1',
    informacion: 'El hidrógeno fue descubierto por el cientifico inglés Henry Cavendish en 1766. Se encuentra como gas a temperatura y presión normales. En la Tierra, la mayor parte del hidrógeno se cencuentra combinado con oxígeno formando moléculas de agua (H2O), y, por tanto, mas del 10% de la masa de cualquier océano es hidrógeno, aunque este tenga una masa atómica muy baja',
    curiosidad: 'El nombre "hidrogeno" viene del griego "Hydrogene" que significa "generador de agua", se le puso este nombre debido a que Henry Cavendish produjo un gas explosivo que generaba agua al quemarse.'
  },
  {
    nombre: 'Helio',
    simbolo: 'He',
    grupo: 'gases-nobles',
    numeroAtomico: '2',
    informacion: 'El helio es incoloro, inodoro y su reactividad es extremadamente baja. No existen compuestos estables conocidos de helio, solo existe en átomos individuales. Fue uno de los dos elementos que se generaron en grandes cantidades durantes los primeros minutos del Universo, los núcleos formados en esos momentos incluian los dos isótopos estables del helio, el helio-4 y el helio-3',
    curiosidad: 'El helio tiene los puntos de fusión y ebullición más bajos de todos los elementos (-272ºC y -269ºC respectivamente). Este elemento es el segundo más abundante del Universo debido a que se crearon grandes cantidades justo después del Big Bang y que las estrellas están produciendolo constantemente'
  },
  {
    nombre: 'Litio',
    simbolo: 'Li',
    grupo: 'alcalinos',
    numeroAtomico: '3',
    informacion: 'El litio es el elemento sólido mas denso y de los metales más reactivos. Fue descubierto en 1817 por el químico sueco Johan Arfwedson, el cual lo que buscaba realmente eran compuesto del potasio. Uno de los usos mas importantes del litio son las baterias recargables de iones de litio, usadas en ordenadores portátiles, dispositivos móvile, coches eléctricos...',
    curiosidad: 'Arfwedson baso el elemento que encontro en la palabra griega "Lithos", que significa <<piedra>>. También existe un mineral llamado "arfvedsonita" que recibió ese nombre en honor al científico pero que ironicamente, no contiene litio'
  },
  {
    nombre: 'Berilio',
    simbolo: 'Be',
    grupo: 'alcalinoterreos',
    numeroAtomico: '4',
    informacion: 'Se descubrió en 1798 por el químico francés Nicholas-Louis Vauquelin, no obstante, pasaron treinta años hasta que se logró preparar una muestra del elemento puro. La extracción del berilio es un proceso complicado cuya última fase implica calentar fluoruro de berilio (BeF2) con magnesio. Alrededor de 2/3 de todo el berilio producido se destina para hacer la aleación cobre-berilio, al ser elástica y resistente, se usa para hacer muelles y se usa para fabricar herramientas de uso en entornos peligrosos ya que no produce chispas al golpear.',
    curiosidad: 'A pesar de la presencia de berilio en piedras preciosas y muchos otros minerales, este elemento es bastante raro, forma aproximadamente dos partes cada mil millones de la corteza terrestre por peso, y uno por cada mil millones de los átomos del Universo.'
  },
  {
    nombre: 'Boro',
    simbolo: 'B',
    grupo: 'metaloides',
    numeroAtomico: '5',
    informacion: 'Este ocupa el puesto 38 en abundancia en la corteza terrestre, al contrario que la maoria de elementos hasta el hierro, este no se formó en las estrellas. Si que es verdad que se formo algo durante el Big Bang, pero este fué destruido en el interior de las estrellas. El boro fue aislado por primera vez a partir del bórax en 1808.',
    curiosidad: 'A pesar de su relativa rareza, se encuentra en más de cien minerales. La mena de boro mas importante es el bórax, que se ha usado y explotado durante siglos. El nombre "boro" proviene de las denominaciones en persa y árabe antiguo que recibia el mineral, "buraq" y "burah".'
  },
  {
    nombre: 'Carbono',
    simbolo: 'C',
    grupo: 'no-metales',
    numeroAtomico: '6',
    informacion: 'El carbono es el cuarto elemento más abundante en el Universo y el décimo quinto en la corteza terrestre, apareciendo en forma de minerales tipo carbonato y combustibles fósiles. El carbono puro es capaz de adoptar muchas formas, entre las que se encuentran el diamante, el grafito, el grafeno, el carbón amorfo y una serie de sustancias llamadas fullerenos.',
    curiosidad: 'No existe un punto de fusión o ebullición concreto para el carbono, ya que a presiones normales se sublima, es decir, pasa directamente de sólido a gas. El diamante se forma a 150km de profundidad, en el manto superior, en los diamantes, cada átomo de carbono esta unido a otros cuatro mediante enlaces covalentes, y al estar todos los electrones implicados en estos enlaces, lo hace un material extraordinarimente duro y fuerte, y al no haber electrones libres, no pueden absorver la luz y por tanto, eso hace que los diamantes sean transparentes.'
  },
  {
    nombre: 'Nitrógeno',
    simbolo: 'N',
    grupo: 'no-metales',
    numeroAtomico: '7',
    informacion: 'En su forma elemental, el nitrógeno es un gas incoloro e inodoro. Es con diferencia el elemento mas abundante en toda la atmósfera, pero es el trigésimo primero dentro de la corteza terrestre, debido a su escasa reactividad, que hace que no pueda combinarse con otros elementos, formando minerales.',
    curiosidad: 'A pesar de ser tan inerte, la existencia del nitrógeno se descubrió relativamente pronto en la química moderna, cuando unos científicos estudiaban unos "aires" (gases). Estos científicos se dieron cuenta que el aire normal estaba formado por dos gases, uno en el que las cosas podian arder y los animales respirar, y otro en el que no se podia.'
  },
  {
    nombre: 'Oxígeno',
    simbolo: 'O',
    grupo: 'no-metales',
    numeroAtomico: '8',
    informacion: 'El oxígeno es el tercero más abundante en todo el Universo, después del hidrógeno y del helio. Los núcleos de este elemento se forman en la mayoria de las estrellas. En la Tierra, es el segundo elemento más abundante, siendo el hierro el primero. El oxígeno constituye el 21% del volumen del aire seco. También, es uno de los elementos más reactivos, de ahi que se encuentre combinado con otros elementos, como el agua (H2O) o dióxido de carbono (CO2).',
    curiosidad: 'Existen alrededor de un cuatrillón de toneladas (10^15 t) de oxígeno elemental en la atmósfera terrestre, la mayoria en forma de moléculas diatómicas (O2). La única razón por la que la atmósfera y los oceános contienen grandes cantidades de oxígeno es por que ciertos seres vivos lo renuevan constantemente, como resultado de la fotosíntesis.'
  },
  {
    nombre: 'Flúor',
    simbolo: 'F',
    grupo: 'halogenos',
    numeroAtomico: '9',
    informacion: 'El flúor es un elemento muy reactivo en su forma elemental, ya que está a un solo electrón de completar la capa externa de electrones. El flúor es el decimo tercer elemento más abundante en la corteza terrestre, donde existe casi en su totalidad en forma de iones de flúor en los minerales. El mineral que mas flúor contiene es la fluorita, que esta formada principalmente por fluoruro de calcio (CaF2).',
    curiosidad: 'A partir del s.XVI la fluorita se empezó a añadir a las menas de hierro, disminuyendo la temperatura a la que los metales se fundían cuando se calentaban las menas, haciendo que la mezcla fluyera. El nombre de flúor viene de la palabra latina "fluor", que significa "fluido", ya que la piedra usada para que las menas de hierro fluyeran estaba hecha de fluor.'
  },
  {
    nombre: 'Neón',
    simbolo: 'Ne',
    grupo: 'gases-nobles',
    numeroAtomico: '10',
    informacion: 'Al igual que el resto de los gases nobles, el neón es incoloro, inodoro y muy inerte (reacciona extremadamente poco). Al igual que el helio, el neón no forma compuestos estables conocidos. El origen de este elemento nos remonta a 1898, cuando el químico escoces William Ramsay y el inglés Morris Travers descubrieron el neón en una muestra de aire líquido, semanas después de haber descubierto el kriptón (Kr) ',
    curiosidad: 'El nombre de este elemento proviene de la palabra griega "neos", que significa "nuevo". El neón es el cuarto elemento más abundante en el Universo, aunque es muy escaso en la Tierra, constituyendo solo el 0.0002% de la atmósfera, y aun asi, siendo ligeramente más abundante que el helio.'
  },
  {
    nombre: 'Sodio',
    simbolo: 'Na',
    grupo: 'alcalinos',
    numeroAtomico: '11',
    informacion: 'El sodio fue descubierto en 1807 porHumphry Davy, el cual lo descubrió pasando una corriente eléctrica a traves de hidróxido de sodio fundido (NaOH, más comunmente llamado "sosa cáustica"). Es el sexto elemento mas abundante en la superficie terrestre, existiendo más de 10 kilogramos en forma de iones de sodio disueltos en cada metro cúbico de agua marina.',
    curiosidad: 'El nombre del elemento proviene de "sodanum", el nombre romando para las salicornias, un género de plantas cuyas cenizas se utilizaban antiguamente en la fabricación del vidrio. Las salicornias són halófitas (les gusta la sal) y sus cenizas contienen carbonato de calcio'
  },
  {
    nombre: 'Magnesio',
    simbolo: 'Mg',
    grupo: 'alcalinoterreos',
    numeroAtomico: '12',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Aluminio',
    simbolo: 'Al',
    grupo: 'metales-p',
    numeroAtomico: '13',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Silicio',
    simbolo: 'Si',
    grupo: 'metaloides',
    numeroAtomico: '14',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Fósforo',
    simbolo: 'P',
    grupo: 'no-metales',
    numeroAtomico: '15',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Azufre',
    simbolo: 'S',
    grupo: 'no-metales',
    numeroAtomico: '16',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Cloro',
    simbolo: 'Cl',
    grupo: 'halogenos',
    numeroAtomico: '17',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Argón',
    simbolo: 'Ar',
    grupo: 'gases-nobles',
    numeroAtomico: '18',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Potasio',
    simbolo: 'K',
    grupo: 'alcalinos',
    numeroAtomico: '19',
    informacion: 'Este elemento fue el primero que descubrió Humphry Davy. En 1807 paso una corriente eléctrica a traves de potasa cáustica fundida (o también llamado hidróxido de potasio, KOH) y observó que las partículas plateadas-grises del potasio "saltaban emitiendo un silbido y se quemaban desprendiendo una luz color lavanda". El potasio puro se obtiene industrialmente calentando cloruro de potasio (KCl) a partir de minerales portadores de potasio con vapor de sodio puro.',
    curiosidad: 'Este elemento recibe su nombre por el compuesto que utilizó para su descubrimiento, la potasa, y junto al hidróxido de sodio, el hidróxido de potasio se sigue utilizando para fabricar jabones, que tienden a disolverse mejor en agua. Su letra es "K" porque deriva de la palabra latina para "álcali": "kalium". '
  },
  {
    nombre: 'Calcio',
    simbolo: 'Ca',
    grupo: 'alcalinoterreos',
    numeroAtomico: '20',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Escandio',
    simbolo: 'Sc',
    grupo: 'metales-transicion',
    numeroAtomico: '21',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Titanio',
    simbolo: 'Ti',
    grupo: 'metales-transicion',
    numeroAtomico: '22',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Vanadio',
    simbolo: 'V',
    grupo: 'metales-transicion',
    numeroAtomico: '23',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Cromo',
    simbolo: 'Cr',
    grupo: 'metales-transicion',
    numeroAtomico: '24',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Manganeso',
    simbolo: 'Mn',
    grupo: 'metales-transicion',
    numeroAtomico: '25',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Hierro',
    simbolo: 'Fe',
    grupo: 'metales-transicion',
    numeroAtomico: '26',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Cobalto',
    simbolo: 'Co',
    grupo: 'metales-transicion',
    numeroAtomico: '27',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Niquel',
    simbolo: 'Ni',
    grupo: 'metales-transicion',
    numeroAtomico: '28',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Cobre',
    simbolo: 'Cu',
    grupo: 'metales-transicion',
    numeroAtomico: '29',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Cinc',
    simbolo: 'Zn',
    grupo: 'metales-transicion',
    numeroAtomico: '30',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Galio',
    simbolo: 'Ga',
    grupo: 'metales-p',
    numeroAtomico: '31',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Germanio',
    simbolo: 'Ge',
    grupo: 'metaloides',
    numeroAtomico: '32',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Arsenico',
    simbolo: 'As',
    grupo: 'metaloides',
    numeroAtomico: '33',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Selenio',
    simbolo: 'Se',
    grupo: 'no-metales',
    numeroAtomico: '34',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Bromo',
    simbolo: 'Br',
    grupo: 'halogenos',
    numeroAtomico: '35',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Kriptón',
    simbolo: 'Kr',
    grupo: 'gases-nobles',
    numeroAtomico: '36',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Rubidio',
    simbolo: 'Rb',
    grupo: 'alcalinos',
    numeroAtomico: '37',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Estroncio',
    simbolo: 'Sr',
    grupo: 'alcalinoterreos',
    numeroAtomico: '38',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Itrio',
    simbolo: 'Y',
    grupo: 'metales-transicion',
    numeroAtomico: '39',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Circonio',
    simbolo: 'Zr',
    grupo: 'metales-transicion',
    numeroAtomico: '40',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Niobio',
    simbolo: 'Nb',
    grupo: 'metales-transicion',
    numeroAtomico: '41',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Molibdeno',
    simbolo: 'Mo',
    grupo: 'metales-transicion',
    numeroAtomico: '42',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Tecnecio',
    simbolo: 'Tc',
    grupo: 'metales-transicion',
    numeroAtomico: '43',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Rutenio',
    simbolo: 'Ru',
    grupo: 'metales-transicion',
    numeroAtomico: '44',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Rodio',
    simbolo: 'Rh',
    grupo: 'metales-transicion',
    numeroAtomico: '45',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Paladio',
    simbolo: 'Pd',
    grupo: 'metales-transicion',
    numeroAtomico: '46',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Plata',
    simbolo: 'Ag',
    grupo: 'metales-transicion',
    numeroAtomico: '47',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Cadmio',
    simbolo: 'Cd',
    grupo: 'metales-transicion',
    numeroAtomico: '48',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Indio',
    simbolo: 'In',
    grupo: 'metales-p',
    numeroAtomico: '49',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Estaño',
    simbolo: 'Sn',
    grupo: 'metales-p',
    numeroAtomico: '50',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Antimonio',
    simbolo: 'Sb',
    grupo: 'metaloides',
    numeroAtomico: '51',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Teluro',
    simbolo: 'Te',
    grupo: 'metaloides',
    numeroAtomico: '52',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Yodo',
    simbolo: 'I',
    grupo: 'halogenos',
    numeroAtomico: '53',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Xenón',
    simbolo: 'Xe',
    grupo: 'gases-nobles',
    numeroAtomico: '54',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Cesio',
    simbolo: 'Cs',
    grupo: 'alcalinos',
    numeroAtomico: '55',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Bario',
    simbolo: 'Ba',
    grupo: 'alcalinoterreos',
    numeroAtomico: '56',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Lantano',
    simbolo: 'La',
    grupo: 'lantanidos',
    numeroAtomico: '57',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Cerio',
    simbolo: 'Ce',
    grupo: 'lantanidos',
    numeroAtomico: '58',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Praseodimio',
    simbolo: 'Pr',
    grupo: 'lantanidos',
    numeroAtomico: '59',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Neodimio',
    simbolo: 'Nd',
    grupo: 'lantanidos',
    numeroAtomico: '60',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Prometio',
    simbolo: 'Pm',
    grupo: 'lantanidos',
    numeroAtomico: '61',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Samario',
    simbolo: 'Sm',
    grupo: 'lantanidos',
    numeroAtomico: '62',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Europio',
    simbolo: 'Eu',
    grupo: 'lantanidos',
    numeroAtomico: '63',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Galodinio',
    simbolo: 'Gd',
    grupo: 'lantanidos',
    numeroAtomico: '64',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Terbio',
    simbolo: 'Tb',
    grupo: 'lantanidos',
    numeroAtomico: '65',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Disprosio',
    simbolo: 'Dy',
    grupo: 'lantanidos',
    numeroAtomico: '66',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Holmio',
    simbolo: 'Ho',
    grupo: 'lantanidos',
    numeroAtomico: '67',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Erbio',
    simbolo: 'Er',
    grupo: 'lantanidos',
    numeroAtomico: '68',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Tulio',
    simbolo: 'Tm',
    grupo: 'lantanidos',
    numeroAtomico: '69',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Iterbio',
    simbolo: 'Yt',
    grupo: 'lantanidos',
    numeroAtomico: '70',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Lutecio',
    simbolo: 'Lu',
    grupo: 'lantanidos',
    numeroAtomico: '71',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Hafnio',
    simbolo: 'Hf',
    grupo: 'metales-transicion',
    numeroAtomico: '72',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Tantalo',
    simbolo: 'Ta',
    grupo: 'metales-transicion',
    numeroAtomico: '73',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Wolframio',
    simbolo: 'W',
    grupo: 'metales-transicion',
    numeroAtomico: '74',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Renio',
    simbolo: 'Re',
    grupo: 'metales-transicion',
    numeroAtomico: '75',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Osmio',
    simbolo: 'Os',
    grupo: 'metales-transicion',
    numeroAtomico: '76',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Iridio',
    simbolo: 'Ir',
    grupo: 'metales-transicion',
    numeroAtomico: '77',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Platino',
    simbolo: 'Pt',
    grupo: 'metales-transicion',
    numeroAtomico: '78',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Oro',
    simbolo: 'Au',
    grupo: 'metales-transicion',
    numeroAtomico: '79',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Mercurio',
    simbolo: 'Hg',
    grupo: 'metales-transicion',
    numeroAtomico: '80',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Talio',
    simbolo: 'Tl',
    grupo: 'metales-p',
    numeroAtomico: '81',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Plomo',
    simbolo: 'Pb',
    grupo: 'metales-p',
    numeroAtomico: '82',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Bismuto',
    simbolo: 'Bi',
    grupo: 'metales-p',
    numeroAtomico: '83',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Polonio',
    simbolo: 'Po',
    grupo: 'metaloides',
    numeroAtomico: '84',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Astato',
    simbolo: 'At',
    grupo: 'halogenos',
    numeroAtomico: '85',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Radón',
    simbolo: 'Rn',
    grupo: 'gases-nobles',
    numeroAtomico: '86',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Francio',
    simbolo: 'Fr',
    grupo: 'alcalinos',
    numeroAtomico: '87',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Radio',
    simbolo: 'Ra',
    grupo: 'alcalinoterreos',
    numeroAtomico: '88',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Actinio',
    simbolo: 'Ac',
    grupo: 'actinidos',
    numeroAtomico: '89',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Torio',
    simbolo: 'Th',
    grupo: 'actinidos',
    numeroAtomico: '90',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Proactinio',
    simbolo: 'Pa',
    grupo: 'actinidos',
    numeroAtomico: '91',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Uranio',
    simbolo: 'U',
    grupo: 'actinidos',
    numeroAtomico: '92',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Neptunio',
    simbolo: 'Np',
    grupo: 'actinidos',
    numeroAtomico: '93',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Plutonio',
    simbolo: 'Pu',
    grupo: 'actinidos',
    numeroAtomico: '94',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Americio',
    simbolo: 'Am',
    grupo: 'actinidos',
    numeroAtomico: '95',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Curio',
    simbolo: 'Cm',
    grupo: 'actinidos',
    numeroAtomico: '96',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Berkelio',
    simbolo: 'Bk',
    grupo: 'actinidos',
    numeroAtomico: '97',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Californio',
    simbolo: 'Cf',
    grupo: 'actinidos',
    numeroAtomico: '98',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Einstenio',
    simbolo: 'Es',
    grupo: 'actinidos',
    numeroAtomico: '99',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Fermio',
    simbolo: 'Fm',
    grupo: 'actinidos',
    numeroAtomico: '100',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Molibdeno',
    simbolo: 'Md',
    grupo: 'actinidos',
    numeroAtomico: '101',
    informacion: '',
    curiosidad: ''

  },
  {
    nombre: 'Nobelio',
    simbolo: 'No',
    grupo: 'actinidos',
    numeroAtomico: '102',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Laurencio',
    simbolo: 'Lr',
    grupo: 'actinidos',
    numeroAtomico: '103',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Rutherfordio',
    simbolo: 'Rf',
    grupo: 'metales-transicion',
    numeroAtomico: '104',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Dubnio',
    simbolo: 'Db',
    grupo: 'metales-transicion',
    numeroAtomico: '105',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Seaborgio',
    simbolo: 'Sg',
    grupo: 'metales-transicion',
    numeroAtomico: '106',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Bohrio',
    simbolo: 'Bh',
    grupo: 'metales-transicion',
    numeroAtomico: '107',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Hasio',
    simbolo: 'Hs',
    grupo: 'metales-transicion',
    numeroAtomico: '108',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Mietnerio',
    simbolo: 'Mt',
    grupo: 'metales-transicion',
    numeroAtomico: '109',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Darmstatio',
    simbolo: 'Ds',
    grupo: 'metales-transicion',
    numeroAtomico: '110',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Roentgenio',
    simbolo: 'Rg',
    grupo: 'metales-transicion',
    numeroAtomico: '111',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Copernicio',
    simbolo: 'Cn',
    grupo: 'metales-transicion',
    numeroAtomico: '112',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Nihomio',
    simbolo: 'Nh',
    grupo: 'metales-p',
    numeroAtomico: '113',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Flerovio',
    simbolo: 'Fl',
    grupo: 'metales-p',
    numeroAtomico: '114',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Moscovio',
    simbolo: 'Mc',
    grupo: 'metales-p',
    numeroAtomico: '115',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Livermonio',
    simbolo: 'Lv',
    grupo: 'metales-p',
    numeroAtomico: '116',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Teneso',
    simbolo: 'Ts',
    grupo: 'halogenos',
    numeroAtomico: '117',
    informacion: '',
    curiosidad: ''
  },
  {
    nombre: 'Oganesón',
    simbolo: 'Og',
    grupo: 'gases-nobles',
    numeroAtomico: '118',
    informacion: '',
    curiosidad: ''
  }
]

export default Elementos
