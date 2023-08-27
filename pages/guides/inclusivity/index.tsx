import React, { useState } from "react";
import styles from "./support.module.scss";
import Nav from "@/components/Nav/Nav";
import Head from "next/head";
import Link from "next/link";
import { setOriginalNode } from "typescript";
import { legal, business } from "@/Data/categories";
import { Accordion } from "@/components/Accordion";
import SideNav from "@/components/SideNav";

export default function Inclusivity() {
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
      <div className={styles.article} id="">
        <h2>
          Embracing Diversity in the LGBTQ+ Community: A Journey of Empathy and
          Understanding
        </h2>
        <p>
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
        <p id={"types-of-sexualities"}>Sexual Orientations:</p>
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
        <p id={"gender-identities"}>Gender Identities:</p>
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
      </div>
      <div className={styles.article} id="pronouns">
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
        <ol>
          <li>He/Him: Typically used by individuals who identify as male.</li>
          <li>
            She/Her: Typically used by individuals who identify as female.
          </li>
          <li>
            They/Them: This set of pronouns is commonly used by non-binary
            individuals or those who do not exclusively identify as male or
            female.
          </li>
          <li>
            Ze/Hir: These pronouns are sometimes used by individuals who
            identify outside of the traditional gender binary. &quot;Ze&quot; is
            used in place of he/she, and &quot;hir&quot; is used in place of
            him/her.
          </li>
          <li>
            Xe/Xem: These pronouns are used by some individuals who identify
            outside of the gender binary. &quot;Xe&quot; is used in place of
            he/she, and &quot;xem&quot; is used in place of him/her.
          </li>
        </ol>
        <p>
          It is important to remember that individuals may have different
          preferences when it comes to pronouns, and it is always respectful to
          use the pronouns someone specifies for themselves. It is best to ask
          and use the correct pronouns for each person based on their gender
          identity.
        </p>
        <div id="respect-pronouns">
          <h2>Why should you respect people&apos;s pronouns?</h2>
          <p>Respecting pronouns is crucial for several reasons:</p>
          <ol>
            <li>
              Inclusivity: Respecting someone&apos;s pronouns acknowledges and
              affirms their gender identity. It shows that you recognize and
              accept them for who they are, fostering an inclusive and
              supportive environment for all individuals.
            </li>
            <li>
              Dignity and Respect: Using the correct pronouns demonstrates
              respect for a person&apos;s self-identified gender. It affirms
              their autonomy and allows them to be seen and addressed in a way
              that aligns with their true selves, promoting their dignity and
              well-being.
            </li>
            <li>
              Mental Health and Well-being: Misgendering someone by using
              incorrect pronouns can have a significant impact on their mental
              health. It can lead to feelings of invalidation, dysphoria, and
              emotional distress. Respecting pronouns helps create a safer and
              more supportive space for individuals to navigate their gender
              identity.
            </li>
            <li>
              Allyship and Solidarity: Respecting pronouns is an important
              aspect of being an ally to the LGBTQ+ community. It shows support
              and solidarity, signaling that you are actively working to create
              an inclusive society where all individuals are valued and
              respected.
            </li>
            <li>
              Building Trust and Connection: Using the correct pronouns helps
              build trust and fosters positive connections with others. It shows
              that you are actively listening and acknowledging a person&apos;s
              identity, contributing to stronger and more meaningful
              relationships.
            </li>
          </ol>
          <p>
            Overall, respecting pronouns is an essential step towards creating a
            more inclusive, affirming, and understanding society for people of
            all gender identities.
          </p>
        </div>
        <div id="pronouns-importance">
          <h2>Why have pronouns become important in the last few years?</h2>
          <p>
            Pronouns have gained increased visibility and importance in recent
            years due to several factors:
          </p>
          <ol>
            <li>
              Greater Awareness of Gender Diversity: There is now a greater
              understanding and recognition of the spectrum of gender identities
              beyond the traditional binary of male and female. People are
              becoming more aware of non-binary, genderqueer, and gender
              non-conforming individuals who may use pronouns other than he or
              she
            </li>
            <li>
              LGBTQ+ Rights and Activism: The LGBTQ+ rights movement has made
              significant progress in advocating for the rights and visibility
              of diverse gender identities. This includes raising awareness
              about the importance of using correct pronouns to respect and
              affirm individuals&apos; gender identities.
            </li>
            <li>
              Online and Social Media Influence: The rise of social media
              platforms has allowed marginalized communities, including the
              LGBTQ+ community, to connect and share their experiences more
              widely. This has helped amplify conversations around pronouns and
              increase understanding of their significance.
            </li>
            <li>
              Education and Inclusivity Efforts: Schools, workplaces, and
              various organizations have been focusing on promoting inclusivity
              and creating safer spaces for individuals of all gender
              identities. This includes encouraging the use of preferred
              pronouns as a way to foster respect and acceptance.
            </li>
            <li>
              Personal Empowerment and Visibility: Many individuals have
              embraced the use of preferred pronouns as a means of
              self-expression and asserting their gender identity. By sharing
              their pronouns, they can challenge societal norms and increase
              visibility for underrepresented gender identities.
            </li>
          </ol>
        </div>
        <div id="#pronouns-gender">
          <h2>
            Does changing your pronoun mean you have changed your gender marker?
          </h2>
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
          <h2>
            Which organizations in Kenya provide resources, guidance, and
            support for individuals navigating pronoun changes and gender
            identity?
          </h2>
          <p>
            In Kenya, there are several organizations and online communities
            that provide resources, guidance, and support for individuals
            navigating pronoun changes and gender identity. Here are a few
            examples:
          </p>
          <ol>
            <li>
              Transgender Education and Advocacy (TEA) Kenya: TEA Kenya is an
              organization that works to advance the rights and well-being of
              transgender and gender diverse individuals in Kenya. They provide
              resources, support groups, and counseling services for individuals
              navigating gender identity and pronoun changes.
            </li>
            <li>
              Gay and Lesbian Coalition of Kenya (GALCK): GALCK is a national
              umbrella organization that advocates for the rights and inclusion
              of LGBTQ+ individuals in Kenya. They provide support and resources
              for transgender individuals, including guidance on gender identity
              exploration and pronoun use.
            </li>
            <li>
              The National Gay and Lesbian Human Rights Commission (NGLHRC):
              NGLHRC is an organization dedicated to promoting and protecting
              the rights of LGBTQ+ individuals in Kenya. They offer resources,
              legal support, and advocacy services for transgender individuals
              seeking guidance on pronouns and gender identity.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
