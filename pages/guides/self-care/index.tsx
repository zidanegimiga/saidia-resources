"use client"
import React, { useEffect, useState } from "react";
import styles from "./support.module.scss";
import Nav from "@/components/Nav/Nav";
import Head from "next/head";
import SideNav from "@/components/SideNav";
import { useRouter } from "next/router";
import useHashChange from "@/hooks/useHashChange";
import Calendar from "../../../public/el_calendar (1).svg"
import Sleep from "../../../public/tdesign_sleep.svg"
import PhysicalActivity from "../../../public/mdi_gym.svg"
import Meditation from "../../../public/mdi_meditation.svg"
import Paint from "../../../public/mdi_paint-outline.svg"
import Community from "../../../public/fluent_people-community-20-filled.svg"
import SleepingCircle from "../../../public/solar_sleeping-circle-bold.svg"
import SelfLove from "../../../public/mdi_head-love.svg"
import ScreenTime from "../../../public/screen_time.svg"
import ThreeFriends from "../../../public/game-icons_three-friends.svg"
import { useDarkMode } from "@/components/ThemeProvider";
import { Blockquote, Callout, Card, Grid, Separator, Text } from "@radix-ui/themes";
import classnames from 'classnames';
import { InfoCircledIcon } from "@radix-ui/react-icons";

