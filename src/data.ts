import { 
  HardHat, 
  Hammer, 
  Zap, 
  Paintbrush, 
  Lightbulb, 
  Droplets, 
  Wrench, 
  ShieldCheck,
  Package,
  Truck,
  Users,
  BadgePercent,
  MessageSquare
} from 'lucide-react';

export const BUSINESS_INFO = {
  name: "FERRETERÍA PROCONSTRUCTOR",
  slogan: "Todo para tu construcción en un solo lugar",
  description: "Empresa especializada en la venta de materiales y herramientas para construcción, remodelación y mantenimiento del hogar. Ofrecemos productos de calidad para profesionales y público en general.",
  whatsapp: "51932350348",
  locationUrl: "https://maps.app.goo.gl/jbxa88ujwDVkGGji9",
  defaultMessage: "Hola, deseo cotizar un producto de la Ferretería PROCONSTRUCTOR."
};

export const CATEGORIES = [
  {
    id: 'construccion',
    title: 'Cementos y Materiales',
    icon: HardHat,
    description: 'Materiales base para estructuras sólidas.',
    image: 'https://www.cementosinka.com.pe/wp-content/uploads/2023/09/5-Principales-materiales-de-construccion.jpg'
  },
  {
    id: 'manuales',
    title: 'Herramientas Manuales',
    icon: Hammer,
    description: 'Precisión y durabilidad en cada golpe.',
    image: 'https://www.daca.pe/public/images/upload/1665088710.jpg'
  },
  {
    id: 'electricas',
    title: 'Herramientas Eléctricas',
    icon: Zap,
    description: 'Potencia industrial para tus proyectos.',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pinturas',
    title: 'Pinturas y Accesorios',
    icon: Paintbrush,
    description: 'Acabados perfectos y protección duradera.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'electricidad',
    title: 'Electricidad',
    icon: Lightbulb,
    description: 'Conexiones seguras y eficientes.',
    image: 'https://s1.significados.com/foto/electricidad-og.jpg'
  },
  {
    id: 'gasfiteria',
    title: 'Gasfitería',
    icon: Droplets,
    description: 'Soluciones hidráulicas de alta presión.',
    image: 'https://construir.com.pe/wp-content/uploads/2023/01/CONSEJO2.jpg'
  },
  {
    id: 'tornillos',
    title: 'Tornillos y Fijaciones',
    icon: Wrench,
    description: 'El agarre que tu obra necesita.',
    image: 'https://princefastener.com/wp-content/uploads/2022/04/Stainless-Steel-bolts-and-nuts.jpg'
  },
  {
    id: 'seguridad',
    title: 'Seguridad Industrial',
    icon: ShieldCheck,
    description: 'Protección certificada para el trabajador.',
    image: 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&q=80&w=800'
  }
];

