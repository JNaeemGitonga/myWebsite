'use client'
import ArticleTile from '../ArticleTile/ArticleTile';
import styles from './ArticleTileView.module.css';
import sharedStyles from '../SharedCss/SharedCss.module.css';
import ReturnArrow from '../ReturnArrow/ReturnArrow';

export default function ArticleTileView(): JSX.Element {
  const { viewWrapper } = styles;
  const { sectionHeader } = sharedStyles;
  return (
    <div className={viewWrapper}>
      <h2 className={sectionHeader}>articles</h2>
      {articles.map((a: any) => {
        return <ArticleTile article={a} key={a.title} />;
      })}
      <ReturnArrow />
    </div>
  );
}

const articles = [
  {
    title: 'AWS IAM — Quick Dive/Quick Guide',
    imageUrl: 'https://d2j3yisnywcb30.cloudfront.net/pix/aws-iam.jpeg',
    lengthInMinutes: 6,
    publishedDate: 'May 28, 2023',
    articleUrl: 'https://medium.com/p/bfc198770bb5',
  },
  {
    title: "Are JavaScript's default parameters slowing me down?",
    imageUrl: 'https://d2j3yisnywcb30.cloudfront.net/pix/dont-panic.jpg',
    lengthInMinutes: 3,
    publishedDate: 'Nov 27, 2020',
    articleUrl:
      'https://naeemgtng.medium.com/dont-use-default-parameters-91cde9abde',
  },
  {
    title: "JavaScript's New Sexy",
    imageUrl: 'https://d2j3yisnywcb30.cloudfront.net/pix/js-new.png',
    lengthInMinutes: 5,
    publishedDate: 'Aug 30, 2020',
    articleUrl: 'https://medium.com/p/javascripts-new-sexy-2843b0cf4a06',
  },
  {
    title: 'Explain Servers to a 5 Year Old',
    imageUrl:
      'https://d2j3yisnywcb30.cloudfront.net/pix/kids-eating-spaghetti.jpg',
    lengthInMinutes: 3,
    publishedDate: 'Jul 25, 2020',
    articleUrl:
      'https://medium.com/p/explain-servers-to-a-5-year-old-c59f8a4a2fac',
  },
  {
    title: 'Deploy GoLambda With MongoDB and AWS SAM (Part 3)',
    imageUrl:
      'https://d2j3yisnywcb30.cloudfront.net/pix/SAM-Golang-MongoDB.png',
    lengthInMinutes: 11,
    publishedDate: 'Dec 29, 2019',
    articleUrl:
      'https://betterprogramming.pub/sam-deploys-golambda-w-mongodb-a03cd97bae45?source=friends_link&sk=21ab91d7cfdf2242928e9de61fab4f93',
  },
  {
    title: 'XML, read, send, write: Javascript front to Express/Node.js back',
    imageUrl: 'https://d2j3yisnywcb30.cloudfront.net/pix/computer-genius.jpg',
    lengthInMinutes: 4,
    publishedDate: 'Sep 2, 2019',
    articleUrl:
      'https://medium.com/swlh/xml-read-send-write-javascript-front-to-node-back-167df21c98df?source=friends_link&sk=0a7a38647a21182748516408a15b24ba',
  },
  {
    title: 'Micro Services Part II: AWS EC2 Linux AMIs',
    imageUrl: 'https://d2j3yisnywcb30.cloudfront.net/pix/ec2-linux.jpg',
    lengthInMinutes: 4,
    publishedDate: 'Mar 16, 2019',
    articleUrl:
      'https://faun.pub/micro-services-part-ii-aws-ec2-linux-amis-4e5e644aa43a?source=friends_link&sk=0d641edad9f092218a1e5543c7cf1d82',
  },
  {
    title: 'Micro Services Part I: Node, Docker, and Docker Compose',
    imageUrl: 'https://d2j3yisnywcb30.cloudfront.net/pix/docker-node.png',
    lengthInMinutes: 5,
    publishedDate: 'Mar 9, 2019',
    articleUrl: 'https://medium.com/p/micro-services-part-i-d9059d1a8ac0',
  },
  {
    title: 'React Context-Api and Lazy-loading',
    imageUrl: 'https://d2j3yisnywcb30.cloudfront.net/pix/react-context.png',
    lengthInMinutes: 6,
    publishedDate: 'Dec 26, 2018',
    articleUrl:
      'https://medium.com/swlh/react-context-api-and-lazy-loading-4c4b0a48f696?source=friends_link&sk=37e076874f86e49dc260d97b92025734',
  },
];
