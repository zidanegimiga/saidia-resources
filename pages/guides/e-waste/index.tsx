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

export default function SelfCare() {
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
        <div className={styles.header} style={{ paddingTop: 16, paddingBottom: 16, width: "100%", backgroundColor: "#1e2832", textAlign: "center", position: "fixed", top: scrollY > 160 ? 0 : -80, transition: "ease-in-out 0.5s all",   }}>
            <h2 style={{color: "white", fontFamily: "sans-serif"}}> Unravel the World of E-Waste </h2>
        </div>
      }

      <div className={styles.article} style={{ display: activeSection === "" ? "block" : "none" }}>
        <h2>Unravel the World of E-waste</h2>
        <p>
          E-waste, or electronic waste, is a term used to describe discarded
          electronic devices that have reached the end of their useful life, or
          are no longer wanted by their owners. This includes various electronic
          devices including computers, mobile phones, televisions,
          refrigerators, washing machines, printers, cameras, and consumer
          electronics.
        </p>
        <h3 style={{ marginTop: 32, marginBottom: 16 }}>Categories of e-waste</h3>
        <ol className={styles.eWasteCategories}>
          <li>
            <span>Consumer Electronics:</span> This includes devices used by individuals or
            households for personal or entertainment purposes, like smartphones,
            laptops, tablets, gaming consoles, televisions, and audio/video
            equipment.
          </li>
          <li>
            <span>Information Technology (IT) and Telecommunication Equipment:</span> This
            category comprises devices used in commercial or business settings,
            including computers, servers, routers, networking equipment, office
            telephones, and fax machines.
          </li>
        </ol>
        <p>
          E-waste contains a complex mix of materials, including metals,
          plastics, glass, circuit boards, and hazardous substances like lead,
          mercury, cadmium, and flame retardants. If not properly managed,
          e-waste can pose significant environmental and health risks due to
          improper handling, disposal, or recycling methods.
        </p>
        <p>
          To manage e-waste responsibly recycling, refurbishing, or disposing of
          electronic devices in an environmentally friendly manner is essential.
          Recycling e-waste allows for the recovery of valuable materials and
          reduces the demand for new resources, while ensuring hazardous
          substances are handled safely and do not pollute the environment.
        </p>
        <h3 style={{ marginTop: 32, marginBottom: 16 }}>Some interesting facts about e-waste</h3>
        <ol className={styles.eWasteFacts}>
          <li>
            <span> Connect with Others:</span> Cultivate and maintain healthy relationships.
            Spend quality time with loved ones, engage in meaningful
            conversations, and seek support from friends and family when needed.
          </li>
          <li>
            <span>E-waste Generation:</span> The world generated about 53.6 million metric
            tons of e-waste in 2019, according to the Global E-waste Monitor
            2020 report.
          </li>
          <li>
            <span>E-waste Growth:</span> E-waste is increasing rapidly, with the amount
            generated growing by 21% in the last five years
          </li>
          <li>
            <span>Recycling Rate:</span> The recycling rate for e-waste is relatively low,
            with only about 17.4% of e-waste generated in 2019 being formally
            documented as recycled.
          </li>
          <li>
            <span>E-waste Composition:</span> E-waste consists of various electronic devices
            and equipment, with computers, mobile phones, televisions, and
            household appliances being common items found in e-waste.
          </li>
          <li>
            <span>Toxic Substances:</span> E-waste contains hazardous materials like lead,
            mercury, cadmium, and brominated flame retardants, which can lead to
            environmental pollution and health risks if not handled properly.
          </li>
          <li>
            <span>Informal Recycling:</span> A significant portion of e-waste is managed
            through informal recycling processes, often in developing countries,
            which can pose risks to workers health and the environment due to
            inadequate safety measures.
          </li>
          <li>
            <span>Economic Value:</span> E-waste represents a significant economic
            opportunity, with the value of raw materials estimated at
            approximately $57 billion, highlighting the potential for recycling
            and resource recovery.
          </li>
        </ol>
        <p>
          Transitioning to a circular economy is an essential step towards
          sustainable development and environmental protection. The circular
          economy aims to minimize waste, promote sustainability, and maximize
          resource efficiency. It involves designing products for durability,
          repairability, and recyclability, implementing effective recycling and
          recovery systems, encouraging shared use of products and services, and
          promoting renewable energy sources.
        </p>
        <h3 style={{marginTop: 32, marginBottom: 16}}>Collecting e-waste is crucial for several reasons</h3>
        <ol className={styles.eWasteFacts}>
          <li>
            <span>Environmental Protection:</span> Properly disposing of e-waste prevents
            hazardous substances from polluting the environment, safeguarding
            human health and natural ecosystems.
          </li>
          <li>
            <span>Resource Conservation:</span> Recycling e-waste allows valuable materials
            to be recovered and reused, reducing the need for new resource
            extraction and conserving natural resources
          </li>
          <li>
            <span>Energy Efficiency:</span> Recycling e-waste consumes less energy than
            extracting and processing raw materials for new electronics,
            contributing to energy conservation.
          </li>
          <li>
            <span>Job Creation and Economic Benefits:</span> E-waste management and recycling
            create job opportunities and contribute to economic growth.
          </li>
          <li>
            <span>Compliance with Regulations:</span> Collecting e-waste helps individuals
            and businesses comply with regulations and ensure responsible
            disposal.
          </li>
        </ol>
        <p>
          In Kenya, several organizations are involved in collecting and
          managing e-waste responsibly. Some prominent ones include East African
          Compliant Recycling (EACR), Safaricom&apos;s E-Waste Recycling
          Initiative, Computer for Schools Kenya (CFSK), Waste Electrical and
          Electronic Equipment Center (WEEE Center), and E-waste Initiative
          Kenya (EwIK). These organizations offer e-waste collection services
          and ensure proper recycling and disposal.
        </p>
        <p>
          Moreover, in Kenya, there are organizations that utilize e-waste for
          various purposes. These include craftsmen in the informal sector who
          repurpose e-waste components to create new products, upcycling
          initiatives that transform e-waste into functional and aesthetic
          items, non-profit organizations that train individuals in electronics
          repair and refurbishment, and technology startups that use e-waste
          components to develop innovative products.
        </p>
        <p>
          By responsibly managing e-waste and promoting sustainable practices,
          individuals, organizations, and governments can contribute to reducing
          the environmental impact of electronic waste, conserving resources,
          and fostering a more sustainable and circular economy.
        </p>
      </div>
    </div>
  );
}
