import { Link } from 'react-router-dom';
import './Terms.css';



export const Terms = () => {
  return (
    <div className="terms">
      <h1>Términos y Condiciones</h1>
      <p>Bienvenido a EnginePixel. Al utilizar nuestro sitio web, usted acepta estar vinculado por los siguientes términos y condiciones (los "Términos de Servicio"). Si no está de acuerdo con alguna parte de estos términos, por favor no utilice nuestro sitio.</p>

      <h2>Uso de la Plataforma</h2>
      <p>EnginePixel ofrece una plataforma para aplicaciones y para la compra y venta de productos. Los usuarios deben crear una cuenta para acceder a nuestras funciones completas. Al crear una cuenta, usted acuerda proporcionar información verdadera y completa como se le solicita durante el proceso de registro.</p>

      <h2>Privacidad de Datos</h2>
      <p>En EnginePixel respetamos su privacidad. Recopilamos y utilizamos su fotografía, correo electrónico, nombre y contraseña (esta última encriptada) para la creación y administración de su cuenta. No utilizamos cookies, salvo para mantener su sesión iniciada. Consulte nuestra <Link to="/privace">política de privacidad</Link> para más información.</p>

      <h2>Contenido Generado por Usuarios</h2>
      <p>Los usuarios pueden generar contenido, como publicaciones, comentarios y otros medios. Al subir contenido a nuestro sitio, usted otorga a EnginePixel una licencia mundial, no exclusiva, libre de regalías para usar, reproducir, adaptar y publicar dicho contenido en nuestro servicio.</p>

      <h2>Propiedad Intelectual</h2>
      <p>Todo el contenido publicado en EnginePixel, salvo el contenido generado por usuarios, es propiedad de EnginePixel o se usa con permiso. No se concede ninguna licencia para usar el contenido de EnginePixel fuera de lo necesario para utilizar el servicio conforme a estos Términos.</p>

      <h2>Enlaces a Sitios de Terceros</h2>
      <p>Nuestro sitio puede incluir enlaces a otros sitios web que no son operados por nosotros. No tenemos control sobre, y no asumimos responsabilidad por el contenido, políticas de privacidad o prácticas de sitios web de terceros.</p>

      <h2>Cambios en los Términos</h2>
      <p>EnginePixel se reserva el derecho de modificar o actualizar estos Términos en cualquier momento. Le avisaremos de cualquier cambio publicando los nuevos Términos en el sitio. Estos cambios entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.</p>

      <h2>Limitación de Responsabilidad</h2>
      <p>EnginePixel no será responsable de daños indirectos, incidentales, especiales, consecuentes o ejemplares, incluidos, pero no limitados a, daños por pérdida de beneficios, buena voluntad, uso de datos u otras pérdidas intangibles, resultantes del uso o la imposibilidad de usar nuestro servicio.</p>

      <h2>Contacto</h2>
      <p>Si tiene preguntas o comentarios sobre estos Términos, por favor contacte con nosotros a través de nuestro formulario de contacto disponible en el sitio web.</p>
    </div>
  );
}
