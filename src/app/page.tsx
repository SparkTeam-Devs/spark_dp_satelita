import Image from "next/image";
import Button from "../components/UI/primitives/Button/Button";
import StyledHeading from "../components/UI/primitives/StyledHeading/StyledHeading";
import { AnonymousIcon, FireIcon, GalleryMinimalistic, LikeIcon, MoneyIcon, RocketIcon, UsersIcon } from "../components/UI/svg";
import './page.scss'
import ServicesImg from "../shared/data/ServicesImg";
import Question from "../components/UI/primitives/Accordion/Question";
import Vector from '@/public/Image/Services/LightServices.png'
import GridVector2 from '@/public/Image/Vector/GridVector2.png'
import GridVector from '@/public/Image/Vector/GridVector.png'
import LightMain from '@/public/Image/Main/LightMain.png'
import ReferralVectorContainer from "@/public/Image/Referral/ReferralVectorContainer.png"
import ReferralImage from "@/public/Image/Referral/ReferralImage.png"
import Slider from "../components/Slider/Slider";
import VerticalSlider from "../components/VerticalSlide/VerticalSlide";




export default function Home() {
  return (
    <div className="main container" >
      <section className="main__banner">
        <Image className="main__banner-vector" src={LightMain} alt="banner" />
        <StyledHeading>AI Undresser</StyledHeading>
        <h1 className="main__banner-title">Undress your Girl with Revolutionary AI</h1>
        <p className="main__banner-description">Discover AIUndresser: Create stunning images of hot nude women with advanced undress AI.</p>
        <Button size="medium" color="main" iconSvg={<RocketIcon />}>Launch up</Button>
        <div className="main__banner-video">
          <Image className="main__banner-video-vector" src={GridVector} alt="vector" />
          <video autoPlay loop muted playsInline>
            <source src="/videos/Video1.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      <section className="main__table-contents">
          <div className="main__table-contents-wrapper">
            <p className="main__table-contents-title">Table of Contents</p>
            <div className="main__table-contents-list">
              <Button>Home</Button>
              <Button>Why choose us</Button>
              <Button>About AI Tool</Button>
              <Button>Pricing Plans</Button>
              <Button>Result from our service</Button>
              <Button>Discover Modes</Button>
              <Button>Referral Program</Button>
              <Button>Reviews</Button>
              <Button>FAQ</Button>
            </div>
          </div>
      </section>
      <section className="main__choose">
        <Image src={GridVector2} alt="vector" className="main__choose-vector" />
        <div className="main__choose-text">
          <StyledHeading>Why choose us</StyledHeading>
          <h3 className="main__choose-title">With our app, you can watch live broadcasts and receive countless statistics, tips,</h3>
          <div className="main__choose-list">
            <div className="main__choose-item">
              <p className="main__choose-item-title">100k+</p>
              <div className="main__choose-item-description">
                <UsersIcon />
                <p className="main__choose-item-description-text">Users every day</p>
              </div>
            </div>
            <div className="main__choose-item">
              <p className="main__choose-item-title">500k+</p>
              <div className="main__choose-item-description">
                <GalleryMinimalistic />
                <p className="main__choose-item-description-text">Generated photos</p>
              </div>
            </div>
            <div className="main__choose-item">
              <p className="main__choose-item-title">100k+</p>
              <div className="main__choose-item-description">
                <MoneyIcon />
                <p className="main__choose-item-description-text">Money withdrawn</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main__choose-video">
          <div className="main__choose-video-wrapper">
            <video className="main__choose-video-item" autoPlay loop muted playsInline>
              <source src="/videos/Video2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <div className="main__line"/>
      <section className="main__how-it-works">
        <div className="main__how-it-works-heading"><StyledHeading>About AI Tool</StyledHeading></div>
        <h2 className="main__how-it-works-title">How It Works?</h2>
        <p className="main__how-it-works-description">Technologies allow you to use a modern development called AI Undresser. </p>
        <div>
          <VerticalSlider />
        </div>
        <div className="main__how-it-works-info">
          <div className="main__how-it-works-item">
            <div className="main__how-it-works-item-icon icon"><AnonymousIcon /></div>
            <p className="main__how-it-works-item-title">Secure anonymous registration</p>
            <p className="main__how-it-works-item-description">With its help, you can realistically change photos and look at the most intimate. The program works automatically and generates photos based on the images you provided.</p>
          </div>
          <div className="main__how-it-works-item">
            <div className="main__how-it-works-item-icon icon"><LikeIcon /></div>
            <p className="main__how-it-works-item-title">Trustworthy the first deepnude app</p>
            <p className="main__how-it-works-item-description">With our app, you can watch live broadcasts and receive countless statistics, tips, and even match predictions which will help you place better bets and improve your odds of winning.</p>
          </div>
        </div>
      </section>
      <section className="main__gallery">
        <StyledHeading>Gallery</StyledHeading>
        <h2 className="main__gallery-title">Result from our service</h2>
        <p className="main__gallery-description">To use Undress AI, you will need to upload a photo. You can do it for free first. Then, just wait a little and follow the several steps.</p>
        <div className="main__gallery-wrapper">
          <div className="main__gallery-item"></div>
          <div className="main__gallery-item"></div>
          <div className="main__gallery-item"></div>
          <div className="main__gallery-item"></div>
          <div className="main__gallery-item"></div>
          <div className="main__gallery-item"></div>
          <div className="main__gallery-item"></div>
          <div className="main__gallery-item"></div>
        </div>
      </section>
      <section className="main__services">
        <div className="main__services-text">
          <div className="main__services-wrapper">
            <StyledHeading>Our Services</StyledHeading>
            <h3 className="main__services-title">Discover modes</h3>
          </div>
          <div className="main__services-wrapper">
            <p className="main__services-description">Besides main Undress Mode, there are several new modes. Don't miss the opportunity to try each one.</p>
          </div>
        </div>
        <div className="main__services-content">
          <Image className="main__services-vector" src={Vector} alt="vector"/>
          <div className="main__services-item main__services-item--1">
            <h4 className="main__services-item-title">Undress</h4>
            <p className="main__services-item-description">Undress any image in one click, and get the best result</p>
            <div className="main__services-item-images">
              <Image className="main__services-item-images-img" src={ServicesImg[0].img1} alt={ServicesImg[0].alt1} />
              <Image className="main__services-item-images-img" src={ServicesImg[0].img2} alt={ServicesImg[0].alt2} />
            </div>
          </div>
          <div className="main__services-item main__services-item--2">
            <h4 className="main__services-item-title">Sex pose</h4>
            <p className="main__services-item-description">Swap faces any images, and enjoy perfect results</p>
            <div className="main__services-item-images">
              <Image className="main__services-item-images-img" src={ServicesImg[1].img1} alt={ServicesImg[1].alt1} />
              <Image className="main__services-item-images-img" src={ServicesImg[1].img2} alt={ServicesImg[1].alt2} />
            </div>
          </div>
          <div className="main__services-item main__services-item--3">
            <h4 className="main__services-item-title">Lingerie mode</h4>
            <p className="main__services-item-description">Swap faces any images, and enjoy perfect results</p>
            <div className="main__services-item-images">
              <Image className="main__services-item-images-img" src={ServicesImg[2].img1} alt={ServicesImg[2].alt1} />
              <Image className="main__services-item-images-img" src={ServicesImg[2].img2} alt={ServicesImg[2].alt2} />
            </div>
          </div>
          <div className="main__services-item main__services-item--4">
            <h4 className="main__services-item-title">Men&#39;s undress</h4>
            <p className="main__services-item-description">Swap faces any images, and enjoy perfect results</p>
            <div className="main__services-item-images">
              <Image className="main__services-item-images-img" src={ServicesImg[3].img1} alt={ServicesImg[3].alt1} />
              <Image className="main__services-item-images-img" src={ServicesImg[3].img2} alt={ServicesImg[3].alt2} />
            </div>
          </div>
        </div>
      </section>
      <section className="main__reviews">
        <Image className="main__reviews-vector" src={GridVector2} alt="vector" />
        <div className="main__reviews-heading"><StyledHeading>Our Users Feedback</StyledHeading></div>
        <div className="main__reviews-slider">
          <Slider />
        </div>
        <div className="main__reviews-banner">
          <Image className="main__reviews-banner-vector" src={ReferralVectorContainer} alt="vector" />
          <Image className="main__reviews-banner-image" src={ReferralImage} alt="vector" />
          <div className="main__reviews-banner-text">
            <div className="main__reviews-banner-heading">
              <FireIcon />
              <p className="main__reviews-banner-heading-text">Referral Program</p>
            </div>
            <h2 className="main__reviews-banner-title">Undress for free</h2>
            <p className="main__reviews-banner-description">For each friend you invite you get free credits that can be used for Undress AI!</p>
          </div>
          <div className="main__reviews-banner-buttons">
            <Button size="medium" color="main">Invite friends</Button>
            <span>1 invitation: 2 credits</span>
          </div>
        </div>
      </section>
      <section className="main__faq">
        <div className="main__faq-text">
          <StyledHeading>FAQ</StyledHeading>
          <h3 className="main__faq-title">Frequently Asked Questions</h3>
          <Button size="medium">UNDRESS RIGHT NOW</Button>
        </div>
        <div className="main__faq-accordion">
          <Question title="Is the AI face swap tool free to use?" info="Yes! We offer a free AI face swap porn option so you can test the tool before upgrading to premium features." />
          <Question title="How does the AI face swap NSFW tool work?" info="Simply upload a photo or video, choose the AI face swap NSFW mode, and let the AI process the swap in seconds. The result is a high-quality, realistic transformation." />
          <Question title="Can I swap multiple faces at once?" info="Absolutely! Our multiple face swap AI feature allows you to swap multiple faces in a single image or video for a more dynamic experience." />
          <Question title="Is my data secure when using this tool?" info="Yes, privacy is a priority. Our tool does not store or share any uploaded content, ensuring a safe and anonymous experience when using AI porn face swap free." />
          <Question title="What is the best AI for NSFW face swaps?" info="Our tool, including Pica AI face swap and Remaker AI face swap, delivers industry-leading accuracy, making it one of the best NSFW AI face swap solutions available." />
          <Question title="Are there any limitations on the number of photos I can upload? " info="The number of photos you can upload depends on your subscription plan. Free AI face swap users may have a limited number of uploads per day, while premium users enjoy unlimited access to AI face swap NSFW features. Check our pricing plans for more details! " />
          <Question title="How do I cancel my subscription?" info="You can cancel your subscription anytime by going to the account settings on our platform. Look for the subscription or billing section, and select cancel subscription to stop future payments. You will still have access to premium AI face swap NSFW features until the end of your current billing cycle. If you need assistance, our support team is happy to help!" />
        </div>
      </section>
    </div>
  );
}
