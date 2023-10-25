import React, { useEffect, useState } from "react";
import styles from "./support.module.scss";
import Nav from "@/components/Nav/Nav";
import Head from "next/head";
import Link from "next/link";
import { setOriginalNode } from "typescript";
import { legal, business } from "@/Data/categories";
import { Accordion } from "@/components/Accordion";
import SideNav from "@/components/SideNav";
import useHashChange from "@/hooks/useHashChange";

export default function Events() {
  const activeSection = useHashChange();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
      console.log("Scroll Y: ", window.scrollY)
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>Saidia - Guides/Legal</title>
        <meta
          name="description"
          content="A resources website for the Saidia game"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <SideNav />
      {
        <div style={{ paddingTop: 16, paddingBottom: 16, width: "100%", backgroundColor: "#1e2832", textAlign: "center", position: "fixed", top: scrollY > 288 ? 0 : -80, transition: "ease-in-out 0.5s all", paddingLeft: "132px" }}>
          <h2 style={{ color: "white", fontFamily: "sans-serif" }}>
            {
              activeSection === "inclusive-events" ? "Queer-friendly events you can attend" : "Fun things to do in Nairobi"
            }
          </h2>
        </div>
      }
      <div className={styles.article} id="inclusive-events" style={{ display: activeSection === "inclusive-events" ? "block" : "none" }}>
        <h2>Queer-friendly events you can attend</h2>
        <p>
          In recent years, there has been a growing acceptance and recognition
          of the LGBTQ+ community in Kenya, leading to the emergence of
          queer-friendly events and spaces. While the availability of such
          events may vary, here are some examples of queer-friendly events that
          have taken place or are likely to occur in Kenya:
        </p>
        <ol className={styles.eWasteCategories}>
          <li>
            <span>Nairobi Queer Film Festival:</span> This annual event showcases a selection
            of films that explore LGBTQ+ themes and experiences. It provides a
            platform for queer filmmakers to share their work and for the
            community to come together and engage in dialogue.
          </li>
          <li>
            <span>Art Exhibitions: </span>Various art exhibitions in Kenya feature queer
            artists and explore LGBTQ+ themes. These exhibitions provide a space
            for artistic expression and create opportunities for dialogue and
            understanding.
          </li>
          <li>
            <span>LGBTQ+ Workshops and Talks:</span> Organizations like AFRA Kenya and other
            LGBTQ+ rights groups often organize workshops, panel discussions,
            and talks on topics related to sexual orientation, gender identity,
            and LGBTQ+ rights. These events aim to educate and create awareness
            while fostering a supportive environment.
          </li>
          <li>
            <span>Queer Parties and Social Gatherings:</span> There are occasional queer
            parties and social gatherings organized in Kenya, particularly in
            urban areas like Nairobi. These events provide a space for the
            LGBTQ+ community and allies to socialize, connect, and celebrate.
            Here are some exciting parties and events worth checking out: The
            Whine Down, Monateng Music, Dance classes at Birds of Paradise and
            the Wanderlust Party.
          </li>
          <li>
            <span>Sports events:</span> Nadharia Kenya has launched Nadharia football and
            basketball teams, specifically catering to queer women. These sports
            teams aim to provide a safe and inclusive space where queer women
            can engage in sports without facing discrimination, fostering
            dialogue and camaraderie among participants.
          </li>
          <li>
            <span>Camps: NGLHRC (National Gay and Lesbian Human Rights Commission)</span>
            organizes an annual transformative experience called Uzima Camp.
            This camp is designed to meet the unique needs of LBQ
            Trans*diverse/non-binary individuals. It offers an opportunity to
            build networks, enhance skills, and create a supportive community
            environment. Uzima Camp serves as a platform for personal growth and
            empowerment within the LGBTQ+ community.
          </li>
          <li>
            <span>Podcasts:</span> Podcasts such as Blooms in the Dark, The Spread, and
            Channelke also provide platforms for discussions about sexuality,
            gender and sexual expression. Blooms in the Dark (a podcast by
            Creatives Garage) is a collection of short, fictional stories about
            various individuals&apos; experiences navigating the challenges they
            face as a result of their sexual orientation or gender identity. The
            Spread is a podcast hosted by Kaz that offers sexual education for
            everyone regardless of their sexual orientation or gender identity.
            Channelke is a podcast that was started by @magicdyke to teach her
            audience about drag as a tool of liberation and encourage them to be
            proud of their sexual orientation.
          </li>
          <li>
            <span>Kings of Kenya Events:</span> Founded by @Magicdyke, Kings of Kenya is a
            collection of Drag Kings in Kenya that host entertainment events
            like Drag Brunch and also offer Drag make-up classes.
          </li>
        </ol>
        <p>
          It is important to note that the landscape for queer-friendly events
          in Kenya is evolving, and it is recommended to stay connected with
          LGBTQ+ organizations, social media groups, and online platforms to
          stay informed about upcoming events. Additionally, due to the dynamic
          nature of the social and political climate, it is advisable to
          prioritize safety and consider the legal and cultural context when
          attending or participating
        </p>
      </div>
      <div className={styles.article} id="fun-things-to-do" style={{ display: activeSection === "fun-things-to-do" ? "block" : "none" }}>
        <h2>Fun things to do in Nairobi</h2>
        <p>
          There are plenty of fun activities to do in Nairobi. Here are some
          suggestions:
        </p>
        <ol className={styles.eWasteCategories}>
          <li>
            <span>Visit Nairobi National Park:</span> Explore the wildlife and go on a safari
            within the city. Nairobi National Park offers an opportunity to see
            animals like lions, giraffes, zebras, and rhinos in their natural
            habitat.
          </li>
          <li>
            <span>Explore the David Sheldrick Wildlife Trust:</span> Visit the elephant
            orphanage and learn about their conservation efforts. You can
            witness the feeding and playful interactions of the adorable baby
            elephants.
          </li>
          <li>
            <span>Enjoy the Nairobi Railway Museum:</span> Discover the rich history of
            Kenya&apos;s railways at the Nairobi Railway Museum. Explore vintage
            locomotives, carriages, and artifacts that showcase the
            country&apos;s railway heritage
          </li>
          <li>
            <span>Wander through Karura Forest:</span> Take a nature walk or go cycling in
            Karura Forest. This urban oasis offers beautiful trails, waterfalls,
            picnic spots, and even a treetop canopy walk for an immersive
            outdoor experience.
          </li>
          <li>
            <span>Visit the Karen Blixen Museum:</span> Step into the world of the famous
            Danish author Karen Blixen, known for her book &quot;Out of
            Africa.&quot; Explore her former home, now a museum, and learn about
            her life in colonial Kenya.
          </li>
          <li>
            Experience Maasai Market: Immerse yourself in the vibrant Maasai
            Market, where you can find a wide array of traditional crafts,
            jewelry, artwork, and souvenirs. It is a great place to shop for
            unique gifts and support local artisans.
          </li>
          <li>
            <span>Enjoy Nairobi&apos;s Food Scene:</span> Indulge in the diverse culinary
            offerings of Nairobi. From local street food to international
            cuisines, the city boasts a wide range of restaurants, cafes, and
            food markets to satisfy your taste buds.
          </li>
          <li>
            <span>Visit the Nairobi National Museum:</span> Explore Kenya&apos;s rich
            cultural and natural heritage at the Nairobi National Museum.
            Discover fascinating exhibits on art, history, paleontology, and
            archaeology, including the famous fossil exhibits.
          </li>
          <li>
            <span>Discover the Nairobi Railway Station:</span> Marvel at the stunning
            architecture of the Nairobi Railway Station, an iconic landmark in
            the city. Take a stroll around the area and appreciate the
            historical significance of the railway network.
          </li>
          <li>
            <span>Experience Nairobi&apos;s Nightlife:</span> Enjoy the vibrant nightlife
            scene in Nairobi. From trendy bars and clubs to live music venues,
            there are plenty of options to dance,socialize, and have a great
            time.
          </li>
          <li>
            <span>Kuona Trust:</span> This art center in Nairobi organizes regular
            exhibitions, workshops, and art talks. It serves as a platform for
            local artists to showcase their creations and engage with the art
            community.
          </li>
          <li>
            <span>The Goethe-Institute</span> is a renowned cultural institution that promotes
            German language and culture worldwide. The Goethe-Institut Nairobi,
            located in Nairobi, Kenya, plays a significant role in fostering
            cultural exchange
          </li>
          <li>
            <span>Alliance Française:</span> Alliance Française Nairobi regularly hosts art
            exhibitions, cultural events, and performances. It promotes both
            Kenyan and international artists, providing a diverse range of
            artistic experiences.
          </li>
          <li>
            <span>The Godown Arts Centre:</span> Located in Kilimani, The Godown Arts Centre
            hosts art exhibitions, workshops, performances, and cultural events.
            It aims to support and promote contemporary African art.
          </li>
          <li>
            <span>One Off Contemporary Art Gallery:</span> This gallery in Nairobi displays
            contemporary art from established and emerging artists. It hosts
            regular exhibitions, offering a platform for artists to showcase
            their unique creations.
          </li>
          <li>
            <span>Nairobi Art Week:</span> This annual event celebrates Nairobi&apos;s
            vibrant art scene by organizing exhibitions, art tours, workshops,
            and artist talks. It brings together artists, collectors, and art
            enthusiasts to celebrate and appreciate local talent.
          </li>
          <li>
            <span>Circle Art Agency:</span> Circle Art Agency is an art consultancy that
            organizes biannual art auctions in Nairobi. It showcases artworks by
            prominent East African artists, providing an opportunity to purchase
            and collect art.
          </li>
          <li>
            <span>Nairobi Art Centre:</span> This art center hosts exhibitions, workshops,
            and art classes. It aims to nurture and promote artistic talent by
            providing a space for artists to showcase their works and engage
            with the community.
          </li>
          <li>
            <span>Nairobi International Film Festival:</span> This annual film festival
            showcases a diverse selection of local and international films,
            including feature films, documentaries, and short films. It provides
            a platform for filmmakers to share their stories and promotes
            cinematic appreciation in Nairobi.
          </li>
          <li>
            <span>Nairobi Restaurant Week:</span> As a celebration of Nairobi culinary scene,
            this event brings together numerous restaurants across the city.
            During the designated week, participating restaurants offer special
            menus and discounts, allowing food enthusiasts to explore a wide
            range of cuisines
          </li>
          <li>
            <span>Kenyan and African fashion designers</span>. It features runway shows,
            exhibitions, and panel discussions, offering a platform for emerging
            and established designers to display their collections.
          </li>
          <li>
            <span>Koroga Festival</span>: Known as one of the biggest music festivals in
            Nairobi, Koroga Festival combines live music performances, food, and
            art. It features renowned local and international artists from
            various genres, attracting music lovers for a weekend of
            entertainment.
          </li>
          <li>
            <span>Nairobi Wine Festival:</span> Wine enthusiasts can enjoy a selection of
            local and international wines at the Nairobi Wine Festival. The
            event offers tastings, masterclasses, and food pairings, providing a
            unique experience for wine connoisseurs in the city.
          </li>
          <li>
            <span>Nairobi Jazz Festival:</span> Jazz lovers can indulge in the smooth sounds
            of local and international jazz musicians at the Nairobi Jazz
            Festival. The festival features live performances, jam sessions, and
            workshops, creating a vibrant atmosphere for jazz enthusiasts.
          </li>
          <li>
            <span>Nairobi Comic Con:</span> This pop culture convention celebrates comics,
            gaming, animation, and cosplay. It features exhibitions, panel
            discussions, workshops, and competitions, providing a platform for
            fans and creators to come together and showcase their passion for
            geek culture.
          </li>
          <li>
            <span>Art Xperience:</span> This art festival brings together artists, art
            enthusiasts, and collectors to celebrate visual arts in Nairobi. It
            features exhibitions, art talks, workshops, and interactive art
            installations, fostering creativity and appreciation for different
            art forms.
          </li>
          <li>
            <span>Sondeka Festival</span> is a notable creative arts festival in Nairobi,
            Kenya. It is an annual event that celebrates various forms of
            creativity, including music, art, fashion, film, and technology.
          </li>
        </ol>
        <p>
          These are just a few of the many exciting activities Nairobi has to
          offer. Whether you&apos;re interested in nature, culture, history, or
          entertainment, the city has something for everyone to enjoy.
        </p>
        <div id="dance-classes">
          <h2>Dance classes in Kenya</h2>
          <p>
            There are various dance classes available in Kenya where individuals
            can learn and enhance their dancing skills. Here are some popular
            dance classes and studios in Kenya:
          </p>
          <ol className={styles.eWasteCategories}>
            <li>
              Sarakasi Trust: Located in Nairobi, Sarakasi Trust offers a wide
              range of dance classes, including contemporary, hip-hop, salsa,
              African dance, and more. They cater to different age groups and
              skill levels.
            </li>
            <li>
              Dance Center Kenya: Situated in Nairobi, Dance Center Kenya offers
              classes in ballet, contemporary, jazz, and tap dance. They have
              programs for both children and adults, taught by experienced
              instructors.
            </li>
            <li>
              Out of the Box Dance Company: Based in Nairobi, Out of the Box
              Dance Company offers classes in various styles like hip-hop,
              afro-fusion, dancehall, and street dance. They focus on energetic
              and dynamic choreography.
            </li>
            <li>
              Lavington School of Dance: Located in Nairobi, Lavington School of
              Dance provides classes in ballet, modern, tap, and jazz dance.
              They have classes for different age groups and skill levels, from
              beginners to advanced.
            </li>
            <li>
              Alliance Française: With branches in Nairobi and Mombasa, Alliance
              Française organizes regular dance workshops and classes. They
              cover a range of styles, including African, salsa, contemporary,
              and more.
            </li>
            <li>
              Nairobi Dance Project: Nairobi Dance Project offers a variety of
              dance classes, workshops, and intensives in different styles such
              as contemporary, urban, and traditional African dance. They focus
              on nurturing creativity and artistic expression.
            </li>
          </ol>
        </div>
        <div id="painting-workshops">
          <h2>Painting events and Workshops</h2>
          <p>
            There are various painting events and workshops that take place in
            Kenya, providing opportunities for artists and art enthusiasts to
            explore their creativity and engage with the local art scene. Here
            are some examples of painting events in Kenya:
          </p>
          <ol className={styles.eWasteCategories}>
            <li>
              Nairobi Art Week: Nairobi Art Week is an annual event that
              celebrates visual arts in Nairobi. It includes painting
              exhibitions, art workshops, artist talks, and art tours, providing
              a platform for artists to showcase their works and engage with the
              audience.
            </li>
            <li>
              Paint and Sip Sessions: Paint and Sip sessions are popular events
              where participants can enjoy a relaxed painting experience while
              sipping on their favorite beverages. These events often take place
              in art studios or designated venues and provide step-by-step
              guidance for creating a painting.
            </li>
            <li>
              Art Galleries and Exhibitions: Many art galleries in Kenya
              regularly host painting exhibitions, showcasing the works of local
              and international artists. These exhibitions provide an
              opportunity to appreciate various painting styles and themes.
            </li>
            <li>
              Art Classes and Workshops: Several art studios and institutions
              offer painting classes and workshops throughout the year. These
              classes cater to different skill levels and provide guidance on
              various painting techniques and styles.
            </li>
            <li>
              Art Competitions: Art competitions occasionally include painting
              categories, allowing artists to showcase their skills and compete
              for recognition and prizes. These competitions often have specific
              themes or topics that participants need to interpret through their
              paintings.
            </li>
            <li>
              Community Art Projects: Some community organizations and art
              collectives organize painting events as part of community art
              projects. These projects aim to engage the local community in
              creating public art and promoting artistic expression.
            </li>
          </ol>
          <p>
            To stay updated on painting events in Kenya, consider following
            local art galleries, art studios, and art organizations on social
            media, checking event listings in newspapers or online platforms
            dedicated to the arts. Additionally, joining art communities and
            networking with fellow artists can provide valuable information
            about upcoming painting events.
          </p>
        </div>
      </div>
    </div>
  );
}
