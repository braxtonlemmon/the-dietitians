import type {GatsbyConfig} from 'gatsby'
const dotenv = require('dotenv')

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Komplete Nutrition`,
    description:
      'Nutrition counseling, medical nutrition therapy, diabetes education',
    siteUrl: `https://www.komplete-nutrition.com`,
    image: '/favicon.png',
    keywords: `nutrition, diabetes, body image, disordered eating, dietitian, registered dietitian, weight loss, outpatient, meal plan, food allergies, intuitive eating, ozempic, wyngovy, semaglutide, glp-1, mounjaro, rysbelsus, phentermine, weight loss, weight loss drugs, keto, diet, intermittent fasting, bariatric surger evaluations, celiac, chronic kidney disease, constipation, diarrhea, stomach pain, crohn's disease, disordered eating, ehlers danlos syndrome, fatty liver disease, cirrhosis, gastroparesis, IBS, POTS, SIBO, sucrase isomaltase enzyme deficiencies, superior mesenteric artery syndrome, ulcerative colitis, radically open dialectical behavior therapy, acceptance commitment therapy, body image, vertical sleeve gastrectomy, roux-en-Y gastric bypass, billopancreatic diversion, billopancreatic diversion with duodenal switch, adjustable gastric band, gastric sleeve, gastric bypass, trauma, medical nutrition therapy, registered dietitian, cognitive behavior therapy, dialectical behavior therapy, borderline personality disorder, bipolar disorder, enteral feeding, tube feeding, malnutrition, PICA, night eating disorder, rumination, type 2 diabetes, type 1 diabetes, outpatient, bad body image, blood sugar, insulin, continuous glucose monitor, gluten free, hosimotos disease, dairy free, vegetarian, vegan, food allergies, intuitive eating, health at every size, meal plan `,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Quicksand`,
            file: `https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        token: process.env.GATSBY_SANITY_TOKEN,
        overlayDrafts: true,
      },
    },
  ],
}

export default config
