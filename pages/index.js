import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import { Paragraph } from "../components/Paragraph";
import { SectionTitle } from "../components/SectionTitle";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Expray producciones</title>
        <meta name="description" content="Expray producciones" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "0 16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <SectionTitle>Animación y conducción de eventos</SectionTitle>
          <Paragraph>
            Organizamos bailes en clubes, para el día del amigo, día la
            primavera, fin Etc. Completamos con otros servicios profesionales
            para ocasiones especiales: Animación de eventos, fotografías y
            vídeos. Magia, cantantes solistas y bandas en vivo.
          </Paragraph>
          <Button>más info</Button>
          <Paragraph>
            Nuestra productora está abocada a la realización de eventos en
            distintas circunstancias de nuestras vidas. Quizás te guste cenar en
            un buen restaurante, tomar un café o trago en un pub. Y a la par
            escuchar y deleitarte con excelente música en vivo. O tal vez
            quieras celebrar un cumpleaños y quieras que tus invitados disfruten
            de una música especial, o canciones que los identifiquen. Para eso
            te musicalizamos especialmente tu fiesta, a tu gusto o con segmentos
            temáticos exclusivos. Quizás sueñes con tu casamiento y nosotros
            podemos lograr tu fantasía o sueño. Tu empresa o los dueños de tu
            lugar laboral quieran despedir el año, o celebrar un día en
            específico. Para eso te brindamos nuestra capacidad de musicalizar
            lo especial.
          </Paragraph>
        </div>
        <div
          style={{
            width: "100%",
            padding: "0 16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <SectionTitle>Cenas show</SectionTitle>
          <Paragraph>
            Los sábados por la noche y en distintos Restaurantes, Pubs, etc. Y
            de manera itinerante por la zona norte. Te llevamos "casi" un
            programa de radio, Mientras se disfrutan cenas o tragos, te
            acompañamos con shows en vivo. Con bandas y/o artistas solistas. En
            el show te cuento "Que es lo que está pasando en nuestro bendito
            país" y también podrás escuchar entrevistas a distintos
            personalidades de nuestro municipio.
          </Paragraph>
          <Button>más info</Button>
        </div>
        <div
          style={{
            width: "100%",
            padding: "0 16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <SectionTitle>
            Cumpleaños – Casamientos – Despedidas de Fin de Año
          </SectionTitle>
          <Paragraph>
            Te brindamos la animación y musicalización temática y a pedido,
            personalizada de tu fiesta soñada. También contamos con bandas y
            artistas solistas con shows en vivo. Servicio de fotografías y
            filmaciones.
          </Paragraph>
          <Button>más info</Button>
        </div>
        <div
          style={{
            width: "100%",
            padding: "0 16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <SectionTitle>La Fiesta del Recuerdo</SectionTitle>
          <Paragraph>
            Si tenes mas de 50 años, y queres hacer una fiesta, celebrar un
            cumpleaños, y te gusta la música de los años 70 y 80, somos
            especialistas. No solo por la música que conocemos y disfrutamos
            también, sabemos entretener como en aquella época dorada.
          </Paragraph>
          <Button>más info</Button>
        </div>
      </main>

      <footer>
        <Paragraph>made by Mariano Guillaume</Paragraph>
      </footer>
    </div>
  );
}
