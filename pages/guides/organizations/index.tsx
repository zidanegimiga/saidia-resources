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
        <h2 id="organisations-supporting-the-lgbtq">Organizations supporting the Kenyan LGBTQ+ community</h2>
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
      <div className={styles.article} id={"audrey"}>
        <h2>
          Audrey&apos;s Journey: Breaking Barriers for Transgender Rights in
          Kenya
        </h2>
        <p>
          In the heart of Kenya, a courageous and determined individual named
          Audrey Mbugua was on a mission to challenge the norms and fight for
          the rights of transgender people. Born as a male in 1984, Audrey
          always felt a deep connection with her true identity—a woman. From a
          young age, she knew that living as her authentic self was her ultimate
          goal.
        </p>
        <p>
          Audrey&apos;s journey to self-discovery and acceptance was not an easy
          one. Growing up, she faced the weight of societal expectations,
          struggling with her identity while trying to conform to the gender
          assigned to her at birth. The feeling of discomfort and depression
          grew stronger over the years, leading her to a dark place where she
          attempted to take her own life.
        </p>
        <p>
          Rescued from her desperate act, Audrey found herself seeking help and
          support at Mathari Hospital. It was there that she was diagnosed with
          Gender Identity Disorder, a condition rarely discussed or understood
          in Kenya at that time. This was the turning point for Audrey, as she
          embarked on a path of self-acceptance and empowerment.
        </p>
        <p>
          With determination, Audrey sought counseling and began hormonal
          treatment to align her physical appearance with her true self. She
          dreamed of living as a woman, and she was determined to make it a
          reality.
        </p>
        <p>
          In a groundbreaking move, Audrey became the first transgender woman in
          East Africa to lawfully change her name in official documents. No
          longer going by Andrew, she embraced her true identity as Audrey, the
          woman she had always known herself to be.
        </p>
        <p>
          Audrey&apos;s fight for recognition did not end there. In a landmark
          case against the Kenya National Examinations Council (KNEC), she
          challenged the name and gender marker listed on her academic
          certificates. The court ruled in her favor, ordering the KNEC to
          change her name to Audrey and remove the male gender marker. This
          victory was a significant step towards creating a more inclusive
          society for transgender individuals.
        </p>
        <p>
          Audrey&apos;s unwavering advocacy and determination did not go
          unnoticed. In 2014, she was nominated for the prestigious Human Rights
          Tulip award by the Dutch Ministry of Foreign Affairs. Her activism and
          relentless pursuit of justice were recognized on an international
          stage, bringing attention to the struggles and triumphs of transgender
          people in Kenya.
        </p>
        <p>
          Inspired by her own journey, Audrey founded a groundbreaking
          organization—a transgender-led international nonprofit—the first of
          its kind in Africa. Through this organization, she continued to fight
          for the rights of transgender individuals, breaking barriers and
          challenging societal prejudices.
        </p>
        <p>
          Despite the challenges Audrey faced along the way, she never gave up
          on her mission. She forged ahead, facing adversity with grace and
          strength. Her passion for justice and equality fueled her advocacy,
          and she became a beacon of hope for the transgender community in Kenya
          and beyond.
        </p>
        <p>
          Audrey&apos;s legacy lives on as she continues to lead the charge for
          transgender rights in Kenya. Her story serves as a reminder that
          change is possible, even in the face of deeply ingrained societal
          norms. Through her courage and determination, Audrey opened doors for
          transgender individuals, paving the way for a more inclusive and
          accepting future for all.
        </p>
      </div>
    </div>
  );
};

export default Support;
