import React, { useState } from "react";
import styles from "./support.module.scss";
import Nav from "@/components/Nav/Nav";
import Head from "next/head";
import Link from "next/link";
import { setOriginalNode } from "typescript";
import { legal, business } from "@/Data/categories";
import { Accordion } from "@/components/Accordion";
import SideNav from "@/components/SideNav";

export default function Events() {
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
      <div className={styles.article} id="inclusive-events">
        <h2>
          Embracing LGBTQ+ Inclusivity: Fun Events and Activities in Kenya
        </h2>
        <p>
          In recent years, there has been a growing acceptance and recognition
          of the LGBTQ+ community in Kenya, leading to the emergence of
          queer-friendly events and spaces. While the availability of such
          events may vary, here are some examples of queer-friendly events that
          have taken place or are likely to occur in Kenya:
        </p>
        <ol>
          <li>
            Nairobi Queer Film Festival: This annual event showcases a selection
            of films that explore LGBTQ+ themes and experiences. It provides a
            platform for queer filmmakers to share their work and for the
            community to come together and engage in dialogue.
          </li>
          <li>
            Art Exhibitions: Various art exhibitions in Kenya feature queer
            artists and explore LGBTQ+ themes. These exhibitions provide a space
            for artistic expression and create opportunities for dialogue and
            understanding.
          </li>
          <li>
            LGBTQ+ Workshops and Talks: Organizations like AFRA Kenya and other
            LGBTQ+ rights groups often organize workshops, panel discussions,
            and talks on topics related to sexual orientation, gender identity,
            and LGBTQ+ rights. These events aim to educate and create awareness
            while fostering a supportive environment.
          </li>
          <li>
            Queer Parties and Social Gatherings: There are occasional queer
            parties and social gatherings organized in Kenya, particularly in
            urban areas like Nairobi. These events provide a space for the
            LGBTQ+ community and allies to socialize, connect, and celebrate.
            Here are some exciting parties and events worth checking out: The
            Whine Down, Monateng Music, Dance classes at Birds of Paradise and
            the Wanderlust Party.
          </li>
          <li>
            Sports events: Nadharia Kenya has launched Nadharia football and
            basketball teams, specifically catering to queer women. These sports
            teams aim to provide a safe and inclusive space where queer women
            can engage in sports without facing discrimination, fostering
            dialogue and camaraderie among participants.
          </li>
          <li>
            Camps: NGLHRC (National Gay and Lesbian Human Rights Commission)
            organizes an annual transformative experience called Uzima Camp.
            This camp is designed to meet the unique needs of LBQ
            Trans*diverse/non-binary individuals. It offers an opportunity to
            build networks, enhance skills, and create a supportive community
            environment. Uzima Camp serves as a platform for personal growth and
            empowerment within the LGBTQ+ community.
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
      <div className={styles.article} id="painting-workshops">
        <h2>Painting events and Workshops</h2>
        <p>
          There are various painting events and workshops that take place in
          Kenya, providing opportunities for artists and art enthusiasts to
          explore their creativity and engage with the local art scene. Here are
          some examples of painting events in Kenya:
        </p>
        <ol>
          <li>
            Nairobi Art Week: Nairobi Art Week is an annual event that
            celebrates visual arts in Nairobi. It includes painting exhibitions,
            art workshops, artist talks, and art tours, providing a platform for
            artists to showcase their works and engage with the audience.
          </li>
          <li>
            Paint and Sip Sessions: Paint and Sip sessions are popular events
            where participants can enjoy a relaxed painting experience while
            sipping on their favorite beverages. These events often take place
            in art studios or designated venues and provide step-by-step
            guidance for creating a painting.
          </li>
          <li>
            Art Galleries and Exhibitions: Many art galleries in Kenya regularly
            host painting exhibitions, showcasing the works of local and
            international artists. These exhibitions provide an opportunity to
            appreciate various painting styles and themes.
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
          To stay updated on painting events in Kenya, consider following local
          art galleries, art studios, and art organizations on social media,
          checking event listings in newspapers or online platforms dedicated to
          the arts. Additionally, joining art communities and networking with
          fellow artists can provide valuable information about upcoming
          painting events.
        </p>
      </div>

      <div className={styles.article} id="fun-things-to-do">
        <h2>Fun things to do in Nairobi</h2>
        <p>
          There are plenty of fun activities to do in Nairobi. Here are some
          suggestions:
        </p>
        <ol>
          <li>
            Visit Nairobi National Park: Explore the wildlife and go on a safari
            within the city. Nairobi National Park offers an opportunity to see
            animals like lions, giraffes, zebras, and rhinos in their natural
            habitat.
          </li>
          <li>
            Explore the David Sheldrick Wildlife Trust: Visit the elephant
            orphanage and learn about their conservation efforts. You can
            witness the feeding and playful interactions of the adorable baby
            elephants.
          </li>
          <li>
            Enjoy the Nairobi Railway Museum: Discover the rich history of
            Kenya&apos;s railways at the Nairobi Railway Museum. Explore vintage
            locomotives, carriages, and artifacts that showcase the
            country&apos;s railway heritage
          </li>
          <li>
            Wander through Karura Forest: Take a nature walk or go cycling in
            Karura Forest. This urban oasis offers beautiful trails, waterfalls,
            picnic spots, and even a treetop canopy walk for an immersive
            outdoor experience.
          </li>
          <li>
            Visit the Karen Blixen Museum: Step into the world of the famous
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
            Enjoy Nairobi&apos;s Food Scene: Indulge in the diverse culinary
            offerings of Nairobi. From local street food to international
            cuisines, the city boasts a wide range of restaurants, cafes, and
            food markets to satisfy your taste buds.
          </li>
          <li>
            Visit the Nairobi National Museum: Explore Kenya&apos;s rich
            cultural and natural heritage at the Nairobi National Museum.
            Discover fascinating exhibits on art, history, paleontology, and
            archaeology, including the famous fossil exhibits.
          </li>
          <li>
            Discover the Nairobi Railway Station: Marvel at the stunning
            architecture of the Nairobi Railway Station, an iconic landmark in
            the city. Take a stroll around the area and appreciate the
            historical significance of the railway network.
          </li>
          <li>
            Experience Nairobi&apos;s Nightlife: Enjoy the vibrant nightlife
            scene in Nairobi. From trendy bars and clubs to live music venues,
            there are plenty of options to dance,socialize, and have a great
            time.
          </li>
          <li>
            Kuona Trust: This art center in Nairobi organizes regular
            exhibitions, workshops, and art talks. It serves as a platform for
            local artists to showcase their creations and engage with the art
            community.
          </li>
          <li>
            The Goethe-Institut is a renowned cultural institution that promotes
            German language and culture worldwide. The Goethe-Institut Nairobi,
            located in Nairobi, Kenya, plays a significant role in fostering
            cultural exchange
          </li>
          <li>
            Alliance Française: Alliance Française Nairobi regularly hosts art
            exhibitions, cultural events, and performances. It promotes both
            Kenyan and international artists, providing a diverse range of
            artistic experiences.
          </li>
          <li>
            The Godown Arts Centre: Located in Nairobi&apos;s Industrial Area,
            The Godown Arts Centre hosts art exhibitions, workshops,
            performances, and cultural events. It aims to support and promote
            contemporary African art.
          </li>
          <li>
            One Off Contemporary Art Gallery: This gallery in Nairobi displays
            contemporary art from established and emerging artists. It hosts
            regular exhibitions, offering a platform for artists to showcase
            their unique creations.
          </li>
          <li>
            Nairobi Art Week: This annual event celebrates Nairobi&apos;s
            vibrant art scene by organizing exhibitions, art tours, workshops,
            and artist talks. It brings together artists, collectors, and art
            enthusiasts to celebrate and appreciate local talent.
          </li>
          <li>
            Circle Art Agency: Circle Art Agency is an art consultancy that
            organizes biannual art auctions in Nairobi. It showcases artworks by
            prominent East African artists, providing an opportunity to purchase
            and collect art.
          </li>
          <li>
            Nairobi Art Centre: This art center hosts exhibitions, workshops,
            and art classes. It aims to nurture and promote artistic talent by
            providing a space for artists to showcase their works and engage
            with the community.
          </li>
          <li>
            Nairobi International Film Festival: This annual film festival
            showcases a diverse selection of local and international films,
            including feature films, documentaries, and short films. It provides
            a platform for filmmakers to share their stories and promotes
            cinematic appreciation in Nairobi.
          </li>
          <li>
            Nairobi Restaurant Week: As a celebration of Nairobi culinary scene,
            this event brings together numerous restaurants across the city.
            During the designated week, participating restaurants offer special
            menus and discounts, allowing food enthusiasts to explore a wide
            range of cuisines
          </li>
          <li>
            Nairobi Fashion Week: This fashion event showcases the talents of
            Kenyan and African fashion designers. It features runway shows,
            exhibitions, and panel discussions, offering a platform for emerging
            and established designers to display their collections.
          </li>
          <li>
            Koroga Festival: Known as one of the biggest music festivals in
            Nairobi, Koroga Festival combines live music performances, food, and
            art. It features renowned local and international artists from
            various genres, attracting music lovers for a weekend of
            entertainment.
          </li>
          <li>
            Nairobi Wine Festival: Wine enthusiasts can enjoy a selection of
            local and international wines at the Nairobi Wine Festival. The
            event offers tastings, masterclasses, and food pairings, providing a
            unique experience for wine connoisseurs in the city.
          </li>
          <li>
            Nairobi Jazz Festival: Jazz lovers can indulge in the smooth sounds
            of local and international jazz musicians at the Nairobi Jazz
            Festival. The festival features live performances, jam sessions, and
            workshops, creating a vibrant atmosphere for jazz enthusiasts.
          </li>
          <li>
            Nairobi Comic Con: This pop culture convention celebrates comics,
            gaming, animation, and cosplay. It features exhibitions, panel
            discussions, workshops, and competitions, providing a platform for
            fans and creators to come together and showcase their passion for
            geek culture.
          </li>
          <li>
            Art Xperience: This art festival brings together artists, art
            enthusiasts, and collectors to celebrate visual arts in Nairobi. It
            features exhibitions, art talks, workshops, and interactive art
            installations, fostering creativity and appreciation for different
            art forms.
          </li>
          <li>
            Sondeka Festival is a notable creative arts festival in Nairobi,
            Kenya. It is an annual event that celebrates various forms of
            creativity, including music, art, fashion, film, and technology.
          </li>
        </ol>
        <p>
          These are just a few of the many exciting activities Nairobi has to
          offer. Whether you&apos;re interested in nature, culture, history, or
          entertainment, the city has something for everyone to enjoy.
        </p>
      </div>
      <div className={styles.article} id="banks-in-kenya">
        <h2>Which banks operate in Kenya</h2>
        <p>Here is a summary of some prominent banks in Kenya:</p>
        <ol>
          <li>
            Equity Bank:
            <p>
              Largest bank in terms of customer base. Offers a wide range of
              banking products and services. Known for its innovative mobile
              banking platform, Equitel.
            </p>
          </li>
          <li>
            KCB Bank (Kenya Commercial Bank):
            <p>
              One of the oldest and largest banks in Kenya. Offers various
              banking services, including personal banking, business banking,
              and corporate banking. Has an extensive branch and ATM network
              across the country.
            </p>
          </li>
          <li>
            Cooperative Bank of Kenya:
            <p>
              Provides banking services to individuals, SMEs, and corporate
              clients. Known for its cooperative model and focus on supporting
              the agricultural sector. Offers a range of financial products,
              including loans, savings accounts, and insurance.
            </p>
          </li>
          <li>
            Standard Chartered Bank Kenya:
            <p>
              Part of the global Standard Chartered Group. Offers a wide range
              of banking and financial services to individuals, businesses, and
              corporate clients. Provides international banking services, trade
              finance, and wealth management solutions.
            </p>
          </li>
          <li>
            ABSA
            <p>
              Operates as Absa Kenya following the rebranding from Barclays Bank
              of Kenya. Offers personal banking, business banking, and corporate
              banking services. Provides digital banking solutions and has a
              strong presence in the Kenyan market.
            </p>
          </li>
          <li>
            Stanbic Bank Kenya:
            <p>
              Part of the Standard Bank Group. Offers corporate and investment
              banking services, as well as personal banking solutions. Provides
              a range of financial products, including loans, savings accounts,
              and investment options.
            </p>
          </li>
          <li>
            Commercial Bank of Kenya:
            <p>
              Merged with NIC Bank to form NCBA Bank. Offers retail banking,
              corporate banking, and treasury services. Known for its mobile
              banking platform, M-Shwari, which provides micro-loans and savings
              options.
            </p>
          </li>
          <li>
            Diamond Trust Bank:
            <p>
              Operates in Kenya and other East African countries. Provides
              banking services to individuals, businesses, and corporate
              clients. Offers a variety of financial products, including loans,
              savings accounts, and trade finance.
            </p>
          </li>
        </ol>
      </div>
      <div className={styles.article} id="banks-with-the-best-rates">
        <h2>Which Bank has the best interest rates</h2>
        <p>
          Determining the bank with the best interest rates in Kenya can depend
          on various factors, including the type of account, the deposit amount,
          and the specific time period. Interest rates can also change over
          time, so it is recommended to check with different banks to get the
          most up-to-date information. Here are a few banks that are known for
          offering competitive interest rates:
        </p>
        <ol>
          <li>
            Sidian Bank: Known for its attractive interest rates on savings
            accounts and fixed deposits.
          </li>
          <li>
            Family Bank: Offers competitive interest rates on various savings
            and investment accounts.
          </li>
          <li>
            CFC Stanbic Bank: Provides competitive interest rates on fixed
            deposits and savings accounts.
          </li>
          <li>
            I&M Bank: Offers competitive interest rates on savings accounts and
            fixed deposits
          </li>
          <li>
            Standard Chartered Bank: Known for its competitive interest rates on
            time deposits and savings accounts.
          </li>
        </ol>
        <p>
          It is important to note that interest rates can vary based on the
          specific account type and the amount of funds deposited. Additionally,
          banks may offer promotional rates or customized rates for specific
          customers, so it is advisable to contact the banks directly or visit
          their websites to get the most accurate and up-to-date information on
          interest rates.
        </p>
      </div>
      <div className={styles.article} id="banks-best-for-startups">
        <h2>What banks are best for Business Start ups</h2>
        <p>
          Several banks in Kenya offer services and support tailored to business
          start-ups. Here are a few banks that are often recommended for
          entrepreneurs and business start-ups:
        </p>
        <ol>
          <li>
            KCB Bank: KCB Bank has a dedicated department that focuses on
            serving SMEs and start-up businesses. They offer business accounts,
            loans, and various business advisory services to help entrepreneurs
            navigate the challenges of starting and growing a business.
          </li>
          <li>
            Cooperative Bank of Kenya: The Cooperative Bank has a strong focus
            on supporting SMEs and offers various financial products and
            services specifically tailored for start-ups. They provide business
            accounts, loans, trade finance solutions, and business advisory
            services.
          </li>
          <li>
            Diamond Trust Bank (DTB): DTB offers a range of banking services for
            business start-ups, including business accounts, loans, and trade
            finance solutions. They have specialized teams that provide guidance
            and support to entrepreneurs throughout the business start-up
            process.
          </li>
          <li>
            Standard Chartered Bank: Standard Chartered Bank has a dedicated
            unit called &quot;Business Banking&quot; that focuses on providing
            banking solutions for SMEs and start-ups. They offer business
            accounts, loans, cash management services, and trade finance
            solutions.
          </li>
        </ol>
      </div>
    </div>
  );
}
