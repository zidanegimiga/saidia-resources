import React, { useState } from "react";
import styles from "./support.module.scss";
import Nav from "@/components/Nav/Nav";
import Head from "next/head";
import SideNav from "@/components/SideNav";

const Support = () => {
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
      <div className={styles.article}>
        <h2>Organizations supporting the Kenyan LGBTQ+ community</h2>
        <p>
          These organizations play a crucial role in promoting inclusivity,
          advocating for equal rights, and providing support to LGBTQ+
          individuals and communities. Here is a summary of each organization:
        </p>
        <ol>
          <li>
            PEMA-Kenya: PEMA-Kenya is an LGBTQ+ membership-based organization
            founded in 2008. They work towards creating an enabling environment
            for LGBTQ+ individuals and the general population to thrive in
            Kenya.
          </li>
          <li>
            GALCK+ (Gay and Lesbian Coalition of Kenya): GALCK+ is the national
            umbrella body representing all LGBTQ+ voices in Kenya. They aim to
            bridge the gap between the general population and the LGBTQ+
            community through alliances and relationships with government
            institutions and civil society organizations.
          </li>
          <li>
            NGLHRC (National Gay and Lesbian Human Rights Commission): NGLHRC
            was founded in 2012 and provides a national legal aid response
            mechanism for Kenya&apos;s LGBTQ+ community. They address
            discrimination based on sexual orientation and gender identity,
            aiming to protect the human rights of LGBTQ+ individuals.
          </li>
          <li>
            Jinsiangu Kenya: Jinsiangu is an organization established in 2012
            that focuses on creating safe spaces and enhancing the well-being of
            intersex, transgender, and gender non-conforming individuals in
            Kenya.
          </li>
          <li>
            Q-Initiative: Q-Initiative was founded in 2010 by lesbian, gay, and
            bisexual students from Moi University. They provide a safe space for
            queer youth to convene, discuss their issues, and promote
            empowerment and awareness among the lesbian, gay, and bisexual youth
            community
          </li>
          <li>
            Queer Hive: Queer Hive is a Nairobi-based organization that focuses
            on empowering young women and gender non-conforming individuals in
            exercising their rights, particularly in producing and accessing
            critical information on gender and sexuality.
          </li>
          <li>
            LEHA (Lesbian, Bisexual, and Queer Activists): LEHA was formed in
            2015 to address the needs and concerns of the rural lesbian,
            bisexual, and queer community in the Mount Kenya region. They work
            on various thematic areas such as health, advocacy, research, and
            economic empowerment.
          </li>
          <li>
            UKWELI (Usawa Kwa Wote Initiative) Mombasa: UKWELI Mombasa is an
            organization that provides capacity building, advocacy, and support
            in sexual and reproductive health, legal issues, and economic
            empowerment for sexual and gender minorities in South Coast and
            Kwale County
          </li>
          <li>
            Ishtar MSM: Ishtar MSM is a lobby and advocacy platform for men who
            have sex with men (MSM) in Kenya. They focus on advancing sexual
            health, providing service delivery, community development, and
            research for MSM in the country.
          </li>
          <li>
            Talanta Africa: Talanta Africa is a network of artists and activists
            who use art, culture, media, and technology to amplify the voices of
            LGBTQI+ individuals and youth.
          </li>
          <li>
            HOYMAS (Health Options for Young Men on HIV/AIDS/STI): HOYMAS,
            founded in 2009, is a community-based organization that serves male
            sex workers and young men, providing knowledge on safe sex,
            preventive materials, general information, and economic empowerment.
          </li>
          <li>
            LBTQ (CBO) Western Kenya LBQT Feminist Forum: This organization
            focuses on women&apos;s rights and is led by women. They center
            intersectional feminism in their advocacy efforts, with a specific
            focus on lesbian, bisexual, trans*, intersex, and
            gender-nonconforming individuals.
          </li>
          <li>
            Nadharia Kenya is a vibrant organization that focuses on supporting
            transgender and non-binary individuals in Kenya. It was established
            in 2019 as a response to the rising cases of violence against
            non-binary and trans people, which were further exacerbated by the
            COVID-19 pandemic. Over the past two years, Nadharia Kenya has
            observed an increase in reports of homelessness, economic
            challenges, disinheritance, and hostile family environments among
            LGBTIQ+ youth. These issues have contributed to higher rates of drug
            abuse, school dropout, and mental health deterioration within this
            community. The organization strives to create safe spaces, including
            a transitional safe house, where these individuals can find support.
            Additionally, Nadharia Kenya engages in income-generating activities
            and provides capacity strengthening programs for the beneficiaries
            of the safe house. By providing a safe environment, economic
            opportunities, and capacity building, Nadharia Kenya seeks to
            empower and uplift the lives of transgender and non-binary
            individuals in Kenya.
          </li>
          <li>
            AFRA Kenya, which stands for Artists For Recognition and Acceptance,
            is an organization that was established in 2008 by Cate Kamunde and
            Rose Wanjiku, two queer women. AFRA is unique in Kenya as it
            incorporates arts as a means of organizing and empowering LBQ
            (lesbian, bisexual, and queer) women. The mission of AFRA Kenya is
            to be a creative organization aligned with women, addressing
            oppression by creating spaces that inspire conversations on sexual
            orientation and gender identity/expression (SOGIE) issues in Kenya.
            They aim to challenge societal norms and foster understanding and
            acceptance of LBQ women. The vision of AFRA Kenya is to contribute
            to an awakened, liberal, equitable, and inclusive society in Kenya.
            Through their work, they strive to bring about positive change and
            create a society where LBQ women are recognized, respected, and
            embraced.
          </li>
          <li>
            Bold Network is a firm committed to telling real and inspiring
            stories of the African queer people. By doing this, we demystify
            stereotypes and encourage acceptance in the continent and around the
            world! Our mission is to advocate for inclusivity and laws that will
            protect the queer community through the impactful stories we tell.
            We will serve as a resounding voice for the underserved and
            disenfranchised, encouraging people in the queer community to be
            proud and bold! We want people to know that the queer community is
            more than just their sexuality. They are inspiring visionaries,
            movers and shakers. Above all, they are human beings.
          </li>
          <li>
            Creatives Garage: Creatives Garage, a dynamic and multifaceted
            organization, is not only championing creativity but also actively
            supporting LGBTQ+ individuals in the creative industry. With a firm
            commitment to inclusivity, they are breaking barriers and creating
            opportunities for LGBTQ+ creatives to thrive. One of the
            cornerstones of Creatives Garage&apos;s initiative is empowering
            LGBTQ+ creatives to create their works, be it in art, design,
            literature, or any other creative field. By offering resources,
            mentorship, and workshops, they ensure that LGBTQ+ artists have the
            tools they need to bring their visions to life. Moreover, Creatives
            Garage understands that access to markets is vital for any
            artist&apos;s success. To this end, they actively facilitate
            opportunities for LGBTQ+ creatives to showcase and sell their work.
            This exposure not only elevates their careers but also helps break
            down barriers and challenge stereotypes. What sets Creatives Garage
            apart is their genuine commitment to inclusivity. A significant
            portion of their team is comprised of LGBTQ+ individuals, who bring
            their unique perspectives and experiences to the organization. This
            diversity fosters an environment where everyone&apos;s voices are
            valued and respected.
          </li>
        </ol>
      </div>
      <div className={styles.article} id="violence-statistics">
        <h2>
          Unmasking the Harsh Reality: Statistics on Violence Against
          Kenya&apos;s Queer Community
        </h2>
        <p>
          Violence and discrimination against the LGBTQ+ community in Kenya
          continue to be a distressing reality. Shocking statistics reveal the
          alarming prevalence of assault cases, the reluctance to report
          incidents due to fear of authorities, and the heart-wrenching list of
          lives lost within the queer community in recent years.
        </p>
        <p>
          The Fear of Reporting: According to GLACK+, an LGBTQ+ rights
          organization in Kenya, a staggering 29% of LGBTQ+ individuals choose
          not to report assault cases. This hesitancy stems from the slow
          response of authorities and the fear of further harassment,
          exacerbating the vulnerability of queer individuals.
        </p>
        <p>
          Alarming Assault Rates: A deeply troubling statistic exposes that over
          53% of LGBTQ+ people in Kenya have faced physical assault. This means
          that one in every two individuals within the community has suffered
          violence, underscoring the urgency for change and protection of human
          rights.
        </p>
        <p>
          GLACK+&apos;s Disturbing Monthly Reports: GLACK+ receives an average
          of at least 10 reports of violence against LGBTQ+ individuals every
          month. These cases shed light on the pervasive nature of
          discrimination and violence faced by the queer community and the
          urgent need for comprehensive intervention.
        </p>
        <p>
          Tragic Losses Reported by the Media: Over the last few years, the
          media has reported several heartbreaking deaths within the LGBTQ+
          community:
        </p>
        <ul>
          <li>
            2021: Chriton Atuhwera, a Ugandan gay refugee, lost his life in the
            bombing of an LGBTQ+ compound at Kakuma refugee camp.
          </li>
          <li>2021: Erica Chandra, a trans woman, tragically passed away.</li>
          <li>
            2021: Joash Mosoti, a dedicated LGBTQ+ activist, was mourned after
            his untimely death.
          </li>
          <li>2022: Sheila Lumumba, a non-binary lesbian, lost her life.</li>
          <li>
            2022: Rose Mbesa, a 50-year-old non-binary woman, was taken from us.
          </li>
          <li>
            2023: Edwin Chiloba, a gay individual, faced a devastating fate.
          </li>
          <li>
            *2020: Aneste Mwiru, a Ugandan gay refugee, allegedly died by
            suicide, though there are allegations of involvement by UNHCR
            security guards.
          </li>
        </ul>
        <p>
          The Path Forward: The distressing statistics and tragic losses
          underscore the urgent need for systemic change to protect and empower
          Kenya&apos;s LGBTQ+ community. Creating safe spaces, combating
          discrimination, and fostering acceptance are critical steps towards
          ensuring a brighter and more inclusive future for all individuals,
          regardless of their sexual orientation or gender identity.
        </p>
        <p>
          Collectively, as a society, we must stand against violence and
          discrimination, promoting a culture of understanding, respect, and
          love. By acknowledging the harsh reality faced by the LGBTQ+
          community, we can work together towards a more compassionate and equal
          Kenya.
        </p>
      </div>
    </div>
  );
};

export default Support;
