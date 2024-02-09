import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Expert Web & App Development | SEO & Digital Marketing Services"
        description="Cojovi Digital Webworx: Elevate your online presence with our custom web development, app creation, and comprehensive SEO optimization services. Your one-stop solution for coding, programming, and digital marketing excellence."
        keywords="cojovi, web developer, digital marketing, social media, branding, automations, ai, ai implementation"
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <TestimonialsSection />

        <PricingSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Craft Code Masterpieces <br/>
                at Warp Speed
                <Br /> Coding in the <br/> Fast Lane
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Your <Em>Vision</Em> our digital craftsmanship. At Cojovi Digital Webworx,
                we specialize in custom website development and comprehensive  
                online solutions tailored to your needs.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <NextjsLogo height="28px" /> <ChakraLogo height="20px" />
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="https://blog.cojovi.com">
                  Blog
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://blog.cojovi.com/projects"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  View My Work
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/good.webp"
                  layout="fixed"
                  width={1200}
                  height={762}
                  alt="Screenshot of a cojoviDigital at work"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Custom Web Development",
            icon: FiSmile,
            description: "No bland, boring, cookie cutter, template style websites.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "SEO Optimization",
            icon: FiSliders,
            description:
              "Full SEO optimization from website data, blog structure and context, everything to ensure we ar recieving traffic.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Social Media Integration",
            icon: FiGrid,
            description:
              "Consolodate all markting assets in one place. It also allows us to collaborate effectively.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Tailored Sales Funnels & Marketing",
            icon: FiThumbsUp,
            description:
              "Sales funnels conjured to bring leads by the masses. E-mail campaigns to keep customers informed",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("See Deals@cojovi/digital");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Core components">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            At Cojovi Digital Webworx, <Em>we breathe life into your digital dreams,&apos;</Em>.
            transforming ideas into digital masterpieces. From custom websites
            to complete online presence, we are your one-stop digital workshop.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: "gray.900" }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{" "}
              <Text color="cyan.300" display="inline">
                @saas-ui/react
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Solid foundations">
        <Text color="muted" fontSize="lg">
          Whoever said &#39;do not reinvent the wheel&#39;, obviously never throttled
          a liter bike on the highway. At CojoviDigital Webworx, we do not just
          keep up with the times; we lap them. With us, you are not just riding 
          the wave of technology. – you are surfing on the edge of tomorrow. So, 
          buckle up because where we are going we do not need roads just 
          imagination and a flair for the revolutionary
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Cody Viveiros"
        description="The Commander"
        avatar="/static/images/avatar.png"
        gradient={["pink.200", "purple.500"]}
      >
        “At CojoviDigital Webworx, we’re not just tech wizards; we&#39;re your
        personal digital liberators. Our mission? To streamline and automate
        the nitty-gritty, so you can reclaim your calendar. Whether you’re a 
        field maverick or an office virtuoso, we free up your time, so you can 
        focus on what truly matters – crafting your masterpiece or brewing that 
        perfect office coffee.”

      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Elevate Your Game: Seize Those Missed Opportunities!"
      >
        <Text color="muted" fontSize="lg">
          Ready to offload that hefty front and backend workload? CojoviDigital Webworx is here to lighten your load. We tailor a sleek, customized company portal for you, putting essential data at your fingertips, anytime, anywhere. Its time to streamline your workflow and stay ahead, even when you are on the move. Lets transform your business into a lean, mean, opportunity seizing machine!
        </Text>
        <Wrap mt="8">
          {[
            "Streamlining Processes",
            "User-Friendly Interface",
            "Data Management",
            "Customizable Portals",
            "Efficiency Optimization",
            "Seamless Integration",
            "Real-Time Analytics",
            "Accessibility Solutions",
            "Cloud-Based Functionality",
            "Comprehensive Guides",
            "User Onboarding",
            "Interactive Dashboards",
            "Personalized Settings",
            "Strategic Growth Planning",
            "Quality Assurance",
            "Innovative Features",
            "Mobile Responsiveness",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Tailoring Digital Solutions and 
          <Br /> Revolutionizing Your Digital Presence.
        </Heading>
      }
      description={
        <>
          At Cojovi Digital Webworx, we specialize in creating unique, SEO-optimized websites that go beyond standard design. Our services blend modern aesthetics with effective digital strategies, ensuring your brand stands out in the digital realm. <Br /> From impactful web development to crafting engaging sales funnels, we are committed to elevating your online presence.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Custom Web Solutions.",
          icon: FiBox,
          description:
            "Access exclusive, tailor-made digital solutions, ensuring your website remains unique, functional, and always ahead of the curve.",
          variant: "inline",
        },
        {
          title: "Innovative Design Kits.",
          icon: FiLock,
          description:
            "Our comprehensive design kits in modern platforms like WordPress and Shopify include advanced features like secure payment gateways and intuitive user interfaces for rapid deployment.",
          variant: "inline",
        },
        {
          title: "Expert Guidance.",
          icon: FiSearch,
          description:
            "Benefit from our extensive documentation, encompassing best practices, innovative use-cases, and step-by-step guides for effortless website management.",
          variant: "inline",
        },
        {
          title: "User Engagement.",
          icon: FiUserPlus,
          description:
            "Enhance user experience with interactive onboarding tools like guided tours and helpful tips, elevating your website's usability.",
          variant: "inline",
        },
        {
          title: "Adaptive Features.",
          icon: FiFlag,
          description:
            "Seamlessly integrate adaptable features for different business models, offering flexibility and scalability in line with your growth.",
          variant: "inline",
        },
        {
          title: "Conversion Optimization.",
          icon: FiTrendingUp,
          description:
            "Utilize our specialized components for upselling and upgrades, designed to streamline the user journey and boost conversion rates.",
          variant: "inline",
        },
        {
          title: "Versatile Themes.",
          icon: FiToggleLeft,
          description:
            "Choose from a range of themes, including dark mode, providing the perfect aesthetic foundation for any project.",
          variant: "inline",
        },
        {
          title: "Dynamic Content Generation.",
          icon: FiTerminal,
          description:
            "Expand your digital footprint while maintaining brand consistency with our content generators, ensuring quality and uniformity across platforms.",
          variant: "inline",
        },
        {
          title: "Unified Development Approach.",
          icon: FiCode,
          description: (
            <>
              Embrace our monorepo approach for a cohesive and efficient development process, enhancing collaboration and code quality.
            </>
          ),
          variant: "inline",
        },
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        Custom tailored solutions available upon request.
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "Email for customized requests 🚀",
        description:
          '<img src="https://img.shields.io/github/stars/saas-js/saas-ui.svg?style=social&label=Star" />',
        href: "https://cojovi.com",
        action: false,
      },
    },
  };
}