export const PRODUCTS = {
  construccion: [
    { name: 'Cemento Andino Ultra Resistente 42.5kg', desc: 'Ideal para estructuras firmes y duraderas.', img: 'https://constructivo.com/imgPosts/1566511993dCSGI9Dk.jpg' },
    { name: 'Cemento Solidez Premium 42.5kg', desc: 'Alta calidad para obras exigentes.', img: 'https://media.falabella.com/sodimacPE/110196_01/w=1500,h=1500,fit=cover' },
    { name: 'Ladrillo King Kong Industrial', desc: 'Alta resistencia para muros estructurales.', img: 'https://d34fyu2ua7aizz.cloudfront.net/images/product/43/large/ts_image_61bb5f51482ec4_87680737.jpg' },
    { name: 'Arena Gruesa Seleccionada', desc: 'Perfecta para mezcla de concreto.', img: 'https://media.falabella.com/sodimacPE/391905_03/w=1500,h=1500,fit=cover' },
    { name: 'Hormigón Preparado ProMix', desc: 'Material listo para construcción.', img: 'https://media.falabella.com/sodimacPE/4039920_01/w=1500,h=1500,fit=cover' },
  ],
  manuales: [
    { name: 'Martillo Profesional Truper Steel 16oz', desc: 'Alta resistencia y durabilidad.', img: 'https://http2.mlstatic.com/D_NQ_NP_812533-MLA99490288762_112025-O.webp' },
    { name: 'Juego de Destornilladores ProFix 6 piezas', desc: 'Ideal para uso doméstico y profesional.', img: 'https://herramientasyequipos.pe/wp-content/uploads/2019/10/606-6.1.png' },
    { name: 'Llave Francesa Ajustable MaxGrip', desc: 'Precisión y firmeza en ajustes.', img: 'https://promart.vteximg.com.br/arquivos/ids/9115618-700-700/96694.jpg?v=638882941062070000' },
    { name: 'Cinta Métrica Industrial 5m ProMeasure', desc: 'Medición exacta para trabajos precisos.', img: 'https://http2.mlstatic.com/D_NQ_NP_735065-MLA99550727358_122025-O.webp' },
    { name: 'Nivel Magnético Constructor ProLevel', desc: 'Perfecto para trabajos de precisión.', img: 'https://media.falabella.com/falabellaPE/118128005_01/w=1500,h=1500,fit=cover' },
  ],
  electricas: [
    { name: 'Taladro Percutor PowerDrill 650W', desc: 'Ideal para concreto, metal y madera.', img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=400' },
    { name: 'Amoladora Angular TurboCut 4 1/2', desc: 'Corte preciso y potente.', img: 'https://http2.mlstatic.com/D_NQ_NP_737199-MPE92719002347_092025-O.webp' },
    { name: 'Sierra Circular PrecisionCut 1200W', desc: 'Perfecta para carpintería.', img: 'https://http2.mlstatic.com/D_NQ_NP_690787-MPE92721547781_092025-O.webp' },
    { name: 'Lijadora Orbital SmoothFinish 320W', desc: 'Acabados profesionales.', img: 'https://oechsle.vteximg.com.br/arquivos/ids/23208170-1000-1000/imageUrl_3.jpg?v=638995610044830000' },
    { name: 'Rotomartillo Industrial MaxForce', desc: 'Alta potencia para trabajos pesados.', img: 'https://grupocasalima.com/wp-content/uploads/2025/12/rotomartillo-industrial-15200.webp' },
  ],
  pinturas: [
    { name: 'Pintura Látex Premium ColorPlus Blanco 1 galón', desc: 'Excelente cobertura y acabado.', img: 'https://www.martellsac.com.pe/wp-content/uploads/2024/08/LATEX-PLUS.gif' },
    { name: 'Rodillo Profesional ProPaint 9 pulgadas', desc: 'Aplicación uniforme de pintura.', img: 'https://dojiw2m9tvv09.cloudfront.net/68942/product/ropi-910m-e12482.jpg' },
    { name: 'Brocha Multiuso Cerda Suave ProBrush', desc: 'Ideal para detalles finos.', img: 'https://promart.vteximg.com.br/arquivos/ids/8602474-1000-1000/159573.jpg?v=638755017695930000' },
    { name: 'Sellador Acrílico Protector MaxSeal', desc: 'Protección para superficies.', img: 'https://www.incol.com.pe/public/frontend/images/producto/2008202423220992.png' },
    { name: 'Bandeja Profesional para Pintura PaintPro', desc: 'Facilita el trabajo de pintura.', img: 'https://promart.vteximg.com.br/arquivos/ids/3544022/124149.jpg?v=637758678336470000' },
  ],
  electricidad: [
    { name: 'Cable Eléctrico Vulcanizado ProCable 100m', desc: 'Alta resistencia y seguridad.', img: 'https://http2.mlstatic.com/D_Q_NP_2X_625463-MPE91478603728_092025-P.webp' },
    { name: 'Interruptor Simple ModernLine', desc: 'Diseño moderno y funcional.', img: 'https://plazavea.vteximg.com.br/arquivos/ids/30534350-418-418/null.jpg' },
    { name: 'Tomacorriente Doble SafeEnergy', desc: 'Alta calidad y durabilidad.', img: 'https://opalux.lifestore.pe/wp-content/uploads/2023/12/OP-1216-1.webp' },
    { name: 'Caja de Distribución Eléctrica PowerBox', desc: 'Organización segura de conexiones.', img: 'https://www.eabel.com/wp-content/uploads/2024/12/power-distribution-box.webp' },
    { name: 'Extensión Industrial 10m ElectroMax', desc: 'Uso profesional.', img: 'https://promart.vteximg.com.br/arquivos/ids/6248655-1000-1000/image-b44c6b902c4f4c95b1c09cabbbf297fc.jpg?v=637951705546170000' },
  ],
  gasfiteria: [
    { name: 'Tubería PVC HidroFlow 1/2 pulgada', desc: 'Alta resistencia al agua.', img: 'https://maveri.com/wp-content/uploads/2023/08/maveri-productos-02.jpg' },
    { name: 'Codo PVC Alta Presión AquaPro', desc: 'Instalación segura.', img: 'https://promart.vteximg.com.br/arquivos/ids/10377193/89749.jpg?v=639090333497200000' },
    { name: 'Llave de Paso Metálica ProValve', desc: 'Control eficiente del flujo.', img: 'https://http2.mlstatic.com/D_NQ_NP_701868-MLU74535092326_022024-O.webp' },
    { name: 'Pegamento PVC UltraFix 250ml', desc: 'Fijación segura.', img: 'https://promart.vteximg.com.br/arquivos/ids/557952/18431.jpg?v=637381401671800000' },
    { name: 'Kit Reparación Fugas HydroRepair', desc: 'Solución rápida para fugas.', img: 'https://oechsle.vteximg.com.br/arquivos/ids/14347157-1000-1000/image-abddc03d07ab4e489a7707e1408fea30.jpg?v=638281846265170000' },
  ],
  tornillos: [
    { name: 'Tornillos Drywall ProFix 100 unidades', desc: 'Alta resistencia.', img: 'https://promart.vteximg.com.br/arquivos/ids/8549348/20574.jpg?v=638727477648600000' },
    { name: 'Clavos Acerados MegaStrong 1kg', desc: 'Durabilidad garantizada.', img: 'https://http2.mlstatic.com/D_NQ_NP_660352-MLA79169977302_092024-O.webp' },
    { name: 'Tarugos Expansivos WallGrip 50 unidades', desc: 'Fijación segura.', img: 'https://http2.mlstatic.com/D_NQ_NP_907230-MPE78213677466_082024-O.webp' },
    { name: 'Pernos Hexagonales HeavyDuty 20 unidades', desc: 'Uso industrial.', img: 'https://http2.mlstatic.com/D_NQ_NP_822197-MLU72148819557_102023-O.webp' },
    { name: 'Arandelas Metálicas FixPro Pack 50', desc: 'Refuerzo seguro.', img: 'https://m.media-amazon.com/images/I/71Quth+nj+L._AC_UF350,350_QL80_.jpg' },
  ],
  seguridad: [
    { name: 'Casco de Seguridad SafePro', desc: 'Protección certificada.', img: 'https://redsuministros.com/wp-content/uploads/2020/01/3M_H-702R.jpg' },
    { name: 'Guantes Industriales AntiCorte ProHand', desc: 'Alta resistencia.', img: 'https://niko.pe/wp-content/uploads/2021/12/201040.png' },
    { name: 'Lentes de Protección VisionSafe', desc: 'Protección ocular profesional.', img: 'https://dojiw2m9tvv09.cloudfront.net/48473/product/X_lede-st-ae7346.jpg?81&t=1773644800' },
    { name: 'Mascarilla Industrial ProMask N95', desc: 'Protección contra polvo.', img: 'https://fagy.com.pe/wp-content/uploads/2023/02/RESPIRADOR-8516-GASES-ACIDOS-CON-VALVULA-N95-_3M-1.jpg' },
    { name: 'Chaleco Reflectivo Alta Visibilidad ProReflect', desc: 'Seguridad en obra.', img: 'https://savisafety.com/wp-content/uploads/2025/02/CH40-WEB-01.jpg' },
  ],
};

export const FEATURES = [
  { title: 'Productos de Calidad', icon: Package },
  { title: 'Buena Atención', icon: Users },
  { title: 'Variedad de Marcas', icon: BadgePercent },
  { title: 'Precios Competitivos', icon: MessageSquare },
  { title: 'Asesoría Personalizada', icon: Truck },
];
