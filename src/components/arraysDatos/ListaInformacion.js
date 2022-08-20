const ListaInformacion = [
  {
    nombre: 'Hidrógeno',
    simbolo: 'H',
    grupo: 'no-metales',
    numeroAtomico: '1',
    informacion: 'El hidrógeno fue descubierto por el cientifico inglés Henry Cavendish en 1766. Se encuentra como gas a temperatura y presión normales. En la Tierra, la mayor parte del hidrógeno se cencuentra combinado con oxígeno formando moléculas de agua (H2O), y, por tanto, mas del 10% de la masa de cualquier océano es hidrógeno, aunque este tenga una masa atómica muy baja',
    curiosidad: 'El nombre "hidrogeno" viene del griego "Hydrogene" que significa "generador de agua", se le puso este nombre debido a que Henry Cavendish produjo un gas explosivo que generaba agua al quemarse.',
    xPos: 1,
    yPos: 1
  },
  {
    nombre: 'Helio',
    simbolo: 'He',
    grupo: 'gases-nobles',
    numeroAtomico: '2',
    informacion: 'El helio es incoloro, inodoro y su reactividad es extremadamente baja. No existen compuestos estables conocidos de helio, solo existe en átomos individuales. Fue uno de los dos elementos que se generaron en grandes cantidades durantes los primeros minutos del Universo, los núcleos formados en esos momentos incluian los dos isótopos estables del helio, el helio-4 y el helio-3',
    curiosidad: 'El helio tiene los puntos de fusión y ebullición más bajos de todos los elementos (-272ºC y -269ºC respectivamente). Este elemento es el segundo más abundante del Universo debido a que se crearon grandes cantidades justo después del Big Bang y que las estrellas están produciendolo constantemente',
    xPos: 1,
    yPos: 18
  },
  {
    nombre: 'Litio',
    simbolo: 'Li',
    grupo: 'alcalinos',
    numeroAtomico: '3',
    informacion: 'El litio es el elemento sólido mas denso y de los metales más reactivos. Fue descubierto en 1817 por el químico sueco Johan Arfwedson, el cual lo que buscaba realmente eran compuesto del potasio. Uno de los usos mas importantes del litio son las baterias recargables de iones de litio, usadas en ordenadores portátiles, dispositivos móvile, coches eléctricos...',
    curiosidad: 'Arfwedson baso el elemento que encontro en la palabra griega "Lithos", que significa <<piedra>>. También existe un mineral llamado "arfvedsonita" que recibió ese nombre en honor al científico pero que ironicamente, no contiene litio',
    xPos: 2,
    yPos: 1
  },
  {
    nombre: 'Berilio',
    simbolo: 'Be',
    grupo: 'alcalinoterreos',
    numeroAtomico: '4',
    informacion: 'Se descubrió en 1798 por el químico francés Nicholas-Louis Vauquelin, no obstante, pasaron treinta años hasta que se logró preparar una muestra del elemento puro. La extracción del berilio es un proceso complicado cuya última fase implica calentar fluoruro de berilio (BeF2) con magnesio. Alrededor de 2/3 de todo el berilio producido se destina para hacer la aleación cobre-berilio, al ser elástica y resistente, se usa para hacer muelles y se usa para fabricar herramientas de uso en entornos peligrosos ya que no produce chispas al golpear.',
    curiosidad: 'A pesar de la presencia de berilio en piedras preciosas y muchos otros minerales, este elemento es bastante raro, forma aproximadamente dos partes cada mil millones de la corteza terrestre por peso, y uno por cada mil millones de los átomos del Universo.',
    xPos: 2,
    yPos: 2
  },
  {
    nombre: 'Boro',
    simbolo: 'B',
    grupo: 'metaloides',
    numeroAtomico: '5',
    informacion: 'Este ocupa el puesto 38 en abundancia en la corteza terrestre, al contrario que la maoria de elementos hasta el hierro, este no se formó en las estrellas. Si que es verdad que se formo algo durante el Big Bang, pero este fué destruido en el interior de las estrellas. El boro fue aislado por primera vez a partir del bórax en 1808.',
    curiosidad: 'A pesar de su relativa rareza, se encuentra en más de cien minerales. La mena de boro mas importante es el bórax, que se ha usado y explotado durante siglos. El nombre "boro" proviene de las denominaciones en persa y árabe antiguo que recibia el mineral, "buraq" y "burah".',
    xPos: 2,
    yPos: 13
  },
  {
    nombre: 'Carbono',
    simbolo: 'C',
    grupo: 'no-metales',
    numeroAtomico: '6',
    informacion: 'El carbono es el cuarto elemento más abundante en el Universo y el décimo quinto en la corteza terrestre, apareciendo en forma de minerales tipo carbonato y combustibles fósiles. El carbono puro es capaz de adoptar muchas formas, entre las que se encuentran el diamante, el grafito, el grafeno, el carbón amorfo y una serie de sustancias llamadas fullerenos.',
    curiosidad: 'No existe un punto de fusión o ebullición concreto para el carbono, ya que a presiones normales se sublima, es decir, pasa directamente de sólido a gas. El diamante se forma a 150km de profundidad, en el manto superior, en los diamantes, cada átomo de carbono esta unido a otros cuatro mediante enlaces covalentes, y al estar todos los electrones implicados en estos enlaces, lo hace un material extraordinarimente duro y fuerte, y al no haber electrones libres, no pueden absorver la luz y por tanto, eso hace que los diamantes sean transparentes.',
    xPos: 2,
    yPos: 14
  },
  {
    nombre: 'Nitrógeno',
    simbolo: 'N',
    grupo: 'no-metales',
    numeroAtomico: '7',
    informacion: 'En su forma elemental, el nitrógeno es un gas incoloro e inodoro. Es con diferencia el elemento mas abundante en toda la atmósfera, pero es el trigésimo primero dentro de la corteza terrestre, debido a su escasa reactividad, que hace que no pueda combinarse con otros elementos, formando minerales.',
    curiosidad: 'A pesar de ser tan inerte, la existencia del nitrógeno se descubrió relativamente pronto en la química moderna, cuando unos científicos estudiaban unos "aires" (gases). Estos científicos se dieron cuenta que el aire normal estaba formado por dos gases, uno en el que las cosas podian arder y los animales respirar, y otro en el que no se podia.',
    xPos: 2,
    yPos: 15
  },
  {
    nombre: 'Oxígeno',
    simbolo: 'O',
    grupo: 'no-metales',
    numeroAtomico: '8',
    informacion: 'El oxígeno es el tercero más abundante en todo el Universo, después del hidrógeno y del helio. Los núcleos de este elemento se forman en la mayoria de las estrellas. En la Tierra, es el segundo elemento más abundante, siendo el hierro el primero. El oxígeno constituye el 21% del volumen del aire seco. También, es uno de los elementos más reactivos, de ahi que se encuentre combinado con otros elementos, como el agua (H2O) o dióxido de carbono (CO2).',
    curiosidad: 'Existen alrededor de un cuatrillón de toneladas (10^15 t) de oxígeno elemental en la atmósfera terrestre, la mayoria en forma de moléculas diatómicas (O2). La única razón por la que la atmósfera y los oceános contienen grandes cantidades de oxígeno es por que ciertos seres vivos lo renuevan constantemente, como resultado de la fotosíntesis.',
    xPos: 2,
    yPos: 16
  },
  {
    nombre: 'Flúor',
    simbolo: 'F',
    grupo: 'halogenos',
    numeroAtomico: '9',
    informacion: 'El flúor es un elemento muy reactivo en su forma elemental, ya que está a un solo electrón de completar la capa externa de electrones. El flúor es el decimo tercer elemento más abundante en la corteza terrestre, donde existe casi en su totalidad en forma de iones de flúor en los minerales. El mineral que mas flúor contiene es la fluorita, que esta formada principalmente por fluoruro de calcio (CaF2).',
    curiosidad: 'A partir del s.XVI la fluorita se empezó a añadir a las menas de hierro, disminuyendo la temperatura a la que los metales se fundían cuando se calentaban las menas, haciendo que la mezcla fluyera. El nombre de flúor viene de la palabra latina "flúor", que significa "fluido", ya que la piedra usada para que las menas de hierro fluyeran estaba hecha de flúor.',
    xPos: 2,
    yPos: 17
  },
  {
    nombre: 'Neón',
    simbolo: 'Ne',
    grupo: 'gases-nobles',
    numeroAtomico: '10',
    informacion: 'Al igual que el resto de los gases nobles, el neón es incoloro, inodoro y muy inerte (reacciona extremadamente poco). Al igual que el helio, el neón no forma compuestos estables conocidos. El origen de este elemento nos remonta a 1898, cuando el químico escoces William Ramsay y el inglés Morris Travers descubrieron el neón en una muestra de aire líquido, semanas después de haber descubierto el kriptón (Kr) ',
    curiosidad: 'El nombre de este elemento proviene de la palabra griega "neos", que significa "nuevo". El neón es el cuarto elemento más abundante en el Universo, aunque es muy escaso en la Tierra, constituyendo solo el 0.0002% de la atmósfera, y aun asi, siendo ligeramente más abundante que el helio.',
    xPos: 2,
    yPos: 18
  },
  {
    nombre: 'Sodio',
    simbolo: 'Na',
    grupo: 'alcalinos',
    numeroAtomico: '11',
    informacion: 'El sodio fue descubierto en 1807 porHumphry Davy, el cual lo descubrió pasando una corriente eléctrica a traves de hidróxido de sodio fundido (NaOH, más comunmente llamado "sosa cáustica"). Es el sexto elemento mas abundante en la superficie terrestre, existiendo más de 10 kilogramos en forma de iones de sodio disueltos en cada metro cúbico de agua marina.',
    curiosidad: 'El nombre del elemento proviene de "sodanum", el nombre romando para las salicornias, un género de plantas cuyas cenizas se utilizaban antiguamente en la fabricación del vidrio. Las salicornias són halófitas (les gusta la sal) y sus cenizas contienen carbonato de calcio',
    xPos: 3,
    yPos: 1
  },
  {
    nombre: 'Magnesio',
    simbolo: 'Mg',
    grupo: 'alcalinoterreos',
    numeroAtomico: '12',
    informacion: 'El magnesio es el octavo elemento más abundante. El cuerpo de un humano adulto medio contiene 25g de este elemento. Es tan importante debido a que mas de trescientas reacciones bioquímicas importantes dependen de la presencia de iones de magnesio. El científico que descubrió este elemento era el escocés Joseph Black, que lo identificó por primera vez en el 1755, mientras experimentaba con carbonato de magnesio (MgCO3)',
    curiosidad: 'Las verduras de hoja verde son una buena fuente de magnesio, dado a que los átomos de este elemento constituyen parte de la esencia del pigmento verde llamado "clorofila". Aunque también hay otras buenas fuentes de magnesio, como los guisantes, alubias, frustos secos, cereales integrales y las patatas',
    xPos: 3,
    yPos: 2
  },
  {
    nombre: 'Aluminio',
    simbolo: 'Al',
    grupo: 'metales-p',
    numeroAtomico: '13',
    informacion: 'Es el tercer elemento mas abundante de la corteza terrestre, y el primero entre los metales. Este elemento se encuentra en todas partes y tiene multitud de usos. El nombre de "aluminio" deriva de "alumbre", un mineral que contiene el compuesto alumbre de potasio (K2Al2(SO4)). El 1787 el químico Lavoisier se dio cuenta de un metal desconocido, posteriormente, en 1808 sugirió que el elemento se llamara "alumium", que se derivó hasta llegar a "aluminium".',
    curiosidad: 'Es ligero y fuerte, y se utiliza como metal estructural en edificios y vehículos. Cuando se expone al aire, el alumunio puro reacciona con el oxígeno, formando una capa fina de óxido de aluminio (III) (Al2O3), que impide más reacciones. Es un buen conductor de la electricidad, y, dado a que es relativamente barato y ligero, la mayor parte de los cables de transmisión de energía tanto superficiales como subterráneos se hacen con él.',
    xPos: 3,
    yPos: 13
  },
  {
    nombre: 'Silicio',
    simbolo: 'Si',
    grupo: 'metaloides',
    numeroAtomico: '14',
    informacion: 'El silicio es el segundo elemento más abundante, por masa, de la corteza terrestre. Se encuentra habitualmente, combinado con el oxígeno, en minerales llamados silicatos, que contienen ión silicato (SiO4)4-. Se produjo por primera vez en su forma elemental en 1824, cuando el químico sueco Jöns Jacob Berzelius logró producir un polvo de silicio amorfo bastante puro.',
    curiosidad: 'Este elemento es muy conocido por sus aplicaciones en el campo de la electrónica, siendo el semiconductor más utilizado. La mayoria de los chips de ordenador y otros circuitos integrados están hechos de obleas de silicio cristalino-plateado ultrapuro. El silicio ultrapuro también es la base de alrededor de un 90% de las células solares, donde también se aprovecha su característica de semiconductor.',
    xPos: 3,
    yPos: 14
  },
  {
    nombre: 'Fósforo',
    simbolo: 'P',
    grupo: 'no-metales',
    numeroAtomico: '15',
    informacion: '',
    curiosidad: '',
    xPos: 3,
    yPos: 15
  },
  {
    nombre: 'Azufre',
    simbolo: 'S',
    grupo: 'no-metales',
    numeroAtomico: '16',
    informacion: '',
    curiosidad: '',
    xPos: 3,
    yPos: 16
  },
  {
    nombre: 'Cloro',
    simbolo: 'Cl',
    grupo: 'halogenos',
    numeroAtomico: '17',
    informacion: '',
    curiosidad: '',
    xPos: 3,
    yPos: 17
  },
  {
    nombre: 'Argón',
    simbolo: 'Ar',
    grupo: 'gases-nobles',
    numeroAtomico: '18',
    informacion: '',
    curiosidad: '',
    xPos: 3,
    yPos: 18
  },
  {
    nombre: 'Potasio',
    simbolo: 'K',
    grupo: 'alcalinos',
    numeroAtomico: '19',
    informacion: 'Este elemento fue el primero que descubrió Humphry Davy. En 1807 paso una corriente eléctrica a traves de potasa cáustica fundida (o también llamado hidróxido de potasio, KOH) y observó que las partículas plateadas-grises del potasio "saltaban emitiendo un silbido y se quemaban desprendiendo una luz color lavanda". El potasio puro se obtiene industrialmente calentando cloruro de potasio (KCl) a partir de minerales portadores de potasio con vapor de sodio puro.',
    curiosidad: 'Este elemento recibe su nombre por el compuesto que utilizó para su descubrimiento, la potasa, y junto al hidróxido de sodio, el hidróxido de potasio se sigue utilizando para fabricar jabones, que tienden a disolverse mejor en agua. Su letra es "K" porque deriva de la palabra latina para "álcali": "kalium". ',
    xPos: 4,
    yPos: 1
  },
  {
    nombre: 'Calcio',
    simbolo: 'Ca',
    grupo: 'alcalinoterreos',
    numeroAtomico: '20',
    informacion: '',
    curiosidad: '',
    xPos: 4,
    yPos: 2
  },
  {
    nombre: 'Escandio',
    simbolo: 'Sc',
    grupo: 'metales-transicion',
    numeroAtomico: '21',
    informacion: '',
    curiosidad: '',
    xPos: 4,
    yPos: 3
  },
  {
    nombre: 'Titanio',
    simbolo: 'Ti',
    grupo: 'metales-transicion',
    numeroAtomico: '22',
    informacion: '',
    curiosidad: '',
    xPos: 4,
    yPos: 4
  },
  {
    nombre: 'Vanadio',
    simbolo: 'V',
    grupo: 'metales-transicion',
    numeroAtomico: '23',
    informacion: '',
    curiosidad: '',
    xPos: 4,
    yPos: 5
  },
  {
    nombre: 'Cromo',
    simbolo: 'Cr',
    grupo: 'metales-transicion',
    numeroAtomico: '24',
    informacion: '',
    curiosidad: '',
    xPos: 4,
    yPos: 6
  },
  {
    nombre: 'Manganeso',
    simbolo: 'Mn',
    grupo: 'metales-transicion',
    numeroAtomico: '25',
    informacion: '',
    curiosidad: '',
    xPos: 4,
    yPos: 7
  },
  {
    nombre: 'Hierro',
    simbolo: 'Fe',
    grupo: 'metales-transicion',
    numeroAtomico: '26',
    informacion: '',
    curiosidad: '',
    xPos: 4,
    yPos: 8
  },
  {
    nombre: 'Cobalto',
    simbolo: 'Co',
    grupo: 'metales-transicion',
    numeroAtomico: '27',
    informacion: '',
    curiosidad: '',
    xPos: 4,
    yPos: 9
  },
  {
    nombre: 'Niquel',
    simbolo: 'Ni',
    grupo: 'metales-transicion',
    numeroAtomico: '28',
    informacion: '',
    curiosidad: '',
    xPos: 4,
    yPos: 10
  },
  {
    nombre: 'Cobre',
    simbolo: 'Cu',
    grupo: 'metales-transicion',
    numeroAtomico: '29',
    informacion: '',
    curiosidad: '',
    xPos: 4,
    yPos: 11
  },
  {
    nombre: 'Cinc',
    simbolo: 'Zn',
    grupo: 'metales-transicion',
    numeroAtomico: '30',
    informacion: '',
    curiosidad: '',
    xPos: 4,
    yPos: 12
  },
  {
    nombre: 'Galio',
    simbolo: 'Ga',
    grupo: 'metales-p',
    numeroAtomico: '31',
    informacion: '',
    curiosidad: '',
    xPos: 4,
    yPos: 13
  },
  {
    nombre: 'Germanio',
    simbolo: 'Ge',
    grupo: 'metaloides',
    numeroAtomico: '32',
    informacion: '',
    curiosidad: '',
    xPos: 4,
    yPos: 14
  },
  {
    nombre: 'Arsénico',
    simbolo: 'As',
    grupo: 'metaloides',
    numeroAtomico: '33',
    informacion: '',
    curiosidad: '',
    xPos: 4,
    yPos: 15
  },
  {
    nombre: 'Selenio',
    simbolo: 'Se',
    grupo: 'no-metales',
    numeroAtomico: '34',
    informacion: '',
    curiosidad: '',
    xPos: 4,
    yPos: 16
  },
  {
    nombre: 'Bromo',
    simbolo: 'Br',
    grupo: 'halogenos',
    numeroAtomico: '35',
    informacion: '',
    curiosidad: '',
    xPos: 4,
    yPos: 17
  },
  {
    nombre: 'Kriptón',
    simbolo: 'Kr',
    grupo: 'gases-nobles',
    numeroAtomico: '36',
    informacion: '',
    curiosidad: '',
    xPos: 4,
    yPos: 18
  },
  {
    nombre: 'Rubidio',
    simbolo: 'Rb',
    grupo: 'alcalinos',
    numeroAtomico: '37',
    informacion: '',
    curiosidad: '',
    xPos: 5,
    yPos: 1
  },
  {
    nombre: 'Estroncio',
    simbolo: 'Sr',
    grupo: 'alcalinoterreos',
    numeroAtomico: '38',
    informacion: '',
    curiosidad: '',
    xPos: 5,
    yPos: 2
  },
  {
    nombre: 'Itrio',
    simbolo: 'Y',
    grupo: 'metales-transicion',
    numeroAtomico: '39',
    informacion: '',
    curiosidad: '',
    xPos: 5,
    yPos: 3
  },
  {
    nombre: 'Circonio',
    simbolo: 'Zr',
    grupo: 'metales-transicion',
    numeroAtomico: '40',
    informacion: '',
    curiosidad: '',
    xPos: 5,
    yPos: 4
  },
  {
    nombre: 'Niobio',
    simbolo: 'Nb',
    grupo: 'metales-transicion',
    numeroAtomico: '41',
    informacion: '',
    curiosidad: '',
    xPos: 5,
    yPos: 5
  },
  {
    nombre: 'Molibdeno',
    simbolo: 'Mo',
    grupo: 'metales-transicion',
    numeroAtomico: '42',
    informacion: '',
    curiosidad: '',
    xPos: 5,
    yPos: 6
  },
  {
    nombre: 'Tecnecio',
    simbolo: 'Tc',
    grupo: 'metales-transicion',
    numeroAtomico: '43',
    informacion: '',
    curiosidad: '',
    xPos: 5,
    yPos: 7
  },
  {
    nombre: 'Rutenio',
    simbolo: 'Ru',
    grupo: 'metales-transicion',
    numeroAtomico: '44',
    informacion: '',
    curiosidad: '',
    xPos: 5,
    yPos: 8
  },
  {
    nombre: 'Rodio',
    simbolo: 'Rh',
    grupo: 'metales-transicion',
    numeroAtomico: '45',
    informacion: '',
    curiosidad: '',
    xPos: 5,
    yPos: 9
  },
  {
    nombre: 'Paladio',
    simbolo: 'Pd',
    grupo: 'metales-transicion',
    numeroAtomico: '46',
    informacion: '',
    curiosidad: '',
    xPos: 5,
    yPos: 10
  },
  {
    nombre: 'Plata',
    simbolo: 'Ag',
    grupo: 'metales-transicion',
    numeroAtomico: '47',
    informacion: '',
    curiosidad: '',
    xPos: 5,
    yPos: 11
  },
  {
    nombre: 'Cadmio',
    simbolo: 'Cd',
    grupo: 'metales-transicion',
    numeroAtomico: '48',
    informacion: '',
    curiosidad: '',
    xPos: 5,
    yPos: 12
  },
  {
    nombre: 'Indio',
    simbolo: 'In',
    grupo: 'metales-p',
    numeroAtomico: '49',
    informacion: '',
    curiosidad: '',
    xPos: 5,
    yPos: 13
  },
  {
    nombre: 'Estaño',
    simbolo: 'Sn',
    grupo: 'metales-p',
    numeroAtomico: '50',
    informacion: '',
    curiosidad: '',
    xPos: 5,
    yPos: 14
  },
  {
    nombre: 'Antimonio',
    simbolo: 'Sb',
    grupo: 'metaloides',
    numeroAtomico: '51',
    informacion: '',
    curiosidad: '',
    xPos: 5,
    yPos: 15
  },
  {
    nombre: 'Teluro',
    simbolo: 'Te',
    grupo: 'metaloides',
    numeroAtomico: '52',
    informacion: '',
    curiosidad: '',
    xPos: 5,
    yPos: 16
  },
  {
    nombre: 'Yodo',
    simbolo: 'I',
    grupo: 'halogenos',
    numeroAtomico: '53',
    informacion: '',
    curiosidad: '',
    xPos: 5,
    yPos: 17
  },
  {
    nombre: 'Xenón',
    simbolo: 'Xe',
    grupo: 'gases-nobles',
    numeroAtomico: '54',
    informacion: '',
    curiosidad: '',
    xPos: 5,
    yPos: 18
  },
  {
    nombre: 'Cesio',
    simbolo: 'Cs',
    grupo: 'alcalinos',
    numeroAtomico: '55',
    informacion: '',
    curiosidad: '',
    xPos: 6,
    yPos: 1
  },
  {
    nombre: 'Bario',
    simbolo: 'Ba',
    grupo: 'alcalinoterreos',
    numeroAtomico: '56',
    informacion: '',
    curiosidad: '',
    xPos: 6,
    yPos: 2
  },
  {
    nombre: 'Lantano',
    simbolo: 'La',
    grupo: 'lantanidos',
    numeroAtomico: '57',
    informacion: '',
    curiosidad: '',
    xPos: 6,
    yPos: 3
  },
  {
    nombre: 'Cerio',
    simbolo: 'Ce',
    grupo: 'lantanidos',
    numeroAtomico: '58',
    informacion: '',
    curiosidad: '',
    xPos: 9,
    yPos: 5
  },
  {
    nombre: 'Praseodimio',
    simbolo: 'Pr',
    grupo: 'lantanidos',
    numeroAtomico: '59',
    informacion: '',
    curiosidad: '',
    xPos: 9,
    yPos: 6
  },
  {
    nombre: 'Neodimio',
    simbolo: 'Nd',
    grupo: 'lantanidos',
    numeroAtomico: '60',
    informacion: '',
    curiosidad: '',
    xPos: 9,
    yPos: 7
  },
  {
    nombre: 'Prometio',
    simbolo: 'Pm',
    grupo: 'lantanidos',
    numeroAtomico: '61',
    informacion: '',
    curiosidad: '',
    xPos: 9,
    yPos: 8
  },
  {
    nombre: 'Samario',
    simbolo: 'Sm',
    grupo: 'lantanidos',
    numeroAtomico: '62',
    informacion: '',
    curiosidad: '',
    xPos: 9,
    yPos: 9
  },
  {
    nombre: 'Europio',
    simbolo: 'Eu',
    grupo: 'lantanidos',
    numeroAtomico: '63',
    informacion: '',
    curiosidad: '',
    xPos: 9,
    yPos: 10
  },
  {
    nombre: 'Gadolinio',
    simbolo: 'Gd',
    grupo: 'lantanidos',
    numeroAtomico: '64',
    informacion: '',
    curiosidad: '',
    xPos: 9,
    yPos: 11
  },
  {
    nombre: 'Terbio',
    simbolo: 'Tb',
    grupo: 'lantanidos',
    numeroAtomico: '65',
    informacion: '',
    curiosidad: '',
    xPos: 9,
    yPos: 12
  },
  {
    nombre: 'Disprosio',
    simbolo: 'Dy',
    grupo: 'lantanidos',
    numeroAtomico: '66',
    informacion: '',
    curiosidad: '',
    xPos: 9,
    yPos: 13
  },
  {
    nombre: 'Holmio',
    simbolo: 'Ho',
    grupo: 'lantanidos',
    numeroAtomico: '67',
    informacion: '',
    curiosidad: '',
    xPos: 9,
    yPos: 14
  },
  {
    nombre: 'Erbio',
    simbolo: 'Er',
    grupo: 'lantanidos',
    numeroAtomico: '68',
    informacion: '',
    curiosidad: '',
    xPos: 9,
    yPos: 15
  },
  {
    nombre: 'Tulio',
    simbolo: 'Tm',
    grupo: 'lantanidos',
    numeroAtomico: '69',
    informacion: '',
    curiosidad: '',
    xPos: 9,
    yPos: 16
  },
  {
    nombre: 'Iterbio',
    simbolo: 'Yt',
    grupo: 'lantanidos',
    numeroAtomico: '70',
    informacion: '',
    curiosidad: '',
    xPos: 9,
    yPos: 17
  },
  {
    nombre: 'Lutecio',
    simbolo: 'Lu',
    grupo: 'lantanidos',
    numeroAtomico: '71',
    informacion: '',
    curiosidad: '',
    xPos: 9,
    yPos: 18
  },
  {
    nombre: 'Hafnio',
    simbolo: 'Hf',
    grupo: 'metales-transicion',
    numeroAtomico: '72',
    informacion: '',
    curiosidad: '',
    xPos: 6,
    yPos: 4
  },
  {
    nombre: 'Tántalo',
    simbolo: 'Ta',
    grupo: 'metales-transicion',
    numeroAtomico: '73',
    informacion: '',
    curiosidad: '',
    xPos: 6,
    yPos: 5
  },
  {
    nombre: 'Wolframio',
    simbolo: 'W',
    grupo: 'metales-transicion',
    numeroAtomico: '74',
    informacion: '',
    curiosidad: '',
    xPos: 6,
    yPos: 6
  },
  {
    nombre: 'Renio',
    simbolo: 'Re',
    grupo: 'metales-transicion',
    numeroAtomico: '75',
    informacion: '',
    curiosidad: '',
    xPos: 6,
    yPos: 7
  },
  {
    nombre: 'Osmio',
    simbolo: 'Os',
    grupo: 'metales-transicion',
    numeroAtomico: '76',
    informacion: '',
    curiosidad: '',
    xPos: 6,
    yPos: 8
  },
  {
    nombre: 'Iridio',
    simbolo: 'Ir',
    grupo: 'metales-transicion',
    numeroAtomico: '77',
    informacion: '',
    curiosidad: '',
    xPos: 6,
    yPos: 9
  },
  {
    nombre: 'Platino',
    simbolo: 'Pt',
    grupo: 'metales-transicion',
    numeroAtomico: '78',
    informacion: '',
    curiosidad: '',
    xPos: 6,
    yPos: 10
  },
  {
    nombre: 'Oro',
    simbolo: 'Au',
    grupo: 'metales-transicion',
    numeroAtomico: '79',
    informacion: '',
    curiosidad: '',
    xPos: 6,
    yPos: 11
  },
  {
    nombre: 'Mercurio',
    simbolo: 'Hg',
    grupo: 'metales-transicion',
    numeroAtomico: '80',
    informacion: '',
    curiosidad: '',
    xPos: 6,
    yPos: 12
  },
  {
    nombre: 'Talio',
    simbolo: 'Tl',
    grupo: 'metales-p',
    numeroAtomico: '81',
    informacion: '',
    curiosidad: '',
    xPos: 6,
    yPos: 13
  },
  {
    nombre: 'Plomo',
    simbolo: 'Pb',
    grupo: 'metales-p',
    numeroAtomico: '82',
    informacion: '',
    curiosidad: '',
    xPos: 6,
    yPos: 14
  },
  {
    nombre: 'Bismuto',
    simbolo: 'Bi',
    grupo: 'metales-p',
    numeroAtomico: '83',
    informacion: '',
    curiosidad: '',
    xPos: 6,
    yPos: 15
  },
  {
    nombre: 'Polonio',
    simbolo: 'Po',
    grupo: 'metaloides',
    numeroAtomico: '84',
    informacion: '',
    curiosidad: '',
    xPos: 6,
    yPos: 16
  },
  {
    nombre: 'Astato',
    simbolo: 'At',
    grupo: 'halogenos',
    numeroAtomico: '85',
    informacion: '',
    curiosidad: '',
    xPos: 6,
    yPos: 17
  },
  {
    nombre: 'Radón',
    simbolo: 'Rn',
    grupo: 'gases-nobles',
    numeroAtomico: '86',
    informacion: '',
    curiosidad: '',
    xPos: 6,
    yPos: 18
  },
  {
    nombre: 'Francio',
    simbolo: 'Fr',
    grupo: 'alcalinos',
    numeroAtomico: '87',
    informacion: '',
    curiosidad: '',
    xPos: 7,
    yPos: 1
  },
  {
    nombre: 'Radio',
    simbolo: 'Ra',
    grupo: 'alcalinoterreos',
    numeroAtomico: '88',
    informacion: '',
    curiosidad: '',
    xPos: 7,
    yPos: 2
  },
  {
    nombre: 'Actinio',
    simbolo: 'Ac',
    grupo: 'actinidos',
    numeroAtomico: '89',
    informacion: '',
    curiosidad: '',
    xPos: 7,
    yPos: 3
  },
  {
    nombre: 'Torio',
    simbolo: 'Th',
    grupo: 'actinidos',
    numeroAtomico: '90',
    informacion: '',
    curiosidad: '',
    xPos: 10,
    yPos: 5
  },
  {
    nombre: 'Protactinio',
    simbolo: 'Pa',
    grupo: 'actinidos',
    numeroAtomico: '91',
    informacion: '',
    curiosidad: '',
    xPos: 10,
    yPos: 6
  },
  {
    nombre: 'Uranio',
    simbolo: 'U',
    grupo: 'actinidos',
    numeroAtomico: '92',
    informacion: '',
    curiosidad: '',
    xPos: 10,
    yPos: 7
  },
  {
    nombre: 'Neptunio',
    simbolo: 'Np',
    grupo: 'actinidos',
    numeroAtomico: '93',
    informacion: '',
    curiosidad: '',
    xPos: 10,
    yPos: 8
  },
  {
    nombre: 'Plutonio',
    simbolo: 'Pu',
    grupo: 'actinidos',
    numeroAtomico: '94',
    informacion: '',
    curiosidad: '',
    xPos: 10,
    yPos: 9
  },
  {
    nombre: 'Americio',
    simbolo: 'Am',
    grupo: 'actinidos',
    numeroAtomico: '95',
    informacion: '',
    curiosidad: '',
    xPos: 10,
    yPos: 10
  },
  {
    nombre: 'Curio',
    simbolo: 'Cm',
    grupo: 'actinidos',
    numeroAtomico: '96',
    informacion: '',
    curiosidad: '',
    xPos: 10,
    yPos: 11
  },
  {
    nombre: 'Berkelio',
    simbolo: 'Bk',
    grupo: 'actinidos',
    numeroAtomico: '97',
    informacion: '',
    curiosidad: '',
    xPos: 10,
    yPos: 12
  },
  {
    nombre: 'Californio',
    simbolo: 'Cf',
    grupo: 'actinidos',
    numeroAtomico: '98',
    informacion: '',
    curiosidad: '',
    xPos: 10,
    yPos: 13
  },
  {
    nombre: 'Einstenio',
    simbolo: 'Es',
    grupo: 'actinidos',
    numeroAtomico: '99',
    informacion: '',
    curiosidad: '',
    xPos: 10,
    yPos: 14
  },
  {
    nombre: 'Fermio',
    simbolo: 'Fm',
    grupo: 'actinidos',
    numeroAtomico: '100',
    informacion: '',
    curiosidad: '',
    xPos: 10,
    yPos: 15
  },
  {
    nombre: 'Molibdeno',
    simbolo: 'Md',
    grupo: 'actinidos',
    numeroAtomico: '101',
    informacion: '',
    curiosidad: '',
    xPos: 10,
    yPos: 16
  },
  {
    nombre: 'Nobelio',
    simbolo: 'No',
    grupo: 'actinidos',
    numeroAtomico: '102',
    informacion: '',
    curiosidad: '',
    xPos: 10,
    yPos: 17
  },
  {
    nombre: 'Laurencio',
    simbolo: 'Lr',
    grupo: 'actinidos',
    numeroAtomico: '103',
    informacion: '',
    curiosidad: '',
    xPos: 10,
    yPos: 18
  },
  {
    nombre: 'Rutherfordio',
    simbolo: 'Rf',
    grupo: 'metales-transicion',
    numeroAtomico: '104',
    informacion: '',
    curiosidad: '',
    xPos: 7,
    yPos: 4
  },
  {
    nombre: 'Dubnio',
    simbolo: 'Db',
    grupo: 'metales-transicion',
    numeroAtomico: '105',
    informacion: '',
    curiosidad: '',
    xPos: 7,
    yPos: 5
  },
  {
    nombre: 'Seaborgio',
    simbolo: 'Sg',
    grupo: 'metales-transicion',
    numeroAtomico: '106',
    informacion: '',
    curiosidad: '',
    xPos: 7,
    yPos: 6
  },
  {
    nombre: 'Bohrio',
    simbolo: 'Bh',
    grupo: 'metales-transicion',
    numeroAtomico: '107',
    informacion: '',
    curiosidad: '',
    xPos: 7,
    yPos: 7
  },
  {
    nombre: 'Hasio',
    simbolo: 'Hs',
    grupo: 'metales-transicion',
    numeroAtomico: '108',
    informacion: '',
    curiosidad: '',
    xPos: 7,
    yPos: 8
  },
  {
    nombre: 'Meitnerio',
    simbolo: 'Mt',
    grupo: 'metales-transicion',
    numeroAtomico: '109',
    informacion: '',
    curiosidad: '',
    xPos: 7,
    yPos: 9
  },
  {
    nombre: 'Darmstatio',
    simbolo: 'Ds',
    grupo: 'metales-transicion',
    numeroAtomico: '110',
    informacion: '',
    curiosidad: '',
    xPos: 7,
    yPos: 10
  },
  {
    nombre: 'Roentgenio',
    simbolo: 'Rg',
    grupo: 'metales-transicion',
    numeroAtomico: '111',
    informacion: '',
    curiosidad: '',
    xPos: 7,
    yPos: 11
  },
  {
    nombre: 'Copernicio',
    simbolo: 'Cn',
    grupo: 'metales-transicion',
    numeroAtomico: '112',
    informacion: '',
    curiosidad: '',
    xPos: 7,
    yPos: 12
  },
  {
    nombre: 'Nihonio',
    simbolo: 'Nh',
    grupo: 'metales-p',
    numeroAtomico: '113',
    informacion: '',
    curiosidad: '',
    xPos: 7,
    yPos: 13
  },
  {
    nombre: 'Flerovio',
    simbolo: 'Fl',
    grupo: 'metales-p',
    numeroAtomico: '114',
    informacion: '',
    curiosidad: '',
    xPos: 7,
    yPos: 14
  },
  {
    nombre: 'Moscovio',
    simbolo: 'Mc',
    grupo: 'metales-p',
    numeroAtomico: '115',
    informacion: '',
    curiosidad: '',
    xPos: 7,
    yPos: 15
  },
  {
    nombre: 'Livermorio',
    simbolo: 'Lv',
    grupo: 'metales-p',
    numeroAtomico: '116',
    informacion: '',
    curiosidad: '',
    xPos: 7,
    yPos: 16
  },
  {
    nombre: 'Teneso',
    simbolo: 'Ts',
    grupo: 'halogenos',
    numeroAtomico: '117',
    informacion: '',
    curiosidad: '',
    xPos: 7,
    yPos: 17
  },
  {
    nombre: 'Oganesón',
    simbolo: 'Og',
    grupo: 'gases-nobles',
    numeroAtomico: '118',
    informacion: '',
    curiosidad: '',
    xPos: 7,
    yPos: 18
  }
]

export default ListaInformacion