export default function SelfCare() {
  const router = useRouter();
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
      <div className={classnames(styles.article, { [styles.articleDarkMode]: isDarkMode })} style={{ display: activeSection === "" ? "block" : "none" }}>
        <h2>Self-care and Mindfulness</h2>
        <p style={{marginBottom: 48}}>
          Self-care is essential for maintaining overall well-being and
          managing stress. Here are some self-care strategies that can be
          helpful:
        </p>
        <Grid columns={{ sm: "1", lg:"3" }} gap="3" width="auto" className={styles.selfcareStrategiesList}>
          <Card variant="surface">
            <Calendar/>
            <div>
              <h3>1. Establish a Daily Routine</h3>
              <p>Create a structured daily routine that includes time for rest, relaxation, and engaging in activities that bring you joy and fulfillment.</p>
            </div>
          </Card>
          <Card>
            <Sleep/>
            <div>
              <h3>2. Prioritize Sleep</h3>
              <p>Ensure you are getting enough sleep each night. Maintain a consistent sleep schedule and create a relaxing bedtime routine to promote quality sleep.</p>
            </div>
          </Card>
          <Card>
            <PhysicalActivity/>
            <div>
              <h3>3. Physical Activity</h3>
              <p>Regular exercise not only benefits your physical health but also contributes to mental well-being. Find activities you enjoy, such as walking, dancing, yoga, or any form of exercise that gets your body moving.</p>
            </div>
          </Card>
          <Card variant="surface">
            <Meditation/>
            <div>
              <h3>4. Practice Mindfulness and Meditation:</h3>
              <p>Set aside time for mindfulness or meditation practices. This can involve deep breathing exercises, guided meditation, or simply being fully present in the moment.</p>
            </div>
          </Card>
          <Card variant="surface">
            <Community/>
            <div>
              <h3>5. Connect with Others</h3>
              <p>Cultivate and maintain healthy relationships. Spend quality time with loved ones, engage in meaningful conversations, and seek support from friends and family when needed.</p>
            </div>
          </Card>
          <Card variant="surface">
            <Paint/>
            <div><h3>6. Engage in Hobbies and Creative Outlets</h3>
              <p>Explore activities that bring you joy and allow for self-expression. This could include painting, writing, playing an instrument, gardening, or any hobby that sparks your interest.</p></div> 
          </Card>
          <Card variant="surface">
            <SleepingCircle/>
            <div>
              <h3>7. Take Breaks and Rest</h3>
              <p>Allow yourself regular breaks throughout the day to recharge. Step away from work or other responsibilities to engage in relaxing activities or simply rest.</p>
            </div>
          </Card>
          <Card variant="surface">
            <SelfLove/>
            <div>
              <h3>8. Practice Self-Compassion</h3>
              <p>Be kind and gentle with yourself. Treat yourself with the same understanding and compassion you would offer to a friend. Practice positive self-talk and embrace self-acceptance.</p>
            </div>
          </Card>
          <Card variant="surface">
            <ScreenTime/>
            <div>
              <h3>9. Limit Screen Time</h3>
              <p>Set boundaries on the amount of time you spend on electronic devices, social media, and watching screens. Take breaks from technology and engage in activities that do not involve screens</p>
            </div>
          </Card>
          <Card variant="surface">
            <ThreeFriends/>
            <div>
              <h3>10. Seek Support</h3>
              <p>Don&apos;t hesitate to reach out for professional help or support when needed. Therapists, counselors, or support groups can provide guidance and a safe space for exploring your emotions and concerns.</p>
            </div>
          </Card>
        </Grid>

        <Callout.Root color="green" mt={"5"} mb={"5"} variant="surface">
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            <p>
              Remember, self-care looks different for everyone, so it is important
              to find strategies that resonate with you and align with your needs
              and values. Regularly assess your well-being and make adjustments to
              your self-care routine as necessary.
            </p>
          </Callout.Text>
        </Callout.Root>

        <div>
          <h2 style={{ marginBottom: 0, marginTop: 64, fontSize: "28px"}}>Mindfullness Exercises</h2>
          <p style={{ marginTop: "6px", fontSize: "16px" }}>
            Mindfulness exercises can help you cultivate present-moment
            awareness, reduce stress, and promote overall well-being. Here are
            a few mindfulness exercises you can try:
          </p>
          <ol>
            <li>
              Mindful Breathing: Find a comfortable position and focus your
              attention on your breath. Notice the sensation of each inhale
              and exhale. If your mind wanders, gently bring your attention
              back to your breath. Practice this for a few minutes to center
              yourself in the present moment.
            </li>
            <li>
              Body Scan Meditation: Lie down or sit in a comfortable position.
              Close your eyes and slowly bring your attention to different
              parts of your body, starting from your toes and moving upward.
              Notice any sensations, tension, or areas of relaxation. Stay
              present with each part of your body as you scan through it.
            </li>
            <li>
              Five Senses Exercise: Pause for a moment and identify five
              things you can see, four things you can feel, three things you
              can hear, two things you can smell, and one thing you can taste.
              Engaging your senses in this way helps anchor you to the present
              moment.
            </li>
            <li>
              Mindful Eating: Choose a small piece of food, such as a raisin
              or a slice of fruit. Before eating, observe its colors, texture,
              and shape. Slowly take a bite and pay attention to the flavors,
              sensations, and the act of chewing and swallowing. Notice the
              entire experience of eating mindfully.
            </li>
            <li>
              Walking Meditation: Find a quiet place to walk slowly and
              deliberately. Focus your attention on the physical sensations of
              walking—the movement of your feet, the shifting of weight, the
              contact with the ground. Engage with the experience of walking,
              being fully present in each step.
            </li>
            <li>
              Loving-Kindness Meditation: Sit comfortably and bring to mind
              someone you care about deeply, or yourself. Repeat phrases of
              well-wishes and compassion in your mind, such as &quot;May you
              be happy, may you be healthy, may you be safe.&quot; Extend
              these wishes to others, gradually expanding to include all
              beings.
            </li>
          </ol>
          <Callout.Root color="green" mt={"5"} mb={"5"} variant="surface">
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>
              <p>
                Remember, mindfulness is a practice that requires patience and
                consistency. Start with short sessions and gradually increase the
                duration as you become more comfortable. Find what resonates with
                you and incorporate mindfulness into your daily routine for
                greater clarity and presence in your life.
              </p>
            </Callout.Text>
          </Callout.Root>
        </div>

        <Separator orientation="horizontal" my="3" size="4" />
        
        <div id="relaxation-techniques">
          <h2 style={{ marginBottom: 0, marginTop: 64, fontSize: "28px" }}>Relaxation Techniques</h2>
          <p style={{ marginTop: "6px", fontSize: "16px" }}>
            Relaxation techniques can help reduce stress, promote calmness,
            and induce a state of relaxation. Here are a few relaxation
            techniques you can try:
          </p>
          <ol>
            <li>
              Deep Breathing: Find a comfortable position and take slow, deep
              breaths. Inhale deeply through your nose, filling your lungs
              with air, and exhale slowly through your mouth. Focus on your
              breath and let go of any tension or stress with each exhale.
            </li>
            <li>
              Progressive Muscle Relaxation: Start by tensing and then
              releasing different muscle groups in your body, one at a time.
              Begin with your toes, move up to your legs, abdomen, chest,
              arms, and finally to your face. Hold the tension for a few
              seconds and then release, feeling the relaxation in each muscle
              group.
            </li>
            <li>
              Guided Imagery: Close your eyes and imagine yourself in a
              peaceful and calming place, such as a beach or a garden.
              Visualize the details of the scene, engage your senses, and
              immerse yourself in the soothing environment.
            </li>
            <li>
              Visualization: Picture yourself accomplishing a goal or engaging
              in an activity that brings you joy. Imagine the details,
              emotions, and sensations associated with that experience. This
              can help shift your focus to positive and calming thoughts.
            </li>
            <li>
              Body Scan: Lie down or sit comfortably and bring your attention
              to different parts of your body, starting from your toes and
              moving upward. Notice any sensations or areas of tension. As you
              identify tension, consciously release and relax those muscles.
            </li>
            <li>
              Mindful Coloring: Engage in coloring activities, focusing on the
              strokes, colors, and patterns. This simple and creative task can
              be relaxing and help shift your focus away from stressors.
            </li>
            <li>
              Progressive Relaxation Music: Listen to soothing instrumental
              music or nature sounds specifically designed for relaxation. Let
              the calming melodies and rhythms help you unwind and create a
              peaceful ambiance
            </li>
            <li>
              Journaling: Write down your thoughts, worries, or concerns in a
              journal. This can be a cathartic practice that allows you to
              process your emotions and gain clarity. Reflect on positive
              aspects of your life and express gratitude for them.
            </li>
            <li>
              Stretching and Yoga: Engage in gentle stretching exercises or
              practice yoga poses that promote relaxation and flexibility. Pay
              attention to your body&apos;s movements, breathing, and
              sensations as you move through the stretches or poses.
            </li>
            <li>
              Meditation Apps and Relaxation Tools: Explore meditation apps,
              such as Headspace, Calm, or Insight Timer, which offer guided
              meditations and relaxation exercises. Additionally, consider
              using relaxation tools like stress balls, weighted blankets, or
              aromatherapy to enhance relaxation.
            </li>
          </ol>
          <Callout.Root color="green" mt={"5"} mb={"5"} variant="surface">
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>
              <p>
                Remember, relaxation techniques can be personalized based on your
                preferences and what brings you the most calmness and tranquility.
                Incorporate these practices into your routine regularly to
                experience the benefits of relaxation and stress reduction.
              </p>
            </Callout.Text>
          </Callout.Root>
          
        </div>

        <div>
          <h2 style={{ marginTop: 64, marginBottom: 0, fontSize: "28px" }}>Practical Relaxation Exercise: Finding Inner Calm</h2>
          <p style={{ marginTop: "6px", fontSize: "16px" }}>Duration: 10 minutes</p>
          <p>
            Introduction: &quot;Welcome to this guided meditation session.
            Today, we will focus on finding inner calm and cultivating a sense
            of peace within ourselves. Find a comfortable seated position,
            close your eyes, and take a deep breath in, exhaling slowly.
            Let&apos;s begin.&quot;
          </p>
          <p>Body: </p>
          <ol>
            <li>
              Grounding and Relaxation (2 minutes): &quot;Start by bringing
              your attention to your breath. Take a few deep breaths, inhaling
              through your nose and exhaling through your mouth. Feel your
              body becoming more relaxed with each breath. Now, bring your
              attention to your feet. Visualize roots growing from the soles
              of your feet, reaching deep into the earth, grounding you and
              providing stability. Feel the support of the earth beneath
              you.&quot;
            </li>
            <li>
              Body Scan (3 minutes): &quot;Shift your focus to your body.
              Begin at the top of your head and slowly scan down, bringing
              awareness to each part of your body. Notice any areas of tension
              or discomfort, and as you exhale, release the tension, allowing
              your body to relax. Move down to your forehead, your eyes, your
              jaw, your neck, your shoulders, and so on, all the way down to
              your toes. Take your time with each area, breathing into it and
              letting go of any tension.&quot;
            </li>
            <li>
              Breath Awareness (3 minutes): &quot;Bring your attention back to
              your breath. Notice the natural rhythm of your breath as you
              inhale and exhale. Follow the breath in and out, feeling the
              sensations in your nostrils or your abdomen. Allow your breath
              to anchor you in the present moment, letting go of any thoughts
              or distractions that arise. Simply be present with your
              breath.&quot;
            </li>
            <li>
              Cultivating Inner Calm (2 minutes): &quot;As you continue to
              breathe, imagine a gentle, warm light surrounding your body.
              This light represents a sense of inner calm and peace. With each
              inhalation, imagine this light growing brighter and expanding
              throughout your body. Feel it radiating tranquility and harmony.
              As you exhale, release any remaining tension or stress. Allow
              this inner calm to permeate your entire being.&quot;
            </li>
          </ol>
          <p>Conclusion:</p>
          <Blockquote highContrast>
            <p>
              &quot;Take a moment to express gratitude for this time of
              stillness and self-care. When you&apos;re ready, slowly bring your
              awareness back to the present moment. Wiggle your fingers and
              toes, gently open your eyes, and carry this sense of inner calm
              with you as you go about your day. Thank you for joining this
              guided meditation.&quot;
            </p>
          </Blockquote>
        </div>

        <Separator orientation="horizontal" my="3" size="4" />

        <div id="selfcare-apps" style={{marginTop: 48}}>
          <h2 style={{ marginBottom: 0, marginTop: 64, fontSize: "28px" }}>Self-care Apps</h2>
          <p style={{ marginTop: "8px", marginBottom: 24, fontSize: "16px" }}>
            There are several apps available that can help with mindfulness
            and self-care practices. Here are some popular ones:
          </p>

          <Grid columns={{ sm: "1", lg: "3" }} gap="3" width="auto" mt={"3"}>
            <Card variant="surface">
              <Text as="div" weight="bold">Headspace</Text>
               Headspace offers guided meditation sessions,
              mindfulness exercises, and sleep aids to help reduce stress,
              improve focus, and promote relaxation.
            </Card>
            <Card>
              <Text as="div" weight="bold">Calm</Text>
               Calm provides a variety of guided meditations, breathing
              exercises, sleep stories, and soothing music to support
              relaxation and mindfulness.
            </Card>
            <Card>
              <Text as="div" weight="bold">Insight Timer</Text>
               Insight Timer offers a vast collection of guided
              meditations, music tracks, and talks from leading meditation
              teachers and mindfulness experts.
            </Card>
            <Card>
              <Text as="div" weight="bold">Stop, Breathe & Think</Text>
              This app helps you check in with your
              emotions, recommends mindfulness activities based on your
              current state of mind, and provides guided meditations for
              relaxation and stress relief.
            </Card>
            <Card>
              <Text as="div" weight="bold">Smiling Mind</Text>
               Smiling Mind offers mindfulness programs and
              meditation exercises designed for different age groups, from
              children to adults.
            </Card>
            <Card>
              <Text as="div" weight="bold">Aura</Text>
              Aura provides personalized mindfulness exercises, daily
              reminders, and guided meditations to help reduce stress, improve
              sleep, and enhance overall well-being.
            </Card>
            <Card>
              <Text as="div" weight="bold">Breathe</Text>
               Breathe offers guided meditations, relaxing music,
              bedtime stories, and breathing exercises to support mindfulness,
              stress reduction, and better sleep.
            </Card>
            <Card>
              <Text as="div" weight="bold">The Mindfulness App</Text>
              <p>This app provides guided meditations,
                customizable meditation timers, and reminders to help
                incorporate mindfulness into your daily routine.</p>
            </Card>
          </Grid>

          <Callout.Root color="green" mt={"5"} mb={"5"} variant="surface">
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>
              <p>
                Remember to explore different apps and find the one that resonates
                with you the most. These apps can serve as helpful tools in
                incorporating mindfulness and self-care practices into your daily
                life.
              </p>
            </Callout.Text>
          </Callout.Root>
          
        </div>
      </div>
      <div className={classnames(styles.article, { [styles.articleDarkMode]: isDarkMode })} id={"finding-a-therapist"} style={{ display: activeSection === "finding-a-therapist" ? "block" : "none" }}>
        <h2>Therapists in Kenya</h2>
        <p>
          To find a therapist that works for you, you can follow these
          steps:
        </p>
        <ol>
          <li>
            <strong style={{ color: isDarkMode ? "white" : "#383636"}}>Seek Referrals:</strong> Ask for recommendations from trusted friends,
            family members, or healthcare professionals. They may have
            firsthand experience or know someone who has worked with a
            therapist in Kenya.
          </li>
          <li>
            <strong style={{ color: isDarkMode ? "white" : "#383636" }}>Online Directories:</strong> Utilize online directories that list
            therapists in Kenya. Websites like TherapyTribe
            (therapytribe.com) or Psychology Today (psychologytoday.com)
            often provide search filters to help you find therapists based
            on location, specialties, and preferences.
          </li>
          <li>
            <strong style={{ color: isDarkMode ? "white" : "#383636" }}> LGBTQ+ Organizations:</strong> If you are part of the LGBTQ+ community,
            reach out to LGBTQ+ organizations like GALCK (Gay and Lesbian
            Coalition of Kenya) or TEA Kenya (Transgender Education and
            Advocacy Kenya). They may be able to provide recommendations
            for queer-friendly therapists in the country.
          </li>
          <li>
            <strong style={{ color: isDarkMode ? "white" : "#383636" }}>Online Search:</strong> Conduct an online search using keywords like
            &quote;therapist in Kenya&quote; or &quote;mental health
            services in Kenya.&quote; This can lead you to individual
            therapists&apos; websites or clinics that offer counseling
            services.
          </li>
          <li>
            <strong style={{ color: isDarkMode ? "white" : "#383636" }}>Contact Healthcare Facilities:</strong> Contact hospitals, clinics, or
            healthcare centers in your area and inquire about their mental
            health services. They may have in-house therapists or be able
            to provide referrals to professionals in the community.
          </li>
          <li>
            <strong style={{ color: isDarkMode ? "white" : "#383636" }}>Consult with Primary Care Providers:</strong> Speak to your primary
            care doctor or healthcare provider and discuss your mental
            health concerns. They may be able to refer you to a therapist
            or provide recommendations based on your specific needs
          </li>
        </ol>

        <Callout.Root color="green" mt={"5"} mb={"5"} variant="surface">
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            <p>
              Once you have a list of potential therapists, take the time to
              research their backgrounds, read their profiles or websites, and
              consider factors such as their specialties, experience, and
              approach to therapy. It can also be helpful to have an initial
              consultation or phone call with the therapist to discuss your
              concerns and assess if they are the right fit for you.
            </p>
          </Callout.Text>
        </Callout.Root>
        <div id="queer-friendly-therapist">
          <h2>How do you know a therapist is queer friendly?</h2>
          <p>
            Determining if a therapist is queer-friendly can be important
            in ensuring a safe and supportive therapeutic environment.
            Here are some indicators that can help you assess a
            therapist&apos;s queer-friendliness:
          </p>
          <ol>
            <li>
              <strong style={{ color: isDarkMode ? "white" : "#383636" }}>Training and Experience:</strong> Inquire about the therapist&apos;s
              training and experience working with LGBTQ+ clients. Ask if
              they have received specific education or workshops on LGBTQ+
              issues, gender identity, and sexual orientation. Therapists
              who have sought out additional training or have experience
              working with queer clients are more likely to be
              knowledgeable and affirming.
            </li>
            <li>
              <strong style={{ color: isDarkMode ? "white" : "#383636" }}>Affirming Language:</strong> Listen to the language the therapist
              uses during conversations or in their written materials.
              Queer-friendly therapists typically use inclusive language,
              such as using gender-neutral terms or avoiding assumptions
              about clients&apos; sexual orientation or gender identity.
              They may also explicitly state their commitment to creating
              an inclusive and accepting environment for all clients.
            </li>
            <li>
              <strong style={{ color: isDarkMode ? "white" : "#383636" }}>Openness and Non-Judgment:</strong> A queer-friendly therapist should
              demonstrate a non-judgmental and open attitude towards
              diverse sexual orientations and gender identities. They
              should create a safe space where you feel comfortable
              discussing your experiences and concerns without fear of
              being judged or stigmatized.
            </li>
            <li>
              <strong style={{ color: isDarkMode ? "white" : "#383636" }}>Knowledge of LGBTQ+ Issues:</strong> A therapist who is
              queer-friendly should have a basic understanding of LGBTQ+
              issues, including common challenges faced by the community,
              mental health disparities, and the impact of minority
              stress. They should be able to provide appropriate support
              and address your specific needs as an LGBTQ+ individual.
            </li>
            <li>
              <strong style={{ color: isDarkMode ? "white" : "#383636" }}>Acceptance and Support:</strong> A queer-friendly therapist should
              validate and affirm your sexual orientation and gender
              identity as integral parts of who you are. They should
              respect your self-identified pronouns and use inclusive
              language throughout your interactions. They should also be
              willing to advocate for your rights and well-being when
              necessary.
            </li>
          </ol>

          <Callout.Root color="green" mt={"5"} mb={"5"} variant="surface">
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>
              <p>
                It is important to remember that the therapist-client
                relationship is unique, and personal compatibility is
                essential. Trust your instincts and consider having an initial
                consultation or phone call with the therapist to discuss their
                approach, values, and any concerns you may have. This can help
                you gauge their queer-friendliness and determine if they are
                the right fit for your needs.
              </p>
            </Callout.Text>
          </Callout.Root>
        </div>
        <div id="mental-health-support-orgs">
          <h2>
            Which LGBTQ+ organizations provide support and mental therapy
            sessions in Kenya?
          </h2>
          <p>
            In Kenya, there are several LGBTQ+ organizations that provide
            support and mental therapy services for the community. Here
            are a few organizations that offer mental health support to
            the LGBTQ+ community in Kenya:
          </p>
          <ol>
            <li>
              Gay and Lesbian Coalition of Kenya (GALCK): GALCK is a
              national umbrella organization that advocates for the rights
              and well-being of LGBTQ+ individuals in Kenya. They provide
              resources, support, and counseling services for the
              community, including mental health support.
            </li>
            <li>
              Transgender Education and Advocacy (TEA) Kenya: TEA Kenya is
              an organization focused on advancing the rights and
              well-being of transgender and gender diverse individuals in
              Kenya. They offer mental health support, counseling, and
              resources specifically tailored to the transgender
              community.
            </li>
            <li>
              The National Gay and Lesbian Human Rights Commission
              (NGLHRC): NGLHRC is an organization dedicated to promoting
              and protecting the rights of LGBTQ+ individuals in Kenya.
              They provide legal support, advocacy services, and resources
              that can include mental health resources and referrals.
            </li>
            <li>
              Ishtar MSM: Ishtar MSM is a community-based organization
              that primarily focuses on the health and well-being of men
              who have sex with men (MSM) and transgender women. They
              offer a range of services, including mental health support
              and counseling.
            </li>
          </ol>
          <Callout.Root color="green" mt={"5"} mb={"5"} variant="surface">
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>
              <p>
                It is important to note that while these organizations may
                provide mental health support and resources, they might not
                have in-house therapists or counselors. However, they can
                often refer individuals to mental health professionals who are
                LGBTQ+ affirming or have experience working with the LGBTQ+
                community.
              </p>
              <p>
                If you or someone you know is seeking mental health support,
                it is recommended to reach out to these organizations directly
                or visit their websites for more information on the specific
                services they offer and to inquire about mental therapy
                options.
              </p>
            </Callout.Text>
          </Callout.Root>
        </div>
      </div>
      <div className={classnames(styles.article, { [styles.articleDarkMode]: isDarkMode })} id="group-therapy" style={{ display: activeSection === "group-therapy" ? "block" : "none" }}>
        <h2>Group Therapy sessions for the LGBTQ+ community</h2>
        <p style={{marginBottom: 24}}>
          In Kenya, there are various organizations and support groups
          that provide group therapy sessions specifically tailored for
          LGBTQ+ individuals. These sessions offer a safe and supportive
          environment where individuals can come together, share their
          experiences, and receive guidance and support. Some
          organizations in Kenya that offer group therapy sessions for
          queers include:
        </p>
        <Grid columns={{ sm: "1", lg: "3" }} gap="3" width="auto">
          <Card>
            <Text as="p" weight={"bold"}>Minority Women in Action (MWA)</Text>
            MWA is an organization focused
            on supporting queer women and non-binary individuals. They
            organize group therapy sessions and support groups to address
            mental health concerns and create a sense of community.
          </Card>
          <Card>
            <Text as="p" weight={"bold"}>The East African Trans Health and Advocacy Network (EATHAN)</Text>
            EATHAN is dedicated to promoting the health and well-being of
            transgender and gender diverse individuals. They provide
            counseling services, including group therapy sessions, to
            address mental health challenges and facilitate peer support.
          </Card>
          <Card>
            <Text as="p" weight={"bold"}>Gay and Lesbian Coalition of Kenya (GALCK)</Text>
            GALCK is a prominent LGBTQ+ advocacy organization in Kenya. They
            collaborate with mental health professionals to offer group
            therapy sessions and support groups for LGBTQ+ individuals
            seeking a safe space to share their experiences and receive
            guidance.
          </Card>
          <Card>
            <Text as="p" weight={"bold"}>AFRA Kenya</Text>
            AFRA Kenya focuses on several key areas, including advocacy,
            the creation of safe spaces, feminism, and healing. Through
            their advocacy efforts, they work to advance the rights and
            well-being of individuals within the LGBTQ+ community in
            Kenya. They also prioritize the establishment of safe spaces
            where individuals can freely express themselves, share
            experiences, and find support.
          </Card>
          <Card>
            <Text as="p" weight={"bold"}>PEMA Kenya</Text>
            PEMA Kenya focuses on advocating for the rights
            and well-being of LGBTQ+ individuals in Kenya. They provide
            various support services, including group therapy sessions, to
            address mental health issues and foster a supportive
            community.
          </Card>
          <Card>
            <Text as="p" weight={"bold"}>Nadharia Kenya</Text>
            Nadharia plays a vital role in raising awareness about
            mental health and providing resources and support to
            individuals who may be facing mental health challenges. They
            may offer counseling services, therapy programs, educational
            initiatives, and community outreach to promote mental
            well-being and reduce the stigma surrounding mental health.
          </Card>
        </Grid>
        <Callout.Root color="green" mt={"5"} mb={"5"} variant="surface">
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            <p>
              It is important to note that availability and schedules of group
              therapy sessions may vary, so it is advisable to reach out to
              these organizations directly or visit their websites for more
              information on how to participate in their group therapy
              sessions for queers.
            </p>
          </Callout.Text>
        </Callout.Root>
      </div>
    </div>
  );
}
