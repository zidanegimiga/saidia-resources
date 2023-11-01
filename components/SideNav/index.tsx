import React, { forwardRef } from 'react'
// import { Accordion } from '../Accordion';
import styles from "./SideNav.module.scss"
import { business, legal, organizations, inclusivity, events, selfCare, eWaste } from '@/Data/categories';
import { useSidebar } from '@/hooks/SidebarContext';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import classnames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useDarkMode } from '../ThemeProvider';

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

const SideNav = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  const AccordionTrigger = forwardRef<HTMLDivElement, AccordionTriggerProps>(
    ({ children, className, ...props }, forwardedRef) => {
      return (
        <Accordion.Header className={styles.AccordionHeader}>
          <Accordion.Trigger
            className={classNames([styles.AccordionTrigger], className)}
            {...props}
            // @ts-ignore
            ref={forwardedRef}
            style={{
              backgroundColor: isDarkMode ? "#1d3752" : "#f3f3f3",
            }}
          >
            {children}
            <ChevronDownIcon className={styles.AccordionChevron} aria-hidden />
          </Accordion.Trigger>
        </Accordion.Header>
      );
    }
  );

  AccordionTrigger.displayName = 'AccordionTrigger';

  interface AccordionContentProps {
    children: React.ReactNode;
    className?: string;
  }

  const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
    ({ children, className, ...props }, forwardedRef) => (
      <Accordion.Content
        className={classNames([styles.AccordionContent], className)}
        {...props}
        ref={forwardedRef}
        style={{
          backgroundColor: isDarkMode ? "#1d375280" : "#f3f3f3",
        }}
      >
        <div className={styles.AccordionContentText}>{children}</div>
      </Accordion.Content>
    )
  );

  AccordionContent.displayName = 'AccordionContent';

  const categories = [
    {
      name: "Legal",
      category: legal
    },
    {
      name: "Self Care",
      category: selfCare
    },
    {
      name: "Support Organisations",
      category: organizations
    },
    {
      name: "Business and Employment",
      category: business
    },
    {
      name: "Events and Culture",
      category: events
    },
    {
      name: "Inclusivity and Diversity",
      category: inclusivity
    },
    {
      name: "E-Waste",
      category: eWaste
    },
  ]

  const AccordionDemo: React.FC = () => (
    <>
      <Accordion.Root className={classnames(styles.AccordionRoot, { [styles.AccordionRootDarkMode]: isDarkMode })} type="multiple">
        {
          categories.map((category, index) => {
            return (
              <Accordion.Item className={styles.AccordionItem} value={category.name} key={index}>
                <AccordionTrigger>
                  <h2 className={classnames(styles["accordionHeaderTitle"], { [styles.accordionHeaderTitleDarkMode]: isDarkMode })}>{category.name}</h2>
                </AccordionTrigger>
                <AccordionContent>
                  {
                    category.category.map((article, index) => {
                      return (
                        <div key={index} className={classnames(styles.accordionLink, { [styles.accordionLinkDarkMode]: isDarkMode })} onClick={toggleSidebar}>
                          <Link href={article?.url}>
                            <p className={classnames(styles.accordionArticleTitle, { [styles.accordionArticleTitleDarkMode]: isDarkMode })}>
                              {article?.title}
                            </p>
                          </Link>
                        </div>
                      )
                    })
                  }
                </AccordionContent>
              </Accordion.Item>
            )
          })
        }
      </Accordion.Root>
      {
        isSidebarOpen && (
          <Accordion.Root className={classnames(styles.AccordionRootMobile, { [styles.AccordionRootDarkMode]: isDarkMode })} type="multiple">
            {
              categories.map((category, index) => {
                return (
                  <Accordion.Item className={styles.AccordionItem} value={category.name} key={index}>
                    <AccordionTrigger>
                      <h2 className={classnames(styles["accordionHeaderTitle"], { [styles.accordionHeaderTitleDarkMode]: isDarkMode })}>{category.name}</h2>
                    </AccordionTrigger>
                    <AccordionContent>
                      {
                        category.category.map((article, index) => {
                          return (
                            <div key={index} className={classnames(styles.accordionLink, { [styles.accordionLinkDarkMode]: isDarkMode })} onClick={toggleSidebar}>
                              <Link href={article?.url}>
                                <p className={classnames(styles.accordionArticleTitle, { [styles.accordionArticleTitleDarkMode]: isDarkMode })}>
                                  {article?.title}
                                </p>
                              </Link>
                            </div>
                          )
                        })
                      }
                    </AccordionContent>
                  </Accordion.Item>
                )
              })
            }
          </Accordion.Root>
        )
      }
    </>
  );

  AccordionDemo.displayName = 'AccordionDemo';

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div style={{ position: "relative" }}>
      <AccordionDemo />
      <div className={styles.sidebarToggler} onClick={toggleSidebar}>
        {
          isSidebarOpen ? "Close Categories" : "Open Categories"
        }
      </div>
    </div>
  );
}

export default SideNav