export interface FullEventData {
  id: string;
  date: string;
  location: string;
  categories: string;
  hotel: string;
  description: string;
  image: string;
  locationLink: string;
  videoURL: string;
  requirements: string;
  price1Pre: string;
  price2Pre: string;
  price1Phase1: string;
  price2Phase1: string;
  price1Full: string;
  price2Full: string;
  paymentNumber1: string;
  paymentNumber2: string;
  paymentNumber3: string;
  paymentNumber4: string;
  details: string;
}

export const eventsData: FullEventData[] = [
  {
    id: "event-1",
    date: "30 de Mayo - 2 de Junio",
    location: "Acapulco",
    categories: "4x4, ATV",
    hotel: "Hotel Playa Acapulco",
    description: "El Rally Raid Valle 2025 solo tendra un vivac en la ciudad de Buga, exactamente dentro del histórico hotel Guadalajara de Buga, que cuenta con amplios espacios para porder ubicarnos y compartir con toda la familia del rally.",
    image: "https://hotelguadalajara.com.co/wp-content/uploads/2023/04/IMG_2081-1024x576.jpg",
    locationLink: "https://maps.google.com/?q=Acapulco",
    videoURL: "https://www.youtube.com/watch?v=7jbA2QmQ31w",
    requirements: `- Tener experiencia como corredor de Rally Raid (haber participado y terminado al menos una valida en Rally Darien o el Vultur Rally en Colombia o algun rally reconocido del exterior).
    - Vehículo en excelente estado técnico. Debe pasar la revisión técnica para poder tomar la largada.    
    - Casco certificado es de uso obligatorio para pilotos y copilotos, incluidos los de camionetas y carros 4x4    
    - Para los pilotos de motos deben tener botas altas (preferiblemente tipo Enduro), guantes, pantalón y body armor o chaqueta de protección.`,
    price1Pre: "595.000 COP",
    price2Pre: "695.000 COP",
    price1Phase1: "695.000 COP",
    price2Phase1: "845.000 COP",
    price1Full: "745.000 COP",
    price2Full: "945.000 COP",
    paymentNumber1: "862 435433 90",
    paymentNumber2: "3025616767",
    paymentNumber3: "3122886669",
    paymentNumber4: " +1 (864) 9085466",
    details: `¡Atención, guerreros del rally colombiano! El rugido de los motores se acerca con la Tercera Válida del Campeonato Colombiano de Rally Raid Darién, y este año, del 30 de mayo al 2 de junio, la adrenalina conquistará el corazón del Valle del Cauca. ¡Regresamos por tercer año consecutivo, esta vez para desafiar los límites en la histórica ciudad de Buga! 
    
    Dejamos atrás la indómita belleza del Meta y la tierra resbaladiza y empinada de Cundinamarca para sumergirnos en los paisajes vallecaucanos, donde una nueva y electrizante aventura espera a cada tripulación. Prepárense para una épica batalla contra el cronómetro y una exigente navegación a través de terrenos que pondrán a prueba su temple y habilidad al volante. 
    
    El campamento base, epicentro de la acción, vibrará con las revisiones técnicas y administrativas en el vivac de Buga, donde también se encenderá la chispa de la competencia con el prólogo y la largada de las especiales. Tras la partida del último piloto, elequipo de logística, los acompañantes y los equipos de asistencia estarán pendientes para vivir intensamente cada kilómetro de esta desafiante contienda como si se trataran de los mismos pilotos. 
    
    Fieles a la esencia del Darién, desvelaremos los tesoros ocultos de una Colombia inexplorada, esa tierra de secretos y maravillas que se irán revelando curva a curva en el implacable roadbook.`
  },
  {
    id: "event-2",
    date: "15 de Febrero - 05 de Marzo",
    location: "Risaralda",
    categories: "300, UTV",
    hotel: "Hotel Campestre La Cumbre",
    description: "Competencia en terrenos montañosos del Eje Cafetero colombiano.",
    image: "/event2.jpg",
    locationLink: "https://maps.google.com/?q=Risaralda",
    videoURL: "https://www.youtube.com/watch?v=video2",
    requirements: "Inscripción previa, vehículo en regla, protección ocular.",
    price1Pre: "$90",
    price2Pre: "$130",
    price1Phase1: "$110",
    price2Phase1: "$150",
    price1Full: "$130",
    price2Full: "$170",
    paymentNumber1: "321000121",
    paymentNumber2: "321000122",
    paymentNumber3: "321000123",
    paymentNumber4: "321000124",
    details: "Categoría diseñada para vehículos 300cc y UTVs, incluye obstáculos naturales y zonas de barro."
  },
  {
    id: "event-3",
    date: "06 de Diciembre - 18 de Diciembre",
    location: "Southampton",
    categories: "300 pro, Trail",
    hotel: "Harbour Hotel Southampton",
    description: "Evento internacional con rutas trail de largo recorrido.",
    image: "/event3.jpg",
    locationLink: "https://maps.google.com/?q=Southampton",
    videoURL: "https://www.youtube.com/watch?v=video3",
    requirements: "Documentación internacional, seguro de viaje, luces auxiliares.",
    price1Pre: "$150",
    price2Pre: "$200",
    price1Phase1: "$170",
    price2Phase1: "$230",
    price1Full: "$190",
    price2Full: "$260",
    paymentNumber1: "331000131",
    paymentNumber2: "331000132",
    paymentNumber3: "331000133",
    paymentNumber4: "331000134",
    details: "Evento premium para motocicletas de alto cilindraje con experiencia en largas distancias y navegación avanzada."
  },
  {
    id: "event-4",
    date: "2025-01-19",
    location: "New Venice",
    categories: "Novatos",
    hotel: "Novice Riders Inn",
    description: "Carrera introductoria para nuevos pilotos en pistas seguras.",
    image: "/event4.jpg",
    locationLink: "https://maps.google.com/?q=New+Venice",
    videoURL: "https://www.youtube.com/watch?v=video4",
    requirements: "Curso básico aprobado, acompañante opcional, chaleco reflectivo.",
    price1Pre: "$50",
    price2Pre: "$70",
    price1Phase1: "$60",
    price2Phase1: "$90",
    price1Full: "$80",
    price2Full: "$100",
    paymentNumber1: "341000141",
    paymentNumber2: "341000142",
    paymentNumber3: "341000143",
    paymentNumber4: "341000144",
    details: "Diseñado para quienes se inician en el deporte, con rutas planas y baja dificultad."
  }
];
