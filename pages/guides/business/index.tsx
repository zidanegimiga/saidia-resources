import React, { useState, useEffect } from "react";
import styles from "./support.module.scss";
import Nav from "@/components/Nav/Nav";
import Head from "next/head";
import Link from "next/link";
import { setOriginalNode } from "typescript";
import { legal, business } from "@/Data/categories";
import { Accordion } from "@/components/Accordion";
import SideNav from "@/components/SideNav";
import useHashChange from "@/hooks/useHashChange";
import { useDarkMode } from "@/components/ThemeProvider";
import classnames from 'classnames';
import { Callout } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";

export default function Guides() {
  const activeSection = useHashChange();
  const [scrollY, setScrollY] = useState(0);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

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
      {
        <div style={{ paddingTop: 16, paddingBottom: 16, width: "100%", backgroundColor: "#1e2832", textAlign: "center", position: "fixed", top: scrollY > 288 ? 0 : -80, transition: "ease-in-out 0.5s all", paddingLeft: "132px", zIndex: 2 }}>
          <h3 style={{ color: "white", fontFamily: "sans-serif" }}> 
            {
              activeSection === "" ? "Vocational Skills" : "Starting a Business"
            }
          </h3>
        </div>
      }
      <div className={classnames(styles.article, { [styles.articleDarkMode]: isDarkMode })} style={{ display: activeSection === "" ? "block" : "none" }}>
        <h2>Vocational Skills in Kenya</h2>
        <p>
          In Nairobi, the bustling capital city of Kenya, the opportunity to
          acquire vocational skills in various areas of expertise is readily
          available. Whether you dream of becoming an electrician, a carpenter,
          a nurse, an automotive technician, a graphic designer, a welder, a
          plumber, a chef, an IT support specialist, or a hairstylist, the city
          offers a wide range of vocational training options to suit your
          passions and career aspirations.
        </p>
        <p>
          Vocational skills, also known as technical or job-specific skills, are
          the essential abilities and knowledge directly related to a specific
          occupation or trade. Unlike traditional academic education, vocational
          skills are highly practical and enable individuals to perform specific
          tasks or jobs effectively. These skills are acquired through
          specialized training, education, or hands-on experience, allowing you
          to become job-ready and industry-savvy.
        </p>
        <p>
          Imagine mastering the art of wiring installations, electrical
          troubleshooting, and understanding circuitry as an electrician, or
          honing your woodworking skills, mastering joinery techniques, and
          confidently using power tools as a carpenter.Or honing your
          woodworking skills, mastering joinery techniques, and confidently
          using power tools as a carpenter. Picture yourself providing patient
          care, administering medications, and skillfully dressing wounds as a
          compassionate and skilled nurse. As an automotive technician,
          visualize confidently diagnosing vehicle issues, repairing engines,
          and maintaining brake and electrical systems. If you are creatively
          inclined, you can explore graphic design, becoming proficient in
          graphic design software, layout design, typography, color theory, and
          image editing.
        </p>
        <p>
          For those with a passion for working with metals, welding skills such
          as interpreting blueprints, metal fabrication, and operating welding
          equipment can be your path to success. As a plumber, you can excel in
          pipe installation and repair, pipefitting, plumbing code knowledge,
          and troubleshooting, ensuring smooth water flow in various settings.
          If culinary arts are your calling, you can develop your expertise in
          culinary techniques, food preparation, menu planning, cooking methods,
          and kitchen safety as a chef. Alternatively, if you are tech-savvy,
          you can embark on a journey as an IT support specialist,
          troubleshooting hardware and software issues, setting up networks,
          configuring systems, and providing top-notch customer service. As a
          hairstylist, you can specialize in hair cutting, styling techniques,
          coloring, chemical treatments, and salon sanitation, creating stunning
          looks for your clients.
        </p>
        <p>
          Vocational skills are crucial for career success in various
          industries, and they are often specific to a particular occupation or
          trade. By developing and honing these skills, individuals can enhance
          their employability, excel in their chosen field, and open doors to
          countless opportunities.
        </p>
        <p>
          Nairobi is home to esteemed institutions that offer top-quality
          vocational training, equipping individuals with the skills they need
          to thrive in their chosen fields. Some of the notable institutions
          include the Nairobi Technical Training Institute (NTTI), which
          provides a diverse array of courses, including Artisan in Motor
          Vehicle Mechanics, Certificate in Food Science Technology, Certificate
          in Information Technology, Certificate in Medical Laboratory
          Technology, Certificate in Social Work and Community Development, and
          Craft Certification in Automotive Engineering, among numerous others
        </p>
        <p>
          Kasarani Technical and Vocational College (KTVC) is another prominent
          institution, located approximately 1.5 kilometers from Kamulu shopping
          center, off Kangundo Road, in Kasarani Constituency, Nairobi County.
          KTVC offers 27 diverse courses in areas such as ICT and Computer
          Studies, Mechanical and Automotive Engineering, Building and Civil
          Engineering, Business Department, Liberal Studies, Agriculture, and
          Institutional Management courses.
        </p>
        <p>
          Founded in 1979, the PC Kinyanjui Technical Training Institute
          (PCKTTI) is a prestigious public technical institute in Nairobi,
          Kenya. Established with the support of Jomo Kenyatta, the first
          President of the Republic of Kenya, PCKTTI initially enrolled 1,500
          students. The institute offers a variety of diploma courses, including
          Applied Biology, Analytical Chemistry, Food Technology, Civil
          Engineering, Building Technology, Business Management, Sales
          Marketing, Human Resource Management, Human Cooperative Management,
          Supply Chain Management, Community Development, Child Care and
          Protection, ICT, Electrical & Electronics Engineering (Power &
          Telecomms Options), Food Beverage Production and Service, as well as
          craft certificates in Science Laboratory Technology, Building
          Technology, Human Resource Management, Sales & Marketing, ICT
          International Computer Driving License, Electrical & Electronics
          Engineering (Power Options), Electrical & Electronics Engineering
          (Telecomms Options), Electrical Installation, Artisan in Food &
          Beverage Production & Service, Craft Certificate in Food and Beverage
          Production & Service, Craft Certificate in Housekeeping &
          Accommodation, Craft Certificate in Automotive Engineering (Production
          Option), Craft Certificate in Automotive Engineering, and Artisan in
          Motor Vehicle Mechanics.
        </p>
        <p>
          Additionally, Dandora Greenlight Vocational Training College is an
          accredited public vocational training college located on Komarock Road
          in Nairobi. The college is registered under the Technical and
          Vocational Education and Training Authority (TVETA) and provides
          various courses, including Artisan courses in Motor Vehicle Mechanics,
          Fashion and Design, and Craft Certificate in Information Communication
          Technology (ICT).
        </p>
        <p>
          In Nairobi, the pursuit of vocational skills opens doors to a world of
          possibilities. These hands-on and industry-specific training programs
          pave the way for a fulfilling and successful career in various fields.
          Aspiring individuals are equipped with practical skills that are in
          high demand across diverse industries. With vocational skills, you can
          seize opportunities, contribute to the growth of your chosen field,
          and make a positive impact on your community and beyond. So, if
          you&apos;re ready to unleash your potential, dive into an exciting
          career path, and make your mark, Nairobi&apos;s vocational skills
          training is the perfect place to start your journey to success.
        </p>
      </div>
      <div className={classnames(styles.article, { [styles.articleDarkMode]: isDarkMode })} style={{ display: activeSection === "starting-a-business-in-kenya" ? "block" : "none" }}>
        <div id="starting-a-business-in-kenya">
          <h2>Setting up a business in Kenya</h2>
          <p>
            Business Idea and Plan: Begin by developing a solid business idea
            and creating a comprehensive business plan. This plan should outline
            your objectives, target market, products or services, marketing
            strategies, and financial projections
          </p>

          <p>
            Business Name and Registration: To register your name you can visit
            any Huduma Center or use the e-Citizen portal. Conduct a business
            name search using the e-Citizen portal. Set up an e-Citizen
            following the prompts provided on the platform and then sign in.
            Once you have signed in the portal will open up on the e-Citizen
            dashboard, select the ‘Business Registration Service’ tab. Click on
            the ‘Make Application’ button and select the ‘Business Name
            Registration’, enter the proposed business name, ownership and
            address information. Review your application information and pay the
            filing fee using the payment details provided on the platform. To
            register your business, you will need to prepare signed copies of
            the pre-requisite registration documents. These will need to be
            uploaded onto the portal and include: copies of the business owners’
            national IDs, copies of the business owners’ KRA Pin Certificates
            and passport photos. Feedback on your registration will be provided
            between 1-2 working days. Once your business registration is
            complete you will get a notification on the email address you used
            to register on e-citizen. Log into your e-citizen and check your
            business status, once your business is registered you will receive a
            certificate of incorporation.
          </p>
          <br/>

          <p>
            The fees for registering a business in Kenya will cost between
            950-25,000ksh(as at 2023), the costs of business registration are as
            follows:
          </p>

          <ol style={{}}>
            <li>Registration of Business name: <strong>950ksh</strong></li>
            <li> Private Limited Company: <strong>10,650ksh</strong></li>
            <li> Public Limited Company: <strong>10,650ksh</strong></li>
            <li> Unlimited Companies: <strong>20,050ksh</strong></li>
            <li> Company Limited by guarantee: <strong>10,000ksh</strong></li>
            <li> Limited Liability Partnership: <strong>25,000ksh</strong></li>
          </ol>
          <br/>

          <p>
            <strong>Business Structure:</strong> Decide on the most suitable business structure
            for your venture, such as a sole proprietorship, partnership,
            limited liability company (LLC). Each structure has its own legal
            requirements and implications. Sole Proprietorship, Partnership, and
            Limited Liability Company (LLC) are three common forms of business
            entities, each with its own characteristics and implications. Here
            is a brief explanation of the differences:
          </p>

          <ol className={styles.eWasteCategories}>
            <li>
              <span>Sole Proprietorship Business Name Registration:</span>
              <ul style={{ listStyleType: "lower-alpha", paddingBottom: "0" }}>
                <li>
                  Sole proprietorship is the simplest and most common form of
                  business ownership.
                </li>
                <li>
                  It is owned and operated by a single individual, who is solely
                  responsible for the business&#39;s operations, profits, and
                  liabilities.
                </li>
                <li>
                  The owner has complete control over decision-making and
                  assumes personal liability for any debts or legal obligations
                  of the business.
                </li>
                <li>
                  There is no legal distinction between the owner and the
                  business entity.
                </li>
              </ul>
            </li>
            <br/>
            <li>
              <span>Partnership:</span>
              <ul style={{ listStyleType: "lower-alpha", paddingBottom: "0" }}>
                <li>
                  A partnership is formed when two or more individuals come
                  together to carry on a business for profit.
                </li>
                <li>
                  Partners contribute capital, share profits, and jointly manage
                  the business, unless stated otherwise in a partnership
                  agreement.
                </li>
                <li>
                  In a general partnership, partners have unlimited personal
                  liability for the partnership&#39;s debts and obligations.
                </li>
                <li>
                  In a limited partnership, there are general partners (with
                  unlimited liability) and limited partners (with liability
                  limited to their investment).
                </li>
                <li>
                  Partnerships are not separate legal entities, and the partners
                  are personally liable for the partnership&#39;s obligations.
                </li>
              </ul>
            </li>
            <br/>
            <li>
              <span>Limited Liability Company (LLC):</span>
              <ul style={{ listStyleType: "lower-alpha", paddingBottom: "0" }}>
                <li>
                  An LLC is a hybrid business structure that combines elements
                  of a corporation and a partnership.
                </li>
                <li>
                  It provides limited liability protection to its owners, known
                  as members, shielding their personal assets from business
                  liabilities.
                </li>
                <li>
                  Members can be individuals, corporations, or other LLCs.
                </li>
                <li>
                  An LLC offers flexibility in management structure, taxation
                  options, and profit distribution.
                </li>
                <li>
                  The company&#39;s existence is separate from its members,
                  providing a distinct legal entity.
                </li>
              </ul>
            </li>
            <br/>
          </ol>

          <br />

          <ul className={styles.eWasteCategories}>
            <strong>Key Differences:</strong>
            <li>
              Sole proprietorship and partnership offer simplicity and personal
              liability for owners, while an LLC provides limited liability
              protection.
            </li>
            <li>
              LLCs offer more flexibility in management, ownership, and tax
              treatment compared to sole proprietorship or partnership.
            </li>
            <li>
              Sole proprietorship and partnership do not have a separate legal
              entity, while an LLC is considered a separate legal entity.
            </li>
            <li>
              LLCs require more formalities in terms of registration,
              governance, and record- keeping compared to sole proprietorship or
              partnership.
            </li>
          </ul>

          <br/>

          <p>
            <strong>Permits and Licenses:</strong> Licenses:To conduct any business in Kenya you
            need a Single Business Permit from the County Government where you
            intend to establish your business. The type of business permit you
            will be issued will depend on a variety of factors including the
            physical location of the business, your business type and number of
            employees. In Nairobi County there is the unified business permit
            which consolidates all the licenses required to run a business in
            Kenya into one. All business entities need to have a trading license
            and a fire clearance certificate. Additionally, businesses dealing
            with food are required to have a health certificate and food hygiene
            license. The unified business permit application enables business
            owners to apply for different licenses in one application without
            having to go to different institutions and government offices. The
            permit is valid for one calendar year.
          </p>

          
          <p>
            <strong>Tax Obligations:</strong> Register for tax obligations with the Kenya Revenue
            Authority (KRA). This typically involves obtaining a Personal
            Identification Number (PIN) and registering for Value Added Tax
            (VAT), Pay-As-You-Earn (PAYE) for employees, and other relevant
            taxes. In Kenya, business owners have certain tax obligations to the
            Kenya Revenue Authority (KRA) for various types of taxes. The
            percentages and rates may vary based on the specific tax and the
            applicable laws. Here are the general percentages for the common
            taxes:
          </p>

          <ol className={styles.eWasteCategories}>
            <li>
              <span>Pay As You Earn (PAYE):</span>
              <p style={{marginTop: "-1px"}}>
                PAYE is the tax deducted from employees salaries or wages. The
                tax rates for PAYE are progressive, meaning they increase with
                higher income levels. The rates for PAYE can range from 10% to
                30%, depending on the income bracket.
              </p>
            </li>
            <li>
              <span>Value Added Tax (VAT):</span>
              <p style={{ marginTop: "-1px" }}>
                VAT is a consumption tax applied to the sale of goods and
                services. The standard VAT rate in Kenya is currently 16%. Some
                goods and services may be exempted or subject to a zero-rated
                VAT, while others may have a higher rate, such as 0% or 8%
              </p>
            </li>
            <li>
              <span>Corporate Income Tax:</span>
              <p style={{ marginTop: "-1px" }}>
                Corporate income tax is applicable to the profits earned by a
                company or business. The standard corporate income tax rate in
                Kenya is currently 30% for resident companies and permanent
                establishments. Small and medium-sized enterprises (SMEs) with
                turnover below a certain threshold may qualify for a reduced tax
                rate of 15%.
              </p>
            </li>
          </ol>

          <p>
            It is important to note that tax regulations and rates may be
            subject to change, so it is recommended to consult the latest tax
            laws and seek professional advice from a tax consultant or
            accountant to ensure accurate and up-to-date information regarding
            your specific business&apos;s tax obligations in Kenya
          </p>

          <p>
            Business Location: Choose a suitable location for your business
            operations. Consider factors such as accessibility, target market
            proximity, infrastructure, and rental or purchase costs. If
            necessary, secure a lease or purchase agreement for the premises.
          </p>

          <p>
            Capital and Financing: Determine the financial resources required to
            start and operate your business. Explore options for financing, such
            as personal savings, loans, grants, or partnerships. Prepare a
            budget and financial plan to manage your capital effectively. In
            Kenya, there are several organizations that offer grants, loans, and
            venture capital to support business startups. Here are a few notable
            ones:
          </p>

          <ol className={styles.eWasteCategories}>
            <li>
              <b>Kenya Commercial Bank (KCB) Foundation</b>: KCB offers various
              financing options, including the 2Jiajiri program, which provides
              grants and low-interest loans to youth entrepreneurs.
            </li>
            <li>
              <b>Kenya Women&apos;s Finance Trust (KWFT):</b> KWFT provides
              loans and financial services specifically tailored to women
              entrepreneurs.
            </li>
            <li>
              <b>Kenya Industrial Estates (KIE):</b> KIE offers financing
              options, including loans and equity financing, to small and
              medium-sized enterprises (SMEs) in various sectors.
            </li>
            <li>
              <b>Youth Enterprise Development Fund (YEDF):</b> YEDF provides
              loans, grants, and mentorship programs to youth entrepreneurs in
              Kenya.
            </li>
            <li>
              <b>Women Enterprise Fund (WEF):</b>WEF offers financial support,
              training, and mentorship programs to women entrepreneurs.
            </li>
            <li>
              <b>Kenya Climate Innovation Center (KCIC):</b>
              KCIC provides funding and support to startups focused on climate
              change mitigation and adaptation.
            </li>
            <li>
              <b>GrowthAfrica:</b>GrowthAfrica offers business accelerator
              programs and connects startups with investors and venture
              capitalists for funding opportunities.
            </li>
            <li>
              <b>African Enterprise Challenge Fund (AECF):</b>AECF provides
              grants and repayable grants to businesses operating in
              agriculture, renewable energy, and other sectors.
            </li>
            <li>
              <b>Acumen Fund East Africa:</b>Acumen Fund invests patient capital
              in social enterprises that address poverty and support sustainable
              development.
            </li>
            <li>
              <b>Investment Promotion Agencies (IPAs):</b>Organizations such as
              Kenya Investment Authority and Kenya Export Promotion and Branding
              Agency provide information on investment opportunities and connect
              businesses with potential investors.
            </li>
          </ol>

          <p>
            It is important to research each organization&apos;s specific
            criteria, application process, and eligibility requirements to
            determine which funding source aligns with your business&apos;s
            needs and objectives. Additionally, it is advisable to consult with
            a business advisor or seek professional guidance when exploring
            funding options for your startup.
          </p>

          <p>
            Business Bank Account: Open a dedicated business bank account to
            separate personal and business finances. This will facilitate
            financial transactions, bookkeeping, and taxation. In Kenya, several
            banks are suitable for banking as a business startup. Here are some
            of the notable banks that offer services and support tailored to the
            needs of startups:
          </p>

          <ol className={styles.eWasteCategories}>
            <li>
              <span>Kenya Commercial Bank (KCB):</span> KCB offers a range of business
              banking services, including business accounts, loans, trade
              finance, and business advisory services.
            </li>
            <li>
              <span>Equity Bank:</span> Equity Bank provides various banking services for
              startups, such as business accounts, loans, asset financing, and
              merchant services.
            </li>
            <li>
              <span>Cooperative Bank of Kenya:</span> Cooperative Bank offers business
              accounts, business loans, asset financing, trade finance, and
              other tailored services for startups.
            </li>
            <li>
              <span>Standard Chartered Bank:</span> Standard Chartered Bank provides business
              banking solutions, including accounts, loans, cash management, and
              trade finance services.
            </li>
            <li>
              <span> Absa Bank (formerly Barclays Bank of Kenya):</span>Absa Bank offers
              business accounts, business loans, trade finance, and specialized
              banking solutions for startups.
            </li>
            <li>
              <span>Commercial Bank of Africa (CBA):</span> CBA provides business banking
              services, including business accounts, loans, trade finance, and
              asset financing.
            </li>
            <li>
              <span>NIC Bank (NCBA Bank):</span> NIC Bank (now NCBA Bank) offers business
              banking services, including business accounts, loans, trade
              finance, and cash management solutions.
            </li>
            <li>
              <span>Stanbic Bank Kenya:</span> Stanbic Bank provides business banking
              solutions, including business accounts, loans, trade finance, and
              treasury services.
            </li>
            <li>
              <span>I&M Bank:</span> I&M Bank offers business banking services, including
              business accounts, loans, trade finance, and cash management
              solutions.
            </li>
            <li>
              <span>Diamond Trust Bank (DTB):</span> DTB provides business banking solutions,
              including business accounts, loans, trade finance, and cash
              management services.
            </li>
          </ol>

          <br/>

          <p>
            It is important to carefully consider factors such as account fees,
            transaction charges, accessibility of banking services, customer
            support, and the bank&apos;s reputation when choosing a suitable
            bank for your startup. Additionally, it is recommended to compare
            the offerings and features of different banks to find the one that
            best aligns with your business requirements
          </p>

          <p>
            Employment and Labor Laws: Familiarize yourself with employment and
            labor laws in Kenya if you plan to hire employees. Ensure compliance
            with regulations regarding employment contracts, minimum wages,
            working hours, social security, and employee benefits.{" "}
          </p>

          <ol className={styles.eWasteCategories}>
            <li>
              <strong>Employment Contracts:</strong> Employers are required to provide written
              employment contracts to their employees within three months of
              their start date. The contract should include terms and conditions
              of employment, such as job description, working hours,
              remuneration, leave entitlements, and termination procedures.
            </li>
            <li>
              <strong>Minimum Wages:</strong> The minimum wage in Kenya varies depending on the
              industry and location. The government periodically reviews and
              sets minimum wage rates through the Minimum Wage Order. It is
              essential for employers to comply with the minimum wage
              requirements relevant to their sector.
            </li>
            <li>
              <strong>Working Hours:</strong> The standard working hours for adult employees in
              Kenya are 52 hours per week, with a maximum of 12 hours per day.
              However, the law also specifies specific working hour limits for
              certain sectors, such as manufacturing, construction, and mining.
              Employees are entitled to rest breaks and rest days as prescribed
              by the law.
            </li>
            <li>
              <strong>Social Security:</strong> The National Social Security Fund (NSSF) is
              responsible for social security in Kenya. Employers are required
              to register their employees with the NSSF and contribute a
              percentage of their employees earnings to the fund. The
              contributions go towards providing social security benefits such
              as retirement benefits, disability benefits, and survivor&apos;s
              benefits.
            </li>
            <li>
              <strong>National Health Insurance Fund (NHIF)</strong> is responsible for providing
              medical insurance cover to all its members  and their declared
              dependents. NHIF membership is open to all Kenyans aged 18 years
              and older, it is mandatory for all formal employers to register
              with NHIF and to deduct employees’ contributions to the fund every
              month.
            </li>
            <li>
              <strong>Employee Benefits:</strong> Kenya has various statutory benefits and
              employee entitlements. These include annual leave, sick leave,
              maternity leave, and public holidays. The law defines the minimum
              duration and conditions for these benefits, and employers are
              obligated to provide them.
            </li>
          </ol>

          <Callout.Root color="green" mt={"5"} mb={"5"} variant="surface">
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>
              <p>
                It is important for employers to familiarize themselves with the
                specific laws and regulations related to employment in Kenya, as
                there may be sector-specific variations and additional requirements.
                Seeking professional advice or consulting with legal experts can
                help ensure compliance with employment regulations and provide
                clarity on specific obligations and benefits for both employers and
                employees.
              </p>
            </Callout.Text>
          </Callout.Root>

          <p>
            Business Insurance: Consider obtaining business insurance coverage
            to protect against potential risks and liabilities. This may include
            general liability insurance, property insurance, professional
            indemnity insurance, or specific coverage relevant to your industry.
          </p>

          <p>
            Record-Keeping and Compliance: Maintain accurate records of business
            transactions, financial statements, tax filings, and any other
            relevant documentation. Comply with legal requirements for
            reporting, audits, and submitting annual returns. Complying with
            legal requirements for reporting, audits, and submitting annual
            returns in Kenya involves several steps. Here is a general outline
            of the process:
          </p>

          <ol>
            <li>
              <strong>Annual Financial Statements:</strong> Prepare your company&apos;s annual
              financial statements in accordance with the International
              Financial Reporting Standards (IFRS) or the applicable reporting
              framework. Ensure accuracy and completeness of financial records,
              including income statements, balance sheets, and cash flow
              statements.
            </li>
            <li>
              <strong>Appointment of Auditors:</strong> If your company meets the audit threshold
              requirements, appoint a registered auditor to conduct an annual
              audit of your financial statements. The Companies Act provides
              guidelines on audit requirements based on the company&apos;s size,
              turnover, and number of shareholders.
            </li>
            <li>
              <strong>Audit and Reporting:</strong> Provide necessary documentation and access to
              your company&apos;s financial records to the appointed auditor.
              The auditor will conduct an independent examination of your
              financial statements and issue an audit report, which provides an
              opinion on the fairness and accuracy of the financial information
              presented.
            </li>
            <li>
              <strong>Annual General Meeting (AGM):</strong> Hold an AGM within six months after
              the end of your company&apos;s financial year. During the AGM,
              shareholders review and approve the audited financial statements,
              elect directors, and discuss other important matters related to
              the company&apos;s operations.
            </li>
            <li>
              <strong>Annual Returns:</strong> Prepare and submit annual returns to the Registrar
              of Companies. Annual returns include details about your
              company&apos;s shareholders, directors, registered office address,
              and share capital. These returns must be filed within 42 days
              after the AGM.
            </li>
            <li>
              <strong>Tax Compliance:</strong> Ensure compliance with tax obligations, such as
              filing tax returns and paying corporate taxes. This includes
              submitting regular tax filings (e.g., monthly or quarterly) and an
              annual tax return.
            </li>
            <li>
              <strong>Other Regulatory Compliance:</strong> Comply with any other sector-specific
              regulatory requirements that may apply to your business, such as
              licenses, permits, and industry-specific reporting obligations.
            </li>
          </ol>

          <Callout.Root color="green" mt={"5"} mb={"5"} variant="surface">
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>
              <p>
                It is important to note that the specific requirements and timelines
                may vary based on the type of business entity (e.g., company,
                partnership, sole proprietorship) and the applicable laws and
                regulations. Therefore, it is recommended to seek professional
                advice from a qualified accountant, lawyer, or business consultant
                to ensure full compliance with all legal requirements.
              </p>
            </Callout.Text>
          </Callout.Root>
          
        </div>
        <div id="how-to-open-a-bank-account">
          <h3 style={{marginTop: 32, marginBottom: 16}}>How do you open a bank account in Kenya</h3>
          <p>
            To open a bank account in Kenya, you can follow these general steps:
          </p>
          <ol className={styles.eWasteCategories}>
            <li>
              Choose a Bank: Research and select a bank that suits your needs.
              Consider factors such as the bank&apos;s reputation, services
              offered, fees, branch network, and customer reviews.
            </li>
            <li>
              Gather Required Documents: Prepare the necessary documents, which
              typically include:
              <ul>
                <li>
                  Proof of Identification: National ID card, passport, or alien
                  ID for non-citizens.
                </li>
                <li>
                  Proof of Address: Utility bill, tenancy agreement, or bank
                  statement with your current address.
                </li>
                <li>Passport-size Photos: Usually two or three photos.</li>
                <li>
                  Tax Personal Identification Number (TIN): You may need to
                  provide your TIN if you have one.
                </li>
              </ul>
            </li>
            <li>
              Visit the Bank Branch: Go to the nearest branch of the bank you
              have chosen.
            </li>
            <li>
              Speak to a Bank Representative: Inform the bank staff that you
              want to open a bank account. They will provide you with an
              application form and guide you through the process.
            </li>
            <li>
              Fill out the Application Form: Complete the application form with
              accurate personal information. Make sure to double-check the
              details before submitting.
            </li>
            <li>
              Submit Required Documents: Provide the necessary documents as
              mentioned in step 2. The bank representative will verify and
              photocopy them
            </li>
            <li>
              Initial Deposit: Some banks require an initial deposit to activate
              your account. Inquire about the minimum deposit amount and make
              the payment if necessary.
            </li>
            <li>
              Provide Biometric Data: The bank may capture your fingerprints and
              photograph for identification purposes.
            </li>
            <li>
              Sign Account Agreement: Review the account terms and conditions,
              and sign the account agreement or contract.
            </li>
            <li>
              Receive Account Documents: After completing the process, the bank
              will provide you with account-related documents, including your
              account number, debit card (if applicable), and account statements
            </li>
          </ol>          
          <Callout.Root color="green" mt={"5"} mb={"5"} variant="surface">
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>
              <p>
                Remember, the exact requirements and procedures may vary slightly
                between banks. It is advisable to contact your preferred bank or
                visit their official website for specific information and to confirm
                any additional requirements.
              </p>
            </Callout.Text>
          </Callout.Root>          
        </div>
        <div id="banks-in-kenya">
          <h3 style={{marginTop: 32, fontSize: 28}}>Which banks operate in Kenya</h3>
          <p>Here is a summary of some prominent banks in Kenya:</p>
          <ol className={styles.eWasteCategories}>
            <li>
              <strong><span>Equity Bank:</span></strong>
              <p style={{marginTop: "-1px"}}>
                Largest bank in terms of customer base. Offers a wide range of
                banking products and services. Known for its innovative mobile
                banking platform, Equitel.
              </p>
            </li>
            <li>
              <strong><span>KCB Bank:</span></strong>
              <p style={{ marginTop: "-1px" }}>
                One of the oldest and largest banks in Kenya. Offers various
                banking services, including personal banking, business banking,
                and corporate banking. Has an extensive branch and ATM network
                across the country.
              </p>
            </li>
            <li>
              <strong><span>Cooperative Bank of Kenya:</span></strong>
              <p style={{ marginTop: "-1px" }}>
                Provides banking services to individuals, SMEs, and corporate
                clients. Known for its cooperative model and focus on supporting
                the agricultural sector. Offers a range of financial products,
                including loans, savings accounts, and insurance.
              </p>
            </li>
            <li>
              <strong> <span>Standard Chartered Bank Kenya:</span> </strong>
              <p style={{ marginTop: "-1px" }}>
                Part of the global Standard Chartered Group. Offers a wide range
                of banking and financial services to individuals, businesses,
                and corporate clients. Provides international banking services,
                trade finance, and wealth management solutions.
              </p>
            </li>
            <li>
              <strong><span>ABSA</span></strong>
              <p style={{ marginTop: "-1px" }}>
                Operates as Absa Kenya following the rebranding from Barclays
                Bank of Kenya. Offers personal banking, business banking, and
                corporate banking services. Provides digital banking solutions
                and has a strong presence in the Kenyan market.
              </p>
            </li>
            <li>
              <span>Stanbic Bank Kenya:</span>
              <p style={{ marginTop: "-1px" }}>
                Part of the Standard Bank Group. Offers corporate and investment
                banking services, as well as personal banking solutions.
                Provides a range of financial products, including loans, savings
                accounts, and investment options.
              </p>
            </li>
            <li>
              <span>Commercial Bank of Kenya:</span>
              <p style={{ marginTop: "-1px" }}>
                Merged with NIC Bank to form NCBA Bank. Offers retail banking,
                corporate banking, and treasury services. Known for its mobile
                banking platform, M-Shwari, which provides micro-loans and
                savings options.
              </p>
            </li>
            <li>
              <span>Diamond Trust Bank:</span>
              <p style={{ marginTop: "-1px" }}>
                Operates in Kenya and other East African countries. Provides
                banking services to individuals, businesses, and corporate
                clients. Offers a variety of financial products, including
                loans, savings accounts, and trade finance.
              </p>
            </li>
          </ol>
        </div>
        <div id="banks-with-the-best-rates">
          <h3 style={{ marginTop: 32, fontSize: 28 }}>Which Bank has the best interest rates</h3>
          <p>
            Determining the bank with the best interest rates in Kenya can
            depend on various factors, including the type of account, the
            deposit amount, and the specific time period. Interest rates can
            also change over time, so it is recommended to check with different
            banks to get the most up-to-date information. Here are a few banks
            that are known for offering competitive interest rates:
          </p>
          <ol className={styles.eWasteCategories}>
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
              I&M Bank: Offers competitive interest rates on savings accounts
              and fixed deposits
            </li>
            <li>
              Standard Chartered Bank: Known for its competitive interest rates
              on time deposits and savings accounts.
            </li>
          </ol>

          <Callout.Root color="green" mt={"5"} mb={"5"} variant="surface">
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>
              <p>
                It is important to note that interest rates can vary based on the
                specific account type and the amount of funds deposited.
                Additionally, banks may offer promotional rates or customized rates
                for specific customers, so it is advisable to contact the banks
                directly or visit their websites to get the most accurate and
                up-to-date information on interest rates.
              </p>
            </Callout.Text>
          </Callout.Root>         

        </div>
        <div id="banks-best-for-startups">
          <h3 style={{ marginTop: 32, fontSize: 28 }}>What banks are best for Business Start ups</h3>
          <p>
            Several banks in Kenya offer services and support tailored to
            business start-ups. Here are a few banks that are often recommended
            for entrepreneurs and business start-ups:
          </p>
          <ol className={styles.eWasteCategories}>
            <li>
              Equity Bank: Equity Bank has a reputation for supporting small and
              medium- sized enterprises (SMEs) and offering customized banking
              solutions for business start-ups. They provide business loans,
              business accounts, and other financial products and services
              specifically designed for entrepreneurs.
            </li>
            <li>
              KCB Bank: KCB Bank has a dedicated department that focuses on
              serving SMEs and start-up businesses. They offer business
              accounts, loans, and various business advisory services to help
              entrepreneurs navigate the challenges of starting and growing a
              business.
            </li>
            <li>
              Cooperative Bank of Kenya: The Cooperative Bank has a strong focus
              on supporting SMEs and offers various financial products and
              services specifically tailored for start-ups. They provide
              business accounts, loans, trade finance solutions, and business
              advisory services.
            </li>
            <li>
              Diamond Trust Bank (DTB): DTB offers a range of banking services
              for business start-ups, including business accounts, loans, and
              trade finance solutions. They have specialized teams that provide
              guidance and support to entrepreneurs throughout the business
              start-up process.
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
    </div>
  );
}
