import React, { useState } from "react";
import styles from "./support.module.scss";
import Nav from "@/components/Nav/Nav";
import Head from "next/head";
import Link from "next/link";
import SideNav from "@/components/SideNav";
import useHashChange from "@/hooks/useHashChange";
import { useDarkMode } from "@/components/ThemeProvider";
import classnames from 'classnames';
import { Tabs, Box, Text, Callout } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";

export default function Inclusivity() {
  const activeSection = useHashChange();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={classnames(styles.pageWrapper, { [styles.pageWrapperDarkMode]: isDarkMode })}>
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
      <div className={classnames(styles.article, { [styles.articleDarkMode]: isDarkMode })} style={{ display: activeSection.length === 0 ? "block" : "none" }}>
        <h2 >Learn more about what LGBTQ+ means</h2>
        <p >
          The LGBTQ+ community encompasses a beautiful array of identities, each
          contributing a unique and valuable human experience. From Lesbians and
          Gays to Bisexuals, Transgender individuals, Queer individuals,
          Intersex individuals, and Asexual individuals, among others, this
          diverse tapestry enriches our understanding of human existence.
        </p>
        <p>
          Sexual orientations and gender identities are fundamental aspects of
          an individual&apos;s identity and how they experience and express
          their gender and attraction to others. Understanding these differences
          is crucial for promoting inclusivity and respect for all individuals.
          Let&aposs delve into what sexual orientations and gender identities
          entail:
        </p>

        <p style={{fontWeight: 600}} id={"types-of-sexualities"}>Sexual Orientations:</p>
        <ol>
          <li>
            Heterosexual (Straight): Individuals who are attracted to
            individuals of the opposite gender.
          </li>
          <li>
            Homosexual (Gay or Lesbian): Individuals who are attracted to
            individuals of the same gender.
          </li>
          <li>
            Bisexual: Individuals who are attracted to both individuals of their
            own gender and individuals of other genders.
          </li>
          <li>
            Pansexual: Individuals who are attracted to people regardless of
            their gender or gender identity
          </li>
          <li>
            Asexual: Individuals who do not experience sexual attraction to
            anyone or have a lack of interest in sexual activities
          </li>
        </ol>
        <p style={{ fontWeight: 600 }} id={"gender-identities"}>Gender Identities:</p>
        <ol>
          <li>
            Cisgender: Individuals whose gender identity aligns with the sex
            they were assigned at birth. For example, someone assigned female at
            birth identifies as a woman.
          </li>
          <li>
            Transgender: Individuals whose gender identity differs from the sex
            they were assigned at birth. For example, someone assigned male at
            birth identifies as a woman or non-binary.
          </li>
          <li>
            Non-binary: Individuals who do not exclusively identify as male or
            female, but rather as a gender outside the traditional binary.
          </li>
          <li>
            Genderqueer: A term used by individuals who reject traditional
            gender identities and embrace fluid or multiple gender identities.
          </li>
          <li>
            Genderfluid: Individuals whose gender identity shifts or changes
            over time, experiencing different gender expressions at different
            times.
          </li>
        </ol>

        <Callout.Root color="green" mt={"5"} mb={"5"} variant="surface">
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            <p>
              It is essential to recognize that sexual orientations and gender
              identities exist on a broad spectrum, and individuals may identify in
              unique and diverse ways. Respecting and acknowledging these identities
              is crucial for creating an inclusive and supportive environment for
              all individuals, regardless of their sexual orientation or gender
              identity. Embracing diversity and understanding the complexities of
              human identity fosters empathy and paves the way for a more
              compassionate world.
            </p>
            <p>
              In our journey towards acceptance and celebration of diversity, let us
              be allies and champions for the LGBTQ+ community. Together, we can
              create a society where every individual is respected, supported, and
              celebrated for who they truly are, regardless of their sexual
              orientation or gender identity. It all starts with acknowledging the
              shared humanity that unites us and working towards a world that
              embraces empathy, understanding, and love for all
            </p>
          </Callout.Text>
        </Callout.Root>
      </div>
      <div className={classnames(styles.article, { [styles.articleDarkMode]: isDarkMode })} id="pronouns" style={{ display: activeSection === "pronouns" ? "block" : "none" }}>
        <h2>Pronouns</h2>
        <p>
          People&apos;s pronouns are the pronouns they prefer to be addressed
          with based on their gender identity. Pronouns are personal and can
          vary from person to person. It is important to respect and use the
          pronouns that individuals specify for themselves. Some common pronouns
          that people use include he/him, she/her, they/them, ze/zir, xe/xem,
          and many more. It is always best to ask someone for their pronouns if
          you are unsure, and then use those pronouns when referring to
          them.Some commonly used pronouns include:
        </p>
        <ol className={styles.eWasteCategories}>
          <li><span>He/Him:</span> Typically used by individuals who identify as male.</li>
          <li>
            <span> She/Her:</span> Typically used by individuals who identify as female.
          </li>
          <li>
            <span>They/Them:</span> This set of pronouns is commonly used by non-binary
            individuals or those who do not exclusively identify as male or
            female.
          </li>
          <li>
            <span>Ze/Hir:</span> These pronouns are sometimes used by individuals who
            identify outside of the traditional gender binary. &quot;Ze&quot; is
            used in place of he/she, and &quot;hir&quot; is used in place of
            him/her.
          </li>
          <li>
            <span>Xe/Xem:</span>These pronouns are used by some individuals who identify
            outside of the gender binary. &quot;Xe&quot; is used in place of
            he/she, and &quot;xem&quot; is used in place of him/her.
          </li>
        </ol>

        <Callout.Root color="green" mt={"5"} mb={"5"} variant="surface">
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            <p>
              It is important to remember that individuals may have different
              preferences when it comes to pronouns, and it is always respectful to
              use the pronouns someone specifies for themselves. It is best to ask
              and use the correct pronouns for each person based on their gender
              identity.
            </p>
          </Callout.Text>
        </Callout.Root>

        <div id="respect-pronouns">
          <h3 style={{marginTop: "28px", marginBottom: "8px", fontSize: "24px"}}>Why should you respect people&apos;s pronouns?</h3>
          <p>Respecting pronouns is crucial for several reasons:</p>
          <ol className={styles.eWasteCategories}>
            <li>
              <span>Inclusivity:</span> Respecting someone&apos;s pronouns acknowledges and
              affirms their gender identity. It shows that you recognize and
              accept them for who they are, fostering an inclusive and
              supportive environment for all individuals.
            </li>
            <li>
              <span>Dignity and Respect:</span> Using the correct pronouns demonstrates
              respect for a person&apos;s self-identified gender. It affirms
              their autonomy and allows them to be seen and addressed in a way
              that aligns with their true selves, promoting their dignity and
              well-being.
            </li>
            <li>
              <span>Mental Health and Well-being:</span> Misgendering someone by using
              incorrect pronouns can have a significant impact on their mental
              health. It can lead to feelings of invalidation, dysphoria, and
              emotional distress. Respecting pronouns helps create a safer and
              more supportive space for individuals to navigate their gender
              identity.
            </li>
            <li>
              <span>Allyship and Solidarity:</span> Respecting pronouns is an important
              aspect of being an ally to the LGBTQ+ community. It shows support
              and solidarity, signaling that you are actively working to create
              an inclusive society where all individuals are valued and
              respected.
            </li>
            <li>
              <span>Building Trust and Connection:</span> Using the correct pronouns helps
              build trust and fosters positive connections with others. It shows
              that you are actively listening and acknowledging a person&apos;s
              identity, contributing to stronger and more meaningful
              relationships.
            </li>
          </ol>

          <Callout.Root color="green" mt={"5"} mb={"5"} variant="surface">
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>
              <p>
                Overall, respecting pronouns is an essential step towards creating a
                more inclusive, affirming, and understanding society for people of
                all gender identities.
              </p>
            </Callout.Text>
          </Callout.Root>
        </div>
        <div id="pronouns-importance">
          <h3 style={{ marginTop: "28px", marginBottom: "8px", fontSize: "24px" }}>Why have pronouns become important in the last few years?</h3>
          <p>
            Pronouns have gained increased visibility and importance in recent
            years due to several factors:
          </p>
          <ol className={styles.eWasteCategories}>
            <li>
              <span>Greater Awareness of Gender Diversity:</span> There is now a greater
              understanding and recognition of the spectrum of gender identities
              beyond the traditional binary of male and female. People are
              becoming more aware of non-binary, genderqueer, and gender
              non-conforming individuals who may use pronouns other than he or
              she
            </li>
            <li>
              <span>LGBTQ+ Rights and Activism:</span> The LGBTQ+ rights movement has made
              significant progress in advocating for the rights and visibility
              of diverse gender identities. This includes raising awareness
              about the importance of using correct pronouns to respect and
              affirm individuals&apos; gender identities.
            </li>
            <li>
              <span>Online and Social Media Influence:</span> The rise of social media
              platforms has allowed marginalized communities, including the
              LGBTQ+ community, to connect and share their experiences more
              widely. This has helped amplify conversations around pronouns and
              increase understanding of their significance.
            </li>
            <li>
              <span>Education and Inclusivity Efforts:</span> Schools, workplaces, and
              various organizations have been focusing on promoting inclusivity
              and creating safer spaces for individuals of all gender
              identities. This includes encouraging the use of preferred
              pronouns as a way to foster respect and acceptance.
            </li>
            <li>
              <span>Personal Empowerment and Visibility:</span> Many individuals have
              embraced the use of preferred pronouns as a means of
              self-expression and asserting their gender identity. By sharing
              their pronouns, they can challenge societal norms and increase
              visibility for underrepresented gender identities.
            </li>
          </ol>
        </div>
        <div id="#pronouns-gender">
          <h3 style={{marginTop: "24px", marginBottom: "8px"}}>
            Does changing your pronoun mean you have changed your gender marker?
          </h3>
          <p>
            No, changing your pronouns does not necessarily mean you have
            changed your legal gender marker. Changing your pronouns is a
            personal choice that individuals make to align with their gender
            identity and how they want to be referred to. It is about expressing
            their true selves and being recognized in a way that feels
            authentic.
          </p>
          <p>
            On the other hand, changing your gender marker refers to updating
            your legal identification documents, such as driver&apos;s licenses,
            passports, or birth certificates, to reflect your gender identity.
            This typically involves a legal process that varies by jurisdiction
            and may require specific documentation or evidence.
          </p>
          <p>
            While changing your pronouns and gender marker can often go hand in
            hand, they are separate processes. Some individuals may change their
            pronouns without pursuing a legal gender marker change, while others
            may undergo both processes as part of their gender transition. It
            ultimately depends on the individual&apos;s personal journey,
            identity, and legal options available to them in their respective
            jurisdiction.
          </p>
        </div>
        <div id="pronouns-gender-change-orgs">
          <h3 style={{ marginTop: "24px", marginBottom: "8px" }}>
            Which organizations in Kenya provide resources, guidance, and
            support for individuals navigating pronoun changes and gender
            identity?
          </h3>
          <p>
            In Kenya, there are several organizations and online communities
            that provide resources, guidance, and support for individuals
            navigating pronoun changes and gender identity. Here are a few
            examples:
          </p>
          <ol className={styles.eWasteCategories}>
            <li>
              <span>Transgender Education and Advocacy (TEA) Kenya:</span> TEA Kenya is an
              organization that works to advance the rights and well-being of
              transgender and gender diverse individuals in Kenya. They provide
              resources, support groups, and counseling services for individuals
              navigating gender identity and pronoun changes.
            </li>
            <li>
              <span>Gay and Lesbian Coalition of Kenya (GALCK):</span> GALCK is a national
              umbrella organization that advocates for the rights and inclusion
              of LGBTQ+ individuals in Kenya. They provide support and resources
              for transgender individuals, including guidance on gender identity
              exploration and pronoun use.
            </li>
            <li>
              <span>The National Gay and Lesbian Human Rights Commission (NGLHRC):</span>
              NGLHRC is an organization dedicated to promoting and protecting
              the rights of LGBTQ+ individuals in Kenya. They offer resources,
              legal support, and advocacy services for transgender individuals
              seeking guidance on pronouns and gender identity.
            </li>
          </ol>
        </div>
      </div>
      <div className={classnames(styles.article, { [styles.articleDarkMode]: isDarkMode })} id="ballroom-culture" style={{ display: activeSection === "ballroom-culture" ? "block" : "none" }}>
        <h2>
          Discovering the Vibrant History of Ballroom Culture: A Safe Haven for
          the LGBTQ+ Community
        </h2>
        <p>
          It&apos;s essential to understand the vibrant history of ballroom
          culture and its significance within the LGBTQ+ community. Rooted in
          the African American and Latino LGBTQ+ communities in the United
          States, ballroom events, also known as balls or drag balls, emerged in
          the 1920s as a response to the discrimination and marginalization
          faced by queer individuals in mainstream society.
        </p>
        <p>
          During this era, LGBTQ+ individuals, particularly those from
          marginalized racial and ethnic backgrounds, experienced intersecting
          forms of discrimination based on their race, sexuality, and gender
          identity. Many found solace, acceptance, and belonging within their
          own communities, forming tight-knit social circles and creating
          underground spaces where they could express themselves freely.
        </p>
        <p>
          Ballroom events provided a platform for queer people to showcase their
          talents, creativity, and individuality in a safe and supportive
          environment. These events often featured competitive performances,
          including elaborate drag shows, voguing battles, and fashion
          competitions. Participants formed houses, which functioned as chosen
          families and support systems within the community. Houses were led by
          mothers and fathers who provided guidance, mentorship, and a sense of
          belonging to their children.
        </p>
        <p>
          The ballroom culture and events gained further visibility and
          popularity in the 1980s and 1990s, partly due to mainstream media
          exposure through documentaries like &quot;Paris Is Burning&quot;
          (1990). This groundbreaking documentary shed light on the vibrant
          ballroom scene in New York City, capturing the creativity, resilience,
          and struggles of the LGBTQ+ individuals involved. It also brought
          attention to the intersections of race, gender, and sexuality in the
          ballroom community.
        </p>
        <p>
          Over time, ballroom culture has expanded and evolved, with variations
          found in different regions and communities around the world. It has
          become an influential cultural phenomenon that has left a mark on
          mainstream fashion, dance, music, and language. Additionally, the
          ballroom community continues to serve as a support system and a source
          of empowerment for LGBTQ+ individuals, particularly those who are
          Black, Latinx, and from other marginalized backgrounds.
        </p>
        <p>
          Today, ballroom events and houses continue to thrive, providing spaces
          for queer people to express themselves authentically and celebrate
          their identities. These events promote inclusivity, self-expression,
          and community building while honoring the rich history and legacy of
          ballroom culture. They remain a sanctuary where LGBTQ+ individuals can
          find acceptance, affirmation, and chosen families who support and
          uplift each other.
        </p>
        <p>
          As a young adult in Kenya, understanding the history of ballroom
          culture and its significance within the LGBTQ+ community can foster
          empathy, appreciation, and respect for the struggles and triumphs of
          queer individuals. Embracing the diversity and complexity of human
          experiences can contribute to a more inclusive and compassionate
          society for everyone.
        </p>
      </div>
      <div className={classnames(styles.article, { [styles.articleDarkMode]: isDarkMode })} id="vigils" style={{ display: activeSection === "vigils" ? "block" : "none" }}>
        <h2>Vigils: Celebrating LGBTQ+ Lives</h2>
        <p>
          Vigils hold a significant place in the hearts of the LGBTQ+ community
          in Kenya and across the world. These gatherings serve as powerful
          reminders of the importance of celebrating life, commemorating lost
          souls, and shedding light on the harrowing statistics of assault and
          killings faced by the Kenyan LGBTQ+ community.
        </p>
        <p>
          Vigils are more than gatherings; they are sacred spaces for
          reflection, solidarity, and resilience. They provide a safe
          environment for the LGBTQ+ community to come together, share stories,
          and support one another during times of grief and adversity. These
          events bring visibility to the challenges faced by LGBTQ+ individuals
          in Kenya and allow for collective healing and empowerment.
        </p>
        <p>
          Amidst the struggles and discrimination, vigils also offer an
          opportunity to celebrate life. They emphasize the strength and
          resilience of the LGBTQ+ community, showcasing the love and bond that
          unite its members. By celebrating life, vigils reaffirm the beauty of
          diversity and the importance of acceptance and understanding.
        </p>
        <p>
          The reality of violence faced by the Kenyan LGBTQ+ community is a
          sobering reminder of the urgent need for change. According to a report
          by the National Gay and Lesbian Human Rights Commission (NGLHRC), a
          staggering number of LGBTQ+ individuals experience assault,
          harassment, and even killings based on their sexual orientation or
          gender identity
        </p>
        <p>
          The statistics reveal that LGBTQ+ individuals are at a higher risk of
          experiencing violence, with transgender individuals facing an even
          higher degree of vulnerability. The fear of persecution often forces
          members of the LGBTQ+ community into the shadows, depriving them of
          their fundamental human rights and dignity.
        </p>
        <p>
          Vigils serve as powerful platforms for the Kenyan LGBTQ+ community to
          come together, remember those who have lost their lives, and advocate
          for a more inclusive and accepting society. It is crucial to
          acknowledge the courage and resilience of the LGBTQ+ individuals who
          continue to stand tall despite the adversity they face.
        </p>
        <p>
          As we commemorate these vigils, let us remember that the fight for
          equality and human rights is ongoing. By standing together in
          solidarity and empathy, we can work towards building a future where
          all individuals are treated with respect and love, irrespective of
          their sexual orientation or gender identity.
        </p>
      </div>
    </div>
  );
}
